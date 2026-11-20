// ─────────────────────────────────────────────────────────────
// DATOS GENERALES DE LA MARCA
// Todo lo marcado con // PROVISIONAL hay que sustituirlo por el dato real.
// ─────────────────────────────────────────────────────────────

export const site = {
  nombre: 'CÀROM Studio',

  // PROVISIONAL: dominio definitivo (cámbialo también en astro.config.mjs → site)
  url: 'https://caromstudio.es',

  // PROVISIONAL: teléfono de WhatsApp en formato internacional sin "+" ni espacios
  telefono: '34600000000',
  // PROVISIONAL: perfil de Instagram
  instagram: 'https://instagram.com/carom.studio',
  instagramUsuario: '@carom.studio',
  // PROVISIONAL: email de contacto
  email: 'hola@caromstudio.es',

  // PROVISIONAL: ID de la web en Umami (cloud.umami.is → Settings → Websites)
  umamiWebsiteId: '00000000-0000-0000-0000-000000000000',

  logo: '/img/logo.png',
  ogImagePorDefecto: '/img/og-carom-studio-vestidos-vintage.jpg',
};

export function rutaLimpia(pathname: string) {
  return pathname.replace(/(\/index)?\.html$/, '').replace(/\/$/, '') || '/';
}

export const whatsappBase = `https://wa.me/${site.telefono}`;

export function whatsappLink(mensaje?: string) {
  return mensaje ? `${whatsappBase}?text=${encodeURIComponent(mensaje)}` : whatsappBase;
}

export function mensajeVestido(nombre: string, talla: string) {
  return `Hola, me encanta el vestido ${nombre} (talla ${talla}). ¿Sigue disponible?`;
}

// ─────────────────────────────────────────────────────────────
// TEXTOS DE LA WEB
// ─────────────────────────────────────────────────────────────

export const textos = {
  // PROVISIONAL
  portada: {
    lead: 'Vestidos que ya vivieron una fiesta, listos para la tuya. Piezas únicas de los años 20 a los 90.',
  },

  // PROVISIONAL
  manifiesto: {
    titulo: ['Cada vestido,', 'una sola vez.'],
    texto:
      'No hay tallas repetidas ni segundas unidades. Por eso este Black Friday no va de prisa, va de encontrar la pieza: la que llevarás a la boda de diciembre, a la cena de Nochevieja o a esa celebración que aún no tiene fecha.',
    etiqueta: 'Seleccionadas a mano · Restauradas en taller',
  },

  // PROVISIONAL
  coleccion: {
    titulo: 'La selección de la noche',
  },

  // PROVISIONAL
  invitadas: {
    eyebrow: 'Para invitadas',
    titulo: ['Vestirse para una noche', 'a la luz de las velas'],
    texto:
      'Sedas, terciopelos y lentejuelas que brillan mejor con poca luz. Una edición pensada para las celebraciones de invierno.',
  },

  // PROVISIONAL
  nosotros: {
    titulo: 'Nosotros',
    entradilla: 'Creemos que un vestido especial no debería repetirse en cada boda.',
    parrafos: [
      'CÀROM Studio nace de la búsqueda paciente de piezas con historia. Recorremos talleres, armarios y mercados para encontrar vestidos que merecen una segunda vida, y los cuidamos a mano hasta que vuelven a estar perfectos.',
      'Por eso de cada vestido solo hay uno, en una única talla. No hay reposiciones ni colecciones en serie: hay piezas que se eligen una vez y se recuerdan siempre.',
    ],
  },
};
