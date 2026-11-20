// ─────────────────────────────────────────────────────────────
// DATOS GENERALES DE LA MARCA
// Todo lo marcado con // PROVISIONAL hay que sustituirlo por el dato real.
// ─────────────────────────────────────────────────────────────

export const site = {
  nombre: 'CÀROM Studio',

  // PROVISIONAL: dominio definitivo (cámbialo también en astro.config.mjs → site)
  url: 'https://caromstudio.es',

  // PROVISIONAL: perfil de Instagram
  instagram: 'https://instagram.com/carom.studio',
  instagramUsuario: '@carom.studio',
  // PROVISIONAL: enlace directo a mensaje privado (MD) de Instagram
  instagramMD: 'https://ig.me/m/carom.studio',
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

/** Abre el chat de Instagram (los MD no admiten texto precargado como WhatsApp). */
export function contactoLink() {
  return site.instagramMD;
}

// ─────────────────────────────────────────────────────────────
// TEXTOS DE LA WEB
// ─────────────────────────────────────────────────────────────

export const textos = {
  // PROVISIONAL
  portada: {
    etiqueta: 'The Private Edit — Black Friday',
    claim: 'Una vez al año. Piezas que solo existen una vez.',
    texto:
      'Vestidos vintage únicos, de los años 20 al 2000. Una selección extraordinaria para ocasiones que merecen algo irrepetible.',
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

// PROVISIONAL: preguntas frecuentes (edítalas cuando el chico confirme textos)
export const faq = [
  {
    pregunta: '¿Qué es The Private Edit?',
    respuesta:
      'Es nuestro acceso privado de Black Friday: una selección de vestidos vintage de pieza única, abierta solo unos días al año.',
  },
  {
    pregunta: '¿Cada vestido es realmente único?',
    respuesta:
      'Sí. De cada modelo solo hay una unidad y una sola talla. Cuando alguien lo reserva, desaparece de la selección.',
  },
  {
    pregunta: '¿Cómo reservo un vestido?',
    respuesta:
      'Pulsa «Lo quiero» en la pieza que te guste y escríbenos por mensaje directo en Instagram. Te confirmamos disponibilidad y te guiamos con el resto.',
  },
  {
    pregunta: '¿Hacéis envíos?',
    respuesta:
      'Sí, enviamos a toda España. Te confirmamos plazos y condiciones por Instagram cuando reserves tu pieza.',
  },
  {
    pregunta: '¿Puedo probarme el vestido?',
    respuesta:
      'Depende de la zona y de la pieza. Escríbenos por Instagram y te contamos las opciones para tu caso.',
  },
  {
    pregunta: '¿Qué tallas tenéis?',
    respuesta:
      'Cada vestido tiene su propia talla, indicada en la ficha. Si dudas, mándanos un MD y te ayudamos con medidas.',
  },
];
