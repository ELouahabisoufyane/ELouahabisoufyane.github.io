export interface Faq { q: string; a: string }
export interface Service {
  slug: string;
  nav: string;
  projet: string;
  h1: string;
  metaTitle: string;
  description: string;
  resume: string;
  intro: string;
  points: { titre: string; texte: string }[];
  faq: Faq[];
}

export const services: Service[] = [
  {
    slug: "audit-energetique",
    nav: "Audit énergétique",
    projet: "Audit énergétique",
    h1: "Audit énergétique de votre logement à Strasbourg et en Alsace",
    metaTitle: "Audit énergétique à Strasbourg et en Alsace",
    description:
      "Audit énergétique de maison ou d’appartement à Strasbourg et en Alsace : visite sur place, scénarios de travaux chiffrés et aides MaPrimeRénov’. Devis gratuit.",
    resume: "Visite sur place, scénarios de travaux chiffrés et gains attendus.",
    intro:
      "L’audit énergétique mesure où votre logement perd de la chaleur et compare plusieurs programmes de travaux, avec leur coût, leurs économies et la classe énergétique atteinte. Il vous donne un ordre de travaux clair avant de demander le moindre devis aux entreprises.",
    points: [
      { titre: "Visite et relevés", texte: "Nous relevons sur place l’isolation, les menuiseries, la ventilation et le système de chauffage." },
      { titre: "Scénarios chiffrés", texte: "L’audit propose un parcours de travaux par étapes et un scénario de rénovation globale, avec le coût estimé de chaque travail." },
      { titre: "Aides financières", texte: "Nous indiquons les aides mobilisables, comme MaPrimeRénov’ et les CEE, selon votre situation et les règles en vigueur." },
      { titre: "Un rapport utilisable", texte: "Le document sert pour vos demandes d’aides, pour votre banque ou pour une vente." },
    ],
    faq: [
      { q: "Quand l’audit énergétique est-il obligatoire ?", a: "Pour la vente d’une maison individuelle ou d’un immeuble en monopropriété classé F ou G depuis avril 2023, classé E depuis janvier 2025, puis classé D à partir de 2034." },
      { q: "Quelle différence avec un DPE ?", a: "Le DPE attribue une étiquette énergétique et des recommandations générales. L’audit va plus loin : il détaille des scénarios de travaux chiffrés pour votre logement." },
      { q: "Combien coûte un audit énergétique ?", a: "Le tarif dépend de la surface et du type de logement. Demandez un devis gratuit : nous répondons sous 24 h." },
    ],
  },
  {
    slug: "renovation-energetique",
    nav: "Rénovation énergétique",
    projet: "Rénovation globale de ma maison",
    h1: "Rénovation énergétique de maison à Strasbourg et en Alsace",
    metaTitle: "Rénovation énergétique de maison en Alsace",
    description:
      "Rénovation énergétique globale de votre maison en Alsace : ordre des travaux, étude thermique, comparaison des devis et aides MaPrimeRénov’ et CEE.",
    resume: "Un programme de travaux dans le bon ordre, avec les aides.",
    intro:
      "Une rénovation réussie suit un ordre : on traite d’abord l’enveloppe du bâtiment, puis la ventilation, puis le chauffage. Nous construisons ce programme avec vous à partir des déperditions réelles de votre maison.",
    points: [
      { titre: "Ordre des travaux", texte: "Isolation, ventilation, puis chauffage : chaque travail prépare le suivant et évite les dépenses inutiles." },
      { titre: "Étude technique", texte: "Nous dimensionnons les travaux d’après les déperditions du bâtiment, pas d’après une règle générale." },
      { titre: "Comparaison des devis", texte: "Nous vous aidons à comparer les devis des entreprises sur une base technique commune." },
      { titre: "Aides", texte: "MaPrimeRénov’, CEE et aides locales dépendent de votre situation et évoluent régulièrement : nous vérifions les règles en vigueur au moment de votre dossier." },
    ],
    faq: [
      { q: "Par où commencer une rénovation globale ?", a: "Par un audit énergétique : il fixe l’ordre des travaux et évite de changer le chauffage avant d’avoir traité l’isolation." },
      { q: "Les aides couvrent-elles tous les travaux ?", a: "Non. Leur montant dépend de vos revenus, des travaux choisis et des règles en vigueur. Nous estimons le reste à charge avant que vous vous engagiez." },
    ],
  },
  {
    slug: "amo-copropriete",
    nav: "AMO copropriété",
    projet: "AMO copropriété",
    h1: "AMO copropriété : assistance à maîtrise d’ouvrage pour la rénovation énergétique",
    metaTitle: "AMO copropriété en Alsace : rénovation énergétique",
    description:
      "Assistance à maîtrise d’ouvrage (AMO) pour copropriétés en Alsace : diagnostic collectif, programme de travaux, consultation des entreprises et suivi de chantier.",
    resume: "Diagnostic, programme de travaux et suivi pour syndics et conseils syndicaux.",
    intro:
      "Rénover une copropriété demande de décider à plusieurs sur des bases solides. Notre mission d’assistance à maîtrise d’ouvrage prépare ces décisions : diagnostic, programme chiffré, consultation des entreprises, puis suivi du chantier.",
    points: [
      { titre: "Diagnostic collectif", texte: "Nous évaluons les performances de l’immeuble et repérons les travaux les plus efficaces." },
      { titre: "Programme de travaux", texte: "Nous chiffrons plusieurs scénarios que le conseil syndical peut présenter en assemblée générale." },
      { titre: "Choix des entreprises", texte: "Nous rédigeons le cahier des charges et analysons les offres pour comparer des devis équivalents." },
      { titre: "Suivi et aides collectives", texte: "Nous suivons le chantier et vous aidons sur les aides mobilisables pour la copropriété." },
    ],
    faq: [
      { q: "Qu’est-ce qu’une AMO ?", a: "L’assistance à maîtrise d’ouvrage est une mission d’appui technique auprès du syndic et du conseil syndical : elle prépare le programme de travaux, la consultation des entreprises et le suivi du chantier." },
      { q: "Pourquoi faire appel à une AMO ?", a: "Pour voter en assemblée générale sur un programme chiffré et comparable, plutôt que sur le devis d’une seule entreprise." },
    ],
  },
  {
    slug: "pompe-a-chaleur",
    nav: "Pompe à chaleur",
    projet: "Pompe à chaleur",
    h1: "Pompe à chaleur en Alsace : étude et dimensionnement",
    metaTitle: "Pompe à chaleur en Alsace : étude et accompagnement",
    description:
      "Étude thermique et dimensionnement de pompe à chaleur en Alsace : choix du système, compatibilité avec votre logement, devis comparés et aides.",
    resume: "Étude de dimensionnement et choix du bon système.",
    intro:
      "Une pompe à chaleur bien choisie réduit la facture de chauffage. Mal dimensionnée, elle coûte plus cher à l’achat comme à l’usage. Nous calculons la puissance nécessaire à partir des déperditions de votre logement.",
    points: [
      { titre: "Dimensionnement", texte: "La puissance se calcule d’après les déperditions du logement, pas d’après sa seule surface." },
      { titre: "Choix du système", texte: "Air-eau, air-air ou géothermie : le bon choix dépend du logement, des émetteurs de chaleur et du terrain." },
      { titre: "Isolation d’abord", texte: "Nous vérifions si des travaux d’isolation sont à prévoir avant, pour choisir une machine moins puissante et moins chère." },
      { titre: "Devis et aides", texte: "Nous comparons les devis des installateurs et vérifions les aides applicables à votre projet." },
    ],
    faq: [
      { q: "Une pompe à chaleur convient-elle à une maison ancienne ?", a: "Dans bien des cas oui, si l’isolation et les émetteurs de chaleur sont compatibles. L’étude thermique le vérifie avant l’achat." },
      { q: "Faut-il isoler avant de changer de chauffage ?", a: "Le plus souvent, traiter l’enveloppe d’abord permet de choisir une machine moins puissante, donc moins chère à acheter et à faire fonctionner." },
    ],
  },
  {
    slug: "isolation-par-l-exterieur",
    nav: "Isolation par l’extérieur",
    projet: "Isolation par l’extérieur",
    h1: "Isolation thermique par l’extérieur (ITE) en Alsace",
    metaTitle: "Isolation thermique par l’extérieur (ITE) en Alsace",
    description:
      "Isolation thermique par l’extérieur (ITE) en Alsace : étude, choix du système, ponts thermiques, démarches en mairie et aides pour maisons et copropriétés.",
    resume: "Isoler les murs sans réduire la surface habitable.",
    intro:
      "L’isolation par l’extérieur enveloppe les murs d’une couche continue d’isolant. Elle préserve la surface habitable et limite les ponts thermiques, ces points où la chaleur s’échappe le plus facilement.",
    points: [
      { titre: "Ponts thermiques", texte: "Nous repérons les liaisons entre murs, planchers et toiture où se concentrent les pertes de chaleur." },
      { titre: "Choix du système", texte: "Enduit sur isolant, bardage ou brique de parement : le choix dépend de l’état du mur et de l’aspect souhaité." },
      { titre: "Démarches", texte: "Une modification de façade demande en général une déclaration préalable en mairie ; nous vous indiquons les points à vérifier." },
      { titre: "Travaux associés", texte: "Fenêtres, toiture et ventilation se traitent en même temps que la façade pour que le résultat soit cohérent." },
    ],
    faq: [
      { q: "L’ITE est-elle possible en copropriété ?", a: "Oui, mais elle se vote en assemblée générale : une étude chiffrée en amont aide à convaincre les copropriétaires." },
      { q: "ITE ou isolation par l’intérieur ?", a: "L’ITE préserve la surface habitable et traite mieux les ponts thermiques. L’isolation par l’intérieur reste utile quand la façade ne peut pas être modifiée." },
    ],
  },
  {
    slug: "photovoltaique",
    nav: "Photovoltaïque",
    projet: "Photovoltaïque",
    h1: "Panneaux photovoltaïques en Alsace : étude d’autoconsommation",
    metaTitle: "Panneaux photovoltaïques en Alsace : étude et accompagnement",
    description:
      "Étude photovoltaïque en Alsace : orientation du toit, dimensionnement selon votre consommation, autoconsommation, revente du surplus et démarches.",
    resume: "Produire ce que vous consommez, avec une installation bien dimensionnée.",
    intro:
      "Une installation photovoltaïque est rentable quand elle produit au moment où vous consommez. Nous partons de votre consommation et de votre toiture pour dimensionner une installation adaptée.",
    points: [
      { titre: "Étude du toit", texte: "Orientation, inclinaison, ombres et état de la toiture déterminent la production." },
      { titre: "Dimensionnement", texte: "La puissance se calcule d’après votre consommation réelle, pour éviter une installation trop grande ou trop petite." },
      { titre: "Autoconsommation", texte: "Nous comparons l’autoconsommation seule et l’autoconsommation avec revente du surplus." },
      { titre: "Démarches", texte: "Déclaration préalable en mairie et raccordement au réseau sont à anticiper dès le départ." },
    ],
    faq: [
      { q: "Le photovoltaïque est-il rentable en Alsace ?", a: "Cela dépend de votre consommation, de l’orientation de la toiture et du prix d’achat. L’étude chiffre la production et le temps de retour pour votre cas." },
      { q: "Faut-il refaire la toiture avant la pose ?", a: "Si la couverture est ancienne, mieux vaut la traiter avant la pose pour ne pas devoir démonter les panneaux plus tard." },
    ],
  },
];
