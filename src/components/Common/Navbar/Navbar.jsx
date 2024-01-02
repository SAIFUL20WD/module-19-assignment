import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="bg-[#242424] text-white relative">
            <div className="flex justify-between max-w-7xl mx-auto px-5 py-2 text-[14px] text-[#cfd4df]">
                <div>
                    <p className="">World Wide Completely Free Returns and Shipping</p>
                </div>
                <div>
                    <ul className="flex">
                        <li className="px-3 border-r-[1px] border-r-slate-500 hover:text-[#266bf9]"><a href="tel:0123456789"><i className="fa fa-phone text-[#266bf9] mx-2"></i> +012 3456 789</a></li>
                        <li className="px-3 border-r-[1px] border-r-slate-500 hover:text-[#266bf9]"><a href="mailto:demo@example.com"><i className="fa fa-envelope text-[#266bf9] mx-2"></i> demo@example.com</a></li>
                        <li className="px-3 border-r-[1px] border-r-slate-500 hover:text-[#266bf9]"><a href=""><i className="fa fa-user text-[#266bf9] mx-2"></i> Account</a></li>
                    </ul>
                </div>
            </div>
            <hr className="text-slate-500" />
            <div className="max-w-7xl mx-auto flex justify-between py-10 px-5">
                <h3 className="text-4xl"><a href="/"><span className="text-[#266bf9] font-semibold">H</span>mart</a></h3>
                <form action="#">
                    <input type="text" placeholder="Search" className="w-96 h-11 px-5 rounded-s-md outline-none text-black" />
                    <button className="bg-[#266bf9] h-11 px-8 rounded-se-md rounded-e-md"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div className="text-2xl ">
                    <a href="#"><i className="fa-regular fa-heart mx-5"></i></a>
                    <a href="#"><i className="fa-solid fa-bag-shopping relative"><div className="absolute left-2 bottom-3 badge badge-primary badge-md text-xs">01</div></i></a>
                </div>
            </div>

            <nav className="max-w-7xl mx-auto bg-[#266bf9] p-4">
                <ul className="flex justify-center [&>li]:mx-7 uppercase">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="bg-[#266bf9] border-none">Pages <i className="fa-solid fa-angle-down"></i></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white w-80 text-black">
                                <li><Link to="/register">Account Register Page</Link></li>
                                <li><Link to="/cart">Cart Page</Link></li>
                                <li><Link to="/checkout">Checkout Page</Link></li>
                                <li><Link to="/faq">FAQ Page</Link></li>
                                <li><Link to="/thankyou">Thank You Page</Link></li>
                                <li><Link to="/404">404 Page</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to="/products">Shop</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Navbar;