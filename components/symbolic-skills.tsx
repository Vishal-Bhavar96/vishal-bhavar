"use client";

import React from "react";

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  borderColor: string;
}

export interface SkillCategoryGroup {
  title: string;
  skills: SkillItem[];
}

export const CATEGORY_SKILLS_DATA: SkillCategoryGroup[] = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        color: "#1e40af",
        bg: "rgba(59, 130, 246, 0.1)",
        borderColor: "rgba(59, 130, 246, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <linearGradient id="py-a-p" x1="18.5" y1="18.5" x2="72.5" y2="72.5" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#387EB8" />
              <stop offset="1" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="py-b-p" x1="56.5" y1="56.5" x2="110.5" y2="110.5" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FFE052" />
              <stop offset="1" stopColor="#FFC321" />
            </linearGradient>
            <path fill="url(#py-a-p)" d="M63.2 12c-27.4 0-25.7 11.9-25.7 11.9l.1 12.3h26.2v3.7H26.3S12 38.3 12 65.8c0 27.5 12.5 26.5 12.5 26.5h7.5v-10.9s-.4-12.9 12.9-12.9h25.8s12.1.2 12.1-11.8V35.9S84.9 12 63.2 12zm-14.4 8.2c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z" />
            <path fill="url(#py-b-p)" d="M64.8 116c27.4 0 25.7-11.9 25.7-11.9l-.1-12.3H64.2v-3.7h37.5s14.3 1.6 14.3-25.9c0-27.5-12.5-26.5-12.5-26.5h-7.5v10.9s.4 12.9-12.9 12.9H57.3s-12.1-.2-12.1 11.8v21.8s-2.1 23.9 19.6 23.9zm14.4-8.2c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z" />
          </svg>
        ),
      },
      {
        name: "SQL",
        color: "#0284c7",
        bg: "rgba(2, 132, 199, 0.1)",
        borderColor: "rgba(2, 132, 199, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <ellipse cx="64" cy="38" rx="34" ry="14" fill="#00A8E8" />
            <path fill="#0077B6" d="M30 38v24c0 7.7 15.2 14 34 14s34-6.3 34-14V38" />
            <path fill="#0096C7" d="M30 62v24c0 7.7 15.2 14 34 14s34-6.3 34-14V62" />
            <path fill="#48CAE4" d="M64 28c-18.8 0-34 6.3-34 14s15.2 14 34 14 34-6.3 34-14-15.2-14-34-14zm0 20c-13.2 0-24-4.5-24-10s10.8-10 24-10 24 4.5 24 10-10.8 10-24 10z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Web Frameworks",
    skills: [
      {
        name: "Django",
        color: "#047857",
        bg: "rgba(16, 185, 129, 0.1)",
        borderColor: "rgba(16, 185, 129, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#092E20" />
            <path fill="#44B78B" d="M78.6 30h15.2v50.4c0 12.4-3.8 19.9-11.2 24.1-5.3 3-12.4 4-20 4-4.8 0-9.8-.5-13.8-1.5l2.3-12.4c3 1 6.5 1.5 10.3 1.5 8.1 0 13.8-3.8 13.8-13.8V30zm-35.3 23c-8.6 0-14.4 6-14.4 14.9 0 8.6 5.5 14.4 13.8 14.4 4 0 7.8-1.3 10.3-3.3v-23c-2.3-2-5.8-3-9.7-3zm9.7-11.6v10.6c-2.8-1.5-6.8-2.5-11.1-2.5-13.8 0-25 9.8-25 24.6 0 14.4 10.6 24.4 25.4 24.4 4.5 0 8.1-.8 10.8-2.3v1.8c0 7.3-4.5 11.1-12.6 11.1-4 0-8.6-.8-11.6-2.3l-2.8 11.1c4 1.8 10.3 2.8 16.6 2.8 16.4 0 24.7-8.1 24.7-24.7V41.4H53z" />
          </svg>
        ),
      },
      {
        name: "HTML5",
        color: "#c2410c",
        bg: "rgba(249, 115, 22, 0.1)",
        borderColor: "rgba(249, 115, 22, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <path fill="#E34F26" d="M19 114.7L9.4 7h109.2l-9.6 107.7L63.9 121" />
            <path fill="#EF652A" d="M64 113.1l36.5-10.1 8.3-93H64" />
            <path fill="#FFF" d="M64 53.6H44.9l-1.3-14.7H64V24.5H26.3l.4 4.4 3.4 39.4H64v-14.7zm0 35.8l-.2.1-15.6-4.2-1-11.2H32.4l1.9 21.8 29.5 8.2.2.1V89.4z" />
          </svg>
        ),
      },
      {
        name: "CSS3",
        color: "#0284c7",
        bg: "rgba(14, 165, 233, 0.1)",
        borderColor: "rgba(14, 165, 233, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <path fill="#1572B6" d="M19 114.7L9.4 7h109.2l-9.6 107.7L63.9 121" />
            <path fill="#33A9DC" d="M64 113.1l36.5-10.1 8.3-93H64" />
            <path fill="#FFF" d="M64 53.6H44.9l-1.3-14.7H64V24.5H26.3l.4 4.4 3.4 39.4H64v-14.7zm-19.3 22l1 11.2 14.3 3.9V105l-29.5-8.2-1.9-21.8H44.7z" />
          </svg>
        ),
      },
      {
        name: "JavaScript",
        color: "#a16207",
        bg: "rgba(234, 179, 8, 0.12)",
        borderColor: "rgba(234, 179, 8, 0.3)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="16" fill="#F7DF1E" />
            <path fill="#000" d="M67.3 104.5c3.2 5.1 7.6 8.4 15.3 8.4 6.5 0 10.6-3.2 10.6-7.6 0-5.3-4.2-7.2-11.3-10.3l-3.9-1.7c-11.3-4.8-18.8-10.8-18.8-23.4 0-11.6 9-20.5 23-20.5 9.9 0 17 3.5 21.8 12.1l-10.4 6.7c-2.7-4.8-6-6.7-11.3-6.7-4.5 0-7.7 2.5-7.7 6.1 0 4.4 2.9 6.2 9.5 9.1l3.9 1.7c13.4 5.7 20.8 11.4 20.8 24.3 0 13.8-10.7 21.9-26.5 21.9-14.7 0-23.8-6.9-28.5-16.5l11.5-6.8zM31.2 104.2c2.4 4.1 5.3 7.1 10.8 7.1 5.6 0 9.2-2.3 9.2-11.3V49.9h14.7v50.5c0 16.7-9.8 24-23.6 24-11.8 0-19.4-6-23-14l11.9-6.2z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        color: "#0f766e",
        bg: "rgba(20, 184, 166, 0.1)",
        borderColor: "rgba(20, 184, 166, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#00618A" />
            <path fill="#F29111" d="M64 24c-22 0-40 16-40 38 0 15 8.5 28 21 34l-5 18 20-10c1.3.1 2.6.2 4 .2 22 0 40-16 40-38S86 24 64 24z" />
          </svg>
        ),
      },
      {
        name: "MongoDB",
        color: "#15803d",
        bg: "rgba(34, 197, 94, 0.1)",
        borderColor: "rgba(34, 197, 94, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#11271D" />
            <path fill="#47A248" d="M64.6 14.3c-1.3 0-2.4 1-2.4 2.3v34.4C50 56.6 42 70.8 42 84c0 14.8 9.8 27.2 22.6 31.4v-3.5c-9.8-3.9-16.7-14.1-16.7-25.7 0-11.8 7.4-24.8 16.7-29.8v-42.1z" />
            <path fill="#499D4A" d="M63.4 14.3v97.6c12.8-4.2 22.6-16.6 22.6-31.4 0-13.2-8-27.4-20.2-32.9v-31c0-1.3-1.1-2.3-2.4-2.3z" />
          </svg>
        ),
      },
      {
        name: "SQLite",
        color: "#0369a1",
        bg: "rgba(2, 132, 199, 0.1)",
        borderColor: "rgba(2, 132, 199, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#0F2D37" />
            <path fill="#008BCF" d="M32 44h64v10H32zm0 18h64v10H32zm0 18h40v10H32z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "AI & Computer Vision",
    skills: [
      {
        name: "OpenCV",
        color: "#059669",
        bg: "rgba(16, 185, 129, 0.12)",
        borderColor: "rgba(16, 185, 129, 0.3)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#121824" />
            <circle cx="64" cy="38" r="18" fill="#FF2A2A" />
            <circle cx="44" cy="80" r="18" fill="#00D26A" />
            <circle cx="84" cy="80" r="18" fill="#2A85FF" />
          </svg>
        ),
      },
      {
        name: "Facial Recognition",
        color: "#2563eb",
        bg: "rgba(37, 99, 235, 0.12)",
        borderColor: "rgba(37, 99, 235, 0.3)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
            <circle cx="9" cy="9" r="1" fill="#2563eb" />
            <circle cx="15" cy="9" r="1" fill="#2563eb" />
            <path d="M10 15a2 2 0 0 0 4 0" />
          </svg>
        ),
      },
      {
        name: "Artificial Intelligence",
        color: "#d97706",
        bg: "rgba(245, 158, 11, 0.12)",
        borderColor: "rgba(245, 158, 11, 0.3)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#0A192F" />
            <rect x="36" y="36" width="56" height="56" rx="8" fill="none" stroke="#00F2FE" strokeWidth="6" />
            <circle cx="64" cy="64" r="14" fill="#00F2FE" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Tools & Environments",
    skills: [
      {
        name: "Git",
        color: "#b91c1c",
        bg: "rgba(239, 68, 68, 0.1)",
        borderColor: "rgba(239, 68, 68, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#1E1715" />
            <path fill="#F05032" d="M112.5 58.8L69.2 15.5c-2.4-2.4-6.3-2.4-8.7 0L47.7 28.3l14.9 14.9c2.5-.8 5.4 0 7.3 1.9 2 2 2.6 4.9 1.8 7.4l14.4 14.4c2.5-.8 5.4 0 7.4 1.9 2.8 2.8 2.8 7.3 0 10.1-2.8 2.8-7.3 2.8-10.1 0-2.1-2.1-2.7-5.1-1.8-7.7L67.9 57.5v22.4c.7.4 1.3.9 1.8 1.4 2.8 2.8 2.8 7.3 0 10.1-2.8 2.8-7.3 2.8-10.1 0-2.8-2.8-2.8-7.3 0-10.1.7-.7 1.6-1.3 2.5-1.7V56.8c-1-.4-1.8-1-2.5-1.7-2.1-2.1-2.6-5.1-1.7-7.7L43 32.5 15.5 60c-2.4 2.4-2.4 6.3 0 8.7l43.3 43.3c2.4 2.4 6.3 2.4 8.7 0l45-44.5c2.4-2.4 2.4-6.3 0-8.7z" />
          </svg>
        ),
      },
      {
        name: "Visual Studio Code",
        color: "#0284c7",
        bg: "rgba(14, 165, 233, 0.1)",
        borderColor: "rgba(14, 165, 233, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#0066B8" />
            <path fill="#FFF" d="M34 40l30 24-30 24V40zm34-6l32 30-32 30V34z" />
          </svg>
        ),
      },
      {
        name: "MySQL Workbench",
        color: "#0f766e",
        bg: "rgba(20, 184, 166, 0.1)",
        borderColor: "rgba(20, 184, 166, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#005B88" />
            <path fill="#00D2FF" d="M30 40h68v16H30zm0 24h68v16H30zm0 24h44v16H30z" />
          </svg>
        ),
      },
      {
        name: "Linux (Ubuntu)",
        color: "#c2410c",
        bg: "rgba(249, 115, 22, 0.1)",
        borderColor: "rgba(249, 115, 22, 0.25)",
        icon: (
          <svg width="22" height="22" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#2C001E" />
            <circle cx="64" cy="64" r="40" fill="#E95420" />
            <circle cx="64" cy="64" r="28" fill="#FFF" opacity="0.9" />
          </svg>
        ),
      },
    ],
  },
];

export default function SymbolicSkills() {
  return (
    <div className="category-skills-container">
      <div style={{ marginBottom: "1.75rem" }}>
        <h2 style={{ 
          fontSize: "1.65rem", 
          fontWeight: "800", 
          color: "#0f172a", 
          display: "flex", 
          alignItems: "center", 
          gap: "0.6rem",
          margin: 0
        }}>
          <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "linear-gradient(135deg, #2563eb, #7c3aed)", display: "inline-block" }} />
          Technical Skills
        </h2>
        <p style={{ color: "#6b7280", fontSize: "1rem", marginTop: "0.3rem", margin: 0 }}>
          Core programming languages, web frameworks, databases, AI/CV tools, and engineering environments.
        </p>
      </div>

      <div className="category-skills-grid">
        {CATEGORY_SKILLS_DATA.map((catGroup) => (
          <div key={catGroup.title} className="category-glass-card">
            <h3 className="category-card-title">{catGroup.title}</h3>
            <div className="category-pills-row">
              {catGroup.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="symbolic-skill-badge"
                  style={{
                    color: skill.color,
                    background: skill.bg,
                    borderColor: skill.borderColor,
                  }}
                >
                  <span className="badge-icon-wrap">{skill.icon}</span>
                  <span className="badge-name-text">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
