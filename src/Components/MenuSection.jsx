import React from "react";
import ChocCake from "../assets/pages/image/choc-cake2.jpg";
import croissant from "../assets/pages/image/croissant.jpg"
import chocChip from "../assets/pages/image/choc-chip.jpg"
import berryPie from "../assets/pages/image/berry-pie.jpg"
import bakeryTool from "../assets/pages/image/bakery-tool2.png"

function MenuSection() {
  return (
    <main className=" bg-[#efefef] p-10 pt-20 relative">
      <div className=" max-w-[125 mx-auto flex flex-col items-center justify-center text-center  ">
        {" "}
        <h2 className="font-semibold text-3xl ">A Taste of What we Offer</h2>
        <hr className="border-2 border-[#2e5996] w-40 mt-1 mb-2" />
        <p className=" text-lg  text-[#383838] mt-3">
          From classic cakes to warm pastries - there's something for every
          craving.
        </p>
        <button className=" text-white bg-[#2e5996] rounded-xl p-1 text-[15px] px-9 font-semibold mt-5 flex items-center gap-2">
          View Full Menu <i className="fa-solid fa-arrow-right font-light "></i>
        </button>
      </div>

      <section className="flex max-w-225 mx-auto items-center gap-5 mt-10">
        <div className="rounded-lg bg-[#ffffff] w-full p-2 text-center">
          <img
            src={ChocCake}
            alt=""
            className="rounded-lg w-fit h-fit object-cover"
          />
          <p className="font-semibold text-[#2e5996]">Choc Cake</p>
          <p>N4,500</p>
        </div>

        <div className="rounded-lg bg-[#ffffff] w-full p-2 text-center">
          <img
            src={croissant}
            alt=""
            className="rounded-lg w-fit h-fit object-cover"
          />
          <p className="font-semibold text-[#2e5996]">Croissant</p>
          <p>N3,500</p>
        </div>

        <div className="rounded-lg bg-[#ffffff] w-full p-2 text-center">
          <img
            src={chocChip}
            alt=""
            className="rounded-lg w-fit h-fit object-cover"
          />
          <p className="font-semibold text-[#2e5996]">Choc chip</p>
          <p>N500</p>
        </div>

        <div className="rounded-lg bg-[#ffffff] w-full p-2 text-center">
          <img
            src={berryPie}
            alt=""
            className="rounded-lg w-fit h-fit object-cover"
          />
          <p className=" font-semibold text-[#2e5996]">Berry pie</p>
          <p>N3,200</p>
        </div>
      </section>
      <img
        src={bakeryTool}
        alt=""
        className="absolute top-0 -left-20 w-80 rotate-45 opacity-20 "
      />
    </main>
  );
}

export default MenuSection;
