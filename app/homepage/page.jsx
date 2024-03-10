// Import necessary dependencies
import { Container } from "@material-ui/core";

// Import your section components
import HeroSection from "../(components)/HeroSection.jsx";
import FeaturesSection from "../(components)/FeaturesSection";
import TherapySection from "../(components)/TherapySection";
import LastSection from "../(components)/LastSection";

// import OtherSection from './OtherSection'; // Import other sections as needed

export default function HomePage() {
  return (
    <Container>
      {/* <Header /> */}
      <HeroSection />
      <FeaturesSection />
      <TherapySection />
      <LastSection />
      {/* <Footer /> */}
      {/* <OtherSection /> */}
      {/* Add other sections here */}
    </Container>
  );
}
