import React from "react";
import PortfolioLogo from "./assets/Portfolio Logo.png";
import { LuGithub } from "react-icons/lu";

import { FiLinkedin } from "react-icons/fi";

import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <div className="pt-30 flex flex-col   gap-8  ">
      <div className="flex flex-col   sm:flex-row items-center sm:justify-between  sm:p-10 gap-8 ">
        <img className="w-30" src={PortfolioLogo} alt="footer-logo" />

        <div className="flex gap-8 text-2xl text-gray-600 ">
          <a href="https://github.com/codewith-anji" target="_blank">
            <LuGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-saini-0786b7374/
"
            target="_blank"
          >
            {" "}
            <FiLinkedin />
          </a>
          <a href="">
            {" "}
            <MdOutlineMail />
          </a>
        </div>

        <p className="text-gray-400 ">Made By Shubham Saini</p>
      </div>

      <p className="text-sm flex text-gray-400 self-center">
        © 2026 Shubham Saini. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
