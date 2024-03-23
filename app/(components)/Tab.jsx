import React from "react";

// This component represents a single tab.
const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 w-96  ${
        isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {label}
    </button>
  );
};

export default Tab;
