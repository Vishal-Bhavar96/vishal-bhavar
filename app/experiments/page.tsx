import type { Metadata } from "next";
import PageNav from "@/components/page-nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Experiments & Certifications — Vishal Bhavar",
  description:
    "Certifications, continuous learning, and technical experiments by Vishal Bhavar.",
};

const CERTS = [
  "Python Full Stack Development",
  "Introduction to Generative AI",
  "Infosys Springboard Virtual Internship 7.0 – Python",
];

const EXPERIMENTS = [
  {
    title: "Generative AI Integration Pipelines",
    desc: "Exploring modern GenAI models and prompt-engineering patterns to enhance enterprise automation and developer workflows.",
  },
  {
    title: "Linux Environment Automation Scripts",
    desc: "Crafting specialized shell and Python scripts on Ubuntu for automated data backup, logging, and environment configuration.",
  },
];

export default function ExperimentsPage() {
  return (
    <>
      <PageNav />
      <main className="page">
        <section className="page__hero">
          <p className="page__hero-label">04 / Experiments</p>
          <h1 className="page__hero-title">
            Certifications &amp; Labs
          </h1>
          <p className="page__hero-desc">
            Continuous learning, recognized certifications, and hands-on technical experiments with emerging technologies.
          </p>
        </section>

        <div className="page__body">
          <div className="section-block">
            <h2 className="section-block__title">Certifications</h2>
            <div className="cert-list">
              {CERTS.map((cert) => (
                <div key={cert} className="cert-item">
                  <div className="cert-item__icon">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <span className="cert-item__text">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-block">
            <h2 className="section-block__title">Ongoing Experiments</h2>
            <div className="project-cards">
              {EXPERIMENTS.map((exp) => (
                <article key={exp.title} className="project-card">
                  <h3 className="project-card__title" style={{ marginBottom: "0.6rem" }}>
                    {exp.title}
                  </h3>
                  <p className="hero__intro-text" style={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.62)" }}>
                    {exp.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
