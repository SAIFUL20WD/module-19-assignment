import reviewer from "../../../assets/images/reviewer.jpg";

const Testimonials = () => {
    return (
        <section className="bg-[#f2f8fd] my-20 p-20">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold mb-5">Client Feedback</h2>
                <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
                <div>
                    <p className="italic text-xl my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio, aliquam delectus placeat fuga possimus quo hic. Aperiam quidem consectetur quis commodi animi sint exercitationem.</p>
                    <div className="flex items-center">
                        <img src={reviewer} alt="" className="w-16 rounded-full" />
                        <div className="ml-5">
                            <h5 className="text-[#266bf9] font-bold text-lg">Smith John</h5>
                            <p>Client</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="italic text-xl my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio, aliquam delectus placeat fuga possimus quo hic. Aperiam quidem consectetur quis commodi animi sint exercitationem.</p>
                    <div className="flex items-center">
                        <img src={reviewer} alt="" className="w-16 rounded-full" />
                        <div className="ml-5">
                            <h5 className="text-[#266bf9] font-bold text-lg">Smith John</h5>
                            <p>Client</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="italic text-xl my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio, aliquam delectus placeat fuga possimus quo hic. Aperiam quidem consectetur quis commodi animi sint exercitationem.</p>
                    <div className="flex items-center">
                        <img src={reviewer} alt="" className="w-16 rounded-full" />
                        <div className="ml-5">
                            <h5 className="text-[#266bf9] font-bold text-lg">Smith John</h5>
                            <p>Client</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;