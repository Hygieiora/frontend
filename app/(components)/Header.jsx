"use client";
import Image from "next/image";
import Link from "next/link";

const Header = ({ isFirstPage }) => {
  return (
    <header className="bg-blue-600 border-b-4 border-blue-600 text-black py-1 flex items-center justify-between px-4">
      <div className="flex items-center">
        <Link href={"/"} className="flex">
          <Image
            width={50}
            height={140}
            src="/assets/splash.png" // Path to your logo image
            alt="Logo"
            className="mr-4"
          />
          <h1 className="text-3xl text-white font-bold mt-3">Hygieiora</h1>
        </Link>
      </div>
      {isFirstPage && (
        <nav className="hidden md:flex flex-grow items-center justify-center">
          <Link
            href="/Pages/Blog_Post  "
            className="text-white hover:text-gray-600 font-bold mx-3"
          >
            Blog Post
          </Link>
          <Link
            href="/Pages/Hycares_Hub"
            className="text-white hover:text-gray-600 font-bold mx-3"
          >
            Hycares Hub
          </Link>
          <Link
            href="/Pages/Notifications"
            className="text-white font-bold hover:text-gray-600 mx-3"
          >
            Notifications
          </Link>
          <Link
            href="/Pages/Profile"
            className="text-white font-bold hover:text-gray-600 mx-3"
          >
            Profile
          </Link>
        </nav>
      )}
      <div className="relative">
        <div className="rounded-full bg-black w-[40px] h-[40px] flex items-center justify-center">
          <Image
            className=" m-3 rounded-full shadow-lg"
            height={30}
            width={30}
            src="/assets/Profile.png" // Path to your avatar image
            alt="User Image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
