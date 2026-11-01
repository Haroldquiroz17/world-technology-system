
import { servicios } from "./servicios";

export const comparativaServicios = servicios.map((servicio) => ({
  id: servicio.id,
  nombre: servicio.nombre,
  precio: servicio.precio,
  imagen: servicio.imagen,
  resumen: servicio.resumen,
  descripcion: servicio.descripcion,
  idealPara: servicio.idealPara,
  incluye: servicio.incluye,
  noIncluye: servicio.noIncluye,
  adicionales: servicio.adicionales,
}));
