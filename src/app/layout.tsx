import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Restaurante Demo Gourmet",
    template: "%s | Restaurante Demo Gourmet"
  },
  description: "Restaurante demo moderno: cocina de autor, experiencias gastronómicas y menú dinámico.",
  keywords: ["restaurante", "cocina de autor", "gastronomía", "menú", "reservas"],
  authors: [{ name: "Restaurante Demo" }],
  openGraph: {
    title: "Restaurante Demo Gourmet",
    description: "Experiencia culinaria contemporánea con ingredientes de temporada.",
    url: "https://restaurante-demo.local/",
    siteName: "Restaurante Demo Gourmet",
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurante Demo Gourmet",
    description: "Cocina contemporánea y experiencias gastronómicas." 
  },
  metadataBase: new URL("https://restaurante-demo.local")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">{JSON.stringify({
          '@context':'https://schema.org',
          '@type':'Restaurant',
          name:'Restaurante Demo Gourmet',
          image:'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=60',
          servesCuisine:['Mediterránea','Fusión'],
          priceRange:'€€',
          address:{'@type':'PostalAddress', streetAddress:'Calle Principal 123', addressLocality:'Ciudad', addressRegion:'Provincia', postalCode:'00000', addressCountry:'ES'},
          telephone:'+34 600 000 000',
          url:'https://restaurante-demo.local'
        })}</Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
