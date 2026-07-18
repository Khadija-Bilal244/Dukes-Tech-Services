// WorkflowSection.jsx
import discoveryImg from "../assets/discovery & planning.jfif";
import designImg from "../assets/design.jfif";
import developmentImg from "../assets/development2.jfif";
import testingImg from "../assets/testing & QA.jfif";
import deploymentImg from "../assets/deployment & support.jfif";

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We understand your business goals, analyze requirements, and create a clear project roadmap.",
    image: discoveryImg,
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "We design intuitive user experiences and visually appealing interfaces that align with your brand.",
    image: designImg,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our developers build secure, scalable, and high-performance web, mobile, and AI solutions.",
    image: developmentImg,
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "We thoroughly test every feature to ensure security, performance, responsiveness, and reliability.",
    image: testingImg,
  },
  {
    number: "05",
    title: "Deployment & Support",
    description:
      "We launch your solution, monitor performance, and provide continuous maintenance and technical support.",
    image: deploymentImg,
  },
];

export default function WorkflowSection() {
  return (
    <section className="bg-[#0E2A43] text-white py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            Our <span className="text-[#1CA7B8]">Workflow</span>
          </h2>
          <p className="text-white text-lg mt-3 max-w-2xl mx-auto font-sans">
            A clear, proven process that takes your project from idea to launch.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-[#1CA7B8]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="absolute top-4 right-5 text-4xl font-bold text-black/40 group-hover:text-black/70 transition-colors font-sans">
                {step.number}
              </span>

              <div className="rounded-xl overflow-hidden mb-4 bg-white/10 aspect-[4/3]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-sans font-bold text-lg mb-2 text-white">
                {step.title}
              </h3>
              <p className="font-sans text-base text-white/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}