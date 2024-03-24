"use client";
import HeroSection from ".//(components)/HeroSection";
import FeaturesSection from ".//(components)/FeaturesSection";
import TherapySection from ".//(components)/TherapySection";
import LastSection from ".//(components)/LastSection";
import Footer from ".//(components)/Footer";
import CookiesSection from ".//(components)/CookiesSection";
import SideNav from ".//(components)/sideNav";
import Header from "./(components)/Header";
export default function HomePage() {
  return (
    <>
      <Header isFirstPage={true} />
      {/* <SideNav /> */}
      <HeroSection />
      <FeaturesSection />
      <TherapySection />
      <LastSection />
      <Footer />
      {/* <CookiesSection /> */}
      {/* Add other sections here */}
    </>
  );
}
