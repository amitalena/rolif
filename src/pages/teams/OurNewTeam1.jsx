import { Box, Typography, Grid } from '@mui/material';
import TeamCard from './TeamCard';
import { teamData } from './teamData';

const OurNewTeam1 = () => {


    return (
        <Box sx={{ background: "#FFF", py: 2, px: { md: 2, lg: 9, xl: 9, xs: 2 } }}>
            <Typography variant="h4" sx={{ py: 3 }} color="info.dark">Our Team</Typography>
            <Grid container spacing={2}>
                {teamData && teamData.length > 0 ? (
                    teamData.map((member, index) => (
                        <Grid item key={member.id} xs={12} sm={6} md={4} lg={3} xl={3} data-aos="fade-up" data-aos-delay={index * 300} >
                            <TeamCard member={member} />
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>No team members found.</Typography>
                )}
            </Grid>
        </Box>
    );
};

export default OurNewTeam1;