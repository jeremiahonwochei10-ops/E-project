import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pages = [
  {
    path: "/",
    label: "Home",
    description: "Discover our bakery story, menu, offers and testimonials.",
  },
  {
    path: "/about-us",
    label: "About Us",
    description: "Learn how Bakerz Bite started and what makes us special.",
  },
  {
    path: "/menu",
    label: "Menu",
    description: "Browse our cakes, pastries and signature bakery favorites.",
  },
  {
    path: "/merchandise",
    label: "Merchandise",
    description: "Shop curated bakery gifts and branded goods.",
  },
  {
    path: "/gallery",
    label: "Gallery",
    description: "See our creations, cake designs, and happy bakery moments.",
  },
  {
    path: "/contact-us",
    label: "Contact Us",
    description:
      "Find the best ways to reach Bakerz Bite and place your order.",
  },
  {
    path: "/feedback",
    label: "Feedback",
    description:
      "Share your experience and tell us how we can serve you better.",
  },
  {
    path: "/faqs",
    label: "FAQs",
    description:
      "Answers to the most common questions about ordering and pickup.",
  },
];

const itemMotion = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function SiteMap() {
  return (
    <motion.main
      className="min-h-screen bg-[#f9f6f0] py-20"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.14 } },
      }}
    >
      <div className="max-w-300 mx-auto px-6">
        <motion.div className="text-center mb-16" variants={itemMotion}>
          <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
            Site Map
          </p>
          <h1 className="text-4xl font-bold text-[#1f1f1f] mt-4">
            Find every page at a glance.
          </h1>
          <p className="text-[#555555] mt-4 text-lg max-w-2xl mx-auto">
            Navigate directly to the page you need, from our gallery and menu to
            order support and FAQs.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {pages.map((page, index) => (
            <motion.div
              key={page.path}
              className="rounded-4xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              variants={itemMotion}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to={page.path}
                className="text-2xl font-semibold text-[#2e5996] hover:text-[#1f1f1f] transition"
              >
                {page.label}
              </Link>
              <p className="mt-4 text-[#555555] leading-7">
                {page.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}

export default SiteMap;
