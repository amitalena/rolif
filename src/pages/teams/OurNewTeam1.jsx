import { Box, Typography, Grid, useTheme } from '@mui/material';
import TeamCard from './TeamCard';
import { teamData } from './teamData';
import Team from '../../assets/images/logo/team1.webp';
import { useMemo } from 'react';

const OurNewTeam1 = () => {
    const theme = useTheme();
    const renderTeamMembers = useMemo(
        () =>
            teamData.length > 0 ? (
                teamData.map((member, index) => (
                    <Grid
                        item
                        key={member.id}
                        xs={12} sm={6} md={4} lg={3} xl={3}
                        data-aos="fade-up"
                        data-aos-delay={index * 300}
                    >
                        <TeamCard member={member} />
                    </Grid>
                ))
            ) : (
                <Grid item xs={12}>
                    <Typography variant="body1" textAlign="center">
                        No team members found.
                    </Typography>
                </Grid>
            ),
        []
    );

    return (
        <Box
            sx={{
                px: { xs: 2, md: 0, lg: 12 },
                height: { xl: '380vh', md: '420vh', sm: '1000vh', xs: '1430vh' },
                textAlign: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    py: 6,
                    mt: 2,
                    height: { lg: '50vh', xl: '45vh', sm: '45vh', md: '45vh', xs: '30vh' },
                    background: `url(${Team}) center/cover no-repeat`,
                    '::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: theme.palette.primary.main,
                        opacity: 0.8,
                        zIndex: 1,
                    },
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 3,

                        px: { lg: 5, xl: 10, md: 5, sm: 2, xs: 2 },
                        top: { md: '30%', sm: '80%', xs: '20%' },
                    }}
                >
                    <Typography variant="h3" sx={{ pb: 5 }} color="info.main">
                        Our Team
                    </Typography>
                    <Grid container spacing={2}>{renderTeamMembers}</Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default OurNewTeam1;
