import { Helmet } from "react-helmet-async";
import AboutHero from "../components/About-Hero.jsx";
import AboutDukes from "../components/About-Dukes.jsx";
import AboutMission from "../components/About-Mission.jsx";
import AboutVision from "../components/About-Vision.jsx";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Dukes Tech Services</title>
        <meta name="description" content="Learn about Dukes Tech Services, our mission, vision, and team of IT experts." />
      </Helmet>

      <AboutHero/>
      <AboutDukes/>
      <AboutMission/>
      <AboutVision/>
    </>

  );
}