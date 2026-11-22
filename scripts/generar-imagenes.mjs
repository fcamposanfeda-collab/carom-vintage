// Genera las imágenes para compartir (Open Graph 1200x630) y los favicons.
// Uso: npm run imagenes
// Usa como fondo la foto principal de la portada: sustitúyela y vuelve a ejecutarlo.
import sharp from 'sharp';
import fs from 'node:fs/promises';

const OUT = 'public/img/';
const crema = '#F3EADC';

// Imagen para compartir: portada completa (1200×630)
await sharp('public/img/portada-black.jpeg')
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(`${OUT}og-carom-portada.jpg`);
console.log('✓', `${OUT}og-carom-portada.jpg`);

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
