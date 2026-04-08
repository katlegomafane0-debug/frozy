"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Nav
    "nav.home": "Início",
    "nav.about": "Sobre Nós",
    "nav.products": "Produtos",
    "nav.quality": "Qualidade",
    "nav.trade": "Parceiros",
    "nav.findUs": "Onde Encontrar",
    "nav.contact": "Contactos",
    "nav.bePartner": "Seja Parceiro",
    // Hero
    "hero.label": "Frozy",
    "hero.title": "Mais de 15 anos.\nO sabor que Moçambique escolheu.",
    "hero.subtitle": "Somos a Frozy — fabricantes de refrigerantes moçambicanos.",
    "hero.explore": "Explorar Frozy",
    "hero.partner": "Seja Parceiro",
    // Audience Router
    "router.products.title": "Nossos Produtos",
    "router.products.sub": "Seis linhas. Dezenas de sabores.",
    "router.products.cta": "Ver Produtos",
    "router.trade.title": "Seja Parceiro",
    "router.trade.sub": "Distribua o sabor de Moçambique.",
    "router.trade.cta": "Parceria Comercial",
    // Stats
    "stats.years": "Anos",
    "stats.liters": "Litros/Ano",
    "stats.lines": "Linhas de Produto",
    "stats.provinces": "Províncias",
    // Products Section
    "products.label": "As Nossas Bebidas",
    "products.title": "Nossos Produtos",
    "products.sub": "Seis linhas. Dezenas de sabores. Uma origem.",
    "products.viewMore": "Ver mais →",
    // Story Section
    "story.label": "A Nossa História",
    "story.title": "Feito em Moçambique. Para o mundo.",
    "story.p1": "A Frozy nasceu em 2011 com uma missão simples: produzir refrigerantes de qualidade certificada em Moçambique. Mais de uma década depois, somos o maior fabricante do país.",
    "story.p2": "Com uma capacidade de 2 mil milhões de litros por ano e instalações modernas em Maputo, levamos o sabor de Moçambique para além-fronteiras.",
    "story.cta": "A Nossa História →",
    // Footer
    "footer.tagline": "Feito em Moçambique",
    "footer.navTitle": "Navegação",
    "footer.contactTitle": "Contacto",
    "footer.socialTitle": "Redes Sociais",
    "footer.socialNote": "Segue-nos nas redes sociais",
    "footer.rights": "Todos os direitos reservados",
    "footer.privacy": "Política de Privacidade",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.quality": "Quality",
    "nav.trade": "Partners",
    "nav.findUs": "Where to Find Us",
    "nav.contact": "Contact",
    "nav.bePartner": "Become a Partner",
    // Hero
    "hero.label": "Frozy",
    "hero.title": "Over 15 years.\nThe taste Mozambique chose.",
    "hero.subtitle": "We are Frozy — Mozambican soft drink manufacturers.",
    "hero.explore": "Explore Frozy",
    "hero.partner": "Become a Partner",
    // Audience Router
    "router.products.title": "Our Products",
    "router.products.sub": "Six lines. Dozens of flavors.",
    "router.products.cta": "View Products",
    "router.trade.title": "Become a Partner",
    "router.trade.sub": "Distribute the taste of Mozambique.",
    "router.trade.cta": "Commercial Partnership",
    // Stats
    "stats.years": "Years",
    "stats.liters": "Liters/Year",
    "stats.lines": "Product Lines",
    "stats.provinces": "Provinces",
    // Products Section
    "products.label": "Our Drinks",
    "products.title": "Our Products",
    "products.sub": "Six lines. Dozens of flavors. One origin.",
    "products.viewMore": "View more →",
    // Story Section
    "story.label": "Our Story",
    "story.title": "Made in Mozambique. For the world.",
    "story.p1": "Frozy was born in 2011 with a simple mission: to produce certified quality soft drinks in Mozambique. Over a decade later, we are the largest manufacturer in the country.",
    "story.p2": "With a capacity of 2 billion liters per year and modern facilities in Maputo, we take the taste of Mozambique across borders.",
    "story.cta": "Our Story →",
    // Footer
    "footer.tagline": "Made in Mozambique",
    "footer.navTitle": "Navigation",
    "footer.contactTitle": "Contact",
    "footer.socialTitle": "Social Media",
    "footer.socialNote": "Follow us on social media",
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "pt" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
