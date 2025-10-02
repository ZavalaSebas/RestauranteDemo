"use client";
import { useEffect, useState } from 'react';
import type { MenuItem } from '@/data/menu';
import { menuItems as staticMenu } from '@/data/menu';
// FUTURO (Firestore):
// 1. Crear colección "menu" en Firestore con documentos { name, description, price, image, category }
// 2. Descomentar imports dinámicos de firestore debajo
// 3. Añadir reglas de seguridad que permitan solo lectura pública y escritura autenticada
// 4. Sustituir la carga estática por snapshot en tiempo real si se desea (onSnapshot)
// 5. Para panel admin, crear página en /app/admin protegida con Auth y formulario CRUD

// Shape stored in Firestore (if later integrated)
export function useMenu() {
  const [items] = useState<MenuItem[]>(staticMenu); // static for now; future Firestore will update
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      // Para habilitar Firestore, descomenta el bloque inferior.
      // Mantener estático ahora evita consumo de cuota y mantiene rapidez.
      setLoading(true);
      try {
        // Ejemplo futuro:
        // const app = getFirebaseApp();
        // const { getFirestore, collection, getDocs } = await import('firebase/firestore');
        // const db = getFirestore(app);
        // const snap = await getDocs(collection(db, 'menu'));
        // const remote: MenuItem[] = snap.docs.map(d => ({ id: d.id, ...d.data() }) as MenuItem);
        // if (!cancelled && remote.length) setItems(remote); else console.info('Sin datos remotos, usando estáticos');
      } catch (e: unknown) {
        if (!cancelled) {
          const message = e instanceof Error ? e.message : 'Error cargando menú';
          setError(message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return { items, loading, error };
}
