// Import necessary dependencies
import { FaUserMd } from "react-icons/fa"; // Import the icons you need

export default function TherapySection() {
  return (
    <div className="p-8 bg-white text-black">
      <h2 className="text-2xl mb-6">Here’s how to get therapy</h2>
      <p className="mb-8">Your health your call</p>

      <div className="flex justify-between mb-8">
        <div>
          <FaUserMd className="text-blue-500 mb-2" />
          <h3 className="text-xl mb-2">1 Sign up with student ID or email</h3>
          <p>Sign up/login with your details to continue therapy</p>
        </div>
        {/* Add other steps here */}
      </div>

      <button className="bg-blue-500 text-white rounded px-4 py-2">
        Start Now
      </button>
    </div>
  );
}