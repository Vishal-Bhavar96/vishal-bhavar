import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import SymbolicSkills from "@/components/symbolic-skills";
import EducationSection from "@/components/education-section";

export const metadata: Metadata = {
  title: "About Me — Vishal Bhavar",
  description: "Learn more about Vishal Bhavar, Python Full Stack Developer, AI Developer, education background and symbolic tech skills.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
        <section className="section" style={{ maxWidth: "1200px" }}>
          {/* Main Title & Highlight Subtitle */}
          <h1 className="section-title">About Me</h1>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "0.5rem", marginBottom: "2.5rem" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.55rem 1.35rem",
              borderRadius: "50px",
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.14) 100%)",
              border: "1px solid rgba(16, 185, 129, 0.32)",
              boxShadow: "0 6px 24px rgba(16, 185, 129, 0.12), inset 0 0 12px rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
            }}>
              <span style={{ 
                width: "9px", 
                height: "9px", 
                borderRadius: "50%", 
                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                boxShadow: "0 0 10px rgba(16, 185, 129, 0.8)",
                display: "inline-block" 
              }} />
              <span style={{
                fontSize: "1.12rem",
                fontWeight: "700",
                letterSpacing: "0.02em",
                background: "linear-gradient(135deg, #047857 0%, #0d9488 45%, #0891b2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 1px 2px rgba(16, 185, 129, 0.15))"
              }}>
                Python Full Stack Developer &amp; AI Engineer
              </span>
            </div>
          </div>

          {/* Dual Photo + Bio Glass Card */}
          <div className="glass-card" style={{ padding: "2.5rem", marginBottom: "3rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", alignItems: "center" }}>

              {/* Bio & Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <span style={{ 
                    fontSize: "0.85rem", 
                    fontWeight: "700", 
                    letterSpacing: "0.08em", 
                    textTransform: "uppercase", 
                    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                    marginBottom: "0.3rem"
                  }}>
                    ✦ Software &amp; AI Architect
                  </span>
                  <h2 style={{ fontSize: "2.2rem", fontWeight: "800", lineHeight: "1.2", margin: 0 }}>
                    <span style={{ 
                      background: "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #7c3aed 100%)", 
                      WebkitBackgroundClip: "text", 
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 2px 8px rgba(37, 99, 235, 0.2))"
                    }}>
                      Vishal Bhavar
                    </span>
                  </h2>
                </div>

                <div style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(243, 247, 255, 0.96))",
                  backdropFilter: "blur(12px)",
                  padding: "1.6rem 1.75rem",
                  borderRadius: "18px",
                  border: "1px solid rgba(37, 99, 235, 0.16)",
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem"
                }}>
                  <p style={{ fontSize: "1.06rem", color: "#1f2937", lineHeight: "1.8", margin: 0, fontWeight: "400" }}>
                    I am a passionate software engineer specializing in{" "}
                    <span style={{
                      background: "rgba(37, 99, 235, 0.1)",
                      color: "#1d4ed8",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "6px",
                      fontWeight: "700",
                      border: "1px solid rgba(37, 99, 235, 0.2)",
                      whiteSpace: "nowrap"
                    }}>Python</span>,{" "}
                    <span style={{
                      background: "rgba(2, 132, 199, 0.1)",
                      color: "#0369a1",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "6px",
                      fontWeight: "700",
                      border: "1px solid rgba(2, 132, 199, 0.2)"
                    }}>full-stack web application engineering</span>, and{" "}
                    <span style={{
                      background: "rgba(124, 58, 237, 0.1)",
                      color: "#6d28d9",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "6px",
                      fontWeight: "700",
                      border: "1px solid rgba(124, 58, 237, 0.2)"
                    }}>computer vision AI systems</span>. My mission is to craft scalable backend APIs, intelligent facial recognition software, and high-performance databases.
                  </p>

                  <div style={{ height: "1px", width: "100%", background: "linear-gradient(90deg, rgba(37,99,235,0.2) 0%, rgba(124,58,237,0.2) 50%, transparent 100%)" }} />

                  <p style={{ fontSize: "1.02rem", color: "#374151", lineHeight: "1.8", margin: 0, fontWeight: "400" }}>
                    With experience spanning{" "}
                    <span style={{
                      background: "rgba(5, 150, 105, 0.1)",
                      color: "#047857",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "6px",
                      fontWeight: "600",
                      border: "1px solid rgba(5, 150, 105, 0.2)"
                    }}>Django framework</span>,{" "}
                    <span style={{
                      background: "rgba(37, 99, 235, 0.08)",
                      color: "#1e40af",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "6px",
                      fontWeight: "600",
                      border: "1px solid rgba(37, 99, 235, 0.18)"
                    }}>SQL database optimization (MySQL, PostgreSQL, SQLite)</span>, and{" "}
                    <span style={{
                      background: "rgba(109, 40, 217, 0.08)",
                      color: "#5b21b6",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "6px",
                      fontWeight: "600",
                      border: "1px solid rgba(109, 40, 217, 0.18)"
                    }}>computer vision pipelines (OpenCV)</span>, I engineer production-ready solutions that solve real-world problems.
                  </p>
                </div>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  <Link href="/projects" className="btn-primary">
                    View My Projects
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Get In Touch
                  </Link>
                </div>
              </div>

              {/* Single Profile Photo Showcase */}
              <div>
                <div className="about-single-photo">
                  <Image
                    src="/images/Base_image_desktop.png"
                    alt="Vishal Bhavar Portrait"
                    width={400}
                    height={400}
                    className="photo-img"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Technical Expertise Section (Vercel / Apple style) */}
          <div style={{ marginTop: "3.5rem" }}>
            <SymbolicSkills />
          </div>

          {/* Education Section (Inside About Me) */}
          <div style={{ marginTop: "4rem" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111827", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#2563eb", display: "inline-block" }}></span>
              Education &amp; Academic Credentials
            </h3>
            <p style={{ color: "#6b7280", fontSize: "1rem", marginBottom: "1.5rem" }}>
              Formal qualification, academic focus, and specialized software training.
            </p>
            <EducationSection />
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
