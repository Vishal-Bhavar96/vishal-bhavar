import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Experiments & AI Labs — Vishal Bhavar",
  description: "Technical experiments, research labs, and GenAI exploration by Vishal Bhavar.",
};

const EXPERIMENTS = [
  {
    title: "Generative AI Integration Pipelines",
    desc: "Exploring modern GenAI models, prompt engineering, and LLM orchestration patterns for developer workflow automation.",
    tags: ["Generative AI", "Python", "LLMs", "Prompt Engineering"],
  },
  {
    title: "Linux System Automation & Shell Scripting",
    desc: "Crafting specialized Bash and Python scripts on Ubuntu for automated data backups, log auditing, and environment configuration.",
    tags: ["Linux", "Ubuntu", "Bash", "Python Automation"],
  },
  {
    title: "Real-time OpenCV Video Stream Processing",
    desc: "Optimizing frame-rate processing for live webcam feeds, facial landmark detection, and low-latency computer vision pipelines.",
    tags: ["OpenCV", "Computer Vision", "Real-time Video", "Python"],
  },
];

export default function ExperimentsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
        <section className="section" style={{ maxWidth: "1100px" }}>
          <h1 className="section-title">Technical Experiments</h1>
          <p className="section-subtitle">AI research labs, automation scripts, and experimental prototypes</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.75rem", margin: "0 auto" }}>
            {EXPERIMENTS.map((exp) => (
              <div key={exp.title} className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#111827" }}>{exp.title}</h2>
                <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: "1.6" }}>{exp.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto", paddingTop: "0.5rem" }}>
                  {exp.tags.map((t) => (
                    <span key={t} className="skill-tag-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
