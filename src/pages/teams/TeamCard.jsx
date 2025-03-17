/* eslint-disable react/prop-types */
import { Card, CardContent, Avatar, Stack, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TeamCard = ({ member }) => {
    const theme = useTheme();
    return (
        <Card
            elevation={1}
            sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '5px',
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: theme.shadows[6],
                },
            }}
        >
            <Box sx={{ background: theme.palette.primary.main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar
                    sx={{ height: '60px', width: '60px' }}
                    src={member.teamImage}
                    alt={member.name.first_name}
                />
            </Box>

            <CardContent
                sx={{
                    p: 4,
                    position: "relative",
                    zIndex: 2,
                    color: theme.palette.info.light,
                }}
            >
                <Stack spacing={1} direction={'column'} justifyContent={'space-around'}>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="primary"
                        sx={{ fontSize: { xs: "1.1rem", sm: "1.75rem" } }}
                    >
                        {member.name.first_name} {member.name.last_name}
                    </Typography>
                    <Typography variant="body2" color="info.dark">
                        Qualification: {member.qualification}
                    </Typography>
                    <Typography variant="body2" color="info.dark">Experience: {member.experience} years</Typography>
                    <Typography variant="body2" color="info.dark">Designation: {member.designation}</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default TeamCard;