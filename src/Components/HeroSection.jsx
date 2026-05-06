import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const heroText = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const heroButton = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function HeroSection() {
  return (
    <section className='bg-[url("/public/bg-image.jpg")] pt-30 bg-cover bg-center w-full h-lvh bg-blend-overlay bg-[#000000c9]'>
      <section className="max-w-300 mx-auto">
        <div className="ml-10 mt-20 max-w-180">
          <motion.h1
            className="font-bold text-white text-6xl max-w-125 mt-3"
            variants={heroText}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            Where <span className="text-[#fffb19]">Smiles Are Served</span>{" "}
            Daily
          </motion.h1>

          <motion.p
            className="text-white max-w-125 mt-5 text-[15px]"
            variants={heroText}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          >
            Handcrafted with love, baked fresh every morning, from celebration
            cakes to buttery pastries — every bite tells a story.
          </motion.p>

          <Link to={"/menu"}>
            <motion.button
              className="text-white bg-[#2e5996] rounded-xl p-1 text-[15px] px-9 font-semibold mt-5 flex items-center gap-2 hover:bg-[#172d4f] transition duration-300 cursor-pointer"
              variants={heroButton}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
            >
              Browse Menu <i className="fa-solid fa-arrow-right font-light"></i>
            </motion.button>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
