"use client";
import React, { useState } from "react";
<<<<<<< HEAD
// import { Tabs, Tab } from "@nextui-org/tabs";
=======
import Tab from "../../(components)/Tab";
>>>>>>> 1a66090137c067c8d82fab76101bd1b4e857844a
import SideNav from "../../(components)/sideNav";
import UpcomingEvents from "../../(components)/Hycares_Hub/UpcomingEvents";
import FeaturedArticles from "../../(components)/Hycares_Hub/FeaturedArticles";
import MobileNavBar from "../../(components)/mobileNavBar";
import Header from "../../(components)/Header";

<<<<<<< HEAD
/**
 * Represents a page in the Hycares Hub section of a website.
 * Displays a header, a side navigation bar, a mobile navigation bar, and a main content area.
 * The main content area includes a title and is currently empty.
//  * @returns {JSX.Element} The JSX element representing the page layout of the Hycares Hub section.
 */
const HycaresHub = () => {
=======
const HomePage = () => {
>>>>>>> 1a66090137c067c8d82fab76101bd1b4e857844a
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
      {/* Header component */}
      <Header isFirstPage={false} />

      {/* Main content */}
      <main className="flex h-screen overflow-hidden">
        {/* Side navigation bar */}
        <SideNav />

        {/* Mobile navigation bar */}
        <MobileNavBar />

        {/* Main content area */}
        <div className="p-4 flex flex-col justify-center w-full">
          <h1 className="text-center text-2xl font-bold mb-4">HyCare HUB</h1>
<<<<<<< HEAD
          {/* Content goes here */}
=======
          <div className="flex items-center justify-center mb-4">
            <Tab
              label="Upcoming Events"
              isActive={activeTab === "Upcoming Events"}
              onClick={() => setActiveTab("Upcoming Events")}
            />
            <Tab
              label="Featured Articles"
              isActive={activeTab === "Featured Articles"}
              onClick={() => setActiveTab("Featured Articles")}
            />
          </div>
          <div className="flex-grow overflow-y-auto">
            {activeTab === "Upcoming Events" && (
              <UpcomingEvents events={events} />
            )}
            {activeTab === "Featured Articles" && (
              <FeaturedArticles articles={articles} />
            )}
          </div>
>>>>>>> 1a66090137c067c8d82fab76101bd1b4e857844a
        </div>
      </main>
    </>
  );
};

export default HomePage;
