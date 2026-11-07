const fs = require('node:fs');
const path = require('node:path');
const { applicationDefault, initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');

function isJsonValue(value) {
  if (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'boolean' ||
    (typeof value === 'number' && Number.isFinite(value))
  ) {
    return true;
  }

  if (Array.isArray(value)) {
    return value.every(isJsonValue);
  }

  if (typeof value !== 'object' || Object.getPrototypeOf(value) !== Object.prototype) {
    return false;
  }

  return Object.entries(value).every(
    ([key, item]) =>
      !['.', '#', '$', '[', ']', '/'].some((character) =>
        key.includes(character),
      ) && isJsonValue(item),
  );
}

async function seedSitePageData() {
  const databaseURL =
    process.env.FIREBASE_DATABASE_URL || process.env.VITE_FIREBASE_DATABASE_URL;

  if (!databaseURL) {
    throw new Error('Նշեք FIREBASE_DATABASE_URL միջավայրի փոփոխականը։');
  }

  const sourceDirectory = path.resolve(__dirname, '../src');
  const sourceFiles = fs
    .readdirSync(sourceDirectory)
    .filter((file) => /\.(jsx?|tsx?)$/.test(file))
    .map((file) => path.basename(file, path.extname(file)))
    .sort((left, right) => right.length - left.length);
  const pageData = await import('../src/sitePageData.js');
  const updates = {};
  const itemCounts = [];

  for (const [exportName, value] of Object.entries(pageData)) {
    if (!exportName.startsWith('pageData_')) continue;

    const sourceFile = sourceFiles.find((file) =>
      exportName.startsWith(`pageData_${file}_`),
    );

    if (!sourceFile) {
      throw new Error(`Տվյալների արտահանման ֆայլը չի գտնվել՝ ${exportName}`);
    }

    const dataName = exportName.slice(`pageData_${sourceFile}_`.length);
    if (!dataName || !isJsonValue(value)) {
      throw new Error(`Տվյալների JSON ձևաչափը սխալ է՝ ${exportName}`);
    }

    updates[`${sourceFile}/${dataName}`] = value;
    itemCounts.push(Array.isArray(value) ? value.length : Object.keys(value).length);
  }

  if (itemCounts.length === 0) {
    throw new Error('Firebase-ում տեղադրելու էջային տվյալներ չեն գտնվել։');
  }

  const app = initializeApp(
    {
      credential: applicationDefault(),
      databaseURL,
    },
    'site-page-data-seed',
  );

  try {
    await getDatabase(app).ref('siteContent/pageData').update(updates);
    console.log(
      `${itemCounts.length} էջային տվյալների ցանկ թարմացվել է Firebase-ում (${itemCounts.reduce(
        (total, count) => total + count,
        0,
      )} գրառում)։`,
    );
  } finally {
    await app.delete();
  }
}

seedSitePageData().catch((error) => {
  console.error('Չհաջողվեց էջային տվյալները տեղափոխել Firebase։', error);
  process.exitCode = 1;
});
