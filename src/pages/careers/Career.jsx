import Banner from '../../utils/Banner';
import WhyChooseUsN from './../chooseus/WhyChooseUsN';
import Ab1 from '../../assets/images/banners/banner/aboutbanner.avif'
import Contact from '../contact/Contact';
import OurProject from '../projects/OurProject';
const Career = () => {
    return (
        <>
            <Banner
                image={Ab1}
                links={"career"}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '40vh', xl: '40vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.4)"
                spacingConfig={{ lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Career"
            />
            <WhyChooseUsN />
            <OurProject />
            <Contact />
        </>
    )
}

export default Career