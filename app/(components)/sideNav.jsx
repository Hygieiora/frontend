import React, { useState } from "react";
// import axios from 'axios';
import Link from "next/link";
import Image from "next/image";

const SideNav = () => {
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0); // State to track active menu index

  const Menus = [
    { title: "Dashboard", src: "Chat", link: "/" },
    { title: "Blog Post", src: "Search", link: "/Pages/Blog_Post" },
    {
      title: "Hycres_Hub",
      src: "Folder",
      gap: true,
      link: "/Pages/Hycres Hub",
    },
    { title: "Notifications", src: "Calendar", link: "/Pages/Notifications" },
    { title: "Profile", src: "User", gap: true, link: "/Pages/Profile" },
  ];
  return (
    <div className="hidden border-blue-600 border-r-4 sm:flex relative bg-white ">
      <div
        className={`${
          open ? "w-60" : "w-20"
        } bg-white h-screen p-5 pt-8  duration-300`}
      >
        <Image
          width={28}
          height={28}
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
          alt={"control"}
        />
        <Link href="/homepage">
          <div className="flex gap-x-4 items-center">
            <Image
              width={28}
              height={28}
              src="/logo.png"
              className={`cursor-pointer duration-500 h-10 w-10 ${
                open && "rotate-[360deg]"
              }`}
              alt={"logo"}
            />
            <h1
              className={`text-black origin-left font-bold text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Hygieiora
            </h1>
          </div>
        </Link>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <a href={Menu.link} key={index}>
              <span
                className={`flex rounded-md p-2 cursor-pointer hover:bg-blue-600 hover:text-white text-black text-md font-semibold items-center gap-x-4 ${
                  Menu.gap ? "mt-9" : "mt-2"
                } ${activeMenu === index ? "bg-darkGray text-black" : ""}`}
              >
                <Image
                  width={28}
                  height={28}
                  src={`/assets/${Menu.src}.png`}
                  alt={"menu"}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </span>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
