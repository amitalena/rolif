import React, { useEffect, useState } from "react";
import { switchData } from "./switches/switchData";
import { fansData } from "./fans/fansData";
import ElectricViewComponent from "./ElectricViewComponent";

const interleaveData = (arr1, arr2) => {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (arr1[i]) result.push(arr1[i]);
        if (arr2[i]) result.push(arr2[i]);
    }

    return result;
};

const allSlides = interleaveData(switchData, fansData);

const SingleTiles = () => {
    const [mainTile, setMainTile] = useState(null);
    const [latestTiles, setLatestTiles] = useState([]);

    useEffect(() => {
        // Retrieve the saved tile data from localStorage
        const savedTile = localStorage.getItem("Electric");

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
        <ElectricViewComponent
            view={mainTile}
            latestBlogs={latestTiles}
        />
    );
};

export default React.memo(SingleTiles);
