// Home.jsx
// Composes the home page in the required order:
// Navbar -> Hero -> Slogan -> Workflow

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slogan from "./components/Slogan";
import Workflow from "./components/Workflow";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <Hero />
      <Slogan />
      <Workflow />
    </div>
  );
}
