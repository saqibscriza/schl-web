import {
  Box,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Link,
  Divider,
  OutlinedInput,
  Container,
} from "@mui/material";
import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink, Link as RouterLink } from "react-router-dom";

import BG from "/FooterBG.svg";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          color: "#fff",
          width: "100%",
          bgcolor: "#1c3c36",
          backgroundImage: `url(${BG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Address , Phone & Email */}
        <Container maxWidth={false} sx={{ borderBottom: "1px solid white" }}>
          <Grid container spacing={{ xs: 0, md: 3 }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  py: 4,
                  pl: { xs: 4, lg: 19 },
                  borderRight: { lg: "1px solid white" },
                }}
              >
                <img src="./FooterLocation.svg" alt="" />
                <Box>
                  <Typography sx={{ mb: 1 }}>Address:</Typography>
                  <Typography sx={{ textWrap: "no-wrap" }}>
                    A-4-5, A Block, Sector 16, Noida
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  p: 4,
                  borderRight: { lg: "1px solid white" },
                }}
              >
                <img src="./FooterPhone.svg" alt="" />
                <Box>
                  <Typography sx={{ mb: 1 }}>Phone:</Typography>
                  <Typography>(+91)911-601 1899</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  py: 4,
                  pl: { xs: 4, lg: 9 },
                }}
              >
                <img src="./FooterEmail.svg" alt="" />
                <Box>
                  <Typography sx={{ mb: 1 }}>Email:</Typography>
                  <Typography>sales@scriza.in</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Footer Middle Section */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={4} sx={{ display: "flex" }}>
            {/* Logo & Social */}
            <Grid sx={{ pl: 5 }} size={{ xs: 12, md: 4 }}>
              <img src="./FooterIcon.svg" alt="" style={{ marginBottom: 16 }} />
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "17px",
                }}
              >
                edu2all is a comprehensive cloud-based School Management
                Software.
              </Typography>
              <Box>
                <NavLink to="https://facebook.com">
                  {" "}
                  <img src="./FooterFb.svg" alt="" />
                </NavLink>
                <NavLink to="https://instagram.com">
                  {" "}
                  <img src="./FooterInsta.svg" alt="" />
                </NavLink>
                <NavLink to="https://youtube.com">
                  {" "}
                  <img src="./FooterPinterest.svg" alt="" />
                </NavLink>
                <NavLink to="https://twitter.com">
                  {" "}
                  <img src="./FooterTwitter.svg" alt="" />
                </NavLink>
              </Box>
            </Grid>

            {/* Links */}

            <Grid sx={{ pl: { xs: 5, md: 0 } }} size={{ xs: 12, md: 4 }}>
              <Typography component="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Our Services:
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "FAQ", path: "/faq" },
                  { name: "Contact Us", path: "/contact" },
                ].map((item) => (
                  <Box
                    component="li"
                    key={item.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1.5,
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: "medium", mr: 1 }} />
                    <Link
                      component={RouterLink}
                      to={item.path}
                      underline="none"
                      color="inherit"
                      sx={{ display: "inline-block" }}
                    >
                      {item.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Subscribe */}
            <Grid sx={{ pl: { xs: 5, md: 0 } }} size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontWeight: 700, mb: 2 }}>
                  Subscribe
                </Typography>
                <OutlinedInput
                  placeholder="Enter your email"
                  size="small"
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: 1,
                    mb: 2,
                    width: "100%",
                    maxWidth: "300px",
                    p: 1,
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#086159",
                    color: "#fff",
                    maxWidth: "200px",
                    p: 2,
                  }}
                >
                  Subscribe Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Copyright */}
        <Box textAlign="center" sx={{ bgcolor: "#04857A", p: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: "#ffffff", fontWeight: 400, fontSize: "17px" }}
          >
            Copyright © 2025 <b style={{ color: "#2FC7A1" }}>edu2all</b> | All
            Rights Reserved
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
