import { Box, Button, Divider, Grid, IconButton, OutlinedInput, Stack, Typography, useTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Rolif_img from '../assets/images/logo/rolif.png';
import { Facebook, Instagram, LinkedIn, Send, Twitter } from '@mui/icons-material';

const productLink = [
    { name: "Living Room", route: '/living-room' },
    { name: "Floar Tiles", route: '/floar-tiles' },
    { name: "Ceramic", route: '/ceramic' },
    { name: "Technical", route: '/prcelain' },
];

const aboutLink = [
    { name: "About Us", route: '/aboutus' },
    { name: "Blogs", route: '/blogs' },
    { name: "Our Service", route: '/services' },
    { name: "Contact Us", route: '/contactus' },
];

const Footer = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const hoverStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
        color: theme.palette.info.dark,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.primary.deep,
            transform: 'scale(1.05)',
        },
    };

    return (
        <Box sx={{
            background: theme.palette.info.deep,
            color: theme.palette.info.dark,
            py: 4,
            px: { xs: 2, sm: 2, md: 2, lg: 12, xl: 12 },
        }}>
            <Grid container spacing={4} justifyContent="center">

                {/* About Section */}
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                    <Stack spacing={2}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Box sx={{ height: 60, width: 150 }}>
                                <img src={Rolif_img} alt="Rolif Logo" style={{ height: '100%', width: '100%' }} />
                            </Box>
                        </Link>
                        <Typography variant='body2'>
                            The Company ROLIF INDIA PVT.LTD. started business services in 2013 as Lighting Solutions.
                            Later the company became an EP Electrical contracting company. This division plays a vital role
                            in project execution of other service divisions.
                        </Typography>
                    </Stack>
                </Grid>

                {/* Product Links */}
                <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
                    <Typography variant='h6' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                        Products
                    </Typography>
                    <Stack spacing={1}>
                        {productLink.map((product, index) => (
                            <Button key={index} onClick={() => navigate(product.route)} sx={hoverStyle}>
                                {product.name}
                            </Button>
                        ))}
                    </Stack>
                </Grid>

                {/* About Links */}
                <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
                    <Typography variant='h6' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                        About Us
                        {/* <Divider sx={{ background: theme.palette.primary.deep, height: '20px', width: '0px' }} orientation='vertical' /> */}
                    </Typography>
                    <Stack spacing={1}>
                        {aboutLink.map((list, index) => (
                            <Button key={index} onClick={() => navigate(list.route)} sx={hoverStyle}>
                                {list.name}
                            </Button>
                        ))}
                    </Stack>
                </Grid>

                {/* Contact Info */}
                <Grid item xs={12} sm={6} md={6} lg={2.4} xl={2.5}>
                    <Typography variant='h6' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                        Contact Info
                    </Typography>
                    <Typography><strong>Address:</strong> Shop no 36, B1A, First Floor, Sector 51 Noida 201301, Landmark: Near IDBI Bank</Typography>
                    <Typography><strong>Email:</strong> info@soundville.in</Typography>
                    <Typography><strong>Phone:</strong> +91-9870287980</Typography>
                </Grid>

                {/* Newsletter Subscription */}
                <Grid item xs={12} sm={6} md={6} lg={2.4} xl={2.5}>
                    <Typography variant='h6' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                        Stay Updated
                    </Typography>
                    <Typography variant='body2'>
                        Subscribe to our newsletter to receive updates on our latest collections.
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        <OutlinedInput
                            fullWidth
                            type="email"
                            size="small"
                            placeholder="Enter your email"
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '4px',
                            }}
                            endAdornment={
                                <IconButton color="primary">
                                    <Send fontSize="small" />
                                </IconButton>
                            }
                        />
                    </Stack>
                </Grid>

            </Grid>

            <Divider sx={{ background: '#fff', my: 3 }} />

            {/* Footer Bottom Section */}
            <Box sx={{ direction: { md: 'row', lg: "row", xs: 'column' }, justifyContent: { md: 'space-between', xs: 'center', lg: 'space-between' }, display: { md: 'flex', xs: 'block' }, alignItems: { md: 'center', xs: 'block' } }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} <strong>Rolif India</strong>. All Rights Reserved.
                </Typography>
                <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 1 }}>
                    <IconButton color="primary" sx={{ '&:hover': { color: theme.palette.info.dark } }}>
                        <Facebook />
                    </IconButton>
                    <IconButton color="primary" sx={{ '&:hover': { color: theme.palette.info.dark } }}>
                        <Instagram />
                    </IconButton>
                    <IconButton color="primary" sx={{ '&:hover': { color: theme.palette.info.dark } }}>
                        <Twitter />
                    </IconButton>
                    <IconButton color="primary" sx={{ '&:hover': { color: theme.palette.info.dark } }}>
                        <LinkedIn />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    );
};

export default Footer;

