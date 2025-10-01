// Firebase initialization kept lean to reduce bundle: only core + analytics conditionally
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';

// Lazy import analytics only in browser and non-dev if needed to save quota
export async function getAnalyticsInstance(app: FirebaseApp) {
  if (typeof window === 'undefined') return null;
  try {
    const { getAnalytics } = await import('firebase/analytics');
    return getAnalytics(app);
  } catch {
    return null;
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyCUVv15bz7YQv3VZz90LSrGb0G56c-qFZw",
  authDomain: "restaurantedemo-f0eb1.firebaseapp.com",
  projectId: "restaurantedemo-f0eb1",
  storageBucket: "restaurantedemo-f0eb1.firebasestorage.app",
  messagingSenderId: "129224909629",
  appId: "1:129224909629:web:93a18cddeaa1b9c7fa5b54",
  measurementId: "G-3MJC7YC7FY"
};

export function getFirebaseApp() {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApps()[0];
}
