import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";
import member from "../assets/images/member.webp";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import LatestBlog from "../components/Home/LatestBlog/LatestBlog";

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <section className="bg-slate-300 p-32">
                <div className="text-center text-black">
                    <h2 className="text-6xl mb-5">About Us</h2>
                    <h3 className="uppercase text-xl">Home <span className="text-[#266bf9]">/<span>/</span> About Us</span></h3>
                </div>
            </section>
            <section className="max-w-[900px] mx-auto text-center my-20">
                <h3 className="text-5xl my-3">Smart Fashion</h3>
                <h3 className="text-6xl font-bold mb-8">With Smart Devices</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comml consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa</p>
            </section>
            <div className="max-w-[1200px] mx-auto my-20">
                <iframe width="1200" height="400" src="https://www.youtube.com/embed/7bOptq-NPJQ?si=cX_KoM7ZmDS_v0DJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
            </div>
            <section className="max-w-7xl mx-auto text-center my-20">
                <h3 className="text-5xl font-semibold my-5">Team Member</h3>
                <p>There are many variations of passages of Lorem Ipsum available</p>
                <div className="grid grid-cols-3 my-10 justify-items-center">
                    <div className="text-center ">
                        <img src={member} alt="" />
                        <h4 className="text-2xl font-semibold mt-6">Anaiah Whitten</h4>
                        <p className="uppercase">Team Member</p>
                    </div>
                    <div className="text-center ">
                        <img src={member} alt="" />
                        <h4 className="text-2xl font-semibold mt-6">Anaiah Whitten</h4>
                        <p className="uppercase">Team Member</p>
                    </div>
                    <div className="text-center ">
                        <img src={member} alt="" />
                        <h4 className="text-2xl font-semibold mt-6">Anaiah Whitten</h4>
                        <p className="uppercase">Team Member</p>
                    </div>
                </div>
            </section>
            <Testimonials />
            <LatestBlog />
            <Footer />
        </>
    );
};

export default AboutPage;