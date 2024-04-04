// import React, { useState } from "react";
// import Logo from "../../assets/logo.png";
// import NavLinks from "./NavLinks";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


// const Nav = () => {
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     // Add any logic you need here when a nav item is clicked
//   };

//   return (
//     <BrowserRouter>
//     <nav className="flex items-center justify-between bg-white fixed top-0 w-full h-20 z-50 shadow">
//       <button className="flex items-center" onClick={() => { /* Add your logo button functionality */ }}>
//         <img src={Logo} alt="logo" className="h-12 cursor-pointer w-auto mr-4 " />
//       </button>

//       <Routes>

//       <ul className="md:flex hidden items-center gap-10">
//         <NavLinks onClick={handleClick} />
//       </ul>

//       {/* <ul
//         className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl
//         md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500
//         ${open ? "right-0" : "right-[-100%]"}`}
//       >
//         <NavLinks onClick={handleClick} />
//       </ul> */}

//       <Route path="/Login" element={
//         <ul
//         className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl
//         md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500
//         ${open ? "right-0" : "right-[-100%]"}`}
//       >
//         <NavLinks onClick={handleClick} />
//       </ul>
//       } />

//       </Routes>

//       <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
//         <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
//       </div>
      

//     </nav>
//     </BrowserRouter>
//   );
// };

// export default Nav;


import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import { BrowserRouter as Router } from 'react-router-dom';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    // Add any logic you need here when a nav item is clicked
  };

  return (
    <Router>
      <nav className="flex items-center justify-between bg-white fixed top-0 w-full h-20 z-50 shadow">
        <button className="flex items-center" onClick={() => setOpen(!open)}>
          <img src={Logo} alt="logo" className="h-12 cursor-pointer w-auto mr-4" />
        </button>

        <ul className={`md:flex hidden items-center gap-10 ${open ? "block" : "hidden"}`}>
          <NavLinks onClick={handleClick} />
        </ul>

        <div className={`text-2xl md:hidden z-50 ${open ? "block" : "hidden"}`}>
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
      </nav>
    </Router>
  );
};

export default Nav;
