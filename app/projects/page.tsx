import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Projects — Vishal Bhavar",
  description: "Portfolio of software & AI projects by Vishal Bhavar.",
};

const PROJECTS = [
  {
    title: "AI-Assisted Smart Attendance System Using Face Recognition",
    year: "2026",
    tech: ["Python", "OpenCV", "Artificial Intelligence", "Computer Vision", "Facial Recognition"],
    bullets: [
      "Developed an AI-powered Smart Attendance System using Python and OpenCV to automate real-time student identification through facial recognition.",
      "Implemented real-time face detection, recognition, and automated attendance recording, eliminating manual attendance while improving accuracy and efficiency.",
      "Designed and integrated a secure attendance database for reliable data storage, data integrity, and efficient record management and retrieval.",
    ],
  },
  {
    title: "Hotel Face Loyalty — AI-Powered Hotel Management System",
    year: "2026",
    tech: ["Python", "OpenCV", "Facial Recognition", "SQLite"],
    bullets: [
      "Developed an AI-powered hotel management system using Python, OpenCV, and facial recognition for secure, contactless guest identification and authentication.",
      "Implemented a customer loyalty management system using SQLite to track guest visits, booking history, and automatically apply tier-based rewards and discounts.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem" }}>
        <section className="section">
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">Real-world applications &amp; systems built with Python &amp; AI</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
            {PROJECTS.map((proj) => (
              <div key={proj.title} className="glass-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#111827" }}>{proj.title}</h2>
                  <span style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "700", background: "#eaf4ff", padding: "0.3rem 0.8rem", borderRadius: "8px" }}>
                    {proj.year}
                  </span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  {proj.tech.map((t) => (
                    <span key={t} className="skill-tag-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <ul style={{ paddingLeft: "1.2rem", color: "#4b5563", lineHeight: "1.7" }}>
                  {proj.bullets.map((b, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
