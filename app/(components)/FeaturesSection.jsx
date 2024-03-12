// Import necessary dependencies
import { FaLock } from "react-icons/fa"; // Import the icons you need
import Image from "next/image";
// Sample data for the features/services, replace with your actual data
const features = [
  {
    icon: <FaLock className="text-blue-500" />, // Replace with your actual icons
    title: "Crisis intervention",
    description:
     "Experience the future of therapy with Hygieiora - a unique space for individuals to connect with professional therapists and volunteers in fostering a supportive community dedicated to enhancing mental well-being "
  },
  // ... Add other features/services here
];

export default function FeaturesSection() {
  return (
    <section className="p-8 bg-blue-600 text-white">
      <h2 className="text-4xl ">
        <span className="text-blue-900">It's okay</span> not <br/>to be okay.
      </h2>

      <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="flex items-center mb-2">
              {feature.icon}
              <h3 className="text-xl ml-2">{feature.title}</h3>
            </div>
            <p className="mb-4">{feature.description}</p>
            {/* <button className="border border-white text-white rounded px-4 py-2">
              View more
            </button> */}
          </div>
        ))}
        <Image src={'/phones.png'} className="-mt-14" width={200} height={200}></Image>
      </div>
    </section>
  );
}