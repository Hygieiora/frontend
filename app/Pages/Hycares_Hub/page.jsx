"use client";
import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import SideNav from "../../(components)/sideNav";
import UpcomingEvents from "../../(components)/Hycares_Hub/UpcomingEvents";
import FeaturedArticles from "../../(components)/Hycares_Hub/FeaturedArticles";
import MobileNavBar from "../../(components)/mobileNavBar";
import Header from "../../(components)/Header";

const HycaresHub = () => {
  const [activeTab, setActiveTab] = useState("Upcoming Events");

  const events = [
    { title: "Event 1", description: "This is the description for Event 1." },
    { title: "Event 2", description: "This is the description for Event 2." },
    { title: "Event 3", description: "This is the description for Event 3." },
  ];

  const articles = [
    { title: "Article 1", excerpt: "This is the excerpt for Article 1." },
    { title: "Article 2", excerpt: "This is the excerpt for Article 2." },
    { title: "Article 3", excerpt: "This is the excerpt for Article 3." },
  ];

  return (
    <>
      <Header isFirstPage={false} />
      <main className="flex h-screen overflow-hidden">
        <SideNav />
        <MobileNavBar />
        <div className="p-4 flex flex-col justify-center w-full">
          <h1 className="text-center text-2xl font-bold mb-4">HyCare HUB</h1></div>
        
      </main>
    </>
  );
};

export default HycaresHub;
