"use client";
import React, { useState } from "react";
import Tab from "../../(components)/Tab";
import SideNav from "../../(components)/sideNav";
import UpcomingEvents from "../../(components)/Hycares_Hub/UpcomingEvents";
import FeaturedArticles from "../../(components)/Hycares_Hub/FeaturedArticles";
import MobileNavBar from "../../(components)/mobileNavBar";
import Header from "../../(components)/Header";
// The main page component that renders the tabs.
const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Upcoming Events");

  // Sample data can be replaced with actual data fetched from an API.
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
      {/* <MobileNavBar/> */}
      <main className="flex ">
        <SideNav />
        <MobileNavBar />
        <div className="p-4 ">
          <h1 className="text-center text-2xl font-bold mb-4">HyCare HUB</h1>
          <div className="flex items-center justify-center">
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
          {activeTab === "Upcoming Events" && (
            <UpcomingEvents events={events} />
          )}
          {activeTab === "Featured Articles" && (
            <FeaturedArticles articles={articles} />
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
