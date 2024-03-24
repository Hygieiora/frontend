import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MobileNavBar = () => {
  return (
    <div className="  fixed bottom-0 left-0 w-full bg-blue-600 flex justify-around py-4 px-6 z-50 rounded-t-3xl md:hidden">
      <Link href="/">
        <Image width={30} height={30} src="/assets/Dashboard.png" alt="Home" />
      </Link>
      <Link href="/Pages/Blog_Post">
        <Image width={30} height={30} src="/assets/Blog Post.png" alt="Home" />
      </Link>
      <Link href="/Pages/Hycares_Hub">
        <Image
          width={40}
          height={40}
          src="/assets/Hycres Hub.png"
          alt="Explore"
        />
      </Link>
      <Link href="/Pages/Notifications">
        <Image
          width={30}
          height={30}
          src="/assets/notifications.png"
          alt="Notifications"
        />
      </Link>
      <Link href="/Pages/Profile">
        <Image width={30} height={30} src="/assets/profile.png" alt="Profile" />
      </Link>
    </div>
  );
};

export default MobileNavBar;
