import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CircleHelp,
  MessageCircle,
  X,
  Globe,
} from "lucide-react";

import type { Servicio } from "../data/servicios";

interface ServicioDetalleProps {
  servicio: Servicio;
  onBack: () => void;
  whatsapp: string;
  correo: string;
}

const PORTAFOLIO_URL = "https://portafolio-hq.vercel.app/";

export default function ServicioDetalle({
  servicio,
  onBack,
  whatsapp,
  correo,
}: ServicioDetalleProps) {
  const mensaje = `Hola, estoy interesado en el servicio de ${servicio.nombre} (desde S/ ${servicio.precio}). Me gustaría recibir más información y una cotización según mis necesidades.`;

  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    mensaje
  )}`;

  const correoUrl = `mailto:${correo}?subject=${encodeURIComponent(
    `Cotización: ${servicio.nombre}`
  )}&body=${encodeURIComponent(mensaje)}`;

  return (
    <main className="service-detail-page">
      <div className="service-detail-container">
        <button
          className="service-back-button"
          type="button"
          onClick={onBack}
        >
          <ArrowLeft size={17} />
          Volver a servicios
        </button>

        <header className="service-detail-heading">
          <span className="eyebrow">SERVICIOS WTS</span>

          <h1>{servicio.nombre}</h1>

          <p>{servicio.descripcion}</p>

          <div className="service-detail-price">
            <span>Precio referencial desde</span>
            <strong>
              S/ {servicio.precio.toLocaleString("es-PE")}
            </strong>
          </div>
        </header>

        {/* IMAGEN PRINCIPAL DEL SERVICIO */}
        <div className="service-detail-image">
          <img
            src={servicio.imagen}
            alt={`Imagen del servicio ${servicio.nombre}`}
          />
          <span>{servicio.nombre}</span>
        </div>

        <div className="service-detail-grid">
          <div className="service-detail-main">
            {/* QUÉ INCLUYE */}
            <section className="service-detail-card">
              <span className="service-detail-kicker">
                <Check size={16} />
                ALCANCE DEL SERVICIO
              </span>

              <h2>¿Qué incluye?</h2>

              <ul className="service-check-list">
                {servicio.incluye.map((item) => (
                  <li key={item}>
                    <Check size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* QUÉ NO INCLUYE */}
            <section className="service-detail-card">
              <span className="service-detail-kicker">
                <X size={16} />
                LÍMITES DEL PAQUETE
              </span>

              <h2>¿Qué no incluye?</h2>

              <ul className="service-cross-list">
                {servicio.noIncluye.map((item) => (
                  <li key={item}>
                    <X size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ADICIONALES */}
            <section className="service-detail-card">
              <span className="service-detail-kicker">
                <CircleHelp size={16} />
                OPCIONES ADICIONALES
              </span>

              <h2>Funciones y módulos adicionales</h2>

              <p className="service-detail-muted">
                Puedes solicitar estas opciones si tu proyecto las necesita.
                Se cotizan aparte cuando no forman parte del paquete contratado.
              </p>

              <div className="service-addons">
                {servicio.adicionales.map((item) => (
                  <div className="service-addon" key={item.nombre}>
                    <span>
                      <strong>{item.nombre}</strong>
                      {item.detalle && <small>{item.detalle}</small>}
                    </span>

                    <b>{item.precio}</b>
                  </div>
                ))}
              </div>

              <p className="service-price-disclaimer">
                Los importes son referenciales para funcionalidades sencillas.
                Las funciones de mayor complejidad se evalúan y cotizan
                individualmente.
              </p>
            </section>
          </div>

          {/* INFORMACIÓN LATERAL */}
          <aside className="service-detail-aside">
            <div className="service-detail-card service-aside-card">
              <span className="service-detail-kicker">
                RECOMENDADO PARA
              </span>

              <p>{servicio.idealPara}</p>

              <a
                className="service-quote-button"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                Solicitar cotización
                <ArrowUpRight size={17} />
              </a>

              <a className="service-email-link" href={correoUrl}>
                Consultar por correo
              </a>

              <div className="service-developer-divider" />

              <span className="service-detail-kicker">
                ¿QUIERES CONOCER MÁS?
              </span>

              <p>
                Explora el portafolio del desarrollador y conoce otros
                proyectos, tecnologías y trabajos realizados.
              </p>

              <a
                className="service-portfolio-button"
                href={PORTAFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={17} />
                Detalles del desarrollador
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* DOMINIO, HOSTING Y MANTENIMIENTO */}
            <div className="service-detail-card">
              <span className="service-detail-kicker">
                INFORMACIÓN GENERAL
              </span>

              <h3>Dominio y hosting</h3>

              <p>
                El dominio propio y el hosting comercial no están incluidos
                en el precio base. Su contratación y renovación se cotizan
                según el proveedor y las necesidades del proyecto.
                Recomendamos registrar el dominio a nombre del cliente.
              </p>

              <h3>Mantenimiento opcional</h3>

              <p>
                <strong>S/ 75 mensuales</strong> como tarifa inicial para
                revisión general, correcciones menores, actualización sencilla
                de información y soporte técnico básico. No incluye nuevas
                funciones, rediseños, hosting ni atención permanente.
              </p>
            </div>
          </aside>
        </div>

        {/* CTA FINAL */}
        <div className="service-detail-bottom-cta">
          <div>
            <span className="eyebrow">HABLEMOS DE TU PROYECTO</span>

            <h2>¿Necesitas algo diferente?</h2>

            <p>
              Cuéntanos qué necesitas. Podemos revisar los requerimientos y
              preparar una cotización personalizada.
            </p>
          </div>

          <a
            className="service-quote-button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            Cotizar este servicio
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </main>
  );
}