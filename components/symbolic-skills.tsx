"use client";

import React, { useState, useEffect, useRef } from "react";

export interface OrbitTechItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  usage: string;
  capabilities: string[];
  orbit: "inner" | "middle" | "outer";
  orbitLabel: string;
  angleDeg: number;
  brandColor: string;
  accentBg: string;
  icon: React.ReactNode;
}

export const ALL_ORBIT_TECH_DATA: OrbitTechItem[] = [
  // ── INNER ORBIT (4 Technologies) ──
  {
    id: "python",
    name: "Python",
    category: "Programming Language",
    tagline: "Backend • AI & Machine Learning • Automation",
    usage: "Primary language used to build robust backend systems, REST APIs, OpenCV computer vision pipelines, automation scripts, and AI inference models.",
    capabilities: ["Backend API Architecture", "AI & Machine Learning", "Data Processing & Automation", "OOP & System Scripting"],
    orbit: "inner",
    orbitLabel: "Inner Core",
    angleDeg: 270, // Top
    brandColor: "#387EB8",
    accentBg: "rgba(56, 126, 184, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <linearGradient id="py-a" x1="18.5" y1="18.5" x2="72.5" y2="72.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#387EB8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="py-b" x1="56.5" y1="56.5" x2="110.5" y2="110.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFE052" />
          <stop offset="1" stopColor="#FFC321" />
        </linearGradient>
        <path fill="url(#py-a)" d="M63.2 12c-27.4 0-25.7 11.9-25.7 11.9l.1 12.3h26.2v3.7H26.3S12 38.3 12 65.8c0 27.5 12.5 26.5 12.5 26.5h7.5v-10.9s-.4-12.9 12.9-12.9h25.8s12.1.2 12.1-11.8V35.9S84.9 12 63.2 12zm-14.4 8.2c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z" />
        <path fill="url(#py-b)" d="M64.8 116c27.4 0 25.7-11.9 25.7-11.9l-.1-12.3H64.2v-3.7h37.5s14.3 1.6 14.3-25.9c0-27.5-12.5-26.5-12.5-26.5h-7.5v10.9s.4 12.9-12.9 12.9H57.3s-12.1-.2-12.1 11.8v21.8s-2.1 23.9 19.6 23.9zm14.4-8.2c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z" />
      </svg>
    ),
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Programming Language",
    tagline: "Frontend Interactivity • Dynamic Web Apps • DOM Logic",
    usage: "Powers dynamic browser client interactions, asynchronous API communication, modern UI state management, and real-time frontend logic.",
    capabilities: ["ES6+ Modern Syntax", "DOM Manipulation & Events", "Asynchronous Fetch / AJAX", "Interactive UI Components"],
    orbit: "inner",
    orbitLabel: "Inner Core",
    angleDeg: 0, // Right
    brandColor: "#EAB308",
    accentBg: "rgba(234, 179, 8, 0.14)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#F7DF1E" />
        <path fill="#000" d="M67.3 104.5c3.2 5.1 7.6 8.4 15.3 8.4 6.5 0 10.6-3.2 10.6-7.6 0-5.3-4.2-7.2-11.3-10.3l-3.9-1.7c-11.3-4.8-18.8-10.8-18.8-23.4 0-11.6 9-20.5 23-20.5 9.9 0 17 3.5 21.8 12.1l-10.4 6.7c-2.7-4.8-6-6.7-11.3-6.7-4.5 0-7.7 2.5-7.7 6.1 0 4.4 2.9 6.2 9.5 9.1l3.9 1.7c13.4 5.7 20.8 11.4 20.8 24.3 0 13.8-10.7 21.9-26.5 21.9-14.7 0-23.8-6.9-28.5-16.5l11.5-6.8zM31.2 104.2c2.4 4.1 5.3 7.1 10.8 7.1 5.6 0 9.2-2.3 9.2-11.3V49.9h14.7v50.5c0 16.7-9.8 24-23.6 24-11.8 0-19.4-6-23-14l11.9-6.2z" />
      </svg>
    ),
  },
  {
    id: "sql",
    name: "SQL",
    category: "Database Query Language",
    tagline: "Relational Queries • Data Modeling • Schema Design",
    usage: "Crafting structured queries, table schemas, relationships, indexing strategies, and aggregate reports across relational database engines.",
    capabilities: ["Complex Multi-Table Joins", "Schema Modeling & Normalization", "Aggregation & Stored Queries", "Performance Indexing"],
    orbit: "inner",
    orbitLabel: "Inner Core",
    angleDeg: 90, // Bottom
    brandColor: "#0284C7",
    accentBg: "rgba(2, 132, 199, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <ellipse cx="64" cy="38" rx="34" ry="14" fill="#00A8E8" />
        <path fill="#0077B6" d="M30 38v24c0 7.7 15.2 14 34 14s34-6.3 34-14V38" />
        <path fill="#0096C7" d="M30 62v24c0 7.7 15.2 14 34 14s34-6.3 34-14V62" />
        <path fill="#48CAE4" d="M64 28c-18.8 0-34 6.3-34 14s15.2 14 34 14 34-6.3 34-14-15.2-14-34-14zm0 20c-13.2 0-24-4.5-24-10s10.8-10 24-10 24 4.5 24 10-10.8 10-24 10z" />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control System",
    tagline: "Source Code Management • Branching • Collaboration",
    usage: "Managing codebase history, feature branch workflows, code reviews, staging, merge conflict resolution, and GitHub collaboration.",
    capabilities: ["Distributed Version Control", "Branch & Merge Workflows", "Commit History & Cherry-picking", "Remote GitHub Synchronization"],
    orbit: "inner",
    orbitLabel: "Inner Core",
    angleDeg: 180, // Left
    brandColor: "#F05032",
    accentBg: "rgba(240, 80, 50, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#1E1715" />
        <path fill="#F05032" d="M112.5 58.8L69.2 15.5c-2.4-2.4-6.3-2.4-8.7 0L47.7 28.3l14.9 14.9c2.5-.8 5.4 0 7.3 1.9 2 2 2.6 4.9 1.8 7.4l14.4 14.4c2.5-.8 5.4 0 7.4 1.9 2.8 2.8 2.8 7.3 0 10.1-2.8 2.8-7.3 2.8-10.1 0-2.1-2.1-2.7-5.1-1.8-7.7L67.9 57.5v22.4c.7.4 1.3.9 1.8 1.4 2.8 2.8 2.8 7.3 0 10.1-2.8 2.8-7.3 2.8-10.1 0-2.8-2.8-2.8-7.3 0-10.1.7-.7 1.6-1.3 2.5-1.7V56.8c-1-.4-1.8-1-2.5-1.7-2.1-2.1-2.6-5.1-1.7-7.7L43 32.5 15.5 60c-2.4 2.4-2.4 6.3 0 8.7l43.3 43.3c2.4 2.4 6.3 2.4 8.7 0l45-44.5c2.4-2.4 2.4-6.3 0-8.7z" />
      </svg>
    ),
  },

  // ── MIDDLE ORBIT (4 Technologies) ──
  {
    id: "django",
    name: "Django",
    category: "Web Framework",
    tagline: "Full-Stack Web Apps • REST APIs • ORM & Security",
    usage: "Architecting high-performance web applications, Django REST Framework endpoints, database models, user authentication, and admin portals.",
    capabilities: ["Django REST Framework (DRF)", "ORM Database Modeling", "Authentication & Security", "MVC Architecture"],
    orbit: "middle",
    orbitLabel: "Middle Orbit",
    angleDeg: 45,
    brandColor: "#047857",
    accentBg: "rgba(4, 120, 87, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#092E20" />
        <path fill="#44B78B" d="M78.6 30h15.2v50.4c0 12.4-3.8 19.9-11.2 24.1-5.3 3-12.4 4-20 4-4.8 0-9.8-.5-13.8-1.5l2.3-12.4c3 1 6.5 1.5 10.3 1.5 8.1 0 13.8-3.8 13.8-13.8V30zm-35.3 23c-8.6 0-14.4 6-14.4 14.9 0 8.6 5.5 14.4 13.8 14.4 4 0 7.8-1.3 10.3-3.3v-23c-2.3-2-5.8-3-9.7-3zm9.7-11.6v10.6c-2.8-1.5-6.8-2.5-11.1-2.5-13.8 0-25 9.8-25 24.6 0 14.4 10.6 24.4 25.4 24.4 4.5 0 8.1-.8 10.8-2.3v1.8c0 7.3-4.5 11.1-12.6 11.1-4 0-8.6-.8-11.6-2.3l-2.8 11.1c4 1.8 10.3 2.8 16.6 2.8 16.4 0 24.7-8.1 24.7-24.7V41.4H53z" />
      </svg>
    ),
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Relational Database",
    tagline: "Structured Data • High Concurrency • ACID Transactions",
    usage: "Managing production relational databases, executing structured table migrations, enforcing referential integrity, and query optimization.",
    capabilities: ["Relational Database Administration", "ACID Compliant Transactions", "Foreign Key Constraints", "Index Tuning"],
    orbit: "middle",
    orbitLabel: "Middle Orbit",
    angleDeg: 135,
    brandColor: "#00618A",
    accentBg: "rgba(0, 97, 138, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#00618A" />
        <path fill="#F29111" d="M64 24c-22 0-40 16-40 38 0 15 8.5 28 21 34l-5 18 20-10c1.3.1 2.6.2 4 .2 22 0 40-16 40-38S86 24 64 24z" />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "NoSQL Database",
    tagline: "Document Store • Flexible JSON Schemas • Aggregations",
    usage: "Storing polymorphic application payloads, non-relational document data, rapid prototyping datasets, and high-volume JSON streams.",
    capabilities: ["NoSQL Document Storage", "BSON / JSON Data Modeling", "Aggregation Pipelines", "Dynamic Schema Flexibility"],
    orbit: "middle",
    orbitLabel: "Middle Orbit",
    angleDeg: 225,
    brandColor: "#15803D",
    accentBg: "rgba(21, 128, 61, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#11271D" />
        <path fill="#47A248" d="M64.6 14.3c-1.3 0-2.4 1-2.4 2.3v34.4C50 56.6 42 70.8 42 84c0 14.8 9.8 27.2 22.6 31.4v-3.5c-9.8-3.9-16.7-14.1-16.7-25.7 0-11.8 7.4-24.8 16.7-29.8v-42.1z" />
        <path fill="#499D4A" d="M63.4 14.3v97.6c12.8-4.2 22.6-16.6 22.6-31.4 0-13.2-8-27.4-20.2-32.9v-31c0-1.3-1.1-2.3-2.4-2.3z" />
      </svg>
    ),
  },
  {
    id: "linux",
    name: "Linux",
    category: "Operating System & Environment",
    tagline: "Server Deployment • Shell Scripting • System Administration",
    usage: "Command-line server environments, Bash scripting, system daemon management, permission security, and production host configuration.",
    capabilities: ["Bash & Shell Automation", "System Daemon (systemd) Management", "SSH & Server Administration", "Process & Resource Monitoring"],
    orbit: "middle",
    orbitLabel: "Middle Orbit",
    angleDeg: 315,
    brandColor: "#C2410C",
    accentBg: "rgba(194, 65, 12, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#2C001E" />
        <circle cx="64" cy="64" r="40" fill="#E95420" />
        <circle cx="64" cy="64" r="28" fill="#FFF" opacity="0.9" />
      </svg>
    ),
  },

  // ── OUTER ORBIT (7 Technologies) ──
  {
    id: "html5",
    name: "HTML5",
    category: "Markup Language",
    tagline: "Semantic Web Structure • Accessibility • Responsive UI",
    usage: "Building clean, accessible, and standards-compliant document structures with semantic tags, modern forms, and media elements.",
    capabilities: ["Semantic DOM Hierarchy", "Accessible ARIA Attributes", "Modern Web Forms", "SEO & Meta Optimization"],
    orbit: "outer",
    orbitLabel: "Outer Orbit",
    angleDeg: 15,
    brandColor: "#E34F26",
    accentBg: "rgba(227, 79, 38, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <path fill="#E34F26" d="M19 114.7L9.4 7h109.2l-9.6 107.7L63.9 121" />
        <path fill="#EF652A" d="M64 113.1l36.5-10.1 8.3-93H64" />
        <path fill="#FFF" d="M64 53.6H44.9l-1.3-14.7H64V24.5H26.3l.4 4.4 3.4 39.4H64v-14.7zm0 35.8l-.2.1-15.6-4.2-1-11.2H32.4l1.9 21.8 29.5 8.2.2.1V89.4z" />
      </svg>
    ),
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Styling & Layout",
    tagline: "Responsive Layouts • Flexbox & Grid • Animations",
    usage: "Styling responsive application layouts, creating glassmorphism effects, custom CSS keyframe animations, and dark/light color systems.",
    capabilities: ["CSS Grid & Flexbox Systems", "Custom Keyframe Animations", "Glassmorphism & Backdrop Filters", "CSS Variables & Theming"],
    orbit: "outer",
    orbitLabel: "Outer Orbit",
    angleDeg: 66.4,
    brandColor: "#0284C7",
    accentBg: "rgba(2, 132, 199, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <path fill="#1572B6" d="M19 114.7L9.4 7h109.2l-9.6 107.7L63.9 121" />
        <path fill="#33A9DC" d="M64 113.1l36.5-10.1 8.3-93H64" />
        <path fill="#FFF" d="M64 53.6H44.9l-1.3-14.7H64V24.5H26.3l.4 4.4 3.4 39.4H64v-14.7zm-19.3 22l1 11.2 14.3 3.9V105l-29.5-8.2-1.9-21.8H44.7z" />
      </svg>
    ),
  },
  {
    id: "sqlite",
    name: "SQLite",
    category: "Embedded Database",
    tagline: "Serverless Storage • Local Development • Zero Config",
    usage: "Embedded database engine used for local development, test environments, lightweight application storage, and rapid prototyping.",
    capabilities: ["Zero-Configuration Engine", "Self-Contained File Database", "Fast Local Querying", "Testing & Prototyping"],
    orbit: "outer",
    orbitLabel: "Outer Orbit",
    angleDeg: 117.9,
    brandColor: "#0369A1",
    accentBg: "rgba(3, 105, 161, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#0F2D37" />
        <path fill="#008BCF" d="M32 44h64v10H32zm0 18h64v10H32zm0 18h40v10H32z" />
      </svg>
    ),
  },
  {
    id: "opencv",
    name: "OpenCV",
    category: "Computer Vision",
    tagline: "Image Processing • Face Recognition • Visual AI",
    usage: "Building real-time computer vision applications, facial recognition systems, feature extraction, frame processing, and video stream analysis.",
    capabilities: ["Facial Detection & Recognition", "Real-Time Video Stream Processing", "Image Filtering & Contours", "Feature Extraction Algorithms"],
    orbit: "outer",
    orbitLabel: "Outer Orbit",
    angleDeg: 169.3,
    brandColor: "#059669",
    accentBg: "rgba(5, 150, 105, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#121824" />
        <circle cx="64" cy="38" r="18" fill="#FF2A2A" />
        <circle cx="44" cy="80" r="18" fill="#00D26A" />
        <circle cx="84" cy="80" r="18" fill="#2A85FF" />
      </svg>
    ),
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    category: "Machine Intelligence",
    tagline: "Neural Networks • Predictive Models • Smart Automation",
    usage: "Designing AI-driven software architectures, integrating intelligent models, automating complex workflows, and computer vision classification.",
    capabilities: ["AI Model Inferencing", "Pattern & Vision Recognition", "Intelligent Workflow Automation", "Data Classification"],
    orbit: "outer",
    orbitLabel: "Outer Orbit",
    angleDeg: 220.7,
    brandColor: "#D97706",
    accentBg: "rgba(217, 119, 6, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#0A192F" />
        <rect x="36" y="36" width="56" height="56" rx="8" fill="none" stroke="#00F2FE" strokeWidth="6" />
        <circle cx="64" cy="64" r="14" fill="#00F2FE" />
      </svg>
    ),
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    category: "Developer Environment",
    tagline: "Code Editor • Extensions • Git Integration",
    usage: "Primary engineering IDE configured for Python, full-stack web, and AI development with integrated debugging and terminal tools.",
    capabilities: ["Advanced Code Debugging", "Integrated Git & Terminal", "Python Virtual Environment Support", "Productivity Extensions"],
    orbit: "outer",
    orbitLabel: "Outer Orbit",
    angleDeg: 272.1,
    brandColor: "#0284C7",
    accentBg: "rgba(2, 132, 199, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#0066B8" />
        <path fill="#FFF" d="M34 40l30 24-30 24V40zm34-6l32 30-32 30V34z" />
      </svg>
    ),
  },
  {
    id: "ubuntu",
    name: "Ubuntu",
    category: "Linux Distribution",
    tagline: "Server Hosting • Package Management • Production",
    usage: "Production server OS of choice for deploying Python/Django applications, configuring Nginx reverse proxies, and running services.",
    capabilities: ["Server Environment Configuration", "APT Package Management", "Nginx / Gunicorn Deployment", "Firewall & Security Setup"],
    orbit: "outer",
    orbitLabel: "Outer Orbit",
    angleDeg: 323.6,
    brandColor: "#E95420",
    accentBg: "rgba(233, 84, 32, 0.12)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#2C001E" />
        <circle cx="64" cy="64" r="40" fill="#E95420" />
        <circle cx="64" cy="64" r="28" fill="#FFF" opacity="0.9" />
      </svg>
    ),
  },
];

// Grouped by orbit
const INNER_ORBIT_ITEMS = ALL_ORBIT_TECH_DATA.filter((item) => item.orbit === "inner");
const MIDDLE_ORBIT_ITEMS = ALL_ORBIT_TECH_DATA.filter((item) => item.orbit === "middle");
const OUTER_ORBIT_ITEMS = ALL_ORBIT_TECH_DATA.filter((item) => item.orbit === "outer");

// Helper to convert degree to coordinate at radius R
function getOrbitPosition(radius: number, angleDeg: number) {
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = Math.round(radius * Math.cos(angleRad) * 100) / 100;
  const y = Math.round(radius * Math.sin(angleRad) * 100) / 100;
  return { x, y };
}

export default function SymbolicSkills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll detection & animation stages
  const [isInViewport, setIsInViewport] = useState(false);
  const [hasTriggeredEntrance, setHasTriggeredEntrance] = useState(false);
  const [entranceStage, setEntranceStage] = useState(0); 
  // 0: hidden
  // 1: Center Core scale & fade in
  // 2: Orbit rings appear
  // 3: Tech nodes pop in
  // 4: Continuous orbit rotation active

  // Hover & Modal interaction states
  const [hoveredTech, setHoveredTech] = useState<OrbitTechItem | null>(null);
  const [selectedTech, setSelectedTech] = useState<OrbitTechItem | null>(null);

  // IntersectionObserver for scroll-triggered start, pause & resume
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          if (!hasTriggeredEntrance) {
            setHasTriggeredEntrance(true);
          }
        } else {
          setIsInViewport(false);
        }
      },
      {
        root: null,
        threshold: 0.18, // Triggers smoothly when section enters viewport
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentElem = sectionRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [hasTriggeredEntrance]);

  // Sequenced entrance reveal triggered on first viewport entry
  useEffect(() => {
    if (!hasTriggeredEntrance) return;

    // Check reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setEntranceStage(3);
      return;
    }

    // Step 1: Center core scales and fades in (0ms)
    setEntranceStage(1);

    // Step 2: Concentric orbit tracks appear (350ms)
    const t2 = setTimeout(() => {
      setEntranceStage(2);
    }, 350);

    // Step 3: Technology nodes pop in sequentially (750ms)
    const t3 = setTimeout(() => {
      setEntranceStage(3);
    }, 750);

    // Step 4: Continuous orbit rotation starts (1600ms)
    const t4 = setTimeout(() => {
      setEntranceStage(4);
    }, 1600);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [hasTriggeredEntrance]);

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedTech(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Determine whether orbit animations are currently running
  // Running when: in viewport AND entrance stage 4 reached AND not hovered by cursor
  const isOrbitRotating = isInViewport && entranceStage >= 4 && !hoveredTech;

  // Radii for the 3 concentric orbits (Desktop base)
  const R_INNER = 122;
  const R_MIDDLE = 205;
  const R_OUTER = 285;

  return (
    <div
      ref={sectionRef}
      id="technical-skills"
      className={`tech-universe-section ${isInViewport ? "in-viewport" : "outside-viewport"} stage-${entranceStage}`}
      aria-label="Technical Skills Section"
    >
      {/* ── SECTION HEADER ── */}
      <div className="tech-universe-header">
        <div className="tech-universe-title-row">
          <span className="tech-universe-beacon" />
          <h2 className="tech-universe-heading">Technical Skills</h2>
        </div>

        <p className="tech-universe-subtitle">
          Technologies I use to build software, web applications, AI solutions and database-driven systems.
        </p>

        {/* Badges */}
        <div className="tech-universe-badges-row">
          <span className="tech-universe-badge">
            <span className="badge-dot badge-dot-blue" />
            15+ Technologies
          </span>
          <span className="tech-universe-badge">
            <span className="badge-dot badge-dot-cyan" />
            Full Stack Development
          </span>
          <span className="tech-universe-badge">
            <span className="badge-dot badge-dot-purple" />
            AI &amp; Computer Vision
          </span>
        </div>
      </div>

      {/* ── MAIN UNIVERSE CANVAS / STAGE ── */}
      <div className="tech-universe-container">
        {/* Ambient Cosmic Background Grid & Stars */}
        <div className="universe-ambient-backdrop">
          <div className="universe-radial-glow" />
          <div className="universe-dust-particle p1" />
          <div className="universe-dust-particle p2" />
          <div className="universe-dust-particle p3" />
          <div className="universe-dust-particle p4" />
          <div className="universe-dust-particle p5" />
          <div className="universe-dust-particle p6" />
        </div>

        {/* Orbit Canvas with fixed coordinate system */}
        <div className="universe-orbit-viewport">

          {/* ════ CENTER FIXED HUB (TECH STACK) ════ */}
          <div
            className={`universe-center-hub ${entranceStage >= 1 ? "hub-revealed" : "hub-hidden"}`}
            title="Vishal Bhavar • Core Tech Stack"
          >
            <div className="center-hub-pulse-ring" />
            <div className="center-hub-disc">
              <div className="center-hub-icon-wrap">
                {/* Developer Code Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
              </div>
              <span className="center-hub-title">TECH STACK</span>
              <span className="center-hub-sub">CORE HUB</span>
            </div>
          </div>

          {/* ════ 1. INNER ORBIT RING (4 Techs) ════ */}
          <div
            className={`orbit-ring-track orbit-ring-inner ${entranceStage >= 2 ? "track-revealed" : "track-hidden"} ${isOrbitRotating ? "orbit-running" : "orbit-paused"}`}
            style={{ width: `${R_INNER * 2}px`, height: `${R_INNER * 2}px` }}
          >
            {INNER_ORBIT_ITEMS.map((tech, idx) => {
              const { x, y } = getOrbitPosition(R_INNER, tech.angleDeg);
              const isHovered = hoveredTech?.id === tech.id;
              const isDimmed = hoveredTech !== null && hoveredTech.id !== tech.id;

              return (
                <div
                  key={tech.id}
                  className={`orbit-node-anchor ${isOrbitRotating ? "counter-running" : "counter-paused"} ${entranceStage >= 3 ? "node-revealed" : "node-hidden"}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    animationDelay: `${idx * 0.12}s`,
                  }}
                >
                  <button
                    type="button"
                    className={`tech-orbit-node ${isHovered ? "is-hovered" : ""} ${isDimmed ? "is-dimmed" : ""}`}
                    style={{
                      borderColor: isHovered ? tech.brandColor : "rgba(37, 99, 235, 0.22)",
                      boxShadow: isHovered ? `0 0 22px ${tech.brandColor}66, 0 8px 24px rgba(0,0,0,0.12)` : undefined,
                    }}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    onClick={() => setSelectedTech(tech)}
                    aria-label={`View details for ${tech.name}`}
                  >
                    <span className="node-icon-inner">{tech.icon}</span>
                    <span className="node-label-compact">{tech.name}</span>
                  </button>

                  {/* Hover HUD Tooltip */}
                  {isHovered && (
                    <div className="node-hover-tooltip" role="tooltip">
                      <div className="tooltip-header">
                        <span className="tooltip-name">{tech.name}</span>
                        <span className="tooltip-category">{tech.category}</span>
                      </div>
                      <div className="tooltip-tagline">{tech.tagline}</div>
                      <div className="tooltip-hint">Click for full usage breakdown ↗</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ════ 2. MIDDLE ORBIT RING (4 Techs) ════ */}
          <div
            className={`orbit-ring-track orbit-ring-middle ${entranceStage >= 2 ? "track-revealed" : "track-hidden"} ${isOrbitRotating ? "orbit-running-reverse" : "orbit-paused"}`}
            style={{ width: `${R_MIDDLE * 2}px`, height: `${R_MIDDLE * 2}px` }}
          >
            {MIDDLE_ORBIT_ITEMS.map((tech, idx) => {
              const { x, y } = getOrbitPosition(R_MIDDLE, tech.angleDeg);
              const isHovered = hoveredTech?.id === tech.id;
              const isDimmed = hoveredTech !== null && hoveredTech.id !== tech.id;

              return (
                <div
                  key={tech.id}
                  className={`orbit-node-anchor ${isOrbitRotating ? "counter-running-reverse" : "counter-paused"} ${entranceStage >= 3 ? "node-revealed" : "node-hidden"}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    animationDelay: `${0.4 + idx * 0.12}s`,
                  }}
                >
                  <button
                    type="button"
                    className={`tech-orbit-node ${isHovered ? "is-hovered" : ""} ${isDimmed ? "is-dimmed" : ""}`}
                    style={{
                      borderColor: isHovered ? tech.brandColor : "rgba(37, 99, 235, 0.22)",
                      boxShadow: isHovered ? `0 0 22px ${tech.brandColor}66, 0 8px 24px rgba(0,0,0,0.12)` : undefined,
                    }}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    onClick={() => setSelectedTech(tech)}
                    aria-label={`View details for ${tech.name}`}
                  >
                    <span className="node-icon-inner">{tech.icon}</span>
                    <span className="node-label-compact">{tech.name}</span>
                  </button>

                  {/* Hover HUD Tooltip */}
                  {isHovered && (
                    <div className="node-hover-tooltip" role="tooltip">
                      <div className="tooltip-header">
                        <span className="tooltip-name">{tech.name}</span>
                        <span className="tooltip-category">{tech.category}</span>
                      </div>
                      <div className="tooltip-tagline">{tech.tagline}</div>
                      <div className="tooltip-hint">Click for full usage breakdown ↗</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ════ 3. OUTER ORBIT RING (7 Techs) ════ */}
          <div
            className={`orbit-ring-track orbit-ring-outer ${entranceStage >= 2 ? "track-revealed" : "track-hidden"} ${isOrbitRotating ? "orbit-running" : "orbit-paused"}`}
            style={{ width: `${R_OUTER * 2}px`, height: `${R_OUTER * 2}px` }}
          >
            {OUTER_ORBIT_ITEMS.map((tech, idx) => {
              const { x, y } = getOrbitPosition(R_OUTER, tech.angleDeg);
              const isHovered = hoveredTech?.id === tech.id;
              const isDimmed = hoveredTech !== null && hoveredTech.id !== tech.id;

              return (
                <div
                  key={tech.id}
                  className={`orbit-node-anchor ${isOrbitRotating ? "counter-running" : "counter-paused"} ${entranceStage >= 3 ? "node-revealed" : "node-hidden"}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    animationDelay: `${0.8 + idx * 0.1}s`,
                  }}
                >
                  <button
                    type="button"
                    className={`tech-orbit-node ${isHovered ? "is-hovered" : ""} ${isDimmed ? "is-dimmed" : ""}`}
                    style={{
                      borderColor: isHovered ? tech.brandColor : "rgba(37, 99, 235, 0.22)",
                      boxShadow: isHovered ? `0 0 22px ${tech.brandColor}66, 0 8px 24px rgba(0,0,0,0.12)` : undefined,
                    }}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    onClick={() => setSelectedTech(tech)}
                    aria-label={`View details for ${tech.name}`}
                  >
                    <span className="node-icon-inner">{tech.icon}</span>
                    <span className="node-label-compact">{tech.name}</span>
                  </button>

                  {/* Hover HUD Tooltip */}
                  {isHovered && (
                    <div className="node-hover-tooltip" role="tooltip">
                      <div className="tooltip-header">
                        <span className="tooltip-name">{tech.name}</span>
                        <span className="tooltip-category">{tech.category}</span>
                      </div>
                      <div className="tooltip-tagline">{tech.tagline}</div>
                      <div className="tooltip-hint">Click for full usage breakdown ↗</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Status Indicator & Interaction Tip */}
        <div className="universe-status-footer">
          <span className="status-live-indicator">
            <span className={`status-dot ${isOrbitRotating ? "status-spinning" : "status-idle"}`} />
            {hoveredTech
              ? `Inspecting: ${hoveredTech.name} (Orbit Paused)`
              : isOrbitRotating
              ? "Continuous Orbit Active • Hover node to pause"
              : "Orbit Paused (Scroll into view to resume)"}
          </span>
          <span className="status-tip-text">
            💡 Click any technology node to open its complete project usage profile
          </span>
        </div>
      </div>

      {/* ════ CLICK DETAIL MODAL ════ */}
      {selectedTech && (
        <div
          className="tech-modal-overlay"
          onClick={() => setSelectedTech(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="tech-modal-title"
        >
          <div
            className="tech-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="tech-modal-header">
              <div className="modal-title-left">
                <div
                  className="modal-icon-badge"
                  style={{ backgroundColor: selectedTech.accentBg }}
                >
                  {selectedTech.icon}
                </div>
                <div>
                  <h3 id="tech-modal-title" className="modal-tech-title">
                    {selectedTech.name}
                  </h3>
                  <div className="modal-pills-row">
                    <span className="modal-cat-pill">{selectedTech.category}</span>
                    <span className="modal-orbit-pill">{selectedTech.orbitLabel}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedTech(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="tech-modal-body">
              {/* Category & Usage Section */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <span className="section-title-icon">📌</span>
                  Technology Domain &amp; Focus
                </h4>
                <div className="modal-info-box">
                  <div className="modal-field-row">
                    <span className="field-label">Technology:</span>
                    <span className="field-value highlight">{selectedTech.name}</span>
                  </div>
                  <div className="modal-field-row">
                    <span className="field-label">Category:</span>
                    <span className="field-value">{selectedTech.category}</span>
                  </div>
                  <div className="modal-field-row">
                    <span className="field-label">Focus Area:</span>
                    <span className="field-value">{selectedTech.tagline}</span>
                  </div>
                </div>
              </div>

              {/* Real-world Application & Usage */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <span className="section-title-icon">⚡</span>
                  Practical Implementation &amp; Usage
                </h4>
                <p className="modal-usage-desc">{selectedTech.usage}</p>
              </div>

              {/* Key Capabilities */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <span className="section-title-icon">🛠️</span>
                  Key Capabilities in Portfolio Projects
                </h4>
                <div className="modal-capabilities-grid">
                  {selectedTech.capabilities.map((cap, i) => (
                    <div key={i} className="capability-tag">
                      <span className="cap-bullet" style={{ backgroundColor: selectedTech.brandColor }} />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="tech-modal-footer">
              <span className="modal-footer-hint">
                Real-world technology used in Vishal Bhavar&apos;s software &amp; AI projects.
              </span>
              <button
                type="button"
                className="modal-footer-close-btn"
                onClick={() => setSelectedTech(null)}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
