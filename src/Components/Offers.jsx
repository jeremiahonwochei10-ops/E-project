import React from "react";
import { motion } from "framer-motion";

const sectionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.15 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const cardFade = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function Offers() {
  return (
    <motion.section
      className="bg-[#fffb1917]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionContainer}
    >
      <section className="max-w-300 mx-auto p-10">
        <motion.div
          className="max-w-125 mx-auto flex flex-col items-center justify-center text-center"
          variants={itemFade}
        >
          <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
            Weekly Specials
          </p>
          <h2 className="text-3xl font-semibold text-[#000000] mb-2 text-center mt-3">
            This Week's Special Offers
          </h2>
          <hr className="border-2 border-[#2e5996] w-40 mt-1 mb-2" />
          <p className="text-lg text-[#555555] text-center">
            Don't miss out - these deals are available in-store for a limited
            time only.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-5 mt-10">
          <motion.div
            className="rounded-2xl bg-transparent p-5 w-full border border-[#2e5996]"
            variants={cardFade}
          >
            <h3 className="text-2xl font-medium text-[#2e5996]">
              20% Off All Cakes
            </h3>
            <p className="text-lg text-[#555555] mt-2">
              Celebrate anything this week! Get 20% off on all our signature
              cakes. Valid Monday-Friday.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-transparent p-5 w-full border border-[#2e5996]"
            variants={cardFade}
          >
            <h3 className="text-2xl font-medium text-[#2e5996]">
              Buy One Get One Free — Pastries
            </h3>
            <p className="text-lg text-[#555555] mt-2">
              Purchase any pastry and get a second one absolutely free. Today
              only, while stocks last.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-transparent p-5 w-full border border-[#2e5996]"
            variants={cardFade}
          >
            <h3 className="text-2xl font-medium text-[#2e5996]">
              Free Drink With Orders Over ₦10,000
            </h3>
            <p className="text-lg text-[#555555] mt-2">
              Spend ₦10,000 or more in a single visit and enjoy a complimentary
              beverage on us.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.section>
  );
}

export default Offers;
