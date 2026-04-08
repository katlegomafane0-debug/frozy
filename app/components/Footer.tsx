"use client";

import Link from "next/link";
import { FrozyLogo } from "./FrozyLogo";
import { useLanguage } from "../contexts/LanguageContext";

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/quality", label: t("nav.quality") },
    { href: "/trade", label: t("nav.trade") },
    { href: "/find-us", label: t("nav.findUs") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <FrozyLogo />
            <p className="footer__tagline">{t("footer.tagline")}</p>
            <div className="lang-toggle lang-toggle--footer">
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
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">{t("footer.navTitle")}</h3>
            <nav aria-label="Footer navigation">
              {navLinks.map((l) => (
                <Link key={l.href} className="footer__link" href={l.href}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">{t("footer.contactTitle")}</h3>
            <address className="footer__address">
              <p className="footer__address-line">
                [ENDEREÇO — A CONFIRMAR COM YAAFICO]
              </p>
              <p className="footer__address-line">[NÚMERO — A CONFIRMAR]</p>
              <a href="mailto:info@frozy.co.mz" className="footer__link">
                info@frozy.co.mz
              </a>
            </address>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">{t("footer.socialTitle")}</h3>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
            <p className="footer__social-note">{t("footer.socialNote")}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Frozy | {t("footer.rights")}
          </p>
          <Link className="footer__link footer__link--small" href="/privacy">
            {t("footer.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
