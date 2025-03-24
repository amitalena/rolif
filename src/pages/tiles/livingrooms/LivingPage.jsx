/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Breadcrumbs, Typography, useMediaQuery, useTheme, Grid } from "@mui/material";
import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardSingle from "../../furniture/beds/CardSingle";
import { livingroomFloorData } from "./floors/livingroomFloorData";
import { livingroomWallData } from "./walls/livingroomWallData";
import Banner from "../../../utils/Banner";
import S1 from '../../../assets/images/banners/banner/Wall-Tiles.png';
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { motion } from 'framer-motion';

// Interleave Data Function (Merges furniture and tile data)
const interleaveData = (arr1, arr2) => {
    return arr1.flatMap((item, index) => [item, arr2[index]]).filter(Boolean);
};

// Merge Data
const allSlides = interleaveData(livingroomFloorData, livingroomWallData);

const LivingPage = ({ title }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    // Responsive breakpoints
    const isXL = useMediaQuery(theme.breakpoints.up("xl"));
    const isLG = useMediaQuery(theme.breakpoints.up("lg"));
    const isMD = useMediaQuery(theme.breakpoints.up("md"));
    const isSM = useMediaQuery(theme.breakpoints.up("sm"));

    // Determine number of items per page dynamically
    const perPage = useMemo(() => (isXL || isLG ? 3 : isMD ? 2 : isSM ? 2 : 1), [isXL, isLG, isMD, isSM]);

    // Memoized styles for performance optimization
    const containerStyles = useMemo(() => ({
        background: "#f1f2f9",
        width: "99vw",
        overflow: 'hidden',
        px: { lg: 8, md: 1, sm: 2, xs: 2 },
        py: { md: 4, lg: 3, sm: 3, xs: 1 },
    }), []);

    // Handle Click Event - Navigate to Product Page with Category & Title in URL
    const handleClick = (id, category, title) => {
        const selectedTile = allSlides.find(item => item.id === id);
        if (selectedTile) {
            localStorage.setItem("Tile", JSON.stringify(selectedTile));
            const formattedTitle = encodeURIComponent(title.replace(/\s+/g, "_"));
            const formattedCategory = encodeURIComponent(category.replace(/\s+/g, "_"));
            navigate(`/category/${formattedCategory}/product/${id}/${formattedTitle}`);
        }
    };

    return (
        <>
            <Banner
                links="furniture"
                image={S1}
                height={{ sm: "35vh", md: "45vh", xs: "40vh", lg: "55vh", xl: "50vh" }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.2)"
                spacingConfig={{ xl: 12, lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text={title}
            />

            <Box sx={{ p: 1, px: { lg: 12, md: 2, sm: 2, xs: 2 }, background: "#eee" }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} style={{ flexShrink: 0 }}>
                    <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: theme.palette.primary.main }} />} aria-label="breadcrumb">
                        <Link style={{ fontWeight: "bold", textDecoration: "none", color: theme.palette.primary.main }} to="/">
                            Home
                        </Link>
                        <Typography variant="body1" sx={{ fontWeight: "bold", color: theme.palette.info.deep }}>
                            {title}
                        </Typography>
                    </Breadcrumbs>
                </motion.div>
            </Box>

            {/* Product List */}
            <Box sx={{ px: { xl: 11, lg: 11, md: 2, sm: 2, xs: 2 } }}>
                <Grid container spacing={2}>
                    {allSlides.map((view) => (
                        <Grid key={view.id} item xs={12} sm={6} md={6} lg={3} xl={3}>
                            <CardSingle view={view} handleClick={() => handleClick(view.id, view.category, view.title)} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default React.memo(LivingPage);
