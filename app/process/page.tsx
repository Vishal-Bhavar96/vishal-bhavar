import type { Metadata } from "next";
import PageNav from "@/components/page-nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Process — Vishal Bhavar",
  description:
    "My workflow and development process for building AI-assisted applications and software solutions.",
};

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Problem Definition & Requirement Analysis",
    desc: "Understanding core project requirements, target user needs, and defining technical specifications tailored to Python and AI integration.",
  },
  {
    num: "02",
    title: "System Architecture & Database Design",
    desc: "Structuring clean data models using MySQL, MongoDB, or SQLite and planning lightweight, efficient backend architectures with Django.",
  },
  {
    num: "03",
    title: "Algorithm Development & Computer Vision",
    desc: "Developing and tuning OpenCV facial recognition pipelines and AI models for high accuracy, real-time performance, and data security.",
  },
  {
    num: "04",
    title: "Testing, Deployment & Iteration",
    desc: "Rigorous testing across Linux (Ubuntu) environments, performance optimization, continuous integration with Git, and public documentation.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageNav />
      <main className="page">
        <section className="page__hero">
          <p className="page__hero-label">03 / Process</p>
          <h1 className="page__hero-title">
            How I Build
          </h1>
          <p className="page__hero-desc">
            A structured, engineering-first methodology for turning complex AI/ML ideas into robust, real-world software products.
          </p>
        </section>

        <div className="page__body">
          <div className="section-block">
            <h2 className="section-block__title">Development Methodology</h2>
            <div className="process-steps">
              {PROCESS_STEPS.map((step) => (
                <div key={step.num} className="process-step">
                  <div className="process-step__number">{step.num}</div>
                  <div className="process-step__content">
                    <h3 className="process-step__title">{step.title}</h3>
                    <p className="process-step__desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
