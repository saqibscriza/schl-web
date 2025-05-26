import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image1 from "/BlogImage1.svg";
import Image2 from "/BlogImage2.svg";
import Image3 from "/BlogImage3.svg";

const blogs = [
  {
    img: `${Image1}`,
    date: "14 June 2023",
    comment: "06",
    desc: "Explore lesson planning, assignments, reports, and communication tools for educators.",
  },
  {
    img: `${Image2}`,
    date: "21 April 2024",
    comment: "06",
    desc: "Guide for school administrators to select the best ERP solution based on their needs.",
  },
  {
    img: `${Image3}`,
    date: "14 June 2023",
    comment: "06",
    desc: "Showcase real-time notifications, chat features, and student performance tracking.",
  },
];

const BlogSection = () => {
  return (
    <Box
      sx={{ px: { xs: 6, sm: 20, md: 15, lg: 22 }, mb: 6, maxWidth: "1400px" }}
      py={4}
    >
      {/* Section Heading */}
      <Box textAlign="left" mb={4}>
        <Button
          sx={{
            backgroundColor: "#04857A",
            color: "white",
            maxWidth: "125px",
            height: "32px",
            mb: 2,
            borderRadius: "5px",
          }}
        >
          BLOG POST
        </Button>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: { xs: "30px", sm: "28px" },
            lineHeight: { xs: "45px", sm: "58px" },
            color: "#0E2A46",
          }}
        >
          Most Popular Post.
        </Typography>
      </Box>

      {/* Blog Cards */}
      <Grid container spacing={4}>
        {blogs.map((item, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <Card sx={{ p: 2, borderRadius: 3, bgcolor: "#F5F5F5" }}>
              <CardMedia
                component="img"
                image={item.img}
                alt="blog image"
                sx={{ borderRadius: 2, height: 200, objectFit: "cover" }}
              />
              <CardContent>
                {/* Date + Comment */}
                {/* <Stack direction="row" spacing={2} my={1} alignItems="center">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CalendarMonthIcon fontSize="small" color="success" />
                    <Typography sx={{ color: "#4D5756" }} variant="body2">
                      {item.date}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <ChatBubbleOutlineIcon fontSize="small" color="success" />
                    <Typography sx={{ color: "#4D5756" }} variant="body2">
                      Comment ({item.comment})
                    </Typography>
                  </Stack>
                </Stack> */}

                {/* Description */}
                <Typography
                  sx={{
                    color: "#0E2A46",
                    fontSize: "19px",
                    fontWeight: 600,
                    mt: 2,
                  }}
                  my={1}
                >
                  {item.desc}
                </Typography>

                {/* Button */}
                <Button
                  variant="contained"
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#04857A", // Green part
                    borderRadius: "50px",
                    pr: 10,
                    pl: 4,
                    py: 0,
                    textTransform: "none",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#346B65",
                    },
                    width: "auto",
                    mt: 2,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "58px",
                    }}
                  >
                    Read More
                  </Typography>

                  <Box
                    sx={{
                      position: "absolute", // Absolute positioning
                      right: 0, // Stick to right
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#1A635D", // Orange part
                      borderRadius: "50%",
                      width: 55,
                      height: 55,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ml: 2,
                    }}
                  >
                    <ArrowForwardIcon sx={{ color: "#fff" }} />
                  </Box>
                </Button>
                {/* <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        borderRadius: '30px',
                                        textTransform: 'none',
                                        backgroundColor: '#2B5C4D',
                                        '&:hover': { backgroundColor: '#1b3a31' },
                                        px: 3,
                                    }}
                                    endIcon={<ArrowForwardIcon />}
                                >
                                    Read More
                                </Button> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSection;
