import React from "react";
// Logo
import LogoDark from "../assets/img/logo-orig.png";
import {
  BsFacebook,
  BsInstagram,
  BsTelephone,
  BsWhatsapp,
} from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto text-white flex flex-row justify-between items-center py-4">
        <div className="flex flex-col">
          <a href="/">
            <img src={LogoDark} className="w-[220px]" alt="" />
          </a>
          <div className="flex flex-row items-center justify-center gap-10 pt-4">
            <a href="/">
              <BsInstagram size={24} />
            </a>
            <a href="/">
              <BsWhatsapp size={24} />
            </a>
            <a href="/">
              <BsFacebook size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="h3 font-tertiary font-semibold pb-1">
            GET IN TOUCH WITH US
          </h3>
          <button className="border-2 border-white px-4 py-2 rounded-lg text-[#25D366] hover:bg-[#25D366] hover:text-black">
            Contact us on Whatsapp
          </button>
          <h3 className="h1 font-tertiary font-thin pt-3">
            Ras Al-khaimah | Royal View Hotel
          </h3>
        </div>

        <div className="flex flex-col">
          <h3 className="h3 font-tertiary font-semibold">CONTACTS</h3>
          <div className="flex flex-row items-center gap-x-2 pb-1">
            <BsTelephone />
            +971 7 2277 717
          </div>
          <div className="flex flex-row items-center gap-x-2 pb-1">
            <FaMobileAlt />
            +971 54 777 1704
          </div>
          <div className="flex flex-row items-center gap-x-2 pb-1">
            <AiOutlineMail />
            info@royalviewhotel.ae
          </div>
        </div>
      </div>
      <div className=" text-white flex justify-center items-center border-t border-white/50 py-2">
        Copyright &copy; 2023. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
