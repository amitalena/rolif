/* eslint-disable react/prop-types */
import { Box, Divider, Grid, IconButton, Stack, Typography, useTheme } from '@mui/material';
import T1 from '../../assets/images/tiles/t1.webp';
import F1 from '../../assets/images/interior/f8.webp';
import E1 from '../../assets/images/electric/e7.webp';
import { EngineeringOutlined, PersonOutline, SevereColdOutlined, TipsAndUpdatesOutlined, VerifiedOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Reusable Hover Effect Component
const HoverEffect = ({ children }) => (
    <motion.div
        whileHover={{
            scale: 1.1,
            backgroundColor: "#FFF",
            color: "#f50",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: '#fff',
            borderRadius: "50%",
            height: '40px',
            width: '50px',
            cursor: "pointer",
        }}
    >
        {children}
    </motion.div>
);

const WhyChooseUsN = () => {
    const theme = useTheme();

    const chooseUsData = [
        {
            name: "Expertise & Experience",
            icon: <PersonOutline sx={{ height: '50px', width: '50px' }} />,
            title: "With years of experience in interior design and fit-out works, we bring creativity and professionalism to every project.",
        },
        {
            name: "Tailored Solutions",
            icon: <TipsAndUpdatesOutlined sx={{ height: '50px', width: '50px' }} />,
            title: "Every space is unique, and we offer customized solutions designed to fit your specific needs, preferences, and budget.",
        },
        {
            name: "Timely Delivery",
            icon: <VerifiedOutlined sx={{ height: '50px', width: '50px' }} />,
            title: "We understand the importance of deadlines and work diligently to complete projects on time without compromising on quality.",
        },
        {
            name: "High-Quality Materials & Craftsmanship",
            icon: <SevereColdOutlined sx={{ height: '50px', width: '50px' }} />,
            title: "Our commitment to using only premium materials ensures long-lasting results.",
        },
        {
            name: "Customer Satisfaction",
            icon: <EngineeringOutlined sx={{ height: '50px', width: '50px' }} />,
            title: "We pride ourselves on delivering exceptional service with a focus on customer satisfaction at every step of the process.",
        },
    ];

    return (
        <Box sx={{ background: '#fff', px: { lg: 12, md: 2, xs: 2 }, py: 8 }}>
            <Grid container justifyContent={'space-between'} spacing={4}>
                {/* Image Section */}
                <Grid item xs={12} lg={5} xl={4}>
                    <Box sx={{ position: "relative", height: "400px" }}>
                        {[
                            { src: F1, alt: "Interior", top: 0, left: 0 },
                            { src: T1, alt: "Tiles", top: { md: 50, xs: 30 }, left: { lg: 70, md: 70, xs: 30 } },
                            { src: E1, alt: "Electric", top: { md: 100, xs: 70 }, left: { lg: 140, md: 120, xs: 70 } },
                        ].map((image, index) => (
                            <Box
                                key={index}
                                sx={{
                                    position: "absolute", top: image.top, left: image.left, height: { lg: '350px', md: "350px", xs: '350px' }, width: { xl: '80%', lg: '60%', md: "70%", xs: "80%" },
                                    transition: "opacity 0.3s, transform 0.3s", opacity: 1, zIndex: 1,
                                    "&:hover": { opacity: 1, zIndex: 20, },
                                }}
                            >
                                <img src={image.src} alt={image.alt} height="100%" width="100%" />
                            </Box>
                        ))}
                    </Box>
                </Grid>


                {/* Content Section */}
                <Grid item xs={12} lg={7} xl={7}>
                    <Stack spacing={2} sx={{ mt: { xs: 3, sm: 5, md: 5, lg: 0, xl: 0 } }} >
                        <Typography variant='h4' fontWeight='bold'>
                            Why You Should Choose Us?
                        </Typography>
                        <Divider sx={{ background: theme.palette.primary.deep, height: '3px', width: '100px' }} />
                        <Stack spacing={2}>
                            <Typography variant='body2'>
                                Etiam eget diam ligula. Sed at blandit ante. Vivamus feugiat, lacus eu suscipit mattis, tortor mi aliquam leo, quis laoreet ante sem sed sapien. Phasellus id convallis ligula. Aliquam erat volutpat. Aliquam erat volutpat. Quisque posuere elit ut efficitur hendrerit. Vestibulum aliquet enim ac eros mattis facilisis. Donec ultrices, diam sed efficitur semper, diam lectus malesuada nisl.
                            </Typography>
                        </Stack>

                        {/* Why Choose Us Grid */}
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            {chooseUsData.map((item, index) => (
                                <Grid item xs={12} lg={12} sm={6} md={6} key={index}>
                                    <Stack direction='row' spacing={2} alignItems='center'>
                                        <HoverEffect><IconButton color='primary'>{item.icon}</IconButton></HoverEffect>
                                        <Box sx={{ px: 2, }}>
                                            <Typography color='primary' variant='h6' fontWeight='bold'>
                                                {item.name}
                                            </Typography>
                                            <Typography color='#9e9e9e' variant='body2'>
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WhyChooseUsN;