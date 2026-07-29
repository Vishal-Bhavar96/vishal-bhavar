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
          {/* Main Title */}
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">Python Full Stack Developer &amp; AI Engineer</p>

          {/* Dual Photo + Bio Glass Card */}
          <div className="glass-card" style={{ padding: "2.5rem", marginBottom: "3rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", alignItems: "center" }}>

              {/* Single Profile Photo Showcase */}
              <div>
                <div className="about-single-photo">
                  <span className="photo-badge-accent">AI &amp; Full Stack</span>
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

              {/* Bio & Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#111827", lineHeight: "1.2" }}>
                  Hi, I&apos;m <span style={{ color: "#2563eb" }}>Vishal Bhavar</span>
                </h2>
                <p style={{ fontSize: "1.1rem", color: "#374151", lineHeight: "1.7" }}>
                  I am a passionate software engineer specializing in <strong>Python</strong>, <strong>full-stack web application engineering</strong>, and <strong>computer vision AI systems</strong>. My mission is to craft scalable backend APIs, intelligent facial recognition software, and high-performance databases.
                </p>
                <p style={{ fontSize: "1.05rem", color: "#6b7280", lineHeight: "1.7" }}>
                  With experience spanning Django framework, SQL database optimization (MySQL, PostgreSQL, SQLite), and computer vision pipelines (OpenCV), I engineer production-ready solutions that solve real-world problems.
                </p>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  <Link href="/projects" className="btn-primary">
                    View My Projects
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Get In Touch
                  </Link>
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
