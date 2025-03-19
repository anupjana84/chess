import React, { useEffect, useRef } from "react";
import Header from "../../layouts/Header";

import "../../assets/CSS/goldenEffect.css";
import GoldButton from "../../layouts/components/GoldenButton";

const ChessLanding = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Adjust speed (1 is normal, 0.5 is half speed)
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b bg-black/[0.1]  text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-[909px] object-cover z-[-1]"
        autoPlay
        muted
      >
        <source src="./src/assets/0001-0110.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="w-full h-screen flex flex-col items-center justify-center relative">
        <div className="absolute top-[80px] left-[100px]">
          <img src="./src/assets/heroLogo.png" alt="Hero Logo" />
          <div className="golden-text flex flex-col items-center bg-black text-lg ">
            <span>Step Beyond Tradition,</span>
            <span className="ml-3">Embrace the Next Level of Chess.</span>
          </div>

          <div className="flex flex-col items-center mt-6 ">
            <GoldButton text="Play Now" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChessLanding;
