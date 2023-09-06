import React, { useState, useEffect } from "react";

import LogoWhite from "../assets/img/logo-white.png";
import LogoDark from "../assets/img/logo-orig.png";
import Logo from "../assets/img/logo.png";
import LogoW from "../assets/img/logoW.png";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  }, []);

  return (
    <header
      className={`${
        header ? "bg-[#eceff3] py-1 shadow-lg" : " bg-transparent py-2"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* Logo */}
        <a href="/">
          {header ? (
            <>
              <div>
                <img
                  src={LogoDark}
                  className="w-[220px] hidden lg:block"
                  alt=""
                />
              </div>

              <div>
                <img src={Logo} className="w-[120px] block lg:hidden" alt="" />
              </div>
            </>
          ) : (
            <>
              <div>
                <img
                  src={LogoDark}
                  className="w-[220px] hidden lg:block"
                  alt=""
                />
              </div>

              <div>
                <img src={Logo} className="w-[120px] block lg:hidden" alt="" />
              </div>
            </>
          )}
        </a>
        {/* Nav */}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 mb-4 lg:mb-0 font-tertiary tracking-[3px] text-[15px] font-regular items-center uppercase lg:gap-x-8`}
        >
          <a href="/" className="hover:text-accent transition">
            Home
          </a>
          <a href="/" className="hover:text-accent transition">
            Rooms
          </a>
          <a href="/" className="hover:text-accent transition">
            Restaurant
          </a>
          <a href="/" className="hover:text-accent transition">
            Spa
          </a>
          <a href="/" className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
