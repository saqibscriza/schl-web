import { Box, Button, Grid, Typography, Stack, IconButton, Menu, MenuItem } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';
import DemoModalForm from "../DemoModalForm";

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
];


const Navbar = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDemoDialog, setOpenDemoDialog] = useState(false);

    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isActive = (path) => {
        // Special case for home route
        if (path === '/') {
            return (
                location.pathname === '/' ||
                location.pathname.startsWith('/academics') ||
                location.pathname.startsWith('/student') ||
                location.pathname.startsWith('/transportation') ||
                location.pathname.startsWith('/exam') ||
                location.pathname.startsWith('/hr')
            );

        }
        return location.pathname === path;
    };

    return (

        <Box
            sx={{
                display: "flex",
                justifyContent: { xs: "space-between", md: "space-around" },
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, sm: 2, md: 0 },
                py: 1,
                px: { xs: 2, sm: 4, md: 12 },
            }}
        >
            {/* Hamburger Menu Icon for xs & sm */}
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
                <IconButton onClick={handleMenuOpen}>
                    <MenuIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    {navItems.map((item) => (
                        <MenuItem key={item.name} onClick={handleMenuClose}>
                            <Link to={item.path} style={{ textDecoration: "none", color: "#000" }}>
                                {item.name}
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

            {/* Logo */}
            <Link to="/">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img src="./NavbarIcon.svg" alt="Logo" width="120px" />
                </Box>
            </Link>

            {/* Nav Items */}
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <Stack
                    direction="row"
                    spacing={{ xs: 1, sm: 2, md: 3 }}
                    alignItems="center"
                >
                    {navItems.map((item) => (
                        <Link to={item.path} key={item.name} style={{ textDecoration: "none" }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    cursor: "pointer",
                                    border: isActive(item.path) ? "1px solid #3A7E76" : "none",
                                    borderRadius: "20px",
                                    px: 2,
                                    py: 0.5,
                                    color: "#0E2A46",
                                    textAlign: "center",
                                }}
                            >
                                {item.name}
                            </Typography>
                            <Typography>
                                
                            </Typography>
                        </Link>
                    ))}
                </Stack>
            </Box>

            {/* Button */}
            <Box>
                <Link style={{ textDecoration: "none" }}>
                    <Button
                        onClick={() => setOpenDemoDialog(true)}
                        variant="contained"
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#04857A', // Green part
                            borderRadius: '50px',
                            pr: 10,
                            pl: 4,
                            py: .2,
                            textTransform: 'none',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#346B65',
                            },
                            width: { xs: '100%', md: 'auto' },
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "15px", lineHeight: "58px" }}>
                            Free Demo
                        </Typography>

                        <Box
                            sx={{
                                position: 'absolute',  // Absolute positioning
                                right: 0,              // Stick to right
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: '#E38A4A',  // Orange part
                                borderRadius: '50%',
                                width: 60,
                                height: 60,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                ml: 2,
                            }}
                        >
                            <ArrowForwardIcon sx={{ color: '#fff' }} />
                        </Box>
                    </Button>
                </Link>
            </Box>
            <DemoModalForm open={openDemoDialog} onClose={() => setOpenDemoDialog(false)} />
        </Box>

    );
};

export default Navbar;



