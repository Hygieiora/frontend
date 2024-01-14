import { PlayCircleOutline } from "@mui/icons-material";
import Link from "next/link";
import WeCareImage from "../public/wecareimage.png";
import HappyForYou from "../public/happyforyou.png";
import Welcome from "../public/welcome.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col p-10 text-sm sm:text-base">
      <div className=" flex-1 flex flex-col gap-10 sm:gap-14">
        <div className=" flex flex-col md:flex-row gap-2">
          <div className=" flex-1  flex flex-col gap-4 ">
            <h1 className="  text-gray-600 font-bold">Welcome back!</h1>
            <h1 className=" font-black text-lg ">
              <span className=" text-red-600">It&apos;s okay</span>
              <span className=" text-blue-700"> not to be okay</span>
            </h1>
            <h1 className=" font-bold text-base sm:text-lg">
              Don&apos;t hide behind your pain, tell someone your pain
            </h1>

            <p>
              Experience the future of the therapy with
              <span className=" font-black"> Hygieiora</span> - a unique space
              for individuals to connect with professional therapists and
              volunteers in fostering a supportive community dedicated to
              enhancing mental well-being.
            </p>
          </div>
          <div className=" flex justify-center items-center rounded-lg  ">
            <Image
              alt="we care"
              src={WeCareImage}
              className=" object-contain aspect-auto  "
            />
          </div>
        </div>
        <div className=" flex-1 flex flex-col gap-12">
          <div className=" flex flex-col gap-2 sm:flex-row">
            <div className=" flex-1 flex flex-col gap-2 justify-center">
              <h1 className=" font-black text-xl sm:text-3xl">
                The Rain gives us love for the sun
              </h1>
              <p>
                Life can sometimes feel like an uphill battle. There is no
                reason to climb this hill alone
              </p>
              <Link href={"/therapist"} className=" font-bold">
                How to talk to the therapist
                <span>
                  <PlayCircleOutline />
                </span>
              </Link>
            </div>

            <div className="  rounded-lg relative  flex justify-center items-center">
              <Image
                alt="happy for you image"
                src={HappyForYou}
                className=" object-contain  aspect-auto h-1/2 w-1/2 sm:h-fit sm:w-fit rounded-lg bg-black bg-opacity-50"
              />
              <div className="absolute bottom-0 p-2 bg-black bg-opacity-60 text-center rounded-lg w-1/2 sm:w-full">
                <h1 className="text-white">Happy for you</h1>
              </div>
            </div>
          </div>
          <div className=" relative flex-1 text-white ">
            <Image alt="welcome" src={Welcome} className="" />
            <div className="absolute bottom-0 p-2 bg-black bg-opacity-40 w-full  flex flex-col gap-2">
              <div className=" flex gap-2 ">
                <h1>2 Aug 2023</h1>
                <h1 className=" font-bold">Admin</h1>
              </div>
              <h1 className="text-white font-bold">
                Welcome to the commnunity
              </h1>
              <p>Your mental health, our priority</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
