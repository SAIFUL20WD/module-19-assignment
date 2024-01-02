import blogImg from "../../../assets/images/blog.jpg";

const LatestBlog = () => {
    return (
        <section className="max-w-7xl mx-auto my-16">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold mb-5">Latest Blog</h2>
                <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
            <div className="grid grid-cols-2 ml-10">
                <div className="flex max-w-xl">
                    <div className="w-72">
                        <img src={blogImg} alt="" className="rounded-2xl" />
                    </div>
                    <div className="px-8 py-3">
                        <p className=""><i className="fa-regular fa-calendar-days text-[#266bf9] mr-2"></i>27 Jun 2024 <i className="fa-solid fa-user text-[#266bf9] ml-2 mr-2"></i>Wild Nick</p>
                        <h3 className="text-2xl font-bold text-black my-3">10 Quick Tips About <br /> Smart Products</h3>
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, esse?</p>
                        <button className="btn bg-neutral-600 rounded-xl text-white text-xl px-8">Read More</button>
                    </div>
                </div>

                <div className="flex max-w-xl">
                    <div className="w-72">
                        <img src={blogImg} alt="" className="rounded-2xl" />
                    </div>
                    <div className="px-8 py-3">
                        <p className=""><i className="fa-regular fa-calendar-days text-[#266bf9] mr-2"></i>27 Jun 2024 <i className="fa-solid fa-user text-[#266bf9] ml-2 mr-2"></i>Wild Nick</p>
                        <h3 className="text-2xl font-bold text-black my-3">10 Quick Tips About <br /> Smart Products</h3>
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, esse?</p>
                        <button className="btn bg-neutral-600 rounded-xl text-white text-xl px-8">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestBlog;