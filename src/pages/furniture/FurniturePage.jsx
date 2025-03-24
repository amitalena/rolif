/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useNavigate } from "react-router-dom";
import CardComponent from "../../utils/CardComponent";
import { bedData } from './beds/bedData';
import { chairData } from './chairs/chairData';
import { tableData } from './tables/tableData';
import { sofaData } from './sofas/sofaData';

const interleaveData = (arr1, arr2, arr3, arr4) => {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length, arr3.length, arr4.length);

    for (let i = 0; i < maxLength; i++) {
        if (arr1[i]) result.push(arr1[i]);
        if (arr2[i]) result.push(arr2[i]);
        if (arr3[i]) result.push(arr3[i]);
        if (arr4[i]) result.push(arr4[i]);
    }

    return result;
};

const allSlides = interleaveData(bedData, chairData, tableData, sofaData);

const FurniturePage = ({ id, imagePath, title, description }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isXL = useMediaQuery(theme.breakpoints.up("xl"));
    const isLG = useMediaQuery(theme.breakpoints.up("lg"));
    const isMD = useMediaQuery(theme.breakpoints.up("md"));
    const isSM = useMediaQuery(theme.breakpoints.up("sm"));

    const perPage = useMemo(() => (isXL ? 3 : isLG ? 3 : isMD ? 2 : isSM ? 2 : 1), [isXL, isLG, isMD, isSM]);

    const containerStyles = useMemo(() => ({
        background: "#f1f1f1",
        width: "99vw",
        overflow: 'hidden',
        px: { lg: theme.spacing(8), md: theme.spacing(1), sm: theme.spacing(2), xs: theme.spacing(2) },
        py: { md: 4, lg: 3, sm: 3, xs: 1 },
    }), [theme]);

    const furnitureStyles = useMemo(() => ({
        variant: "h4",
        fontWeight: "bold",
        color: 'primary.main',
        py: 2,
    }), []);

    const sliderOptions = useMemo(() => ({
        type: "loop",
        autoplay: true,
        interval: 3000,
        arrows: true,
        pagination: false,
        pauseOnHover: true,
        perPage,
    }), [perPage]);

    const handleFurniturePageClick = (id, title) => {
        const selectedFurniture = allSlides.find((item) => item.id === id);
        if (selectedFurniture) {
            localStorage.setItem("Furniture", JSON.stringify(selectedFurniture));
            const modifiedTitle = title.replace(/ /g, "_");
            navigate(`/singlefurniture/${id}?view=${modifiedTitle}`);
        }
    };
    return (
        <Box sx={containerStyles}>
            <Box sx={{ pb: 2 }}>
                <Typography variant="h4" fontWeight={'bold'}>Our <Typography component={'span'} {...furnitureStyles}>Furniture Showroom</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: '3px', width: '50px' }} />
                </Typography>
            </Box>

            <Splide options={sliderOptions}>
                {allSlides.map((item) => (
                    <SplideSlide data-aos="zoom-in" key={item.id} style={{ display: "flex", justifyContent: "center" }}>
                        <CardComponent
                            id={item.id}
                            imagePath={item.imagePath}
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

FurniturePage.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default React.memo(FurniturePage);