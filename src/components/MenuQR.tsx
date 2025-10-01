"use client";
import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export function MenuQR() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        window.location.href + '#menu',
        { width: 140, margin: 1, color: { dark: '#78350f', light: '#ffffff' } },
        (err: unknown) => {
          if (err) console.error(err);
        }
      );
    }
  }, []);
  return (
    <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur rounded-xl p-5 border border-amber-200 shadow-sm">
      <canvas ref={canvasRef} className="rounded bg-amber-50 p-2" />
      <p className="text-xs text-center text-neutral-600 max-w-[160px]">Escanea para ver el menú completo en tu móvil</p>
    </div>
  );
}
