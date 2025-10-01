import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from '@/components/NavBar';
import Script from "next/script";
import { AnalyticsLoader } from '@/components/AnalyticsLoader';

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
    default: "Restaurante Demo | Cocina de Autor Costarricense",
    template: "%s | Restaurante Demo"
  },
  description: "Cocina de autor costarricense: ingredientes locales, técnica contemporánea y experiencia cercana en San José.",
  keywords: ["restaurante", "costa rica", "cocina de autor", "gastronomía", "menú", "reservas", "san josé"],
  authors: [{ name: "Restaurante Demo" }],
  openGraph: {
    title: "Restaurante Demo | Cocina de Autor Costarricense",
    description: "Sabores locales con alma: ingredientes frescos y creatividad culinaria en San José.",
    url: "https://restaurante-demo.local/",
    siteName: "Restaurante Demo",
    locale: "es_CR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurante Demo | Cocina de Autor Costarricense",
    description: "Sabores locales con alma en San José." 
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
          name:'Restaurante Demo',
          image:'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=60',
          servesCuisine:['Costarricense','Contemporánea','Fusión'],
          priceRange:'₡₡',
          address:{'@type':'PostalAddress', streetAddress:'San José Centro', addressLocality:'San José', addressRegion:'San José', postalCode:'10101', addressCountry:'CR'},
          telephone:'+506 2222 3333',
          url:'https://restaurante-demo.local'
        })}</Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[radial-gradient(circle_at_30%_20%,rgba(255,240,240,0.6),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(255,228,200,0.5),transparent_55%)]`} suppressHydrationWarning={true}>
        <NavBar />
	    {children}
	    <AnalyticsLoader />
        <div id="analytics-root" />
      </body>
    </html>
  );
}
