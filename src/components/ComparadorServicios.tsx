
import { useState } from "react";
import {
  Check,
  X,
  Plus,
  RotateCcw,
  GitCompareArrows,
  ArrowUpRight,
} from "lucide-react";

import { comparativaServicios } from "../data/comparativaServicios";
import "./ComparadorServicios.css";

interface Props {
  onSelectService: (id: string) => void;
}

export default function ComparadorServicios({
  onSelectService,
}: Props) {
  const [seleccionados, setSeleccionados] = useState<string[]>(
    comparativaServicios.map((servicio) => servicio.id)
  );

  const serviciosActivos = comparativaServicios.filter((servicio) =>
    seleccionados.includes(servicio.id)
  );

  const alternarServicio = (id: string) => {
    setSeleccionados((actuales) =>
      actuales.includes(id)
        ? actuales.filter((item) => item !== id)
        : [...actuales, id]
    );
  };

  return (
    <section className="section comparator-section" id="comparador">
      <div className="section-heading">
        <div>
          <span className="eyebrow">COMPARA Y ELIGE</span>
          <h2>Encuentra la solución ideal.</h2>
        </div>

        <p>
          Compara precios, características y funcionalidades para
          identificar el servicio que mejor se adapta a tu proyecto.
        </p>
      </div>

      <div className="comparator-selector">
        <div className="comparator-selector-heading">
          <div>
            <GitCompareArrows size={21} />
            <div>
              <strong>Selecciona los servicios</strong>
              <p>Elige uno o varios para compararlos.</p>
            </div>
          </div>

          <span>
            {seleccionados.length} de {comparativaServicios.length}
          </span>
        </div>

        <div className="comparator-options">
          {comparativaServicios.map((servicio) => {
            const activo = seleccionados.includes(servicio.id);

            return (
              <button
                key={servicio.id}
                type="button"
                className={`comparator-option ${
                  activo ? "active" : ""
                }`}
                onClick={() => alternarServicio(servicio.id)}
                aria-pressed={activo}
              >
                {activo ? <Check size={15} /> : <Plus size={15} />}
                {servicio.nombre}
              </button>
            );
          })}
        </div>

        <div className="comparator-controls">
          <button
            type="button"
            onClick={() =>
              setSeleccionados(
                comparativaServicios.map((servicio) => servicio.id)
              )
            }
          >
            <Check size={15} /> Seleccionar todos
          </button>

          <button type="button" onClick={() => setSeleccionados([])}>
            <RotateCcw size={15} /> Limpiar
          </button>
        </div>
      </div>

      {serviciosActivos.length === 0 ? (
        <div className="comparator-empty">
          <GitCompareArrows size={35} />
          <h3>No hay servicios seleccionados</h3>
          <p>Selecciona al menos uno para comenzar la comparación.</p>
        </div>
      ) : (
        <>
          <div className="comparator-table-heading">
            <div>
              <span className="eyebrow">COMPARACIÓN DETALLADA</span>
              <h3>Características de cada servicio</h3>
            </div>
          </div>

          <div className="comparator-scroll">
            <table className="comparator-table">
              <thead>
                <tr>
                  <th className="comparator-label-cell">Características</th>

                  {serviciosActivos.map((servicio) => (
                    <th key={servicio.id}>
                      <div className="comparator-service-head">
                        <img src={servicio.imagen} alt={servicio.nombre} />

                        <strong>{servicio.nombre}</strong>

                        <span>
                          Desde S/ {servicio.precio.toLocaleString("es-PE")}
                        </span>

                        <button
                          type="button"
                          title="Quitar servicio"
                          aria-label={`Quitar ${servicio.nombre}`}
                          onClick={() => alternarServicio(servicio.id)}
                        >
                          <X size={15} />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Descripción</th>
                  {serviciosActivos.map((servicio) => (
                    <td key={servicio.id}>{servicio.descripcion}</td>
                  ))}
                </tr>

                <tr>
                  <th>Ideal para</th>
                  {serviciosActivos.map((servicio) => (
                    <td key={servicio.id}>{servicio.idealPara}</td>
                  ))}
                </tr>

                <tr>
                  <th>
                    <span className="comparator-positive">
                      <Check size={16} /> Incluye
                    </span>
                  </th>

                  {serviciosActivos.map((servicio) => (
                    <td key={servicio.id}>
                      <ul className="comparator-list">
                        {servicio.incluye.map((item, index) => (
                          <li key={index}>
                            <Check size={15} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                <tr>
                  <th>
                    <span className="comparator-negative">
                      <X size={16} /> No incluye
                    </span>
                  </th>

                  {serviciosActivos.map((servicio) => (
                    <td key={servicio.id}>
                      <ul className="comparator-list excluded">
                        {servicio.noIncluye.map((item, index) => (
                          <li key={index}>
                            <X size={15} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                <tr>
                  <th>
                    <span className="comparator-positive">
                      <Plus size={16} /> Adicionales
                    </span>
                  </th>

                  {serviciosActivos.map((servicio) => (
                    <td key={servicio.id}>
                      <ul className="comparator-additional-list">
                        {servicio.adicionales.map((item, index) => (
                          <li key={index}>
                            <span>{item.nombre}</span>
                            <strong>{item.precio}</strong>
                            {item.detalle && <small>{item.detalle}</small>}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                <tr className="comparator-price-row">
                  <th>Precio base</th>
                  {serviciosActivos.map((servicio) => (
                    <td key={servicio.id}>
                      <strong>
                        S/ {servicio.precio.toLocaleString("es-PE")}
                      </strong>
                      <small>Precio referencial</small>
                    </td>
                  ))}
                </tr>

                <tr>
                  <th>Más información</th>
                  {serviciosActivos.map((servicio) => (
                    <td key={servicio.id}>
                      <button
                        className="comparator-detail-button"
                        type="button"
                        onClick={() => onSelectService(servicio.id)}
                      >
                        Ver servicio <ArrowUpRight size={15} />
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p className="comparator-disclaimer">
            Los precios son referenciales. Las funcionalidades adicionales,
            servicios externos y requerimientos particulares se cotizan
            según el alcance del proyecto.
          </p>
        </>
      )}
    </section>
  );
}
