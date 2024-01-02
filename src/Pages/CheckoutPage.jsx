import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";

const CheckoutPage = () => {
    return (
        <>
            <Navbar />
            <section className="bg-slate-300 p-32">
                <div className="text-center text-black">
                    <h2 className="text-6xl mb-5">Checkout</h2>
                    <h3 className="uppercase text-xl">Home <span className="text-[#266bf9]">/<span>/</span> Checkout</span></h3>
                </div>
            </section>
            <section className="max-w-7xl mx-auto">
                <div className="grid grid-cols-3 gap-10">
                    <div className="col-span-2 p-10 my-16 bg-slate-50 rounded-lg">
                        <h3 className="text-2xl font-semibold">Billing Details</h3>
                        <div className="flex my-5">
                            <div className="mr-8">
                                <p className="my-3">First Name</p>
                                <input type="text" className="input input-bordered w-96 max-w-xs" />
                            </div>
                            <div>
                                <p className="my-3">Last Name</p>
                                <input type="text" className="input input-bordered w-96 max-w-xs" />
                            </div>
                        </div>
                        <div className="my-8">
                            <p className="my-3">Company Name</p>
                            <input type="text" className="input input-bordered w-[675px]" />
                        </div>
                        <div className="my-8">
                            <p className="my-3">Country</p>
                            <select className="select select-bordered w-[675px]">
                                <option selected>Select a country</option>
                                <option>Bangladesh</option>
                                <option>India</option>
                                <option>Nepal</option>
                                <option>Butan</option>
                            </select>
                        </div>
                        <div className="my-8">
                            <p className="my-3">Street Address</p>
                            <input type="text" className="input input-bordered w-[675px] mb-3" placeholder="House number or street name" />
                            <input type="text" className="input input-bordered w-[675px]" placeholder="Apartment, suit, unit etc." />
                        </div>
                        <div className="mt-8">
                            <p className="my-3">Town / City</p>
                            <input type="text" className="input input-bordered w-[675px] mb-3" />
                        </div>
                        <div className="flex my-5">
                            <div className="mr-8">
                                <p className="my-3">State / County</p>
                                <input type="text" className="input input-bordered w-96 max-w-xs" />
                            </div>
                            <div>
                                <p className="my-3">Postcode / ZIP</p>
                                <input type="text" className="input input-bordered w-96 max-w-xs" />
                            </div>
                        </div>
                        <div className="flex my-5">
                            <div className="mr-8">
                                <p className="my-3">Phone</p>
                                <input type="text" className="input input-bordered w-96 max-w-xs" />
                            </div>
                            <div>
                                <p className="my-3">Email Address</p>
                                <input type="text" className="input input-bordered w-96 max-w-xs" />
                            </div>
                        </div>
                        <div className="flex my-5">
                            <input type="checkbox" className="mr-2" />
                            <p>Create an account?</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold my-3">Additional Information</p>
                            <p>Order Notes</p>
                            <textarea placeholder="Notes about your order, e.g. special notes for delivery. " className="textarea textarea-bordered textarea-lg w-[675px] my-3 h-40" ></textarea>
                        </div>
                        <div className="flex my-5">
                            <input type="checkbox" className="mr-2" />
                            <p>Ship to a different address?</p>
                        </div>
                    </div>

                    <div className="my-16">
                        <h3 className="text-2xl font-semibold my-8">Your Order</h3>
                        <div className="bg-[#ebebeb] p-10 rounded-lg">
                            <div className="flex justify-between font-semibold my-8"><p>Product</p> <p>Total</p></div>
                            <hr />
                            <div className="flex justify-between my-5"><p>Product Name X 1</p> <p>$100</p></div>
                            <div className="flex justify-between my-5"><p>Product Name X 1</p> <p>$100</p></div>
                            <hr />
                            <div className="flex justify-between my-5"><p className="font-semibold">Shipping</p> <p>Free Shipping</p></div>
                            <hr />
                            <div className="flex justify-between font-semibold my-5"><p>Total</p> <p className="text-[#266bf9]">$200</p></div>
                            <hr />
                            <div className="flex justify-between font-semibold my-5"><p>Direct bank transfer</p> <p></p></div>
                            <div className="flex justify-between my-5 text-xs"><p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p></div>
                            <div className="flex justify-between font-semibold my-5"><p>Check payments</p> <p></p></div>
                            <div className="flex justify-between font-semibold my-5"><p>Cash on delivery</p> <p></p></div>
                        </div>
                        <button className="btn w-full bg-[#266bf9] text-white uppercase px-10 mt-5">Place Order</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CheckoutPage;