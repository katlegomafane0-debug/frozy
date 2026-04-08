import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";

/* ── Image URLs ──────────────────────────────────────────── */
const IMG = {
  // Product-line group shots (used for cards)
  frozySabores:
    "https://www.frozy.co.mz/wp-content/uploads/2025/10/Frozy-Sabores.webp",
  trulyJuice:
    "https://www.frozy.co.mz/wp-content/uploads/2025/10/TrulyJuice.webp",
  frozyEnergy:
    "https://www.frozy.co.mz/wp-content/uploads/2025/10/FrozyEnergy.webp",
  gingerAle:
    "https://www.frozy.co.mz/wp-content/uploads/2025/10/Ginger-Ale.webp",
  dryLemon:
    "https://www.frozy.co.mz/wp-content/uploads/2025/10/Dry-Lem.webp",
  aguaTonica:
    "https://www.frozy.co.mz/wp-content/uploads/2025/10/Agua-Tonica.webp",

  // Hero can image
  novaLata:
    "https://www.frozy.co.mz/wp-content/uploads/2025/09/Nova-Lata-scaled.png.webp",
  heroSplash: "/images/hero-splash.png",
};

/* ── Data ────────────────────────────────────────────────── */
const products = [
  {
    name: "Frozy Classic",
    tagline: "O original.",
    image: IMG.frozySabores,
    colour: "oklch(0.50 0.22 25)",
    href: "/products/frozy",
  },
  {
    name: "Truly Juice",
    tagline: "Sumo de fruta africana.",
    image: IMG.trulyJuice,
    colour: "oklch(0.70 0.18 70)",
    href: "/products/truly-juice",
  },
  {
    name: "Frozy Energético",
    tagline: "Energia quando mais precisas.",
    image: IMG.frozyEnergy,
    colour: "oklch(0.75 0.20 110)",
    href: "/products/energy",
  },
  {
    name: "Ginger Ale",
    tagline: "Suave e refrescante.",
    image: IMG.gingerAle,
    colour: "oklch(0.85 0.12 95)",
    href: "/products/ginger-ale",
  },
  {
    name: "Dry Lemon",
    tagline: "O clássico cítrico.",
    image: IMG.dryLemon,
    colour: "oklch(0.88 0.18 100)",
    href: "/products/dry-lemon",
  },
  {
    name: "Água Tónica",
    tagline: "Leveza pura.",
    image: IMG.aguaTonica,
    colour: "oklch(0.80 0.08 220)",
    href: "/products/tonica",
  },
];

const stats = [
  { number: "15+", label: "Anos" },
  { number: "2B+", label: "Litros/Ano" },
  { number: "6", label: "Linhas de Produto" },
  { number: "11", label: "Províncias" },
];

const labBadges = [
  {
    name: "Merieux NutriSciences",
    type: "Segurança Alimentar",
    description:
      "Laboratório global de segurança alimentar. Sede em Paris, certificação ISO 17025.",
    placeholder: "[LOGO — MERIEUX NUTRISCIENCES]",
  },
  {
    name: "SwissLab",
    type: "Análise de Bebidas",
    description:
      "Análise de bebidas com rigor suíço. Parceiro de certificação internacional.",
    placeholder: "[LOGO — SWISSLAB]",
  },
  {
    name: "LHNAA",
    type: "Certificação Nacional",
    description:
      "Laboratório Nacional de Higiene de Alimentos e Águas. Certificação nacional moçambicana.",
    placeholder: "[LOGO — LHNAA]",
  },
];

/* ── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="page-hero page-hero--full" aria-label="Hero">
        <div className="page-hero__media">
          <Image
            src={IMG.heroSplash}
            alt="Frozy product range splash"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={100}
          />
        </div>
        <div className="page-hero__overlay" aria-hidden="true" />
        <div className="page-hero__content container">
          <p className="section-label">Frozy</p>
          <h1>
            {"Mais de 15 anos.\nO sabor que Moçambique escolheu."}
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              marginBottom: "2rem",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Somos a Frozy — fabricantes de refrigerantes moçambicanos.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link className="btn btn--outline btn--lg" href="/products">
              Explorar Frozy
            </Link>
            <Link className="btn btn--accent btn--lg" href="/trade">
              Seja Parceiro
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Audience Router ──────────────────────────────── */}
      <section className="audience-router" aria-label="Navigation options">
        <Link
          className="audience-router__card audience-router__card--products"
          href="/products"
        >
          <div className="audience-router__image">
            <Image
              src={IMG.frozySabores}
              alt="Frozy product range"
              width={600}
              height={450}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="audience-router__content">
            <h2 className="audience-router__title">Nossos Produtos</h2>
            <p className="audience-router__sub">
              Seis linhas. Dezenas de sabores.
            </p>
            <span className="audience-router__cta">
              Ver Produtos <ArrowRight size={18} />
            </span>
          </div>
        </Link>

        <Link
          className="audience-router__card audience-router__card--trade"
          href="/trade"
        >
          <div className="audience-router__icon-wrap" aria-hidden="true">
            <Handshake size={64} strokeWidth={1} />
          </div>
          <div className="audience-router__content">
            <h2 className="audience-router__title">Seja Parceiro</h2>
            <p className="audience-router__sub">
              Distribua o sabor de Moçambique.
            </p>
            <span className="audience-router__cta audience-router__cta--accent">
              Parceria Comercial <ArrowRight size={18} />
            </span>
          </div>
        </Link>
      </section>

      {/* ─── Stat Bar ─────────────────────────────────────── */}
      <div className="stat-bar" role="list">
        {stats.map((s) => (
          <div key={s.label} className="stat-bar__item" role="listitem">
            <span className="stat-bar__number">{s.number}</span>
            <span className="stat-bar__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ─── Products ─────────────────────────────────────── */}
      <section className="section" aria-labelledby="products-heading">
        <div className="container">
          <span className="section-label">As Nossas Bebidas</span>
          <h2 id="products-heading" className="section-title">
            Nossos Produtos
          </h2>
          <p className="section-sub">
            Seis linhas. Dezenas de sabores. Uma origem.
          </p>

          <div className="products-grid">
            {products.map((p) => (
              <article key={p.name} className="product-card">
                <div className="product-card__image">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={320}
                    height={320}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <div
                    className="product-card__colour-bar"
                    style={{ background: p.colour }}
                    aria-hidden="true"
                  />
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__tagline">{p.tagline}</p>
                  <Link
                    className="product-card__link"
                    aria-label={`Ver mais → ${p.name}`}
                    href={p.href}
                  >
                    Ver mais →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Story ────────────────────────────────────────── */}
      <section
        className="section"
        style={{ backgroundColor: "var(--color-bg-surface)" }}
        aria-labelledby="story-heading"
      >
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <span className="section-label">A Nossa História</span>
              <h2 id="story-heading" className="section-title">
                Feito em Moçambique. Para o mundo.
              </h2>
              <p>
                A Frozy nasceu em 2011 com uma missão simples: produzir
                refrigerantes de qualidade certificada em Moçambique. Mais de uma
                década depois, somos o maior fabricante do país.
              </p>
              <p>
                Com uma capacidade de 2 mil milhões de litros por ano e
                instalações modernas em Maputo, levamos o sabor de Moçambique
                para além-fronteiras.
              </p>
              <Link
                className="btn btn--ghost"
                style={{ alignSelf: "flex-start" }}
                href="/about"
              >
                A Nossa História →
              </Link>
            </div>
            <div className="story-image">
              <Image
                src={IMG.novaLata}
                alt="Frozy nova lata"
                width={800}
                height={600}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quality ──────────────────────────────────────── */}
      <section
        className="section"
        style={{ backgroundColor: "var(--color-bg-elevated)" }}
        aria-labelledby="quality-heading"
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">Qualidade</span>
          <h2 id="quality-heading" className="section-title">
            Cada lata testada. Cada resultado documentado.
          </h2>

          <div className="lab-badges-grid">
            {labBadges.map((b) => (
              <div key={b.name} className="lab-badge">
                <div className="lab-badge__logo">
                  <div
                    className="placeholder"
                    style={{ aspectRatio: "1/1" }}
                    aria-label={b.placeholder}
                    role="img"
                  >
                    <div className="placeholder__bg" />
                    <svg
                      viewBox="0 0 400 300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="placeholder__svg"
                    >
                      <circle
                        cx="200"
                        cy="150"
                        r="80"
                        stroke="white"
                        strokeWidth="1.5"
                        opacity="0.4"
                      />
                      <circle
                        cx="200"
                        cy="150"
                        r="55"
                        stroke="white"
                        strokeWidth="1.5"
                        opacity="0.25"
                      />
                      <line
                        x1="145"
                        y1="120"
                        x2="255"
                        y2="180"
                        stroke="white"
                        strokeWidth="1.5"
                        opacity="0.2"
                      />
                      <line
                        x1="255"
                        y1="120"
                        x2="145"
                        y2="180"
                        stroke="white"
                        strokeWidth="1.5"
                        opacity="0.2"
                      />
                    </svg>
                    <span className="placeholder__label">
                      {b.placeholder}
                    </span>
                  </div>
                </div>
                <div className="lab-badge__body">
                  <h4 className="lab-badge__name">{b.name}</h4>
                  <p className="lab-badge__type">{b.type}</p>
                  <p className="lab-badge__description">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Find Us ──────────────────────────────────────── */}
      <section className="section" aria-labelledby="findus-heading">
        <div className="container">
          <div className="findus-grid">
            <div>
              <span className="section-label">Distribuição</span>
              <h2 id="findus-heading" className="section-title">
                Encontra Frozy em todas as províncias de Moçambique
              </h2>
              <p style={{ marginBottom: "var(--spacing-xl)" }}>
                Presente nas 11 províncias e na África do Sul.
              </p>
              <Link className="btn btn--accent" href="/find-us">
                Ver todos os pontos de venda →
              </Link>
            </div>
            <div className="findus-image">
              <Image
                src={IMG.novaLata}
                alt="Frozy products"
                width={800}
                height={450}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="cta-banner" aria-label="Call to action">
        <div className="container">
          <div className="cta-banner__inner">
            <div className="cta-banner__text">
              <h2 className="cta-banner__headline">
                Quer abastecer o refrigerante favorito de África?
              </h2>
              <p className="cta-banner__sub">
                Fornecimento fiável. Qualidade certificada. Pronto para as suas
                prateleiras.
              </p>
            </div>
            <Link className="btn btn--white btn--lg" href="/trade">
              Parceria Connosco →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
