import { Box, Card, CardContent, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import { TipsAndUpdatesOutlined, VerifiedOutlined, SevereColdOutlined, Groups3Outlined } from "@mui/icons-material";
import { useMemo } from "react";

const processData = [
    { id: 1, backgroundColor: "#2B2B2B", title: "Meet Customers", icon: <Groups3Outlined sx={{ fontSize: "70px", color: "#fff" }} />, description: "We begin by understanding your specific needs and project requirements. Our team works closely with you to recommend the best products for your space or project." },
    { id: 2, backgroundColor: "#E96300", title: "Planning & Research", icon: <TipsAndUpdatesOutlined sx={{ fontSize: "70px", color: "#fff" }} />, description: "After selecting the products that suit your needs, we can also provide customizations to meet your exact specifications." },
    { id: 3, backgroundColor: "#FF8035", title: "Finalize the Design", icon: <VerifiedOutlined sx={{ fontSize: "70px", color: "#fff" }} />, description: "Once the order is confirmed, we ensure a smooth delivery process. We track your order to guarantee timely arrival and product quality." },
    { id: 4, backgroundColor: "#FF8B35", title: "Installation Assistance", icon: <SevereColdOutlined sx={{ fontSize: "70px", color: "#fff" }} />, description: "For electrical items, we offer expert guidance on installation, and we provide recommendations for professional installation services if needed." },
];

const OurProcess = () => {
    const theme = useTheme();
    const titleStyles = useMemo(() => ({
        variant: "h4",
        fontWeight: "bold",
        py: 2,
        color: "#333",
        fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
    }), []);

    return (
        <Box sx={{ py: 4, px: { xs: 2, md: 4, lg: 8 }, background: theme.palette.info.light }}>
            {/* Section Title */}
            <Typography {...titleStyles} >Our Working Process</Typography>
            <Divider sx={{ background: "#FF8035", height: 3, width: 70, mb: 4 }} />

            {/* Process Cards */}
            <Grid container justifyContent="center" >
                {processData.map((card) => (
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={card.id}>
                        <Card elevation={0} sx={{
                            height: "320px",
                            position: "relative",
                            background: card.backgroundColor,
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            p: 3,
                        }}>
                            <CardContent>
                                <Stack spacing={2} alignItems="center">
                                    {/* Icon */}
                                    {card.icon}

                                    {/* Title */}
                                    <Typography variant="h5" fontWeight="bold">
                                        {card.title}
                                    </Typography>

                                    <Divider sx={{ background: "#fff", height: 2, width: "60px", my: 1 }} />

                                    {/* Description */}
                                    <Typography variant="body2">
                                        {card.description}
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

export default OurProcess;
