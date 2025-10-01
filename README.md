## Restaurante Demo Gourmet – Landing Ligera

Landing page moderna para presentar a potenciales clientes cómo se vería su sitio de restaurante: hero, menú seccionado, QR directo, ubicación (Google Maps embed), PDF descargable con branding y footer profesional. Optimizada para simplicidad, baja huella de hosting (pensando en Firebase 10GB gratuito) y rápida primera visualización.

---
## Stack Actual
- Next.js 15 (App Router, Turbopack en dev)
- Tailwind CSS (modo inline con variables)
- Framer Motion (animaciones suaves, lazy al usar "use client")
- jsPDF + QRCode (generación de PDF + QR en cliente)
- Firebase (solo inicialización preparada; Analytics se carga únicamente en producción y de forma diferida)
- Placeholders SVG para imágenes (facilitan sustitución por fotos reales + peso mínimo)

---
## Scripts Básicos
```bash
npm run dev      # desarrollo
npm run build    # build producción
npm start        # servir build
npm run lint     # linting
```

App local: http://localhost:3000 (Next ajusta puerto si está ocupado).

---
## Estructura Principal
```
src/app/layout.tsx        # Metadata, JSON-LD, fuentes, AnalyticsLoader
src/app/page.tsx          # Landing completa
src/components/           # Hero, MenuSection, QR, LocationMap, SiteFooter, AnalyticsLoader
src/data/menu.ts          # Datos estáticos del menú (placeholder)
src/hooks/useMenu.ts      # Hook preparado para futura carga Firestore (ahora solo estático)
src/utils/generateMenuPdf.ts # PDF con branding y QR
public/images/*.svg       # Placeholders reemplazables
```

---
## Estrategia de Imágenes (Optimización Hosting Firebase)
Actual: placeholders SVG (peso ultrabajo, 1 sola request por imagen, caché eficiente).
Cuando existan fotos reales:
1. Convertir a `.webp` (y opcionalmente `.avif`).
2. Limitar tamaños: Hero ≤ 1600px, cards 600–800px.
3. Reemplazar archivos en `public/images/` manteniendo mismos nombres o actualizar rutas en `menu.ts` y `Hero.tsx`.
4. Verificar `sizes` y `priority` solo en imágenes above-the-fold.

---
## PDF Branding
- Generado con `generateMenuPdf()`.
- Incluye: cabecera con degradado simulado, categorías resaltadas, línea divisoria, QR de acceso online, footer con contacto.
- Se puede extender con miniaturas (añadir `addImage` por item) si se usan DataURLs.

---
## Firebase (Estado Actual: Solo Preparado)
Archivo: `src/lib/firebase.ts`
- Se inicializa la app solo si se llama (no hay efecto secundario al no importarlo).
- Analytics: cargado dinámicamente dentro de `AnalyticsLoader` SOLO en producción (`NODE_ENV === 'production'`).

NO hay llamadas a Firestore todavía (0 impacto en cuota / performance).

### Futuro: Activar Firestore para Menú Dinámico
Pasos propuestos (comentados dentro de `useMenu.ts`):
1. Crear colección `menu` en Firestore con documentos:  
	 ```json
	 {
		 "name": "Bruschetta Mediterránea",
		 "description": "Pan tostado ...",
		 "price": 6.5,
		 "image": "/images/bruschetta.webp",
		 "category": "entradas"
	 }
	 ```
2. Descomentar import dinámico:  
	 `const { getFirestore, collection, getDocs } = await import('firebase/firestore');`
3. Sustituir `staticMenu` por datos remotos si `remote.length > 0`.
4. (Opcional) Usar `onSnapshot` para tiempo real.
5. Añadir reglas de seguridad (ejemplo):
	 ```
	 rules_version = '2';
	 service cloud.firestore {
		 match /databases/{database}/documents {
			 match /menu/{docId} {
				 allow read: if true;            // Público puede leer
				 allow write: if request.auth != null && request.auth.token.admin == true; // Rol admin
			 }
		 }
	 }
	 ```
6. Para imágenes dinámicas alojadas en Storage, usar URLs firmadas o servir desde `public/` para estático.

### Consideraciones de Peso
- Mantener datos del menú en Firestore: cada documento típicamente < 1KB → muy económico.
- Evitar subir imágenes originales pesadas → siempre procesar antes.

---
## Panel Admin (Planteado – No Implementado)
Objetivo futuro: CRUD de menú sin intervención técnica.

### Arquitectura Recomendada
1. Ruta protegida: `app/admin/page.tsx` (Server Component + wrapper Cliente para Auth).  
2. Autenticación: Firebase Auth (Email/Password o Magic Link).  
3. Lógica de privilegios: claim custom admin (`setCustomUserClaims`).  
4. UI mínima:
	 - Lista de items (tabla sencilla).
	 - Formulario lateral (slide-over) para crear/editar.
	 - Botón eliminar con confirmación.
5. Validación: Zod + sanitización básica.
6. Optimización carga: imports dinámicos de Firestore y Auth sólo dentro de `admin`.
7. Acciones atómicas: usar `runTransaction` si se agregan conteos o relaciones.

### Ejemplo de Componentes Propuestos (futuros)
```
src/components/admin/MenuTable.tsx
src/components/admin/MenuEditor.tsx
src/hooks/useAuth.ts        # Wrapper simple sobre Firebase Auth
src/services/menuRepo.ts    # Abstracción Firestore (getAll, create, update, delete)
```

### Flujo de Trabajo
1. Usuario entra a `/admin`.
2. Si no autenticado → mostrar login.
3. Si autenticado pero no admin → mensaje acceso denegado.
4. Si admin → render tabla + botón “Nuevo plato”.
5. Editar guarda en Firestore y refresca local state (optimistic update).

### Ejemplo de Abstracción de Repositorio (pseudo-code)
```ts
// menuRepo.ts
export async function fetchMenu(db) { /* getDocs(collection(db,'menu')) */ }
export async function createItem(db, data) { /* addDoc */ }
export async function updateItem(db, id, data) { /* updateDoc */ }
export async function deleteItem(db, id) { /* deleteDoc */ }
```

### Seguridad y Rendimiento
- Importar Firebase SDK modular (ya listo).
- Nunca exponer claves admin en cliente (usar sólo client SDK + reglas).
- Si en el futuro se requiere lógica sensible (stats internas) → Cloud Functions.

---
## Accesibilidad y Performance
- Uso de `sizes` + `priority` estratégico en imágenes hero/menu.
- Animaciones limitadas y suaves (no layout thrashing notable).
- Colores con suficiente contraste (horarios, overlay en cards).
- PDF generación totalmente client-side (sin pasos de servidor).

---
## SEO Actual
- Metadata base + OpenGraph + Twitter.
- JSON-LD tipo `Restaurant` embebido.
- Rutas generadas: `sitemap.xml`, `robots.txt`.

Posibles mejoras: OG dinámico, Schema `Menu` / `MenuItem`, internacionalización.

---
## Despliegue en Firebase Hosting (Flujo Resumido)
```bash
npm run build
firebase login
firebase init hosting # elegir carpeta ./.next/export si usas export, o usar rewrites para SSR
firebase deploy
```
Si deseas SSR completo en Firebase se recomienda usar Cloud Run / Functions + adaptador; para landing estática podrías hacer `next build && next export`.

---
## Roadmap Opcional Futuro
- [ ] Menú dinámico Firestore
- [ ] Panel admin (Auth + CRUD)
- [ ] OG image endpoint
- [ ] i18n (es/en)
- [ ] Estrategia de caching avanzada (headers) para imágenes reales
- [ ] Test E2E (Playwright) para formulario / accesibilidad

---
## Contribuir / Modificar
1. Sustituye SVGs en `public/images/` cuando tengas material real.
2. Ajusta paleta en `globals.css` o tailwind tokens si se define branding definitivo.
3. Extiende PDF en `generateMenuPdf.ts` para incluir logotipo raster.

---
## Licencia
MIT – Uso libre para demostración / personalización comercial.

---
## Preguntas Rápidas
**¿Por qué todavía no Firestore activo?** Para no consumir cuota ni añadir latencia mientras es demo.  
**¿Añadir dark mode?** Se puede, pero se decidió posponer para no interferir con el branding cálido.  
**¿Puedo migrar a Vercel luego?** Sí, configuración es estándar Next.js.

---
## Créditos
Estructura inicial basada en create-next-app y adaptada para una experiencia de presentación de restaurantes moderna y ligera.
