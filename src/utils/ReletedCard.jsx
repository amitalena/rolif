/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useRef } from "react";
import { Box, Card, CardContent, Divider, Typography, useTheme } from "@mui/material";
import gsap from "gsap";

const ReletedCard = React.memo(({ view, handleClick }) => {
    const theme = useTheme();
    const imageRef = useRef(null);
    const overlayRef = useRef(null);

    // Hover Animation
    const handleMouseEnter = () => {
        gsap.to(imageRef.current, { scale: 1.1, duration: 0.4, ease: "power2.out" });
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, { scale: 1, duration: 0.4, ease: "power2.out" });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.4, ease: "power2.out" });
    };

    return (
        <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            elevation={0}
            sx={{
                background: theme.palette.info.light,
                height: "100%",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer"
            }}
        >
            {/* View Image with Hover Effect */}
            <Box
                sx={{
                    m: 2,
                    height: { xs: "200px", sm: "250px", md: "250px" },
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    ref={imageRef}
                    onClick={() => handleClick(view.id)}
                    style={{
                        height: "100%",
                        width: "100%",
                        background: `url(${view.imagePath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.3s ease-out",
                    }}
                >
                    <div
                        ref={overlayRef}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0,0,0,0.3)",
                            opacity: 0,
                            transition: "opacity 0.3s ease-out",
                        }}
                    />
                </div>
            </Box>
            {/* View Content */}
            <CardContent>
                <Typography variant="h6" fontWeight="bold">
                    {view.title}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" color="text.secondary">
                    {view.description.length > 100
                        ? `${view.description.substring(0, 100)}...`
                        : view.description}
                </Typography>
            </CardContent>
        </Card>
    );
});

export default ReletedCard;
