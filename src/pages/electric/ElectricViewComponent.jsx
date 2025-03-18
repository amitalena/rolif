/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { KeyboardDoubleArrowRight, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Grid, Stack, Typography, useTheme, Card, CardMedia, Breadcrumbs, IconButton, Button } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import S1 from "../../assets/images/banners/banner/electric.avif";

// import ReletedProduct from "../pages/furniture/ReletedProduct";
import Banner from './../../utils/Banner';
import EnquiryForm from './../EnquiryForm';
import ReletedProduct from './../furniture/ReletedProduct';


const ElectricViewComponent = React.memo(({ view }) => {
    const { palette } = useTheme();
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(view?.imagePath);
    const [zoomOrigin, setZoomOrigin] = useState("center");
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [enquiryModalOpen, setEnquiryModalOpen] = useState(false); // State for Enquiry Modal

    useEffect(() => {
        const selectedElectric = JSON.parse(localStorage.getItem("Electric"));
        if (selectedElectric && selectedElectric.id === parseInt(id, 10)) {
            setSelectedImage(selectedElectric.imagePath);
        }
    }, [id]);

    useEffect(() => {
        if (isHovered || !view?.images?.length) return;
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % view.images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered, view?.images]);

    useEffect(() => {
        if (view?.images?.length) {
            setSelectedImage(view.images[activeIndex].imagePath);
        }
    }, [activeIndex, view?.images]);

    const handleThumbnailClick = useCallback((imagePath, index) => {
        setSelectedImage(imagePath);
        setActiveIndex(index);
    }, []);

    const handlePrevImage = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? view.images.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % view.images.length);
    };

    const handleMouseMove = useCallback((event) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - left) / width) * 100;
        const y = ((event.clientY - top) / height) * 100;
        setZoomOrigin(`${x}% ${y}%`);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setZoomOrigin("center");
    }, []);

    // Handle Enquiry Form Submission
    const handleEnquirySubmit = (formData) => {
        console.log("Enquiry Form Data:", formData); // Replace with your submission logic
        setEnquiryModalOpen(false); // Close modal after submission
    };

    return (
        <>
            <Banner
                title="Electric"
                image={S1}
                height={{ sm: "35vh", md: "45vh", xs: "40vh", lg: "55vh", xl: "50vh" }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.2)"
                spacingConfig={{ xl: 12, lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Electric"
            />
            <Box sx={{ p: 1, px: { lg: 12, md: 2, sm: 2, xs: 2 }, background: "#eee" }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} style={{ flexShrink: 0 }}>
                    <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: palette.primary.main }} />} aria-label="breadcrumb">
                        <Link style={{ fontWeight: "bold", textDecoration: "none", color: palette.primary.main }} to="/">
                            Home
                        </Link>
                        <Typography variant="body1" sx={{ fontWeight: "bold", color: palette.info.deep }}>
                            {view.title}
                        </Typography>
                    </Breadcrumbs>
                </motion.div>
            </Box>
            <Box sx={{ my: 2, px: { lg: 12, md: 2, sm: 2, xs: 2 } }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} xl={6} md={12} lg={6}>
                        <Stack direction="row" spacing={2}>
                            <Card
                                elevation={0}
                                sx={{ height: "auto", width: "100%", overflow: "hidden", position: "relative" }}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <CardMedia
                                    component="img"
                                    image={selectedImage}
                                    alt="Main view Image"
                                    sx={{
                                        height: { lg: "60vh", md: "50vh", xs: "67vh" },
                                        width: "100%",
                                        transition: "transform 0.3s ease-in-out",
                                        transformOrigin: zoomOrigin,
                                        "&:hover": { cursor: "crosshair", transform: "scale(1.7)" },
                                    }}
                                />
                            </Card>
                        </Stack>
                    </Grid>
                    {/* Product Details */}
                    <Grid item xs={12} xl={4} md={12} lg={4}>
                        <Stack spacing={2}>
                            <Typography variant="h4" color="primary.main" fontWeight="bold">
                                {view.title}
                            </Typography>
                            <Typography variant="body2">{view.description}</Typography>
                            {/* Enquiry Button */}
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => setEnquiryModalOpen(true)}
                                sx={{ mt: 2, width: "fit-content" }}
                            >
                                Enquiry
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} xl={12} lg={12} md={12} sm={12}>
                        <Stack
                            spacing={2}
                            sx={{ display: "flex", alignItems: "center", flexDirection: 'row' }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <IconButton onClick={handlePrevImage} size="small">
                                <ArrowBackIos fontSize="small" />
                            </IconButton>
                            {view?.images?.map((image, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: { md: "100px", xs: '100%' },
                                        width: { md: "100px", xs: '100%' },
                                        cursor: "pointer",
                                        transition: "transform 0.3s ease",
                                        border: activeIndex === index ? "2px solid #1976d2" : "none",
                                        "&:hover": { transform: "scale(1.05)" },
                                    }}
                                    onClick={() => handleThumbnailClick(image.imagePath, index)}
                                >
                                    <img src={image.imagePath} alt={`Thumbnail ${index + 1}`} height="90%" width="90%" />
                                </Box>
                            ))}
                            <IconButton onClick={handleNextImage} size="small">
                                <ArrowForwardIos fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            {/* Enquiry Form Modal */}
            <EnquiryForm
                open={enquiryModalOpen}
                onClose={() => setEnquiryModalOpen(false)}
                onSubmit={handleEnquirySubmit}
            />
            <ReletedProduct />
        </>
    );
});

export default ElectricViewComponent;