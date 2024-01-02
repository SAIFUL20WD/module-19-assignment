import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";
import headset from "../assets/images/headset.png";

const CartPage = () => {
    const data = [1, 2, 3, 4];

    return (
        <>
            <Navbar />
            <section className="bg-slate-300 p-32">
                <div className="text-center text-black">
                    <h2 className="text-6xl mb-5">Cart</h2>
                    <h3 className="uppercase text-xl">Home <span className="text-[#266bf9]">/<span>/</span> Cart</span></h3>
                </div>
            </section>
            <section className="max-w-7xl mx-auto my-20">
                <h3 className="text-2xl font-semibold">Your cart items</h3>
                <div className="overflow-x-auto my-5">
                    <table className="table border border-base-300 text-center">
                        <thead className="bg-base-300 text-black text-[16px]">
                            <tr className="[&>th]:font-semibold [&>th]:p-6">
                                <th>IMAGE</th>
                                <th>PRODUCT NAME</th>
                                <th>UNIT PRICE</th>
                                <th>QTY</th>
                                <th>SUBTOTAL</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="text-[18px]">
                            {
                                data.map(item => {
                                    return (
                                        <tr key={item}>
                                            <td><img src={headset} alt="" className="w-24 ml-5 my-8" /></td>
                                            <td>Bluetooth Headphone</td>
                                            <td>$50.00</td>
                                            <td><span className="border border-slate-300 px-1 py-2 cursor-pointer">-</span><input type="number" className="border border-slate-300 px-5 py-3 max-w-20" defaultValue="1" /><span className="border border-slate-300 px-1 py-2 cursor-pointer">+</span></td>
                                            <td>$100.00</td>
                                            <td><i className="fa-solid fa-pencil mr-5 cursor-pointer"></i><i className="fa-solid fa-xmark cursor-pointer"></i></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between">
                    <button className="btn btn-wide uppercase">Continue Shopping</button>
                    <button className="btn btn-wide uppercase">Update Shopping Cart</button>
                    <button className="btn btn-wide bg-[#266bf9] uppercase text-white">Clear Shopping Cart</button>
                </div>
                <div className="grid grid-cols-3 my-20 gap-10">
                    <div className="bg-[#ebebeb] p-10 rounded-lg">
                        <h3 className="text-xl font-semibold mb-5">Estimate Shipping And Tax</h3>
                        <p className="leading-loose">Enter your destination to get a shipping estimate.</p>
                        <p className="my-3">* Country</p>
                        <select className="select select-bordered w-full max-w-xs">
                            <option selected>Bangladesh</option>
                            <option>India</option>
                            <option>Nepal</option>
                            <option>Butan</option>
                        </select>
                        <p className="my-3">* Region / State</p>
                        <select className="select select-bordered w-full max-w-xs">
                            <option selected>Bangladesh</option>
                            <option>India</option>
                            <option>Nepal</option>
                            <option>Butan</option>
                        </select>
                        <p className="my-3">* Zip / Postal Code</p>
                        <input type="text" className="input input-bordered w-full max-w-xs" />
                        <button className="btn bg-[#266bf9] text-white uppercase px-10 mt-5">Get a quote</button>
                    </div>
                    <div className="bg-[#ebebeb] p-10 rounded-lg max-h-80">
                        <h3 className="text-xl font-semibold mb-5">Use Coupon Code</h3>
                        <p className="my-3 leading-loose">Enter your coupon code if you have one.</p>
                        <input type="text" className="input input-bordered w-full max-w-xs" />
                        <button className="btn bg-[#266bf9] text-white uppercase px-10 mt-5">Apply Coupon</button>
                    </div>
                    <div className="bg-[#ebebeb] p-10 rounded-lg max-h-[500px]">
                        <h3 className="text-xl font-semibold mb-10">Cart Total</h3>
                        <div className="flex justify-between my-3"><p>Total products</p> <p className="text-xl font-semibold">$260.00</p></div>
                        <p className="mt-10 mb-5">Total Shippping</p>
                        <div>
                            <input type="checkbox" name="standard" className="mr-3 mb-5"/>
                            <label htmlFor="standard">Standard</label>
                            <br />
                            <input type="checkbox" name="express" className="mr-3"/>
                            <label htmlFor="express">Express</label>
                        </div>
                        <div className="flex justify-between mt-16 text-xl font-semibold text-[#366bf9]"><p>Grand Total</p> <p>$260.00</p></div>
                        <button className="btn w-full bg-[#266bf9] text-white uppercase px-10 mt-5">Proceed to Checkout</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CartPage;