// Import necessary dependencies
import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the icons you need

export default function CookiesSection() {
  const [isOpen, setIsOpen] = useState(false); // State to control the open/close of the modal

  // Function to open the modal
  const handleOpen = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Show Cookie Policy
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-auto p-8 m-4 max-w-xl">
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
          <div
            onClick={handleClose}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          ></div>
        </div>
      )}
    </div>
  );
}