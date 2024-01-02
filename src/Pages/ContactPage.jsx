import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <section className="bg-slate-300 p-32">
                <div className="text-center text-black">
                    <h2 className="text-6xl mb-5">Contact Us</h2>
                    <h3 className="uppercase text-xl">Home <span className="text-[#266bf9]">/<span>/</span> Contact</span></h3>
                </div>
            </section>
            <div className="max-w-7xl mx-auto bg-slate-100 p-20 rounded-lg my-20">
                <h3 className="text-center text-5xl font-semibold">Send A Quest</h3>
                <form action="" className="ml-24">
                    <div className="mt-10">
                        <input type="text" placeholder="Name*" className="input input-bordered input-primary w-full max-w-md mr-8" required />
                        <input type="text" placeholder="Email*" className="input input-bordered input-primary w-full max-w-md" required />
                    </div>
                    <div className="my-8">
                        <input type="text" placeholder="Subject*" className="input input-bordered input-primary w-full max-w-[928px]" required />
                    </div>
                    <div>
                        <textarea className="textarea textarea-primary textarea-lg w-full max-w-[928px] min-h-64" placeholder="Your Message*" required></textarea>
                    </div>
                    <div className="flex justify-center my-10">
                        <button className="btn bg-[#266bf9] text-white px-10">Send Message</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;