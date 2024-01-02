import midBanner from "../../../assets/images/mid-banner.jpg";

const MidBanner = () => {
    return (
        <div className="my-16 relative">
            <img src={midBanner} alt="" />
            <div className="absolute top-40 ml-[500px]">
                <h3 className="text-4xl text-center leading-snug">Smart Fashion <br /> <span className="text-5xl font-extrabold">With Smart Devices</span></h3>
                <button className="btn btn-outline ml-48 mt-3">Shop Now</button>
            </div>
        </div>
    );
};

export default MidBanner;