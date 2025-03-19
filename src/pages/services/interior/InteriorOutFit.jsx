import Banner from "../../../utils/Banner"
import S1 from '../../../assets/images/banners/banner/interior0.jpeg'
import { Box, Typography, useTheme } from "@mui/material"
import OurServices from "./OurServices";
const InteriorOutFit = () => {
    const theme = useTheme();
    return (
        <>
            <Banner
                title="Interior Out Fit"
                image={S1}
                height={{ sm: "35vh", md: "45vh", xs: "40vh", lg: "55vh", xl: "50vh" }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.2)"
                spacingConfig={{ xl: 12, lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Interior"
            />
            <Box sx={{ py: 4, px: { lg: theme.spacing(16), md: theme.spacing(2), sm: theme.spacing(2), xs: theme.spacing(2) }, }}>
                <Box>
                    <Typography variant="h4">Transforming Spaces with Precision and Style</Typography>
                    <Typography variant="body2">At RolifIndia, we specialize in creating tailor-made interior and fit-out solutions that transform your vision into reality. Whether you're looking to redesign your home, office, retail space, or commercial property, our team of experts delivers high-quality craftsmanship, design innovation, and efficient project execution.
                    </Typography>
                </Box>
                <OurServices />
            </Box>
        </>
    )
}

export default InteriorOutFit