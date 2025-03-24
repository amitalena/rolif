/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import {
    Box,
    useTheme,
    Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardSingle from "../../furniture/beds/CardSingle";
import Banner from "../../../utils/Banner";
import S1 from "../../../assets/images/banners/banner/floarTiles.jpg";
import { bedroomFloorData } from './floors/bedroomFloorData';
import { bedroomWallData } from './walls/bedroomWallData';

const interleaveData = (arr1, arr2) => {
    return arr1.flatMap((item, index) => [item, arr2[index]]).filter(Boolean);
};

// Merge data in alternating order and memoize it
const allSlides = interleaveData(bedroomFloorData, bedroomWallData);

const BadRoomPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const palette = theme.palette; // Extract palette for color usage

    // Handle click event for tile items (memoized)
    const handleClick = useCallback((id, title) => {
        const selectedTile = allSlides.find((item) => item.id === id);
        if (selectedTile) {
            localStorage.setItem("Tile", JSON.stringify(selectedTile)); // Use "Tile" key
            navigate(`/singletiles/${id}?view=${title.replace(/ /g, "_")}`); // Navigate to the correct tile details page
        }
    }, []);

    return (
        <>
            {/* Banner Section */}
            <Banner
                links="tiles"
                image={S1}
                height={{ sm: "35vh", md: "45vh", xs: "40vh", lg: "55vh", xl: "50vh" }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.2)"
                spacingConfig={{ xl: 12, lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Living Room"
            />

            {/* Tiles Display Section */}
            <Box sx={{ px: { xl: 11, lg: 11, md: 2, sm: 2, xs: 2 } }}>
                <Grid container spacing={2}>
                    {allSlides.map((view) => (
                        <Grid key={view.id} item xs={12} sm={6} md={6} lg={3} xl={3}>
                            <CardSingle view={view} handleClick={() => handleClick(view.id, view.title)} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default React.memo(BadRoomPage);
