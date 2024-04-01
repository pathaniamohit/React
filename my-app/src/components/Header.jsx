import React from "react";
// import Nav from "./Navbar/Nav";
import HeroImg from "../assets/Hero.png";
import ButtonFill from "./ButtonFill";
import ButtonOutline from "./ButtonOutline";
import Icon1 from "../assets/icon-1.png";
import Icon2 from "../assets/icon-2.png";
import Icon3 from "../assets/icon-3.png";
// import Video from './Video/Video.jsx';
import './Header.css';
const Header = () => {
  /**
   * Info is an array of objects, each containing:
   * - icon: The icon image for this info item
   * - title: The title text for this info item
   * - des: The description text for this info item
   */
  const Info = [
    {
      icon: Icon1,
      title: "Secret Locations",
      des: "",
    },
    {
      icon: Icon2,
      title: "Safe Adventure",
      des: "",
    },
    {
      icon: Icon3,
      title: "Professional Hikers",
      des: "",
    },
  ];

  // const handleClick = () => {
  //   window.open("/login.html", "_self");
  // };
  return (
    <section className="bg-Hero bg-cover bg-center py-4 md:px-24 px-4">

      <div className="flex md:flex-row flex-col gap-5 pt-20">
        <div className="flex-1">
          <h1
            className="md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight
          leading-snug"
          >
            Be prepared for the mountains and beyond.
          </h1>
          <p className="text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed">
            Are you looking for amazing hiking travel? Don’t worry! We got it
            for you!
          </p>
          <br />
          <div className="flex md:gap-4 gap-2 flex-wrap">
          <ButtonFill >Subscribe us!</ButtonFill>
          <ButtonOutline />
          </div>
        </div>
        <div className="flex-1  flex justify-center">
          <img src={HeroImg} alt="hero" className="h-2/3" />
        </div>
      </div>

      <div className="bg-white shadow-2xl flex flex-col md:justify-between md:flex-row md:items-center md:-mt-48 gap-10 md:p-14 p-10 mt-5 rounded-md">
        {Info.map((info, i) => (
          <div key={i}>
            <img src={info.icon} alt="icon" className="h-16" />
            <h1 className="font-semibold text-lg my-3">{info.title}</h1> 
            <p className="text-gray-600 text-sm leading-relaxed">{info.des}</p>
            <button className="text-rose-600 font-medium text-sm my-1">
              Read More
            </button>
          </div>
        ))}
      </div>
      <p className="py-10 md:text-sm text-xs block text-gray-600 text-center">
        Don’t hesitate to contact us to get better Information.
        <span className="text-rose-600 font-semibold italic px-1">
          EXPLORE ALL TREKKING.
        </span>
      </p>
    </section>
    
  );
};

export default Header;