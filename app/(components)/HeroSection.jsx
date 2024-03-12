"use client";
// Import necessary dependencies
import { useState } from "react";
import { FaPlay } from "react-icons/fa"; // Import the icons you need

// Sample data for the carousel items, replace with your actual image paths and texts
const items = [
  {
    imgPath: "01.jpg",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
  {
    imgPath: "02.png",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
  {
    imgPath: "03.png",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
  {
    imgPath: "04.png",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
  // ... Add other images and texts here
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      {/* Carousel component */}
      <div className="flex">
        {items.map((item, index) => (
          <img
            src={item.imgPath}
            alt=""
            className="w-full h-auto"
            key={index}
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className=" top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h2 className="text-4xl mb-4">{items[activeIndex].title}</h2>
        <p className="mb-8">{items[activeIndex].description}</p>

        <div className="flex items-center mb-4">
          <button className="bg-blue-500 text-white rounded px-4 py-2 mr-2">
            Log In
          </button>
          <button className="border border-blue-500 text-blue-500 rounded px-4 py-2">
            Register
          </button>
        </div>
      </div>

      {/* Top left button */}
      <button
        onClick={() =>
          setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
        }
        className="absolute top-0 left-0 m-4 bg-blue-500 text-white rounded px-4 py-2 flex items-center"
      >
        <FaPlay className="mr-2" /> Start Journey
      </button>
    </div>
  );
}