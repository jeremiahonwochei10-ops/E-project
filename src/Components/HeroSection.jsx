import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  return (
    <section className='bg-[url("/public/bg-image.jpg")] pt-30 bg-cover bg-center w-full h-lvh bg-blend-overlay bg-[#000000c9]  '>
      <section className="max-w-300 mx-auto">
        {" "}
        <div className="ml-10 mt-20">
          <h1 className="font-bold text-white text-6xl max-w-125  mt-3">
            {" "}
            Where <span className="text-[#fffb19]">Smiles Are Served</span>{" "}
            Daily{" "}
          </h1>
          <p className="text-white max-w-125 mt-5 text-[15px]">
            {" "}
            Handcrafted with love, baked fresh every morning, From celebration
            cakes to buttery pastries - every bite tell a story.
          </p>

          <button className=" text-white bg-[#2e5996] rounded-xl p-1 text-[15px] px-9 font-semibold mt-5 flex items-center gap-2">
            Browse Menu <i className="fa-solid fa-arrow-right font-light "></i>
          </button>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
