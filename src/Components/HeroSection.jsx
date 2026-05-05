import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  return (
    <div className='bg-[url("/public/bg-image.jpg")] pt-30 bg-cover bg-center w-full h-lvh bg-blend-overlay bg-[#000000de] text-center '>
      <h3 className="font-semibold text-white text-[20px] mt-20">
        {" "}
        Freshly baked every monrning
      </h3>
      <h1 className="font-bold text-white text-5xl max-w-[500px] mx-auto mt-3">
        {" "}
        Baked with <span className="text-[#FF9F04]">Love &</span> Finest
        Craft{" "}
      </h1>
      <p className="text-white max-w-[400px] mx-auto mt-5">
        {" "}
        Over 300 artisan baked goods - from gourmet cakes to handcrafted
        pastries. Real butter, real cream, happiness.
      </p>

      <button className="bg-[#FF9F04] rounded-xl p-1 px-6 font-bold mt-5">
        Browse Menu{" "}
      </button>
    </div>
  );
}

export default HeroSection;
