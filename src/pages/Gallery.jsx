import React from "react";
import { motion } from "framer-motion";
import ChocCake from "../assets/image/choc-cake2.jpg";
import croissant from "../assets/image/croissant.jpg";
import chocChip from "../assets/image/choc-chip.jpg";
import berryPie from "../assets/image/berry-pie.jpg";
import velvet from "../assets/image/red velvet cake.jpg"
import strawberry from "../assets/image/strawberry.jpg"

const photos = [
  { src: ChocCake, label: "Signature chocolate cake" },
  { src: croissant, label: "Buttery croissants" },
  { src: chocChip, label: "Cookie collection" },
  { src: berryPie, label: "Fresh berry pie" },
  {src: velvet, label: "Red Velvet Cake"},
  {src: strawberry, label: "StrawberryCream Cake"}

];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

function Gallery() {
  return (
    <motion.main
      className="min-h-screen bg-[#fffaf3] "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      <section className="bg-[url('/public/breadcrum.jpg')] bg-cover bg-center bg-blend-overlay bg-[#000000d7] w-full h-100 flex justify-center items-center ">
        <h2 className="font-semibold text-3xl text-[#ffffff]">
          Home <span className="text-[#fffb19]">/Gallery </span>
        </h2>
      </section>
      <motion.div
        className="max-w-300 mx-auto text-center mb-14 py-20 px-6"
        variants={itemVariants}
      >
        <p className="text-[#2e5996] font-semibold tracking-[0.24em] uppercase text-sm">
          Sweet Moments
        </p>
        <h1 className="text-4xl font-bold text-[#1e1e1e] mt-4">Gallery</h1>
        <p className="text-[#555555] mt-4 max-w-2xl mx-auto text-lg">
          A taste of our bakery through beautiful pastry photography and
          fresh-made creations.
        </p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 pb-20 px-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-4xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            variants={itemVariants}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <img
              src={photo.src}
              alt={photo.label}
              className="h-72 w-full object-cover transition duration-500 hover:scale-105"
            />
            <div className="p-5">
              <p className="font-semibold text-[#2e5996]">{photo.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}

export default Gallery;
