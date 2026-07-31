"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const EMAIL_ID = "bhavarvishal31@gmail.com";
const TOPMATE_URL = "https://topmate.io/suryansh777777/1820500";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Fallback directly to mailto if API network fails
        window.location.href = `mailto:${EMAIL_ID}?subject=${encodeURIComponent(`Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        setSubmitted(true);
      }
    } catch {
      // Direct mailto fallback
      window.location.href = `mailto:${EMAIL_ID}?subject=${encodeURIComponent(`Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
        <section className="section">
          <h1 className="section-title">Contact Me</h1>
          <p className="section-subtitle">Let&apos;s connect and build something great together</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
            
            {/* Get In Touch Info */}
            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#111827" }}>Get In Touch</h2>
              <p style={{ color: "#4b5563", fontSize: "1rem", lineHeight: "1.7" }}>
                Whether you have an upcoming project, a job opportunity, or simply want to connect regarding Python, AI, or Full Stack development, feel free to reach out directly via email or schedule a call.
              </p>

              {/* Direct Email Address Box */}
              <div style={{
                padding: "1.2rem",
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(37, 99, 235, 0.06), rgba(124, 58, 237, 0.06))",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginTop: "0.5rem"
              }}>
                <span style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#2563eb" }}>
                  Direct Email Address
                </span>
                
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", flexWrap: "wrap" }}>
                  <a
                    href={`mailto:${EMAIL_ID}`}
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: "700",
                      color: "#1d4ed8",
                      textDecoration: "none",
                      wordBreak: "break-all",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem"
                    }}
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{EMAIL_ID}</span>
                  </a>

                  <button
                    onClick={copyEmail}
                    type="button"
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: "700",
                      padding: "0.4rem 0.85rem",
                      borderRadius: "8px",
                      background: copied ? "#16a34a" : "#2563eb",
                      color: "#ffffff",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                  >
                    {copied ? "✓ Copied" : "Copy Mail"}
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "0.5rem" }}>
                <a href={TOPMATE_URL} target="_blank" rel="noreferrer" className="btn-primary" style={{ textAlign: "center" }}>
                  Schedule 1-on-1 on Topmate
                </a>
              </div>
            </div>

            {/* Send a Message Form */}
            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#111827" }}>Send a Message</h2>

              {submitted ? (
                <div style={{
                  padding: "1.5rem",
                  borderRadius: "14px",
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  color: "#15803d",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem"
                }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: "800" }}>
                    ✓ Message Sent Successfully!
                  </div>
                  <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: "1.6" }}>
                    Thank you! Your message has been sent directly to <strong>{EMAIL_ID}</strong>. I will review it and reply back to your email shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    style={{
                      alignSelf: "flex-start",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                      background: "#16a34a",
                      color: "#ffffff",
                      padding: "0.45rem 1rem",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      marginTop: "0.5rem"
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {errorMsg && (
                    <div style={{ padding: "0.75rem 1rem", borderRadius: "8px", background: "#fef2f2", border: "1px solid #fca5a5", color: "#b91c1c", fontSize: "0.9rem" }}>
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "#374151", marginBottom: "0.3rem" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name"
                      style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid rgba(37, 99, 235, 0.25)", outline: "none", fontSize: "0.95rem" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "#374151", marginBottom: "0.3rem" }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid rgba(37, 99, 235, 0.25)", outline: "none", fontSize: "0.95rem" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "#374151", marginBottom: "0.3rem" }}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project or inquiry..."
                      style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid rgba(37, 99, 235, 0.25)", outline: "none", fontSize: "0.95rem", resize: "none" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{ marginTop: "0.5rem", border: "none", cursor: loading ? "wait" : "pointer", opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Sending Message..." : `Send Message to ${EMAIL_ID}`}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
