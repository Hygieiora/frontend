// Import necessary dependencies
import { FaLock } from "react-icons/fa"; // Import the icons you need
import Image from "next/image";
// Sample data for the features/services, replace with your actual data
const features = [
  {
    icon: <FaLock className="text-white text-lg" />, // Replace with your actual icons
    title: "Hygieiora Inc",
    description:
      "Experience the future of therapy with Hygieiora - a unique space for individuals to connect with professional therapists and volunteers in fostering a supportive community dedicated to enhancing mental well-being ",
  },
  // ... Add other features/services here
];

export default function FeaturesSection() {
  return (
    <section className="p-8 bg-blue-600 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
        {features.map((feature, index) => (
          <div key={index} className=" py-10 flex flex-col gap-2 md:ml-32">
            <h2 className="text-4xl">
              <span className="text-blue-900">It&apos;s okay</span> not <br />
              to be okay.
            </h2>
            <div className="flex mb-2">
              {feature.icon}
              <h3 className="text-xl -mt-2 ml-2">{feature.title}</h3>
            </div>
            <p className="mb-4">{feature.description}</p>
            {/* <button className="border border-white text-white rounded px-4 py-2">
              View more
            </button> */}
          </div>
        ))}
        <div className="md:col-span-1 flex justify-center">
          <Image src={"/phones.png"} width={200} height={200} />
        </div>
      </div>
    </section>
  );
}
