import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useMemo } from "react";
import { testiData } from "./testiData";
import TestimonialCard from "./TestimonialCard";

const OurTestimonial = () => {
    const theme = useTheme();
    const isXL = useMediaQuery(theme.breakpoints.up("xl"));
    const isLG = useMediaQuery(theme.breakpoints.up("lg"));
    const isMD = useMediaQuery(theme.breakpoints.up("md"));
    const isSM = useMediaQuery(theme.breakpoints.up("sm"));

    // Determine number of slides per page dynamically
    const perPage = useMemo(() => (isXL ? 4 : isLG ? 3 : isMD ? 2 : isSM ? 2 : 1), [isXL, isLG, isMD, isSM]);

    // Memoized styles
    const containerStyles = useMemo(() => ({
        background: "#f1f2f9",
        overflow: "hidden",
        width: "99vw",
        px: { lg: 8, md: 2, sm: 2, xs: 2 },
        py: { md: 3, lg: 3, sm: 3, xs: 1 },
    }), []);

    // Memoized Splide settings
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
            <Box mb={2}>
                <Typography variant="h4" fontWeight="bold" sx={{ py: 2, pl: 1, fontSize: { xs: "1.2rem", sm: "1.25rem", md: "1.45rem" } }}>
                    Testimonials
                </Typography>
                <Divider sx={{ background: theme.palette.primary.deep, ml: 1, height: "3px", width: "180px" }} />
            </Box>

            {/* Testimonial Slider */}
            <Splide options={sliderOptions}>
                {testiData.map(({ id, imagePath, name, description, rating }) => (
                    <SplideSlide key={id} style={{ display: "flex", justifyContent: "center" }}>
                        <TestimonialCard imagePath={imagePath} name={name} rating={rating} description={description} />
                    </SplideSlide>
                ))}
            </Splide>
        </Box>
    );
};

export default OurTestimonial;
