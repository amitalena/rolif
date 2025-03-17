import { Box, Divider, Grid, Typography, useTheme, } from "@mui/material";
import { blogData } from "./blogData";
import { useNavigate } from "react-router-dom";
import BlogCard from "../../utils/BlogCard";
import { useMemo } from "react";

// Reusable Blog Card Component

const LatestBlog = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const handleClick = (id) => {
        const selectedBlog = blogData.find((item) => item.id === id);
        if (selectedBlog) {
            localStorage.setItem("latestBlog", JSON.stringify(selectedBlog));
            navigate(`/singleblog/${id}`);
        }
    };
    const blogStyles = useMemo(() => ({
        variant: "h4",
        fontWeight: "bold",
        color: "primary.main",
        py: 2,
        pl: 1,
    }), []);
    return (
        <Box sx={{ background: "#F1F2F9", py: 2, px: { md: 2, lg: 8, xl: 8, xs: 2 } }}>
            <Box sx={{ pb: 2 }}>
                <Typography variant="h4" fontWeight={'bold'}>Our <Typography component={'span'} {...blogStyles}>Blogs</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: '3px', width: '50px' }} />
                </Typography>
            </Box>
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
