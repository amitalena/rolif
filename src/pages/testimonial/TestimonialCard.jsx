/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Card, Rating, Typography } from "@mui/material";

const TestimonialCard = ({ imagePath, name, description, rating }) => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <Card
            elevation={0}
            sx={{
                width: "100%",
                background: "#fdfdfd",
                m: { md: 1, xl: 1, xs: 0, sm: 0 },
                my: 1,
                textAlign: "center",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                perspective: "1000px", // Enables 3D flip effect
            }}
        >
            {/* Flip Container */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "250px", sm: "250px", md: "250px", lg: "300px", xl: "300px" },
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s",
                    "&:hover": { transform: "rotateY(180deg)" },
                }}
            >
                {/* Front Side (Image) */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${imagePath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backfaceVisibility: "hidden",
                    }}>
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                            backgroundColor: "rgba(232, 109, 16, 0.9)",
                            opacity: 0,
                            transition: "opacity 0.4s ease-out",
                        }}
                    />
                </Box>

                {/* Back Side (Content) */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(232, 109, 16, 0.8)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        padding: 2,
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{ fontWeight: "bold", color: "white" }}
                    >
                        {name}
                    </Typography>
                    <Rating value={rating} precision={0.5} readOnly sx={{ mt: 1 }} />
                    <Typography
                        variant="body2"
                        sx={{ color: "white", mt: 1 }}
                    >
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default React.memo(TestimonialCard);
