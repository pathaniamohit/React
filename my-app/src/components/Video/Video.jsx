// Video.jsx

// import './Video.module.css';

const video1 = require('./video1.mp4');
const video2 = require('./video2.mp4'); 
const video3 = require('./video3.mp4');

const VIDEOS = [video3];

const getRandomVideo = () => {
  return VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
}

const Video = () => {
  const video = getRandomVideo();

  return (
    <video className="w-full h-auto mt-19 p-0" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
  );
}

export default Video;
