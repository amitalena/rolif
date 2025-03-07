/* eslint-disable react/prop-types */
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { Card, CardMedia, Typography, IconButton, Stack, Box } from "@mui/material";
import { motion } from "framer-motion";

// Icon Mapping
const iconMap = {
    Facebook: <Facebook />,
    Twitter: <Twitter />,
    LinkedIn: <LinkedIn />,
    Instagram: <Instagram />,
};

const TeamCard = ({ member }) => {
    return (

        <Card
            sx={{
                width: '100%',
                height: 'auto',
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
                cursor: "pointer",
            }}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {/* Image */}
                <Box sx={{ width: '100%', height: '300px' }}>
                    <CardMedia
                        component="img"
                        image={member.imagePath}
                        alt={member.name}
                        sx={{
                            backgroundSize: 'cover',
                            width: '100%',
                            height: '100%',
                            backgroundPosition: 'center',
                            transition: "opacity 0.3s ease-in-out",
                        }}
                    />
                </Box>

                {/* Hover Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: 'rgba(21, 19, 17, 0.8)',
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        color: "white",
                    }}
                >
                    <Stack>
                        <Typography variant="h5" fontWeight="bold">
                            {member.name}
                        </Typography>
                        <Typography variant="body2" color="inherit">
                            {member.role}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
                        {member.socialMedia.map((social, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <IconButton
                                    size="small"
                                    to={social.link}
                                    rel="noopener noreferrer"
                                    style={{
                                        borderRadius: 0,
                                        backgroundColor: "white",
                                        color: "black",
                                        transition: "background-color 0.3s ease-in-out",
                                        "&:hover": {
                                            backgroundColor: "#f0f0f0",
                                        },
                                    }}
                                >
                                    {iconMap[social.platform]}
                                </IconButton>
                            </Box>
                        ))}
                    </Stack>
                </motion.div>
            </motion.div>
        </Card >

    );
};

export default TeamCard;
