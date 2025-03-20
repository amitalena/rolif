import { Box, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import Ab1 from '../../assets/images/banners/banner/safery0.avif';
import Ab2 from '../../assets/images/banners/banner/safey2.avif';
import Q2 from '../../assets/images/banners/banner/qualpannel2.avif';
import Q1 from '../../assets/images/banners/banner/qualitpannel2.jpg';
import Q3 from '../../assets/images/banners/banner/qopp2.avif';
import Q4 from '../../assets/images/banners/banner/saftypanel.jpg';
const SafetyInfo = () => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    background: `linear-gradient(to right,rgba(236, 128, 50,0.9), rgba(239, 235, 235, 0.5))`,
                    py: 4, px: { xs: 2, md: 2, lg: 9, xl: 12 },
                    color: "white"
                }}
            >
                <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                    {/* Left Side Content */}
                    <Grid item xs={12} lg={5}>
                        <Stack spacing={2}>
                            <Typography variant="h4" sx={{ mb: 1 }}>
                                Safely <Typography component="span" variant="h4" color="primary">Information</Typography>
                            </Typography>
                            <Divider sx={{ backgroundColor: theme.palette.primary.deep, height: '3px', width: '70px' }} />
                            <Typography variant="body2">
                                We at Rolif recognize that high standards of health, safety, and environmental protection
                                are integral for the growth of the organization and its people.
                                We are committed to providing a safe & healthy workplace for all employees and
                                preventing any untoward incidents/accidents, injuries, and ill health of any employees,
                                contractors, and other relevant stakeholders.
                                We also aim to take adequate measures to protect the environment and prevent
                                environmental pollution.
                                Safety training & the use of PPE is mandatory at project sites.
                            </Typography>

                        </Stack>
                    </Grid>

                    {/* Right Side Image */}
                    <Grid item xs={12} md={3.5} lg={3.5}>
                        <Box component="img" src={Ab1} sx={{ width: "100%", height: "40vh", borderRadius: 2 }} alt="Vision" />
                    </Grid>
                    {/* Right Side Image */}
                    <Grid item xs={12} md={3.5} lg={3.5}>
                        <Box component="img" src={Ab2} sx={{ width: "100%", height: "40vh", borderRadius: 2 }} alt="Vision" />
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    background: `linear-gradient(to right,rgba(2, 2, 2, 0.9), rgba(156, 156, 156, 0.8)), url(${Q2}) no-repeat center/cover`,
                    py: 4, px: { xs: 2, md: 2, lg: 9, xl: 12 },
                    color: "white"
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Stack spacing={2} >
                            <Typography variant="h4" sx={{ mb: 1 }}>
                                Quality <Typography component="span" variant="h4" color="primary">Assurance Program</Typography>
                            </Typography>
                            <Divider sx={{ backgroundColor: theme.palette.primary.deep, height: '3px', width: '70px' }} />
                            <Typography variant="body2">
                                Rolif believes that quality is an intrinsic element of our organizations. We a im to exceed our customer
                                / client expectations without compromising on compliance and the quality of our products and services.
                            </Typography>

                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={1} justifyContent="space-between" alignItems="center">
                    {/* Left Side Content */}
                    <Grid item xs={12} lg={4}>
                        <Box component="img" src={Q1} sx={{ width: "100%", height: "50vh", borderRadius: 2 }} alt="Vision" />
                    </Grid>

                    {/* Right Side Image */}
                    <Grid item xs={12} lg={4}>
                        <Box component="img" src={Q3} sx={{ width: "100%", height: "50vh", borderRadius: 2 }} alt="Vision" />
                    </Grid>
                    {/* Right Side Image */}
                    <Grid item xs={12} lg={4}>
                        <Box component="img" src={Q4} sx={{ width: "100%", height: "50vh", borderRadius: 2 }} alt="Vision" />
                    </Grid>
                </Grid>
            </Box>

        </>

    );
};

export default SafetyInfo;
