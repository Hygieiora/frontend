// Import necessary dependencies
import { Button } from "@material-ui/core";

// Last section component
export function LastSection() {
  return (
    <div className="p-8 bg-white text-black">
      <h2 className="text-2xl mb-4">Here’s how to get therapy</h2>
      <p className="mb-8">Your health your call</p>

      <div className="flex justify-between mb-8">
        <div>
          <h3 className="text-xl mb-2">1 Sign up with student ID or email</h3>
          <p>Sign up/login with your details to continue therapy</p>
        </div>
        {/* Add other steps here */}
      </div>

      <Button variant="contained" color="primary">
        Start Now
      </Button>
    </div>
  );
}

// Footer component
export function Footer() {
  return (
    <div className="p-8 bg-blue-900 text-white">
      {/* Add your footer content here */}
    </div>
  );
}
