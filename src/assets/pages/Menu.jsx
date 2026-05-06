import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  {
    title: "Signature Chocolate Cake",
    price: "N4,500",
    description: "Rich, moist, and topped with chocolate curls.",
  },
  {
    title: "Butter Croissant",
    price: "N3,500",
    description: "Golden layers baked fresh every morning.",
  },
  {
    title: "Berry Pie",
    price: "N3,200",
    description: "Sweet strawberry filling wrapped in flaky pastry.",
  },
  {
    title: "Choc Chip Cookie",
    price: "N500",
    description: "Crispy edges and chewy chocolate centers.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Menu() {
  return (
    <motion.main
      className="min-h-screen bg-[#f8f4ec] "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.16, delayChildren: 0.12 } },
      }}
    >
      <section className="bg-[url('/public/breadcrum.jpg')] bg-cover bg-center bg-blend-overlay bg-[#000000d7] w-full h-100 flex justify-center items-center ">
        <h2 className="font-semibold text-3xl text-[#ffffff]">
          Home <span className="text-[#fffb19]">/Menu </span>
        </h2>
      </section>
      <motion.div
        className="max-w-300 mx-auto text-center mb-16 py-20 px-6"
        variants={cardVariants}
      >
        <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
          Our Menu
        </p>
        <h1 className="text-4xl font-bold text-[#1f1f1f] mt-4">
          Fresh Bakery Favorites
        </h1>
        <p className="text-[#555555] mt-4 text-lg max-w-2xl mx-auto">
          Explore our best-selling treats, made daily with love, butter, and
          fresh ingredients.
        </p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 max-w-300 mx-auto pb-20 px-6">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="rounded-4xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-[#2e5996]">
                {item.title}
              </h2>
              <span className="text-xl font-semibold text-[#1f1f1f]">
                {item.price}
              </span>
            </div>
            <p className="mt-4 text-[#555555] leading-7">{item.description}</p>
            <button className="mt-6 rounded-3xl bg-[#2e5996] px-6 py-3 text-white text-sm font-semibold transition hover:bg-[#244b85]">
              Order Now
            </button>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}

export default Menu;
