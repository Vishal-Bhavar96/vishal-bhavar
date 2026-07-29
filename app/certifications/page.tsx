import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Certifications — Vishal Bhavar",
  description: "Official technical certifications earned by Vishal Bhavar.",
};

const CERTS = [
  {
    title: "Python Full Stack Development",
    issuer: "Professional Certification Program",
    desc: "Comprehensive certification covering Python core, Django framework, frontend integration, and database operations.",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "AI and Tech Education",
    desc: "Foundational training on Large Language Models, Generative AI applications, prompt engineering, and neural network concepts.",
  },
  {
    title: "Infosys Springboard Virtual Internship 7.0 – Python",
    issuer: "Infosys Springboard",
    desc: "Verified virtual internship credential focused on Python application development and industry best practices.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem" }}>
        <section className="section">
          <h1 className="section-title">Certifications</h1>
          <p className="section-subtitle">Verified technical programs and credentials</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
            {CERTS.map((cert) => (
              <div key={cert.title} className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#eaf4ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#111827" }}>{cert.title}</h2>
                <span style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "600" }}>{cert.issuer}</span>
                <p style={{ color: "#6b7280", fontSize: "0.95rem", lineHeight: "1.6" }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
