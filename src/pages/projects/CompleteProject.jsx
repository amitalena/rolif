/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card, CardContent, Typography, Paper, Divider, useTheme, Box } from "@mui/material";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const completedProjects = [
    { id: 1, name: "Everyday Steels & Stores", location: "Greater Noida", type: "SITC works for High Side & Low Side Electrical Works", value: "65.00" },
    { id: 2, name: "Everyday Shopping Mart", location: "Greater Noida", type: "SITC works for DG Set, Low Side Electrical Works & FA PA Works", value: "44.00" },
    { id: 3, name: "Gold Gym", location: "Noida & Gr. Noida", type: "SITC Works For Internal Electrical Works & FA PA", value: "135.00" },
    { id: 4, name: "Saikia Technology Solutions Warehouse", location: "Greater Noida", type: "SITC works for High Side & Low Side Electrical Works", value: "88.10" },
    { id: 5, name: "Sadhu Autocom Industries", location: "Madhya Pradesh", type: "SITC works for DG Set, High Side & Low Side Electrical Works", value: "255.00" },
    { id: 6, name: "Meerut Critical Center - Hospital", location: "Meerut, U.P.", type: "SITC works for DG Set, High Side & Low Side Electrical Works", value: "110.00" },
    { id: 7, name: "Financial Management Service Foundation", location: "Noida", type: "SITC Electrical Work", value: "25.00" },
];

const getSplideOptions = (speed) => ({
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "10px",
    focus: "center",
    pagination: false,
    arrows: false,
    autoScroll: {
        speed: speed || 1,
        autoStart: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    },
    breakpoints: {
        1024: { perPage: 2 },
        768: { perPage: 1 },
    },
});

const CompleteProject = ({ speed = 1 }) => {
    const theme = useTheme();

    return (
        <Box sx={{ background: "none", my: 2, backdropFilter: "blur(10px)", width: "98%", px: { xs: 2, md: 6 }, position: "relative", zIndex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" sx={{ mb: "10px" }}>
                    Completed <Typography component="span" variant="h4" color="primary">Projects</Typography>
                    <Divider sx={{ background: theme?.palette.primary.deep, height: "3px", width: "130px" }} />
                </Typography>
            </Box>
            <Splide options={getSplideOptions(speed)} extensions={{ AutoScroll }}>
                {completedProjects.map((project) => (
                    <SplideSlide key={project.id}>
                        <Card component={Paper} elevation={0} sx={{ p: 1, background: 'transparent', boxShadow: 3, m: 1, height: '220px', backdropFilter: '20px', borderRadius: "12px" }}>
                            <CardContent>
                                <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom>
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    📍 Location: {project.location}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    🏗 Type of Work: {project.type}
                                </Typography>
                                <Typography variant="body2" color="textPrimary" fontWeight="bold" mt={1}>
                                    💰 Project Value: {project.value} Lacs
                                </Typography>
                            </CardContent>
                        </Card>
                    </SplideSlide>
                ))}
            </Splide>
        </Box>
    );
};

export default CompleteProject;
