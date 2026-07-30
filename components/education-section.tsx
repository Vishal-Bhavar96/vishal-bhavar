"use client";

import React from "react";
import Image from "next/image";

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  year: string;
  logo?: string;
  highlights: string[];
}

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Electronics & Telecommunication Engineering (E&TC)",
    institution: "Amrutvahini College of Engineering, Sangamner",
    year: "",
    logo: "/images/college-logo.png",
    highlights: [
      "Focused on Data Structures, Algorithms, Python Programming, and Database Systems.",
      "Specialized coursework in Artificial Intelligence, Computer Vision (OpenCV), and Web Application Development.",
      "Completed hands-on software engineering projects in AI-driven smart attendance and facial recognition systems.",
    ],
  },
  {
    degree: "Infosys Springboard Certification & Virtual Internship",
    field: "Python Full Stack Development & Specialization",
    institution: "Infosys Springboard 7.0",
    year: "2026",
    logo: "/images/infosys-springboard-logo.jpg",
    highlights: [
      "Advanced Python backend development with Django, Object-Oriented System Architecture, and SQL databases.",
      "Hands-on full stack application development and software quality best practices.",
    ],
  },
];

export default function EducationSection() {
  return (
    <div className="education-container">
      <div className="education-grid">
        {EDUCATION_DATA.map((edu, idx) => (
          <div key={idx} className="glass-card education-card">
            {edu.logo && (
              <div className="education-logo-header">
                <div className="education-logo-badge">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    width={76}
                    height={76}
                    className="college-symbol-img"
                  />
                </div>
              </div>
            )}

            <div className="education-card-header">
              {!edu.logo && (
                <div className="education-badge-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6" />
                  </svg>
                </div>
              )}
              <div>
                <h4 className="education-degree">{edu.degree}</h4>
                <p className="education-field">{edu.field}</p>
                <div className="education-meta">
                  <span className="education-institution">{edu.institution}</span>
                  {edu.year && <span className="education-year">{edu.year}</span>}
                </div>
              </div>
            </div>

            <ul className="education-highlights">
              {edu.highlights.map((h, hIdx) => (
                <li key={hIdx}>
                  <span className="bullet-dot">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

