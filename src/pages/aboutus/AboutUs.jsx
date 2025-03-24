import { Box, Stack, Typography, useTheme, Grid, Divider, Paper } from '@mui/material';
import Ab1 from '../../assets/images/banners/banner/aboutbanner.avif';
import Ab2 from '../../assets/images/banners/banner/values.avif';
import Banner from '../../utils/Banner';
import OurNewTeam1 from '../teams/OurNewTeam1';
import OurMission from './OurMission';
import OurVision from './OurVision';
import SafetyInfo from './SafetyInfo';

const AboutUs = () => {
    const { spacing, palette } = useTheme();
    return (
        <>
            <Banner
                links="about-us"
                image={Ab1}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '55vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.4)"
                spacingConfig={{ lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="About Us"
            />
            <Paper elevation={0} sx={{ px: { lg: spacing(11), md: spacing(1), xs: spacing(1) }, py: 2, m: 2, width: 'auto', backgroundColor: '#FFFFFF' }}>
                {/* Info Section */}
                <Grid container spacing={5} >
                    {/* Grid 1 - Animate from left */}
                    <Grid item md={12} lg={7} xs={12} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Box elevation={0}>
                            <Typography variant="h4" sx={{ mb: '10px' }}>
                                About <Typography component={'span'} variant="h4" color="primary">Us</Typography>
                                <Divider sx={{ background: palette.primary.deep, height: '3px', width: '70px' }} />
                            </Typography>
                            <Stack spacing={1}>
                                <Typography variant='body2' >The Company ROLIF INDIA PVT. LTD. started business services in 2013 as Lighting Solutions. Later, the company became an EPC electrical contracting company. This division plays a pivotal role in the project execution of the other service divisions.</Typography>
                                <Typography variant='body2'>The initial goal of our company is to provide all the solutions for electrical services, including internal & external electrification, covering the distribution, Low voltage system, HT & LT works, Panels & Transformers.</Typography>
                                <Typography variant='body2'>Our highly professional team of engineers, designers, supervisors, and technicians has a deep understanding of the EPC industry and advanced technology to help the client/customer with their project needs.</Typography>
                                <Typography variant='body2'>We are one of the developing and distinguished EPC companies, valuing the commitment made to the client/customer for delivering & fulfilling the assigned project/work within the given timeframe with high-standard quality jobs.</Typography>
                                <Typography variant='body2'>We believe in maintaining a professional relationship between our organization and the customer/client.</Typography>
                                <Typography variant='body2'>From applied engineering, in-house drawings/designing, excellent project management, Operation & Maintenance, Planning & Commissioning, the company is capable of managing projects of any scale professionally.</Typography>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Grid 2 - Animate from right */}
                    <Grid item md={12} lg={5} xs={12} initial="hidden" whileInView="visible" viewport={{ once: true }} >
                        <Box component="img" src={Ab2} sx={{ width: '100%', height: '45vh' }} alt={Ab2} />
                    </Grid>
                </Grid>
            </Paper >
            {/* our mission */}
            <OurVision />
            <OurMission />
            <SafetyInfo />
            {/* <OurTeam /> */}
            <OurNewTeam1 />
        </>
    );
};

export default AboutUs;
