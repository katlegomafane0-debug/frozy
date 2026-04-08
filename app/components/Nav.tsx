"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { FrozyLogo } from "./FrozyLogo";
import { useLanguage } from "../contexts/LanguageContext";

export function Nav() {
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/quality", label: t("nav.quality") },
    { href: "/trade", label: t("nav.trade") },
    { href: "/find-us", label: t("nav.findUs") },
    { href: "/contact", label: t("nav.contact") },
  ];

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
          <div className="lang-toggle">
            <button 
              className={language === "pt" ? "lang-toggle__active" : ""} 
              onClick={() => setLanguage("pt")}
            >
              PT
            </button>
            <span className="lang-toggle__divider">|</span>
            <button 
              className={language === "en" ? "lang-toggle__active" : ""} 
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
          <Link className="btn btn--accent btn--sm" href="/trade">
            {t("nav.bePartner")}
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
