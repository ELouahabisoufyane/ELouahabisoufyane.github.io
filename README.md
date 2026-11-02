# Mon Conseil Thermique – site vitrine (Astro + Tailwind)

## Démarrage
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère le dossier dist/
npm run preview    # teste le site généré
```
Prérequis : Node.js LTS.

## Avant la mise en ligne : à compléter
Cherchez `À COMPLÉTER` / `À VÉRIFIER` / `À ADAPTER` dans le projet :
- `src/pages/a-propos.astro` : enrichir avec le parcours, les certifications vérifiées et des références réelles
- `src/pages/mentions-legales.astro` : SIRET, adresse, hébergeur, durée de conservation
- `src/data/site.ts` : e-mail réel
- `src/data/zones.ts` : enrichir chaque ville avec du contenu réellement local (quartiers, chantiers réalisés)
- `src/data/services.ts` : vérifier chaque affirmation (les aides changent souvent, ne mettez des montants que s’ils sont à jour)

## Formulaire de contact
1. Créez un formulaire sur https://formspree.io (ou Web3Forms).
2. Copiez `.env.example` en `.env` et mettez votre URL dans `PUBLIC_FORM_ENDPOINT`.
3. Relancez le serveur de développement ou reconstruisez le site après modification de `.env`.

Sans URL HTTPS configurée (ou avec `VOTRE_ID`), l'envoi est désactivé et un message invite à contacter l'entreprise par téléphone ou e-mail. L'envoi utilise la page de confirmation du prestataire ; vérifiez la réception d'une demande avant mise en ligne. L'adresse e-mail dans `src/data/site.ts` reste à confirmer.

## Langues et interface
- Le français reste à la racine ; les mêmes pages sont disponibles en anglais sous `/en/`.
- Le sélecteur FR / EN conserve la page consultée. Les modèles Astro sont partagés ; les textes d'interface utilisent `src/i18n.ts`.
- Les contenus des prestations et villes sont dans `src/data/services.ts`, `src/data/zones.ts` et leurs équivalents `.en.ts`. Maintenez les deux versions ensemble en conservant les mêmes slugs.
- Chaque page inclut sa langue, son URL canonique et les liens `hreflang`.
- Le contact est accessible depuis l'en-tête et une barre fixe sur mobile. Les photos du carrousel sont des illustrations, pas des références de chantiers ; remplacez-les par vos photos autorisées dans `public/images/`.

## Mise en ligne sur Hostinger
1. `npm run build`
2. hPanel → Gestionnaire de fichiers → `public_html` : supprimer l’ancien contenu, puis envoyer **le contenu** de `dist/` (y compris `.htaccess`).
3. Activer le SSL gratuit (Let’s Encrypt) dans hPanel.
Le fichier `.htaccess` force le HTTPS, retire le `www` et redirige en 301 les anciennes URL vers les nouvelles (important pour garder le référencement).

## Après la mise en ligne (SEO)
- Google Search Console : ajouter le site et envoyer `https://monconseilthermique.fr/sitemap-index.xml`
- Fiche Google Business Profile complète, avec avis clients
- Ajouter des photos réelles (format WebP, attribut `alt`) et une image de partage Open Graph
- Obtenir des liens locaux : annuaires, partenaires, France Rénov’
