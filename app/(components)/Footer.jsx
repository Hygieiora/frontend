import Link from "next/link";
import React from "react";
export default function Footer() {
  return (
    <section className=" bg-blue-600 text-white flex flex-col justify-center items-center w-full h-32">
      <p className="font-semibold p-2 text-xl ">Hygieiora</p>
      <p className="text-xs">Get connected and start therapy</p>
      <ul className="mt-3 text-sm flex gap-5">
        <Link href={""}>
          <li>About</li>
        </Link>
        <Link href={""}>
          <li>Privacy</li>
        </Link>
        <Link href={""}>
          <li>Terms</li>
        </Link>
        <Link href={""}>
          <li>Contact</li>
        </Link>
      </ul>
      <p className="text-xs p-3">@ 2024 Hygieiora by Hygieiora Inc</p>
    </section>
  );
}
