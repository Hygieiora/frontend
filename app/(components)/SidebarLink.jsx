"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ url, text, icon }) => {
  const pathname = usePathname();
  return (
    <Link
      href={url}
      className={`${pathname === url && "border-b-2 border-white flex gap-2"}`}
    >
      {icon && icon}
      {text && text}
    </Link>
  );
};

export default SidebarLink;
