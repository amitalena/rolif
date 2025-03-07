import React, { useEffect, useState } from "react";
import { tilesData } from "./tilesData";  // Import tiles data
import ViewComponent from "../../utils/ViewComponent";

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
            const filteredLatestTiles = tilesData.filter(
                (item) => item.id !== parsedTile.id
            );
            setLatestTiles(filteredLatestTiles);
        } else {
            // If no data is found in localStorage, fallback to default data
            const defaultMainTile = tilesData.find((tile) => tile.id === 1);
            const defaultLatestTiles = tilesData.filter((tile) => tile.id !== 1);

            setMainTile(defaultMainTile);
            setLatestTiles(defaultLatestTiles);
        }
    }, []);

    if (!mainTile) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }

    return (
        <ViewComponent
            view={mainTile}
            latestBlogs={latestTiles}
        />
    );
};

export default React.memo(SingleTiles);
