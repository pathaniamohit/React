import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import { BrowserRouter as Router } from 'react-router-dom';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <nav className="flex items-center justify-between bg-white fixed top-0 w-full h-20 z-50 shadow">
        <button className="flex items-center" onClick={handleClick}>
          <img src={Logo} alt="logo" className="h-12 cursor-pointer w-auto mr-4" />
        </button>

        <ul className={`md:flex hidden items-center gap-10 ${open ? "block" : "hidden"}`}>
          <NavLinks />
        </ul>

        <div className={`text-2xl md:hidden z-50 ${open ? "block" : "hidden"}`}>
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
      </nav>
    </Router>
  );
};

export default Nav;
