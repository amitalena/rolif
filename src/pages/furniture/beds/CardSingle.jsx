/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const CardSingle = ({ view, handleClick }) => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <Card
            elevation={0}
            onClick={() => handleClick(view.id)}
            sx={{
                width: "100%",
                background: "#f1f2f9",
                m: { md: 1, xl: 1, xs: 0, sm: 0 },
                my: 1,
                textAlign: "center",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
            }}
            data-aos="fade-up" // Add AOS fade-up animation
        >
            {/* Image Container */}
            <Box
                sx={{
                    height: { xs: "250px", sm: "350px", md: "400px", },
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Image */}
                <div
                    style={{
                        height: "100%",
                        backgroundImage: `url(${view?.imagePath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                {/* Hover Overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                        backgroundColor: "rgba(0,0,0, 0.5)",
                        opacity: 0,
                        transition: "opacity 0.4s ease-out",
                    }}
                />
            </Box>

            {/* Card Content */}
            <CardContent>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                    }}
                >
                    {view?.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default React.memo(CardSingle);