
import { Star, Building2 } from "lucide-react";
import { testimonios } from "../data/testimonios";
import "./Testimonios.css";

export default function Testimonios() {
  return (
    <section className="section testimonials-section" id="testimonios">
      <div className="section-heading">
        <div>
          <span className="eyebrow">EXPERIENCIAS DE PROYECTOS</span>
          <h2>Resultados que toman forma.</h2>
        </div>

        <p>
          Algunos proyectos desarrollados y experiencias compartidas
          sobre sus resultados.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonios.map((testimonio) => (
          <article className="testimonial-card" key={testimonio.id}>
            <div className="testimonial-company">
              <div className="testimonial-logo">
                <img
                  src={testimonio.logo}
                  alt={`Logo de ${testimonio.empresa}`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <Building2 className="testimonial-fallback-icon" size={30} />
              </div>

              <div className="testimonial-company-info">
                <strong>{testimonio.empresa}</strong>
                <span>{testimonio.proyecto}</span>
              </div>
            </div>

            <div
              className="testimonial-stars"
              aria-label="Cinco estrellas decorativas"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  size={19}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              ))}
            </div>

            <p className="testimonial-experience">
              {testimonio.experiencia}
            </p>

            <span className="testimonial-label">
              EXPERIENCIA DEL PROYECTO
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
