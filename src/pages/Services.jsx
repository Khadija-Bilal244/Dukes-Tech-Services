import Seo from "../components/Seo.jsx";
import ServicesHero from "../components/Services-Hero.jsx";
import ServicesList from "../components/Services-List.jsx";
import ServicesDetails from "../components/Services-Details.jsx";
import WorkflowSection from "../components/Services-Workflow.jsx";

export default function Services() {
  return (
    <>
      <Seo
        title="Our Services"
        description="Web development, e-commerce, CMS, graphic design, SEO, social media marketing, IT consulting, and infrastructure services from Dukes Tech Services, Lahore."
        path="/services"
      />
      <ServicesHero />
      <ServicesList />
      <WorkflowSection />
      <ServicesDetails /> 
    </>
  );
}