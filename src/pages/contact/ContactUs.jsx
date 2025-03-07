import { useMemo } from 'react';
import { Box, Button, Card, CardContent, Divider, Grid, Stack, TextField, Typography, IconButton } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Map, Headset, Drafts, Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Banner from '../../utils/Banner';
import GoogleMap from './GoogleMap';
import C1 from '../../assets/images/banners/contact-us.png';

const ContactUs = () => {
    const { spacing, palette } = useTheme();

    const validationSchema = useMemo(() => yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Enter a valid email').required('Email is required'),
        contact: yup.string().min(10, 'Contact number should be at least 10 characters').required('Contact number is required'),
    }), []);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            contact: '',
            address: '',
            message_title: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values); // Handle form submission
        },
    });
    const hoverStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
        color: '#939393',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            textDecoration: 'underline',
            color: '#3f50b5',
            transform: 'scale(1.05)',
        },
    };
    const hoverStyle1 = {
        height: '85px',
        width: '85px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
        },
    }
    const contactCards = [
        {
            icon: <Map sx={{ color: '#fff', backgroundColor: palette.error.main, p: 1, borderRadius: '50%', height: '40px', width: '40px' }} />,
            title: 'Visit Us Anytime',
            details: ['A-82', 'Noida Sector 63'],
        },
        {
            icon: <Drafts sx={{ color: '#fff', backgroundColor: palette.error.main, p: 1, borderRadius: '50%', height: '40px', width: '40px' }} />,
            title: 'Send an Email',
            details: ['support@example.com', 'abc@example.com'],
        },
        {
            icon: <Headset sx={{ color: '#fff', backgroundColor: palette.error.main, p: 1, borderRadius: '50%', height: '40px', width: '40px' }} />,
            title: 'Contact Us',
            details: ['+012 (345) 78967', '+9865322200'],
        },
    ];

    return (
        <>
            <Banner
                title="Contact Us"
                image={C1}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '55vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.3)"
                spacingConfig={{ xl: 12, lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Contact Us"
            />
            <Box sx={{ py: 2, px: { lg: spacing(12), md: spacing(2), sm: spacing(2), xs: spacing(2) }, background: palette.info.main }}>
                <Box>
                    <Grid container spacing={2} justifyContent="space-between">
                        {contactCards.map((card, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card elevation={0} sx={{ background: '#FFFFFF' }}>
                                    <CardContent>
                                        <Stack
                                            direction={{ xs: "column", sm: "column", md: "column", lg: 'column', xl: 'row' }}
                                            spacing={2}
                                            alignItems="center"
                                            justifyContent="center"
                                        >

                                            <Box
                                                sx={hoverStyle1}
                                            >
                                                {card.icon}
                                            </Box>

                                            <Box sx={{ p: spacing(2), color: palette.primary.main }}>
                                                <Typography variant="h5" fontWeight="bold">{card.title}</Typography>
                                                {card.details.map((detail, i) => (
                                                    <Typography variant='body2' color='info.dark' key={i}>{detail}</Typography>
                                                ))}
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                    {index < contactCards.length - 1 && <Divider orientation="vertical" variant="middle" flexItem />}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Grid container spacing={2} sx={{ py: spacing(2) }}>
                    <Grid item lg={7} xl={8} xs={12}>
                        <Card elevation={0} sx={{ p: { lg: 4, xs: 2, }, background: '#FFFFFF', backdropFilter: 'blur(5px)' }}>
                            <CardContent component="form" onSubmit={formik.handleSubmit}>
                                <Grid container spacing={2}>
                                    {['name', 'email', 'contact', 'message_title'].map((field, index) => (
                                        <Grid item xs={12} md={index === 2 ? 6 : 6} sm={index === 2 ? 12 : 12} lg={index === 2 ? 12 : 12} xl={index === 2 ? 6 : 6} key={field}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                placeholder={field.replace(/_/g, ' ')}
                                                type={field === 'contact' ? 'tel' : 'text'}
                                                {...formik.getFieldProps(field)}
                                                error={formik.touched[field] && Boolean(formik.errors[field])}
                                                helperText={formik.touched[field] && formik.errors[field]}
                                                sx={{ border: '1px solid #9e9e9e' }}
                                            />
                                        </Grid>
                                    ))}
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            placeholder="Enter Your Message..."
                                            multiline
                                            rows={2}
                                            {...formik.getFieldProps('message')}
                                            error={formik.touched.message && Boolean(formik.errors.message)}
                                            helperText={formik.touched.message && formik.errors.message}
                                            sx={{ border: '1px solid #9e9e9e' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Button fullWidth size='large' variant="contained" type="submit" color="primary">
                                            Send
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={5} xl={4} xs={12}>
                        <Box sx={{ background: palette.info.light }}>
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <Stack direction={'column'} gap={spacing(3)}>
                                    <Card elevation={0} sx={{ p: { lg: 4, xs: 2, }, background: '#FDFDFD', backdropFilter: 'blur(5px)' }}>
                                        <CardContent>
                                            <Typography variant="h3" fontWeight="bold">How Can We Help You?</Typography>
                                            <Typography variant="body1">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod temporeum dicant partem scripserit,
                                                doctus appetere interpretaris.
                                            </Typography>
                                            <Stack direction="row">
                                                <IconButton variant="none" sx={hoverStyle}><Facebook /></IconButton>
                                                <IconButton variant="none" sx={hoverStyle}><Instagram /></IconButton>
                                                <IconButton variant="none" sx={hoverStyle}><Twitter /></IconButton>
                                                <IconButton variant="none" sx={hoverStyle}><LinkedIn /></IconButton>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </motion.div>
                        </Box>
                    </Grid>
                </Grid>
                <Box ><GoogleMap /></Box>
            </Box >
        </>
    );
};

export default ContactUs;