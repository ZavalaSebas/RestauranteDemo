import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Limitar las variantes generadas para reducir almacenamiento/costos de lectura
    deviceSizes: [360, 640, 768, 1024], // Quitamos tamaños muy grandes si no se usan
    imageSizes: [200, 300, 400], // Para iconos / miniaturas específicos
    formats: ['image/avif', 'image/webp'], // Formatos más eficientes negociados por Accept header
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días en segundos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      }
    ]
    ,
    // Desactiva el optimizador dinámico para evitar fallos en hosting estático/preview
    // Sirve directamente /public/... asegurando que se vean las imágenes.
    unoptimized: true
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ];
  }
};

export default nextConfig;
