import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SideNav = () => {
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0); // State to track active menu index

  const Menus = [
    { title: "Dashboard", src: "Dashboard", link: "" },
    { title: "Blog Post", src: "Blog Post", link: "/Pages/Blog_Post" },
    {
      title: "Hycres Hub",
      src: "Hycres Hub",
      gap: true,
      link: "/Pages/Hycres_Hub",
    },
    {
      title: "Notifications",
      src: "Notifications",
      link: "/Pages/Notifications",
    },
    { title: "Profile", src: "Profile", gap: true, link: "/Pages/Profile" },
  ];

  return (
    <div className="fixed top-0 border-blue-600 border-r-4 sm:relative bg-blue-600 hidden md:block">
      <div
        className={`${
          open ? "w-60" : "w-20"
        } bg-blue-600 h-screen p-5 pt-8 duration-300`}
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
              className={`text-white origin-left font-bold text-xl duration-200 ${
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
                className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-900 text-white text-md font-semibold items-center gap-x-4 ${
                  Menu.gap ? "mt-9" : "mt-2"
                } ${activeMenu === index ? "bg-darkGray text-white" : ""}`}
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
