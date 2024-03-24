"use client";
import Header from "../../(components)/Header";
import MobileNavBar from "../../(components)/mobileNavBar";
import SideNav from "../../(components)/sideNav";

const Notifications = () => {
  return (
    <>
      <Header isFirstPage={false} />
      <main className=" min-h-screen p-4 flex justify-center items-center">
        <SideNav />
        <MobileNavBar />
        <h1 className=" font-black">
          Hold on, we are connecting you to an expert...
        </h1>
      </main>
    </>
  );
};

export default Notifications;
