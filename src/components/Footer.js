import React from "react";
// Logo
import LogoDark from "../assets/img/logo-orig.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-4">
      <div className="container mx-auto text-white flex justify-between items-center">
        <a href="/">
          <img src={LogoDark} className="w-[220px]" alt="" />
        </a>
        Copyright &copy; 2023. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
