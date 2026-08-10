"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const EMAIL_ID = "bhavarvishal31@gmail.com";
const TOPMATE_URL = "https://topmate.io/vishal";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [serverMsg, setServerMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Send via primary API route (FormSubmit backend relay)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSubmitted(true);
        setServerMsg(data.message || `Your message has been sent to ${EMAIL_ID}!`);
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      // 2. Direct client-side FormSubmit fetch fallback
      const directRes = await fetch(`https://formsubmit.co/ajax/${EMAIL_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Portfolio Contact Message from ${name}`,
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const directData = await directRes.json().catch(() => ({}));

      if (directRes.ok || directData.success === "true" || directData.success === true) {
        setSubmitted(true);
        setServerMsg(`Your message has been delivered to ${EMAIL_ID}!`);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // 3. Email client fallback
        window.location.href = `mailto:${EMAIL_ID}?subject=${encodeURIComponent(`Portfolio Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        setSubmitted(true);
        setServerMsg(`Opening your email client to send message to ${EMAIL_ID}`);
      }
    } catch {
      window.location.href = `mailto:${EMAIL_ID}?subject=${encodeURIComponent(`Portfolio Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      setSubmitted(true);
      setServerMsg(`Opening your email client to send message to ${EMAIL_ID}`);
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

            {/* Get In Touch Info Card */}
            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#111827" }}>Get In Touch</h2>

              {/* Direct Email Address Box */}
              <div style={{
                padding: "1.2rem",
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(37, 99, 235, 0.06), rgba(124, 58, 237, 0.06))",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem"
              }}>
                <span style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#2563eb" }}>
                  Official Email Address
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

              {/* Direct Mailto Launcher Button */}
              <a
                href={`mailto:${EMAIL_ID}?subject=Portfolio%20Inquiry%20from%20Website`}
                className="btn-secondary"
                style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Open in Email App ({EMAIL_ID})</span>
              </a>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "0.25rem" }}>
                <a href={TOPMATE_URL} target="_blank" rel="noreferrer" className="btn-primary" style={{ textAlign: "center" }}>
                  Schedule 1-on-1 on Topmate
                </a>
              </div>
            </div>

            {/* Send a Message Direct Form */}
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
                    {serverMsg || `Thank you! Your message has been routed directly to ${EMAIL_ID} via FormSubmit.`}
                  </p>

                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setServerMsg(""); }}
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
                <form
                  onSubmit={handleSubmit}
                  action={`https://formsubmit.co/${EMAIL_ID}`}
                  method="POST"
                  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <input type="hidden" name="_subject" value="New Portfolio Inquiry" />
                  <input type="hidden" name="_replyto" value={email} />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div>
                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "#374151", marginBottom: "0.3rem" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
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
                      name="email"
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
                      name="message"
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

                  <div style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: "1.5", marginTop: "0.25rem", padding: "0.6rem 0.8rem", background: "rgba(37, 99, 235, 0.05)", borderRadius: "8px", border: "1px solid rgba(37, 99, 235, 0.12)" }}>
                    💡 <strong>FormSubmit Integration Active:</strong> Messages are sent directly to <strong>{EMAIL_ID}</strong>. If this is your first form submission, check your Gmail inbox to click the one-time FormSubmit activation link!
                  </div>
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
