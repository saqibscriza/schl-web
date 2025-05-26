import FreeDemoButton from "../FreeDemoButton";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YoutubeSearchedForOutlinedIcon from "@mui/icons-material/YoutubeSearchedForOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { List, ListItem, styled, useMediaQuery } from "@mui/material";
import edu2All from "../../assets/Group 1.svg";

import { NavLink } from "react-router-dom";
import FooterPart from "./FooterPart";

const PopulerLogos = [
  { Icon: FacebookOutlinedIcon, url: "https://facebook.com" },
  { Icon: TwitterIcon, url: "https://twitter.com" },
  { Icon: YoutubeSearchedForOutlinedIcon, url: "https://youtube.com" },
  { Icon: FlightTakeoffOutlinedIcon, url: "https://instagram.com" }, // Example URL for Instagram
];

const companyDetails = [
  {
    Icon: LocationOnOutlinedIcon,
    title: "Address",
    subTitle: "A-4-5,A block, Sector 16 ,Noida",
  },
  { Icon: PhoneOutlinedIcon, title: "Phone", subTitle: "(+ 91) 9116011899" },
  {
    Icon: ModeCommentOutlinedIcon,
    title: "Email",
    subTitle: "sales@scriza.in",
  },
];

const footerMenuItems = [
  { Icon: ArrowRightOutlinedIcon, item: "Home" },
  { Icon: ArrowRightOutlinedIcon, item: "About" },
  { Icon: ArrowRightOutlinedIcon, item: "FaQ" },
  { Icon: ArrowRightOutlinedIcon, item: "Contact" },
];

const Footer = () => {
  const MobileLogs = useMediaQuery('(max-width:600px)');
  const TabletLogs = useMediaQuery('(max-width:1100px)');
  return (
    <FooterMainContainer>


      <FooterSectionTwo>
        {companyDetails &&
          companyDetails.map((curDetail, index) => {
            return (
              <FooterDetailItem key={index}>
                <curDetail.Icon
                  sx={{
                    width: "40px",
                    height: "40px",
                    padding: "8px",
                    borderRadius: "50%",
                    border: "1px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <DetailItems>
                  <Title>{curDetail.title}</Title>
                  <SubTitle>{curDetail.subTitle}</SubTitle>
                </DetailItems>
              </FooterDetailItem>
            );
          })}
      </FooterSectionTwo>

      <FooterThirdSection>
        <ThirdSectionContainer>
          <ThirdSectionLeft>
            <EduAllImage src={edu2All} alt="" />{" "}
            <ThirdSectionDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim
              sed officia?
            </ThirdSectionDescription>
            <Logos>
              {PopulerLogos &&
                PopulerLogos.map((CurLogo, index) => {
                  return (
                    <CurLogos key={index}>
                      {/* Wrap the logo in an anchor tag to make it clickable */}
                      <a
                        style={{ color: "white" }}
                        href={CurLogo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CurLogo.Icon fontSize={MobileLogs ? 'large' : TabletLogs ? "large" : 'medium'} />
                      </a>
                    </CurLogos>
                  );
                })}
            </Logos>
          </ThirdSectionLeft>

          <ThirdMiddleSection>
            <OurServices>Our Services :</OurServices>
            <ListStyle>
              {footerMenuItems &&
                footerMenuItems.map((curItem, index) => (
                  <ListItemStyle
                    component={NavLink}
                    to={`/${curItem.item.toLowerCase()}`}
                    key={index}
                  >
                    {curItem.Icon && <curItem.Icon />}
                    {curItem.item}
                  </ListItemStyle>
                ))}
            </ListStyle>
          </ThirdMiddleSection>

          <ThirdRightSection>
            <Subscribe>Subscribe</Subscribe>
            <EmailInput
              placeholder="Enter your email :"
              type="text"
              name=""
              id=""
            />
            <SubscribeButton>Subscribe Now</SubscribeButton>
          </ThirdRightSection>
        </ThirdSectionContainer>
      </FooterThirdSection>
      <FooterFourthSection>
        <CopyRightText>
          Copyright © 2025 <CopyRightSpan>edu2all</CopyRightSpan> || All Rights
          Reserved
        </CopyRightText>
      </FooterFourthSection>
    </FooterMainContainer>
  );
};

export default Footer;

const ListStyle = styled(List)`
  display: flex;
  flex-direction: column;

   @media (max-width:1100px){
  flex-direction: row;
  }

  @media (max-width:600px){
  flex-direction: row;
  }
`;
const ThirdRightSection = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 20%;

   @media (max-width:1100px){
width:90%;


  gap: 26px;

  }

    @media (max-width:600px){
width:80%;
width:90%;


  gap: 22px;

  }

`;

const ListItemStyle = styled(ListItem)`
  color: #ffffff;
  font: 400 15px "Sora";

    @media (max-width:1100px){
 font: 400 30px "Sora";
  }

    @media (max-width:600px){
 font: 400 24px "Sora";
  }
`;

const FooterMainContainer = styled("div")`
  width: 100vw;
  height: auto;
 

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 3; /* Adjusted to a valid range (0 to 1) */
  display: flex;
  flex-direction:column;
  


@media(max-width:1400px){
width:110vw;
margin:50px;


}

@media(max-width:1100px){
width:200vw;
display:flex;
flex-direction:column;
height:auto;
margin:0
}

@media(max-width:600px){
width:220vw;
display:flex;
flex-direction:column;
height:auto;
margin:0
}

`;


const FooterSectionTwo = styled("div")`
  width: 100%;
  height: 135px;
  background: linear-gradient(rgba(4, 133, 122, 0.4), rgba(4, 133, 122, 0.4)),
    url("https://s3-alpha-sig.figma.com/img/cd65/c8ff/d8216c22629d3acbe1aa65fc980aea4d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LpBP0u5jVz3YzHvXDUJUHwDrD1dOiF-cXSu6ER4RgB5ws0hFD9NDOSnI2Ur16EF-CuTLW4V2u0XPDokoRbAMltzojJZw0fTZyL2BX3GbY46b3b7cg2bxzKKLStI62Rh5jFmvpmPp6th-zNqU4PSeVmLrAfZ4H~B5pzTqSmxoAK93mzBB~zIQ~t94Sz0v9EVisxM8yWCmF9FTxGdJy~pVw1L~GJqEDLHs0MG~t12wBZF3iqmx8~U7z7tGLyGA0BMw3YeifYmlxL7QZ5y6wWfCjIIqUjDeTeso8fXLTMd9yD3ko8oXqAjsOD9WwxuyMUCu4xZ1O8Xo8MyPofRAyyWhog__");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 500 14px "Sora";
  color: #ffffff;

   @media(max-width:1100px){
height:auto;
width:100%;
display:flex;
flex-direction:column;

    }

 @media(max-width:600px){
height:auto;
width:100%;
display:flex;
flex-direction:column;

    }

`;

const FooterDetailItem = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  border: 0.1px solid white;
  padding-left: 80px;


  @media (max-width:1100px){
    height:150px;
  
    }

  @media (max-width:600px){
  height:120px;

  }
`;
const Title = styled("div")`
  color: #2fc7a1;

  font:400 15px 'Sora';

    @media (max-width:1100px){
font-size:30px;
  }
  @media (max-width:600px){
font-size:25px;
  }
`;

const SubTitle = styled("div")`

  font:600 18px 'Sora';
  color:#FFFFFF;

 @media (max-width:1100px){
font-size:24px;
  }

 @media (max-width:600px){
font-size:20px;
  }
`;

const DetailItems = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const FooterThirdSection = styled("div")`
  width: 100%;
  height: 260px;
  display: grid;
  place-items: center;
  background: linear-gradient(rgba(4, 133, 122, 0.4), rgba(4, 133, 122, 0.4)),
    url("https://s3-alpha-sig.figma.com/img/cd65/c8ff/d8216c22629d3acbe1aa65fc980aea4d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LpBP0u5jVz3YzHvXDUJUHwDrD1dOiF-cXSu6ER4RgB5ws0hFD9NDOSnI2Ur16EF-CuTLW4V2u0XPDokoRbAMltzojJZw0fTZyL2BX3GbY46b3b7cg2bxzKKLStI62Rh5jFmvpmPp6th-zNqU4PSeVmLrAfZ4H~B5pzTqSmxoAK93mzBB~zIQ~t94Sz0v9EVisxM8yWCmF9FTxGdJy~pVw1L~GJqEDLHs0MG~t12wBZF3iqmx8~U7z7tGLyGA0BMw3YeifYmlxL7QZ5y6wWfCjIIqUjDeTeso8fXLTMd9yD3ko8oXqAjsOD9WwxuyMUCu4xZ1O8Xo8MyPofRAyyWhog__");
  background-size: cover;
  background-repeat: no-repeat;
    @media (max-width:1100px){
  height:auto;
    width: 100%;
  display:flex;
  justify-content:start;
  align-items:start;
  }

   @media (max-width:600px){
  height:auto;
    width: 100%;
  display:flex;
  justify-content:start;
  align-items:start;
  }

 
`;
const ThirdSectionContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: 150px;

    @media (max-width:1100px){
  height:auto;
    width: 100%;
  display:flex;
  margin:0;
  flex-direction:column;
  gap:50px;
  padding:30px;

  }

  @media (max-width:600px){
  height:auto;
  width: 100%;
  display:flex;
  margin:0;
  flex-direction:column;
  gap:50px;
  padding:30px;
  }
`;

const ThirdSectionLeft = styled("div")`
  width: 28%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: white;


  @media (max-width:1100px){
    width:100%;
    height:auto;
      width: 100%;
    display:flex;
      gap: 16px;
    flex-direction:column;
  padding-left:50px;
    }

  @media (max-width:600px){
  width:100%;
  height:auto;
  width: 100%;
  display:flex;
  flex-direction:column;
  padding-left:50px;
  }
`;
const EduAllImage = styled("img")`
  width: 162px;
  height: 79.18px;

   @media (max-width:1100px){
  width:200px;
  height:120px
  }

   @media (max-width:600px){
  width:200px;
  height:120px
  }
`;
const ThirdSectionDescription = styled("p")`
  font: 400 14px "Sora";

    @media (max-width:1100px){
font: 400 20px "Sora";
  }

  @media (max-width:600px){
font: 400 20px "Sora";
  }
`;
const Logos = styled("div")`
  width: 70%;
  display: flex;
  gap: 20px;

    @media (max-width:1100px){
  gap: 20px;
  }

  @media (max-width:600px){
  gap: 20px;
  }
`;
const ThirdMiddleSection = styled("div")`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  color: white;
  margin-left: 20px;

   @media (max-width:1100px){
     width: 92%;
     height:auto;
  gap: 30px;
  }

   @media (max-width:600px){
     width: 83%;
     height:auto;
  gap: 30px;
  }
`;
const OurServices = styled("div")`
  color: #ffffff;
  font: 700 20px "Epilogue";

  @media (max-width:1100px){
     font: 700 50px "Epilogue";
  }

   @media (max-width:600px){
     font: 700 35px "Epilogue";
  }
`;
const CurLogos = styled("div")`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 20%;
  background-color: #04857a;

   @media(max-width:1100px){
  height: 120px;
   width: 120px;
   border-radius:100%
  }

  @media(max-width:600px){
  height: 80px;
   width: 100px;
   border-radius:100%
  }
`;
const Subscribe = styled("p")`
  font: 700 22px "Epilogue";
  color: #ffffff;

   @media(max-width:1100px){
 font: 700 35px "Epilogue";
  }

   @media(max-width:600px){
 font: 700 35px "Epilogue";
  }
`;
const EmailInput = styled("input")`
  height: 56px;
  background-color: #ffffff;
  border: none;
  font: 400 14px "Sora";
  border-radius: 5px;

  color: #04857a;
  padding: 8px;
  @media(max-width:1100px){
    height: 80px;
      font: 400 20px "Sora";
     }
  @media(max-width:600px){
    height: 80px;
      font: 400 20px "Sora";
     }
`;
const SubscribeButton = styled("button")`
  width: 184px;
  height: 55px;
  text-transform: uppercase;
  background-color: #086159;
  font: 600 15px "Sora";
  color: #ffffff;
  border: none;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

    @media(max-width:1100px){
 width: 50%;
  height: 60px;
    font: 600 20px "Sora";
     }

    @media(max-width:600px){
 width: 50%;
  height: 60px;
    font: 600 20px "Sora";
     }
`;
const CopyRightText = styled("p")`
  font: 400 17px "Sora";
  color: #ffffff;
`;
const FooterFourthSection = styled("div")`
  width: 100%;
  height: 70px;
  background-color: #086159;
  display: grid;
  place-items: center;

     @media(max-width:1100px){
      height:80px;

   @media(max-width:600px){
      height:80px;

     }
    }
`;
const CopyRightSpan = styled("span")`
  color: #2fc7a1;
`;
