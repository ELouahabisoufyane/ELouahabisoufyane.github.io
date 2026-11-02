import type { Service } from "./services";

export const servicesEn: Service[] = [
  {
    slug: "audit-energetique",
    nav: "Energy assessment",
    projet: "Energy assessment",
    h1: "Home energy assessments in Strasbourg and Alsace",
    metaTitle: "Energy assessments in Strasbourg and Alsace",
    description:
      "Home energy assessments for houses and apartments in Strasbourg and Alsace: on-site visit, priced renovation scenarios, and MaPrimeRénov’ grants. Free quote.",
    resume: "On-site visit, priced renovation scenarios, and expected savings.",
    intro:
      "An energy assessment measures where your home is losing heat and compares several renovation plans, including their costs, energy savings, and the energy rating they could achieve. It gives you a clear sequence of work before you request a single quote from contractors.",
    points: [
      { titre: "On-site inspection and measurements", texte: "We inspect the insulation, windows and doors, ventilation, and heating system on site." },
      { titre: "Costed scenarios", texte: "The assessment sets out a phased renovation plan and a whole-home renovation scenario, with an estimated cost for each measure." },
      { titre: "Financial assistance", texte: "We identify available grants and incentives, such as MaPrimeRénov’ and energy savings certificates (CEE), based on your circumstances and the rules in force." },
      { titre: "A practical report", texte: "You can use the report when applying for grants, speaking with your bank, or selling your property." },
    ],
    faq: [
      { q: "When is an energy assessment mandatory?", a: "For the sale of a detached house or a building held under single ownership, an energy assessment has been mandatory since April 2023 for properties rated F or G, since January 2025 for those rated E, and will be mandatory from 2034 for those rated D." },
      { q: "What is the difference between an energy assessment and a DPE?", a: "A DPE assigns an energy rating and gives general recommendations. An energy assessment goes further by detailing costed renovation scenarios for your home." },
      { q: "How much does an energy assessment cost?", a: "The price depends on the property's size and type. Request a free quote: we reply within 24 hours." },
    ],
  },
  {
    slug: "renovation-energetique",
    nav: "Energy renovation",
    projet: "Whole-home renovation for my house",
    h1: "Energy renovation for houses in Strasbourg and Alsace",
    metaTitle: "Energy renovation for houses in Alsace",
    description:
      "Whole-home energy renovation in Alsace: work sequencing, thermal assessment, quote comparison, and MaPrimeRénov’ and CEE grants.",
    resume: "A renovation plan with the work in the right order and available grants.",
    intro:
      "A successful renovation follows a sequence: first improve the building envelope, then address ventilation, and finally heating. We develop this plan with you based on your home's actual heat loss.",
    points: [
      { titre: "Work in the right order", texte: "Insulation, ventilation, then heating: each measure prepares for the next and helps avoid unnecessary costs." },
      { titre: "Technical assessment", texte: "We size the work according to the building's heat loss, not a general rule of thumb." },
      { titre: "Comparing quotes", texte: "We help you compare contractors' quotes on a consistent technical basis." },
      { titre: "Grants", texte: "MaPrimeRénov’, CEE, and local grants depend on your circumstances and change regularly. We check the rules in force when preparing your application." },
    ],
    faq: [
      { q: "Where should I start with a whole-home renovation?", a: "Start with an energy assessment: it sets the sequence of work and helps avoid replacing the heating system before addressing insulation." },
      { q: "Do grants cover all the work?", a: "No. The amount depends on your income, the work selected, and the rules in force. We estimate your out-of-pocket cost before you commit." },
    ],
  },
  {
    slug: "amo-copropriete",
    nav: "Condominium project support",
    projet: "Condominium project support",
    h1: "Condominium project support for energy renovation",
    metaTitle: "Condominium project support in Alsace: energy renovation",
    description:
      "Project management assistance (AMO) for condominiums in Alsace: building-wide assessment, work plan, contractor tendering, and construction monitoring.",
    resume: "Assessment, work plan, and follow-up for property managers and condominium councils.",
    intro:
      "Renovating a condominium means making decisions together on a sound basis. Our project management assistance prepares those decisions: assessment, costed plan, contractor tendering, and then construction monitoring.",
    points: [
      { titre: "Building-wide assessment", texte: "We assess the building's energy performance and identify the most effective improvements." },
      { titre: "Renovation plan", texte: "We cost several scenarios that the condominium council can present at the general meeting." },
      { titre: "Selecting contractors", texte: "We prepare the specifications and review bids so you can compare like-for-like quotes." },
      { titre: "Construction monitoring and group grants", texte: "We monitor the work and help you identify grants available to the condominium." },
    ],
    faq: [
      { q: "What is project management assistance (AMO)?", a: "Project management assistance is technical support for the property manager and condominium council. It prepares the renovation plan, contractor tendering, and construction monitoring." },
      { q: "Why hire a project management assistant?", a: "So owners can vote at the general meeting on a costed, comparable renovation plan rather than a quote from just one contractor." },
    ],
  },
  {
    slug: "pompe-a-chaleur",
    nav: "Heat pump",
    projet: "Heat pump",
    h1: "Heat pumps in Alsace: assessment and sizing",
    metaTitle: "Heat pumps in Alsace: assessment and support",
    description:
      "Thermal assessment and heat pump sizing in Alsace: system selection, suitability for your home, quote comparisons, and grants.",
    resume: "Sizing assessment and help choosing the right system.",
    intro:
      "A well-chosen heat pump can reduce your heating bill. If it is incorrectly sized, it can cost more to buy and run. We calculate the required capacity based on your home's heat loss.",
    points: [
      { titre: "Sizing", texte: "Capacity is calculated from the home's heat loss, not just its floor area." },
      { titre: "Choosing a system", texte: "Air-to-water, air-to-air, or geothermal: the right choice depends on the home, its heat emitters, and the site." },
      { titre: "Insulate first", texte: "We check whether insulation work should come first, so you can choose a smaller, less expensive unit." },
      { titre: "Quotes and grants", texte: "We compare installers' quotes and check which grants apply to your project." },
    ],
    faq: [
      { q: "Is a heat pump suitable for an older house?", a: "In many cases, yes, if the insulation and heat emitters are compatible. A thermal assessment checks this before you buy." },
      { q: "Should I insulate before replacing my heating system?", a: "In most cases, improving the building envelope first lets you choose a smaller unit, making it less expensive to buy and run." },
    ],
  },
  {
    slug: "isolation-par-l-exterieur",
    nav: "External wall insulation",
    projet: "External wall insulation",
    h1: "External wall insulation (EWI) in Alsace",
    metaTitle: "External wall insulation (EWI) in Alsace",
    description:
      "External wall insulation (EWI) in Alsace: assessment, system selection, thermal bridges, town hall applications, and grants for houses and condominiums.",
    resume: "Insulate the walls without reducing usable floor space.",
    intro:
      "External wall insulation wraps the walls in a continuous layer of insulation. It preserves usable floor space and limits thermal bridges—the points where heat escapes most easily.",
    points: [
      { titre: "Thermal bridges", texte: "We identify junctions between walls, floors, and the roof where heat loss is concentrated." },
      { titre: "Choosing a system", texte: "Render over insulation, cladding, or facing brick: the choice depends on the wall's condition and the appearance you want." },
      { titre: "Applications", texte: "Changing a façade generally requires a prior declaration to the town hall; we point out what to check." },
      { titre: "Related work", texte: "Windows, roofing, and ventilation should be addressed alongside the façade to ensure a consistent result." },
    ],
    faq: [
      { q: "Is EWI possible in a condominium?", a: "Yes, but it must be approved at the general meeting. A costed assessment prepared in advance can help convince the owners." },
      { q: "EWI or internal wall insulation?", a: "EWI preserves usable floor space and deals more effectively with thermal bridges. Internal insulation remains useful when the façade cannot be altered." },
    ],
  },
  {
    slug: "photovoltaique",
    nav: "Solar photovoltaics",
    projet: "Solar photovoltaics",
    h1: "Solar panels in Alsace: self-consumption assessment",
    metaTitle: "Solar panels in Alsace: assessment and support",
    description:
      "Solar PV assessment in Alsace: roof orientation, system sizing based on your consumption, self-consumption, surplus export, and applications.",
    resume: "Generate the electricity you use with a properly sized system.",
    intro:
      "A solar PV system is cost-effective when it generates electricity while you are using it. We base the system size on your consumption and roof to design an installation suited to your needs.",
    points: [
      { titre: "Roof assessment", texte: "Orientation, pitch, shading, and roof condition determine how much electricity can be generated." },
      { titre: "System sizing", texte: "Capacity is calculated from your actual consumption to avoid an installation that is too large or too small." },
      { titre: "Self-consumption", texte: "We compare self-consumption alone with self-consumption combined with selling surplus electricity." },
      { titre: "Applications", texte: "A prior declaration to the town hall and grid connection should both be planned from the outset." },
    ],
    faq: [
      { q: "Is solar PV cost-effective in Alsace?", a: "It depends on your consumption, roof orientation, and purchase price. The assessment estimates generation and the payback period for your situation." },
      { q: "Should I repair or replace the roof before installation?", a: "If the roof covering is old, it is better to deal with it before installation so you do not have to remove the panels later." },
    ],
  },
];
