/* eslint-disable react/prop-types */
import { Card, CardMedia, Divider, Stack, Typography, useTheme } from "@mui/material";
import { format, isValid, parseISO } from "date-fns";

const SingleBlogCard = ({ blog, image, onClick }) => {
    const theme = useTheme();
    return (
        <>
            <Card elevation={0} onClick={onClick}
                sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, cursor: "pointer" }}
            >
                <CardMedia component="img" image={image} alt="Blog Image"
                    sx={{ height: "10vh", width: "100px", objectFit: "cover", borderRadius: 1 }}
                />
                <Stack>
                    <Typography variant="h6">{blog.title}</Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                        {blog?.createDate && isValid(parseISO(blog.createDate))
                            ? format(parseISO(blog.createDate), "MMMM dd, yyyy")
                            : "Invalid Date"}
                    </Typography>
                </Stack>
            </Card>
            <Divider sx={{ background: theme.palette.info.main, }} />
        </>
    );
};

export default SingleBlogCard;