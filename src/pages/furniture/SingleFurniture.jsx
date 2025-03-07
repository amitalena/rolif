import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { furnitureData } from "./furnitureData";
import ViewComponent from "../../utils/ViewComponent";

const SingleFurniture = () => {
    const { id } = useParams(); // Get the id from the URL
    const [mainView, setMainView] = useState(null);
    const [latestBlogs, setLatestBlogs] = useState([]);

    useEffect(() => {
        const savedFurniture = localStorage.getItem("Furniture");
        let selectedFurniture;

        if (savedFurniture) {
            selectedFurniture = JSON.parse(savedFurniture);
        } else {
            selectedFurniture = furnitureData.find((item) => item.id === Number(id));
        }

        if (selectedFurniture) {
            setMainView(selectedFurniture);
            setLatestBlogs(furnitureData.filter((item) => item.id !== selectedFurniture.id));
        }
    }, [id]); // Re-run effect when `id` changes

    if (!mainView) {
        return <div>Loading...</div>;
    }

    return (
        <ViewComponent
            view={mainView}
            latestBlogs={latestBlogs}
        />
    );
};

export default React.memo(SingleFurniture);
