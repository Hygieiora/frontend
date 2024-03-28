// Import necessary libraries
import { useState } from "react";
import Footer from "../../(components)/Footer";
import Header from "../../(components)/Header";
import MobileNavBar from "../../(components)/mobileNavBar";
import SideNav from "../../(components)/sideNav";
// Define the emotions as an array
const emotions = [
  "Anxious",
  "Angry",
  "Depressed",
  "Sad",
  "Scared",
  "Stressed",
  "Excited",
  "Happy",
  "Overwhelmed",
  "Surprised",
];

// Define the main component
const FeelingComponent = ({ nextStep }) => {
  // Define state variables
  const [selectedEmotion, setSelectedEmotion] = useState("");
  // const [otherEmotion, setOtherEmotion] = useState("");

  // Define event handlers
  const handleEmotionChange = (event) => {
    setSelectedEmotion(event.target.value);
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
            How are you feeling?
          </h1>
          <form onSubmit={handleFormSubmit}>
            {emotions.map((emotion) => (
              <div className="" key={emotion}>
                <input
                  type="checkbox"
                  id={emotion}
                  name="emotion"
                  className="bg-blue mr-3"
                  value={emotion}
                  onChange={handleEmotionChange}
                />
                <label htmlFor={emotion}>{emotion}</label>
              </div>
            ))}
            <div className="flex flex-col">
              <div className="flex">
                {" "}
                <input type="checkbox" htmlFor="other" />
                <label className="ml-3">
                  Other? Please write in the box below
                </label>
              </div>

              <input
                type="textarea"
                id="other"
                name="other"
                className="border-2 rounded-md border-blue-600"
                // value={otherEmotion}
                // onChange={handleOtherEmotionChange}
              />
            </div>
            {/* <button type="submit">Submit</button> */}
            <button
              className="bg-blue-600 mt-5 rounded-md text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2  px-4 py-2 mr-2"
              onClick={nextStep}
            >
              Next
            </button>
          </form>
        </section>
      </main>
      <MobileNavBar />
      <Footer />
    </>
  );
};

export default FeelingComponent;
