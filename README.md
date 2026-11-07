# React + Vite

## News data in Firebase Realtime Database

The `/news/all` page reads its news items from `newsAllPage/items`. If that node
is empty or cannot be read, it shows the existing local list instead.

Set `VITE_FIREBASE_DATABASE_URL` in `.env.local` to the Realtime Database URL
shown in Firebase Console. To copy all records from `src/newsAllData.js` into
that node, authenticate Firebase Admin locally (for example with
`GOOGLE_APPLICATION_CREDENTIALS` pointing to a service-account key kept outside
the repository), set `FIREBASE_DATABASE_URL` to the same URL, then run:

```powershell
node functions/seed-news.js
```

The seed script only updates the listed news items under `/newsAllPage/items`;
it preserves other items and does not modify any other Realtime Database nodes.
Ensure your existing Realtime Database rules allow public reads of that node
and do not allow public writes.

The shared Russian and English translation dictionaries are also read from
`siteContent/translations`, with the bundled dictionaries retained as a fallback.
To update them, authenticate Firebase Admin locally, set `FIREBASE_DATABASE_URL`,
then run `node functions/seed-site-translations.js`.

The homepage carousel, card highlights, partners, and testimonials are loaded
from `siteContent/homePage`; the bundled content remains as a fallback. Update
these sections by running `node functions/seed-homepage-content.js` with Firebase
Admin credentials configured as above.

Selected public lists for the loans, cards, deposits, payments, and branch-location
pages are read from `siteContent/pageData`, with their local data retained as a
fallback. To update those entries, authenticate Firebase Admin locally and set
`FIREBASE_DATABASE_URL`, then run:

```powershell
node functions/seed-site-page-data.js
```

The page-data seed updates only the exported dataset entries and does not modify
other Realtime Database branches. Keep public writes disabled in the database
rules.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
