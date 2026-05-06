import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Merchandise from "./pages/Merchandise";
import Gallery from "./pages/Gallery";
import FeedBack from "./pages/FeedBack";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import SiteMap from "./pages/SiteMap";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
