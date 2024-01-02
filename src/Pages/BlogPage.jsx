import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";
import blogImg from "../assets/images/blog.jpg";

const BlogPage = () => {
    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <Navbar />
            <section className="bg-slate-300 p-32">
                <div className="text-center text-black">
                    <h2 className="text-6xl mb-5">Blog</h2>
                    <h3 className="uppercase text-xl">Home <span className="text-[#266bf9]">/<span>/</span> Blog</span></h3>
                </div>
            </section>
            <section className="max-w-3xl mx-auto my-20">
                {
                    data.map(item => {
                        return (
                            <div className="flex my-5" key={item}>
                                <div>
                                    <img src={blogImg} alt="" className="rounded-2xl" />
                                </div>
                                <div className="px-8 py-3">
                                    <p className=""><i className="fa-regular fa-calendar-days text-[#266bf9] mr-2"></i>27 Jun 2024 <i className="fa-solid fa-user text-[#266bf9] ml-2 mr-2"></i>Wild Nick</p>
                                    <h3 className="text-2xl font-bold text-black my-3">10 Quick Tips About <br /> Smart Products</h3>
                                    <p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, quis ea fugit accusantium autem ratione aut recusandae non omnis excepturi eligendi enim provident quaerat sint est, harum odio eos voluptatum!</p>
                                    <button className="btn bg-neutral-600 rounded-xl text-white text-xl px-8">Read More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            <Footer />
        </>
    );
};

export default BlogPage;