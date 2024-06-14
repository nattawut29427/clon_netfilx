"use client";
import Navbaritem from "./Navbaritem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { useCallback, useState } from "react";

const Navbar = () => {
  const [showMobilemenu, setShowMenuMoblie] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMenuMoblie((current) => !current);
  }, []);
  return (
    <nav className="w-full fixed z-40">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transion duration-500 bg-zinc-900 bg-opacity-90">
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
        <div
          className="
                  flex-row
                  ml-8
                  gap-7
                  hidden
                  lg:flex
                 "
        >
          <Navbaritem label="Home" />
          <Navbaritem label="Series" />
          <Navbaritem label="films" />
          <Navbaritem label="New & Poppular" />
          <Navbaritem label="My List" />
          <Navbaritem label="Browse by languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={showMobilemenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-10 h-10 lg:h-10 overflow-hidden">
                <img src="/images/profile.png" alt="" className="rounded-md" />
            </div>
            <BsChevronDown className="text-white transition" />
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
