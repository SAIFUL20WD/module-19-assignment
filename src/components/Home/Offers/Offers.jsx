import smartwatch from "../../../assets/images/smartwatch.jpeg";

const date = new Date(Date.now())

const Offers = () => {
    return (
        <section className="max-w-7xl mx-auto my-16">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold mb-5">Featured Offers</h2>
                <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
            <div className="grid grid-cols-2">
                <div className="border-2 rounded-xl flex mx-5">
                    <div className="w-64 px-5 py-16 border-r-2 border-slate-300">
                        <img src={smartwatch} alt="" className=""/>
                    </div>
                    <div>
                        <div className="p-8">
                            <p className="bg-[#266bf9] px-3 py-1 text-white rounded-e-full">Ends In: 00 : {date.getMinutes()} : {date.getHours()}</p>
                            <h3 className="font-bold text-black my-3">Ladies Smart Watch</h3>
                            <p className="font-semibold text-slate-500 text-xl">$38.00</p>
                        </div>
                        <div className="h-[2px] bg-slate-200 ml-8"></div>
                        <div className="p-8">
                            <ul className="[&>li]:my-1">
                                <li>Predecessor : None</li>
                                <li>Support Type : Neutral</li>
                                <li>Cushioning : High Energing</li>
                                <li>Total Weight : 300gm</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-2 rounded-xl flex mx-5">
                    <div className="w-64 px-5 py-16 border-r-2 border-slate-300">
                        <img src={smartwatch} alt="" className=""/>
                    </div>
                    <div>
                        <div className="p-8">
                            <p className="bg-[#266bf9] px-3 py-1 text-white rounded-e-full">Ends In: 00 : {date.getMinutes()} : {date.getHours()}</p>
                            <h3 className="font-bold text-black my-3">Ladies Smart Watch</h3>
                            <p className="font-semibold text-slate-500 text-xl">$38.00</p>
                        </div>
                        <div className="h-[2px] bg-slate-200 ml-8"></div>
                        <div className="p-8">
                            <ul className="[&>li]:my-1">
                                <li>Predecessor : None</li>
                                <li>Support Type : Neutral</li>
                                <li>Cushioning : High Energing</li>
                                <li>Total Weight : 300gm</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;