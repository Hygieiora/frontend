"use client";

import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOnOutlined,
  PhoneAndroidOutlined,
  Twitter,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

// import { MontserratBold, SpaceBold } from "../(fonts)/font";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div
      className={` bottom-0  bg-blue-600 flex flex-col justify-between gap-8 sm:gap-20 text-white p-4 border-t-2 border-white `}
    >
      <div className=" flex justify-start flex-col  gap-4 w-full sm:w-4/5 sm:flex-row sm:gap-28">
        <div className=" flex gap-10">
          <div className=" flex-1 flex flex-col gap-4">
            <Link href={"/"}>Hygieiora </Link>
            <Link href={"/our-project"}>Our Project</Link>
            <Link href={"/blog"}>Our Blog </Link>
            <Link href={"/about-us"}>About Us </Link>
          </div>
          <div className=" flex-1 flex flex-col gap-4">
            <div className=" flex gap-2 items-center">
              <PhoneAndroidOutlined />
              <h1>xxxxxxxxxxxxxxxxx</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" text-2xl">@</h1>
              <h1>xxxxxxxxxxx@xxxx</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <LocationOnOutlined />
              <h1>HO, UHAS</h1>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h1 className={` text-sm sm:text-base`}>
            Subsribe to our newsletter to receive the latest updates
          </h1>
          <input
            type=" text"
            placeholder="Your email address"
            className=" bg-white text-black p-2 rounded-md text-sm sm:text-base"
          />
          <button
            className={` bg-black py-2 px-8 rounded-md text-white w-max  text-sm sm:text-base`}
          >
            Sign Me Up
          </button>
        </div>
      </div>
      <div className=" flex justify-between gap-6 w-full sm:w-4/5">
        <div>
          <h1 className=" text-center">
            Copyright {date}. Hygieiora. All rights reserved
          </h1>
        </div>
        <div className=" flex gap-2">
          <Link href={"$"} target="_blank" title="Facebook page link">
            <Facebook />
          </Link>

          <Link href={"#"} target="_blank" title="Instagram page link">
            <Instagram />
          </Link>
          {/* <Twitter /> */}
          <Link href={"#"} target="_blank" title="LinkedIn page link">
            <LinkedIn />
          </Link>
        </div>
      </div>
    </div>
  );
}
