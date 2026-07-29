import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me — Vishal Bhavar",
  description: "Learn more about Vishal Bhavar, Python Full Stack Developer and AI Developer.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem" }}>
        <section className="section">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">Python Full Stack Developer and AI Developer</p>

          <div className="glass-card" style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#2563eb", marginBottom: "1rem" }}>
              Hi, I&apos;m Vishal Bhavar
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#374151", lineHeight: "1.8", marginBottom: "1.25rem" }}>
              I am a dedicated software developer specializing in Python, full stack web development, and AI-driven solutions. My passion lies in engineering robust applications, optimizing database performance, and creating intelligent computer vision software.
            </p>
            <p style={{ fontSize: "1.05rem", color: "#6b7280", lineHeight: "1.7", marginBottom: "2rem" }}>
              With experience spanning Django framework, SQL systems (MySQL, PostgreSQL, SQLite), and OpenCV for face recognition, I build tools that automate processes and solve real-world problems.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/projects" className="btn-primary">
                View My Projects
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
