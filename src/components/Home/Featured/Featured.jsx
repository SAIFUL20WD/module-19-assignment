import watch from "../../../assets/images/watch.webp";
import earbuds from "../../../assets/images/earbuds.webp";
import smarthphone from "../../../assets/images/smartphone.webp";


const Featured = () => {
    return (
        <section className="max-w-7xl mx-auto grid grid-cols-2 my-24">
            <div className="ml-10 relative hover:scale-105 duration-300">
                <img src={watch} alt="" />
                <div className="absolute bottom-3 px-16 py-8 leading-tight">
                    <h3 className="text-[#999da0] text-3xl font-semibold">Smart Watch For <br /> Your Hand</h3>
                    <p className="text-2xl text-black font-medium inline mr-60">From $29.00</p>
                    <span className="text-xl text-white font-bold bg-[#266bf9] btn btn-circle"><i className="fa-solid fa-arrow-right"></i></span>
                </div>
            </div>
            <div>
                <div className="relative mb-8 hover:scale-105 duration-300">
                    <img src={earbuds} alt="" />
                    <div className="absolute top-1 px-12 py-10">
                        <h3 className="text-[#999da0] text-3xl font-semibold mb-3">Headphones</h3>
                        <p className="text-2xl text-black font-medium mb-10">From $95.00</p>
                        <span className="text-xl text-white font-bold bg-[#266bf9] btn btn-circle"><i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="relative hover:scale-105 duration-300">
                    <img src={smarthphone} alt="" />
                    <div className="absolute top-1 px-12 py-10">
                        <h3 className="text-[#999da0] text-3xl font-semibold mb-3">Smartphone</h3>
                        <p className="text-2xl text-black font-medium mb-10">From $150.00</p>
                        <span className="text-xl text-white font-bold bg-[#266bf9] btn btn-circle"><i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;