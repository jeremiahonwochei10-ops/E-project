import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/baker-logo.png";
import { TbRuler2Off } from "react-icons/tb";

import { RiUserFollowLine } from "react-icons/ri";

function Header() {
  const [show, setShow] = useState(false);

  const handleMenuClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <header className="absolute top-0 w-full z-20 ">
      <div className="justify-between flex p-4 items-center max-w-300 mx-auto relative">
        <Link to="/">
          <img src={logo} alt="Bakerz Bite logo" className=" w-30 md:w-50" />
        </Link>
        <nav className=" hidden md:block">
          <ul className="flex gap-4 text-white  font-medium text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/merchandise"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                Merchandise
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          {" "}
          <button className="text-white bg-[#2e5996] rounded-xl p-1 px-4 text-[12px] md:px-6 font-semibold md:text-[15px] transition hover:bg-[#244b85]">
            Visit: 0
          </button>
          <i
            className={`fa-solid fa-bars text-white text-xl md:hidden!`}
            onClick={handleMenuClick}
          ></i>
        </div>
        <nav
          className={`${show == true ? "block" : "hidden"}`}
          onClick={handleMenuClick}
        >
          <ul className="flex flex-col gap-4 text-white  font-medium text-sm backdrop-blur-[5px] rounded w-[50%] h-lvh p-10 bg-[#0f203acf] absolute top-0 right-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/merchandise"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                Merchandise
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fffb19] border-b-2 border-[#fffb19]"
                    : "text-white transition hover:text-[#fffb19] pb-1 border-b-2 border-transparent hover:border-[#fffb19] duration-300"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
