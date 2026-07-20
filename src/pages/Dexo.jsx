// pages/Dexo.jsx
import { Helmet } from "react-helmet-async";
import DexoHero from "../components/Dexo-Hero";
import DexoCategories from "../components/Dexo-Categories";

export default function Dexo() {
  return (
    <>
      <Helmet>
        <title>DEXO Desktop ERP & POS - Dukes Tech Services</title>
        <meta name="description" content="Complete business management solution with Online POS and Offline POS. Streamline accounting, inventory, sales, and employee management." />
        <link rel="canonical" href="https://www.dukestechservices.com/dexo" />
        <meta property="og:title" content="DEXO Desktop ERP & POS - Dukes Tech Services" />
        <meta property="og:description" content="Complete business management solution for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dukestechservices.com/dexo" />
      </Helmet>

      <DexoHero />
      <DexoCategories />
    </>
  );
}