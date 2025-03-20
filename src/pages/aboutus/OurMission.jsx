import { Avatar, Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { missionData } from "./missionData";
import Ab1 from '../../assets/images/banners/banner/aboutbanner1.avif'
const OurMission = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <Box
            sx={{
                position: "relative",
                height: "100%",
                width: "100%",
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Ab1}) no-repeat center/cover`,
                backgroundAttachment: "fixed",
            }}
        >
            <Box sx={{ background: "none", pt: 8, pb: 4, px: { md: 2, lg: 9, xl: 12, xs: 2 } }}>
                <Grid container spacing={3}>
                    {missionData.map((our, index) => (
                        <Grid key={index} item xs={12} md={12} lg={4}>
                            <Box sx={{ my: 2, position: "relative", textAlign: "center" }}>
                                {/* Fixed Icon */}
                                <Avatar
                                    src={our.image}
                                    sx={{
                                        backgroundColor: "#ff8800",
                                        color: "white",
                                        width: 80,
                                        height: 80,
                                        p: 2,
                                        position: "absolute",
                                        top: -30,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        zIndex: 1
                                    }}
                                >
                                </Avatar>

                                {/* Card Content */}
                                <Card
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        pt: 6, // Extra padding on top for the icon
                                        textAlign: "center",
                                        minHeight: "300px",
                                        position: "relative",
                                    }}
                                >
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Typography variant="h4" color="primary.main">
                                                {our.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                {our.description}
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default OurMission;
