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
  // Email de contacto
  email: 'Caromstudiovintage@gmail.com',

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
    etiqueta: 'Acaban de llegar',
    texto:
      'Descubre antes que nadie nuestras próximas piezas, con descuentos exclusivos de Black Friday reservados únicamente para este acceso privado.',
  },

  // PROVISIONAL
  coleccion: {
    titulo: 'Selección de piezas',
  },

  // PROVISIONAL
  jackets: {
    titulo: 'The Jacket Edit',
    etiqueta: 'Drop 0.1 — 0.6 · 6 piezas',
    texto:
      'Una edición aparte: chaquetas vintage con carácter, listas para cerrar un look o llevarse solas.',
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
    parrafos: [
      'Regala la oportunidad de encontrar una pieza vintage única y especial.',
      'Personaliza tu tarjeta con el importe que desees y elige entre formato físico o digital.',
      'Sin fecha de caducidad, con acceso anticipado a nuevas piezas y asesoramiento personalizado para encontrar la prenda perfecta.',
    ],
    cta: 'Consultar tarjeta regalo',
    comoFunciona: {
      titulo: '¿Cómo funciona?',
      pasos: [
        'Elige el importe: personalizamos la tarjeta con el nombre de la persona que la recibirá.',
        'Escoge el formato: digital o físico, con envío a domicilio.',
        'Canjea tu tarjeta: cada una incluye un código único para utilizar al realizar una compra.',
        'Sin caducidad: podrá elegir su pieza favorita cuando quiera, sin prisas.',
      ],
    },
    queIncluye: {
      titulo: '¿Qué incluye?',
      items: [
        'Acceso anticipado a piezas antes de que salgan a la venta.',
        'Asesoramiento personalizado para encontrar prendas que encajen con sus gustos.',
        'Atención exclusiva: le avisaremos cuando lleguen piezas especiales que puedan interesarle.',
      ],
    },
  },
};

export const faq = [
  {
    pregunta: '¿Qué es The Private Edit?',
    respuesta:
      'Es nuestro acceso privado de Black Friday: una selección exclusiva de vestidos vintage de piezas únicas, disponibles solo durante unos días al año. Una oportunidad especial para encontrar ese vestido que no volverás a ver a precios únicos.',
  },
  {
    pregunta: '¿Cada vestido es realmente único?',
    respuesta:
      'Sí. Cada vestido es una pieza vintage única, seleccionada cuidadosamente por su diseño, calidad y carácter especial. Solo existe una unidad de cada modelo, por lo que, una vez agotado, no volverá a estar disponible.',
  },
  {
    pregunta: '¿Cómo reservo un vestido?',
    respuesta:
      'Si te has enamorado de alguna de nuestras piezas, escríbenos por Instagram indicándonos el nombre o mandándonos captura de tu pieza favorita, y nos encargaremos de gestionar tu reserva personalmente.\n\nRecuerda que cada vestido es una pieza única y las reservas se realizan por orden de confirmación. Una vez que se va, no vuelve.',
  },
  {
    pregunta: '¿Hacéis envíos?',
    respuesta:
      'Sí, enviamos nuestros vestidos a toda España y también envíos internacionales. Los plazos de entrega son de 24 a 48 horas y el gasto de envío está incluido con tu compra.',
  },
  {
    pregunta: '¿Puedo probarme el vestido?',
    respuesta:
      'No disponemos de un espacio físico para realizar pruebas, pero estaremos encantados de asesorarte de forma personalizada. Si nos facilitas tus medidas, te orientaremos con total honestidad y transparencia sobre cómo puede quedarte cada vestido, para que puedas elegir con la mayor confianza posible.',
  },
  {
    pregunta: '¿Qué tallas tenéis?',
    respuesta:
      'Al trabajar con vestidos vintage de pieza única, las tallas varían según cada modelo. En la descripción de cada pieza encontrarás las medidas de la prenda para que puedas comprobar cómo se adapta a ti. Si necesitas ayuda, escríbenos y te orientaremos para encontrar tu vestido ideal. Pero tenemos desde XS hasta XL.',
  },
  {
    pregunta: '¿Se aceptan devoluciones?',
    respuesta:
      'Trabajamos con piezas únicas y exclusivas, por lo que, en principio, no aceptamos devoluciones.\n\nNo obstante, podemos valorar cada caso si, en un plazo de 48 horas desde la solicitud, otra clienta muestra interés en adquirir la prenda.\n\nPara garantizar una compra acertada, facilitamos las medidas exactas de cada pieza y ofrecemos asesoramiento personalizado, siempre con honestidad y transparencia.\n\nNuestra prioridad es que encuentres una prenda que te encante y te siente perfecta.',
  },
];
