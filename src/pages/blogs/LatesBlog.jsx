import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import { blogData } from "./blogData";
import { useNavigate } from "react-router-dom";
import BlogCard from "../../utils/BlogCard";
import { useMemo, useCallback } from "react";

const LatestBlog = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const sortedBlogs = useMemo(
        () => [...blogData].sort((a, b) => new Date(b.createDate) - new Date(a.createDate)).slice(0, 4),
        []
    );

    const handleClick = useCallback((id, title) => {
        const selectedBlog = blogData.find((item) => item.id === id);
        if (selectedBlog) {
            localStorage.setItem("latestBlog", JSON.stringify(selectedBlog));
            const modifiedTitle = title.replace(/ /g, "_");
            navigate(`/singleblog/${id}?view=${modifiedTitle}`);
        }
    }, [navigate]);

    return (
        <Box sx={{ background: "#e9e9e9", py: 2, px: { md: 2, lg: 8, xl: 8, xs: 2 } }}>
            <Box sx={{ pb: 2 }}>
                <Typography variant="h4" fontWeight="bold">
                    Our <Typography component="span" sx={{ color: "primary.main", py: 2, pl: 1 }}>Blogs</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: 3, width: 50 }} />
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {sortedBlogs.map((blog) => (
                    <Grid key={blog.id} item xs={12} sm={6} md={6} lg={4} xl={3}>
                        <BlogCard blog={blog} handleClick={() => handleClick(blog.id, blog.title)} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LatestBlog;
