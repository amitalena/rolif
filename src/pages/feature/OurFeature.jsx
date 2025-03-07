import { Box, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import Img1 from "../../assets/images/banners/processinterior.webp";
import {
    EngineeringOutlined,
    PersonOutline,
    SevereColdOutlined,
    TipsAndUpdatesOutlined,
    VerifiedOutlined
} from "@mui/icons-material";

const featureData = [
    { name: "Consultation & Requirement Analysis", icon: PersonOutline, description: "We begin by understanding your specific needs and project requirements. Our team works closely with you to recommend the best products for your space or project." },
    { name: "Product Selection & Customization", icon: TipsAndUpdatesOutlined, description: "After selecting the products that suit your needs, we can also provide customizations to meet your exact specifications." },
    { name: "Order Placement & Delivery", icon: VerifiedOutlined, description: "Once the order is confirmed, we ensure a smooth delivery process. We track your order to guarantee timely arrival and product quality." },
    { name: "Installation Assistance", icon: SevereColdOutlined, description: "For electrical items, we offer expert guidance on installation, and we provide recommendations for professional installation services if needed." },
    { name: "Post-Sale Support", icon: EngineeringOutlined, description: "We offer reliable post-sale services, including warranty support and assistance with any issues you may encounter." },
];

const OurFeature = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: 4, px: { xs: 2, md: 2, lg: 12, xl: 12 }, background: theme.palette.info.main }}>
            <Typography variant="h3" fontWeight="bold" color="info.deep" mb={3}>
                Our Feature
                <Divider sx={{ background: theme.palette.primary.deep, height: 3, width: 100 }} />
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                    <Box sx={{ height: 500, width: "100%", position: "relative", overflow: "hidden", borderRadius: 2 }}>
                        <Box sx={{ position: "absolute", height: "90%", width: "90%", background: theme.palette.primary.main, bottom: 1, left: 50, zIndex: 1, borderRadius: 2 }} />
                        <Box sx={{ position: "absolute", height: "85%", width: "88%", border: '2px solid #000', bottom: 50, left: 30, zIndex: 1, borderRadius: 2 }} />
                        <Box sx={{ position: "absolute", height: "100%", width: "100%", top: 20, right: 20, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={Img1} alt="Process" style={{ width: "90%", height: "80%", objectFit: "cover", borderRadius: 2 }} />
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={12} lg={12} xl={8}>
                    <Grid container spacing={2}>
                        {featureData.map(({ name, icon: Icon, description }, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Box sx={{ p: 1, border: "1px solid #eee", height: "auto" }}>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Icon sx={{ fontSize: 70, color: theme.palette.primary.main }} />
                                        <Stack spacing={1}>
                                            <Typography variant="h5" fontWeight="bold" color="primary.main">{name}</Typography>
                                            <Typography variant="body2" color="info.dark">{description}</Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OurFeature;
