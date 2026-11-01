
import {
  MessageCircle,
  ClipboardList,
  FileText,
  Code2,
  SearchCheck,
  Rocket,
} from "lucide-react";

import "./ProcesoTrabajo.css";

const pasos = [
  {
    numero: "01",
    titulo: "Primer contacto",
    descripcion:
      "Conversamos sobre tu idea, negocio y necesidades.",
    Icon: MessageCircle,
  },
  {
    numero: "02",
    titulo: "Análisis",
    descripcion:
      "Evaluamos los requerimientos y las funcionalidades.",
    Icon: ClipboardList,
  },
  {
    numero: "03",
    titulo: "Propuesta",
    descripcion:
      "Definimos alcance, precio, entregables y plazos.",
    Icon: FileText,
  },
  {
    numero: "04",
    titulo: "Desarrollo",
    descripcion:
      "Construimos la solución siguiendo lo acordado.",
    Icon: Code2,
  },
  {
    numero: "05",
    titulo: "Revisión",
    descripcion:
      "Realizamos pruebas y revisamos el resultado contigo.",
    Icon: SearchCheck,
  },
  {
    numero: "06",
    titulo: "Entrega",
    descripcion:
      "Entregamos el proyecto y realizamos la publicación inicial cuando corresponda.",
    Icon: Rocket,
  },
];

export default function ProcesoTrabajo() {
  return (
    <section className="section process-section" id="proceso">
      <div className="section-heading">
        <div>
          <span className="eyebrow">ASÍ TRABAJAMOS</span>
          <h2>De la idea a la entrega.</h2>
        </div>

        <p>
          Un proceso organizado para que conozcas cada etapa de tu
          proyecto y su avance.
        </p>
      </div>

      <div className="process-grid">
        {pasos.map(({ numero, titulo, descripcion, Icon }) => (
          <article className="process-card" key={numero}>
            <div className="process-card-top">
              <span>{numero}</span>
              <Icon size={24} />
            </div>

            <h3>{titulo}</h3>
            <p>{descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
