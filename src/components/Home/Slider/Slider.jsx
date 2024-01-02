import topBg from "../../../assets/images/top-banner-bg.jpg";
import headSet from "../../../assets/images/headset.png";
import speaker from "../../../assets/images/speaker.png";

const Slider = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={topBg} className="w-full h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle mt-32">❮</a>
                        <div className="flex flex-row-reverse justify-between items-center">
                            <div>
                                <img src={headSet} alt="" className="w-96 ml-40"/>
                            </div>
                            <div className="text-white">
                                <p className="text-xl">Welcome To Hmart</p>
                                <h2 className="text-6xl leading-tight">Your Home <br /> Smart Device & <br /> Best Solution</h2>
                                <button className="btn btn-outline text-xl font-semibold px-5 py-2 mt-10 rounded-xl">Shop All Devices</button>
                            </div>
                        </div>
                        <a href="#slide2" className="btn btn-circle mt-32">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={topBg} className="w-full h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle mt-32">❮</a>
                        <div className="flex flex-row-reverse justify-between items-center">
                            <div>
                                <img src={speaker} alt="" className="w-96 ml-40"/>
                            </div>
                            <div className="text-white">
                                <p className="text-xl">Welcome To Hmart</p>
                                <h2 className="text-6xl leading-tight">Your Home <br /> Smart Device & <br /> Best Solution</h2>
                                <button className="btn btn-outline text-xl font-semibold px-5 py-2 mt-10 rounded-xl">Shop All Devices</button>
                            </div>
                        </div>
                        <a href="#slide1" className="btn btn-circle mt-32">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
