// components/UpcomingEvents.js
import React from "react";

// This component represents the content of the "Upcoming Events" tab.
const UpcomingEvents = ({ events }) => {
  return (
    <div>
      {events.map((event, index) => (
        <div key={index} className="p-4 bg-white my-2 rounded-md shadow-lg">
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p className="text-gray-600">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
