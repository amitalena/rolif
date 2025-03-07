import { Box, Stack, Typography, useTheme, Grid, Button, Divider, } from '@mui/material';
import { motion } from 'framer-motion';
import T1 from '../../assets/images/tiles/t6.webp';
import F1 from '../../assets/images/interior/f4.webp';
import E1 from '../../assets/images/electric/e6.webp';

const OurServices = () => {
    const { spacing, palette } = useTheme();

    // // Animation variants
    // const slideLeft = {
    //     hidden: { x: -100, opacity: 0 },
    //     visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }
    // };

    // const slideRight = {
    //     hidden: { x: 100, opacity: 0 },
    //     visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }
    // };

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    py: 2,
                    overflow: 'hidden',
                    px: { xl: 12, lg: 12, md: 2, sm: 2, xs: 2 },
                    background: palette.info.main,
                    "::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        zIndex: 1,
                    },
                }}
            >
                <Stack sx={{ position: "relative", zIndex: 2 }}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        textAlign="left"
                        color="white"
                    >
                        Our Services
                        <Divider sx={{ background: palette.primary.deep, height: '3px', width: '90px' }} />
                    </Typography>
                </Stack>
                <Grid container spacing={2} sx={{ alignItems: 'center', }}>
                    {/* Grid 1 - Animate from left */}
                    <Grid item md={7} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} >
                        <Typography variant='h4' color='primary' fontWeight={'bold'}>Residential Interior Design & Fit-Out</Typography>
                        <Box>
                            <Stack spacing={1} sx={{ pt: 3, pr: { md: spacing(5), xs: spacing(0) } }}>
                                <Typography color='info.dark' variant='body2'> Living Room Design: Elevate your living room with custom furniture, lighting, and decorative accents that suit your style.</Typography>
                                <Typography color='info.dark' variant='body2'>Bedroom & Kitchen Fit-Outs: Transform personal spaces into sanctuaries with functional layouts and stylish finishes.</Typography>
                                <Typography color='info.dark' variant='body2'>Full Home Renovation: From concept to completion, we offer comprehensive solutions that cater to all rooms and needs.</Typography>
                            </Stack>
                            <Box sx={{ width: '200px', py: spacing(2) }}> <Button variant={'contained'}>Know More</Button></Box>
                        </Box>
                    </Grid>

                    {/* Grid 2 - Animate from right */}
                    <Grid item md={5} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} >
                        <Box component="img" src={F1} sx={{ width: '100%', height: '50vh', pr: 2 }} alt={T1} />
                    </Grid>

                    {/* Grid 2 - Animate from right */}
                    <Grid item md={5} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} >
                        <Box component="img" src={T1} sx={{ width: '100%', height: '50vh' }} alt={T1} />
                    </Grid>
                    <Grid item md={7} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} >
                        <Stack spacing={2} sx={{ pl: { md: spacing(5), xs: 0 } }}>
                            <Typography variant='h4' color='primary' fontWeight={'bold'}>Tile & Sanitary Ware</Typography>
                            <Stack spacing={1} sx={{ pr: { md: spacing(5), xs: spacing(0) } }}>
                                <Typography variant='body2'>Floor Tiles: High-quality ceramic, porcelain, and vinyl floor tiles that come in a variety of colors, textures, and patterns.</Typography>
                                <Typography variant='body2'>Wall Tiles: Stunning wall tiles in diverse finishes, from glossy to matte, perfect for bathrooms, kitchens, and other indoor spaces.</Typography>
                                <Typography variant='body2'>Outdoor Tiles: Durable, slip-resistant tiles ideal for outdoor spaces like patios, gardens, and walkways.</Typography>
                                <Typography variant='body2'>Mosaic Tiles: Beautiful mosaic tile options for decorative accents, backsplashes, and feature walls.</Typography>

                            </Stack>
                            <Box sx={{ width: '200px', py: spacing(2) }}> <Button variant={'contained'}>Know More</Button></Box>
                        </Stack>
                    </Grid>

                    <Grid item md={7} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} >
                        <Stack spacing={2} sx={{ pr: { md: spacing(10), xs: 0 } }}>
                            <Typography variant='h4' color='primary' fontWeight={'semi-bold'}>Residential Interior Design & Fit-Out</Typography>
                            <Stack spacing={1} sx={{ pr: { md: spacing(0), xs: spacing(0) } }}>
                                <Typography variant='body2'>Electrical Wiring & Rewiring: Ensuring your home’s electrical system is safe, up-to-date, and fully functional.</Typography>
                                <Typography variant='body2'>Lighting Installation: From ambient to task lighting, we install energy-efficient and aesthetically pleasing lighting solutions.</Typography>
                                <Typography variant='body2'>Panel Upgrades & Circuit Breakers: Upgrading your electrical panel to meet modern electrical demands, enhancing safety and functionality.</Typography>
                                <Typography variant='body2'>Smart Home Integration: Installation of smart devices and automation systems to control lighting, temperature, and security with ease.</Typography>
                            </Stack>
                            <Box sx={{ width: '200px', py: spacing(2) }}> <Button variant={'contained'}>Know More</Button></Box>
                        </Stack>
                    </Grid>

                    {/* Grid 2 - Animate from right */}
                    <Grid item md={5} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} >
                        <Box component="img" src={E1} sx={{ width: '100%', height: '50vh', pr: 2 }} alt={T1} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default OurServices;