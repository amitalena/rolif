/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Grid, Stack, Typography, useTheme, Card, CardMedia, Breadcrumbs } from "@mui/material";
import { motion } from 'framer-motion';
import React, { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReletedProduct from "../pages/furniture/ReletedProduct";
import Banner from "./Banner";
import S1 from '../assets/images/banners/banner/sofa.png'

const ViewComponent = React.memo(({ view }) => {
    const { palette } = useTheme();
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(view.imagePath);
    const [zoomOrigin, setZoomOrigin] = useState("center");
    // Fetch product details when route changes
    useEffect(() => {
        const selectedFurniture = JSON.parse(localStorage.getItem("Furniture"));
        if (selectedFurniture && selectedFurniture.id === parseInt(id, 10)) {
            setSelectedImage(selectedFurniture);
            setSelectedImage(selectedFurniture.imagePath); // Set default image
        }
    }, [id]);

    const handleThumbnailClick = useCallback((imagePath) => {
        setSelectedImage(imagePath);
    }, []);

    const handleMouseMove = useCallback((event) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - left) / width) * 100;
        const y = ((event.clientY - top) / height) * 100;
        setZoomOrigin(`${x}% ${y}%`);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setZoomOrigin("center");
    }, []);

    return (
        <>
            <Banner
                title="Single Page"
                image={S1}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '55vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.2)"
                spacingConfig={{ xl: 12, lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Living Room"
            />
            {/* <Toolbar /> */}
            <Box sx={{ p: 1, px: { lg: 12, md: 2, sm: 2, xs: 2 }, background: '#eee' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ flexShrink: 0 }}
                >
                    <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: palette.primary.main }} />} aria-label="breadcrumb">
                        <Link style={{ fontWeight: 'bold', textDecoration: 'none', color: palette.primary.main }} to="/">Home</Link>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: palette.info.deep }}>
                            {view.title}
                        </Typography>
                    </Breadcrumbs>
                </motion.div>
            </Box>
            <Box sx={{
                // mt: { xl: spacing(11), lg: spacing(11), md: spacing(2), sm: spacing(2), xs: spacing(1) },
                my: 2, px: { lg: 12, md: 2, sm: 2, xs: 2 }
            }}>

                <Grid container spacing={2}>
                    {/* Thumbnail Images */}
                    <Grid item xs={3} xl={1} lg={2} md={2} sm={12}>
                        <Stack spacing={1} sx={{ display: "flex", alignItems: "center", flexDirection: { md: "column", xs: "column" } }}>
                            {view?.images?.map((image, index) => (
                                <Box key={index}
                                    sx={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        height: "105px", width: "95px", cursor: "pointer",
                                        transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.05)" },
                                    }}
                                    onClick={() => handleThumbnailClick(image.imagePath)}
                                >
                                    <img src={image.imagePath} alt={`Thumbnail ${index + 1}`} height="90%" width="90%" />
                                </Box>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Main Image Display */}
                    <Grid item xs={9} xl={6} md={10} lg={6}>
                        <Stack direction="row" spacing={2}>
                            <Card elevation={0}
                                sx={{ height: "auto", width: '100%', overflow: "hidden", position: "relative", }}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <CardMedia component="img" image={selectedImage} alt="Main view Image"
                                    sx={{
                                        height: { lg: "60vh", md: '50vh', xs: '67vh' }, width: "100%", transition: "transform 0.3s ease-in-out",
                                        transformOrigin: zoomOrigin, "&:hover": { cursor: "pointer", transform: "scale(1.7)" },
                                    }}
                                />
                            </Card>
                        </Stack>
                    </Grid>

                    {/* Content Side */}
                    <Grid item xs={12} xl={4} md={12} lg={4}>
                        <Stack spacing={2}>
                            <Typography variant="h4" color="primary.main" fontWeight="bold">
                                {view.title}
                            </Typography>
                            <Typography variant="body2">{view.description}</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <ReletedProduct />
        </>
    );
});

export default ViewComponent;