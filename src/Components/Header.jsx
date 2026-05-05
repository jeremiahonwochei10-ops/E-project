import React from "react";

function Header() {
  return (
    <header className=" absolute top-1 w-full">
      <div className=" justify-between  flex p-2">
        <img src="" alt="" />
        <nav>
          <ul className="flex gap-3 text-white">
            <li>Home</li>
            <li>About us</li>
            <li>Menu</li>
            <li></li>
            <li>Contact us</li>
            <li>Gallery</li>
          </ul>
        </nav>
        <button className="bg-[#0065a0] rounded-xl p-1 px-6 font-bold">
          {" "}
          Visit: 0
        </button>
      </div>
    </header>
  );
}

export default Header;
