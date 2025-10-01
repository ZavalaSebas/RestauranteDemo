"use client";
import { useEffect, useState } from 'react';
import type { MenuItem } from '@/data/menu';
import { menuItems as staticMenu } from '@/data/menu';

// Shape stored in Firestore (if later integrated)
export function useMenu() {
  const [items, setItems] = useState<MenuItem[]>(staticMenu);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      // Future: dynamic import Firestore only when needed
      setLoading(true);
      try {
        // Placeholder: keep static to avoid quota while demoing
        // const app = getFirebaseApp();
        // const { getFirestore, collection, getDocs } = await import('firebase/firestore');
        // const db = getFirestore(app);
        // const snap = await getDocs(collection(db, 'menu'));
        // const remote: MenuItem[] = snap.docs.map(d => ({ id: d.id, ...d.data() }) as MenuItem);
        // if (!cancelled && remote.length) setItems(remote);
      } catch (e:any) {
        if (!cancelled) setError(e?.message || 'Error cargando menú');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return { items, loading, error };
}
