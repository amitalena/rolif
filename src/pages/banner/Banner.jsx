import React from "react";
import { Box, Grid, Card, CardContent, Typography, Stack, IconButton, Button } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { electricData, tilesData } from "./bannerData";
import { useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { bedData } from "../furniture/beds/bedData";

// Function to interleave arrays in the desired order
const interleaveData = (arr1, arr2, arr3) => {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length, arr3.length);

    for (let i = 0; i < maxLength; i++) {
        if (arr1[i]) result.push(arr1[i]); // Add furniture data
        if (arr2[i]) result.push(arr2[i]); // Add tiles data
        if (arr3[i]) result.push(arr3[i]); // Add electric data
    }

    return result;
};

// Merge data in alternating order
const allSlides = interleaveData(bedData, tilesData, electricData);

const Banner = () => {
    const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Check if screen is xs (small)

    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Splide
                        options={{
                            type: "loop",
                            perPage: 1,
                            autoplay: true,
                            interval: 3000,
                            pauseOnHover: true,
                            arrows: !isXs, // Disable arrows on xs screens
                            pagination: false,
                            gap: "1rem",
                        }}
                        renderControls={() =>
                            !isXs && (
                                <>
                                    <IconButton
                                        className="splide__arrow splide__arrow--prev"
                                        sx={{ position: "absolute", left: 10, zIndex: 2 }}
                                        aria-label="Previous slide"
                                    >
                                        <ArrowBackIos />
                                    </IconButton>
                                    <IconButton
                                        className="splide__arrow splide__arrow--next"
                                        sx={{ position: "absolute", right: 10, zIndex: 2 }}
                                        aria-label="Next slide"
                                    >
                                        <ArrowForwardIos />
                                    </IconButton>
                                </>
                            )
                        }
                    >
                        {allSlides.map((item, i) => (
                            <SplideSlide key={i}>
                                <Card elevation={0}>
                                    {/* Card Media (Image) */}
                                    <Box sx={{ position: "relative", width: "100%", height: { xl: "82vh", md: "70vh", sm: "70vh", xs: "45vh" } }}>
                                        <Box
                                            sx={{
                                                height: '100%',
                                                position: "relative",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {/* Image */}
                                            <div
                                                style={{
                                                    height: "100%",
                                                    backgroundImage: `url(${item?.imagePath})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                }}
                                            />

                                            {/* Hover Overlay */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    height: "100%",
                                                    width: "100%",
                                                    backgroundColor: "rgba(0,0,0, 0.9)",
                                                    opacity: 0,
                                                    transition: "opacity 0.4s ease-out",
                                                }}
                                            />
                                        </Box>
                                    </Box>

                                    {/* Overlay Card Content */}
                                    <CardContent
                                        sx={{
                                            position: "absolute",
                                            top: { xs: 0, sm: "10%", md: "20%", lg: "15%", xl: "15%" },
                                            left: { xs: 0, sm: 0, md: "10%", lg: "10%" },
                                            backgroundColor: "rgba(0,0,0,0.7)",
                                            color: "white",
                                            height: { md: "350px", sm: "80vh", xs: "100%" },
                                            width: { md: "450px", lg: "500px", xl: "500px", xs: "100%" },
                                            p: 4,
                                        }}
                                    >
                                        <Stack spacing={2} direction="column" justifyContent="space-between">
                                            <Typography variant="h5" textAlign="left" color="primary" fontWeight="bold" sx={{ fontSize: { md: "30px", xs: "30px" } }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2"> {item.description?.split(" ").slice(0, 25).join(" ")}...</Typography>
                                            <Box>
                                                <Button variant="outlined" sx={{ mt: 2 }}>
                                                    View Details
                                                </Button>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </SplideSlide>
                        ))}
                    </Splide>
                </Grid>
            </Grid>
        </Box>
    );
};

export default React.memo(Banner);