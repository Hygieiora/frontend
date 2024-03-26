import React, { useState, useEffect } from "react";
import Image from "next/image";
import anime from "animejs";

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="flex flex-col h-screen items-center text-center bg-blue-600 justify-center "
      isMounted={isMounted}
    >
      <Image
        id="logo"
        src="/assets/splash.png"
        alt="splash-logo"
        width={100}
        height={100}
      />
      <span className="text-3xl text-center font-bold text-white ">
        H Y G I E I O R A
      </span>
      <span className="text-xl text-center text-white">
        Your Health, Your Call
      </span>
    </div>
  );
};

export default SplashScreen;
