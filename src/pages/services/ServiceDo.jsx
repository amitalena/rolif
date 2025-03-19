import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Grid, Divider, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Ab1 from "../../assets/images/civil/civil2.webp";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./servicesData";

const ServiceDo = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleClick = (id) => {
        const selectedTiles = servicesData.find((item) => item.id === id);
        if (selectedTiles) {
            localStorage.setItem("Tiles", JSON.stringify(selectedTiles));
            navigate(`/interior/${id}`);
        }
    };

    return (
        <Box
            sx={{
                position: "relative",
                height: "100%",
                width: "100%",
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Ab1})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
            }}
        >
            <Box
                sx={{
                    height: "100%",
                    width: "100%",
                    px: { md: 5, sm: 5, lg: 8, xs: 2 },
                    py: { md: 5, sm: 5, lg: 8, xs: 2 },
                }}
            >
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="info.main"
                    data-aos="fade-up"
                >
                    Service We Do
                </Typography>
                <Divider
                    sx={{
                        background: theme.palette.primary.deep,
                        height: "3px",
                        width: "130px",
                        my: 2,
                    }}
                    data-aos="fade-up"
                />
                <Grid container spacing={2}>
                    {servicesData.map((view) => (
                        <Grid
                            key={view.id}
                            item xs={12} sm={6} md={6} lg={4} xl={4}
                            data-aos="zoom-in"
                        >
                            <ServiceCard
                                imagePath={view.imagePath}
                                title={view?.title}
                                description={view?.description}
                                handleClick={handleClick} />
                        </Grid>
                    ))}
                </Grid>
                {/* <Grid container spacing={2}>
                    {electricServiceData.map((electric) => (
                        <Grid
                            key={electric.id}
                            item xs={12} sm={6} md={6} lg={3} xl={3}
                            data-aos="zoom-in"
                        >
                            <ServiceCard
                                imagePath={electric.imagePath}
                                title={electric?.title}
                                description={electric?.description}
                                onClick={handleClick} />
                        </Grid>
                    ))}
                </Grid> */}
            </Box>
        </Box>
    );
};

export default ServiceDo;
