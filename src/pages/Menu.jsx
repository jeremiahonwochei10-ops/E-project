import React from "react";
import { motion } from "framer-motion";
import chocolate from "../assets/image/chocolate-fuge-cake.jpg"
import strawberry from "../assets/image/strawberry.jpg"
import velvet from "../assets/image/red velvet cake.jpg"
import croissant from "../assets/image/croissant.jpg"
import cinnamon from "../assets/image/cinnamon danish.jpg"
import almond from "../assets/image/almond-puff.jpg"
import chip from "../assets/image/choc-chip.jpg"
import peanut from "../assets/image/peanut butter.jpg"
import berry from "../assets/image/berry pie.jpg"
import apple from "../assets/image/apple pie.jpg"
import caramel from "../assets/image/caramel-latte.jpg"
import smoothie from "../assets/image/Berry-smoothie.jpg"
import { Link } from "react-router-dom";

const menuItems = [
  {
    image: chocolate,
    title: "Chocolate Fudge Cake",
    price: "$50",
    description:
      "A rich, moist chocolate cake layered with thick fudge frosting. Perfect for celebrations or an indulgent treat.",
  },
  {
    image: strawberry,
    title: "Strawberry Cream Cake",
    price: "$10",
    description:
      "Light vanilla sponge layered with fresh strawberry jam and whipped cream. A crowd favourite for any occasion.",
  },
  {
    image: velvet,
    title: "Red Velvet Cake",
    price: "$9",
    description:
      "Smooth, velvety layers of deep red cake finished with a classic cream cheese frosting. Elegant and delicious.",
  },
  {
    image: croissant,
    title: "Butter Croissant",
    price: "$12",
    description:
      "Flaky, buttery, golden. Our croissants are hand-rolled every morning and baked fresh to perfection.",
  },
  {
    image: cinnamon,
    title: "Cinnamon Danish",
    price: "$10",
    description:
      "Soft, fluffy pastry swirled with cinnamon sugar and drizzled with a light vanilla glaze. Warm and comforting..",
  },
  {
    image: almond,
    title: "Almond Puff",
    price: "$15",
    description: "Golden layers baked fresh every morning.",
  },
  {
    image: chip,
    title: "Choc Chip",
    price: "$11",
    description:
      "Crispy on the outside, chewy on the inside and loaded with generous chocolate chips. A timeless favourite.",
  },
  {
    image: peanut,
    title: "Peanut Butter",
    price: "$10",
    description:
      "Thick, soft cookies with a deep peanut butter flavour. Slightly crispy at the edges and perfectly chewy in the centre.",
  },
  {
    image: berry,
    title: "Mixed Berry Pie",
    price: "$15",
    description:
      "A golden shortcrust pastry filled with a sweet mix of strawberries, blueberries and raspberries. Best served warm.",
  },
  {
    image: apple,
    title: "Caramel Apple Pie",
    price: "$20",
    description:
      " Classic apple pie taken up a notch with a homemade caramel drizzle and a perfectly flaky golden crust.",
  },
  {
    image: caramel,
    title: "Caramel Latte",
    price: "$11",
    description:
      "Freshly brewed espresso blended with steamed whole milk and finished with a generous drizzle of house-made caramel sauce.",
  },
  {
    image: smoothie,
    title: "Berry Smoothie",
    price: "$8",
    description:
      "A thick, refreshing blend of fresh strawberries, blueberries and raspberries mixed with yoghurt and a touch of honey..",
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

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 max-w-300 mx-auto pb-20 px-6 ">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="rounded-2xl bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="gap-4">
              <img
                src={item.image}
                alt=""
                className="rounded-lg w-fit h-60 mx-auto object-cover"
              />
              <h2 className="text-2xl mt-1 font-semibold text-[#2e5996]">
                {item.title}
              </h2>

              <p className="mt-1 text-[#555555] leading-5">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <Link to={"/contact-us"}>
                  {" "}
                  <button className="mt-2 rounded-2xl bg-[#2e5996] px-7 py-2 text-white text-sm font-semibold transition hover:bg-[#244b85]">
                    Order Now
                  </button>
                </Link>

                <p className="text-xl font-semibold text-[#1f1f1f]">
                  {item.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}

export default Menu;
