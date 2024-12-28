import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 ">
      <div className="container mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            
            <div className="flex items-center gap-x-2 w-32 h-32">
              <img src="../../public/logo-removebg-preview (1).png" alt="" />
              {/* <h2 className="text-customColor font-bold text-4xl">Clean&bio</h2> */}
            </div>
          </div>
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a
              href="#"
              className="leading-normal no-underline text-white text-lg hover:text-customColor"
            >
              À Propos de nous
            </a>
            <a
              href="#footer"
              className="leading-normal no-underline text-white text-lg hover:text-customColor"
            >
              Nos Services
            </a>
            <a
              href="/"
              className=" flex items-center leading-normal no-underline text-customColor text-lg hover:text-customColor"
            >
              Contactez-nous
            </a>
            <a
              href="#"
              className=" flex items-center leading-normal no-underline text-customColor text-lg hover:text-customColor"
            >
              <FaEnvelope className="mr-2 text-white" />
              contact@cleanetbio.com
            </a>
            <a
              href="#"
              className=" flex items-center leading-normal no-underline text-customColor text-lg hover:text-customColor"
            >
              <FaPhoneAlt className="mr-2 text-white" />
              06 23 45 67 89
            </a>
          </ul>

          {dropdown ? (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <MdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown && (
          <div className="lg:hidden w-full fixed top-24 bg-customColor transition-all">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="flex flex-col justify-center w-full">
                <a
                  href="../components/Hero.jsx"
                  className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-customColor text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Acceil
                </a>
                <a
                  href="#footer"
                  className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-customColor text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  À propos
                </a>
                <a
                  href="#"
                  className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-customColor text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Contact
                </a>
                <a
                  href="#blog"
                  className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-customColor text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Blog
                </a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
