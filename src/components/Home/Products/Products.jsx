import smartphone from "../../../assets/images/Apple-IPhone.png";

const Products = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <section className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold mb-5">New Products</h2>
                <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
            <div className="grid grid-cols-4">
            {
                data.map(item => {
                    return (
                        <div key={item} className="card w-72 bg-base-100 border-slate-300 border m-3 hover:scale-110 duration-300">
                            <figure><img src={smartphone} alt="Shoes" className="py-5"/></figure>
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
        </section>
    );
};

export default Products;