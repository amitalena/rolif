import { Box, Card, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { testiData } from "./testData";
import { FormatQuoteRounded, Star, StarHalfSharp } from "@mui/icons-material";
import { useMemo } from "react";

const OurTestimonial = () => {
    const theme = useTheme();
    const isXL = useMediaQuery(theme.breakpoints.up("xl"));
    const isLG = useMediaQuery(theme.breakpoints.up("lg"));
    const isMD = useMediaQuery(theme.breakpoints.up("md"));
    const isSM = useMediaQuery(theme.breakpoints.up("sm"));

    // Determine `perPage` dynamically based on screen size
    const perPage = isXL ? 4 : isLG ? 3 : isMD ? 2 : isSM ? 2 : 1;

    // Memoized styles for performance optimization
    const containerStyles = useMemo(() => ({
        background: "#dfdfdf",
        width: { xl: "98.9vw", lg: "100vw", md: "98.9vw", sm: '98.9vw', xs: "100vw" },
        px: { lg: theme.spacing(11), md: theme.spacing(2), sm: theme.spacing(2), xs: theme.spacing(2) },
        py: { md: 5, lg: 5, sm: 3, xs: 1 },
    }), [theme]);

    const titleStyles = useMemo(() => ({
        variant: "h4",
        fontWeight: "bold",
        py: 2,
        pl: 1,
        fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" }, // Responsive font size
    }), []);

    // Optimized Splide settings
    const sliderOptions = useMemo(() => ({
        type: "loop",
        autoplay: true,
        interval: 3000,
        arrows: true,
        pagination: false,
        pauseOnHover: true,
        perPage,
    }), [perPage]);


    return (
        <Box sx={containerStyles}>
            {/* Header */}
            <Box>
                <Typography {...titleStyles}>
                    Testminials
                </Typography>
                <Divider sx={{ background: theme.palette.primary.deep, ml: 1, height: '3px', width: '180px' }} />
            </Box>

            {/* Splide Slider */}
            <Splide
                options={sliderOptions}
            >
                {testiData.map((item) => (
                    <SplideSlide key={item.id} style={{ display: "flex", justifyContent: "center" }}>
                        <Card elevation={0} sx={{ zIndex: 1, border: "1px dashed #000", m: 1, background: theme.palette.info.light, p: 4 }}>
                            <Typography variant="body2"><FormatQuoteRounded sx={{ color: '#f05' }} />{item.description}<FormatQuoteRounded sx={{ color: '#f05' }} /></Typography>
                            <Stack spacing={1} justifyContent={'space-between'} mt={1} direction={'row'}>
                                <Stack direction={'column'}>
                                    <Typography variant="h4">{item.name}</Typography>
                                    <Typography><Star /><Star /><Star /><Star /><StarHalfSharp /></Typography>
                                </Stack>
                                <Box sx={{ height: '90px', width: '90px', }}>
                                    <img src={item.imagePath} style={{ borderRadius: '50%', height: '100%', width: '100%' }} />
                                </Box>
                            </Stack>
                        </Card>
                    </SplideSlide>
                ))}
            </Splide>
        </Box >
    );
};

export default OurTestimonial;