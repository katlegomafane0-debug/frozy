"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { useLanguage } from "./contexts/LanguageContext";

/* ── Image URLs ──────────────────────────────────────────── */
const IMG = {
  frozySabores: "https://www.frozy.co.mz/wp-content/uploads/2025/10/Frozy-Sabores.webp",
  trulyJuice: "https://www.frozy.co.mz/wp-content/uploads/2025/10/TrulyJuice.webp",
  frozyEnergy: "https://www.frozy.co.mz/wp-content/uploads/2025/10/FrozyEnergy.webp",
  gingerAle: "https://www.frozy.co.mz/wp-content/uploads/2025/10/Ginger-Ale.webp",
  dryLemon: "https://www.frozy.co.mz/wp-content/uploads/2025/10/Dry-Lem.webp",
  aguaTonica: "https://www.frozy.co.mz/wp-content/uploads/2025/10/Agua-Tonica.webp",
  novaLata: "https://www.frozy.co.mz/wp-content/uploads/2025/09/Nova-Lata-scaled.png.webp",
  heroSplash: "/images/hero-splash.png",
};

export default function Home() {
  const { t } = useLanguage();

  const products = [
    { name: "Frozy Classic", tagline: "O original.", image: IMG.frozySabores, colour: "oklch(0.50 0.22 25)", href: "/products/frozy" },
    { name: "Truly Juice", tagline: "Sumo de fruta africana.", image: IMG.trulyJuice, colour: "oklch(0.70 0.18 70)", href: "/products/truly-juice" },
    { name: "Frozy Energético", tagline: "Energia quando mais precisas.", image: IMG.frozyEnergy, colour: "oklch(0.75 0.20 110)", href: "/products/energy" },
    { name: "Ginger Ale", tagline: "Suave e refrescante.", image: IMG.gingerAle, colour: "oklch(0.85 0.12 95)", href: "/products/ginger-ale" },
    { name: "Dry Lemon", tagline: "O clássico cítrico.", image: IMG.dryLemon, colour: "oklch(0.88 0.18 100)", href: "/products/dry-lemon" },
    { name: "Água Tónica", tagline: "Leveza pura.", image: IMG.aguaTonica, colour: "oklch(0.80 0.08 220)", href: "/products/tonica" },
  ];

  const stats = [
    { number: "15+", label: t("stats.years") },
    { number: "2B+", label: t("stats.liters") },
    { number: "6", label: t("stats.lines") },
    { number: "11", label: t("stats.provinces") },
  ];

  return (
    <>
      <section className="page-hero page-hero--full" aria-label="Hero">
        <div className="page-hero__media">
          <Image src={IMG.heroSplash} alt="Frozy product range splash" fill style={{ objectFit: "cover", objectPosition: "center" }} priority quality={100} />
        </div>
        <div className="page-hero__overlay" aria-hidden="true" />
        <div className="page-hero__content container">
          <p className="section-label">{t("hero.label")}</p>
          <h1>{t("hero.title")}</h1>
          <p style={{ fontSize: "1.125rem", marginBottom: "2rem", color: "rgba(255,255,255,0.7)" }}>{t("hero.subtitle")}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link className="btn btn--outline btn--lg" href="/products">{t("hero.explore")}</Link>
            <Link className="btn btn--accent btn--lg" href="/trade">{t("hero.partner")}</Link>
          </div>
        </div>
      </section>

      <section className="audience-router" aria-label="Navigation options">
        <Link className="audience-router__card audience-router__card--products" href="/products">
          <div className="audience-router__image">
            <Image src={IMG.frozySabores} alt="Frozy product range" width={600} height={450} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="audience-router__content">
            <h2 className="audience-router__title">{t("router.products.title")}</h2>
            <p className="audience-router__sub">{t("router.products.sub")}</p>
            <span className="audience-router__cta">{t("router.products.cta")} <ArrowRight size={18} /></span>
          </div>
        </Link>

        <Link className="audience-router__card audience-router__card--trade" href="/trade">
          <div className="audience-router__icon-wrap" aria-hidden="true"><Handshake size={64} strokeWidth={1} /></div>
          <div className="audience-router__content">
            <h2 className="audience-router__title">{t("router.trade.title")}</h2>
            <p className="audience-router__sub">{t("router.trade.sub")}</p>
            <span className="audience-router__cta audience-router__cta--accent">{t("router.trade.cta")} <ArrowRight size={18} /></span>
          </div>
        </Link>
      </section>

      <div className="stat-bar" role="list">
        {stats.map((s) => (
          <div key={s.label} className="stat-bar__item" role="listitem">
            <span className="stat-bar__number">{s.number}</span>
            <span className="stat-bar__label">{s.label}</span>
          </div>
        ))}
      </div>

      <section className="section" aria-labelledby="products-heading">
        <div className="container">
          <span className="section-label">{t("products.label")}</span>
          <h2 id="products-heading" className="section-title">{t("products.title")}</h2>
          <p className="section-sub">{t("products.sub")}</p>
          <div className="products-grid">
            {products.map((p) => (
              <article key={p.name} className="product-card">
                <div className="product-card__image">
                  <Image src={p.image} alt={p.name} width={320} height={320} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  <div className="product-card__colour-bar" style={{ background: p.colour }} aria-hidden="true" />
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__tagline">{p.tagline}</p>
                  <Link className="product-card__link" aria-label={`Ver mais → ${p.name}`} href={p.href}>{t("products.viewMore")}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--color-bg-surface)" }} aria-labelledby="story-heading">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <span className="section-label">{t("story.label")}</span>
              <h2 id="story-heading" className="section-title">{t("story.title")}</h2>
              <p>{t("story.p1")}</p>
              <p>{t("story.p2")}</p>
              <Link className="btn btn--ghost" style={{ alignSelf: "flex-start" }} href="/about">{t("story.cta")}</Link>
            </div>
            <div className="story-image">
              <Image src={IMG.novaLata} alt="Frozy nova lata" width={800} height={600} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
