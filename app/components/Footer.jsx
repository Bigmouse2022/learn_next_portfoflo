import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20 font-Outfit">
      <div className="text-center">
        <Image src={isDarkMode?assets.logo_dark:assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className=" w-max flex items-center gap-2 mx-auto mb-2">
          <Image src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} alt="" className="w-6" />
          2798605781@qq.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-1 py-6 ">
        <p>© 2025 HuangPinjia  All rights reserved </p>
        <ul className="flex items-center gap-10 justify-center mt-2 sm:mt-0 ">
            <li><a target="_blank" href="https://github.com/Bigmouse2022">Github</a></li>
            <li><a target="_blank" href="https://github.com/Bigmouse2022">Github</a></li>
            <li><a target="_blank" href="https://github.com/Bigmouse2022">Github</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
