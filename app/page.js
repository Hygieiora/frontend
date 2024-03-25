"use client";
import HeroSection from ".//(components)/Homepage/HeroSection";
// import HomeSection from ".//(components)/HomeSection";
import FeaturesSection from ".//(components)/Homepage/FeaturesSection";
import TherapySection from ".//(components)/Homepage/TherapySection";
import LastSection from ".//(components)/Homepage/LastSection";
import Footer from ".//(components)/Footer";
import CookiesSection from ".//(components)/Homepage/CookiesSection";
import SideNav from ".//(components)/sideNav";
import Header from "./(components)/Header";
import MobileNavBar from ".//(components)/mobileNavBar";
export default function HomePage() {
  return (
    <>
      <Header isFirstPage={true} />
      {/* <SideNav /> */}
      <CookiesSection />
      <HeroSection />
      <FeaturesSection />
      <TherapySection />
      <LastSection />
      <Footer />
      <MobileNavBar />
    </>
  );
}
