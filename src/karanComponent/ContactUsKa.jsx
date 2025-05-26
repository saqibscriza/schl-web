// import MenuPage from "../components/MenuPage";
import MenuPage from "../karanComponent/MenuPageKa";

import address from "../assets/address.png";
import hours from "../assets/hours.png";
import contact from "../assets/contact.png";
import { Button, styled } from "@mui/material";
import insta from "../assets/instaLink.png";
import photo from "../assets/photoLink.png";
import twitter from "../assets/twitterLink.png";
import facebook from "../assets/facebookLink.png";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
// import FooterPart from "../components/footer/FooterPart";
import FooterPart from "../karanComponent/footer/FooterPartKa";
import design4 from '../assets/design5.png'

const contatDetails = [
  {
    image: address,
    title: "Our Address",
    subtitle:
      "Logix Park (Supreme Work), A-4-5, A Block, Sector 16, Noida, UP - 201301",
  },
  {
    image: hours,
    title: "Hours of Operation",
    subtitle: "Mon - Fri: 10.00 am to 7.00pm",
  },
  { image: contact, title: "Contact", subtitle: "+91 - 9116011899" },
];

const websiteLinks = [
  { imgSrc: insta, url: "https://instagram.com" },
  { imgSrc: photo, url: "https://photos.google.com" },
  { imgSrc: facebook, url: "https://facebook.com" },
  { imgSrc: twitter, url: "https://twitter.com" },
];
const ContactUs = ({}) => {
  return (
    <ContactUsMainContainer>
      <MenuPage title="Contact Us" subtitle="Home" />
      <SecondSection>
        <ContactDetailsSection>
          <DetailsLeftSection>
            <GetInTouch>Get in Touch</GetInTouch>
            <DetailsText>
              Contact us for innovative solutions, expert support, and seamless
              collaboration.
            </DetailsText>
            <ContactDetails>
              {contatDetails &&
                contatDetails.map((curDetail, index) => (
                  <ContactDetailsOne>
                    <img src={curDetail.image} alt="" />
                    <ContactFirstDetails>
                      <CurDetailTitle>{curDetail.title}</CurDetailTitle>
                      <CurDetailSubTitle>
                        {curDetail.subtitle}
                      </CurDetailSubTitle>
                    </ContactFirstDetails>
                  </ContactDetailsOne>
                ))}
            </ContactDetails>
            <LeftLastSection>
              <CustomerCareButton startIcon={<ArrowDownwardOutlinedIcon />}>
                Customer Care
              </CustomerCareButton>
              <OuterLinks>
                {websiteLinks &&
                  websiteLinks.map((curLink, index) => (
                    <a
                      href={curLink.url}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={curLink.imgSrc} alt="" />
                    </a>
                  ))}
              </OuterLinks>
            </LeftLastSection>
          </DetailsLeftSection>
          <ContactDetailsRightSection>
            <RightSectionForm action="">
              <FormInputFields>
                <FormLabelFields htmlFor="name">Name *</FormLabelFields>
                <FormInput
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                />
              </FormInputFields>
              <FormInputFields>
                <FormLabelFields htmlFor="name">
                  Email Address *
                </FormLabelFields>
                <FormInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                />
              </FormInputFields>
              <FormInputFields>
                <FormLabelFields htmlFor="name">Phone *</FormLabelFields>
                <FormInput
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Enter phone"
                />
              </FormInputFields>
              <FormInputFields>
                <FormLabelFields htmlFor="subject">Subject *</FormLabelFields>
                <FormInput
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter subject"
                />
              </FormInputFields>
              <FormInputFields>
                <FormLabelFields htmlFor="message">Message</FormLabelFields>
                <FormTextArea
                  name="message"
                  id="message"
                  placeholder="Enter message"
                />
              </FormInputFields>
              <SubmitButton>Submit</SubmitButton>
            </RightSectionForm>
          </ContactDetailsRightSection>
        </ContactDetailsSection>
        {/* <div>
          <img src={design5} alt="" />
        </div> */}
      </SecondSection>
      <FooterPart/>
    </ContactUsMainContainer>
  );
};

const ContactUsMainContainer = styled("div")`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: 'Sora';


  @media (max-width: 1100px) {
 

  }

  @media (max-width: 600px) {

  }
`;
const DetailsText = styled("p")`
  color: #333931;
  font: 400 17px "Sora";

    @media (max-width: 1100px) {
    font: 400 24px "Sora";
  }

  @media (max-width: 600px) {
    font: 400 22px "Sora";

  }
`;
const CurDetailSubTitle = styled("p")`
  color: #333931;
  font: 700 19px "Epilogue";
  line-height:32px;

   @media (max-width: 1100px) {
    font: 400 20px "Sora";
  }

  @media (max-width: 600px) {
    font: 400 18px "Sora";
  }
`;
const CurDetailTitle = styled("h4")`
  font: 600 15px "Epilogue";
  color: #0e2a46;
  line-height: 22px;


   @media (max-width: 1100px) {
    font: 600 28px "Sora";
  }

  @media (max-width: 600px) {
    font: 600 23px "Epilogue";
  }
`;
const ContactDetailsOne = styled("div")`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 10px;

   @media (max-width: 1100px) {
   gap: 28px;
  }

  @media (max-width: 600px) {
    gap: 25px;
  }
`;
const ContactFirstDetails = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;

   @media (max-width: 1100px) {
   gap: 15px;
  }


  @media (max-width: 600px) {
    gap: 10px;
  }
`;
const GetInTouch = styled("h2")`
  color: #0e2a46;
  font: 700 40px "Epilogue";

   @media (max-width: 1100px) {
    font: 700 30px "Epilogue";
  }


  @media (max-width: 600px) {
    font: 700 20px "Epilogue";
  }
`;
const ContactDetails = styled("div")`
  width: 100%;
  height: auto;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 25px;

   @media (max-width: 1100px) {
  height: 400px;
  }


  @media (max-width: 600px) {
    height: auto;
  }
`;
const DetailsLeftSection = styled("div")`
  width: 100%;
  height: 100%;


  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;

 @media (max-width: 1100px) {
    gap: 30px;
  }

  
  @media (max-width: 600px) {
    gap: 25px;
  }
`;

const ContactDetailsSection = styled("div")`
  width: 1100px;
  height: auto;

  background: linear-gradient(to bottom left, #f2f2f2 75%, #04857a 20%);
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width:1100px){

    margin: 20px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to top left, #04857a 20%, #f2f2f2 75%);
  }

  @media (max-width: 600px) {
  width: 900px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to top left, #04857a 20%, #f2f2f2 75%);
  }
`;
const LeftLastSection = styled("div")`
  width: 100%;
  display: flex;
  max-width: 100%;

  justify-content: space-between;
  align-items: center;
`;
const SecondSection = styled("div")`
  width: 98%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;


  background-image: url(${design4});
  background-repeat: no-repeat;
  background-position: right 3rem;

 @media (max-width:1100px) {
    width:100vw ;
   background-image:none;


  }

  @media (max-width: 600px) {

      width:100vw !important;
  }


  @media (max-width: 400px) {


}
   
`;
const CustomerCareButton = styled(Button)`
  text-transform: capitalize;
  font: 400 13px "Sora";
  color: #ffffff;

    @media (max-width: 1100px) {
    font: 400 22px "Sora";
    color: #000000;
  }

  @media (max-width: 600px) {
    font: 400 16px "Sora";
    color: #000000;
  }
`;
const OuterLinks = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const ContactDetailsRightSection = styled("div")`
  width: 100%;
  height: 100%;
  max-width: 100%;

  padding: 50px;
`;
const RightSectionForm = styled("form")`
  width: 100%;
  height: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

   @media (max-width: 1100px) {
    gap: 45px;
  }

  @media (max-width: 600px) {
    gap: 32px;
  }
`;
const FormInputFields = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;

   @media (max-width: 1100px) {
    gap: 24px;
  }

  @media (max-width: 600px) {
    gap: 16px;
  }
`;
const FormLabelFields = styled("label")`
  font: 400 18px "Epilogue";
  color: #0e2a46;

   @media (max-width: 1100px) {
    font: 500 25px "Epilogue";
  }

  @media (max-width: 600px) {
    font: 500 23px "Epilogue";
  }
`;

const FormInput = styled("input")`
  font: 400 14px "Sora";
  color: #4d5756;
  background-color: #ffffff;
  height: 48px;
  border: none;
  border-radius: 5px;
  padding: 8px;

    @media (max-width: 1100px) {
    font: 400 15px "Sora";
    height: 70px;
  }

  @media (max-width: 600px) {
    font: 400 15px "Sora";
    height: 70px;
  }
`;
const FormTextArea = styled("textarea")`
  font: 400 14px "Sora";
  color: #4d5756;
  background-color: #ffffff;
  height: 120px;
  border: none;
  border-radius: 5px;
  padding: 8px;

   @media (max-width: 1100px) {
    font: 400 24px "Sora";
    height: 220px;
 
  }

  @media (max-width: 600px) {
    font: 400 20px "Sora";
    height: 190px;
  }
`;
const SubmitButton = styled("button")`
  font: 400 15px "Sora";
  color: #ffffff;
  background-color: #04857a;
  width: 193px;
  height: 50px;
  border: none;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer !important;

   @media (max-width: 1100px) {
    font: 400 24px "Sora";
    width: 40%;
    height: 70px;
  }

  @media (max-width: 600px) {
    font: 400 24px "Sora";
    width: 40%;
    height: 70px;
  }
`;

export default ContactUs;
