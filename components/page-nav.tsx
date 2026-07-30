"use client";

import Link from "next/link";
import Image from "next/image";
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
        <Link href="/" className="page-nav__brand" aria-label="Home" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Image
            src="/images/site-logo.jpg"
            alt="VB Logo"
            width={34}
            height={34}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
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
