import React from "react";
import { motion } from "framer-motion";
import butter from "../assets/pages/image/butter.png";
import bakedDaily from "../assets/pages/image/baked-daily.png";
import basket from "../assets/pages/image/basket.png";
import leaf from "../assets/pages/image/leaf.png";

const sectionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const cardFade = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function WhyChooseUs() {
  return (
    <motion.section
      className="mt-10 max-w-300 mx-auto p-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionContainer}
    >
      <motion.div
        className="max-w-125 mx-auto flex flex-col items-center justify-center text-center"
        variants={itemFade}
      >
        <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
          Why Choose Us
        </p>
        <h2 className="font-semibold text-3xl text-[#000000] text-center mt-3">
          Why Bakerz Bite?
        </h2>
        <hr className="border-2 border-[#2e5996] w-35 mt-4 mb-2" />
        <p className="text-lg text-[#555555] text-center mt-2">
          We don't cut corners — and we definitely don't cut butter.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-5 mt-10">
        <motion.div
          className="rounded-2xl bg-[#eeeeee] p-5 w-full"
          variants={cardFade}
        >
          <img src={butter} alt="" className="w-15 mx-auto" />
          <p className="mt-5">
            Every recipe starts with 100% real butter. No substitutes, no
            shortcuts.
          </p>
        </motion.div>
        <motion.div
          className="rounded-2xl bg-[#eeeeee] p-5 w-full"
          variants={cardFade}
        >
          <img src={bakedDaily} alt="" className="w-15 mx-auto" />
          <p className="mt-5">
            Every recipe starts with 100% real butter. No substitutes, no
            shortcuts.
          </p>
        </motion.div>
        <motion.div
          className="rounded-2xl bg-[#eeeeee] p-5 w-full"
          variants={cardFade}
        >
          <img src={basket} alt="" className="w-15 mx-auto" />
          <p className="mt-5">
            Our menu is always growing. From classic favourites to seasonal
            surprises.
          </p>
        </motion.div>
        <motion.div
          className="rounded-2xl bg-[#eeeeee] p-5 w-full"
          variants={cardFade}
        >
          <img src={leaf} alt="" className="w-15 mx-auto" />
          <p className="mt-5">
            We use unbleached flour, natural flavours, and zero artificial
            preservatives.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default WhyChooseUs;
