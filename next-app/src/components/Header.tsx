"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home", num: "01" },
  { href: "/mission", label: "Mission", num: "02" },
  { href: "/team", label: "Team", num: "03" },
  { href: "/sponsors", label: "Sponsors", num: "04" },
  { href: "/contact", label: "Contact", num: "05" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <Link className="nav-brand" href="/" aria-label="Covert Robotics home">
        <img className="nav-mark" src="/mark.svg" alt="" />
        <span className="nav-name">
          COVERT<em>ROBOTICS</em>
        </span>
      </Link>
      <nav className={`nav-links${open ? " open" : ""}`} id="navLinks" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            <span>{link.num}</span>
            {link.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/sponsors">
          Sponsor&nbsp;Us
        </Link>
      </nav>
      <button
        className={`nav-burger${open ? " open" : ""}`}
        id="navBurger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
