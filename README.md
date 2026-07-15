# Site du Tennis Padel Club Soufflenheim (maquette)

Maquette de site vitrine pour le TPCS — Tennis, Padel & Pickleball à Soufflenheim, depuis 1979.

Construit avec **Next.js 16** (App Router), **React 19** et **Tailwind CSS 4**. Aucune autre dépendance : animations, galerie lightbox, accordéon FAQ et compteurs sont faits maison.

## Lancer le site

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

Pour une version optimisée de production :

```bash
npm run build
npm start
```

## Pages

| URL | Contenu |
| --- | --- |
| `/` | Accueil : hero, chiffres clés, le club, disciplines, réservation Ten'up / Anybuddy, actus & agenda, galerie, témoignages, partenaires, FAQ |
| `/le-club` | Histoire (frise 1979 → aujourd'hui), mot du président, comité, installations |
| `/tarifs` | Adhésions, tarifs horaires padel, école de tennis |
| `/actualites` | Articles + agenda des événements |
| `/galerie` | Galerie photos filtrable avec visionneuse plein écran |
| `/contact` | Coordonnées, formulaire (démo), carte, FAQ complète |

## Modifier le contenu

**Tout le contenu du site** (textes, tarifs, actualités, événements, FAQ, témoignages, partenaires…) est centralisé dans un seul fichier :

```
src/lib/data.ts
```

Les photos se trouvent dans `public/images/` et sont référencées dans `src/lib/images.ts`.

Les couleurs du club (vert sapin, jaune or, crème, terre battue) sont définies dans `src/app/globals.css`.

## Notes

- Formulaire de contact : démonstration visuelle, aucun envoi réel (à brancher sur un service d'e-mail lors de la mise en production).
- Tarifs, événements et articles : contenus **indicatifs** créés pour la maquette, à valider avec le club.
- Réservations : liens réels vers Ten'up (licenciés) et Anybuddy (non-licenciés).
