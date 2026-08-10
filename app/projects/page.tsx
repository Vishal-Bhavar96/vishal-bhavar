import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects — Vishal Bhavar",
  description: "Portfolio of software & AI projects by Vishal Bhavar.",
};

const TECH_ICONS: Record<string, { icon: React.ReactNode; color: string; bg: string; border: string }> = {
  Python: {
    color: "#1d4ed8",
    bg: "rgba(59, 130, 246, 0.1)",
    border: "rgba(59, 130, 246, 0.25)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 128 128">
        <linearGradient id="py-a-proj" x1="18.5" y1="18.5" x2="72.5" y2="72.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#387EB8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="py-b-proj" x1="56.5" y1="56.5" x2="110.5" y2="110.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFE052" />
          <stop offset="1" stopColor="#FFC321" />
        </linearGradient>
        <path fill="url(#py-a-proj)" d="M63.2 12c-27.4 0-25.7 11.9-25.7 11.9l.1 12.3h26.2v3.7H26.3S12 38.3 12 65.8c0 27.5 12.5 26.5 12.5 26.5h7.5v-10.9s-.4-12.9 12.9-12.9h25.8s12.1.2 12.1-11.8V35.9S84.9 12 63.2 12zm-14.4 8.2c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z" />
        <path fill="url(#py-b-proj)" d="M64.8 116c27.4 0 25.7-11.9 25.7-11.9l-.1-12.3H64.2v-3.7h37.5s14.3 1.6 14.3-25.9c0-27.5-12.5-26.5-12.5-26.5h-7.5v10.9s.4 12.9-12.9 12.9H57.3s-12.1-.2-12.1 11.8v21.8s-2.1 23.9 19.6 23.9zm14.4-8.2c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z" />
      </svg>
    ),
  },
  OpenCV: {
    color: "#6d28d9",
    bg: "rgba(139, 92, 246, 0.1)",
    border: "rgba(139, 92, 246, 0.25)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#121824" />
        <circle cx="64" cy="38" r="18" fill="#FF2A2A" />
        <circle cx="44" cy="80" r="18" fill="#00D26A" />
        <circle cx="84" cy="80" r="18" fill="#2A85FF" />
      </svg>
    ),
  },
  "Artificial Intelligence": {
    color: "#7c3aed",
    bg: "rgba(124, 58, 237, 0.1)",
    border: "rgba(124, 58, 237, 0.25)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2M9 2v2M15 20v2M9 20v2M20 15h2M20 9h2M2 15h2M2 9h2" />
      </svg>
    ),
  },
  "Computer Vision": {
    color: "#0284c7",
    bg: "rgba(6, 182, 212, 0.1)",
    border: "rgba(6, 182, 212, 0.25)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  "Facial Recognition": {
    color: "#047857",
    bg: "rgba(16, 185, 129, 0.1)",
    border: "rgba(16, 185, 129, 0.25)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="9" cy="9" r="1" fill="#047857" />
        <circle cx="15" cy="9" r="1" fill="#047857" />
        <path d="M10 15a2 2 0 0 0 4 0" />
      </svg>
    ),
  },
  SQLite: {
    color: "#0f766e",
    bg: "rgba(20, 184, 166, 0.1)",
    border: "rgba(20, 184, 166, 0.25)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#0F2D37" />
        <path fill="#008BCF" d="M32 44h64v10H32zm0 18h64v10H32zm0 18h40v10H32z" />
      </svg>
    ),
  },
  Django: {
    color: "#092e20",
    bg: "rgba(9, 46, 32, 0.1)",
    border: "rgba(9, 46, 32, 0.25)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#092e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  SQL: {
    color: "#0284c7",
    bg: "rgba(2, 132, 199, 0.1)",
    border: "rgba(2, 132, 199, 0.25)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  Cryptography: {
    color: "#d97706",
    bg: "rgba(217, 119, 6, 0.1)",
    border: "rgba(217, 119, 6, 0.25)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  Authentication: {
    color: "#059669",
    bg: "rgba(5, 150, 105, 0.1)",
    border: "rgba(5, 150, 105, 0.25)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  "HTML/CSS": {
    color: "#ea580c",
    bg: "rgba(234, 88, 12, 0.1)",
    border: "rgba(234, 88, 12, 0.25)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
};

const PROJECTS = [
  {
    title: "AI-Assisted Smart Attendance System Using Face Recognition",
    year: "2026",
    titleGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 75%, #0284c7 100%)",
    bulletDotColor: "#2563eb",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="9" cy="9" r="1" fill="#2563eb" />
        <circle cx="15" cy="9" r="1" fill="#2563eb" />
        <path d="M10 15a2 2 0 0 0 4 0" />
      </svg>
    ),
    tech: ["Python", "OpenCV", "Artificial Intelligence", "Computer Vision", "Facial Recognition"],
    bullets: [
      "Developed an AI-powered Smart Attendance System using Python and OpenCV to automate real-time student identification through facial recognition.",
      "Implemented real-time face detection, recognition, and automated attendance recording, reducing manual attendance effort while improving accuracy and efficiency.",
      "Designed and integrated a secure attendance database for reliable data storage, data integrity, and efficient record management and retrieval.",
    ],
  },
  {
    title: "Secure File Sharing System",
    year: "2026",
    titleGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 75%, #0284c7 100%)",
    bulletDotColor: "#2563eb",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    tech: ["Python", "Django", "SQL", "HTML/CSS", "Cryptography", "Authentication"],
    bullets: [
      "Developed a secure web-based file sharing system using Python and Django, enabling authenticated users to upload, share, and download files securely with encryption and access control.",
      "Implemented user authentication, file protection, and secure data management to prevent unauthorized access and improve confidentiality.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
        <section className="section">
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle" style={{ color: "#0f172a", fontWeight: "600" }}>
            Real-world applications &amp; systems built with Python &amp; AI
          </p>

          {/* Top Creative Hero Showcase Card with Generated Developer Coding Image */}
          <div 
            className="glass-card" 
            style={{ 
              maxWidth: "1000px", 
              margin: "0 auto 3rem auto", 
              padding: "2.25rem", 
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(243, 246, 255, 0.9))",
              boxShadow: "0 12px 36px rgba(37, 99, 235, 0.08), 0 0 0 1px rgba(37, 99, 235, 0.12)"
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "center" }}>
              
              {/* Left Column Text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <span style={{ 
                    fontSize: "0.85rem", 
                    fontWeight: "800", 
                    letterSpacing: "0.06em", 
                    textTransform: "uppercase", 
                    background: "linear-gradient(135deg, #f5f3ff 0%, #eff6ff 50%, #f0fdf4 100%)",
                    border: "1px solid rgba(139, 92, 246, 0.35)",
                    boxShadow: "0 4px 16px rgba(124, 58, 237, 0.12), inset 0 1px 2px #ffffff",
                    padding: "0.45rem 1.1rem",
                    borderRadius: "30px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem"
                  }}>
                    <span style={{ color: "#d97706", fontSize: "1rem" }}>⚡</span>
                    <span style={{ 
                      background: "linear-gradient(135deg, #6d28d9 0%, #0284c7 50%, #047857 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      AI &amp; Software Engineering Lab
                    </span>
                  </span>
                </div>

                <h2 style={{ 
                  fontSize: "1.85rem", 
                  fontWeight: "800", 
                  background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 75%, #0284c7 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  lineHeight: "1.25" 
                }}>
                  Engineering Production-Ready AI &amp; Computer Vision Solutions
                </h2>

                <p style={{ color: "#475569", lineHeight: "1.7", fontSize: "1.02rem" }}>
                  Architecting AI-driven facial recognition platforms, automated computer vision systems, and robust Python backend solutions engineered for high performance and real-world reliability.
                </p>
              </div>

              {/* Right Column Developer Illustration Image */}
              <div style={{ position: "relative", overflow: "hidden", borderRadius: "20px", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)", border: "2px solid rgba(255, 255, 255, 0.8)" }}>
                <Image
                  src="/images/project-hero-developer.png"
                  alt="Developer working on glowing AI laptop"
                  width={500}
                  height={340}
                  style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
                  priority
                />
              </div>

            </div>
          </div>

          {/* Project List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
            {PROJECTS.map((proj) => (
              <div key={proj.title} className="glass-card" style={{ padding: "2rem", borderRadius: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", flex: 1 }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.9)", border: "1px solid rgba(0, 0, 0, 0.08)", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {proj.icon}
                    </div>
                    <h2 style={{ 
                      fontSize: "1.45rem", 
                      fontWeight: "800", 
                      background: proj.titleGradient, 
                      WebkitBackgroundClip: "text", 
                      WebkitTextFillColor: "transparent",
                      lineHeight: "1.3",
                      margin: 0
                    }}>
                      {proj.title}
                    </h2>
                  </div>

                  <span style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "700", background: "rgba(37, 99, 235, 0.08)", border: "1px solid rgba(37, 99, 235, 0.2)", padding: "0.3rem 0.8rem", borderRadius: "20px" }}>
                    {proj.year}
                  </span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.35rem" }}>
                  {proj.tech.map((t) => {
                    const item = TECH_ICONS[t];
                    return (
                      <span
                        key={t}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          padding: "0.35rem 0.8rem",
                          borderRadius: "30px",
                          fontSize: "0.88rem",
                          fontWeight: "600",
                          color: item?.color || "#374151",
                          background: item?.bg || "#f3f4f6",
                          border: `1px solid ${item?.border || "rgba(0,0,0,0.1)"}`,
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.03)"
                        }}
                      >
                        {item?.icon}
                        <span>{t}</span>
                      </span>
                    );
                  })}
                </div>

                <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {proj.bullets.map((b, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", color: "#334155", lineHeight: "1.75", fontSize: "1.02rem" }}>
                      <span style={{ 
                        width: "7px", 
                        height: "7px", 
                        borderRadius: "50%", 
                        background: proj.bulletDotColor, 
                        display: "inline-block", 
                        marginTop: "0.65rem",
                        flexShrink: 0,
                        boxShadow: `0 0 6px ${proj.bulletDotColor}`
                      }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
