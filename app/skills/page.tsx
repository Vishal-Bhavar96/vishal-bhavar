import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Technical Skills — Vishal Bhavar",
  description: "Technical skills and technologies mastered by Vishal Bhavar.",
};

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL"],
  },
  {
    title: "Web Frameworks",
    skills: ["Django", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "AI & Computer Vision",
    skills: ["OpenCV", "Facial Recognition", "Artificial Intelligence"],
  },
  {
    title: "Tools & Environments",
    skills: ["Git", "Visual Studio Code", "MySQL Workbench", "Linux (Ubuntu)"],
  },
];

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem" }}>
        <section className="section">
          <h1 className="section-title">Technical Skills</h1>
          <p className="section-subtitle">Core tech stack &amp; tools</p>

          <div className="skills-grid" style={{ maxWidth: "1100px", margin: "0 auto" }}>
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title} className="glass-card">
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#2563eb", marginBottom: "1rem" }}>
                  {cat.title}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {cat.skills.map((s) => (
                    <span key={s} className="skill-tag-pill">
                      {s}
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
