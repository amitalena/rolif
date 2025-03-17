import { Box, Divider, Typography, useTheme } from '@mui/material';
import Banner from './../../utils/Banner';
import { mainPageData } from './mainPageData';
import ProjectSection from './ProjectSection';

const CivilConstruction = () => {
    const theme = useTheme();

    return (
        <>
            {/* Page Banner */}
            <Banner
                title="Our Services"
                image={mainPageData[0].imagePath} // Use first item image for banner
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '55vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.2)"
                spacingConfig={{ xl: 12, lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Quality Construction & Services"
            />

            {/* Main Content */}
            <Box sx={{ py: 6, px: { lg: 12, md: 2, sm: 2, xs: 2 }, background: '#f1f1f1' }}>
                {/* Title Section */}
                <Box sx={{ py: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4" fontWeight={'bold'}>
                        Our{' '}
                        <Typography component={'span'} variant="h4" fontWeight="bold" color="primary.main" py={2}>
                            Services
                        </Typography>
                        <Divider sx={{ background: theme.palette.primary.deep, height: '3px', width: '50px' }} />
                    </Typography>
                </Box>

                {/* Dynamically Render Sections */}
                {mainPageData.map((item, index) => (
                    <ProjectSection
                        key={item.id}
                        title={item.title}
                        description={[item.description]} // Convert to array
                        image={item.imagePath}
                        reverse={index % 2 !== 0} // Alternate layout for better design
                    />
                ))}
            </Box>
        </>
    );
};

export default CivilConstruction;
