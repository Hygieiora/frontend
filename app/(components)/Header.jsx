"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Menu, MenuOpen } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./Sidebar";
import clsx from "clsx";
import { MontserratBold } from "../(fonts)/font";

const Header = () => {
  const path = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} />
      <div
        className={clsx(
          " bg-white z-10 top-0 sticky w-full",
          " flex gap-8 justify-between items-center",
          " border-b-4 border-blue-600 p-2 ",
          `${MontserratBold.className}`
        )}
      >
        <div className=" flex flex-col justify-center items-center">
          <div className=" flex  justify-center items-center gap-2">
            <Image
              src={logo}
              alt="logo"
              title="logo"
              className=" h-20 w-20 aspect-auto"
            />
            <h1 className=" text-blue-600 text-base sm:text-xl">HYGIEIORA</h1>
          </div>

          {/* <div>
            <h1 className="text-sm sm:text-base">Conversations that heal</h1>
          </div> */}
        </div>
        <div className="  hidden sm:gap-2 sm:flex sm:flex-row sm:justify-center sm:items-center">
          <Link
            href={"/"}
            className={`${path === "/" && "border-b-4 border-blue-600"}`}
          >
            Home
          </Link>
          <Link
            href={"/about-us"}
            className={`${
              path === "/about-us" && "border-b-4 border-blue-600"
            }`}
          >
            About
          </Link>
          <Link
            href={"/support"}
            className={`${path === "/support" && "border-b-4 border-blue-600"}`}
          >
            Support
          </Link>
          <Link
            href={"/contact"}
            className={`text-center ${
              path === "/contact" && "border-b-4 border-blue-600 "
            }`}
          >
            Contact Us
          </Link>
          <Link
            href={"/therapists"}
            className={`${
              path === "/therapists" && "border-b-4 border-blue-600"
            }`}
          >
            Therapists
          </Link>
          <Link
            href={"/auth/login"}
            className={`${
              path === "/auth/login" && "border-b-4 border-blue-600"
            }`}
          >
            Login
          </Link>
        </div>

        <div className="  sm:hidden">
          <Button
            onClick={() => {
              setSidebarOpen((prevState) => !prevState);
            }}
          >
            {!sidebarOpen ? <Menu /> : <MenuOpen />}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
