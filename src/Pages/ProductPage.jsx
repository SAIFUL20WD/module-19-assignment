import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";
import smartphone from "../assets/images/Apple-IPhone.png";

const ProductPage = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <>
            <Navbar />
            <section className="bg-slate-300 p-32">
                <div className="text-center text-black">
                    <h2 className="text-6xl mb-5">Product Page</h2>
                    <h3 className="uppercase text-xl">Home <span className="text-[#266bf9]">/<span>/</span> Shop</span></h3>
                </div>
            </section>
            <section className="max-w-7xl mx-auto">
                <div className="flex justify-between my-10">
                    <p className="text-slate-500 border border-slate-300 px-5 py-3 rounded-md ml-3"><span className="text-[#266bf9]">12</span> Product Found of <span className="text-[#266bf9]">30</span></p>
                    <select className="select select-bordered w-64 max-w-xs text-lg mr-6">
                        <option selected>Sort By: Default</option>
                        <option>Name, A to Z</option>
                        <option>Name, Z to A</option>
                        <option>Price, Low to High</option>
                        <option>Price, High to Low</option>
                        <option>Sort By New</option>
                        <option>Sort By Old</option>
                    </select>
                </div>
                <div className="grid grid-cols-4">
                    {
                        data.map(item => {
                            return (
                                <div key={item} className="card w-72 bg-base-100 border-slate-300 border m-3 hover:scale-110 duration-300">
                                    <figure><img src={smartphone} alt="Shoes" className="py-5" /></figure>
                                    <div className="card-body text-center">
                                        <p>Accessories</p>
                                        <h2 className="text-lg font-bold text-black">Modern Smartphone</h2>
                                        <p>$1200</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="join flex justify-end mx-5 my-10">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="<" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" checked />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label=">" />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductPage;