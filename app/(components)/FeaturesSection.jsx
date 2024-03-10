// Import necessary dependencies
import { FaLock } from "react-icons/fa"; // Import the icons you need

// Sample data for the features/services, replace with your actual data
const features = [
  {
    icon: <FaLock className="text-blue-500" />, // Replace with your actual icons
    title: "Crisis intervention",
    description:
      "Discover our crisis research such as hotlines, emergency contacts, and tips for recognizing crisis and reaching out safely.",
  },
  // ... Add other features/services here
];

export default function FeaturesSection() {
  return (
    <div className="p-8 bg-blue-900 text-white">
      <h2 className="text-2xl mb-6">
        Welcome to a space of support and healing
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="flex items-center mb-2">
              {feature.icon}
              <h3 className="text-xl ml-2">{feature.title}</h3>
            </div>
            <p className="mb-4">{feature.description}</p>
            <button className="border border-white text-white rounded px-4 py-2">
              View more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
