import {
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    OutlinedInput,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, Send, Twitter } from "@mui/icons-material";
import Rolif_img from "../assets/images/logo/rolif.png";
import { galleryData } from "../pages/gallery/galleryData";

const aboutLinks = [
    { name: "About Us", route: "/about-us" },
    { name: "Blogs", route: "/blogs" },
    // { name: "Our Service", route: "/services" },
    { name: "Contact Us", route: "/contact-us" },
];

const Footer = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const hoverStyle = {
        display: "flex",
        color: theme.palette.info.dark,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            textDecoration: "underline",
            color: theme.palette.primary.deep,
            transform: "scale(1.05)",
        },
    };

    return (
        <Box
            sx={{
                position: 'relative',
                background: theme.palette.info.deep,
                color: theme.palette.info.dark,
                py: 4,
                px: { xs: 2, lg: 9 },
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                {/* About Section */}
                <Grid item xs={12} sm={6} md={6} lg={2.5}>
                    <Stack spacing={2}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Box sx={{ height: 60, width: 150 }}>
                                <img src={Rolif_img} alt="Rolif Logo" style={{ height: "100%", width: "100%" }} />
                            </Box>
                        </Link>
                        <Typography variant="body2">
                            The Company ROLIF INDIA PVT.LTD. started business services in 2013 as Lighting
                            Solutions. Later the company became an EP Electrical contracting company.
                        </Typography>
                    </Stack>
                </Grid>

                {/* About Links */}
                {/* About Links */}
                <Grid item xs={12} sm={6} md={3} lg={1.5} xl={1.5}>
                    <Typography variant='h6' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                        About Us
                        {/* <Divider sx={{ background: theme.palette.primary.deep, height: '20px', width: '0px' }} orientation='vertical' /> */}
                    </Typography>

                    {aboutLinks.map((list, index) => (
                        <Box key={index} >
                            <Button onClick={() => navigate(list.route)} sx={hoverStyle}>
                                {list.name}
                            </Button>
                        </Box>
                    ))}

                </Grid>

                {/* Contact Info */}
                <Grid item xs={12} sm={6} md={6} lg={2.5}>
                    <Typography variant="h6" color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                        Contact Info
                    </Typography>
                    <Typography variant="body2">
                        <strong>Address:</strong> Contracting Business Solutions A-158, Alpha-1, Greater Noida Uttar Pradesh - 201308 INDIA
                    </Typography>
                    <Typography variant="body2">
                        <strong>Email1:</strong> info@rolifindia.com,
                    </Typography>
                    <Typography variant="body2">
                        <strong>Mobile:</strong> +91-8802262626
                    </Typography>
                    <Typography variant="body2">
                        <strong>Phone:</strong> +91 1204148686
                    </Typography>
                </Grid>

                {/* Newsletter Subscription */}
                <Grid item xs={12} sm={6} md={6} lg={2.5}>
                    <Typography variant="h6" color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                        Stay Updated
                    </Typography>
                    <Typography variant="body2">
                        Subscribe to our newsletter to receive updates on our latest collections.
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        <OutlinedInput
                            fullWidth
                            type="email"
                            size="small"
                            placeholder="Enter your email"
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: "4px",
                            }}
                            endAdornment={
                                <IconButton color="primary">
                                    <Send fontSize="small" />
                                </IconButton>
                            }
                        />
                    </Stack>
                </Grid>

                {/* Product Gallery */}
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Typography variant="h6" color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                        Products Gallery
                    </Typography>

                    <Grid container spacing={1}>
                        {galleryData.slice(1, 7).map(({ imagePath, name, route }, index) => (
                            <Grid
                                item xs={4} lg={4}
                                key={index}
                                onClick={() => navigate(route)}
                                sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}
                            >
                                <Box
                                    sx={{
                                        height: 80,
                                        width: 100,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                        borderRadius: 1,
                                        boxShadow: 1,
                                    }}
                                >
                                    <img src={imagePath} alt={name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Divider sx={{ background: "#fff", my: 3 }} />

            {/* Footer Bottom Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Typography variant="body2">
                    © {new Date().getFullYear()} <strong>Rolif India</strong>. All Rights Reserved.
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                    {[Facebook, Instagram, Twitter, LinkedIn].map((Icon, index) => (
                        <IconButton key={index} color="primary" sx={{ "&:hover": { color: theme.palette.info.dark } }}>
                            <Icon />
                        </IconButton>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};

export default Footer;
