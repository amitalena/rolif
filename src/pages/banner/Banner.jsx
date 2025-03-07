import { Box, Grid, Card, CardMedia, CardContent, Typography, Stack, IconButton, Button } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { electricData, furnitureData, tilesData } from "./bannerData";
import { useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Merge all category data into one array
const allSlides = [...furnitureData, ...tilesData, ...electricData];

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
                                    <IconButton className="splide__arrow splide__arrow--prev" sx={{ position: "absolute", left: 10, zIndex: 2 }}>
                                        <ArrowBackIos />
                                    </IconButton>
                                    <IconButton className="splide__arrow splide__arrow--next" sx={{ position: "absolute", right: 10, zIndex: 2 }}>
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
                                    <Box sx={{ position: "relative", width: "100%", height: { xl: '95vh', md: "87vh", sm: '70vh', xs: '45vh' } }}>
                                        <CardMedia
                                            component="img"
                                            image={item.imagePath}
                                            title={item.title}
                                            alt={item.name}
                                            sx={{
                                                objectFit: "cover",
                                                height: "100%",
                                                width: "100%",
                                            }}
                                        />
                                        {/* Overlay */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: { xs: '100%', md: '100%' },
                                                height: { xs: 'auto', md: '100%' },
                                                // background: "linear-gradient(to right, rgba(252,255,234,0.6), rgba(232, 109, 16, 0.5))",
                                            }}
                                        />
                                    </Box>

                                    {/* Overlay Card Content */}
                                    <CardContent
                                        sx={{
                                            position: "absolute",
                                            top: { xs: 0, sm: "10%", md: '20%', lg: '25%', xl: '30%' },
                                            left: { xs: 0, sm: 0, md: '10%', lg: '10%' },
                                            backgroundColor: "rgba(0,0,0,0.5)",
                                            color: "white",
                                            height: { md: '350px', sm: '80vh', xs: "100%" },
                                            width: { md: "450px", lg: "500px", xl: "500px", xs: "100%" },
                                        }}
                                    >
                                        <Box sx={{ p: 4 }}>
                                            <Stack spacing={2} direction={'column'} justifyContent={'space-between'} >
                                                <Typography variant="h3" textAlign={'left'} color="primary" fontWeight="bold" sx={{ fontSize: { md: '50px', xs: '30px' } }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {item.description}
                                                </Typography>
                                            </Stack>
                                            <Button variant="outlined" sx={{ position: 'absolute', bottom: 50 }}>View Details</Button>
                                        </Box>
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

export default Banner;
