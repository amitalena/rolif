/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import gsap from "gsap";

const CardComponent = ({ id, imagePath, title, onClick }) => {
    const imageRef = useRef(null);
    const overlayRef = useRef(null);
    const cardRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // GSAP Hover Animation
        const hoverIn = () => {
            gsap.to(imageRef.current, { scale: 1.1, duration: 0.4, ease: "power2.out" });
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(cardRef.current, { backgroundColor: "rgba(232, 109, 16, 0.9)", duration: 0.4, ease: "power2.out" });
            gsap.to(textRef.current, { color: "white", duration: 0.4, ease: "power2.out" });
        };

        const hoverOut = () => {
            gsap.to(imageRef.current, { scale: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.4, ease: "power2.out" });
            gsap.to(cardRef.current, { backgroundColor: "#fdfdfd", duration: 0.4, ease: "power2.out" });
            gsap.to(textRef.current, { color: "black", duration: 0.4, ease: "power2.out" });
        };

        const cardElement = cardRef.current;
        if (cardElement) {
            cardElement.addEventListener("mouseenter", hoverIn);
            cardElement.addEventListener("mouseleave", hoverOut);
        }

        return () => {
            if (cardElement) {
                cardElement.removeEventListener("mouseenter", hoverIn);
                cardElement.removeEventListener("mouseleave", hoverOut);
            }
        };
    }, []);

    return (
        <Card
            ref={cardRef}
            elevation={0}
            onClick={() => onClick(id)}
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
            }}
        >
            {/* Image Container */}
            <Box
                sx={{
                    m: 2,
                    height: { xs: "250px", sm: "250px", md: "250px", lg: '250px', xl: '250px' },
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Image with Hover Effect */}
                <div
                    ref={imageRef}
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundImage: `url(${imagePath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.4s ease-out",
                    }}
                />

                {/* Hover Overlay */}
                <div
                    ref={overlayRef}
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

            <CardContent>
                <Typography
                    ref={textRef}
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1.1rem", sm: "1.25rem" },
                        transition: "color 0.4s ease-out",
                    }}
                >
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default React.memo(CardComponent);
