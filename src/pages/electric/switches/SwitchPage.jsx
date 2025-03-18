import { Box, Grid, useTheme } from '@mui/material';
import S1 from "../../../assets/images/banners/banner/electric.avif";
import { useNavigate } from 'react-router-dom';
import Banner from '../../../utils/Banner';
import { switchData } from './switchData';
import CardSingle from '../../furniture/beds/CardSingle';


const SwitchPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleClick = (id) => {
        const selectedFurniture = switchData.find((item) => item.id === id);
        if (selectedFurniture) {
            // Save new furniture item in localStorage, replacing previous one
            localStorage.setItem("Electric", JSON.stringify(selectedFurniture));
            navigate(`/singleelectric/${id}`);
        }
    };
    return (
        <>
            <Banner
                title="Electric"
                image={S1}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '40vh', xl: '40vh' }}
                titleVariant="h2"
                overlayColor="rgba(0,0,0, 0.7)"
                spacingConfig={{ xl: 6, lg: 6, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Electric"
            />
            <Box sx={{ px: { xl: theme.spacing(11), lg: theme.spacing(11), md: theme.spacing(2), sm: theme.spacing(2), xs: theme.spacing(2) } }}>
                <Grid container spacing={2}>
                    {switchData?.map((view) => (
                        <Grid key={view.id} item xs={12} sm={6} md={6} lg={3} xl={3}>
                            <CardSingle view={view} handleClick={handleClick} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* <ReletedBedProduct /> */}
        </>
    );
}

export default SwitchPage;
