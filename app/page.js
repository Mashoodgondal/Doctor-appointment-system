import appointment from "./appointment/page";
import Image from "next/image";

import aoctor from "./doctor/page";

import First from "./home/page";
import contect from "./contect/page";

export default function Home() {
  return (
    <>
      <doctor />
      <contect />
      <appointment />
      <First />
    </>
  );
}

{
  /* <signup /> */
}
