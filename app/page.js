import Image from "next/image";
import Navbar from "./component/Navbar/page";
import Particle from "./component/Particle/page";
import Rightsection from "./component/Hero/rightSection/page";
import Hero from "./component/Hero/pages";
import Contactsection from "./component/Footer/page";


export default function Home() {
  return (
    <>
      <Particle />
      <Hero/>
      <Contactsection/>
     
    </>
  );
}
