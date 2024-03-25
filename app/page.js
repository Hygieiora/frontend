"use client";
import HeroSection from ".//(components)/HeroSection";
// import HomeSection from ".//(components)/HomeSection";
import FeaturesSection from ".//(components)/FeaturesSection";
import TherapySection from ".//(components)/TherapySection";
import LastSection from ".//(components)/LastSection";
import Footer from ".//(components)/Footer";
import CookiesSection from ".//(components)/CookiesSection";
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
      {/* <HomeSection /> */}
      <FeaturesSection />
      <TherapySection />
      <LastSection />
      <Footer />
      <MobileNavBar />
      {/* <CookiesSection /> */}
      {/* Add other sections here */}
    </>
  );
}
