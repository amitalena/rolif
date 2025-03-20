import { Box, Divider, Grid, Stack, Typography, useTheme } from "@mui/material"
import Ab1 from '../../assets/images/banners/banner/value1.avif'
import Ab2 from '../../assets/images/banners/banner/vision0.avif'

const OurVision = () => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ background: "#F1F2F9", pt: 8, pb: 4, px: { md: 2, lg: 9, xl: 12, xs: 2 } }}>
                <Grid container justifyContent={'space-between'}>
                    <Grid item xs={12} lg={6}>
                        <Stack spacing={2}>
                            <Typography variant="h4" sx={{ mb: '10px' }}>
                                Our <Typography component={'span'} variant="h4" color="primary">Vision</Typography>
                                <Divider sx={{ background: theme?.palette.primary.deep, height: '3px', width: '50px' }} />
                            </Typography>
                            <Typography variant="body2">
                                We expanded Rolif India Pvt Ltd into the Design & Build contracting business.
                                It is a highly sensitive business that requires a good amount of technical knowledge, expertise, and specialization with potential manpower.
                            </Typography>
                            <Typography variant="body2">
                                Overcoming challenge after challenge with the support of my brilliant team,
                                I have been successful in bringing Rolif to a new milestone of recognition.
                                My main focus in this upcoming business shall be "Customer Satisfaction."
                                I am confident that the company will be recognized as a contracting business globally
                                and will continue to scale milestones of excellence for years to come with the support of my team members.
                            </Typography>
                        </Stack>
                    </Grid>
                    {/* Grid 2 - Animate from right */}
                    <Grid item md={12} lg={5} xs={12} initial="hidden" whileInView="visible" viewport={{ once: true }} >
                        <Box component="img" src={Ab2} sx={{ width: '100%', height: '40vh' }} alt={Ab2} />
                    </Grid>
                </Grid>
                <Grid container spacing={3} >
                    <Grid item xs={12}>
                        <Typography variant="h4" sx={{ mb: '10px' }}>
                            Our <Typography component={'span'} variant="h4" color="primary">Corporate Values</Typography>
                            <Divider sx={{ background: theme?.palette.primary.deep, height: '3px', width: '50px' }} />
                        </Typography>
                    </Grid>
                    {/* Grid 2 - Animate from right */}
                    <Grid item md={12} lg={5} xs={12} initial="hidden" whileInView="visible" viewport={{ once: true }} >
                        <Box component="img" src={Ab1} sx={{ width: '100%', height: '50vh' }} alt={Ab1} />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <Stack spacing={2}>
                            <Typography variant="body2">
                                <Typography variant="h5" fontWeight="bold">Integrity:</Typography>
                                We always strive to practice the highest standards of honesty, truthfulness, reliability,
                                and fairness in every aspect of our work and in all our business relationships.
                            </Typography>

                            <Typography variant="body2">
                                <Typography variant="h5" fontWeight="bold">Teamwork:</Typography>
                                We respect the ideas and opinions of others and share knowledge to support each
                                other in achieving the company's goal of excellence.
                            </Typography>

                            <Typography variant="body2">
                                <Typography variant="h5" fontWeight="bold">Honesty:</Typography>
                                We will be truthful, accurate, and forthcoming in our dealings with fellow
                                employees, customers, clients, vendors, suppliers, agencies, and the general public.
                            </Typography>

                            <Typography variant="body2">
                                <Typography variant="h5" fontWeight="bold">Excellence:</Typography>
                                We will make every effort to ensure that our workmanship, construction
                                practices, and services are the best in the marketplace. We achieve this
                                through continuous improvements in quality, safety, innovation, and reliability standards.
                            </Typography>

                            <Typography variant="body2">
                                <Typography variant="h5" fontWeight="bold">Corporate Citizenship:</Typography>
                                We will be good corporate citizens by making social responsibility,
                                accountability, and respect for the law, economy, environment, and society
                                an integral part of our business activities. Our goal is to create value
                                for our clients and the communities in which we work.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default OurVision