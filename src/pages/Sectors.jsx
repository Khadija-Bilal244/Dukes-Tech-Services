import Seo from "../components/Seo.jsx";
import SectorsSection from "../components/Sectors.jsx";
export default function Sectors() {
  return (
    <>
      <Seo
        title="Sectors We Serve"
        description="Industries and sectors Dukes Tech Services supports across web, design, and infrastructure projects."
        path="/sectors"
      />
      <SectorsSection />
    </>
  );
}
