import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";
import thank from "../assets/images/thank.webp";

const ThankYouPage = () => {
    return (
        <>
            <Navbar />
            <section className="max-w-4xl mx-auto my-10">
                <div className="flex flex-col items-center text center [&>*]:my-3">
                    <img src={thank} alt="" />
                    <p>Thank you for ordering in our store. You will receive a confirmation email shortly.</p>
                    <button className="btn bg-[#266bf9] text-white px-7">Continue Shopping</button>
                    <h3 className="text-3xl font-semibold">Call Us for Quick Order</h3>
                    <p className="text-xl font-semibold text-red-500">01 234 567 890</p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ThankYouPage;