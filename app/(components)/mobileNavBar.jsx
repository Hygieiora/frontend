import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MobileNavBar = () => {
  return (
    <div className="  fixed bottom-0 left-0 w-full bg-blue-600 flex justify-around py-4 px-6 z-50 rounded-t-3xl">
      <Link href="">
        {/* <a className="text-white flex flex-col items-center"> */}
        <Image width={30} height={30} src="/assets/Dashboard.png" alt="Home" />
        {/* </a> */}
      </Link>
      <Link href="/Pages/Blog_Post">
        {/* <a className="text-white flex flex-col items-center"> */}
        <Image width={30} height={30} src="/assets/Blog Post.png" alt="Home" />
        {/* </a> */}
      </Link>
      <Link href="/Pages/Hycres_Hub">
        {/* <a className="text-white flex flex-col items-center"> */}
        <Image
          width={35}
          height={35}
          src="/assets/Hycres Hub.png"
          alt="Explore"
        />
        {/* </a> */}
      </Link>
      <Link href="/Pages/Notifications">
        {/* <a className="text-white flex flex-col items-center"> */}
        <Image
          width={30}
          height={30}
          src="/assets/notifications.png"
          alt="Notifications"
        />
        {/* </a> */}
      </Link>
      <Link href="/Pages/Profile">
        {/* <a className="text-white flex flex-col items-center"> */}
        <Image width={30} height={30} src="/assets/profile.png" alt="Profile" />
        {/* </a> */}
      </Link>
    </div>
  );
};

export default MobileNavBar;
