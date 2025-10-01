"use client";
import { useEffect } from 'react';
import { getFirebaseApp, getAnalyticsInstance } from '@/lib/firebase';

export function AnalyticsLoader() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const app = getFirebaseApp();
      getAnalyticsInstance(app); // fire and forget
    }
  }, []);
  return null;
}
