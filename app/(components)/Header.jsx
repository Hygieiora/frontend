"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-blue-600 border-b-4 border-blue-600 text-black py-1 flex items-center justify-between px-4">
      <div className="flex items-center">
        <Image
          width={50}
          height={140}
          src="/assets/splash.png" // Path to your logo image
          alt="Logo"
          className="mr-4"
        />
        <h1 className="text-3xl text-white font-bold">Hygieiora</h1>
      </div>
      <nav className="hidden md:flex flex-grow items-center justify-center">
        <Link
          href="#"
          className="text-white hover:text-blue-600 font-bold mx-3"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-white hover:text-blue-600 font-bold mx-3"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-white font-bold hover:text-blue-600 mx-3"
        >
          Community
        </Link>
        <Link
          href="#"
          className="text-white font-bold hover:text-blue-600 mx-3"
        >
          Pricing
        </Link>
      </nav>
      <div className="relative">
        <div
          className="rounded-full bg-black w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
          onClick={handleAvatarClick}
        >
          <Image
            className=" m-3 rounded-full shadow-lg"
            height={50}
            width={140}
            src="/assets/Profile.png" // Path to your avatar image
            alt="User Image"
          />
        </div>
        {isDropdownOpen && (
          <div className="absolute top-10 right-0 bg-white border-4 border-blue-600 rounded-lg shadow-md px-20">
            <ul>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
