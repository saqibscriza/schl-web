import FreeDemoButton from '../FreeDemoButtonKa'
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { styled } from "@mui/material";
import footerImage from '../../assets/footerImage.jpeg'

import wavyLine from '../../assets/wavyLine.png'
import halfCircle from '../../assets/halfCircle.png'
import waves from '../../assets/waves.png'
import loading from '../../assets/loading.png'

const FooterPart = () => {
   
  return (

    <FooterSectionOne>
    <FirstImageSection>
   <img src={halfCircle} />
   </FirstImageSection>
   <SectionOneContent>
   <JoinNow>Join Now</JoinNow>
   <GetInTouch>Get in Touch with us now!</GetInTouch>
   <CallNow>Call Now - + 91 911601899</CallNow>
   <FreeDemoSection>
   <FreeDemoButton
   content="Book a Free Demo"
   endIcon={<ArrowForwardOutlinedIcon />}
   />
   <LoadingImageSection src={loading} />
   </FreeDemoSection>
   </SectionOneContent>
   <LastImageSection>
   <img src={wavyLine}/>
   <img style={{marginTop:"100px"}} src={waves}/>
   </LastImageSection>
   </FooterSectionOne>
  )
}

export default FooterPart

const FooterSectionOne = styled("div")`
width:100vw;
height:auto;
display:flex;

align-items:center;
padding:23px;
  background: linear-gradient(rgba(14, 42, 70, 0.7), rgba(14, 42, 70, 0.7)),
    url(${footerImage});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width:1400px){
    width:100vw;

    }

  @media(max-width:1100px){
  width:100vw;

  display:flex;
  flex-direction:column;
  height:auto;
  padding:25px

  }

  @media(max-width:600px){
    width:100vw;
  display:flex;
  flex-direction:column;
  height:auto;


  }
`;
const SectionOneContent = styled("div")`
width:100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

    @media(max-width:1100px){
    gap: 20px;
    padding:23px;
    }

  @media(max-width:600px){
    gap: 16px;
    padding:23px;
    }
`;

const JoinNow = styled("div")`
  font: 600 20px "Sora";
  color: #f28f53;

    @media(max-width:1100px){
  font: 600 20px "Sora";
    }

  @media(max-width:600px){
  font: 600 16px "Sora";
    }
`;

const CallNow = styled("div")`
  font: 600 35px "Epilogue";
  color: #ffffff;

    @media(max-width:1100px){
  font: 600 25px "Epilogue";
    }

    @media(max-width:600px){
  font: 600 22px "Epilogue";
    }
`;

const GetInTouch = styled("div")`
  font: 600 50px "Epilogue";
  color: #ffffff;

    @media(max-width:1100px){
  font: 600 50px "Epilogue";
    }

    @media(max-width:600px){
  font: 600 35px "Epilogue";
    }
`;

const FirstImageSection=styled('div')`


margin-bottom:290px;


@media(max-width:1100px){
  display:none
  }
  
  @media(max-width:600px){
  display:none
  }


`

const LastImageSection=styled('div')`

@media(max-width:1100px){
display:none
}

@media(max-width:600px){
display:none
}

`
const FreeDemoSection =styled('div')`
width:40%;
display:flex;
justify-content:space-between;

@media(max-width:1100px){
width:60%;
}

@media(max-width:600px){
width:60%;
}

`

const LoadingImageSection=styled('img')`
@media(max-width:600px){
display:none;
}
`



