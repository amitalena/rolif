/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useRef } from "react";
import { AccountCircle, Message } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Stack, Typography, Button, Badge, useTheme } from "@mui/material";
import gsap from "gsap";
import { format, parseISO, isValid } from "date-fns";

const BlogCard = React.memo(({ blog, handleClick }) => {
    const theme = useTheme();
    const imageRef = useRef(null);
    const overlayRef = useRef(null);
    const cardRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        // GSAP Hover Animation
        const hoverIn = () => {
            gsap.to(imageRef.current, { scale: 1.1, duration: 0.4, ease: "power2.out" });
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(cardRef.current, { backgroundColor: "rgba(255, 255, 255, 0.89)", duration: 0.4, ease: "power2.out" });
            gsap.to(textRef.current, { color: "#000", duration: 0.4, ease: "power2.out" });
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
    const formattedDate = isValid(parseISO(blog.createDate))
        ? format(parseISO(blog.createDate), "MMM dd, yyyy")
        : "Invalid Date";

    return (
        <Card
            ref={cardRef}
            elevation={0}
            sx={{ background: theme.palette.info.light, height: "100%", overflow: "hidden", position: "relative" }}
        >
            {/* Blog Image with Hover Effect */}
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
                    onClick={() => handleClick(blog.id)}
                    style={{
                        height: "100%",
                        width: "100%",
                        background: `url(${blog.imagePath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.3, ease-out"
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

            {/* Date Badge */}
            <Box
                sx={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    px: 2,
                    py: 1,
                    background: "rgba(0,0,0,0.8)",
                }}
            >
                <Typography variant="body2" fontWeight="bold" color="info.light">
                    {formattedDate}
                </Typography>
            </Box>

            {/* Author & Comments */}
            <Box sx={{ px: 3, position: "relative", bottom: 0 }}>
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                    <Typography display="flex" alignItems="center" sx={{ color: "#9e9e9e" }} variant="body2">
                        <AccountCircle sx={{ mr: 1 }} /> {blog.createdBy}
                    </Typography>
                    <Badge color="primary" badgeContent={blog.comments} >
                        <Message sx={{ mr: 0, color: "#9e9e9e" }} />
                    </Badge>
                </Stack>
            </Box>

            {/* Blog Content */}
            <CardContent>
                <Typography ref={textRef} onClick={() => handleClick(blog.id)} variant="h6" fontWeight="bold">
                    {blog.title}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography ref={textRef} variant="body2" color="text.secondary">
                    {blog.description.length > 100
                        ? `${blog.description.substring(0, 100)}...`
                        : blog.description}
                </Typography>
                <Button ref={textRef} variant="outlined" sx={{ mt: 2 }} onClick={() => handleClick(blog.id)}>
                    Read More
                </Button>
            </CardContent>
        </Card>
    );
});

export default BlogCard;
