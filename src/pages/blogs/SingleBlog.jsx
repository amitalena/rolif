import { useEffect, useState } from "react";
import BlogComponent from "../../utils/BlogComponent";
import { blogData } from "./blogData";

const SingleBlog = () => {
    const [mainBlog, setMainBlog] = useState(null);
    const [latestBlogs, setLatestBlogs] = useState([]);
    useEffect(() => {
        // Retrieve the saved furniture data from localStorage
        const savedFurniture = localStorage.getItem("latestblog");

        if (savedFurniture) {
            // Parse the data back to an object
            const parsedFurniture = JSON.parse(savedFurniture);

            // Set the main blog (selected furniture)
            setMainBlog(parsedFurniture);

            // Set the latest blogs (all other furniture items except the selected one)
            const filteredLatestBlogs = blogData.filter(
                (item) => item.id !== parsedFurniture.id
            );
            setLatestBlogs(filteredLatestBlogs);
        } else {
            // If no data is found in localStorage, fallback to default data
            const defaultMainBlog = blogData.find((blog) => blog.id === 1);
            const defaultLatestBlogs = blogData.filter((blog) => blog.id !== 1);

            setMainBlog(defaultMainBlog);
            setLatestBlogs(defaultLatestBlogs);
        }
    }, []);

    if (!mainBlog) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <BlogComponent
                blog={mainBlog}
                latestBlogs={latestBlogs}
            />
        </>
    );
};

export default SingleBlog;