// Import necessary dependencies
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa"; // Import the icons you need
import Link from "next/link";
export default function LastSection() {
  return (
    <>
      <section className="p-8 bg-white flex items-center justify-items-center flex-col text-black">
        <h1 className="text-2xl font-bold mb-2">
          Here&apos;s how to get therapy
        </h1>
        <p className="text-sm mb-8">Your health your call </p>
        <section className="flex justify-between gap-5 mx-auto flex-row">
          <div className="flex flex-col  items-center text-center">
            <Image src={"/no1.png"} width={60} height={60} alt={"no1"}></Image>
            <h2 className="font-bold">Student Id or email</h2>
            <p className="text-blue-600 text-sm">
              Sign up or login with your details to continue therapy{" "}
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src={"/no2.png"} width={60} height={60} alt={"no2"}></Image>
            <h2 className="font-bold">Talk to therapists</h2>
            <p className="text-blue-600 text-sm">
              Tell as your issues, we will find you a therapist to talk to
            </p>
          </div>
          <div className="flex flex-col  items-center text-center">
            <Image src={"/no3.png"} width={60} height={60} alt={"no3"}></Image>
            <h2 className="font-bold">Stay connected with Hygieiora</h2>
            <p className="text-blue-600 text-sm">
              Stay connected to therapist and volunteers{" "}
            </p>
          </div>
        </section>
        <Link href={"/Pages/question_to_call"}>
          <button className="p-3 font-semi-bold text-blue-600 border border-blue-600 rounded-full px-10 font-semibold mt-10">
            Start Now
          </button>
        </Link>
      </section>
    </>
  );
}
