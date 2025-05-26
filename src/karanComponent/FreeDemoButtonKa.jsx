import { Button, styled } from "@mui/material";
import freedomoIcon from "../assets/demoButtonIcon.png";

const FreeDemoButton = ({ content, onSubmit }) => {
  return (
    <ButtonStyle
      onSubmit={onSubmit}
      endIcon={<FreeDomImage src={freedomoIcon} />}
    >
      {content}
    </ButtonStyle>
  );
};

export default FreeDemoButton;

const ButtonStyle = styled(Button)`
  width: 230px;
  height: 59px;
  background-color: #04857a;
  border-radius: 200px;
  padding-left: 24px;
  text-transform: capitalize;
  color: #ffffff;
  display: flex;
  font: 400 14px "Sora";
  justify-content: space-between;
  postion: relative;
  & .MuiButton-endIcon {
    position: absolute;
    left: 164px;
  }

  @media (max-width: 600px) {
    width: 100%;
    font: 400 12px "Sora";

    & .MuiButton-endIcon {
      display: none;
    }
  }
`;

const FreeDomImage = styled("img")`
  @media (max-width: 1100px) {
  }
  @media (max-width: 600px) {
  }
`;
