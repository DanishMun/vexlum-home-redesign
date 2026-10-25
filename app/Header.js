"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "./data";

export default function Header() {
  // true = the phone menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" aria-label="Vexlum home">
          <Image src="/images/logo.png" alt="Vexlum" width={140} height={22} priority />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Open menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="button button-small" onClick={() => setMenuOpen(false)}>
            Request a quote
          </a>
        </nav>
      </div>
    </header>
  );
}
