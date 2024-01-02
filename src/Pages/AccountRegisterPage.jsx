import { useState } from "react";
import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";

const AccountRegisterPage = () => {
    const [active, setActive] = useState(false);
    return (
        <>
            <Navbar />
            <section className="bg-slate-300 p-32">
                <div className="text-center text-black">
                    <h2 className="text-6xl mb-5">Register</h2>
                    <h3 className="uppercase text-xl">Home <span className="text-[#266bf9]">/<span>/</span> Register / Login</span></h3>
                </div>
            </section>
            <section className="max-w-2xl mx-auto text-center my-10">
                <h2 className="text-2xl font-medium cursor-pointer">
                    <span onClick={() => setActive(true)} className={active ? "text-[#266bf9]" : ""}>Login</span> |
                    <span onClick={() => setActive(false)} className={active ? "" : "text-[#266bf9]"}> Register</span>
                </h2>
                {
                    active ?
                        <div className="shadow-lg px-10 py-20 my-10">
                            <div className="mx-10"><input type="text" placeholder="Username" className="input input-bordered input-primary w-full my-5" /></div>
                            <div className="mx-10"><input type="text" placeholder="Password" className="input input-bordered input-primary w-full my-3" /></div>
                            <div className="flex justify-between my-5 mx-10">
                                <div className="flex">
                                    <input type="checkbox" className="mr-2" />
                                    <p>Remember Me</p>
                                </div>
                                <div>
                                    <p className="cursor-pointer hover:text-[#266bf9]">Forget Password?</p>
                                </div>
                            </div>
                            <div className="flex justify-start mx-10">
                                <button className="cursor-pointer px-8 py-1 bg-slate-200 hover:bg-[#266bf9] transition-colors duration-200 hover:text-white">Login</button>
                            </div>
                        </div>
                        :
                        <div className="shadow-lg px-10 py-20 my-10">
                            <div className="mx-10"><input type="text" placeholder="Username" className="input input-bordered input-primary w-full my-5" /></div>
                            <div className="mx-10"><input type="text" placeholder="Email" className="input input-bordered input-primary w-full my-3" /></div>
                            <div className="mx-10"><input type="text" placeholder="Password" className="input input-bordered input-primary w-full my-3" /></div>
                            <div className="flex justify-start mx-10 my-5">
                                <button className="cursor-pointer px-8 py-3 bg-slate-200 hover:bg-[#266bf9] transition-colors duration-200 hover:text-white">Register</button>
                            </div>
                        </div>
                }
            </section>
            <Footer />
        </>
    );
};

export default AccountRegisterPage;