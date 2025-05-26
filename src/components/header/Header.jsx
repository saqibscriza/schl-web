import { Box, Grid, Typography, Divider, IconButton, Stack } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Email from "/HeaderEmail.svg"
import Phone from "/HeaderPhone.svg"
import Location from "/HeaderLocation.svg"

const Header = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", bgcolor: "#04857A", flexDirection: { xs: "column", md: "row" }, gap: { xs: 1, md: 2 }, mb: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", gap: 4, py: 1, flexDirection: { xs: "column", sm: "row" }, gap: { xs: 1, md: 2 } }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img src="./HeaderPhone.svg" alt="" />
                        <Typography sx={{ color: "white", fontSize: "16px", fontWeight: 400 }} variant="body2">+91 911 601 1899</Typography>
                    </Box>

                    <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img src="./HeaderEmail.svg" alt="" />
                        <Typography sx={{ color: "white", fontSize: "16px", fontWeight: 400 }} variant="body2">sales@scriza.in</Typography>
                    </Box>

                    <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img src="./HeaderLocation.svg" alt="" />
                        <Typography sx={{ color: "white", fontSize: "16px", fontWeight: 400 }} variant="body2">A-4-5, A Block, Sector 16, Noida</Typography>
                    </Box>

                </Box>


                <Box sx={{ backgroundColor: "#E88C51", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", gap: 2, p: 1.4 }}>
                    <img src="./HeaderFb.svg" alt="" />
                    <img src="./HeaderInsta.svg" alt="" />
                    <img src="./HeaderLinkedIn.svg" alt="" />
                    <img src="./HeaderYoutube.svg" alt="" />

                </Box>

            </Box>



        </>
    )
}

export default Header;


