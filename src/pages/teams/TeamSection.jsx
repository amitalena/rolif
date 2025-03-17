import { Box, Typography, Grid } from "@mui/material";
import TeamCard from "./TeamCard";

const TeamSection = ({ teamData, teamName, sliceStart, sliceEnd }) => {
    // Slice the team data for the specific section
    const slicedTeamData = teamData?.slice(sliceStart, sliceEnd);

    return (
        <Box>
            {/* Section Title */}
            <Typography variant="h4" sx={{ py: 3 }} color="info.dark">
                {teamName}
            </Typography>
            {/* Team Cards Grid */}
            <Grid container spacing={2}>
                {slicedTeamData?.map((member) => (
                    <Grid item key={member.id} xs={12} sm={6} md={4} lg={3} xl={3} data-aos="fade-up"
                    >
                        <TeamCard member={member} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TeamSection;
