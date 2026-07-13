import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Dukes Tech Services</title>
        <meta name="description" content="Learn about Dukes Tech Services, our mission, vision, and team of IT experts." />
      </Helmet>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0E2A43] font-sans">About Us</h1>
          <p className="mt-4 text-[#0E2A43]/70 font-sans">
            Dukes Tech Solutions is a leading IT solutions provider dedicated to empowering businesses through cutting-edge technology.
          </p>
          {/* Add your About page content here */}
        </div>
      </section>
    </>
  );
}