import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { useMemo } from "react";
import { ourClientData1, ourClientData2, ourClientData3 } from "./ourClientData";

const OurClient = () => {
    const theme = useTheme();
    const isXL = useMediaQuery(theme.breakpoints.up("xl"));
    const isLG = useMediaQuery(theme.breakpoints.up("lg"));
    const isMD = useMediaQuery(theme.breakpoints.up("md"));
    const isSM = useMediaQuery(theme.breakpoints.up("sm"));

    // Determine `perPage` dynamically based on screen size
    const perPage = useMemo(() => (isXL ? 7 : isLG ? 7 : isMD ? 3 : isSM ? 3 : 2), [isXL, isLG, isMD, isSM]);
    // Memoized container styles
    const containerStyles = useMemo(() => ({
        background: "#dfdfdf",
        overflow: 'hidden',
        width: "99vw",
        px: { lg: 8, md: 2, sm: 2, xs: 2 },
        py: { md: 5, lg: 5, sm: 3, xs: 1 },
    }), []);

    const clientTitleStyles = useMemo(() => ({
        variant: "h4",
        fontWeight: "bold",
        color: "primary.main",
        py: 2,
        pl: 1,
    }), []);

    // Function to generate Splide options dynamically
    const getSplideOptions = (speed) => ({
        type: "loop",
        autoplay: true,
        arrows: false,
        pagination: false,
        pauseOnHover: true,
        perPage,
        autoScroll: { speed },
    });

    // Function to render a slider
    const renderSlider = (data, speed) => (
        <Splide options={getSplideOptions(speed)} extensions={{ AutoScroll }}>
            {data.map((item) => (
                <SplideSlide key={item.id}>
                    <Box sx={{ height: '85px', width: "100%", m: 1 }}>
                        <img
                            src={item.image}
                            alt={`Client ${item.id}`}
                            style={{ borderRadius: 5, height: "100%", width: "90%", }}
                        />
                    </Box>
                </SplideSlide>
            ))}
        </Splide>
    );

    return (
        <Box sx={containerStyles}>
            {/* Header */}
            <Box sx={{ pb: 2 }}>
                <Typography variant="h4" fontWeight="bold">
                    Our{" "}
                    <Typography component="span" {...clientTitleStyles}>
                        Clients
                    </Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: 3, width: 50 }} />
                </Typography>
            </Box>

            {/* Render all sliders */}
            {renderSlider(ourClientData1, 1)}
            {renderSlider(ourClientData2, -1)}
            {renderSlider(ourClientData3, 1)}
        </Box>
    );
};

export default OurClient;
