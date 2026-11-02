export interface Zone {
  slug: string;
  nom: string;
  departement: string;
  habitat: string;
  priorite: string;
}

// À ENRICHIR : pour le référencement local, chaque page de ville doit contenir
// du texte réellement propre à la ville (quartiers, types de bâti, projets réalisés).
export const zones: Zone[] = [
  { slug: "strasbourg", nom: "Strasbourg", departement: "Bas-Rhin",
    habitat: "À Strasbourg et dans son agglomération, on trouve des maisons individuelles construites entre les années 1950 et 1980, des appartements en copropriété et du bâti ancien en centre-ville.",
    priorite: "l’isolation des combles et des murs, le remplacement des fenêtres et du système de chauffage" },
  { slug: "schiltigheim", nom: "Schiltigheim", departement: "Bas-Rhin",
    habitat: "Schiltigheim est une commune dense de l’agglomération strasbourgeoise, avec de nombreux immeubles collectifs et des maisons de ville.",
    priorite: "la rénovation des copropriétés, l’isolation des toitures et la ventilation" },
  { slug: "illkirch-graffenstaden", nom: "Illkirch-Graffenstaden", departement: "Bas-Rhin",
    habitat: "Illkirch-Graffenstaden mêle résidences collectives et maisons individuelles, souvent construites après 1960.",
    priorite: "l’isolation des murs par l’extérieur, le changement de chauffage et le photovoltaïque" },
  { slug: "haguenau", nom: "Haguenau", departement: "Bas-Rhin",
    habitat: "À Haguenau, l’habitat est largement composé de maisons individuelles en lotissement, avec des surfaces de toiture bien adaptées au solaire.",
    priorite: "la pompe à chaleur, l’isolation des combles et le photovoltaïque" },
  { slug: "saverne", nom: "Saverne", departement: "Bas-Rhin",
    habitat: "Saverne, au pied des Vosges, compte des maisons anciennes et des logements des années 1960 à 1980 où les déperditions par les murs et les combles sont fréquentes.",
    priorite: "l’isolation des murs et des combles, puis le remplacement du chauffage" },
  { slug: "selestat", nom: "Sélestat", departement: "Bas-Rhin",
    habitat: "Sélestat associe un centre ancien et des quartiers pavillonnaires plus récents, ce qui appelle des solutions d’isolation différentes selon le bâti.",
    priorite: "l’audit énergétique, l’isolation et la ventilation des logements anciens" },
  { slug: "colmar", nom: "Colmar", departement: "Haut-Rhin",
    habitat: "À Colmar, le centre historique impose des contraintes d’urbanisme à vérifier avant toute modification de façade, tandis que les quartiers périphériques comptent surtout des maisons et résidences récentes.",
    priorite: "l’isolation par l’intérieur dans le centre ancien, l’isolation par l’extérieur ailleurs" },
  { slug: "mulhouse", nom: "Mulhouse", departement: "Haut-Rhin",
    habitat: "Mulhouse compte de nombreux immeubles collectifs et un habitat ouvrier ancien, où la rénovation énergétique des copropriétés tient une place importante.",
    priorite: "l’assistance à maîtrise d’ouvrage en copropriété et l’isolation des murs" },
];
