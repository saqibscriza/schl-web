



import { Box, IconButton, Menu, MenuItem, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const tabData = [
    { label: "Academics", path: "academics" },
    { label: "Student", path: "student" },
    { label: "Transportation", path: "transportation" },
    { label: "Exam", path: "exam" },
    { label: "HR", path: "hr" },
];

const FeatureLayout = () => {
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const [anchorEl, setAnchorEl] = useState(null);


    // Extract the current feature type from the URL
    const currentPath = location.pathname.split('/').filter(Boolean).pop() || 'academics';
    const currentTab = tabData.findIndex(tab => tab.path === currentPath);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ py: 6, bgcolor: 'grey.50', px: { xs: 2, sm: 10, md: 15, lg: 20 } }}>
            {/* Heading */}
            <Box sx={{ py: 3, textAlign: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                    <img src="./SecurityIcon.svg" alt="" />
                    <Typography sx={{ color: "#2FC7A1", fontSize: "14px", fontWeight: 400 }}>EDU2ALL FEATURE</Typography>
                    <img src="./SecurityIcon.svg" alt="" />
                </Box>

                <Typography sx={{
                    color: "#0E2A46",
                    fontSize: { xs: "15", sm: "25px", md: "35px", lg: "45px" },
                    fontWeight: 700,
                    px: 3,
                    lineHeight: { xs: "25px", sm: "40px", md: "50px", lg: "60px" }
                }}>
                    50+ Powerful Modules For Seamless School Management
                </Typography>
            </Box>

            {/* Tabs */}
            {isMobile ? (
                <>
                    <IconButton
                        onClick={handleMenuOpen}
                        sx={{
                            color: '#333931',
                            border: '1px solid lightgray',
                            borderRadius: '4px',
                            p: 1,
                            ml: 'auto',
                            mr: 2,
                        }}
                    >
                        <MenuIcon />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                            {currentTab >= 0 ? tabData[currentTab].label : 'Menu'}
                        </Typography>
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{
                            sx: {
                                width: '100%',
                                maxWidth: 'calc(100% - 32px)',
                                mt: 1,
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
                            }
                        }}
                    >
                        {tabData.map((tab, index) => (
                            <MenuItem
                                key={index}
                                component={Link}
                                to={tab.path}
                                onClick={handleMenuClose}
                                selected={currentTab === index}
                                sx={{
                                    borderLeft: currentTab === index ? '3px solid #F28F53' : 'none',
                                    backgroundColor: currentTab === index ? '#f5f5f5' : 'transparent',
                                    color: currentTab === index ? '#333931' : '#ADADBD',
                                    py: 1.5,
                                    px: 2,
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0'
                                    }
                                }}
                            >
                                {tab.label} Management
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            ) : (
                <Tabs
                    value={currentTab >= 0 ? currentTab : 0}
                    centered
                    TabIndicatorProps={{ style: { display: "none" } }}
                    sx={{ mb: 3 }}
                >
                    {tabData.map((tab, index) => (
                        <Tab
                            key={index}
                            label={`${tab.label} Management`}
                            component={Link}
                            to={tab.path}
                            sx={{
                                fontSize: "14px",
                                fontWeight: 300,
                                textTransform: "none",
                                textDecoration: "none",
                                backgroundColor: currentTab === index ? "#fff" : "transparent",
                                borderBottom: currentTab === index ? "2px solid #F28F53" : "1px solid lightgray",
                                color: currentTab === index ? "#333931" : "#ADADBD",
                                borderRadius: "4px 4px 0 0",
                                transition: "all 0.3s ease",
                                '&.Mui-selected': {
                                    color: '#333931',
                                },
                            }}
                        />
                    ))}
                </Tabs>
            )}

            {/* Dynamic Content */}
            <Box sx={{ py: 2 }}>
                <Outlet />
            </Box>

        </Box>
    );
};

export default FeatureLayout;

