import React from "react";
import { motion } from "framer-motion";

const sectionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const cardFade = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function Testimonials() {
  return (
    <motion.section
      className='bg-[url("/public/bg-2.png")] bg-cover bg-center w-full p-10'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionContainer}
    >
      <section className="max-w-300 mx-auto">
        <motion.div className="text-center" variants={itemFade}>
          <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
            Customer Love
          </p>
          <h2 className="text-3xl font-semibold text-[#ffffff] mb-2 mt-3">
            What Our Customers Are Saying
          </h2>
         
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-5 mt-10">
          <motion.div
            className="bg-transparent backdrop-blur-[2px] rounded-2xl border-2 border-t-[#2e5996da] border-l-[#2e5996da] border-b-[#2e599657] border-r-[#2e599657] text-center w-full p-5"
            variants={cardFade}
          >
            <p className="text-xl text-[#fffb19]">★★★★★</p>
            <p className="text-white text-[15px] mt-1">
              "I come here every Saturday morning for the croissants. Honestly
              the best I've had outside of France."
            </p>
            <h3 className="font-semibold mt-2 text-xl text-[#fffb19]">
              Tunde Babatude
            </h3>
          </motion.div>
          <motion.div
            className="bg-transparent backdrop-blur-[2px] rounded-2xl border-2 border-t-[#2e5996da] border-l-[#2e5996da] border-b-[#2e599657] border-r-[#2e599657] text-center w-full p-5"
            variants={cardFade}
          >
            <p className="text-xl text-[#fffb19]">★★★★★</p>
            <p className="text-white text-[15px] mt-1">
              "Bakerz Bite made my daughter's birthday cake and it was
              absolutely stunning. Tasted even better than it looked!"
            </p>
            <h3 className="font-semibold mt-2 text-xl text-[#fffb19]">
              Amara Okafor
            </h3>
          </motion.div>
          <motion.div
            className="bg-transparent backdrop-blur-[2px] rounded-2xl border-2 border-t-[#2e5996da] border-l-[#2e5996da] border-b-[#2e599657] border-r-[#2e599657] text-center w-full p-5"
            variants={cardFade}
          >
            <p className="text-xl text-[#fffb19]">★★★★★</p>
            <p className="text-white text-[15px] mt-1">
              "The berry pie is something else entirely. Perfectly sweet,
              perfectly flaky. Will definitely be back."
            </p>
            <h3 className="font-semibold mt-2 text-xl text-[#fffb19]">
              Ngozi Kalu
            </h3>
          </motion.div>
        </div>
      </section>
    </motion.section>
  );
}

export default Testimonials;
