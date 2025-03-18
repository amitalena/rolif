/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Card, CardContent, Typography } from "@mui/material";

const ServiceCard = ({ id, imagePath, title, handleClick }) => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <Card
            elevation={0}
            handleClick={() => handleClick(id)}
            data-aos="fade-up"
            sx={{
                width: '100%',
                background: "#fdfdfd",
                m: { md: 1, xl: 1, xs: 0, sm: 0 },
                my: 1,
                textAlign: "center",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                transition: "background 0.4s ease-out",
                "&:hover": {
                    background: "rgba(232, 109, 16, 0.9)",
                },
            }}
        >
            {/* Image Container */}
            <Box
                sx={{
                    height: { xs: "250px", sm: "250px", md: "250px", lg: '250px', xl: '250px' },
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Image */}
                <Box
                    sx={{
                        height: "100%",
                        backgroundImage: `url(${imagePath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.4s ease-out",
                        "&:hover": { transform: "scale(1.2)" },
                    }}
                />

                {/* Hover Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                        background: "rgba(232, 109, 16, 0.4)",
                        opacity: 0,
                        transition: "opacity 0.4s ease-out",
                        "&:hover": { opacity: 1 },
                    }}
                />
            </Box>

            <CardContent>
                <Typography
                    variant="h6"
                    data-aos="fade-up"
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.0rem" },
                        transition: "color 0.4s ease-out",
                        "&:hover": { color: "white" },
                    }}
                >
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default React.memo(ServiceCard);
