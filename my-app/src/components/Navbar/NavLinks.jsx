// import React from "react";

// const NavLinks = () => {
//   const Links = [
//     {
//       name: "Home",
//       link: "/",
//     },
//     {
//       name: "Blogs",
//       link: "/",
//     },
//     {
//       name: "Login",
//       link: "/",
//     },
//   ];
//   return (
//     <>
//       {Links.map((link, i) => (
//         <li key={i} className="font-semibold hover:text-primary">
//           <a href={link.link}>{link.name}</a>
//         </li>
//       ))}
//     </>
//   );
// };

// export default NavLinks;

import React from "react";

const NavLinks = ({ onClick }) => {
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/",
    },
    {
      name: "Login",
      link: "/Login",
    },
  ];
  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className="font-semibold hover:text-primary">
          <a href={link.link} onClick={onClick}>{link.name}</a>
        </li>
      ))}
    </>
  );
};
export default NavLinks;
