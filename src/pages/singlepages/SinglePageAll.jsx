import { Box, Divider, Grid, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import S1 from '../../assets/images/banners/Wiring-&-Cables.png';
import Banner from '../../utils/Banner';
import { products } from './products';
import CardComponent from '../../utils/CardComponent';
import { useNavigate } from 'react-router-dom';
import ReletedProduct from '../furniture/ReletedProduct';

const SinglePageAll = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleClick = (id) => {
        const selectedFurniture = products.find((item) => item.id === id);
        if (selectedFurniture) {
            // Save new furniture item in localStorage, replacing previous one
            localStorage.setItem("Furniture", JSON.stringify(selectedFurniture));
            navigate(`/singlefurniture/${id}`);
        }
    };
    return (
        <>
            <Toolbar />
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
            <Box sx={{ mt: 3, px: { xl: theme.spacing(11), lg: theme.spacing(11), md: theme.spacing(2), sm: theme.spacing(2), xs: theme.spacing(2) } }}>
                <Stack spacing={2} direction={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant='h3'>Living Room</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, ml: 1, height: '3px', width: '100px' }} />
                    <Typography sx={{ px: 40 }}>Make your space more inviting with tiles that truly reflect your style. A selection made to suit every preference and create a lasting impression every time.</Typography>
                </Stack>
                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid key={index} item xs={12} sm={6} lg={4} xl={4}>
                            <CardComponent id={product.id} onClick={handleClick} name={product.name} imagePath={product.image} title={product.title} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <ReletedProduct />
        </>
    );
}

export default SinglePageAll;
