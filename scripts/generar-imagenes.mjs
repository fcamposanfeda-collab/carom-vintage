// Genera las imágenes para compartir (Open Graph 1200x630) y los favicons.
// Uso: npm run imagenes
// Usa como fondo la foto principal de la portada: sustitúyela y vuelve a ejecutarlo.
import sharp from 'sharp';
import fs from 'node:fs/promises';

const OUT = 'public/img/';
const crema = '#F3EADC';
const noche = '#17120E';
const oro = '#CBB89E';

// PROVISIONAL: textos de la imagen para compartir
const imagenes = [
  {
    base: 'public/img/hero-vestido-vintage-invitada-boda.webp',
    salida: `${OUT}og-carom-studio-vestidos-vintage.jpg`,
    antetitulo: 'BLACK FRIDAY · DEL 20 AL 30 DE NOVIEMBRE',
    titulo: 'Càrom Studio Vintage',
    destacado: '',
    subtitulo: 'Una talla. Una pieza. Una sola vez.',
    pie: 'Vestidos vintage de pieza única',
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

for (const img of imagenes) {
  const panel = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="640" height="630" fill="${noche}"/>
    <text x="64" y="150" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="5" fill="${crema}" fill-opacity="0.8">${esc(img.antetitulo)}</text>
    <text x="60" y="265" font-family="Georgia, 'Times New Roman', serif" font-size="92" fill="${crema}">${esc(img.titulo)}</text>
    ${img.destacado ? `<text x="60" y="370" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="104" fill="${oro}">${esc(img.destacado)}</text>` : ''}
    <text x="64" y="${img.destacado ? 440 : 340}" font-family="Arial, Helvetica, sans-serif" font-size="27" fill="${crema}">${esc(img.subtitulo)}</text>
    <rect x="64" y="500" width="60" height="2" fill="${oro}"/>
    <text x="64" y="548" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="${crema}" fill-opacity="0.8">${esc(img.pie)}</text>
  </svg>`);
  const foto = await sharp(img.base).resize(560, 630, { fit: 'cover', position: 'attention' }).toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: noche } })
    .composite([{ input: foto, left: 640, top: 0 }, { input: panel }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(img.salida);
  console.log('✓', img.salida);
}

// Favicons a partir de public/favicon.svg
const favicon = await fs.readFile('public/favicon.svg');
await sharp(favicon, { density: 600 }).resize(180, 180).flatten({ background: crema }).png().toFile('public/apple-touch-icon.png');
const png32 = await sharp(favicon, { density: 300 }).resize(32, 32).png().toBuffer();
const cabecera = Buffer.alloc(22);
cabecera.writeUInt16LE(0, 0);
cabecera.writeUInt16LE(1, 2);
cabecera.writeUInt16LE(1, 4);
cabecera.writeUInt8(32, 6);
cabecera.writeUInt8(32, 7);
cabecera.writeUInt16LE(1, 10);
cabecera.writeUInt16LE(32, 12);
cabecera.writeUInt32LE(png32.length, 14);
cabecera.writeUInt32LE(22, 18);
await fs.writeFile('public/favicon.ico', Buffer.concat([cabecera, png32]));
console.log('✓ favicons');
