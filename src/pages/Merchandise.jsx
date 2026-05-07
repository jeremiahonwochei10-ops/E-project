import React from "react";
import { motion } from "framer-motion";
import mug from "../assets/image/mug.jpg";
import apron from "../assets/image/apron.jpg";
import gift from "../assets/image/giftbox.jpg";

const merchItems = [
  {
    image: mug,
    title: "Bakerz Bite Mug",
    price: "$6",
    description: "Enjoy your morning drink in branded bakery style.",
  },
  {
    image: apron,
    title: "Signature Apron",
    price: "$15",
    description: "Perfect for home bakers who love a polished kitchen look.",
  },
  {
    image: gift,
    title: "Gift Box",
    price: "$20",
    description: "A curated selection of sweets for special celebrations.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Merchandise() {
  return (
    <motion.main
      className="min-h-screen bg-[#fff5ec] "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.16, delayChildren: 0.12 } },
      }}
    >
      <section className="bg-[url('/public/breadcrum.jpg')] bg-cover bg-center bg-blend-overlay bg-[#000000d7] w-full h-100 flex justify-center items-center ">
        <h2 className="font-semibold text-3xl text-[#ffffff]">
          Home <span className="text-[#fffb19]">/Merchandise </span>
        </h2>
      </section>
      <motion.div
        className="max-w-300 mx-auto text-center mb-16 py-20 px-6"
        variants={itemVariants}
      >
        <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
          Shop Bakery Goods
        </p>
        <h1 className="text-4xl font-bold text-[#1f1f1f] mt-4">Merchandise</h1>
        <p className="text-[#555555] mt-4 text-lg max-w-2xl mx-auto">
          Browse bakery-branded gifts and kitchen essentials made for fans of
          fresh flavor.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-300 mx-auto pb-20 px-6">
        {merchItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="rounded-4xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            variants={itemVariants}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <h2 className="text-2xl font-semibold text-[#2e5996]">
              {item.title}
            </h2>
            <p className="text-[#555555] mt-4 leading-7">{item.description}</p>
            <div className="mt-8 flex items-center justify-between gap-4">
              <span className="text-lg font-semibold text-[#1f1f1f]">
                {item.price}
              </span>
              <button className="rounded-3xl bg-[#2e5996] px-5 py-3 text-white text-sm font-semibold transition hover:bg-[#244b85]">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}

export default Merchandise;
