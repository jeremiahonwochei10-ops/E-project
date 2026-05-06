import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./assets/pages/Home";
import AboutUsPage from "./assets/pages/AboutUs";
import Menu from "./assets/pages/Menu";
import Merchandise from "./assets/pages/Merchandise";
import Gallery from "./assets/pages/Gallery";
import FeedBack from "./assets/pages/FeedBack";
import FAQs from "./assets/pages/FAQs";
import ContactUs from "./assets/pages/ContactUs";
import SiteMap from "./assets/pages/SiteMap";
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
