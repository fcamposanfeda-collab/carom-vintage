// ─────────────────────────────────────────────────────────────
// BLACK FRIDAY · La URL /black-friday es fija: cada año solo cambia estos datos.
// ─────────────────────────────────────────────────────────────
import data from './vestidos.json';

export const blackFriday = {
  // PROVISIONAL: pon false cuando acabe la promo (oculta el banner y los precios tachados)
  activo: true,
  // PROVISIONAL: descuento en %
  descuento: 20,
  // PROVISIONAL: fechas de inicio y fin (hora peninsular)
  inicio: '2026-11-20T00:00:00+01:00',
  fin: '2026-11-30T23:59:59+01:00',
  // PROVISIONAL: fechas tal y como se leen en los textos
  fechasTexto: 'del 20 al 30 de noviembre',
  finTexto: '30 de noviembre',
  // PROVISIONAL: condiciones de envío
  envioTexto: 'Envío en 24-72 h laborables a toda España',
  // PROVISIONAL
  mensajeWhatsapp: 'Hola, vengo por el Black Friday y me interesa el vestido __ en talla __',
  ogImage: '/img/og-black-friday-vestidos-vintage.jpg',
  imagen: '/img/vestido-vintage-invitada-black-friday.webp',
  imagenAlt: 'Invitada con vestido vintage largo rojo en oferta de Black Friday',
};

export type Vestido = (typeof data.vestidos)[number];

export const vestidos: Vestido[] = data.vestidos;

export function enOferta(v: Vestido) {
  return blackFriday.activo && v.oferta;
}

export function precioOferta(precio: number) {
  return Math.round(precio * (100 - blackFriday.descuento)) / 100;
}

export function formatoPrecio(precio: number) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(precio) ? 0 : 2,
  }).format(precio);
}

const bf = blackFriday;

// PROVISIONAL: textos de la landing /black-friday
export const textosBlackFriday = {
  intro: `Este Black Friday te lo ponemos fácil: ${bf.descuento} % de descuento en una selección de vestidos vintage para bodas, invitadas y galas, ${bf.fechasTexto}. Piezas únicas, revisadas a mano y listas para tu próximo gran día.`,
  queIncluye: [
    `Un ${bf.descuento} % de descuento directo en los vestidos con la etiqueta Black Friday, de invitada, de boda y de gala.`,
    'Asesoramiento personal por WhatsApp: te ayudamos a elegir talla, largo y complementos sin compromiso.',
    'Las medidas reales de cada vestido antes de pagar, para que aciertes a la primera.',
    'La tarjeta regalo Regala Càrom, también disponible durante la promo.',
  ],
  invitada:
    'Si tienes una boda en primavera o verano, este es el momento. Lunares, flores y colores con historia para ir guapa y diferente sin gastar de más.',
  boda:
    'Para novias que buscan un vestido de boda vintage para una ceremonia civil o íntima, y para bodas de noche y galas. Hay pocas unidades y muchas son talla única: si te gusta uno, no lo dejes pasar.',
  comoPedir: [
    'Elige tu vestido en esta página y apunta su nombre.',
    'Escríbenos por WhatsApp o mándanos un MD en Instagram con el nombre y tu talla.',
    'Te confirmamos que está disponible, te aplicamos el descuento y lo reservamos para ti.',
  ],
  envios: `${bf.envioTexto}, bien embalado y con seguimiento. Si estás entre Castilla-La Mancha y Sevilla, también puedes quedar con nosotras para probártelo antes de decidir. Los pedidos confirmados hasta el ${bf.finTexto} mantienen el precio de Black Friday aunque se envíen después.`,
  regalo:
    'Si no sabes qué regalar esta Navidad, regala Càrom. La tarjeta regalo es la idea perfecta para la amiga que se casa este año, para tu madre o para darte un capricho. Tú eliges el importe y ella, el vestido.',
};

// PROVISIONAL: preguntas frecuentes de la landing (también generan el schema FAQPage)
export const faqBlackFriday = [
  {
    pregunta: '¿Cuándo es el Black Friday de CÀROM Studio?',
    respuesta: `La promoción va ${blackFriday.fechasTexto}, hasta las 23:59 del último día. Después, los vestidos vuelven a su precio normal.`,
  },
  {
    pregunta: '¿Cómo consigo el descuento?',
    respuesta: `Escríbenos por WhatsApp o por mensaje directo en Instagram con el nombre del vestido y tu talla. Te aplicamos el ${blackFriday.descuento} % directamente, sin códigos ni registros.`,
  },
  {
    pregunta: '¿Hacéis envíos a toda España?',
    respuesta: `Sí. ${blackFriday.envioTexto}. Si estás por Castilla-La Mancha o Sevilla, también puedes quedar con nosotras para probártelo.`,
  },
  {
    pregunta: '¿Y si el vestido no me queda bien?',
    respuesta:
      'Antes de enviarlo te pasamos las medidas reales de la prenda para que aciertes. Si aun así no te convence, tienes 14 días para cambiarlo por otro vestido.',
  },
  {
    pregunta: '¿La tarjeta Regala Càrom entra en la promo?',
    respuesta:
      'Sí. Es el regalo perfecto para Navidad: tú eliges el importe y ella elige su vestido cuando quiera durante los próximos 12 meses.',
  },
];
