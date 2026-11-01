
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { preguntasFrecuentes } from "../data/preguntasFrecuentes";
import "./PreguntasFrecuentes.css";

export default function PreguntasFrecuentes() {
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <section className="section faq-section" id="preguntas">
      <div className="section-heading">
        <div>
          <span className="eyebrow">RESOLVEMOS TUS DUDAS</span>
          <h2>Preguntas frecuentes.</h2>
        </div>

        <p>
          Información útil para conocer cómo trabajamos y qué debes
          considerar antes de iniciar tu proyecto.
        </p>
      </div>

      <div className="faq-layout">
        <div className="faq-list">
          {preguntasFrecuentes.map((item, index) => {
            const activa = abierta === index;

            return (
              <article
                className={`faq-item ${activa ? "faq-item-active" : ""}`}
                key={item.pregunta}
              >
                <button
                  type="button"
                  aria-expanded={activa}
                  onClick={() => setAbierta(activa ? null : index)}
                >
                  <span className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{item.pregunta}</strong>

                  <ChevronDown size={19} />
                </button>

                {activa && <p className="faq-answer">{item.respuesta}</p>}
              </article>
            );
          })}
        </div>

        <aside className="faq-contact">
          <MessageCircle size={30} />
          <h3>¿Tienes otra consulta?</h3>
          <p>
            Si necesitas información adicional, podemos conversar
            directamente sobre tu proyecto.
          </p>

          <a
            href="https://wa.me/51964618454"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
            <ChevronDown size={16} />
          </a>
        </aside>
      </div>
    </section>
  );
}
