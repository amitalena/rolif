import { Avatar, Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { missionData } from "./missionData";
import { SupervisedUserCircleOutlined } from "@mui/icons-material";

const OurMission = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <Box sx={{ background: "#F1F2F9", py: 2, px: { md: 2, lg: 9, xl: 9, xs: 2 } }}>
            <Grid container spacing={2}>
                {missionData.map((our, index) => (
                    <Grid key={index} item xs={12} md={12} lg={4}>
                        <Card
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={index * 300}
                            elevation={1}
                            sx={{ p: 3, height: '300px' }}
                        >
                            <CardContent>
                                <Box alignContent={'center'}>
                                    <Avatar><SupervisedUserCircleOutlined /></Avatar>
                                </Box>
                                <Stack spacing={2}>
                                    <Typography variant="h4" textAlign="center" color="primary.main">
                                        {our.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {our.description}
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurMission;
