import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Grid,
    Box,
    Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionHeader from '../components/SectionHeader'
import GetInTouch from "../components/getInTouch/GetInTouch";

const faqData = [
    {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        image: "/FaqImage.svg", // add your image path here
    },
    {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/FaqImage.svg", // add your image path here
    }, {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/FaqImage.svg", // add your image path here
    }, {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/FaqImage.svg", // add your image path here
    }, {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/FaqImage.svg", // add your image path here
    }, {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/FaqImage.svg", // add your image path here
    }, {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/FaqImage.svg", // add your image path here
    }, {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/FaqImage.svg", // add your image path here
    }, {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/FaqImage.svg", // add your image path here
    }, {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/FaqImage.svg", // add your image path here
    }, {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/FaqImage.svg", // add your image path here
    },

];

const FAQ = () => {

    const [expanded, setExpanded] = useState(0);

    const handleChange = (panel) => {
        setExpanded((prev) => (prev === panel ? false : panel));
    };
    return (
        <>
            <SectionHeader title="FAQ">
                Home <span style={{ color: '#F15A29' }}> // </span> Faqs
            </SectionHeader>


            <Box sx={{ px: { xs: 2, sm: 6, md: 12 }, py: 6 }}>
                {faqData.map((item, index) => (
                    <Accordion
                        key={index}
                        expanded={expanded === index}
                        onChange={() => handleChange(index)}
                        sx={{
                            mb: 2,
                            borderRadius: 1,
                            boxShadow: "none",
                            border: "1px solid #eee",
                            "&.Mui-expanded": {
                                backgroundColor: "#04857A",
                                color: "#fff",
                                fontWeight: 600,
                                fontSize: "20px"
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: expanded === index ? "#fff" : "#0A1F44" }} />}
                            sx={{
                                fontWeight: 600,
                                fontSize: "20px",
                                "& .MuiAccordionSummary-content": {
                                    my: 1,
                                },
                            }}
                        >
                            {item.question}
                        </AccordionSummary>

                        <AccordionDetails sx={{ backgroundColor: "#fff", }}>
                            <Grid container spacing={3}>
                                <Grid item size={{ xs: 12, md: 8 }}>
                                    <Typography variant="body2" sx={{ fontSize: "14px", lineHeight: 1.8, color: "#333931", fontSize: "17px", fontWeight: 400 }}>
                                        {item.answer}
                                    </Typography>
                                </Grid>
                                <Grid item size={{ xs: 12, md: 4 }}>
                                    <Box
                                        component="img"
                                        src={item.image}
                                        alt="faq-img"
                                        sx={{
                                            width: "100%",
                                            borderRadius: 2,
                                            objectFit: "cover",
                                            maxHeight: 300,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box >

            <GetInTouch />
        </>
    )
}

export default FAQ
