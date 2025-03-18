import React, { useEffect, useState } from "react";
import TilesViewComponent from "./TilesViewComponent";
import { livingroomFloorData } from './livingrooms/floors/livingroomFloorData';
import { livingroomWallData } from './livingrooms/walls/livingroomWallData';
import { bathroomFloorData } from './bathrooms/floors/bathroomFloorData';
import { bathroomWallData } from './bathrooms/walls/bathroomWallData';
import { kitchenFloorData } from './kitchens/floors/kitchenFloorData';
import { kitchenWallData } from './kitchens/walls/kitchenWallData';
import { bedroomFloorData } from './bedrooms/floors/bedroomFloorData';
import { bedroomWallData } from './bedrooms/walls/bedroomWallData';


const interleaveData = (arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8) => {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length, arr3.length, arr4.length, arr5.length, arr6.length, arr7.length, arr8.length);

    for (let i = 0; i < maxLength; i++) {
        if (arr1[i]) result.push(arr1[i]); // Add furniture data
        if (arr2[i]) result.push(arr2[i]); // Add tiles data
        if (arr3[i]) result.push(arr3[i]); // Add electric data
        if (arr4[i]) result.push(arr4[i]); // Add electric
        if (arr5[i]) result.push(arr5[i]); // Add electric
        if (arr6[i]) result.push(arr6[i]); // Add electric
        if (arr7[i]) result.push(arr7[i]); // Add electric
        if (arr8[i]) result.push(arr8[i]); // Add electric
    }

    return result;
};

// Merge data in alternating order
const allSlides = interleaveData(livingroomFloorData, livingroomWallData, bathroomFloorData, bathroomWallData, kitchenFloorData, kitchenWallData, bedroomFloorData, bedroomWallData);

const SingleTiles = () => {
    const [mainTile, setMainTile] = useState(null);
    const [latestTiles, setLatestTiles] = useState([]);

    useEffect(() => {
        // Retrieve the saved tile data from localStorage
        const savedTile = localStorage.getItem("Tile");
        if (savedTile) {
            // Parse the data back to an object
            const parsedTile = JSON.parse(savedTile);

            // Set the main tile (selected tile)
            setMainTile(parsedTile);

            // Set the latest tiles (all other tile items except the selected one)
            const filteredLatestTiles = allSlides.filter(
                (item) => item.id !== parsedTile.id
            );
            setLatestTiles(filteredLatestTiles);
        } else {
            // If no data is found in localStorage, fallback to default data
            const defaultMainTile = allSlides.find((tile) => tile.id === 1);
            const defaultLatestTiles = allSlides.filter((tile) => tile.id !== 1);

            setMainTile(defaultMainTile);
            setLatestTiles(defaultLatestTiles);
        }
    }, []);

    if (!mainTile) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }

    return (
        <TilesViewComponent
            view={mainTile}
            latestBlogs={latestTiles}
        />
    );
};

export default React.memo(SingleTiles);
