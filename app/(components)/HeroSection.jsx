import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run once on component mount

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div
      id="carouselExampleControls"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      {/* Carousel items */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative float-left ${
              index === activeIndex ? "" : "hidden"
            } w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
            data-twe-carousel-item
            data-twe-carousel-active
          >
            <img
              src={item.imgPath}
              alt={item.title}
              height={600}
              objectFit="contain"
              aspectRatio="3/2"
              className="block w-full h-[100vh] contain"
            />
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
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-600"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <div className="carousel-buttons">
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleControls"
          data-twe-slide="prev"
          onClick={goToPrevSlide}
        >
          <span className="inline-block h-8 w-8">
            <FaPlay className="h-6 w-6" />
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>

        {/* Carousel controls - next item */}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleControls"
          data-twe-slide="next"
          onClick={goToNextSlide}
        >
          <span className="inline-block h-8 w-8">
            <FaPlay className="h-6 w-6 transform rotate-180" />
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
}
