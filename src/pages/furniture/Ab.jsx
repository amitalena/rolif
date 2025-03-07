/* eslint-disable react/prop-types */
import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import React, { useMemo } from "react";
import { furnitureData } from "./furnitureData";
import CardComponent from "../../utils/CardComponent";
import { useNavigate } from "react-router-dom";

const FurniturePage = ({ title }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    // Responsive breakpoints
    const isXL = useMediaQuery(theme.breakpoints.up("xl"));
    const isLG = useMediaQuery(theme.breakpoints.up("lg"));
    const isMD = useMediaQuery(theme.breakpoints.up("md"));
    const isSM = useMediaQuery(theme.breakpoints.up("sm"));

    // Determine `perPage` dynamically based on screen size
    const perPage = useMemo(() => (isXL ? 4 : isLG ? 3 : isMD ? 2 : isSM ? 2 : 1), [isXL, isLG, isMD, isSM]);

    // Memoized styles for performance optimization
    const containerStyles = useMemo(() => ({
        background: "#f1f1f1",
        width: "100vw",
        px: { lg: theme.spacing(11), md: theme.spacing(1), sm: theme.spacing(2), xs: theme.spacing(2) },
        py: { md: 5, lg: 5, sm: 3, xs: 1 },
    }), [theme]);

    const furnitureStyles = useMemo(() => ({
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

    // Handle click event for furniture items
    const handleFurniturePageClick = (id) => {
        const selectedFurniture = furnitureData.find((item) => item.id === id);
        if (selectedFurniture) {
            localStorage.setItem("Furniture", JSON.stringify(selectedFurniture));
            navigate(`/singlefurniture/${id}`);
        }
    };

    return (
        <Box sx={containerStyles}>
            {/* Header */}
            <Box>
                <Typography {...furnitureStyles}>{title}</Typography>
                <Divider sx={{ background: theme.palette.primary.deep, ml: 1, height: '3px', width: '180px' }} />
            </Box>

            {/* Splide Slider */}
            <Splide options={sliderOptions}>
                {furnitureData.map((item) => (
                    <SplideSlide key={item.id} style={{ display: "flex", justifyContent: "center" }}>
                        <CardComponent
                            id={item.id}
                            imagePath={item.imagePath}
                            title={item.title}
                            onClick={() => handleFurniturePageClick(item.id)}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </Box>
    );
};

export default React.memo(FurniturePage);
