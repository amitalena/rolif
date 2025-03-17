
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Button, Card, CardContent, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mainPageData } from "./mainPageData";

const MainPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

    const handleOnClick = (id, title) => {
        const formattedTitle = title.toLowerCase().replace(/ /g, "");

        let route = "";
        switch (formattedTitle) {
            case "civilconstruction":
                route = "/civilconstruction";
                break;
            case "interiorfit-out":
                route = "/interioroutfit";
                break;
            case "electricalservices":
                route = "/electricalservice";
                break;
            case "lightingsolution&electricalgoodssupplier":
                route = "/lighting";
                break;
            default:
                route = "/"; // Default route (optional)
                break;
        }

        navigate(`${route}/${id}`);
    };



    return (
        <Box sx={{ px: { lg: theme.spacing(8), md: theme.spacing(1), sm: theme.spacing(2), xs: theme.spacing(2) }, py: 3, }}>
            <Grid container spacing={2}>
                {mainPageData.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} xl={3} data-aos="fade-up"
                    >
                        <Card
                            elevation={0}
                            onClick={() => handleOnClick(item.id, item.title)}
                            sx={{
                                height: "250px",
                                position: "relative",
                                overflow: "hidden",
                                backgroundImage: `url(${item.imagePath})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                textAlign: "center",
                                cursor: "pointer",
                            }}
                        >
                            {/* Overlay Box */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(35,34,34, 0.8)",
                                    zIndex: 1,
                                }}
                            />

                            <CardContent
                                sx={{
                                    p: 4,
                                    position: "relative",
                                    zIndex: 2,
                                    color: theme.palette.info.light,
                                }}
                            >
                                <Stack spacing={2} direction={'column'} alignItems={'left'} justifyContent={'space-around'}>
                                    <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                        color="primary"
                                        sx={{ textTransform: 'uppercase', }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="inherit">
                                        {item.description?.split(" ").slice(0, 15).join(" ")}...
                                    </Typography>

                                    <Box sx={{ float: 'left', }}>
                                        <Button variant="contained" color="primary">Read More</Button>
                                    </Box>
                                </Stack>
                            </CardContent>

                        </Card>

                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default React.memo(MainPage);
