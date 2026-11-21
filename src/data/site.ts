// ─────────────────────────────────────────────────────────────
// DATOS GENERALES DE LA MARCA
// Todo lo marcado con // PROVISIONAL hay que sustituirlo por el dato real.
// ─────────────────────────────────────────────────────────────

export const site = {
  nombre: 'Càrom Studio Vintage',

  // PROVISIONAL: dominio definitivo (cámbialo también en astro.config.mjs → site)
  url: 'https://caromvintage.es',

  // Perfil de Instagram
  instagram: 'https://www.instagram.com/carom_vintage/',
  instagramUsuario: '@carom_vintage',
  // Contacto: perfil (ig.me redirigía a otra cuenta)
  instagramMD: 'https://www.instagram.com/carom_vintage/',
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
    etiqueta: 'Seleccionadas y restauradas a mano',
  },

  // PROVISIONAL
  novedades: {
    titulo: 'Novedades',
    etiqueta: 'Acaban de llegar · 8 piezas',
    texto:
      'Descubre antes que nadie nuestras próximas piezas, con descuentos exclusivos de Black Friday reservados únicamente para este acceso privado.',
  },

  // PROVISIONAL
  coleccion: {
    titulo: 'La selección de la noche',
  },

  // PROVISIONAL
  invitadas: {
    eyebrow: 'Para invitadas',
    titulo: ['Vestirse para una noche', 'muy especial'],
    texto:
      'Sedas, terciopelos y lentejuelas que brillan mejor cuando lo llevas tú. Una edición pensada para los eventos más importantes.',
  },

  // PROVISIONAL
  nosotros: {
    titulo: 'Nosotros',
    entradilla: 'Creemos que un vestido especial no debería repetirse en cada boda.',
    parrafos: [
      'Càrom Studio Vintage nace de la búsqueda paciente de piezas con historia. Recorremos talleres, armarios y mercados para encontrar vestidos que merecen una segunda vida, y los cuidamos a mano hasta que vuelven a estar perfectos.',
      'Por eso de cada vestido solo hay uno, en una única talla. No hay reposiciones ni colecciones en serie: hay piezas que se eligen una vez y se recuerdan siempre.',
    ],
  },

  // PROVISIONAL
  tarjetaRegalo: {
    etiqueta: 'Regalo con historia',
    titulo: 'Tarjeta regalo',
    texto:
      'Para quien aún no ha encontrado su pieza. Una tarjeta regalo de Càrom Studio Vintage, lista para elegir el vestido único que marcará su ocasión.',
    cta: 'Consultar tarjeta regalo',
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
