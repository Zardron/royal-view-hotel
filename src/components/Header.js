import React, { useState, useEffect } from "react";

import LogoDark from "../assets/img/logo-orig.png";
import Logo from "../assets/img/logo.png";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";

import "./flags.css";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  }, []);

  const { i18n, t } = useTranslation(["common"]);
  const [select, setSelect] = useState("US");
  const onSelect = (code) => {
    setSelect(code);

    if (code === "US") {
      i18n.changeLanguage("en");
    }
    if (code === "AE") {
      i18n.changeLanguage("ar");
    }
    if (code === "RU") {
      i18n.changeLanguage("ru");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  return (
    <header
      className={`${
        header ? "bg-[#eceff3] py-1 shadow-lg" : " bg-transparent py-2"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* Logo */}
        <Link to="/">
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
        </Link>
        {/* Nav */}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 mb-4 lg:mb-0 font-tertiary tracking-[3px] text-[15px] font-regular items-center uppercase lg:gap-x-8`}
        >
          <Link to="/" className="hover:text-accent transition">
            {t("home")}
          </Link>
          <Link to="/our-rooms" className="hover:text-accent transition">
            {t("rooms")}
          </Link>
          <Link to="/" className="hover:text-accent transition">
            {t("restaurant")}
          </Link>
          <Link to="/" className="hover:text-accent transition">
            {t("spa")}
          </Link>
          <Link to="/" className="hover:text-accent transition">
            {t("contact")}
          </Link>
          <ReactFlagsSelect
            selected={
              localStorage.getItem("i18nextLng") === "en"
                ? "US"
                : localStorage.getItem("i18nextLng") === "ru"
                ? "RU"
                : "AE"
            }
            onSelect={onSelect}
            countries={["US", "AE", "RU"]}
            customLabels={{
              US: "ENGLISH",
              AE: "ARABIC",
              RU: "RUSSIAN",
            }}
            /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
