import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SideNav = () => {
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0); // State to track active menu index

  const Menus = [
    { title: "Dashboard", src: "DashBoard", link: "/" },
    { title: "Blog Post", src: "Blog Post", link: "/Pages/Blog_Post" },
    {
      title: "Hycares Hub",
      src: "Hycres Hub",
      gap: true,
      link: "/Pages/Hycares_Hub",
    },
    {
      title: "Notifications",
      src: "Notifications",
      link: "/Pages/Notifications",
    },
    { title: "Profile", src: "Profile", gap: true, link: "/Pages/Profile" },
  ];

  return (
    <div className="h-screen border-blue-600 bottom-0 border-r-4 bg-blue-600 sticky top-0 hidden md:block">
      <div
        className={`${
          open ? "w-60" : "w-20"
        } bg-blue-600  p-5 pt-8 duration-300`}
      >
        <Image
          width={28}
          height={28}
          src="/assets/control.png"
          className={`absolute mt-10 cursor-pointer -right-3 top-9 w-7 border-white border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
          alt={"control"}
        />
        <ul className="">
          {Menus.map((Menu, index) => (
            <a href={Menu.link} key={index}>
              <span
                className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-900 text-white text-md font-semibold items-center gap-x-4 ${
                  Menu.gap ? "mt-9" : "mt-9"
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
