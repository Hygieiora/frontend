import React from "react";
import SidebarLink from "./SidebarLink";
import {
  AttachMoney,
  CalendarMonth,
  LibraryBooks,
  Message,
  Mic,
  MicExternalOn,
  People,
} from "@mui/icons-material";

export default function Sidebar({ sidebarOpen }) {
  return (
    <div
      className={` w-1/2 h-screen overflow-y-scroll left-0 z-20 fixed flex flex-col items-center bg-blue-600  text-white transition-all duration-500 py-[100px] gap-8 text-base sm:hidden ${
        sidebarOpen ? " top-0 opacity-100" : "opacity-0 -top-full"
      }`}
    >
      <h1 className=" opacity-70">Find help</h1>
      <SidebarLink url={"/"} text={"Home"} />
      <SidebarLink url={"/about"} text={"About Us"} />
      <SidebarLink url={"/support"} text={"Support"} />
      <SidebarLink url={"/contact"} text={"Contact Us"} />
      <SidebarLink url={"/message"} text={"Messages"} icon={<Message />} />
      <SidebarLink url={"/therapists"} text={"Therapists"} />
      <SidebarLink url={"/community"} text={"Community"} icon={<People />} />
      <SidebarLink
        url={"/appointments"}
        text={"Appointments"}
        icon={<CalendarMonth />}
      />
      <h1 className=" opacity-70">Donate</h1>
      <SidebarLink url={"/donate"} text={"Donate"} icon={<AttachMoney />} />
      <SidebarLink url={"/podcast"} text={"Podcast"} icon={<Mic />} />
      <h1 className=" opacity-70">Books</h1>
      <SidebarLink url={"/books"} text={"Books"} icon={<LibraryBooks />} />
    </div>
  );
}
