/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "../../utils/CardComponent";
import { switchData } from "./switches/switchData";
import { fansData } from "./fans/fansData";

const interleaveData = (arr1, arr2) => {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (arr1[i]) result.push(arr1[i]);
        if (arr2[i]) result.push(arr2[i]);
    }

    return result;
};

const allSlides = interleaveData(switchData, fansData);

const ElectricPage = ({ title }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    // Responsive breakpoints
    const isXL = useMediaQuery(theme.breakpoints.up("xl"));
    const isLG = useMediaQuery(theme.breakpoints.up("lg"));
    const isMD = useMediaQuery(theme.breakpoints.up("md"));
    const isSM = useMediaQuery(theme.breakpoints.up("sm"));

    // Determine `perPage` dynamically based on screen size
    const perPage = useMemo(() => (isXL ? 3 : isLG ? 3 : isMD ? 2 : isSM ? 2 : 1), [isXL, isLG, isMD, isSM]);

    // Memoized styles for performance optimization
    const containerStyles = useMemo(() => ({
        background: "#f1f1f1",
        width: "99vw",
        overflow: 'hidden',
        px: { lg: theme.spacing(8), md: theme.spacing(1), sm: theme.spacing(2), xs: theme.spacing(2) },
        py: { md: 4, lg: 4, sm: 3, xs: 1 },
    }), [theme]);

    const electricStyles = useMemo(() => ({
        variant: "h4",
        fontWeight: "bold",
        color: "primary.main",
        py: 2,
        pl: 1,
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

    // Handle click event for tile items
    const handleTilePageClick = (id, title) => {
        const selectedTile = allSlides.find((item) => item.id === id);
        if (selectedTile) {
            localStorage.setItem("Electric", JSON.stringify(selectedTile)); // Use "Tile" key
            const modifiedTitle = title.replace(/ /g, "_");
            navigate(`/singleelectric/${id}?view=${modifiedTitle}`); // Navigate to the correct tile details page
        }
    };

    return (
        <Box sx={containerStyles}>
            {/* Header */}
            <Box sx={{ pb: 2 }}>
                <Typography variant="h4" fontWeight={'bold'}>Our <Typography component={'span'} {...electricStyles}>Electric Showroom</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: '3px', width: '50px' }} />
                </Typography>
            </Box>

            {/* Splide Slider */}
            <Splide options={sliderOptions}>
                {allSlides.map((item) => (
                    <SplideSlide key={item.id} style={{ display: "flex", justifyContent: "center" }}>
                        <CardComponent
                            id={item.id}
                            imagePath={item.imagePath}
                            title={item.title}
                            onClick={() => handleTilePageClick(item.id, item.title)}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </Box>
    );
};

export default React.memo(ElectricPage);
