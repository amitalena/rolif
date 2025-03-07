/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack, Typography, Grid, Divider, useTheme } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Ab1 from "../../assets/images/interior/f6.webp";

const ParaEffect = () => {
    const theme = useTheme();
    const counterRefs = useRef([]);
    const [counters, setCounters] = useState([0, 0, 0, 0]); // Initial state

    // Counter Data
    const counterData = [
        { target: 1000, label: "Projects Completed" },
        { target: 500, label: "Happy Clients" },
        { target: 300, label: "Awards Won" },
        { target: 150, label: "Team Members" },
    ];

    // Detect when counter section comes into view
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Animate Counter when in view
    useEffect(() => {
        if (isInView) {
            counterData.forEach((item, index) => {
                let start = 0;
                const interval = setInterval(() => {
                    start += Math.ceil(item.target / 50); // Smooth increment
                    if (start >= item.target) {
                        start = item.target;
                        clearInterval(interval);
                    }
                    setCounters((prev) => {
                        const newCounters = [...prev];
                        newCounters[index] = start;
                        return newCounters;
                    });
                }, 50);
            });
        }
    }, [isInView]);

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            sx={{
                position: "relative",
                backgroundImage: `url(${Ab1})`,
                height: { xl: '70vh', lg: '100%', md: "100%", sm: '100%', xs: '100%' },
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                zIndex: 0,
            }}
        >
            <Box
                sx={{
                    height: "100%",
                    width: "100%",
                    background: "rgba(0,0,0,0.7)",
                }}
            >
                <Typography sx={{ py: { xl: 3, lg: 3, md: 3, xs: 2 }, px: { md: 5, sm: 5, lg: 12, xs: 2 } }} variant="h3" fontWeight="bold" color="info.main">
                    Want to know more about us?
                    <Divider
                        sx={{
                            background: theme.palette.primary.deep,
                            height: "3px",
                            width: "130px",
                        }}
                    />
                </Typography>
                <Grid
                    container
                    spacing={3}
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ px: { md: 5, sm: 5, lg: 12, xs: 2 }, py: 2 }}
                >
                    {/* Left Section */}
                    <Grid item xs={12} md={6} display="flex" justifyContent="center">
                        <Box
                            component={motion.div}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
                            textAlign="center"
                        >
                            <Stack spacing={3}>
                                <Typography variant="body2" sx={{ color: "#FDFDFD" }}>
                                    Etiam eget diam ligula. Sed at blandit ante. Vivamus feugiat,
                                    lacus eu suscipit mattis, tortor mi aliquam leo, quis laoreet
                                    ante sem sed sapien. Phasellus id convallis ligula. Aliquam
                                    erat volutpat.
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#FDFDFD" }}>
                                    Etiam eget diam ligula. Sed at blandit ante. Vivamus feugiat,
                                    lacus eu suscipit mattis, tortor mi aliquam leo, quis laoreet
                                    ante sem sed sapien. Phasellus id convallis ligula. Aliquam
                                    erat volutpat.
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#FDFDFD" }}>
                                    Etiam eget diam ligula. Sed at blandit ante. Vivamus feugiat,
                                    lacus eu suscipit mattis, tortor mi aliquam leo, quis laoreet
                                    ante sem sed sapien. Phasellus id convallis ligula. Aliquam
                                    erat volutpat.
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Right Section - Counter Boxes */}
                    <Grid
                        ref={ref}
                        item
                        xs={12}
                        md={6}
                        container
                        spacing={3}
                        justifyContent="center"
                    >
                        {counterData.map((item, index) => (
                            <Grid key={index} item xs={6} display="flex" justifyContent="center">
                                <Box
                                    sx={{
                                        border: "2px solid #fff",
                                        height: "150px",
                                        width: "250px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "#fff",
                                        textAlign: "center",
                                    }}
                                >
                                    {/* Animated Counter */}
                                    <motion.span
                                        ref={(el) => (counterRefs.current[index] = el)}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 1.5, delay: 0.2 * index },
                                        }}
                                        style={{
                                            fontSize: "2rem",
                                            fontWeight: "bold",
                                            display: "block",
                                        }}
                                    >
                                        {counters[index]}
                                    </motion.span>
                                    <Typography variant="body2">{item.label}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ParaEffect;
