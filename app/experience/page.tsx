import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Experience — Vishal Bhavar",
  description: "Professional experience and internship timeline of Vishal Bhavar.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem" }}>
        <section className="section">
          <h1 className="section-title">Experience</h1>
          <p className="section-subtitle">Internships and professional milestone exposure</p>

          <div className="timeline" style={{ maxWidth: "850px", margin: "0 auto" }}>
            <div className="timeline-item glass-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                <div>
                  <h2 style={{ fontSize: "1.35rem", fontWeight: "700", color: "#111827" }}>
                    Infosys Springboard Virtual Internship 7.0
                  </h2>
                  <p style={{ color: "#2563eb", fontWeight: "600", fontSize: "1rem" }}>
                    Python Specialist Intern
                  </p>
                </div>
                <span style={{ fontSize: "0.85rem", color: "#6b7280", background: "#f3f4f6", padding: "0.25rem 0.75rem", borderRadius: "6px" }}>
                  Virtual Internship
                </span>
              </div>

              <ul style={{ paddingLeft: "1.2rem", color: "#4b5563", lineHeight: "1.7", marginTop: "1rem" }}>
                <li>Completed intensive training in Python full stack development, web architecture, and database management.</li>
                <li>Worked on hands-on modules covering Object-Oriented Programming (OOP), file operations, and SQL integration.</li>
                <li>Gained practical knowledge in enterprise coding standards, Git version control, and modular application design.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
