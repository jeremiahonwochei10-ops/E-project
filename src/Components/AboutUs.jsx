import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const sectionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const textFade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function AboutUs() {
  return (
    <motion.section
      className="max-w-300 mx-auto flex flex-col lg:flex-row items-center gap-20 p-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionContainer}
    >
      <motion.div className="w-full" variants={textFade}>
        <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
          Bakerz Bite Story
        </p>
        <h2 className="font-semibold text-3xl text-[#000000] mt-3">
          Our Story
        </h2>
        <hr className="border-2 border-[#2e5996] w-20 mt-4 mb-10" />
        <p className="mb-2 text-[#555555] text-lg leading-7">
          Bakerz Bite was born out of a simple belief — that great baking should
          be accessible to everyone. What started as a small home kitchen has
          grown into one of Lagos' most-loved bakeries, serving hundreds of
          smiling customers every single day.
        </p>
        <p className="text-[#555555] text-lg leading-7">
          We are passionate about quality. Every item on our menu is handcrafted
          using only the finest ingredients — real butter, fresh cream,
          unbleached flour, and natural flavours. No artificial preservatives.
          No compromise.
        </p>
        <p className="mb-2 text-[#555555] text-lg leading-7">
          Whether you're celebrating a birthday, treating yourself after a long
          day, or just passing through — there is always something warm and
          delicious waiting for you at Bakerz Bite.
        </p>
        <Link>
          <button className="text-white bg-[#2e5996] rounded-xl p-1 text-[15px] px-9 font-semibold mt-5 flex items-center gap-2 transition duration-300 cursor-pointer hover:bg-[#1a3356]">
            Learn More<i className="fa-solid fa-arrow-right font-light"></i>
          </button>
        </Link>
      </motion.div>
      <motion.div
        className="w-full bg-[url('/public/baker.jpg')] bg-cover bg-center rounded-t-4xl rounded-bl-4xl h-100 border-5 border-white shadow-2xl"
        variants={textFade}
      />
    </motion.section>
  );
}

export default AboutUs;
