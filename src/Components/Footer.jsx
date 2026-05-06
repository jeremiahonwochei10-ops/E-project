import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";


function Footer() {
  return (
    <motion.footer
      className="bg-[#121212] text-[#e5e5e5] py-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-300 mx-auto px-6 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-6 space-y-3 text-sm text-[#c7c7c7]">
            <Link to={"/"} className="transition hover:text-white  ">
              <li>Home</li>
            </Link>
            <Link to={"/menu"} className="transition hover:text-white  ">
              <li>Menu</li>
            </Link>
            <Link to={"/about-us"} className="transition hover:text-white  ">
              <li>About Us</li>
            </Link>
            <Link to={"/contact-us"} className="transition hover:text-white  ">
              <li>Contact Us</li>
            </Link>

            <Link to={"/feedback"} className="transition hover:text-white  ">
              <li>FeedBack</li>
            </Link>
            <Link to={"/faqs"} className="transition hover:text-white  ">
              <li>FAQs</li>
            </Link>
            <Link to={"/sitemap"} className="transition hover:text-white  ">
              <li>Site Map</li>
            </Link>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Personal Details</h3>
          <div className="mt-6 space-y-4 text-sm text-[#c7c7c7]">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#fffb19]" />
              12 Baker Street, Lekki Phase 1, Lagos
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#fffb19]" />
              hello@bakerzbiteng.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-[#fffb19]" />
              +234 800 000 0000
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">Bakerz Bite</h3>
            <p className="mt-4 text-sm text-[#c7c7c7] leading-7">
              Freshly baked treats and custom cakes made with love in Lekki.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4 text-[#c7c7c7]">
            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2e5996] mt-10 pt-6 max-w-300 mx-auto px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-[#9c9c9c]">
        <p>© 2025 Bakerz Bite. All rights reserved.</p>
        <p>Designed for delicious moments.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
