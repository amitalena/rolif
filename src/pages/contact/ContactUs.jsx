import Banner from '../../utils/Banner';
import C1 from '../../assets/images/banners/contact-us.png';
import Contact from './Contact';
import GoogleMap from './GoogleMap';

const ContactUs = () => {

    return (
        <>
            <Banner
                links="contact-us"
                image={C1}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '40vh', xl: '40vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.3)"
                spacingConfig={{ xl: 12, lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Contact Us"
            />
            <Contact />
            <GoogleMap />
        </>
    );
};

export default ContactUs;