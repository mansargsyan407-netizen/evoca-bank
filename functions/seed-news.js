const { applicationDefault, initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');

async function seedNews() {
  const databaseURL =
    process.env.FIREBASE_DATABASE_URL || process.env.VITE_FIREBASE_DATABASE_URL;

  if (!databaseURL) {
    throw new Error('Նշեք FIREBASE_DATABASE_URL միջավայրի փոփոխականը։');
  }

  const { newsPages } = await import('../src/newsAllData.js');
  const items = newsPages.flat();
  const newsById = Object.fromEntries(items.map((item) => [item.id, item]));

  if (items.length === 0 || Object.keys(newsById).length !== items.length) {
    throw new Error('Նորությունների ցանկը դատարկ է կամ ունի կրկնվող ID-ներ։');
  }

  const app = initializeApp(
    {
      credential: applicationDefault(),
      databaseURL,
    },
    'news-seed',
  );

  try {
    await getDatabase(app).ref('newsAllPage/items').update(newsById);
    console.log(`${items.length} նորություն թարմացվել է newsAllPage/items ճյուղում։`);
  } finally {
    await app.delete();
  }
}

seedNews().catch((error) => {
  console.error('Չհաջողվեց տեղափոխել նորությունները Realtime Database։', error);
  process.exitCode = 1;
});