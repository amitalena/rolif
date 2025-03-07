import { useState } from "react";
import { Box } from "@mui/material";

const HoverImage = ({ image, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            key={index}
            sx={{
                position: "absolute",
                top: isHovered ? "50%" : image.top,
                left: isHovered ? "50%" : image.left,
                height: { md: "400px", xs: "100%" },
                width: { md: "350px", xs: "75%" },
                transition: "all 0.5s ease-in-out",
                zIndex: isHovered ? 20 : 1,
                overflow: "hidden",
                borderRadius: "10px",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.6)", // Dark overlay
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                    zIndex: 2,
                },
            }}
        >
            <img
                src={image.src}
                alt={image.alt}
                height="100%"
                width="100%"
                style={{
                    transition: "transform 0.3s ease-in-out",
                    position: "relative",
                    zIndex: 3,
                    transform: isHovered ? "translate(-50%, -50%) scale(1.1)" : "none",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </Box>
    );
};

export default HoverImage;
