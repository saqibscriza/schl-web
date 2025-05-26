// src/Pages/features/FeatureManagement.jsx
import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import { styled } from "@mui/system";
import CirclePattern from "../../components/CirclePattern";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import * as modules from '../../data/modules';


// Define all module data


const allModules = {
    academics: modules.academicsModules,
    student: modules.studentModules,
    transportation: modules.transportationModules,
    exam: modules.examModules,
    hr: modules.hrModules,
};

const HoverCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(6),
    borderRadius: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: "250px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#04857A",
        color: "#fff",
        transform: "scale(1.05)",
        "& .MuiTypography-root": {
            color: "#fff !important",
        },
    },
}));

const FeatureManagement = () => {
    const { featureType } = useParams();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Get modules for current feature type or empty array if not found
    const modules = allModules[featureType] || [];

    // Optional: Redirect to default if featureType doesn't exist
    if (!allModules[featureType]) {
        return <Navigate to="/academics" replace />;
    }

    return (
        <Box sx={{ py: 5 }}>
            <Grid container spacing={3}>
                {modules.map((item, index) => (
                    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index} sx={{ display: 'flex' }}>
                        <HoverCard
                            elevation={2}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                                <CirclePattern imageSrc={item.imageSrc} hovered={hoveredIndex === index} />
                                <Typography sx={{ color: '#0E2A46', fontWeight: 700, fontSize: '20px' }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ color: '#4D5756', fontWeight: 400, fontSize: '16px' }}>
                                    {item.desc}
                                </Typography>
                            </Stack>
                        </HoverCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeatureManagement;