"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TOPMATE = "https://topmate.io/suryansh777777/1820500";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/experiments", label: "Experiments" },
];

export default function PageNav() {
  const pathname = usePathname();

  return (
    <nav className="page-nav" aria-label="Primary navigation">
      <div className="page-nav__left">
        <Link href="/" className="page-nav__brand" aria-label="Home">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8 6 L24 6 L24 10 L12 10 L12 14 L24 14 L24 26 L8 26 L8 22 L20 22 L20 18 L8 18 Z"
              fill="#0d0e10"
            />
          </svg>
          <span className="page-nav__brand-name">Vishal</span>
        </Link>
      </div>

      <div className="page-nav__center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`page-nav__link${
              pathname === link.href ? " page-nav__link--active" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="page-nav__right">
        <a
          href={TOPMATE}
          target="_blank"
          rel="noreferrer"
          className="page-nav__cta"
        >
          Let&rsquo;s talk
        </a>
      </div>
    </nav>
  );
}
