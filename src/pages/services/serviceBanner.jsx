import { Box, Stack, Typography, useTheme, Link, Grid, Breadcrumbs, Button, Toolbar } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Ab1 from '../../assets/images/interior/interior-furniture/curology-6CJg-fOTYs4-unsplash.jpg'

const ServiceBanner = () => {
    const { spacing, palette } = useTheme();

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const slideUp = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.7 } }
    };

    return (
        <>
            <Toolbar />
            <Box
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                sx={{
                    position: 'relative',
                    mx: { xs: 0 },
                    backgroundImage: `url(${Ab1})`,
                    height: '35vh',
                    width: '100%',
                    backgroundRepeat: 'no-repeate',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.2)',
                        zIndex: 1
                    },
                    zIndex: 0
                }}
            >
                <Stack direction="row" sx={{ px: { lg: spacing(6), md: spacing(1), xs: spacing(1) }, position: 'relative', zIndex: 2 }}>
                    <Box sx={{ display: { md: 'flex', xs: 'block' }, justifyContent: 'center' }}>
                        <Box sx={{ mt: 12, ml: 12, width: { lg: '600px', md: '100%', xs: '100%' } }}>
                            <Typography variant="h3" sx={{ color: '#FDFDFD', py: 'auto', fontSize: { md: '36px', xs: '30px' }, fontWeight: 'bold' }}>Service</Typography>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ px: { lg: spacing(17), md: spacing(1), xs: spacing(3) }, pt: 2, backgroundColor: '#F0F1F9' }}>
                <Box sx={{ background: '#FDFDFD', p: 1 }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Breadcrumbs separator={<KeyboardDoubleArrowRightIcon sx={{ fontSize: '15px', color: '#b71c1c' }} />} aria-label="breadcrumb" >
                            <Link sx={{ fontWeight: 'bold', fontSize: '10px', textDecoration: 'none', color: '#b71c1c' }} href="/">Home</Link>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '10px', color: palette.primary.dark }}>AboutUs Page</Typography>
                        </Breadcrumbs>
                    </motion.div>
                </Box>
                {/* Info Section */}
                <Grid container sx={{ alignItems: 'center', background: '#FDFDFD', justifyContent: 'space-around', mt: 1, p: spacing(3) }}>
                    <Grid item md={7} xs={12}>
                        <Typography variant="h5" sx={{ mb: '10px' }}>
                            <span style={{ color: '#b71c1c' }}><b>OUR INFO</b></span>
                        </Typography>
                        <Typography variant='h4' fontWeight={'bold'}>Welcome to our site!</Typography>
                        <Stack sx={{ pr: { md: spacing(10), xs: 0 } }}>
                            <Typography variant='h4' fontWeight={'semi-bold'}>Professional, compliant, knowledgeable and attentive - all words synonymous with us.</Typography>
                            <Box sx={{ pr: spacing(5) }}>
                                <Typography variant='body2' py={spacing(3)}>People come to us because they want, need and expect something that they just won&#39;t get from other companies. We haven&apos;t earned our reputation of leading company overnight. It has taken years of listening to what contractors and freelancers hunger for - and we deliver it in abundance!</Typography>
                                <Typography variant='body2'>Our service is different to other companies because of our unrivalled expertise, attention to detail and outstanding customer service. Companies come and go but RAD has stood the test of time because we understand our industry and more importantly your needs.</Typography>
                            </Box>
                            <Box sx={{ width: '200px', py: spacing(2) }}> <Button variant={'contained'}>Know More</Button></Box>
                        </Stack>
                    </Grid>
                    <Grid item md={5} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp}>
                        <Box component="img" src={Ab1} sx={{ width: '100%', height: '40vh' }} alt={Ab1} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ServiceBanner;