import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function AboutUs() {
  return (
    <motion.main
      className="min-h-screen bg-[#fbf6ed] "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.16, delayChildren: 0.12 } },
      }}
    >
      <section className="bg-[url('/public/breadcrum.jpg')] bg-cover bg-center bg-blend-overlay bg-[#000000d7] w-full h-100 flex justify-center items-center ">
        <h2 className="font-semibold text-3xl text-[#ffffff]">
          Home <span className="text-[#fffb19]">/About Us </span>
        </h2>
      </section>
      <motion.div
        className="max-w-300 mx-auto text-center mb-16 py-20 px-6"
        variants={sectionVariants}
      >
        <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
          Our Story
        </p>
        <h1 className="text-4xl font-bold text-[#1f1f1f] mt-4">
          About Bakerz Bite
        </h1>
        <p className="text-[#555555] mt-4 text-lg max-w-2xl mx-auto">
          Bakerz Bite began with a simple idea: fresh-baked goods should feel
          like a warm welcome every time.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] max-w-300 mx-auto items-center pb-20 px-6">
        <motion.div
          className="rounded-4xl bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-[#2e5996]">Our Values</h2>
          <p className="mt-5 text-[#555555] leading-7">
            We bake with premium ingredients, thoughtful recipes, and a
            commitment to quality. Every item is handcrafted to deliver flavor,
            freshness, and joy.
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-semibold text-[#1f1f1f]">
                Fresh ingredients
              </h3>
              <p className="text-[#555555] mt-2">
                Real butter, natural flavors, and seasonal fruit make every bite
                memorable.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1f1f1f]">Made with love</h3>
              <p className="text-[#555555] mt-2">
                Our team treats every order like a special occasion, whether
                it's a small pastry or a large celebration cake.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-4xl bg-[#2e5996] p-10 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold">Why We Bake</h2>
          <p className="mt-5 text-lg leading-7 text-[#f2f2f2]">
            Because every celebration deserves something sweet, and every day
            can use a little extra warmth. We build moments you remember.
          </p>
          <ul className="mt-8 space-y-4 text-[#e8e8e8]">
            <li>Handcrafted bakery items</li>
            <li>Custom cake designs</li>
            <li>Friendly local service</li>
          </ul>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default AboutUs;
