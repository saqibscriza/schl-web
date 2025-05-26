import React from 'react'
import SectionHeader from '../components/SectionHeader'
import {
    Box,
    Grid,
    Typography,
    OutlinedInput,
    Button,
    InputLabel,
    FormControl,
    IconButton,
} from '@mui/material';
import {
    LocationOn,
    AccessTime,
    Phone,
} from '@mui/icons-material';
import GetInTouch from '../components/getInTouch/GetInTouch';

const Contact = () => {
    console.log('content and images2222')
    return (
        <>
            <SectionHeader title="CONTACT US">
                Home <span style={{ color: '#F15A29' }}> // </span> Contact Us
            </SectionHeader>

            <Box sx={{
                bgcolor: "white", py: 3, px: { xs: 4, md: 4, lg: 18 },
            }}>
                <Box sx={{
                    px: { xs: 2, md: 5 }, py: 7, bgcolor: '#f4f4f4', position: 'relative', // Add relative positioning
                    overflow: 'hidden', // Ensure the triangle stays contained
                    zIndex: 1,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: { xs: 750, sm: 750, md: 0 },
                        left: 0,
                        width: 0,
                        height: 0,
                        borderStyle: 'solid',
                        borderWidth: { xs: '220px 220px 220px 220px', sm: '150px 150px 150px 150px' }, // Adjust size as needed
                        borderColor: 'transparent transparent #04857A #04857A', // Use your brand color
                        zIndex: -1,
                    }
                }}>
                    <Grid container spacing={8}>
                        {/* Left Info Section */}
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography sx={{ color: "#0E2A46", fontWeight: 700, fontSize: "40px" }} gutterBottom>
                                Get in Touch
                            </Typography>
                            <Typography sx={{ color: "#333931", fontSize: "17px", fontWeight: 400, mb: 4 }}>
                                Contact us for innovative solutions, expert support, and seamless collaboration.
                            </Typography>
                            <Box sx={{ bgcolor: 'white', py: 6, px: 3, borderRadius: 2 }}>
                                {/* Address */}
                                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap: 2, mb: 3 }}>
                                    <img src="./ContactLocation.svg" alt="" />
                                    <Box>
                                        <Typography sx={{ color: "#4D5756", fontWeight: 400, fontSize: "16px", mb: .3, lineHeight: "32px" }}>Our Address</Typography>
                                        <Typography sx={{ fontWeight: 700, fontSize: "21px", color: "#0E2A46" }}>
                                            Logix Park (Supreme Work), A-4–5, A Block, Sector 16, Noida, UP – 201301
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Hours */}
                                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap: 2, mb: 3 }}>
                                    <img src="./ContactClock.svg" alt="" />
                                    <Box>
                                        <Typography sx={{ color: "#4D5756", fontWeight: 400, fontSize: "16px" }}>Hours Of Operation</Typography>
                                        <Typography sx={{ fontWeight: 700, fontSize: "21px", color: "#0E2A46" }}>
                                            Mon – Fri: 10.00 am to 7.00pm
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Contact */}
                                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap: 2, mb: 3 }}>
                                    <img src="./ContactPhone.svg" alt="" />
                                    <Box>
                                        <Typography sx={{ color: "#4D5756", fontWeight: 400, fontSize: "16px" }}>Contact</Typography>
                                        <Typography sx={{ fontWeight: 700, fontSize: "21px", color: "#0E2A46" }}>+91 - 9116011899</Typography>
                                        <Typography sx={{ fontWeight: 700, fontSize: "21px", color: "#0E2A46" }}>info@scriza.com</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Grid
                                container
                                spacing={{ xs: 2 }}
                                sx={{
                                    mt: 5,
                                    px: { xs: 2, sm: 0 },
                                    alignItems: "center"
                                }}
                            >
                                {/* Customer Care - Will appear first on desktop, second on mobile */}
                                <Grid
                                    item
                                    size={{ xs: 12, sm: 6 }}
                                    sx={{
                                        display: "flex",
                                        justifyContent: { xs: "center", sm: "flex-start" }
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <img
                                            src="./ContactCustomer.svg"
                                            alt="Customer care icon"
                                            style={{ width: 24, height: 24 }}
                                        />
                                        <Typography sx={{
                                            color: "white",
                                            whiteSpace: "nowrap",
                                            fontSize: { xs: "0.875rem", sm: "1rem" }
                                        }}>
                                            Customer care
                                        </Typography>
                                    </Box>
                                </Grid>

                                {/* Social Icons - Will appear second on desktop, first on mobile */}
                                <Grid
                                    item
                                    size={{ xs: 12, sm: 6 }}
                                    sx={{
                                        order: { xs: 1, sm: 2 },
                                        display: "flex",
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <Box sx={{ display: "flex", gap: { xs: 2, sm: 0.1 } }}>
                                        {["./ContactFb.svg", "./ContactInsta.svg", "./ContactPinterest.svg", "./ContactTwitter.svg"].map((icon, index) => (
                                            <IconButton
                                                key={index}
                                                component="a"
                                                href="#"
                                                sx={{
                                                    p: { xs: 0.5, sm: .5 },
                                                    '&:hover': {
                                                        transform: "scale(1.1)"
                                                    }
                                                }}
                                            >
                                                <img
                                                    src={icon}
                                                    alt={`Social icon ${index}`}
                                                    style={{
                                                        width: { xs: 20, sm: 24 },
                                                        height: { xs: 20, sm: 24 }
                                                    }}
                                                />
                                            </IconButton>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>

                        </Grid>

                        {/* Right Form Section */}
                        <Grid item size={{ xs: 12, md: 6 }} sx={{ my: { xs: 2, sm: 0 } }}>
                            <Grid container spacing={2}>
                                {/* Name Field */}
                                <Grid item size={{ xs: 12 }}>
                                    <InputLabel sx={{ color: "#0E2A46", fontWeight: 400, fontSize: "18px", mb: 1 }}>Name*</InputLabel>
                                    <OutlinedInput sx={{
                                        backgroundColor: "white",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // This removes the border
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border on hover
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border when focused
                                        }
                                    }} fullWidth notched placeholder="Name" />
                                </Grid>

                                {/* Email Field */}
                                <Grid item size={{ xs: 12 }}>
                                    <InputLabel sx={{ color: "#0E2A46", fontWeight: 400, fontSize: "18px", mb: 1 }}>Email Address*</InputLabel>
                                    <OutlinedInput sx={{
                                        backgroundColor: "white",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // This removes the border
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border on hover
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border when focused
                                        }
                                    }} fullWidth notched placeholder="Email Address" />
                                </Grid>

                                {/* Phone Field */}
                                <Grid item size={{ xs: 12 }}>
                                    <InputLabel sx={{ color: "#0E2A46", fontWeight: 400, fontSize: "18px", mb: 1 }}>Phone*</InputLabel>
                                    <OutlinedInput sx={{
                                        backgroundColor: "white",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // This removes the border
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border on hover
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border when focused
                                        }
                                    }} fullWidth notched placeholder="Phone" />
                                </Grid>

                                {/* Subject Field */}
                                <Grid item size={{ xs: 12 }}>
                                    <InputLabel sx={{ color: "#0E2A46", fontWeight: 400, fontSize: "18px", mb: 1 }}>Subject*</InputLabel>
                                    <OutlinedInput sx={{
                                        backgroundColor: "white",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // This removes the border
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border on hover
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border when focused
                                        }
                                    }} fullWidth notched placeholder="Subject" />
                                </Grid>

                                {/* Message Field */}
                                <Grid item size={{ xs: 12 }}>
                                    <InputLabel sx={{ color: "#0E2A46", fontWeight: 400, fontSize: "18px", mb: 1 }}>Message*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        placeholder="Message"
                                        multiline
                                        minRows={3}
                                        notched
                                        sx={{
                                            backgroundColor: "white",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none" // This removes the border
                                            },
                                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                                border: "none" // Removes border on hover
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                border: "none" // Removes border when focused
                                            }
                                        }}
                                    />
                                </Grid>

                                {/* Submit Button */}
                                <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        maxWidth="200px"
                                        sx={{
                                            bgcolor: '#387b6b',
                                            color: 'white',
                                            '&:hover': { bgcolor: '#2f6659' },
                                            py: 2,
                                            px: 3,
                                            bgcolor: '#04857A',
                                            color: "white"
                                        }}
                                    >
                                        SEND MESSAGE
                                    </Button>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
            </Box >
            <GetInTouch />
        </>
    )
}

export default Contact
