// "use client";

// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import logo from "../../public/logo.png";
// import { Menu, MenuOpen } from "@mui/icons-material";
// import { Button } from "@mui/material";
// import Link from "next/link";
// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import clsx from "clsx";
// import { MontserratBold } from "../(fonts)/font";

// const Header = () => {
//   const path = usePathname();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   return (
//     <>
//       <Sidebar sidebarOpen={sidebarOpen} />
//       <div
//         className={clsx(
//           " bg-white z-10 top-0 sticky w-full",
//           " flex gap-8 justify-between items-center",
//           " border-b-4 border-blue-600 sm:justify-center",
//           `${MontserratBold.className}`
//         )}
//       >
//         <div className=" flex flex-row justify-between items-start">
//           <div>
//             <Image
//               src={logo}
//               alt="logo"
//               title="logo"
//               className=" h-20 w-20 aspect-auto"
//             />
//           </div>
//           <div className=" flex flex-col justify-center items-center gap-2">
//             <h1 className=" text-blue-600 text-base sm:text-2xl">HYGIEIORA</h1>
//             <h1 className="text-sm sm:text-base">Conversations that heal</h1>
//           </div>
//         </div>
//         <div className="  hidden sm:gap-2 sm:flex sm:flex-row sm:justify-center sm:items-center">
//           <Link
//             href={"/"}
//             className={`${path === "/" && "border-b-4 border-blue-600"}`}
//           >
//             Home
//           </Link>
//           <Link
//             href={"/about-us"}
//             className={`${
//               path === "/about-us" && "border-b-4 border-blue-600"
//             }`}
//           >
//             About
//           </Link>
//           <Link
//             href={"/support"}
//             className={`${path === "/support" && "border-b-4 border-blue-600"}`}
//           >
//             Support
//           </Link>
//           <Link
//             href={"/contact"}
//             className={`${path === "/contact" && "border-b-4 border-blue-600"}`}
//           >
//             Contact Us
//           </Link>{" "}
//           <Link
//             href={"/auth/login"}
//             className={`${
//               path === "/auth/login" && "border-b-4 border-blue-600"
//             }`}
//           >
//             Login{" "}
//           </Link>
//         </div>

//         <div className="  sm:hidden">
//           <Button
//             onClick={() => {
//               setSidebarOpen((prevState) => !prevState);
//             }}
//           >
//             {!sidebarOpen ? <Menu /> : <MenuOpen />}
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;import React, { useState } from "react";
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
        <h1 className="text-3xl text-white font-bold">LHygieiora</h1>
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
