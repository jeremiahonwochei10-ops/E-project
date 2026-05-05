import React from "react";
import butter from "../assets/pages/image/butter.png";
import bakedDaily from "../assets/pages/image/baked-daily.png";
import basket from "../assets/pages/image/basket.png";
import leaf from "../assets/pages/image/leaf.png";

function WhyChooseUs() {
  return (
    <section className="mt-10 max-w-300 mx-auto p-10">
      <div className=" max-w-125 mx-auto flex flex-col items-center justify-center text-center  ">
        {" "}
        <h2 className="font-semibold text-3xl text-[#000000] text-center">
          Why Bakerz Bite?
        </h2>
        <hr className="border-2 border-[#2e5996] w-35 mt-1 mb-2" />
        <p className="text-lg text-[#555555] text-center">
          We don't cut corners — and we definitely don't cut butter.
        </p>
      </div>

      <div className="flex gap-5  mt-10">
        <div className="rounded-2xl bg-[#eeeeee] p-5 w-full">
          <img src={butter} alt="" className="w-15" />
          <p>
            {" "}
            Every recipe starts with 100% real butter. No substitutes, no
            shortcuts.
          </p>
        </div>
        <div className="rounded-2xl bg-[#eeeeee] p-5 w-full">
          <img src={bakedDaily} alt="" className="w-15" />
          <p>
            {" "}
            Every recipe starts with 100% real butter. No substitutes, no
            shortcuts.
          </p>
        </div>
        <div className="rounded-2xl bg-[#eeeeee] p-5 w-full">
          <img src={basket} alt="" className="w-15" />
          <p>
            Our menu is always growing. From classic favourites to seasonal
            surprises.
          </p>
        </div>
        <div className="rounded-2xl bg-[#eeeeee] p-5 w-full">
          <img src={leaf} alt="" className="w-15" />
          <p>
            We use unbleached flour, natural flavours, and zero artificial
            preservatives.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
