import type { Metadata } from "next";
import PageNav from "@/components/page-nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Work — Vishal Bhavar",
  description:
    "Projects I've built — AI-powered attendance systems, hotel management with facial recognition, and more.",
};

const PROJECTS = [
  {
    title: "AI-Assisted Smart Attendance System Using Face Recognition",
    year: "2026",
    tech: [
      "Python",
      "OpenCV",
      "Artificial Intelligence",
      "Computer Vision",
      "Facial Recognition",
    ],
    bullets: [
      "Developed an AI-powered Smart Attendance System using Python and OpenCV to automate real-time student identification through facial recognition.",
      "Implemented real-time face detection, recognition, and automated attendance recording, eliminating manual attendance while improving accuracy and efficiency.",
      "Designed and integrated a secure attendance database for reliable data storage, data integrity, and efficient record management and retrieval.",
    ],
  },
  {
    title: "Hotel Face Loyalty — AI-Powered Hotel Management System",
    year: "2026",
    tech: [
      "Python",
      "OpenCV",
      "Facial Recognition",
      "SQLite",
    ],
    bullets: [
      "Developed an AI-powered hotel management system using Python, OpenCV, and facial recognition for secure, contactless guest identification and authentication.",
      "Implemented a customer loyalty management system using SQLite to track guest visits, booking history, and automatically apply tier-based rewards and discounts.",
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      <PageNav />
      <main className="page">
        <section className="page__hero">
          <p className="page__hero-label">02 / Work</p>
          <h1 className="page__hero-title">
            Projects
          </h1>
          <p className="page__hero-desc">
            A selection of AI-powered products and systems I&rsquo;ve designed
            and built — from smart attendance to intelligent hotel management.
          </p>
        </section>

        <div className="page__body">
          <div className="section-block">
            <h2 className="section-block__title">Featured Projects</h2>
            <div className="project-cards">
              {PROJECTS.map((project) => (
                <article key={project.title} className="project-card">
                  <div className="project-card__header">
                    <h3 className="project-card__title">{project.title}</h3>
                    <span className="project-card__year">{project.year}</span>
                  </div>
                  <div className="project-card__tech">
                    {project.tech.map((t) => (
                      <span key={t} className="project-card__tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="project-card__bullets">
                    {project.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
