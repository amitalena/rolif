import Banner from "../../../utils/Banner"
import S1 from '../../../assets/images/banners/banner/interior0.jpeg'
import { Box, Stack, Typography, useTheme } from "@mui/material"
import OurServices from "./OurServices";

const ElectricService = () => {
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
                {/* <Stack spacing={2}>
                    <Typography variant="h4">Transforming Spaces with Precision and Style <br />
                        Your Trusted Source Reliable, Safe, and Efficient Electrical Solutions & for Electrical Items, Tiles & Sanitary Ware</Typography>
                    <Typography variant="body2">The Company “ROLIF INDIA PVT. LTD., started business services in 2013 as Lighting Solutions. Later the company became EPC contracting company.  This division play a pivotal role in the project execution of the other service division.   The initial goal of our company is to provide all the solutions for electrical services including internal & external electrification covering the distribution, Low voltage system, HT & LT works, Panels & Transformers & Interior fit-out solutions from space design by our inhouse architects or as per the client predefined designs.  Our highly professional team of engineers, designers, supervisors, technicians etc., have a deep understanding of the EPC industry and advance technology to help the client/customer with their project needs.
                    </Typography>
                    <Typography variant="body2">We are one of the developing and distinguished EPC company value the commitment made to the client/Customer for delivering & fulfillment the assigned project/ work with the given time frame with high standard quality job.  We believe in maintaining a professional relationship between our organization and customer /client. From applied engineering, in house drawings/designing and excellent project management, Operation & Maintenance, Planning & Commissioning, the company is capable of managing projects of any scale professionally.
                    </Typography>
                </Stack> */}
                <Stack spacing={2}>
                    <Typography variant="h4">Electrical Contracting Services</Typography>
                    <Typography variant="body2">Reliable, Safe, and Efficient Electrical Solutions</Typography>
                    <Typography variant="body2">At ROLIF INDIA PVT. LTD., we specialize in providing high-quality electrical contracting services for residential, commercial, and industrial projects. With years of experience and a dedicated team of certified electricians, we deliver reliable electrical systems that ensure safety, performance, and efficiency.
                    </Typography>
                </Stack>
                <OurServices />
            </Box>
        </>
    )
}

export default ElectricService