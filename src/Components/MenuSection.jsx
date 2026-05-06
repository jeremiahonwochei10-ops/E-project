import React from "react";
import { motion } from "framer-motion";
import ChocCake from "../assets/pages/image/choc-cake2.jpg";
import croissant from "../assets/pages/image/croissant.jpg";
import chocChip from "../assets/pages/image/choc-chip.jpg";
import berryPie from "../assets/pages/image/berry-pie.jpg";
import bakeryTool from "../assets/pages/image/bakery-tool2.png";
import { Link } from "react-router-dom";
const sectionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const sectionItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardItem = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function MenuSection() {
  return (
    <motion.main
      className="bg-[#efefef] p-10 pt-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionContainer}
    >
      <motion.div
        className="max-w-[125 mx-auto flex flex-col items-center justify-center text-center"
        variants={sectionItem}
      >
        <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
          Our Menu
        </p>
        <h2 className="font-semibold text-3xl mt-2">
          A Taste of What we Offer
        </h2>
        <hr className="border-2 border-[#2e5996] w-40 mt-4 mb-2" />
        <p className="text-lg text-[#383838] mt-3 max-w-170">
          From classic cakes to warm pastries — there's something for every
          craving.
        </p>
        <Link to={"/menu"}>
          <button className="text-white bg-[#2e5996] rounded-xl p-1 text-[15px] px-9 font-semibold mt-5 flex items-center gap-2 hover:bg-[#1b375e] transition duration-300 cursor-pointer">
            View Full Menu{" "}
            <i className="fa-solid fa-arrow-right font-light"></i>
          </button>
        </Link>
      </motion.div>

      <section className="flex max-w-225 mx-auto items-center gap-5 mt-10 flex-col lg:flex-row">
        <motion.div
          className="rounded-lg bg-[#ffffff] w-full p-2 text-center"
          variants={cardItem}
        >
          <img
            src={ChocCake}
            alt=""
            className="rounded-lg w-fit h-fit object-cover mx-auto"
          />
          <p className="font-semibold text-[#2e5996] mt-4">Choc Cake</p>
          <p>N4,500</p>
        </motion.div>

        <motion.div
          className="rounded-lg bg-[#ffffff] w-full p-2 text-center"
          variants={cardItem}
        >
          <img
            src={croissant}
            alt=""
            className="rounded-lg w-fit h-fit object-cover mx-auto"
          />
          <p className="font-semibold text-[#2e5996] mt-4">Croissant</p>
          <p>N3,500</p>
        </motion.div>

        <motion.div
          className="rounded-lg bg-[#ffffff] w-full p-2 text-center"
          variants={cardItem}
        >
          <img
            src={chocChip}
            alt=""
            className="rounded-lg w-fit h-fit object-cover mx-auto"
          />
          <p className="font-semibold text-[#2e5996] mt-4">Choc chip</p>
          <p>N500</p>
        </motion.div>

        <motion.div
          className="rounded-lg bg-[#ffffff] w-full p-2 text-center"
          variants={cardItem}
        >
          <img
            src={berryPie}
            alt=""
            className="rounded-lg w-fit h-fit object-cover mx-auto"
          />
          <p className="font-semibold text-[#2e5996] mt-4">Berry pie</p>
          <p>N3,200</p>
        </motion.div>
      </section>
      <img
        src={bakeryTool}
        alt=""
        className="absolute top-0 -left-20 w-80 rotate-45 opacity-20"
      />
    </motion.main>
  );
}

export default MenuSection;
