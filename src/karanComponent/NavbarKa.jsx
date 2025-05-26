
import PhonePausedOutlinedIcon from "@mui/icons-material/PhonePausedOutlined";
import RealEstateAgentOutlinedIcon from "@mui/icons-material/RealEstateAgentOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, styled, Switch } from "@mui/material";
import { NavLink } from "react-router-dom";
import FreeDemoButton from "./FreeDemoButton";
import edu2All from "../assets/Group 1.svg";
import background from "../assets/Background.png";
import { useState } from "react";

// Navbar data
const navbarUpperSectionLeftItems = [
  { content: "+ 91 9116011899", icon: PhonePausedOutlinedIcon },
  { content: "sales@scriza.in", icon: RealEstateAgentOutlinedIcon },
  { content: "A-4-5,A Block,Sector-62", icon: LocationOnOutlinedIcon },
];

const handleAlert = () => {
  alert("hi");
};

const menuItems = ["Home", "About", "FaQ", "Testimonials", "Contact"];

const Navbar = () => {

const [openMenu, setOpenMenu] = useState(false)

  return (
   <>
    <NavbarMainContainer>
      <NavbarUpperSection>
        <UpperSectionLeftContent>
          {navbarUpperSectionLeftItems.map((curItem, index) => (
            <NavbarItem key={index}>
              <curItem.icon sx={{ color: "#FFD25D" }} fontSize="small" />
              <p style={{ color: "#ffffff", font: "400 14px Poppins" }}>
                {curItem.content}
              </p>
            </NavbarItem>
          ))}
        </UpperSectionLeftContent>

        <img src={background} alt="" />
      </NavbarUpperSection>

      <NavbarLowerSection>
        <img  src={edu2All} alt="" />
        <ListContainer>
          {menuItems.map((curItem, index) => (
            <ListItemSection
              key={index}
              component={NavLink}
              to={`/${curItem.toLowerCase().replace(/\s+/g, "-")}`}
              activeClassName="active"
            >
              {curItem}
            </ListItemSection>
          ))}
        </ListContainer>
        <FreeDemoButton onClick={handleAlert} content="Free Demo" />
        <HamBurgerIcon 
  onClick={() => setOpenMenu(true)} 
  style={{ display: "none", cursor: "pointer" }} 
/>      </NavbarLowerSection>
    </NavbarMainContainer>
    <Drawer
  anchor="right"
  open={openMenu}
  onClose={() => setOpenMenu(false)}
>
  <List sx={{ width: 400 }}>
    {menuItems.map((curItem, index) => (
      <ListItem
      key={index}
      component={NavLink}
      to={`/${curItem.toLowerCase().replace(/\s+/g, "-")}`}
      onClick={() => setOpenMenu(false)}
      className={({ isActive }) => (isActive ? "active" : "")}
      sx={{
        fontFamily: 'Sora',
        marginLeft:"23px",
        marginTop:"23px",
        padding: '10px 20px',
        color: "black",
        textDecoration: 'none',
        '&.active': {
          width:'80%',
          border: '1px solid #04857a',
          borderRadius: '20px',
          color: '#04857a',
          fontWeight: 600
        }
      }}
    >
      {curItem}
    </ListItem>
    
    ))}
  </List>


</Drawer>

   </>
  );
};

export default Navbar;

const NavbarMainContainer = styled("div")`
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media (max-width:1400px){
  width:120vw;
  }
  @media (max-width:1100px){
  width:200vw;
  }

  @media (max-width:600px){
    width:220vw;

  }
`;

const NavbarUpperSection = styled("div")`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  background-color: #04857a;
  padding: 0 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    gap: 10px;
    padding: 10px;
  }
`;

const UpperSectionLeftContent = styled("div")`
  display: flex;
  gap: 60px;

  justify-content: center;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

const NavbarItem = styled("div")`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
`;

const NavbarLowerSection = styled("div")`
  width: 80%;
margin-left:110px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;

@media (max-width:1200px){
 width:100%;
  margin:0;
    height: 150px;
   justify-content:space-evenly;

}



  @media (max-width: 600px) {
  width:100%;
  margin:0;
    height: 150px;
  display:flex;
  justify-content:space-evenly;

  }
`;

const HamBurgerIcon=styled(MenuIcon)`
@media (max-width:1200px) {
display:inline !important;
}

@media (max-width:600px) {
display:inline !important;
font-size:43px
}
`

const ListContainer = styled(List)`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 1200px) {
     width: 100%;
display:none;
    gap: 10px;
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
display:none;
    gap: 10px;
    justify-content: center;
  }
`;

const ListItemSection = styled(ListItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  font: 400 14px "Sora";
  color: #0e2a46;
  transition: all 0.5s ease;
  text-decoration: none;

  &.active {
    height: 39px;
    border-radius: 20px;
    border: 1px solid #04857a;
    color: #04857a;
  }

  @media (max-width: 600px) {
    font-size: 13px;
  }

  @media (max-width:1200px) {
  display:none !important;
}
`;
