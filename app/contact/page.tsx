import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact — Vishal Bhavar",
  description: "Get in touch with Vishal Bhavar for software engineering and AI project inquiries.",
};

const TOPMATE_URL = "https://topmate.io/suryansh777777/1820500";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem" }}>
        <section className="section">
          <h1 className="section-title">Contact Me</h1>
          <p className="section-subtitle">Let&apos;s connect and build something great together</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <h2 style={{ fontSize: "1.35rem", fontWeight: "700", color: "#111827" }}>Get In Touch</h2>
              <p style={{ color: "#4b5563", fontSize: "1rem", lineHeight: "1.7" }}>
                Whether you have an upcoming project, a job opportunity, or simply want to connect regarding Python, AI, or Full Stack development, feel free to reach out.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "0.5rem" }}>
                <a href={TOPMATE_URL} target="_blank" rel="noreferrer" className="btn-primary" style={{ textAlign: "center" }}>
                  Schedule 1-on-1 on Topmate
                </a>
              </div>
            </div>

            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h2 style={{ fontSize: "1.35rem", fontWeight: "700", color: "#111827" }}>Send a Message</h2>

              <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "#374151", marginBottom: "0.3rem" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid rgba(37, 99, 235, 0.2)", outline: "none", fontSize: "0.95rem" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "#374151", marginBottom: "0.3rem" }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid rgba(37, 99, 235, 0.2)", outline: "none", fontSize: "0.95rem" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "#374151", marginBottom: "0.3rem" }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid rgba(37, 99, 235, 0.2)", outline: "none", fontSize: "0.95rem", resize: "none" }}
                  />
                </div>

                <button type="button" className="btn-primary" style={{ marginTop: "0.5rem" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
