import { Box, Typography } from '@mui/material';
import React from 'react';
import menuImage from "../assets/menuImageKa.jpeg";
const SectionHeader = ({ title, children }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                py: { xs: 6, sm: 10 },
                textAlign: 'center',
                // background: 'linear-gradient(90deg, #f3e9e9 0%, #e6ecf9 100%)',
                overflow: 'hidden',
                height: "365px",
                backgroundImage: `url(${menuImage})`
            }}
        >
            {/* Decorative SVGs */}
            <Box
                component="img"
                src="/SectionHeader1.svg"
                alt="decor1"
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: { xs: 30, sm: 50 },
                }}
            />
            <Box
                component="img"
                src="/SectionHeader2.svg"
                alt="decor2"
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '25%',
                    width: { xs: 25, sm: 40 },
                }}
            />
            <Box
                component="img"
                src="/SectionHeader3.svg"
                alt="decor3"
                sx={{
                    position: 'absolute',
                    top: '15%',
                    right: '5%',
                    width: { xs: 30, sm: 50 },
                }}
            />
            <Box
                component="img"
                src="/SectionHeader4.svg"
                alt="decor4"
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '15%',
                    width: { xs: 20, sm: 30 },
                }}
            />

            {/* Main Title */}
            <Typography
                variant="h3"
                component="h1"
                fontWeight={700}
                sx={{
                    fontSize: { xs: '24px', sm: '32px', md: '40px' },
                    color: '#0A1F44',
                }}
            >
                {title}
            </Typography>

            {/* Breadcrumb / Children */}
            <Typography
                variant="body2"
                mt={1}
                sx={{ color: '#555', fontSize: { xs: '14px', sm: '16px' } }}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default SectionHeader;
