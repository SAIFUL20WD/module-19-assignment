

const Footer = () => {
    return (
        <>
            <footer className="bg-[#f2f8fd]">
                <div className="max-w-7xl mx-auto grid grid-cols-4">
                    <div className="my-20 ml-8">
                        <h3 className="text-4xl mb-3"><a href="/"><span className="text-[#266bf9] font-semibold">H</span>mart</a></h3>
                        <p className="leading-loose mb-8">Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
                        <div className="cursor-pointer">
                            <span className="bg-[#5d5d5d] text-white px-3 py-2 rounded mr-2 hover:bg-[#266bf9]"><i className="fa-brands fa-facebook-f"></i></span>
                            <span className="bg-[#5d5d5d] text-white px-3 py-2 rounded mr-2 hover:bg-[#266bf9]"><i className="fa-brands fa-tumblr"></i></span>
                            <span className="bg-[#5d5d5d] text-white px-3 py-2 rounded mr-2 hover:bg-[#266bf9]"><i className="fa-brands fa-twitter"></i></span>
                            <span className="bg-[#5d5d5d] text-white px-3 py-2 rounded mr-2 hover:bg-[#266bf9]"><i className="fa-brands fa-instagram"></i></span>
                        </div>
                    </div>
                    <div className="my-20 text-black mx-8">
                        <h3 className="text-2xl mb-3">Services</h3>
                        <ul className="leading-loose">
                            <li className="hover:text-[#266bf9] hover:translate-x-2 duration-200">My Account</li>
                            <li className="hover:text-[#266bf9] hover:translate-x-2 duration-200">Contact</li>
                            <li className="hover:text-[#266bf9] hover:translate-x-2 duration-200">Shopping Cart</li>
                            <li className="hover:text-[#266bf9] hover:translate-x-2 duration-200">Shop</li>
                            <li className="hover:text-[#266bf9] hover:translate-x-2 duration-200">Services Login</li>
                        </ul>
                    </div>
                    <div className="my-20 text-black mx-8">
                        <h3 className="text-2xl mb-3">My Account</h3>
                        <ul className="leading-loose">
                            <li className="hover:text-[#266bf9] hover:translate-x-2 duration-200">My Account</li>
                            <li className="hover:text-[#266bf9] hover:translate-x-2 duration-200">Contact</li>
                            <li className="hover:text-[#266bf9] hover:translate-x-2 duration-200">Shopping Cart</li>
                            <li className="hover:text-[#266bf9] hover:translate-x-2 duration-200">Shop</li>
                            <li className="hover:text-[#266bf9] hover:translate-x-2 duration-200">Services Login</li>
                        </ul>
                    </div>
                    <div className="my-20 text-black ml-8">
                        <h3 className="text-2xl mb-3">Contact Info</h3>
                        <ul className="leading-loose">
                            <li>Address: Your Address Goes Here.</li>
                            <li>Phone/Fax: 0123456789</li>
                            <li>Email: demo@example.com</li>
                            <li>demo@example.com</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <footer className="bg-[#e2f2ff]">
                <div className="max-w-7xl mx-auto py-6">
                    <p className="mx-8">© 2024 Hmart Made With <i className="fa-solid fa-heart text-[#266bf9]"></i> By Code Blue</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;