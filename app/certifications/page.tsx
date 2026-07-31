import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Certifications — Vishal Bhavar",
  description: "Official technical certifications earned by Vishal Bhavar.",
};

const CERTS = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud | Simplilearn SkillUp",
    date: "7th October 2025",
    code: "9118303",
    desc: "Official Certificate of Completion for Google Cloud course on Introduction to Generative AI via Simplilearn SkillUp portal. Demonstrates initiative and skills in Large Language Models and Generative AI concepts.",
    image: "/images/generative-ai-certificate.png",
    featured: true,
  },
  {
    title: "Python Full Stack Development",
    issuer: "Professional Certification Program",
    date: "2026",
    code: "VERIFIED",
    desc: "Comprehensive certification covering Python core, web frameworks, API integration, and relational database operations.",
    image: null,
    featured: false,
  },
  {
    title: "Infosys Springboard Virtual Internship 7.0 – Python",
    issuer: "Infosys Springboard",
    date: "2026",
    code: "SPRINGBOARD-7.0",
    desc: "Verified virtual internship credential focused on Python application development, modular software design, and industry standard practices.",
    image: "/images/infosys-springboard-logo.jpg",
    featured: false,
  },
];

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
        <section className="section">
          <h1 className="section-title">Certifications</h1>
          <p className="section-subtitle">Verified technical credentials &amp; official completion certificates</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
            
            {/* Featured Generative AI Certificate Card */}
            {CERTS.filter((c) => c.featured).map((cert) => (
              <div key={cert.title} className="glass-card" style={{ padding: "2.25rem", borderRadius: "24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", alignItems: "center" }}>
                  
                  {/* Left Certificate Image Preview */}
                  <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", border: "2px solid rgba(37, 99, 235, 0.2)", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)", background: "#ffffff" }}>
                    <Image
                      src={cert.image!}
                      alt={cert.title}
                      width={600}
                      height={440}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      priority
                    />
                  </div>

                  {/* Right Details */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 0.9rem", borderRadius: "20px", background: "rgba(37, 99, 235, 0.08)", border: "1px solid rgba(37, 99, 235, 0.25)", width: "fit-content" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#2563eb" }}>
                        ✦ Verified Certificate
                      </span>
                    </div>

                    <h2 style={{ fontSize: "1.85rem", fontWeight: "800", color: "#0f172a", lineHeight: "1.25", margin: 0 }}>
                      {cert.title}
                    </h2>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", color: "#475569", fontSize: "0.95rem", fontWeight: "600" }}>
                      <span>🏛️ {cert.issuer}</span>
                      <span>📅 {cert.date}</span>
                      <span>🔑 Code: {cert.code}</span>
                    </div>

                    <p style={{ color: "#475569", lineHeight: "1.7", fontSize: "1.02rem", margin: 0 }}>
                      {cert.desc}
                    </p>

                    <div style={{ marginTop: "0.5rem" }}>
                      <a
                        href={cert.image!}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        style={{ display: "inline-flex", gap: "0.5rem" }}
                      >
                        <span>View Full Certificate</span>
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}

            {/* Standard Certifications Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
              {CERTS.filter((c) => !c.featured).map((cert) => (
                <div key={cert.title} className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "0.9rem", padding: "1.75rem" }}>
                  {cert.image ? (
                    <div style={{ padding: "0.5rem 0.8rem", background: "#ffffff", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", width: "fit-content" }}>
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={140}
                        height={40}
                        style={{ height: "36px", width: "auto", objectFit: "contain" }}
                      />
                    </div>
                  ) : (
                    <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(37, 99, 235, 0.1)", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                      </svg>
                    </div>
                  )}

                  <h2 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#0f172a", margin: 0 }}>{cert.title}</h2>
                  <span style={{ fontSize: "0.88rem", color: "#2563eb", fontWeight: "700" }}>{cert.issuer}</span>
                  <p style={{ color: "#475569", fontSize: "0.98rem", lineHeight: "1.6", margin: 0 }}>{cert.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
