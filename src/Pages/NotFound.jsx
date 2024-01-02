import { Link } from "react-router-dom";
import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";


const NotFound = () => {
    return (
        <>
            <Navbar />
            <section className="max-w-7xl mx-auto text-center my-20">
                <h2 className="text-black font-bold text-7xl my-5">Oops! <br /> Page Not Found!</h2>
                <p>You could either go back or go to homepage</p>
                <Link to="/"><button className="btn btn-primary uppercase rounded-full my-5 mx-3 px-10">Go Back</button></Link>
                <Link to="/"><button className="btn btn-neutral uppercase rounded-full my-5 px-10">HomePage</button></Link>
            </section>
            <Footer />
        </>
    );
};

export default NotFound;