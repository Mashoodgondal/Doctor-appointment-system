// import React from "react";
import Image from "next/image";
import c1 from "../../public/image/3rd.jpg";
import c2 from "../../public/image/4th.jpg";
import c3 from "../../public/image/11th.jpg";
import c4 from "../../public/image/8th.jpg";
import c5 from "../../public/image/13th.jpg";
import c6 from "../../public/image/2nd.jpg";

import Card from "../(components)/card/doctorCard";

// import React from "react";
// import button from "../(components)/button/button";
const doctor = () => {
  return (
    <div>
      <h1 className="text-center ms-20 mt-10 text-3xl">Available Doctor's</h1>
      <h1 className="text-center ms-20 mt-4 text-3xl">
        word's gold madalest Doctor's
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* <link href="/appointment"> */}{" "}
        <Card title="Dr-Farhan " Image={c3} />
        <Card title="Dr-Sania " Image={c6} />
        <Card title="Dr-Mashood " Image={c5} />
        <Card title="Dr-Amina " Image={c4} />
        <Card title="Dr-Mahnoor " Image={c1} />
        <Card title="Dr-Afsha " Image={c2} />
        {/* </link> */}
      </div>
    </div>
  );
};

export default doctor;
