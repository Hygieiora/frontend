// import { MdEmail } from "react-icons/md";
// import { IoMdPerson, IoLogoWhatsapp } from "react-icons/io";
// import { AiFillEyeInvisible } from "react-icons/ai";
// //import LoginImage from "./LoginImage";
// import SecondLoginImage from "./SecondLoginImage";
// import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

import { MontserratBold, SpaceBold } from "@/app/(fonts)/font";
import { Email, Google, Lock } from "@mui/icons-material";
import clsx from "clsx";

export default function LoginPage() {
  return (
    <main
      className={
        " min-h-screen flex justify-center items-center  pt-10 pb-6 px-4"
      }
    >
      <div className=" w-full sm:w-1/2">
        <h1
          className={clsx(
            " text-blue-600 text-lg sm:text-3xl",
            `${MontserratBold.className}`
          )}
        >
          Welcome back!
        </h1>
        <h1
          className={clsx("text-lg sm:text-3xl", `${MontserratBold.className}`)}
        >
          Log In
        </h1>
        <form className={clsx("flex flex-col gap-4")}>
          <div className={clsx("flex flex-col gap-2 ")}>
            <label>Email Address</label>
            <div
              className={clsx(
                " flex flex-between items-center",
                " border-2 border-gray-600 p-2 rounded-md"
              )}
            >
              <input
                type="text"
                placeholder="Email"
                className=" flex-1 h-full outline-none"
                required
              />
              <Email sx={{ color: "gray" }} />
            </div>
          </div>
          <div className={clsx("flex flex-col gap-2")}>
            <label>Password</label>
            <div
              className={clsx(
                " flex flex-between items-center",
                " border-2 border-gray-600 p-2 rounded-md"
              )}
            >
              <input
                type="text"
                placeholder="Password"
                className=" flex-1 h-full outline-none"
                required
              />
              <Lock sx={{ color: "gray" }} />
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className=" flex gap-1">
              <input type="checkbox" />
              Remember Me
            </div>
            <div>
              <h1 className=" text-blue-500">Forgot Password?</h1>
            </div>
          </div>
          <div className=" w-full  flex justify-between font-bold gap-6">
            <button
              className={clsx(
                " p-4 rounded-xl bg-slate-300 text-gray-400",
                `${MontserratBold.className}`
              )}
            >
              Create Account
            </button>
            <Link
              href={"/"}
              className={clsx(
                " p-4 rounded-xl bg-blue-500 text-white flex-1 text-center",
                `${MontserratBold.className}`
              )}
            >
              Sign In
            </Link>
          </div>
          <button className=" self-center mt-4 flex justify-center items-center gap-2 flex-1">
            <Google /> <h1>Continue with Google</h1>
          </button>
        </form>
      </div>
    </main>
  );
}
