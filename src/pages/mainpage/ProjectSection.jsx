/* eslint-disable react/prop-types */
import { Box, Grid, Stack, Typography } from '@mui/material';

const ProjectSection = ({ title, description, image, reverse }) => {
    return (
        <Box sx={{ my: 2, px: { lg: 20, xl: 20, md: 2, sm: 2, xs: 2 } }}>
            <Grid container spacing={4} direction={reverse ? 'row-reverse' : 'row'}>
                <Grid item xs={12} lg={7}>
                    <Stack spacing={2}>
                        {description?.map((text, index) => (
                            <Typography key={index}>{text}</Typography>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Box height={'250px'}>
                        <img src={image} alt={title} height={'100%'} width={'100%'} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProjectSection;
