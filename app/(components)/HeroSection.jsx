"use client";
// Import necessary dependencies
import { useState } from "react";
import Carousel from "react-material-ui-carousel"; // You might need to install this package
// import { Button } from "@material-ui/core";

// Sample data for the carousel items, replace with your actual image paths and texts
const items = [
  {
    imgPath: "/path/to/your/image1.jpg",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
  // ... Add other images and texts here
];

MAJOR.MINOR.PATCH

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      {/* Carousel component */}
      <Carousel
        autoPlay={false}
        animation="slide"
        index={activeIndex}
        onChange={(index, active) => setActiveIndex(index)}
      >
        {items.map((item, index) => (
          <img
            src={item.imgPath}
            alt=""
            className="w-full h-auto"
            key={index}
          />
        ))}
      </Carousel>

      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h2 className="text-4xl mb-4">{items[activeIndex].title}</h2>
        <p className="mb-8">{items[activeIndex].description}</p>

        {/* Buttons */}
        <Button variant="contained" color="primary">
          Log In
        </Button>
        <Button variant="outlined" color="primary" className="ml-4">
          Register
        </Button>
      </div>

      {/* Top left button */}
      <button
        onClick={() =>
          setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
        }
        className=""
      >
        Start Journey
      </button>
    </div>
  );
}
