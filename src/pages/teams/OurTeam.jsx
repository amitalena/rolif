import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { teamData } from "./teamData";
import TeamCard from "../../utils/TeamCard";
import Team from '../../assets/images/logo/team1.webp'
// Main OurTeam Component
const OurTeam = () => {
    const theme = useTheme();

    return (
        <Box sx={{ px: { xs: 2, md: 0, lg: 12 }, height: { xl: '75vh', md: '85vh', sm: '100vh', xs: '240vh' }, textAlign: "center" }}>
            <Box sx={{
                position: "relative",
                py: 6,
                mt: 2,
                height: { lg: '50vh', xl: '45vh', sm: '45vh', md: '45vh' },
                background: `url(${Team}) center/cover no-repeat`,
                "::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(232, 109, 16, 0.8)",
                    zIndex: 1,
                },
            }}>
                <Stack spacing={3}>
                    <Typography variant="h4" fontWeight={'bold'} sx={{ fontSize: { xs: '40px', lg: '50px', xl: '50px' }, color: theme.palette.info.main, zIndex: 2, mb: 3, }}>
                        Our Professional Team
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.info.main, textAlignl: 'center', px: { xl: 40, lg: 20, md: 10, sm: 5, xs: 5 }, zIndex: 2, my: 3, fontWeight: "bold" }}>
                        Pharetra ex. Etiam eget diam ligula. Sed at blandit ante. Vivamus feugiat,
                        lacus eu suscipit mattis, tortor mi aliquam leo, quis laoreet ante sem sed sapien</Typography>
                </Stack>

                <Box sx={{ position: 'absolute', zIndex: 3, py: 4, px: { lg: 5, xl: 10, md: 5, sm: 2, xs: 2 }, top: { md: '50%', sm: '80%', xs: '80%' } }}>
                    <Grid container spacing={2} justifyContent="center">
                        {teamData.map((member) => (
                            <Grid key={member.id} item xs={12} md={3} xl={3} sm={3} lg={3}>
                                <TeamCard member={member} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default OurTeam;
