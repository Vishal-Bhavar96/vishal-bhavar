import Link from "next/link";

const TOPMATE_URL = "https://topmate.io/suryansh777777/1820500";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "linear-gradient(135deg, #2563eb, #60a5fa)",
                color: "#ffffff",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "800",
                fontSize: "1.1rem",
              }}
            >
              V
            </div>
            <span style={{ fontWeight: "700", fontSize: "1.25rem" }}>Vishal Bhavar</span>
          </div>
          <p style={{ color: "#9ca3af", maxWidth: "400px", fontSize: "0.95rem" }}>
            Python Full Stack Developer and AI Developer building scalable web applications and intelligent software solutions.
          </p>
        </div>

        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", color: "#6b7280", letterSpacing: "0.08em" }}>
              Navigation
            </span>
            <Link href="/" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.95rem" }}>Home</Link>
            <Link href="/about" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.95rem" }}>About</Link>
            <Link href="/skills" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.95rem" }}>Skills</Link>
            <Link href="/projects" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.95rem" }}>Projects</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", color: "#6b7280", letterSpacing: "0.08em" }}>
              Connect
            </span>
            <Link href="/experience" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.95rem" }}>Experience</Link>
            <Link href="/certifications" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.95rem" }}>Certifications</Link>
            <Link href="/contact" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.95rem" }}>Contact</Link>
            <a href={TOPMATE_URL} target="_blank" rel="noreferrer" style={{ color: "#60a5fa", textDecoration: "none", fontSize: "0.95rem", fontWeight: "600" }}>Book a Call</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Vishal Bhavar. All rights reserved.</span>
        <span>Built with Next.js 14, TypeScript and Tailwind CSS</span>
      </div>
    </footer>
  );
}
