// ─────────────────────────────────────────────────────────────
// BLACK FRIDAY Y COLECCIÓN
// ─────────────────────────────────────────────────────────────
import data from './vestidos.json';

export const blackFriday = {
  // PROVISIONAL: pon false cuando acabe la promo (quita los precios tachados y los textos de Black Friday)
  activo: true,
  // PROVISIONAL: descuento en %, igual para todas las piezas
  descuento: 20,
  // PROVISIONAL: fechas de inicio y fin (hora peninsular)
  inicio: '2026-11-23T00:00:00+01:00',
  fin: '2026-11-30T23:59:59+01:00',
  // PROVISIONAL: fechas tal y como se leen en los textos
  fechasTexto: 'Del 23 al 30 de noviembre',
};

export type Estado = 'disponible' | 'reservado' | 'vendido';
export type Vestido = Omit<(typeof data.vestidos)[number], 'estado'> & { estado: Estado };

export const vestidos = data.vestidos as Vestido[];

export function precioFinal(precio: number) {
  return blackFriday.activo ? Math.round(precio * (100 - blackFriday.descuento)) / 100 : precio;
}

export function formatoPrecio(precio: number) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(precio) ? 0 : 2,
  }).format(precio);
}
