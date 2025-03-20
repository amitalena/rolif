import { Box, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import Ab1 from '../../assets/images/banners/banner/quality.avif';
import CompleteProject from "./CompleteProject";

const OurProject = () => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ width: '99vw' }}>
                <Grid container>
                    <Grid item xs={12} lg={5}>
                        <Box
                            sx={{
                                background: `linear-gradient(to right,rgba(2, 2, 2, 0.9), rgba(0, 0, 0, 0.8)), url(${Ab1}) no-repeat center/cover`,
                                height: '350px',
                                py: 10, px: { xs: 2, md: 2, lg: 9, xl: 12 },
                                color: "white"
                            }}
                        >
                            <Stack spacing={2} >
                                <Typography variant="h4" fontWeight={'bold'} sx={{ mb: 1 }}>
                                    Our <Typography component="span" variant="h4" color="primary">Clients Projects</Typography>
                                </Typography>
                                <Divider sx={{ backgroundColor: theme.palette.primary.deep, height: '3px', width: '70px' }} />
                                <Typography variant="body2">
                                    Rolif believes that quality is an intrinsic element of our organizations. We a im to exceed our customer
                                    / client expectations without compromising on compliance and the quality of our products and services.
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <CompleteProject />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default OurProject