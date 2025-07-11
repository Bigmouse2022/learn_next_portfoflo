import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full -z-10 translate-y-[-80%] ${
          isDarkMode ? "hidden" : ""
        }`}
      >
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed  px-5 lg:px-8 xl:px-[8%] 
      py-4 flex items-center justify-between z-50 
      ${isScroll ? " bg-opacity-50 shadow-sm" : ""}${
          isDarkMode ? "" : "backdrop-blur-lg "
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8
        rounded-full px-12 py-3  ${
          isScroll ? "border-dark-hover" : " shadow-sm bg-opacity-50 "
        }${isDarkMode ? "border border-white " : "border border-black"}`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              首页
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              关于我
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              学习情况
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              我的项目
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              联系我
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className=" w-6 "
            />
          </button>

          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3
            px-10  py-2.5  rounded-full ml-4 font-Ovo
            ${isScroll ? "border-dark-hover" : " shadow-sm bg-opacity-50 "}${
              isDarkMode ? "border border-white " : "border border-black"
            }`}
          >
            联系我{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className=" w-6 "
            />
          </button>
        </div>
        {/* --------mobile menu---------- */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 
        top-0 bottom-0 w-64 z-50 h-screen transition duration-500
        ${isDarkMode ? "bg-dark-hover text-white" : "bg-rose-50 text-black"}`}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              首页
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              关于我
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              学习情况
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              我的项目
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              联系我
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
