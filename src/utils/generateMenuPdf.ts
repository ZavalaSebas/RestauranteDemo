import jsPDF from 'jspdf';
import type { MenuItem } from '@/data/menu';
import { categories, formatPrice } from '@/data/menu';
import QRCode from 'qrcode';

// Brand palette
const BRAND_GRADIENT = { start: [245, 158, 11], end: [244, 63, 94] }; // amber-500 to rose-500
const BRAND_DARK = [68, 32, 6]; // amber-950 tone

function drawHeader(doc: jsPDF, page: number) {
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();
  // Gradient bar (approx simulated)
  const steps = 20;
  for (let i = 0; i < steps; i++) {
    const r = BRAND_GRADIENT.start[0] + (BRAND_GRADIENT.end[0]-BRAND_GRADIENT.start[0]) * (i/steps);
    const g = BRAND_GRADIENT.start[1] + (BRAND_GRADIENT.end[1]-BRAND_GRADIENT.start[1]) * (i/steps);
    const b = BRAND_GRADIENT.start[2] + (BRAND_GRADIENT.end[2]-BRAND_GRADIENT.start[2]) * (i/steps);
    doc.setFillColor(r, g, b);
    doc.rect(0 + (w/steps)*i, 0, w/steps + 0.5, 6, 'F');
  }
  doc.setFont('helvetica','bold');
  doc.setFontSize(16);
  doc.setTextColor(BRAND_DARK[0], BRAND_DARK[1], BRAND_DARK[2]);
  doc.text('Restaurante Demo Gourmet', 14, 16);
  doc.setFont('helvetica','normal');
  doc.setFontSize(9);
  doc.setTextColor(90);
  doc.text('Menú oficial · Inspiración culinaria de temporada', 14, 22);
  doc.setFontSize(8);
  doc.text(`Página ${page}`, w - 28, 10, { align: 'left' });
  doc.setDrawColor(230);
  doc.line(14, 26, w - 14, 26);
}

function drawFooter(doc: jsPDF) {
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();
  doc.setFont('helvetica','normal');
  doc.setFontSize(8);
  doc.setTextColor(120);
  doc.text('© Restaurante Demo Gourmet · Reservas: +34 600 000 000 · https://restaurante-demo.local', w/2, h - 10, { align: 'center' });
}

async function generateQRDataUrl(url: string) {
  try {
    return await QRCode.toDataURL(url, { margin: 1, width: 120, color: { dark: '#431407', light: '#ffffffff' } });
  } catch {
    return null;
  }
}

export async function generateMenuPdf(menuItems: MenuItem[]) {
  const doc = new jsPDF();
  let page = 1;
  drawHeader(doc, page);
  drawFooter(doc);

  const url = 'https://restaurante-demo.local/#menu';
  const qr = await generateQRDataUrl(url);
  if (qr) {
    doc.addImage(qr, 'PNG', doc.internal.pageSize.getWidth() - 40, 14, 26, 26, 'qr', 'FAST');
  }

  let y = 34;
  const left = 14;
  const maxWidth = 180;

  categories.forEach(cat => {
    // Category heading
    doc.setFillColor(255, 247, 237); // amber-50 like
    doc.roundedRect(left - 2, y - 6, maxWidth, 10, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(180, 83, 9); // amber-700
    doc.text(cat.label, left, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(40);
    const items = menuItems.filter(m => m.category === cat.key);
    items.forEach(item => {
      const priceStr = formatPrice(item.price);
      const nameLine = `${item.name}`;
      // Name & price line
      doc.setFont('helvetica','bold');
      doc.text(nameLine, left, y);
      doc.setFont('helvetica','normal');
      doc.setTextColor(100, 30, 22);
      doc.text(priceStr, left + maxWidth - doc.getTextWidth(priceStr) - 4, y);
      y += 4;
      doc.setTextColor(70);
      const descLines = doc.splitTextToSize(item.description, maxWidth - 8);
      doc.text(descLines, left + 2, y);
      y += descLines.length * 4 + 2;
      // Divider
      doc.setDrawColor(235);
      doc.line(left, y, left + maxWidth - 6, y);
      y += 4;
      doc.setTextColor(40);
      if (y > doc.internal.pageSize.getHeight() - 30) {
        doc.addPage();
        page += 1;
        drawHeader(doc, page);
        drawFooter(doc);
        y = 34;
      }
    });
    y += 2;
    if (y > doc.internal.pageSize.getHeight() - 30) {
      doc.addPage();
      page += 1;
      drawHeader(doc, page);
      drawFooter(doc);
      y = 34;
    }
  });

  doc.save('menu_restaurante_demo.pdf');
}
