import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Experience — Vishal Bhavar",
  description: "Professional experience and internship timeline of Vishal Bhavar.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
        <section className="section">
          <h1 className="section-title">Experience</h1>
          <p className="section-subtitle">Internships and professional milestone exposure</p>

          <div className="timeline" style={{ maxWidth: "850px", margin: "0 auto" }}>
            <div className="timeline-item glass-card">
              
              {/* Infosys Springboard Logo at Top of Paragraph */}
              <div style={{
                marginBottom: "1.25rem",
                padding: "0.6rem 1rem",
                background: "#ffffff",
                borderRadius: "14px",
                border: "1px solid rgba(37, 99, 235, 0.15)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                display: "inline-flex",
                alignItems: "center"
              }}>
                <Image
                  src="/images/infosys-springboard-logo.jpg"
                  alt="Infosys Springboard Logo"
                  width={180}
                  height={50}
                  style={{ height: "48px", width: "auto", objectFit: "contain" }}
                  priority
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
                <div>
                  <h2 style={{ fontSize: "1.45rem", fontWeight: "800", color: "#0f172a" }}>
                    Infosys Springboard Virtual Internship 7.0
                  </h2>
                  <p style={{ color: "#2563eb", fontWeight: "700", fontSize: "1.05rem", marginTop: "0.2rem" }}>
                    Software Engineer Intern
                  </p>
                </div>
                <span style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "700", background: "rgba(37, 99, 235, 0.08)", border: "1px solid rgba(37, 99, 235, 0.2)", padding: "0.3rem 0.8rem", borderRadius: "20px" }}>
                  2026
                </span>
              </div>

              <ul style={{ paddingLeft: "1.2rem", color: "#334155", lineHeight: "1.75", marginTop: "1rem", fontSize: "1.02rem" }}>
                <li>Contributed to the development of a Secure File-Sharing System with user authentication and file management features.</li>
                <li>Assisted in implementing secure file sharing, access control, and backend functionalities.</li>
                <li>Participated in testing, input validation, and debugging to improve application security and reliability.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
