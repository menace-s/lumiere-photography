# Lumière Studio — Landing Page

Landing page pour **Lumière Studio**, une agence de photographie fictive (portrait, mariage, corporate, événementiel, produit, drone & aérien). Le site est construit en **HTML / CSS / JavaScript natifs, sans framework**, à partir d'un design system extrait d'une maquette de référence.

## Aperçu

- Navbar sticky avec ombre au scroll
- Hero animé (titre + bannière photo)
- Section "À propos" avec statistiques animées (compteurs)
- Bloc vidéo / réseaux sociaux
- Grille de 6 services avec icônes
- Galerie portfolio (6 visuels)
- Témoignages clients
- Bande d'appel à l'action (CTA)
- Footer complet (navigation, services, contact, réseaux sociaux)
- Animations au scroll (apparition en cascade) et micro-interactions (boutons, icônes, galerie), avec respect de `prefers-reduced-motion`

## Structure du projet

```
siteweb/
├── index.html           # Page principale (landing page)
├── styles.css            # Feuille de style — tokens de design + composants
├── script.js              # Interactions : scroll-reveal, compteurs, navbar
├── design.md              # Documentation du design system (tokens, specs)
├── design-system.html     # Guide de style vivant (palette, typo, composants)
└── README.md               # Ce fichier
```

## Design system

Le site respecte un système de tokens à trois couches (primitif → sémantique → composant), documenté dans [`design.md`](./design.md) et visualisable dans [`design-system.html`](./design-system.html) :

- **Palette** : fond crème chaud, texte quasi-noir, accent vert olive unique (CTA, stats, icônes)
- **Typographie** : `Poppins` (titres, 700–900) / `Inter` (texte courant)
- **Espacement** : échelle base 8px
- **Composants** : boutons pill, icônes circulaires, séparateurs fins (pas de cartes avec ombre)

Toutes les couleurs, tailles et espacements du site sont pilotés par des variables CSS (`:root` dans `styles.css`) — aucune valeur codée en dur dans les composants.

## Lancer le projet en local

Aucune dépendance ni build requis : ce sont des fichiers statiques.

```bash
cd siteweb
python -m http.server 8731
```

Puis ouvrir [http://localhost:8731](http://localhost:8731) dans le navigateur.

(Toute autre méthode de serveur statique — `npx serve`, l'extension Live Server de VS Code, etc. — fonctionne aussi.)

## À faire

- Remplacer les images placeholder (`picsum.photos`) par de vraies photos du studio
- Brancher le bouton "Réserver une séance" sur un vrai formulaire ou une prise de rendez-vous
- Ajouter un menu mobile (actuellement les liens de nav sont masqués sous 860px, sans remplacement par un menu burger)
