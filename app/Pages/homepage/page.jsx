// Import your section components
'use client';
import HeroSection from "../../(components)/HeroSection";
import FeaturesSection from "../../(components)/FeaturesSection";
import TherapySection from "../../(components)/TherapySection";
import LastSection from "../../(components)/LastSection";   
import Footer from "../../(components)/Footer";
import CookiesSection from "../../(components)/CookiesSection";
export default function HomePage() {
  return (
    <>
    {/* <Header /> */}
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