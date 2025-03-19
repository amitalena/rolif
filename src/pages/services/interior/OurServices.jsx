import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography, useTheme } from "@mui/material"
import R1 from '../../../assets/images/interior/interiorimg/int.avif'
import C1 from '../../../assets/images/interior/interiorimg/commerce.avif'
import H1 from '../../../assets/images/interior/interiorimg/hospitality.avif'
import M1 from '../../../assets/images/interior/interiorimg/mep.avif'
import P1 from '../../../assets/images/interior/interiorimg/ourprocess.avif'
import Ch1 from '../../../assets/images/interior/interiorimg/whychooseus.avif'
const OurServices = () => {
    const theme = useTheme();
    const serviceData = [
        {
            title: "Residential Interior Design & Fit-Out",
            img: R1,
            details: [
                { title: "Bedroom & Kitchen Fit-Outs", desc: "Transform personal spaces into sanctuaries with functional layouts and stylish finishes." },
                { title: "Living Room Design", desc: "Elevate your living room with custom furniture, lighting, and decorative accents that suit your style." },
                { title: "Full Home Renovation", desc: "From concept to completion, we offer comprehensive solutions that cater to all rooms and needs." }
            ]
        },
        {
            title: "Commercial & Office Fit-Out",
            img: C1,
            details: [
                { title: "Modern Office Spaces", desc: "Boost productivity with a functional office layout that promotes collaboration and enhances comfort." },
                { title: "Retail Design", desc: "Attract customers with well-designed, engaging retail spaces that align with your brand identity." },
                { title: "Corporate Interiors", desc: "A refined approach to office fit-out solutions that blend professionalism with creativity for a lasting impression." }
            ]
        },
        {
            title: "Hospitality & Restaurant Interiors",
            img: H1,
            details: [
                { title: "Restaurant Fit-Outs", desc: "Craft a memorable dining experience with interiors designed to complement your cuisine and ambiance." },
                { title: "Hotel & Lobby Designs", desc: "Create an inviting atmosphere for guests with elegant, functional designs that provide comfort and style." }
            ]
        },
        {
            title: "MEP (Mechanical, Electrical, and Plumbing) Services",
            img: M1,
            details: [
                { title: "Electrical Layouts", desc: "Custom electrical planning to ensure efficient lighting, safety, and functionality." },
                { title: "Plumbing & HVAC Systems", desc: "Installing top-quality plumbing and HVAC systems for maximum comfort and efficiency." }
            ]
        }
    ]
    return (
        <>
            <Box>

                <Typography variant="h4" sx={{ py: 2, color: theme.palette.primary.main }}>Our Services</Typography>
                <Grid container spacing={3}>
                    {serviceData.map((service, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                                <CardMedia
                                    component="img"
                                    image={service.img}
                                    alt={service.title}
                                    sx={{ width: { xs: "100%", md: 250 }, height: 250, objectFit: "cover" }}
                                />
                                <CardContent>
                                    <Typography variant="h5" color="primary" gutterBottom>{service.title}</Typography>
                                    <Stack spacing={1}>
                                        {service.details.map((item, i) => (
                                            <Typography key={i} variant="body2">
                                                <Typography variant="body1" component="span" fontWeight="bold">{item.title}: </Typography>
                                                {item.desc}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h4" fontWeight={'bold'} sx={{ py: 2, color: theme.palette.primary.main }}>Our Process</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Stack spacing={2}>
                            <Typography variant="body2"><Typography variant="body1">Consultation & Requirement Analysis:</Typography> We begin by understanding your goals and design preferences. Whether you have a clear vision or need guidance, we provide solutions that meet your requirements.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Design & Visualization:</Typography> Our skilled designers create 2D and 3D visualizations, helping you visualize the final product before construction begins.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Material Selection:</Typography> From flooring to finishes, we source the highest-quality materials that complement your style and budget.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Execution & Fit-Out:</Typography> Our expert team handles the entire construction and fit-out process, ensuring all work is done on schedule, on budget, and to the highest standards.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Final Touches & Handover:</Typography> We complete every project with attention to detail, ensuring a seamless handover that exceeds expectations.</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box sx={{ height: '350px', width: { md: '100%', xs: '100%' } }}>
                            <img src={P1} alt="Interior" height={'100%'} width={'100%'} />
                        </Box>
                    </Grid>
                </Grid>

                <Typography variant="h4" fontWeight={'bold'} sx={{ py: 2, color: theme.palette.primary.main }}>Why choose us</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Stack spacing={2}>
                            <Typography variant="body2"><Typography variant="body1">Expertise & Experience:</Typography> With years of experience in interior design and fit-out works, we bring creativity and professionalism to every project.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Tailored Solutions:</Typography> Every space is unique, and we offer customized solutions designed to fit your specific needs, preferences, and budget.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Timely Delivery:</Typography> We understand the importance of deadlines and work diligently to complete projects on time without compromising on quality.</Typography>
                            <Typography variant="body2"><Typography variant="body1">High-Quality Materials & Craftsmanship:</Typography> Our commitment to using only premium materials ensures long-lasting results.</Typography>
                            <Typography variant="body2"><Typography variant="body1">Customer Satisfaction:</Typography> We pride ourselves on delivering exceptional service with a focus on customer satisfaction at every step of the process.</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box sx={{ height: '350px', width: { md: '100%', xs: '100%' } }}>
                            <img src={Ch1} alt="Interior" height={'100%'} width={'100%'} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default OurServices