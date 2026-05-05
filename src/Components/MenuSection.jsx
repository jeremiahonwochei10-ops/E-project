import React from "react";

function MenuSection() {
  return (
    <main className="justify-center items-center">
      <h2 className="font-semibold">Featured Menu Prewiev</h2>

      <div className=" flex justify-center items-center" gap-7>
        <button className="cursor-pointer bg-white hover:bg-amber-950 rounded">
          All
        </button>
        <button className="cursor-pointer bg-white hover:bg-amber-950 rounded">
          Cakes
        </button>
        <button className="cursor-pointer bg-white hover:bg-amber-950 rounded">
          Pastires
        </button>
        <button className="cursor-pointer bg-white hover:bg-amber-950 rounded">
          Cookies
        </button>
        <button className="cursor-pointer bg-white hover:bg-amber-950 rounded">
          Pies
        </button>
      </div>

      <div>
        <p className="">Choc Cake</p>
        <p className="bg-amber-950 ">N4,500</p>
      </div>

      <div>
        <p className="">Choc Cake</p>
        <p className="bg-amber-950 ">N800</p>
      </div>

      <div>
        <p className="">Choc Cake</p>
        <p className="bg-amber-950 ">N500</p>
      </div>
      <div>
        <p className="">Choc Cake</p>
        <p className="bg-amber-950 ">N3,200</p>
      </div>
    </main>
  );
}

export default MenuSection;
