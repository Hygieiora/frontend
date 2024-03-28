// Import necessary libraries
import { useState } from "react";
import Footer from "../../(components)/Footer";
import Header from "../../(components)/Header";
import MobileNavBar from "../../(components)/mobileNavBar";
import SideNav from "../../(components)/sideNav";
// Define the emotions as an array
const emotions = ["Yes", "No", ,];

// Define the main component
const MedicationComponent = ({ prevStep }) => {
  // Define state variables
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [otherEmotion, setOtherEmotion] = useState("");

  // Define event handlers
  const handleEmotionChange = (event) => {
    setSelectedEmotion(event.target.value);
  };

  const handleOtherEmotionChange = (event) => {
    setOtherEmotion(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., send the data to an API or update your state
  };

  // Render the component
  return (
    <>
      <Header />
      <main className="flex h-screen">
        <SideNav />
        <section className="flex flex-col p-5">
          <h1 className="text-center text-semibold text-2xl">
            Are you on medication?{" "}
          </h1>
          <form onSubmit={handleFormSubmit} className="flex flex-col">
            {emotions.map((emotion) => (
              <div className="" key={emotion}>
                <input
                  type="radio"
                  id={emotion}
                  name="emotion"
                  className="bg-blue mr-3"
                  value={emotion}
                  onChange={handleEmotionChange}
                />
                <label htmlFor={emotion}>{emotion}</label>
              </div>
            ))}
            <input
              className="border rounded-md border-blue-600"
              type="text"
              id="other"
              name="other"
            />
            <div>
              <button
                className="bg-blue-600 mt-5 rounded-md text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2  px-4 py-2 mr-2"
                onClick={prevStep}
              >
                Prev
              </button>
              <button
                className="bg-blue-600 rounded-md text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2  px-4 py-2 mr-2"
                //   onClick={nextStep}
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
      <MobileNavBar />
      <Footer />
    </>
  );
};

export default MedicationComponent;
