import { Box, Grid, useTheme } from '@mui/material';
import S1 from '../../../assets/images/interior/beds/bannerbed.webp';
import { useNavigate } from 'react-router-dom';

import { tableData } from './tableData';
import Banner from '../../../utils/Banner';
import CardSingle from '../beds/CardSingle';

const SingleTables = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleClick = (id, title) => {
        const selectedFurniture = tableData.find((item) => item.id === id);
        if (selectedFurniture) {
            localStorage.setItem("Furniture", JSON.stringify(selectedFurniture)); // Use "Tile" key
            const modifiedTitle = title.replace(/ /g, "_");
            navigate(`/singlefurniture/${id}?view=${modifiedTitle}`); // Navigate to the correct tile details page
        }
    };
    return (
        <>
            <Banner
                links="tables"
                image={S1}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '40vh', xl: '40vh' }}
                titleVariant="h2"
                overlayColor="rgba(0,0,0, 0.7)"
                spacingConfig={{ xl: 6, lg: 6, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Tables"
            />
            <Box sx={{ px: { xl: theme.spacing(11), lg: theme.spacing(11), md: theme.spacing(2), sm: theme.spacing(2), xs: theme.spacing(2) } }}>
                <Grid container spacing={2}>
                    {tableData?.map((view) => (
                        <Grid key={view.id} item xs={12} sm={6} md={6} lg={3} xl={3}>
                            <CardSingle view={view} handleClick={() => handleClick(view?.id, view?.title)} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* <ReletedBedProduct /> */}
        </>
    );
}

export default SingleTables;
