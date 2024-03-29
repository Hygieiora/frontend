import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CookiesSection() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init(); // Initialize the AOS library
    }
  }, []); // Run only once on component mount

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed -ml-4 py-4 px-2 bottom-0 w-full z-10"
          data-aos="slide-in" // This will animate the div to slide up
        >
          <div className="bg-gray-400 rounded-lg overflow-auto p-8 m-4 w-full">
            <button onClick={handleClose} className="float-right">
              <FaTimes />
            </button>
            <h2 className="text-2xl mb-4">Your Privacy Choices</h2>
            <p>
              This website uses cookies and other tracking technologies to
              enhance user experience...
            </p>
            {/* Add the rest of your text here */}
            <button
              onClick={handleClose}
              className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
