import { useEffect, useState } from 'react';
import { get, ref } from 'firebase/database';
import { realtimeDb } from './firebase';

function restoreFirebaseValue(value, fallback, path) {
  if (Array.isArray(fallback)) {
    let items;

    if (Array.isArray(value)) {
      items = value;
    } else if (value && typeof value === 'object') {
      const keys = Object.keys(value).sort((left, right) => Number(left) - Number(right));
      if (!keys.every((key, index) => key === String(index))) {
        throw new Error(`Firebase-ի հրապարակային տվյալները սխալ են՝ ${path}`);
      }
      items = keys.map((key) => value[key]);
    } else {
      throw new Error(`Firebase-ի հրապարակային տվյալները սխալ են՝ ${path}`);
    }

    return items.map((item, index) =>
      restoreFirebaseValue(
        item,
        fallback[index] ?? fallback[0],
        `${path}/${index}`,
      ),
    );
  }

  if (fallback && typeof fallback === 'object') {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      throw new Error(`Firebase-ի հրապարակային տվյալները սխալ են՝ ${path}`);
    }

    const restored = Object.fromEntries(
      Object.entries(fallback).map(([key, item]) => [
        key,
        Object.hasOwn(value, key)
          ? restoreFirebaseValue(value[key], item, `${path}/${key}`)
          : item,
      ]),
    );

    for (const [key, item] of Object.entries(value)) {
      if (!Object.hasOwn(fallback, key)) {
        restored[key] = restoreFirebaseValue(item, item, `${path}/${key}`);
      }
    }

    return restored;
  }

  if (
    typeof value !== typeof fallback ||
    (value === null && fallback !== null)
  ) {
    throw new Error(`Firebase-ի հրապարակային տվյալները սխալ են՝ ${path}`);
  }

  return value;
}

export function useFirebasePublicData(path, fallback) {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    let active = true;

    get(ref(realtimeDb, path))
      .then((snapshot) => {
        if (!active) return;

        const remote = snapshot.val();
        if (remote === null) {
          throw new Error(`Firebase-ի հրապարակային տվյալները սխալ են՝ ${path}`);
        }

        setData(restoreFirebaseValue(remote, fallback, path));
      })
      .catch((error) => {
        console.error(`Չհաջողվեց բեռնել հրապարակային տվյալները Firebase-ից՝ ${path}`, error);
      });

    return () => {
      active = false;
    };
  }, [fallback, path]);

  return data;
}
