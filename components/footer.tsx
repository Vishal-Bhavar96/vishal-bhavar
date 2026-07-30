import Link from "next/link";
import Image from "next/image";

const TOPMATE_URL = "https://topmate.io/suryansh777777/1820500";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* Unique Designed Curve Wave Header with Rotational Accent */}
      <div className="footer-curve-header">
        <svg
          className="footer-wave-svg"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C360,115 500,-10 760,50 C1020,110 1180,15 1440,55 L1440,120 L0,120 Z"
            fill="url(#footer-glow-gradient)"
            opacity="0.4"
            className="rotational-wave-bg"
          />
          <path
            d="M0,52 C280,105 460,15 720,62 C980,108 1160,25 1440,68 L1440,120 L0,120 Z"
            fill="#090d16"
          />
          <defs>
            <linearGradient id="footer-glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="33%" stopColor="#7c3aed" />
              <stop offset="66%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="footer-main">
        <div className="footer-content">
          <div>
            <div className="footer-brand-header" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Image
                src="/images/site-logo.jpg"
                alt="VB Logo"
                width={40}
                height={40}
                style={{ borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(255,255,255,0.2)" }}
              />
              <span className="footer-brand-title">Vishal Bhavar</span>
            </div>
            <p className="footer-brand-desc">
              Python Full Stack Developer and AI Developer building scalable web applications and intelligent software solutions.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-column">
              <span className="footer-col-title">Navigation</span>
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/skills" className="footer-link">Skills</Link>
              <Link href="/projects" className="footer-link">Projects</Link>
            </div>

            <div className="footer-column">
              <span className="footer-col-title">Connect</span>
              <Link href="/experience" className="footer-link">Experience</Link>
              <Link href="/certifications" className="footer-link">Certifications</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <a
                href={TOPMATE_URL}
                target="_blank"
                rel="noreferrer"
                className="footer-link footer-cta-link"
              >
                Book a Call ↗
              </a>
            </div>
          </div>
        </div>

        {/* Rotational Curve Line Divider above copyright text */}
        <div className="rotational-curve-line-wrapper">
          <svg
            viewBox="0 0 1200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotational-curve-svg"
          >
            <path
              d="M 0,20 Q 300,38 600,20 T 1200,20"
              stroke="url(#rotational-line-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="rotational-path-animated"
            />
            <defs>
              <linearGradient id="rotational-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="25%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="75%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Vishal Bhavar. All rights reserved.</span>
          <span>
            Built with <span className="footer-tech-highlight">Next.js 14</span>, <span className="footer-tech-highlight">TypeScript</span> and <span className="footer-tech-highlight">Tailwind CSS</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
