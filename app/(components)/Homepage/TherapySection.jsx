// Import necessary dependencies
import { FaUserMd } from "react-icons/fa"; // Import the icons you need
import { FaLock } from "react-icons/fa"; // Import the icons you need
import Image from "next/image";
export default function TherapySection() {
  return (
    <>
      <section className="p-8 bg-white text-black  md:mx-32 border-b-2 border-blue-600">
        <div className="flex gap-8 items-center justify-center">
          <div>
            <FaLock className="text-blue-600" />,
            <h2 className="text-4xl font-bold mb-6 ">
              Welcome to a space of support and healing
            </h2>
          </div>
          <div>
            <p className="text-sm ">
              At Hygieiora, our vision is to serveas a comprehensive platform
              that promotes mental health awareness, provide support to
              individuals seeking therapy, and facilitate access to professional
              mental health services.
              <br className="" /> Our Ai powered chatbot is built with your
              privacy and protection in mind, so you can trust us with your
              personal data while you seek therapy.
            </p>
          </div>
        </div>
      </section>
      {/* After border */}
      <section className="p-8 bg-white border-b-8 border-blue-600  md:mx-32 gap-8 flex text-black">
        <div className="">
          <Image src={"/map.png"} width={20} height={20} alt="map" />

          <div className="flex ml-6 -mt-6 mb-6 flex-col">
            <h3 className="font-bold text-xl mb-2">Crisis Intervention </h3>
            <p>
              Discover our crisis approach such as hotlines, emergency contacts,
              and tips for managing crises and keeping you safe. View more.
            </p>
          </div>
          <Image src={"/map.png"} width={20} height={20} />
          <div className="flex ml-6 -mt-6 mb-6 flex-col">
            <h3 className="font-bold text-xl mb-2">Privacy policy </h3>
            <p>
              See how we respect and protect your data in compliance with
              industry standards. View more.
            </p>
          </div>
        </div>
        {/* second */}
        <div className="">
          <Image src={"/map.png"} width={20} height={20} alt="map" />

          <div className="flex ml-6 -mt-6 mb-6 flex-col">
            <h3 className="font-bold text-xl mb-2">Client Support </h3>
            <p>
              Discover our resources and tools to support you before, during,
              and after therapy sessions, such as self-help guides. View more.
            </p>
          </div>
          <Image src={"/map.png"} width={20} height={20} alt="map" />

          <div className="flex ml-6 -mt-6 mb-6 flex-col">
            <h3 className="font-bold text-xl mb-2">Accessibility</h3>
            <p>
              Find out how we promote a safe, respectful digital environment
              suitable for therapy.  View more.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
