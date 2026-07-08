import Seo from "../components/Seo.jsx";
import Hero from "../components/Hero.jsx";
import Slogan from "../components/Slogan.jsx";
import Workflow from "../components/Workflow.jsx";

export default function Home() {
  return (
    <>
      <Seo
        title="IT Solutions in Lahore"
        description="Dukes Tech Services delivers web development, e-commerce, graphic design, SEO, social media marketing, IT consulting, and infrastructure services for businesses in Lahore and beyond."
        path="/"
      />
      <Hero />
      <Slogan />
      <Workflow />
    </>
  );
}
