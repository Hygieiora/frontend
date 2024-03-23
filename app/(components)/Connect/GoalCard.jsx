import React from "react";

// This component represents a single goal card.
const GoalCard = ({ title, selected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`p-4 bg-white my-2 rounded-md shadow-lg ${
        selected ? "border-blue-500 border-2" : ""
      }`}
    >
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

export default GoalCard;
