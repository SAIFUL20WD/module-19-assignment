import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import FaqPage from "./Pages/FaqPAge";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ThankYouPage from "./Pages/ThankYouPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import AccountRegisterPage from "./Pages/AccountRegisterPage";
import BlogPage from "./Pages/BlogPage";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/register" element={<AccountRegisterPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;