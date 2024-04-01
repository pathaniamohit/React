import Blog from "./components/Blog";
import Nav from "./components/Navbar/Nav";
import Headers from "./components/Header";
import img1 from "./assets/img1_1.jpg";
import img2 from "./assets/img2_1.jpg";
import img3 from "./assets/img3_1.jpg";
import Companies from "./components/Companies";
import Footer from "./components/Footer/Footer";
import Video from './components/Video/Video.jsx';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const contents = [
    {
      title: "Safe, Affordable, And Trusted",
      des: "Join our volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      img: img1,
      buttonDes: "Discover more",
    },
    {
      title: "Enjoy Your Life With Us Now!",
      des: "Experience the great outdoors with our team of experts and make a positive impact on the environment.",
      img: img2,
      buttonDes: "Resources",
    },
    {
      title: "Let’s Enjoy Nature With Us",
      des: "Join our community of volunteers and help us protect and preserve America’s natural treasures for future generations.",
      img: img3,
      buttonDes: "Careers",
    },
  ];
  return (
    <div className="font-Poppins">

      <Nav  />
      <Video />
      <Headers />
      <Blog content={contents[0]} />
      <Companies />
      <Blog content={contents[1]} alternative={true} />
      <Blog content={contents[2]} />
      <Footer />

    </div>
  );
};

export default App;

