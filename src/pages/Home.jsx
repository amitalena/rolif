import Banner from "./banner/Banner"
import FurniturePage from "./furniture/FurniturePage"
import TilesPage from "./tiles/TilesPage"
import ElectricPage from "./electric/ElectricPage"
import OurServices from "./services/OurServices"
import LatestBlog from "./blogs/LatesBlog"
import OurTestimonial from "./testimonial/OurTestimonial"
import ParaEffect from "./services/ParaEffect"
import WhyChooseUsN from "./chooseus/WhyChooseUsN"
import OurProcess from "./ourprocess/OurProcess"
import OurFeature from "./feature/OurFeature"
import OurClient from './ourclients/OurClient';
import MainPage from "./mainpage/MainPage"
import OurMission from "./aboutus/OurMission"
import OurProject from "./projects/OurProject"
// import ServiceDo from "./services/ServiceDo"

const Home = () => {
    return (
        <>
            <Banner />
            <MainPage />
            <FurniturePage />
            <TilesPage />
            <ElectricPage />
            <WhyChooseUsN />
            {/* <ServiceDo /> */}
            <OurServices />
            <OurFeature />
            <ParaEffect />
            <OurProcess />
            <OurMission />
            <LatestBlog />
            <OurProject />
            <OurClient />
            <OurTestimonial />
        </>
    )
}

export default Home;