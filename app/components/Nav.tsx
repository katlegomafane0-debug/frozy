"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { FrozyLogo } from "./FrozyLogo";

const links = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Sobre Nós" },
  { href: "/products", label: "Produtos" },
  { href: "/quality", label: "Qualidade" },
  { href: "/trade", label: "Parceiros" },
  { href: "/find-us", label: "Onde Encontrar" },
  { href: "/contact", label: "Contactos" },
];

export function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner container">
        <Link className="nav__logo" aria-label="Frozy — Home" href="/">
          <FrozyLogo />
        </Link>

        <nav className="nav__links" aria-label="Main navigation">
          {links.map((l) => (
            <Link key={l.href} className="nav__link" href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="lang-toggle" aria-label="Switch to English">
            <span className="lang-toggle__active">PT</span>
            <span className="lang-toggle__divider">|</span>
            <span>EN</span>
          </button>
          <Link className="btn btn--accent btn--sm" href="/trade">
            Seja Parceiro
          </Link>
        </div>

        <button
          className="nav__hamburger"
          aria-expanded="false"
          aria-label="Toggle navigation menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
