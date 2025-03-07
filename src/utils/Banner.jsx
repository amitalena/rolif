import { KeyboardDoubleArrowRight } from '@mui/icons-material';
import { Box, Breadcrumbs, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Banner = ({ title, image, height, titleVariant = {}, text, overlayColor, spacingConfig = { xl: 12, lg: 11, md: 2, sm: 2, xs: 2 }, containerStyles = {} }) => {
    const { palette, spacing } = useTheme();

    // Fade-in animation
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <>
            <Box sx={{ mt: { xl: 7, lg: 7, md: 0, sm: 0, xs: 0 } }}>
                <Toolbar />
            </Box>

            <Box
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                sx={{
                    position: 'relative',
                    mx: { xs: 0 },
                    backgroundImage: `url(${image})`,
                    height: height,
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: overlayColor,
                        zIndex: 1
                    },
                    zIndex: 0,
                    ...containerStyles
                }}
            >

                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    <Stack
                        spacing={2}
                        direction="column"
                        sx={{
                            px: { xl: spacing(spacingConfig.lg), lg: spacing(spacingConfig.lg), md: spacing(spacingConfig.md), sm: spacing(spacingConfig.sm), xs: spacing(spacingConfig.xs) },
                            py: { md: 15, xs: 12, xl: 20, lg: 25, sm: 12 },
                            width: '100%',
                            alignItems: 'left',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant={titleVariant}
                            sx={{
                                color: '#FDFDFD',
                                fontSize: { md: '36px', xs: '30px' },
                                fontWeight: 'bold',
                            }}
                        >
                            {title}
                        </Typography>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            style={{ flexShrink: 0 }}
                        >
                            <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: '#b71c1c' }} />} aria-label="breadcrumb">
                                <Link style={{ fontWeight: 'bold', textDecoration: 'none', color: '#fdfdfd' }} to="/">Home</Link>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', color: palette.info.light }}>
                                    {text}
                                </Typography>
                            </Breadcrumbs>
                        </motion.div>
                    </Stack>
                </Box>
            </Box >
        </>
    );
};

export default Banner;
