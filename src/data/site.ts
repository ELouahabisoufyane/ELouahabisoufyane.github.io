export const site = {
  name: "Mon Conseil Thermique",
  url: "https://monconseilthermique.fr",
  phone: "06 51 41 60 85",
  phoneHref: "+33651416085",
  // À VÉRIFIER : adresse e-mail réelle de l’entreprise
  email: "contact@monconseilthermique.fr",
  locality: "Strasbourg",
  region: "Grand Est",
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos/" },
    { label: "Audit énergétique", href: "/audit-energetique/" },
    { label: "Particuliers", href: "/renovation-energetique/" },
    { label: "AMO copropriété", href: "/amo-copropriete/" },
  ],
} as const;
