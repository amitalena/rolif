import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import { Facebook } from "@mui/icons-material";

const hoverEffect = (
    <motion.div
        whileHover={{
            scale: 1.2, // Scale up
            rotateY: 180, // Flip horizontally
            backgroundColor: "#000", // Change background color
            color: "#f50", // Change icon color
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f50",
            color: "#fff",
            borderRadius: "50%", // Circular shape
            width: 40,
            height: 40,
            cursor: "pointer",
        }}
    >
        <IconButton sx={{ color: "inherit" }}>
            <Facebook />
        </IconButton>
    </motion.div>
);

export default hoverEffect;