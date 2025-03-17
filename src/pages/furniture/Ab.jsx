/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import React, { useEffect, useMemo } from "react";
import CardComponent from "../../utils/CardComponent";
import { useNavigate } from "react-router-dom";
import { fetchProductsByCategoryId } from "../../features/reduxslice/products/productSlice";
import { useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
const IMG_BASE_URL = "http://localhost:5001/uploads/products";

const FurniturePage = ({ title, description }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productCategory, loading } = useSelector((state) => state.product);
    // Responsive breakpoints
    const isXL = useMediaQuery(theme.breakpoints.up("xl"));
    const isLG = useMediaQuery(theme.breakpoints.up("lg"));
    const isMD = useMediaQuery(theme.breakpoints.up("md"));
    const isSM = useMediaQuery(theme.breakpoints.up("sm"));

    const categoryId = "67c270048881bfdbc852ab5c"; // Replace with dynamic ID if needed

    // Determine `perPage` dynamically based on screen size
    const perPage = useMemo(() => (isXL ? 3 : isLG ? 3 : isMD ? 2 : isSM ? 2 : 1), [isXL, isLG, isMD, isSM]);

    // Memoized styles for performance optimization
    const containerStyles = useMemo(() => ({
        background: "#f1f1f1",
        width: "99vw",
        overflow: 'hidden',
        px: { lg: theme.spacing(4), md: theme.spacing(1), sm: theme.spacing(2), xs: theme.spacing(2) },
        py: { md: 3, lg: 3, sm: 3, xs: 1 },
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
    const handleFurniturePageClick = (id, title) => {
        const selectedFurniture = productCategory.find((item) => item.id === id);
        if (selectedFurniture) {
            localStorage.setItem("Furniture", JSON.stringify(selectedFurniture));
            const modifiedTitle = title.replace(/ /g, "_");
            navigate(`/singlefurniture/${id}?view=${modifiedTitle}`);
        }
    };
    useEffect(() => {
        if (categoryId) {
            dispatch(fetchProductsByCategoryId(categoryId))
                .then(unwrapResult)
                .catch((error) => {
                    console.error('Error fetching products:', error);
                });
        }
    }, [dispatch, categoryId]);

    return (
        <Box sx={containerStyles}>
            {/* Header */}
            <Box>
                <Typography {...furnitureStyles}>Our Furniture</Typography>
                <Divider sx={{ background: theme.palette.primary.deep, ml: 1, height: '3px', width: '180px' }} />
            </Box>

            {/* Splide Slider */}
            <Splide options={sliderOptions}>
                {productCategory?.map((item) => (
                    <SplideSlide key={item.id} style={{ display: "flex", justifyContent: "center" }}>
                        <CardComponent
                            id={item.id}
                            imagePath={`${IMG_BASE_URL}/${item.productImage}`}
                            title={item?.title}
                            description={item?.description}
                            onClick={() => handleFurniturePageClick(item.id, item.title)}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </Box>
    );
};

export default React.memo(FurniturePage);
