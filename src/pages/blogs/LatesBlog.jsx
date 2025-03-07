import { Box, Grid, Typography, } from "@mui/material";
import { blogData } from "./blogData";
import { useNavigate } from "react-router-dom";
import BlogCard from "../../utils/BlogCard";

// Reusable Blog Card Component

const LatestBlog = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        const selectedBlog = blogData.find((item) => item.id === id);
        if (selectedBlog) {
            localStorage.setItem("latestBlog", JSON.stringify(selectedBlog));
            navigate(`/singleblog/${id}`);
        }
    };

    return (
        <Box sx={{ background: "#F1F2F9", py: 2, px: { md: 2, lg: 12, xl: 12, xs: 2 } }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
                Latest Blog
            </Typography>
            <Grid container spacing={2}>
                {blogData.slice(0, 4).map((blog) => (
                    <Grid key={blog.id} item xs={12} sm={6} md={6} lg={4} xl={3}>
                        <BlogCard blog={blog} handleClick={handleClick} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LatestBlog;
