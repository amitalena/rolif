import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewComponent from "../../utils/ViewComponent";
import { bedData } from "./beds/bedData";
import { chairData } from "./chairs/chairData";
import { tableData } from "./tables/tableData";
import { sofaData } from "./sofas/sofaData";

// Function to interleave data from multiple arrays
const interleaveData = (arr1, arr2, arr3, arr4) => {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length, arr3.length, arr4.length);

    for (let i = 0; i < maxLength; i++) {
        if (arr1[i]) result.push(arr1[i]);
        if (arr2[i]) result.push(arr2[i]);
        if (arr3[i]) result.push(arr3[i]);
        if (arr4[i]) result.push(arr4[i]);
    }

    return result;
};

// Combine all furniture data into a single array
const allSlides = interleaveData(bedData, chairData, tableData, sofaData);

const SofaView = () => {
    const { id } = useParams(); // Get the `id` from the URL
    const [mainView, setMainView] = useState(null);
    const [latestBlogs, setLatestBlogs] = useState([]);

    useEffect(() => {
        // Fetch the selected furniture item
        const savedFurniture = localStorage.getItem("Furniture");
        let selectedFurniture;

        if (savedFurniture) {
            selectedFurniture = JSON.parse(savedFurniture);
        } else {
            // Fallback to `allSlides` if not found in localStorage
            selectedFurniture = allSlides.find((item) => item.id === Number(id));
        }

        if (selectedFurniture) {
            setMainView(selectedFurniture);
            // Set `latestBlogs` to exclude the current furniture item
            setLatestBlogs(allSlides.filter((item) => item.id !== selectedFurniture.id));
        } else {
            console.error("Furniture not found");
        }
    }, [id]); // Re-run effect when `id` changes

    if (!mainView) {
        return <div>Loading...</div>; // Add a proper loading state or spinner
    }

    return (
        <ViewComponent
            view={mainView}
            latestBlogs={latestBlogs}
        />
    );
};

export default React.memo(SofaView);