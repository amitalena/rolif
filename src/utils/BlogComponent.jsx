/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography, useTheme, Card, CardMedia, CardContent, Breadcrumbs } from "@mui/material";
import SingleBlogCard from "./SingleBlogCard";
import { AccessTimeOutlined, KeyboardDoubleArrowRight, MessageRounded } from "@mui/icons-material";
import { format, parseISO, isValid } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Banner from "./Banner";
import S1 from '../assets/images/banners/singleBanner.webp';

const BlogComponent = ({ blog, latestBlogs }) => {
    const { palette } = useTheme();
    const navigate = useNavigate();

    const dFlex = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: palette.info.dark,
        gap: 1,
    };

    const [mainBlog, setMainBlog] = useState(blog);
    const [latestPosts, setLatestPosts] = useState(latestBlogs);

    useEffect(() => {
        // Retrieve the saved blog data from localStorage
        const savedBlog = localStorage.getItem("latestBlog");

        if (savedBlog) {
            const parsedBlog = JSON.parse(savedBlog);
            setMainBlog(parsedBlog);

            // Filter out the selected blog from latest blogs
            const updatedLatestPosts = latestBlogs.filter(item => item.id !== parsedBlog.id);
            setLatestPosts(updatedLatestPosts);
        }
    }, [latestBlogs]); // Re-run effect if latestBlogs changes

    const handleClick = (selectedBlog) => {
        localStorage.setItem("latestBlog", JSON.stringify(selectedBlog));
        setMainBlog(selectedBlog);

        // Update latest blogs list
        const updatedLatest = latestBlogs.filter(item => item.id !== selectedBlog.id);
        setLatestPosts(updatedLatest);

        navigate(`/singleblog/${selectedBlog.id}`);
    };

    return (
        <>
            <Banner
                title="Blogs"
                image={S1}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '55vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.7)"
                spacingConfig={{ lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Single Blogs"
            />

            <Box sx={{ background: "#F1F2F9", py: 1, px: { md: 2, lg: 12, xl: 12, xs: 2 } }}>
                <Box sx={{ p: 1, my: 2, background: palette.info.light }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ flexShrink: 0 }}
                    >
                        <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: palette.primary.main }} />} aria-label="breadcrumb">
                            <Link style={{ fontWeight: 'bold', textDecoration: 'none', color: palette.primary.main }} to="/">Home</Link>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: palette.info.deep }}>
                                {mainBlog.title}
                            </Typography>
                        </Breadcrumbs>
                    </motion.div>
                </Box>

                <Grid container spacing={3}>
                    {/* Main Blog */}
                    <Grid item xs={12} lg={8}>
                        <Card elevation={0} sx={{ height: "auto", p: { xs: 2, sm: 2, md: 2, lg: 3, xl: 5 }, overflow: "hidden" }}>
                            <CardMedia component="img" image={mainBlog.imagePath} alt="Main Blog Image"
                                sx={{ height: "60vh", width: "100%" }}
                            />
                            <CardContent>
                                <Stack direction="row" spacing={5} alignItems="center">
                                    {/* Date Section */}
                                    <Typography variant="body2" sx={dFlex}>
                                        <AccessTimeOutlined sx={{ fontSize: '20px', mr: 1 }} />
                                        {mainBlog?.createDate && isValid(parseISO(mainBlog.createDate))
                                            ? format(parseISO(mainBlog.createDate), "MMMM dd, yyyy")
                                            : "Invalid Date"}
                                    </Typography>

                                    {/* Comments Section */}
                                    <Typography variant="body2" sx={dFlex}>
                                        <MessageRounded sx={{ fontSize: '20px', mr: 1 }} />
                                        {mainBlog?.comments ?? "0"}
                                    </Typography>
                                </Stack>

                                <Stack spacing={2} mt={1}>
                                    <Typography variant="h4" fontWeight="bold">{mainBlog.title}</Typography>
                                    <Typography variant="body2">{mainBlog.description}</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Latest Blogs Section */}
                    <Grid item xs={12} lg={4}>
                        <Card elevation={0} sx={{ p: 2, mb: 1 }}>
                            <Stack spacing={1}>
                                <Typography variant="h4">Categories</Typography>
                                <Typography sx={{ color: palette.info.dark }}> {mainBlog.categories}</Typography>
                            </Stack>
                        </Card>

                        <Card elevation={0} sx={{ p: 2 }}>
                            <Typography variant="h4" sx={{ my: 2 }}>Recent Posts</Typography>
                            <Stack spacing={2}>
                                {latestPosts.slice(0, 4).map((latestBlog) => (
                                    <SingleBlogCard
                                        key={latestBlog.id}
                                        blog={latestBlog}
                                        title={latestBlog.title}
                                        createDate={latestBlog.createDate}
                                        image={latestBlog.imagePath}
                                        onClick={() => handleClick(latestBlog)}
                                    />
                                ))}
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default BlogComponent;
