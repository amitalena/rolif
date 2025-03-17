import { Box, Grid, useTheme } from '@mui/material';
import S1 from '../../assets/images/banners/Wiring-&-Cables.png';
import Banner from '../../utils/Banner';
import { useNavigate } from 'react-router-dom';
import ReletedProduct from '../furniture/ReletedProduct';
import { bedData } from '../furniture/beds/bedData';
import CardSingle from '../furniture/beds/CardSingle';

const SinglePageAll = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleClick = (id) => {
        const selectedFurniture = bedData.find((item) => item.id === id);
        if (selectedFurniture) {
            // Save new furniture item in localStorage, replacing previous one
            localStorage.setItem("Furniture", JSON.stringify(selectedFurniture));
            navigate(`/singlefurniture/${id}`);
        }
    };
    return (
        <>
            <Banner
                title="Single Page"
                image={S1}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '55vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.2)"
                spacingConfig={{ xl: 12, lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Living Room"
            />
            <Box sx={{ my: 3, px: { xl: theme.spacing(11), lg: theme.spacing(11), md: theme.spacing(2), sm: theme.spacing(2), xs: theme.spacing(2) } }}>
                <Grid container spacing={2}>
                    {bedData.map((product, index) => (
                        <Grid key={index} item xs={12} sm={6} lg={3} xl={3}>
                            <CardSingle id={product.id} onClick={handleClick} name={product.name} imagePath={product.imagePath} title={product.title} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <ReletedProduct />
        </>
    );
}

export default SinglePageAll;
