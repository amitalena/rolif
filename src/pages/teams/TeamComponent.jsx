/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import TeamSection from "./TeamSection";

const TeamComponent = ({ teamData }) => {
    return (
        <Box>
            {/* Admin/HR Team */}
            <TeamSection
                teamData={teamData}
                teamName="Admin / HR Team"
                sliceStart={9}
                sliceEnd={12}
            />

            {/* Finance Team */}
            <TeamSection
                teamData={teamData}
                teamName="Finance Team"
                sliceStart={12}
                sliceEnd={16}
            />

            {/* Add more teams as needed */}
        </Box>
    );
};

export default TeamComponent;