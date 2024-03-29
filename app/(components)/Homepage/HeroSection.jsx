import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "app/(components)/ui/carousel";

const items = [
  {
    imgPath: "/01.jpg",
    title: "Your Mental Well Being Matters",
    description: "Welcome to a space of support and healing",
  },
  {
    imgPath: "/03.jpg",
    title: "Connecting For Change",
    description: "Avoid the stigma and connect from anywhere in the world",
  },
  {
    imgPath: "/04.jpg",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
];

export default function CarouselDemo() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run once on component mount

  return (
    <div className="flex justify-center">
      <Carousel className=" w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className={index === activeIndex ? "active" : ""}
            >
              <div className="">
                <div
                  className=" relative"
                  style={{
                    backgroundImage: `url(${item.imgPath})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "auto",
                    height: "100vh",
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                    <h2 className="text-4xl mb-4">{item.title}</h2>
                    <p className="mb-8">{item.description}</p>
                    <div className="flex items-center mb-4">
                      <Link href={"/Pages/authentication/signin"}>
                        <button className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 rounded px-4 py-2 mr-2">
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4" />
        <CarouselNext className="absolute top-1/2 right-4" />
      </Carousel>
    </div>
  );
}
