// ─────────────────────────────────────────────────────────────
// DATOS GENERALES DE LA MARCA
// Todo lo marcado con // PROVISIONAL hay que sustituirlo por el dato real.
// ─────────────────────────────────────────────────────────────

export const site = {
  nombre: 'CÀROM Studio',
  nombreCorto: 'CÀROM',

  // PROVISIONAL: dominio definitivo (cámbialo también en astro.config.mjs → site)
  url: 'https://caromstudio.es',

  // PROVISIONAL: teléfono de WhatsApp en formato internacional sin "+" ni espacios
  telefono: '34600000000',
  // PROVISIONAL: teléfono tal y como se lee
  telefonoVisible: '+34 600 000 000',
  // PROVISIONAL: perfil de Instagram
  instagram: 'https://instagram.com/carom.studio',
  instagramUsuario: '@carom.studio',
  // PROVISIONAL: enlace directo a mensaje privado (MD) de Instagram
  instagramMD: 'https://ig.me/m/carom.studio',
  // PROVISIONAL: email de contacto
  email: 'hola@caromstudio.es',

  // PROVISIONAL: zona de trabajo
  zona: 'Entre Castilla-La Mancha y Sevilla',
  envios: 'Envíos a toda España',

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

export function nombreCorto(nombre: string) {
  return nombre.replace(/^vestido\s+/i, '');
}

export function mensajeVestido(nombre: string, talla = '__') {
  return `Hola, me interesa el vestido ${nombreCorto(nombre)} en talla ${talla}`;
}

// ─────────────────────────────────────────────────────────────
// TEXTOS DE LA WEB
// ─────────────────────────────────────────────────────────────

export const textos = {
  // PROVISIONAL
  claim: 'Vestidos con historia para tus días especiales',
  // PROVISIONAL
  subclaim:
    'Vestidos vintage para bodas, comuniones, galas e invitadas. Piezas únicas, elegantes y diferentes, elegidas una a una.',

  // PROVISIONAL
  quienesSomos: {
    titulo: 'Quiénes somos',
    texto:
      'Somos CÀROM Studio, un pequeño estudio que busca, cuida y arregla vestidos vintage para que vuelvan a brillar en tu boda, tu comunión o esa gala que llevas meses esperando. Trabajamos entre Castilla-La Mancha y Sevilla y enviamos a toda España.',
  },

  // PROVISIONAL
  pasos: [
    {
      titulo: 'Eliges',
      texto: 'Mira el catálogo con calma y quédate con el vestido que te haya enamorado.',
    },
    {
      titulo: 'Nos escribes',
      texto: 'Mándanos un WhatsApp con el nombre del vestido y tu talla. Te contestamos enseguida.',
    },
    {
      titulo: 'Te lo enviamos o lo pruebas',
      texto: 'Te lo mandamos a casa en 24-72 h o quedamos para que te lo pruebes en persona.',
    },
  ],

  // PROVISIONAL: modalidad de venta / alquiler
  modalidad: 'Venta y, en algunos modelos, alquiler de vestidos de evento.',

  // PROVISIONAL
  regalaCarom: {
    titulo: 'Regala Càrom',
    texto:
      'La tarjeta regalo para quien tiene una boda, una comunión o un capricho pendiente. Ella elige el vestido, tú aciertas seguro.',
    importes: [50, 75, 100, 150],
    validez: 'Válida durante 12 meses',
  },
};

// PROVISIONAL: fotos de la galería tipo Instagram (sustituir archivos en /public/img)
export const galeriaInstagram = [
  { src: '/img/instagram-vestidos-vintage-1.webp', alt: 'Burro con vestidos vintage colgados en el estudio de CÀROM' },
  { src: '/img/instagram-vestidos-vintage-2.webp', alt: 'Ramo de flores para una boda con vestido vintage' },
  { src: '/img/instagram-vestidos-vintage-3.webp', alt: 'Invitada con vestido vintage de tul y flores' },
  { src: '/img/instagram-vestidos-vintage-4.webp', alt: 'Detalle de manos con anillos en una boda' },
  { src: '/img/instagram-vestidos-vintage-5.webp', alt: 'Vestido largo rojo de gala en movimiento' },
  { src: '/img/instagram-vestidos-vintage-6.webp', alt: 'Ceremonia de boda al aire libre con invitadas' },
];
