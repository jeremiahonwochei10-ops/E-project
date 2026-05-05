import React from "react";
import logo from "../assets/pages/image/baker-logo.png"
function Header() {
  return (
    <header className="  absolute top-0 w-full ">
      <div className=" justify-between  flex p-2 items-center max-w-300 mx-auto">
        <img src={logo} alt="" className="w-50" />
        <nav>
          <ul className="flex gap-3 text-white">
            <li>Home</li>
            <li>About us</li>
            <li>Menu</li>
            <li>Merchandise</li>
            <li>Contact us</li>
            <li>Gallery</li>
          </ul>
        </nav>
        <button className=" text-white bg-[#2e5996] rounded-xl p-1 px-6 font-semibold text-[15px]">
          {" "}
          Visit: 0
        </button>
      </div>
    </header>
  );
}

export default Header;
