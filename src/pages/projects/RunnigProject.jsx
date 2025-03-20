import { Card, CardContent, Typography, Grid, Paper, Divider, useTheme, Box } from "@mui/material";

const projectData = [
    { id: 1, name: "Upgradation of Existing District Hospital to New Government Medical College", location: "Ghazipur, U.P.", type: "Electrical Works (Low & High Side)", value: "1,661.45" },
    { id: 2, name: "Flip Restaurant & Bar", location: "Greater Noida, U.P.", type: "Design & Build (Interiors Fit-Out)", value: "87.00" },
    { id: 3, name: "Construction of Multi-Level Parking", location: "Almora, U.K.", type: "Civil Work", value: "600.57" },
    { id: 4, name: "Construction of Integrated Nursing Institute", location: "Champawat, U.K.", type: "Civil & Interior Work", value: "358.19" },
    { id: 5, name: "Office for Satya Micro Capital", location: "Noida, U.P.", type: "Interiors Fit-Out", value: "2,051.21" },
];

const RunningProject = () => {
    const theme = useTheme();
    return (
        <Box sx={{ background: 'rgba(0,0,0,0.2)', py: 3, backdropFilter: 'blur(10px)', width: '100%', px: { md: 2, lg: 9, xl: 9, xs: 2 }, position: "relative", zIndex: 1 }}>
            <Typography variant="h4" sx={{ mb: '10px', textAlign: 'center' }}>
                Running <Typography component={'span'} variant="h4" color="primary">Projects</Typography>
                <Divider sx={{ background: theme?.palette.primary.deep, height: '3px', width: '130px', mx: 'auto' }} />
            </Typography>
            <Grid container spacing={2} sx={{ padding: 2 }}>
                {projectData.map((project) => (
                    <Grid item xs={12} sm={6} md={3} key={project.id}>
                        <Card component={Paper} elevation={3} sx={{ padding: 2, height: '200px', borderRadius: "12px" }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
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
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RunningProject;
