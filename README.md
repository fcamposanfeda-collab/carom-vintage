# Càrom Studio Vintage · Web

Web informativa de vestidos vintage para eventos. Astro 6 + Tailwind CSS 4, 100 % estática.

## Arrancar en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist
npm run preview    # sirve /dist en local
npm run imagenes   # regenera imágenes para compartir (Open Graph) y favicons
```

## Publicar gratis

- **Netlify**: sube el proyecto a un repositorio, «Add new site → Import an existing project». Lee `netlify.toml` (build `npm run build`, carpeta `dist`).
- **Vercel**: «Add New → Project», importa el repositorio. Detecta Astro solo; `vercel.json` activa las URLs limpias (`/black-friday`).

Después, conecta tu dominio y cámbialo en `astro.config.mjs` y `src/data/site.ts`.

## Qué cambiar por datos reales

Busca `PROVISIONAL` en el proyecto: todo lo provisional está marcado.

| Qué | Dónde |
| --- | --- |
| Teléfono WhatsApp, Instagram, MD, email, zona | `src/data/site.ts` |
| ID de Umami | `src/data/site.ts` → `umamiWebsiteId` |
| Dominio | `src/data/site.ts` y `astro.config.mjs` |
| Textos (claim, quiénes somos, pasos, Regala Càrom) | `src/data/site.ts` → `textos` |
| Vestidos (nombres, precios, tallas, eventos, oferta) | `src/data/vestidos.json` |
| Vestidos destacados del inicio | `src/pages/index.astro` → `idsDestacados` |
| Black Friday (fechas, descuento, textos, FAQ, activo) | `src/data/blackfriday.ts` |
| Textos de las imágenes para compartir | `scripts/generar-imagenes.mjs` |
| Fotos | `public/img/` (sustituye el archivo con el mismo nombre) |
| Logo | Copia `public/img/logo.png` y aparece solo |
