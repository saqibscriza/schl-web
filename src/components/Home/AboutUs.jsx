import { Box, Grid, Typography, Button, Stack, styled } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DemoModalForm from '../DemoModalForm';
import { useState } from 'react';
import design4 from '../../assets/design5.png'

const AboutUs = () => {
    const [openDemoDialog, setOpenDemoDialog] = useState(false);

    return (
        <AboutBox sx={{ py: { xs: 8, md: 12 }, pl: { xs: 5, md: 20 }, pr: { xs: 5, md: 20 } }}>
            <Grid container spacing={4} alignItems="center">
                {/* Left Side - Images */}
                <Grid size={{ xs: 12, lg: 6 }}>

                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: 1000,
                            height: { xs: 600, md: 650 },
                            mx: 'auto',
                            my: 8,
                        }}
                    >
                        {/* Top Left Image */}
                        <Box
                            component="img"
                            src="./AboutUsImage1.svg" // replace with actual image path
                            alt="Top Left"
                            sx={{
                                position: 'absolute',
                                top: 80,
                                left: 50,
                                width: { xs: '45%', md: '35%' },
                                borderRadius: 2,
                                objectFit: 'cover',
                            }}
                        />

                        {/* Top Right Image */}
                        <Box
                            component="img"
                            src="./AboutUsImage2.svg"
                            alt="Top Right"
                            sx={{
                                position: 'absolute',
                                top: 140,
                                right: 200,
                                width: { xs: '45%', md: '20%' },
                                borderRadius: 2,
                                objectFit: 'cover',
                            }}
                        />



                        {/* Bottom Image */}
                        < Box
                            component="img"
                            src="./AboutUsImage3.svg"
                            alt="Bottom Right"
                            sx={{
                                position: 'absolute',
                                bottom: 50,
                                right: 100,
                                width: { xs: '45%', md: '65%' },
                                borderRadius: 2,
                                objectFit: 'cover',
                            }}
                        />

                        {/* Center Circle Content */}
                        <Box
                            component="img"
                            src="./AboutUsImage4.svg"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: { xs: 140, md: 180 },
                                height: { xs: 140, md: 180 },


                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                textAlign: 'center',
                                px: 2,
                                zIndex: 1
                            }}
                        >

                        </Box>
                    </Box>
                </Grid>

                {/* Right Side - Content */}
                <Grid size={{ xs: 12, lg: 6 }}>
                    <Typography sx={{ color: "#F28F53", fontSize: "14px", fontWeight: 400, display: "flex", justifyContent: "flex-start", gap: 1, alignItems: "center" }} gutterBottom>
                        <img src="./SecurityIcon.svg" alt="" />
                        About Us
                    </Typography>

                    <Typography sx={{ color: "#0E2A46", fontSize: { xs: "25px", sm: "30px", md: "45px" }, fontWeight: 700, mb: 2 }} >
                        We Build Software That Works Like The World Around You.
                    </Typography>

                    <Typography x={{ color: "#4D5756", fontSize: "17px", fontWeight: 400, mb: 4 }}>
                        We've seen projects fail due to poor planning and communication.
                        We're here to ensure yours succeeds — seamlessly and on time.
                    </Typography>

                    <Grid container spacing={4} sx={{ mt: 2, mb: 2 }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography fontWeight={700} gutterBottom>
                                Our Mission:
                            </Typography>
                            <Typography color="text.secondary">
                                Empowering growth with secure, scalable, and innovative software solutions.
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography fontWeight={700} gutterBottom>
                                Our Vision:
                            </Typography>
                            <Typography color="text.secondary">
                                Innovative, scalable solutions empowering businesses and education for a smarter future.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Button
                        variant="contained"
                        onClick={() => setOpenDemoDialog(true)}
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#04857A', // Green part
                            borderRadius: '50px',
                            pr: 10,
                            pl: 4,
                            py: .5,
                            textTransform: 'none',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#346B65',
                            },
                            width: "auto",
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "15px", lineHeight: "58px" }}>
                            Book A Free Demo
                        </Typography>

                        <Box
                            sx={{
                                position: 'absolute',  // Absolute positioning
                                right: 0,              // Stick to right
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: '#E38A4A',  // Orange part
                                borderRadius: '50%',
                                width: 65,
                                height: 65,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                ml: 2,
                            }}
                        >
                            <ArrowForwardIcon sx={{ color: '#fff' }} />
                        </Box>
                    </Button>
                </Grid>
                <DemoModalForm open={openDemoDialog} onClose={() => setOpenDemoDialog(false)} />
            </Grid>

        </AboutBox >
    );
};

const AboutBox=styled(Box)`

display:flex;
justify-content:center;
align-items:center;

  background-image: url(${design4});
  background-repeat: no-repeat;
  background-position: right 16rem;
  margin-right:20px;

  @media(max-width:1400px){
  background-image:none;
  }

`

export default AboutUs;
