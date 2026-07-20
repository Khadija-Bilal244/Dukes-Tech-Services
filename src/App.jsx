import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Sectors from "./pages/Sectors.jsx";
import Contact from "./pages/Contact.jsx";
import Team from "./pages/Team.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Dexo from "./pages/Dexo.jsx";


export default function App() {
  return (
    <HelmetProvider>
      <div className="font-body text-charcoal">
       <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dexo" element={<Dexo />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </HelmetProvider>
  );
}