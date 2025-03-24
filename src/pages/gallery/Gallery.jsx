import {
    Box,
    Card,
    Grid,
    Stack,
    Typography,
    Pagination,
    Dialog,
    DialogContent,
    IconButton,
    Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import CloseIcon from "@mui/icons-material/Close";
import G1 from "../../assets/images/banners/banner/overlay.avif";

import { galleryData } from "./galleryData";
import Banner from "../../utils/Banner";

const ITEMS_PER_PAGE = 12;

const Gallery = () => {
    const [page, setPage] = useState(() => parseInt(localStorage.getItem("currentPage")) || 1);
    const [openModal, setOpenModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const totalPages = Math.ceil(galleryData.length / ITEMS_PER_PAGE);

    useEffect(() => {
        localStorage.setItem("currentPage", page);
    }, [page]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const paginatedData = galleryData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    const handleOpenModal = (index) => {
        setCurrentImageIndex(index);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const hoverStyle = () => ({
        position: "absolute",
        top: 40,
        left: 40,
        right: 40,
        bottom: 40,
        border: "2px solid transparent",
        "&::before, &::after": {
            content: '""',
            position: "absolute",
            width: 0,
            height: 0,
            transition: "width 0.4s ease, height 0.4s ease",
        },
        "&::before": {
            top: 0,
            left: 0,
            borderTop: "2px solid #FFF",
            borderLeft: "2px solid #FFF",
        },
        "&::after": {
            bottom: 0,
            right: 0,
            borderBottom: "2px solid #FFF",
            borderRight: "2px solid #FFF",
        },
        "&:hover::before, &:hover::after": {
            width: "100%",
            height: "100%",
        },
    });

    return (
        <>
            <Banner
                links="gallery"
                image={G1}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '40vh', xl: '40vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.7)"
                spacingConfig={{ lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Gallery"
            />
            {/* Content Section */}
            <Box sx={{ background: "#f1f2f5", py: 4, px: { xl: 12, lg: 12, md: 2, sm: 2, xs: 2 } }}>
                <Paper sx={{ p: 2 }}>
                    <Stack spacing={2}>
                        <Typography variant="h3">Photo Gallery</Typography>
                        <Typography variant="body2" sx={{ py: 2 }}>
                            Lorem lipsum Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upien disse comete dolo lectus fgilla itollicil tua ludin dolor. nec met quam accumsan dolore condime netus lullam utlacus adipiscing ipsum molestie
                            euismod estibulum vel.Lorem lipsum Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upien disse comete dolo lectus fgilla itollicil tua ludin dolor. nec met quam accumsan dolore condime netus lullam utlacus adipiscing ipsum molestie euismod estibulum vel.
                        </Typography>
                    </Stack>
                    {/* Grid Layout */}
                    <Grid container spacing={2} justifyContent="center">
                        {paginatedData.map((tour, index) => (
                            <Grid key={index} item xs={12} sm={6} md={6} lg={3} xl={3}>
                                <Card
                                    elevation={3}
                                    sx={{
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        cursor: "pointer",
                                        position: "relative",
                                    }}
                                    onClick={() => handleOpenModal(index)}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        style={{
                                            height: "200px",
                                            backgroundImage: `url(${tour.imagePath})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {/* Hover Effect */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                transition: "background-color 0.3s ease",
                                                overflow: "hidden",
                                                "&:hover": {
                                                    backgroundColor: "rgba(232, 109, 16, 0.9)",
                                                    color: "#fff",
                                                },
                                            }}
                                        >
                                            {/* Inner Box with Progressive Border Animation */}
                                            <Box
                                                sx={hoverStyle}
                                            />

                                            <Typography>
                                                {tour.name}
                                            </Typography>

                                        </Box>

                                    </motion.div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Pagination */}
                    <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
                        <Pagination count={totalPages} variant="outlined" shape="rounded" page={page} onChange={handleChange} color="primary" sx={{ "& .Mui-selected": { backgroundColor: "#FF8080", color: "#FDFDFD" } }} />
                    </Stack>
                </Paper>
            </Box>

            {/* Image Slider Modal */}
            <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
                <DialogContent sx={{ position: "relative", p: 0 }}>
                    <IconButton onClick={handleCloseModal} sx={{ position: "absolute", top: 10, right: 10, background: "white", zIndex: 2 }}>
                        <CloseIcon />
                    </IconButton>
                    <Splide options={{ type: "loop", perPage: 1, autoplay: true, arrows: true, pagination: true, start: currentImageIndex }}>
                        {galleryData.map((item, index) => (
                            <SplideSlide key={index}>
                                <img src={item.imagePath} alt={item.country} style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                            </SplideSlide>
                        ))}
                    </Splide>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Gallery;