// ─────────────────────────────────────────────────────────────
// BLACK FRIDAY Y COLECCIÓN
// ─────────────────────────────────────────────────────────────
import data from './vestidos.json';

export const blackFriday = {
  // PROVISIONAL: pon false cuando acabe la promo
  activo: true,
  // PROVISIONAL: fechas de inicio y fin (hora peninsular)
  inicio: '2026-11-22T00:00:00+01:00',
  fin: '2026-11-29T23:59:59+01:00',
  // PROVISIONAL: fechas tal y como se leen en los textos
  fechasTexto: 'Del 22 al 29 de noviembre',
};

export type Estado = 'disponible' | 'reservado' | 'vendido';

export type Vestido = {
  id: string;
  nombre: string;
  talla: string;
  medidas: string;
  /** Precio final (el “Ahora” del PDF). */
  precio: number | null;
  /** Descuento Black Friday de esta pieza, en %. */
  descuento: number | null;
  estado: Estado;
  descripcion: string;
  imagenes: string[];
  alt: string;
};

export const vestidos = data.vestidos as Vestido[];

// Novedades (orden del PDF; Rosalde añadida aparte)
export const novedadesIds = [
  'monterroso',
  'bordonau',
  'baviera',
  'petali',
  'matilde',
  'charlotte',
  'tessicini',
  'carol',
  'nirvan',
  'bibiana',
  'rosalde',
  'velika',
  'lessina',
  'estigia',
  'kali',
  'aureline',
  'aiko',
  'lorenza',
  'mao',
  'gianna',
  'manre',
  'leandra',
  'reiss',
  'colette',
  'marlen',
  'accus',
  'brela',
  'caroline',
  'lola',
] as const;

export const novedades = novedadesIds
  .map((id) => vestidos.find((v) => v.id === id))
  .filter((v): v is Vestido => Boolean(v));

// Selección de piezas (orden pedido)
export const seleccionIds = [
  'rosalie',
  'orsini',
  'violette',
  'montesion',
  'mauricio',
  'danna',
  'eclat',
  'franchesca',
  'adelaida',
  'sage',
  'guatape',
  'melissa',
  'freya',
  'carei',
  'duna',
  'esencia-dorada',
  'palma',
  'bencort',
  'casilda',
  'philippa',
  'amanda',
  'aurora',
  'grace',
  'parma',
  'croatia',
  'irati',
  'corina',
  'la-noak',
  'isol',
  'austria',
  'celine',
  'marilia',
  'magie',
  'fina',
  'lois',
  'leticia',
  'manon',
  'ccasur',
] as const;

export const seleccion = seleccionIds
  .map((id) => vestidos.find((v) => v.id === id))
  .filter((v): v is Vestido => Boolean(v));

// The Jacket Edit
export const jacketsIds = [
  'drop-01',
  'drop-02',
  'drop-03',
  'drop-04',
  'drop-05',
  'drop-06',
] as const;

export const jackets = jacketsIds
  .map((id) => vestidos.find((v) => v.id === id))
  .filter((v): v is Vestido => Boolean(v));

export function getVestido(id: string) {
  return vestidos.find((v) => v.id === id);
}

export function rutaVestido(id: string) {
  return `/piezas/${id}`;
}

export function esVideo(ruta: string) {
  return /\.(mp4|webm|mov)$/i.test(ruta);
}

export function imagenPrincipal(v: Vestido) {
  return v.imagenes.find((ruta) => !esVideo(ruta)) ?? '';
}

export function descuentoDe(v: Vestido): number | null {
  if (!blackFriday.activo) return null;
  return typeof v.descuento === 'number' && v.descuento > 0 ? v.descuento : null;
}

export function hayDescuento(v: Vestido) {
  return descuentoDe(v) !== null;
}

export function formatoPrecio(precio: number) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(precio) ? 0 : 2,
  }).format(precio);
}
