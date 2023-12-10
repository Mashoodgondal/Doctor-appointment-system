import React from "react";
import Image from "next/image";
import appointment from "../appointment/page";
import first from "../../public/image/3rd.jpg";
import Link from "next/link";
const First = () => {
  return (
    <div>
      {" "}
      <div className="flex">
        <div className="w-1/2 p-4 mt-10">
          <h1 className="text-xl font-semibold">
            <span className="text-blue-500">Doctor</span>{" "}
            <span className="text-red-500 text-2xl">Appointment</span>{" "}
            <span className="text-green-500">System</span>
          </h1>

          <p className="text-gray-600 mt-5 p-4 text-lg">
            Creating a doctor appointment system involves building a web
            application where users can schedule appointments with doctors.
            Below, I'll outline the key features and components you might want
            to include in your system. Keep in mind that this is a high-level
            overview, and you might need to adapt it based on specific
            requirements.
          </p>
          <Link href="/appointment">
            <button className="w-900 bg-blue-500 text-white font-bold py-2 px-10 mt-9 ms-20 rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:text-gray-100">
              Appointment
            </button>
          </Link>
        </div>

        <div className="mt-7">
          <Image
            src={first}
            width={500}
            // height={200} // Replace with the actual image path
            alt="Your Alt Text"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
