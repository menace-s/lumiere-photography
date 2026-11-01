# Design System — Bent Ginsburg Psychologist

Extrait de la maquette fournie (site vitrine d'un psychologue). Système de design à trois couches — **primitive → sémantique → composant** — documenté ci-dessous, avec son implémentation vivante dans [`design-system.html`](./design-system.html).

---

## 1. Principes directeurs

- **Minimal & éditorial** : beaucoup de blanc (crème), typographie forte, peu de bordures, séparateurs fins plutôt que des cartes.
- **Chaleureux & organique** : fond crème/beige, photo au ton chaud, accent vert olive (nature, calme, thérapie).
- **Structuré par des lignes**, pas des ombres : les sections sont séparées par des filets 1px, pas de `box-shadow` visible.
- **Un seul accent vif** : le vert olive est réservé aux CTA, chiffres clés et icônes sociales — tout le reste reste neutre (noir/gris/crème).

---

## 2. Tokens primitifs

Valeurs brutes, sans signification d'usage.

| Token | Valeur | Usage visuel |
|---|---|---|
| `--color-cream-50` | `#F6F4EE` | Fond de page |
| `--color-cream-100` | `#EFEBDF` | Fond alterné / zone média |
| `--color-tan-300` | `#D8CDB8` | Fond photo portrait |
| `--color-white` | `#FFFFFF` | Surfaces claires |
| `--color-black-900` | `#1C1B18` | Texte principal, titres |
| `--color-gray-600` | `#6F6C64` | Texte secondaire |
| `--color-gray-300` | `#D9D5C9` | Séparateurs / bordures |
| `--color-olive-600` | `#58643F` | Accent principal (boutons, stats) |
| `--color-olive-700` | `#434C30` | Accent hover/actif |
| `--color-olive-100` | `#E4E8DA` | Fond icône au survol (optionnel) |

**Typographie primitive**
| Token | Valeur |
|---|---|
| `--font-heading` | `"Poppins", sans-serif` (900/800) |
| `--font-body` | `"Inter", sans-serif` (400–600) |

**Échelle d'espacement (base 8px)**
`4, 8, 12, 16, 24, 32, 48, 64, 96, 128`

**Rayons**
| Token | Valeur | Usage |
|---|---|---|
| `--radius-none` | `0px` | Images, blocs vidéo |
| `--radius-sm` | `6px` | Petits éléments |
| `--radius-pill` | `999px` | Boutons |
| `--radius-circle` | `50%` | Icônes sociales, play button |

---

## 3. Tokens sémantiques

Alias qui donnent un *rôle* aux valeurs primitives — c'est cette couche qu'on référence dans les composants.

| Token sémantique | Référence primitive | Rôle |
|---|---|---|
| `--surface-page` | `cream-50` | Fond général |
| `--surface-media` | `tan-300` | Fond des zones image/vidéo |
| `--text-primary` | `black-900` | Titres, corps de texte fort |
| `--text-secondary` | `gray-600` | Légendes, labels, paragraphes secondaires |
| `--text-on-accent` | `white` | Texte sur fond olive |
| `--border-subtle` | `gray-300` | Filets de séparation |
| `--accent` | `olive-600` | CTA, chiffres clés, icônes |
| `--accent-hover` | `olive-700` | État hover/actif de l'accent |

---

## 4. Tokens de composants

| Composant | Token | Valeur |
|---|---|---|
| **Bouton primaire** | `--button-bg` | `var(--accent)` |
| | `--button-bg-hover` | `var(--accent-hover)` |
| | `--button-text` | `var(--text-on-accent)` |
| | `--button-radius` | `var(--radius-pill)` |
| | `--button-padding` | `14px 28px` |
| **Stat (chiffre clé)** | `--stat-number-color` | `var(--accent)` |
| | `--stat-label-color` | `var(--text-secondary)` |
| **Icône feature** | `--icon-color` | `var(--text-primary)` |
| | `--icon-size` | `28px` |
| **Icône sociale** | `--social-bg` | `var(--accent)` |
| | `--social-icon-color` | `var(--text-on-accent)` |
| | `--social-size` | `40px` |
| **Divider** | `--divider-color` | `var(--border-subtle)` |
| | `--divider-weight` | `1px` |
| **Nav** | `--nav-link-color` | `var(--text-primary)` |
| | `--nav-gap` | `32px` |

---

## 5. Typographie — échelle

| Style | Taille / Line-height | Poids | Police | Usage |
|---|---|---|---|---|
| Display / H1 | 64px / 1.05 | 800 | Heading | Titre héro ("Bent Ginsburg Psychologist") |
| H2 | 38px / 1.15 | 800 | Heading | Titres de section, accroche principale |
| H3 | 20px / 1.3 | 700 | Heading | Titres de carte (features, "About Me") |
| Body L | 18px / 1.55 | 500 | Body | Paragraphe d'intro |
| Body | 15px / 1.6 | 400 | Body | Texte courant |
| Small / Label | 13px / 1.4 | 500, tracking +0.02em | Body | Nav, labels de stats, footer |
| Stat Number | 36px / 1 | 800 | Heading | Chiffres clés (8+, 300+...) |

---

## 6. Composants identifiés dans la maquette

1. **Navbar** — logo texte à gauche, liens horizontaux centrés/droite, bouton pill "Book a session" en CTA.
2. **Hero title** — titre deux lignes, très grand, bold.
3. **Bloc image plein format** — portrait sur fond beige, coins non arrondis.
4. **Intro + stats** — colonne gauche : accroche en grand texte (mots clés en gris, reste en noir) ; colonne droite : grille 2×2 de chiffres clés avec séparateurs.
5. **Bloc vidéo** — vignette avec bouton play rond semi-transparent, colonne texte + icônes sociales circulaires.
6. **Grille de features** — 2 colonnes × 3 lignes, icône ligne + titre + description, séparées par des filets fins ; 3ᵉ colonne = bloc "What I do" avec CTA.
7. **Divider** — filet 1px `--border-subtle` entre quasi toutes les sections.
8. **Bouton pill** — seul élément à coins totalement arrondis, fond olive, texte blanc.

---

## 7. Grille & mise en page

- Conteneur centré, marges extérieures généreuses (~64–96px desktop).
- Grille de section : 2 colonnes principales (contenu / aside) avec ratio ~60/40.
- Grille de features : 2 colonnes × 3 lignes avec filets verticaux/horizontaux comme séparateurs (pas de cartes avec fond).
- Rythme vertical constant entre sections (~96–128px).

---

## 8. Accessibilité & bonnes pratiques

- Contraste texte secondaire (`gray-600` sur `cream-50`) à vérifier ≥ 4.5:1 pour le texte courant ; utiliser `text-primary` pour tout texte sous 16px.
- Le vert olive (`#58643F`) sur blanc respecte le contraste AA pour texte large/bouton.
- Toujours référencer les tokens sémantiques/composants dans le code — jamais de valeur hex en dur dans les composants.
