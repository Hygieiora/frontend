import * as React from "react";
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
    imgPath: "/02.jpg",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
  {
    imgPath: "/03.jpg",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
  {
    imgPath: "/04.jpg",
    title: "Ready To Get Started?",
    description: "Choose your path to a sound and healthy life",
  },
];

export default function CarouselDemo() {
  return (
    <div className="flex justify-center">
      <Carousel className="mx-12 px-12 w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div
                  className="pt-18 relative"
                  style={{
                    backgroundImage: `url(${item.imgPath})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
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
                {/* <span className="text-4xl font-semibold">{item.title}</span>
                <p>{item.description}</p> */}
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
