// ─────────────────────────────────────────────────────────────
// BLACK FRIDAY Y COLECCIÓN
// ─────────────────────────────────────────────────────────────
import data from './vestidos.json';

export const blackFriday = {
  // PROVISIONAL: pon false cuando acabe la promo
  activo: true,
  // PROVISIONAL: fechas de inicio y fin (hora peninsular)
  inicio: '2026-11-23T00:00:00+01:00',
  fin: '2026-11-30T23:59:59+01:00',
  // PROVISIONAL: fechas tal y como se leen en los textos
  fechasTexto: 'Del 23 al 30 de noviembre',
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

// PROVISIONAL: IDs de las 15 piezas en Novedades (cámbialos cuando quieras)
export const novedadesIds = [
  'esencia-dorada',
  'palma',
  'bencort',
  'casilda',
  'philippa',
  'amanda',
  'aurora',
  'grace',
  'croatia',
  'irati',
  'corina',
  'isol',
  'austria',
  'celine',
  'marilia',
] as const;

export const novedades = novedadesIds
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
