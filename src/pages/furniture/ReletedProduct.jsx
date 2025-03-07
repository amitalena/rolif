import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import ReletedCard from "./../../utils/ReletedCard";
import { furnitureData } from "./furnitureData";
import { useNavigate } from 'react-router-dom';

const ReletedProduct = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleClick = (id) => {
        const selectedFurniture = furnitureData.find((item) => item.id === id);
        if (selectedFurniture) {
            // Save new furniture item in localStorage, replacing previous one
            localStorage.setItem("Furniture", JSON.stringify(selectedFurniture));
            navigate(`/singlefurniture/${id}`);
        }
    };

    return (
        <Box sx={{
            background: '#f1f2f9',
            pt: { xl: theme.spacing(2), lg: theme.spacing(2), md: theme.spacing(2), sm: theme.spacing(2), xs: theme.spacing(1) },
            pb: 2, px: { lg: 12, md: 2, sm: 2, xs: 2 }
        }}>
            <Typography variant="h3" fontWeight={'bold'} sx={{ textShadow: '1px 0px 10px 0px rgb(255, 253, 251)', py: 2 }}>
                Related Products
                <Divider sx={{ background: theme.palette.primary.deep, height: '3px', boxShadow: '1px 0px 20px 0px rgb(246, 229, 218)', width: '180px' }} />
            </Typography>
            <Grid container spacing={2}>
                {furnitureData.slice(2, 6).map((view) => (
                    <Grid key={view.id} item xs={12} sm={6} md={6} lg={3} xl={3}>
                        <ReletedCard view={view} handleClick={handleClick} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ReletedProduct;
