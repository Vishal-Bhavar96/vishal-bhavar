import type { Metadata } from "next";
import GlassHero from "@/components/glass-hero";
import Footer from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vishal Bhavar — Python Full Stack & AI Developer",
  description:
    "Portfolio of Vishal Bhavar — Python Full Stack Developer & AI Developer building scalable web applications, facial recognition systems, and modern software.",
};

const SKILLS = ["Python", "Django", "SQL", "MySQL", "MongoDB", "SQLite", "OpenCV", "Artificial Intelligence", "Computer Vision", "Linux (Ubuntu)", "Git"];

const PROJECTS = [
  {
    title: "AI-Assisted Smart Attendance System Using Face Recognition",
    year: "2026",
    desc: "Automated real-time student identification through facial recognition using Python, OpenCV, and AI.",
    tags: ["Python", "OpenCV", "AI", "Computer Vision"],
  },
  {
    title: "Hotel Face Loyalty AI-Powered Hotel Management System",
    year: "2026",
    desc: "Contactless guest authentication and automated tier-based customer loyalty rewards system.",
    tags: ["Python", "OpenCV", "SQLite", "Django"],
  },
];

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <GlassHero />

      {/* 2. About Me Section */}
      <section className="section" id="about">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Passionate Software Engineer &amp; AI Builder</p>

        <div className="glass-card" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", color: "#374151", lineHeight: "1.8", marginBottom: "1.2rem" }}>
            Hello! I&apos;m <strong>Vishal Bhavar</strong>, a Python Full Stack Developer &amp; AI Developer. I focus on engineering intelligent applications, facial recognition solutions, and high-performance backend systems.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#6b7280", lineHeight: "1.7" }}>
            My foundation lies in Python, Django, SQL databases, and OpenCV computer vision pipelines. I believe in clean code, public building, and turning complex workflows into seamless digital experiences.
          </p>
        </div>
      </section>

      {/* 3. Technical Skills Section (Glass Cards) */}
      <section className="section" id="skills" style={{ background: "#ffffff" }}>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I specialize in</p>

        <div className="glass-card" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {SKILLS.map((skill) => (
              <span key={skill} className="skill-tag-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Projects Section */}
      <section className="section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">AI-powered applications &amp; systems</p>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.title} className="glass-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <h3 className="project-card-title">{p.title}</h3>
                <span style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "700", background: "#eaf4ff", padding: "0.2rem 0.6rem", borderRadius: "6px" }}>
                  {p.year}
                </span>
              </div>
              <p style={{ color: "#6b7280", fontSize: "1rem", marginBottom: "1.25rem" }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {p.tags.map((t) => (
                  <span key={t} style={{ fontSize: "0.8rem", color: "#2563eb", background: "#f5f9ff", padding: "0.25rem 0.65rem", borderRadius: "6px", border: "1px solid rgba(37, 99, 235, 0.1)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Experience Section */}
      <section className="section" id="experience" style={{ background: "#ffffff" }}>
        <h2 className="section-title">Experience &amp; Internships</h2>
        <p className="section-subtitle">Practical industry exposure</p>

        <div className="timeline" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="timeline-item glass-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#111827" }}>Infosys Springboard Virtual Internship 7.0</h3>
              <span style={{ fontSize: "0.9rem", color: "#2563eb", fontWeight: "600" }}>Python Specialist</span>
            </div>
            <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
              Worked on Python full stack concepts, enterprise scripting, database handling, and software development methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Certifications Section */}
      <section className="section" id="certifications">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Verified technical achievements</p>

        <div className="skills-grid" style={{ maxWidth: "900px", margin: "0 auto" }}>
          {["Python Full Stack Development", "Introduction to Generative AI", "Infosys Springboard Virtual Internship 7.0 – Python"].map((c) => (
            <div key={c} className="glass-card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "#eaf4ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <span style={{ fontWeight: "600", color: "#111827", fontSize: "1rem" }}>{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Contact Section */}
      <section className="section" id="contact" style={{ background: "#ffffff" }}>
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <p className="section-subtitle">Have a project or opportunity in mind?</p>

        <div className="glass-card" style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", padding: "3rem 2rem" }}>
          <p style={{ color: "#4b5563", fontSize: "1.1rem", marginBottom: "2rem" }}>
            I am always open to discussing new projects, AI research, web development, or collaboration opportunities.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://topmate.io/suryansh777777/1820500" target="_blank" rel="noreferrer" className="btn-primary">
              Book a Call on Topmate
            </a>
            <Link href="/contact" className="btn-secondary">
              Send Message
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
