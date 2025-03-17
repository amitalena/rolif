import { Box, Divider, Typography, useTheme } from '@mui/material';
import Banner from '../../utils/Banner';
import Civil2 from '../../assets/images/civil/civil2.webp';
import { electricalServicesData, lightingSolutionData, } from './mainPageData';
import ProjectSection from './ProjectSection';

const LightingSolutions = () => {
    const theme = useTheme();

    return (
        <>
            {/* Page Banner */}
            <Banner
                title="Lighting Solution"
                image={Civil2}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '55vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.2)"
                spacingConfig={{ xl: 12, lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Lighting Solution Projects"
            />

            {/* Main Content */}
            <Box sx={{ py: 6, px: { lg: 12, md: 2, sm: 2, xs: 2 }, background: '#fff' }}>
                {/* Title Section */}
                <Box sx={{ py: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4" fontWeight={'bold'}>
                        Lighting{' '}
                        <Typography component={'span'} variant="h4" fontWeight="bold" color="primary.main" py={2}>
                            Solution & Electrical Goods Supplier
                        </Typography>
                        <Divider sx={{ background: theme.palette.primary.deep, height: '3px', width: '50px' }} />
                    </Typography>
                </Box>

                {/* Dynamically Render Sections */}
                {lightingSolutionData.map((item) => (
                    <ProjectSection
                        key={item.id}
                        title={item.title}
                        description={[item.description[0], item.description[1], item.description[2], item.description[3]]}
                        image={item.imagePath}
                    />
                ))}
            </Box>
        </>
    );
};

export default LightingSolutions;
