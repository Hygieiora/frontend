"use client";
import SideNav from "../../(components)/sideNav";
import MobileNavBar from "../../(components)/mobileNavBar";
import Link from "next/link";
import Image from "next/image";
import Header from "../../(components)/Header";
import Footer from "../../(components)/Footer";
const Profile = () => {
  return (
    <>
      <Header />
      <main className=" min-h-screen flex text-sm sm:text-base">
        <SideNav />
        <MobileNavBar />
        <section className="w-full bg-white m-5 border-blue-600 ">
          <div className="flex flex-col border rounded border-blue-600 items-center pb-10">
            <div className="flex items-center font-bold text-3xl justify-center text-center text-white w-full p-12 bg-blue-600">
              STUDENT PROFILE
            </div>
            <Image
              className="w-30 h-30 m-3 rounded-full shadow-lg"
              height={120}
              width={120}
              src="/logo.png"
              alt="User Image"
            />
            <h5 className="mb-1 text-2xl font-bold text-gray-500 dark:text-gray-600">
              Student Name
            </h5>
            <p className="text-xl font-bold text-gray-500 dark:text-gray-300">
              Student
            </p>
            <p className="text-xl font-bold text-gray-500 dark:text-gray-300">
              Student ID: 123456
            </p>
            <p className="text-xl font-bold text-gray-500 dark:text-gray-300">
              Index Number: 123456
            </p>
          </div>

          {/* Profile Details Section */}
          <section className="w-full text-xl font-bold text-gray-500 bg-white border mt-10 border-blue-600 rounded-lg shadow  ">
            <div className="flex flex-col items-center border-b border-blue-600 mx-5 p-3">
              Profile Details
            </div>
            {/* grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <div className="mb-4">
                {/* Surname */}
                <label className="block text-sm mb-3 font-bold text-gray-700">
                  Surname
                </label>
                <input
                  id=""
                  type="text"
                  className="border  border-gray-300 rounded-md p-2 w-full"
                  placeholder="First Name"
                />
              </div>
              {/* Other Name(s) */}
              <div className="mb-4">
                <label className="block mb-3 text-sm font-bold text-gray-700">
                  Other Name(s)
                </label>
                <input
                  id=""
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Surname "
                />
              </div>
              {/* Birth Date */}
              <div className="mb-4">
                <label className="block mb-3 text-sm font-bold text-gray-700">
                  Birth Date
                </label>
                <input
                  id=""
                  type="Date"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Monday,February #, 20##"
                />
              </div>
              {/* Gender */}
              <div className="mb-4">
                <label className="block mb-3 text-sm font-bold text-gray-700">
                  Gender
                </label>
                <input
                  id=""
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Male"
                />
              </div>
              {/* School Email Address */}
              <div className="mb-4">
                <label className="block mb-3 text-sm font-bold text-gray-700">
                  School Email Address{" "}
                </label>
                <input
                  id=""
                  type="email"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="student@st.knust.edu.gh"
                />
              </div>
              {/* KNUST Mobile Number*/}
              <div className="mb-4">
                <label className="block mb-3 text-sm font-bold text-gray-700">
                  KNUST Mobile Number
                </label>
                <input
                  id=""
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="050#######"
                />
              </div>
              {/*Country */}
              <div className="mb-4">
                <label className="block mb-3 text-sm font-bold text-gray-700">
                  Country
                </label>
                <input
                  id=""
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Ghana"
                />
              </div>
              {/* Region*/}
              <div className="mb-4">
                <label className="block mb-3 text-sm font-bold text-gray-700">
                  Region{" "}
                </label>
                <input
                  id=""
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Choose 1 out of the 16"
                />
              </div>
            </div>{" "}
            {/* buttons */}
            <div className="flex items-center  justify-center gap-4 p-4">
              <Link href="/">
                <button className="rounded text-red-600 border border-red-600 px-2 sm:px-8 py-2 sm:py-2 text-md sm:text-sm cursor-pointer hover:opacity-80">
                  Back to Main Menu{" "}
                </button>
              </Link>
              <Link href="">
                <button className="rounded bg-blue-600 text-white border border-blue-600 px-2 sm:px-8 py-2 sm:py-2 text-md sm:text-sm cursor-pointer hover:opacity-80">
                  Update
                </button>
              </Link>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
