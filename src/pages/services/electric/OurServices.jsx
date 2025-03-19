import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography, useTheme } from "@mui/material"

import P1 from '../../../assets/images/interior/interiorimg/ourprocess.avif'
import Ch1 from '../../../assets/images/interior/interiorimg/whychooseus.avif'
import { electricServiceData } from "./electricServiceData";

const OurServices = () => {
    const theme = useTheme();

    return (
        <>
            <Box>

                <Typography variant="h4" sx={{ py: 2, color: theme.palette.primary.main }}>Our Services</Typography>
                <Grid container spacing={3}>
                    {electricServiceData.map((service, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                                <CardMedia
                                    component="img"
                                    image={service.img}
                                    alt={service.title}
                                    sx={{ width: { xs: "100%", md: 250 }, height: 250, objectFit: "cover" }}
                                />
                                <CardContent>
                                    <Typography variant="h5" color="primary" gutterBottom>{service.title}</Typography>
                                    <Stack spacing={1}>
                                        {service.details.map((item, i) => (
                                            <Typography key={i} variant="body2">
                                                <Typography variant="body1" component="span" fontWeight="bold">{item.title}: </Typography>
                                                {item.desc}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h4" fontWeight={'bold'} sx={{ py: 2, color: theme.palette.primary.main }}>Our Process</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Stack spacing={2}>
                            <Typography variant="body2"><Typography variant="body1">Initial Consultation & Site Assessment:</Typography> We begin by understanding your electrical needs, reviewing your project’s requirements, and assessing the site to provide an accurate plan.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Design & Planning:</Typography> Our expert electricians design a safe and effective electrical system, creating blueprints and system plans that ensure maximum efficiency.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Installation & Execution:</Typography> Using high-quality materials and the latest industry standards, we carry out the installation of the electrical system, ensuring full compliance with safety protocols.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Testing & Inspection:</Typography> After installation, we conduct thorough testing and inspections to confirm that the system is fully operational and safe.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Ongoing Maintenance & Support:</Typography> We provide continuous support through routine maintenance, inspections, and troubleshooting, ensuring that your electrical systems remain in optimal condition.</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box sx={{ height: '350px', width: { md: '100%', xs: '100%' } }}>
                            <img src={P1} alt="Interior" height={'100%'} width={'100%'} />
                        </Box>
                    </Grid>
                </Grid>

                <Typography variant="h4" fontWeight={'bold'} sx={{ py: 2, color: theme.palette.primary.main }}>Why choose us</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Stack spacing={2}>
                            <Typography variant="body2"><Typography variant="body1">Licensed & Certified Professionals:</Typography> All our electricians are licensed, trained, and follow strict safety protocols to ensure high-quality service.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Custom Solutions:</Typography> We offer tailored electrical solutions to meet the specific needs of your home, business, or industrial facility.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Timely & Reliable:</Typography> We understand the importance of time, and our team works diligently to ensure projects are completed on schedule.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Competitive Pricing:</Typography> We offer transparent, upfront pricing with no hidden fees, ensuring value for money on every project.</Typography>
                            <Typography variant="body2"><Typography variant="body1">24/7 Emergency Services:</Typography> Electrical emergencies can happen at any time, and we offer 24/7 emergency services to restore power and safety when you need it most.</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box sx={{ height: '350px', width: { md: '100%', xs: '100%' } }}>
                            <img src={Ch1} alt="Interior" height={'100%'} width={'100%'} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default OurServices