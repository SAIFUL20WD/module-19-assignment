import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";
import Featured from "../components/Home/Featured/Featured";
import LatestBlog from "../components/Home/LatestBlog/LatestBlog";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import MidBanner from "../components/Home/MidBanner/MidBanner";
import Offers from "../components/Home/Offers/Offers";
import Products from "../components/Home/Products/Products";
import Slider from "../components/Home/Slider/Slider";


const HomePage = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <Featured />
            <Products />
            <MidBanner />
            <Offers />
            <LatestBlog />
            <Testimonials />
            <Footer />
        </>
    );
};

export default HomePage;