import React, { useRef, useState } from 'react';
import '../Style/HeadSlide.css'; // Your custom CSS file

const HeadSlide = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="headslide-container">
      <div className="showreel-container">
        <div className="top-blur"></div>

        <h1 className="show-heading">Showreel</h1>


        <div className="video-wrapper">
  <iframe
    src="https://drive.google.com/file/d/1Qj1fopQWGjygxHIwJpom-vwRkH04kzZS/preview"
    width="100%"
    height="100%"
    allow="autoplay"
    className="drive-video"
    title="Showreel Video"
  ></iframe>
</div>


        </div>
      </div>
    
  );
};

export default HeadSlide;
