import React from 'react';
import { Box, Stack, Typography, useTheme, Grid, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { servicesData } from './servicesData'; // Import the service data

const OurServices = () => {
    const { spacing, palette } = useTheme();
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route);
    };

    return (
        <Box
            sx={{
                position: "relative",
                py: 2,
                overflow: 'hidden',
                px: { xl: 12, lg: 12, md: 2, sm: 2, xs: 2 },
                background: palette.info.light,
            }}
        >
            <Stack sx={{ position: "relative", zIndex: 2 }}>
                <Typography variant="h4" fontWeight="bold" textAlign="left" color="#333">
                    Our Services
                    <Divider sx={{ background: palette.primary.deep, height: '3px', width: '60px' }} />
                </Typography>
            </Stack>

            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                {servicesData.map((service, index) => (
                    <React.Fragment key={index}>
                        {/* Alternate layout for even and odd indexes */}
                        {index % 2 === 0 ? (
                            <>
                                <Grid item md={7} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    <Typography variant="h4" color="primary" fontWeight="bold">
                                        {service.title}
                                    </Typography>
                                    <Box>
                                        <Stack spacing={1} sx={{ pt: 3, pr: { md: spacing(5), xs: spacing(0) } }}>
                                            {service.description.map((point, i) => (
                                                <Typography key={i} color="info.dark" variant="body2">
                                                    {point}
                                                </Typography>
                                            ))}
                                        </Stack>
                                        <Box sx={{ width: '200px', py: spacing(2) }}>
                                            <Button variant="contained" onClick={() => handleClick(service.route)}>
                                                Know More
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={5} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    <Box component="img" src={service.imagePath} sx={{ width: '100%', height: '40vh', pr: 2 }} alt={service.title} />
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid item md={5} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    <Box component="img" src={service.imagePath} sx={{ width: '100%', height: '40vh', pr: 2 }} alt={service.title} />
                                </Grid>
                                <Grid item md={7} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    <Typography variant="h4" color="primary" fontWeight="bold">
                                        {service.title}
                                    </Typography>
                                    <Box>
                                        <Stack spacing={1} sx={{ pt: 3, pr: { md: spacing(5), xs: spacing(0) } }}>
                                            {service.description.map((point, i) => (
                                                <Typography key={i} color="info.dark" variant="body2">
                                                    {point}
                                                </Typography>
                                            ))}
                                        </Stack>
                                        <Box sx={{ width: '200px', py: spacing(2) }}>
                                            <Button variant="contained" onClick={() => handleClick(service.route)}>
                                                Know More
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </>
                        )}
                    </React.Fragment>
                ))}
            </Grid>
        </Box>
    );
};

export default OurServices;