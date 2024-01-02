import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";


const FaqPage = () => {
    return (
        <>
            <Navbar />
            <section className="bg-slate-300 p-32">
                <div className="text-center text-black">
                    <h2 className="text-6xl mb-5">Faq</h2>
                    <h3 className="uppercase text-xl">Home <span className="text-[#266bf9]">/<span>/</span> Faq</span></h3>
                </div>
            </section>
            <section className="max-w-[900px] mx-auto my-20">
                <div>
                    <h3 className="text-2xl font-semibold my-3">Below are frequently asked questions, you may find the answer for yourself</h3>
                    <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>
                </div>
                <div>
                    <div className="collapse collapse-arrow bg-base-200 my-5">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">1. Mauris congueeuismod purus at semper?</div>
                        <div className="collapse-content">
                            <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 my-5">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">2. Donec mattis finibus elit ut tristique?</div>
                        <div className="collapse-content">
                            <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 my-5">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">3. Aenean elit orci, efficitur quis nisl?</div>
                        <div className="collapse-content">
                            <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default FaqPage;