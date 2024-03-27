// pages/index.js
"use client";
import { useState } from "react";
// import Footer from "../../(components)/Footer";
// import Header from "../../(components)/Header";
// import MobileNavBar from "../../(components)/mobileNavBar";
// import SideNav from "../../(components)/sideNav";
import FeelingComponent from "../../(components)/question_to_call/Feelingcomponent";
import GoalsComponent from "../../(components)/question_to_call/GoalsComponent";
import MedicationComponent from "../../(components)/question_to_call/MedicationComponent";
export default function Home() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return <FeelingComponent nextStep={nextStep} />;
    case 2:
      return <GoalsComponent nextStep={nextStep} />;
    case 3:
      return <MedicationComponent />;
    default:
      return ;
  }
}

// // components/FeelingComponent.js
// const FeelingComponent = ({ nextStep }) => {
//   return (
//     <>
//       <main className="">
//         <Header />
//         <h2>How are you feeling?</h2>
//         {/* List of feelings with checkboxes */}

//         {/* Other option with text input */}
//         <button onClick={nextStep}>Next</button>
//       </main>
//       <Footer />
//     </>
//   );
// };

// // components/GoalsComponent.js
// const GoalsComponent = ({ nextStep }) => {
//   return (
//     <>
//       <main>
//         <Header />
//         <h2>What are your goals?</h2>
//         {/* List of goals with checkboxes */}
//         <button onClick={nextStep}>Next</button>
//       </main>
//       <Footer />
//     </>
//   );
// };

// // components/MedicationComponent.js
// const MedicationComponent = ({ nextStep }) => {
//   return (
//     <>
//       <main>
//         {/* <Header /> */}
//         <h2>Are you on medication?</h2>
//         {/* Yes/No options */}
//         {/* Text input for medication details if 'Yes' is selected */}
//         <button onClick={nextStep}>Next</button>
//       </main>
//       {/* <Footer /> */}
//     </>
//   );
// };
