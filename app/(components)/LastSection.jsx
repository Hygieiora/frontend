// Import necessary dependencies
import { FaArrowRight } from "react-icons/fa"; // Import the icons you need

export default function LastSection() {
  return (
    <div className="p-8 bg-white text-black">
      <h2 className="text-2xl mb-6">Ready to get started?</h2>
      <p className="mb-8">
        Join us today and start your journey to a better life.
      </p>

      <button className="bg-blue-500 text-white rounded px-4 py-2 flex items-center">
        Start Now <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
}
