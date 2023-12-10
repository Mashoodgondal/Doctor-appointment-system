import Link from "next/link";
const Button = () => {
  return (
    <div>
      {/* <link href="/appointment"> */}
      <button className="w-900 bg-blue-500 text-white font-bold py-2 px-10 mt-9 ms-20 rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:text-gray-100">
        Appointment
      </button>
      {/* </link> */}
    </div>
  );
};

export default Button;
