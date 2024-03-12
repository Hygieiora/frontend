"use client";
// import "../globals.css";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import googleLogo from "../../public/googleLogo.jpg"; // Ensure you have the Google logo in your public folder

// Functional component for the account creation form
const AccountForm = () => {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted"); // Placeholder for form submission logic
  };

  // State variables for each input field
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("F");
  const [password, setPassword] = useState("");

  // Form layout with Tailwind CSS classes
  return (
    <>
      <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow-sm">
        <h2 className="text-blue-600 font-bold text-3xl mt-20 leading-normal">
          START YOUR JOURNEY
        </h2>
        <h2 className="text-2xl font-bold text-gray-900">Create new account</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          {/* Input fields with appropriate types and Tailwind CSS styling */}
          <div className="relative mb-4">
            <input
              type="text"
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className={`w-full p-3 border border-gray-300 rounded-md transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                fullName ? "pt-7" : ""
              }`}
            />
            <label
              htmlFor="fullname"
              className={`absolute left-3 top-3 transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                fullName ? "text-xs top-2" : "text-sm top-3.5"
              }`}
            >
              Full name
            </label>
          </div>
          {/* Repeat the same structure for other input fields */}
          <div className="relative mb-4">
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className={`w-full p-3 border border-gray-300 rounded-md transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                phoneNumber ? "pt-7" : ""
              }`}
            />
            <label
              htmlFor="phoneNumber"
              className={`absolute left-3 top-3 transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                phoneNumber ? "text-xs top-2" : "text-sm top-3.5"
              }`}
            >
              Phone Number
            </label>
          </div>
          {/* Email address */}
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full p-3 border border-gray-300 rounded-md transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                email ? "pt-7" : ""
              }`}
            />
            <label
              htmlFor="email"
              className={`absolute left-3 top-3 transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                email ? "text-xs top-2" : "text-sm top-3.5 "
              }`}
            >
              Email address
            </label>
          </div>
          {/* Password */}
          <div className="relative mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full p-3 border border-gray-300 rounded-md transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                password ? "pt-7" : ""
              }`}
            />
            <label
              htmlFor="password"
              className={`absolute left-3 top-3 transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                password ? "text-xs top-2" : "text-sm top-3.5"
              }`}
            >
              Password
            </label>
          </div>
          {/* Terms and Conditions */}
          <div className="flex flex-col items-center justify-center text-sm text-gray-500">
            <p>
              By clicking "Create Account", you accept the
              <Link
                href="/pages/terms"
                className="text-blue-500 hover:underline"
              >
                Terms
              </Link>
              , and ,
              <Link
                href="/pages/privacy"
                className="text-blue-500 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              of Hygieiora.
            </p>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white p-4 rounded-md"
          >
            Create Account
          </button>

          <div className="flex flex-col items-center space-y-3 p-3">
            {/* Divider with text 'or' */}
            <div className="w-full border-t border-gray-300">
              <div className="relative -top-3 bg-white">
                <span className="text-sm text-gray-500 p-5 flex flex-col items-center justify-center">
                  or
                </span>
              </div>
            </div>

            {/* Continue with Google button */}
            <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md border-gray-300 shadow-sm hover:shadow-md">
              <Image
                src="/googleLogo.jpg"
                alt="Google Logo"
                width={20}
                height={20}
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

            {/* Already on Hygieiora? Sign in */}
            <p className="text-sm text-gray-600">
              Already on Hygieiora?
              <a href="/pages/signin" className="text-blue-500 hover:underline">
                {" "}
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountForm;
