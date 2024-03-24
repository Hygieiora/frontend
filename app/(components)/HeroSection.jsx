import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  {
    imgPath: "01.jpg",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
  {
    imgPath: "02.jpg",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
  {
    imgPath: "03.jpg",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
];

export default function HeroSection() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    // Set Swiper instance reference (optional for custom controls)
    if (swiperInstance) return;
    const swiper = document.querySelector(".swiper");
    if (swiper) setSwiperInstance(swiper.swiper);
  }, [swiperInstance]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run once on component mount

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000 }} // Optional automatic slide change
      className="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
      onSwiper={(swiper) => setSwiperInstance(swiper)} // Set Swiper instance
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          {/* Optional: Wrap content with Animate on Display (replace "..." with animation names) */}
          {/* <AnimateOnScroll animateIn="..." animateOut="..."> */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl mb-4">{item.title}</h2>
            <p className="mb-8">{item.description}</p>
            <div className="flex items-center mb-4">
              <Link href={"/Pages/authentication/signin"}>
                <button className="bg-blue-600 text-white hover:bg-white hover:text-blue-600  rounded px-4 py-2 mr-2">
                  Log In
                </button>
              </Link>
              <Link href={"/Pages/authentication/signup"}>
                <button className="border border-blue-600 text-blue-600 hover:border-white hover:text-white rounded px-4 py-2">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <img
            src={item.imgPath}
            alt={item.title}
            className="block w-full h-[100vh] object-cover"
          />
          {/* </AnimateOnScroll> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
