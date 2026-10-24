import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Globe,
} from "lucide-react";

import ProjectDetail from "./components/ProjectDetail";
import { projects } from "./data/projects";
import "./App.css";

const LOGO_COMPLETO = "/images/logo-wts-completo.png";
const LOGO_SIN_TEXTO = "/images/logo-wts-icono.png";

const CORREO = "hjqc@outlook.es";
const WHATSAPP_1 = "51964618454";
const WHATSAPP_2 = "51959349818";

const MENSAJE_WHATSAPP =
  "Hola, estoy interesado en solicitar una cotización y contar con sus servicios de desarrollo. ¿Podrían brindarme más información?";

const URL_WHATSAPP_1 = `https://wa.me/${WHATSAPP_1}?text=${encodeURIComponent(
  MENSAJE_WHATSAPP
)}`;

const URL_WHATSAPP_2 = `https://wa.me/${WHATSAPP_2}?text=${encodeURIComponent(
  MENSAJE_WHATSAPP
)}`;

const URL_CORREO = `mailto:${CORREO}?subject=${encodeURIComponent(
  "Solicitud de cotización - World Technology System"
)}&body=${encodeURIComponent(MENSAJE_WHATSAPP)}`;

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? null;

  useEffect(() => {
    if (selectedProjectId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedProjectId]);

  const goToProjects = () => {
    setSelectedProjectId(null);
    setMenuOpen(false);

    window.setTimeout(() => {
      document.getElementById("proyectos")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const goHome = () => {
    setSelectedProjectId(null);
    setMenuOpen(false);
  };

  return (
    <div className="wts">
      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          aria-label="World Technology System - Inicio"
          onClick={goHome}
        >
          <img
            className="brand-logo-full"
            src={LOGO_COMPLETO}
            alt="World Technology System"
          />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#inicio" onClick={goHome}>
            Inicio
          </a>

          <a href="#proyectos" onClick={goToProjects}>
            Proyectos
          </a>

          <a href="#equipo" onClick={() => setMenuOpen(false)}>
            Equipo
          </a>

          <a
            className="nav-contact"
            href="#contacto"
            onClick={() => setMenuOpen(false)}
          >
            Contacto <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={goToProjects} />
      ) : (
        <>
          <main>
            <section className="hero" id="inicio">
              <div className="hero-content">
                <span className="eyebrow">
                  DESARROLLO · DISEÑO · TECNOLOGÍA
                </span>

                <h1>
                  Compartimos y hacemos{" "}
                  <span>experiencias digitales.</span>
                </h1>

                <p className="hero-description">
                  Creamos páginas web, sistemas, aplicaciones y soluciones
                  digitales combinando diseño, tecnología y funcionalidad.
                </p>

                <div className="hero-actions">
                  <a className="button button-primary" href="#proyectos">
                    Explorar proyectos{" "}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>

                  <a className="button button-secondary" href="#equipo">
                    Conocer al equipo
                  </a>
                </div>

                <div className="hero-stats">
                  <div>
                    <strong>08</strong>
                    <span>Proyectos</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Desarrolladores</span>
                  </div>

                  <div>
                    <strong>∞</strong>
                    <span>Ideas por crear</span>
                  </div>
                </div>
              </div>

              <div className="hero-visual" aria-hidden="true">
                <div className="hero-glow" />
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="orbit orbit-three" />

                <div className="tech-core">
                  <img
                    className="hero-company-logo"
                    src={LOGO_SIN_TEXTO}
                    alt=""
                  />
                </div>

                <span className="floating-chip chip-one">{"</>"}</span>
                <span className="floating-chip chip-two">{"{ TS }"}</span>
                <span className="floating-chip chip-three">UI / UX</span>
                <span className="floating-chip chip-four">WEB</span>
              </div>
            </section>

            <section className="section projects-section" id="proyectos">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">TRABAJO SELECCIONADO</span>
                  <h2>Proyectos que toman forma.</h2>
                </div>

                <p>
                  Una selección de experiencias web, aplicaciones móviles y
                  sistemas de gestión.
                </p>
              </div>

              <div className="project-grid">
                {projects.map((project, index) => (
                  <button
                    className="project-card"
                    type="button"
                    key={project.id}
                    onClick={() => setSelectedProjectId(project.id)}
                    aria-label={`Ver detalles de ${project.title}`}
                  >
                    <div className="project-cover">
                      <img
                        className="project-cover-image"
                        src={project.image}
                        alt={`Vista previa de ${project.title}`}
                        loading="lazy"
                      />

                      <span className="project-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="project-open" aria-hidden="true">
                        ↗
                      </span>

                      {project.video && (
                        <span className="project-video-label">
                          Video disponible
                        </span>
                      )}
                    </div>

                    <div className="project-body">
                      <span className="project-category">
                        {project.category}
                      </span>

                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="tech-list">
                        {project.technologies.slice(0, 3).map((technology) => (
                          <span className="tech-tag" key={technology}>
                            {technology}
                          </span>
                        ))}

                        {project.technologies.length > 3 && (
                          <span className="tech-tag">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="project-footer">
                        <span>Ver proyecto</span>
                        <span aria-hidden="true">→</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section className="section team-section" id="equipo">
              <div className="team-layout">
                <div className="team-intro">
                  <span className="eyebrow">QUIÉNES SOMOS</span>

                  <h2>
                    Una misma visión.
                    <br />
                    <span>Distintas ideas, un objetivo.</span>
                  </h2>

                  <p>
                    Somos desarrolladores interesados en crear experiencias
                    digitales útiles, interfaces intuitivas y soluciones
                    tecnológicas adaptadas a cada proyecto.
                  </p>

                  <div className="team-values">
                    <div>
                      <span>01</span>
                      <p>Desarrollo de sistemas</p>
                    </div>

                    <div>
                      <span>02</span>
                      <p>Desarrollo web y móvil</p>
                    </div>

                    <div>
                      <span>03</span>
                      <p>Análisis de datos</p>
                    </div>
                  </div>
                </div>

                <div className="team-members">
                  <article className="developer-card">
                    <div className="developer-photo">
                      <img
                        src="/images/equipo/harold.jpeg"
                        alt="Harold Quiroz"
                        loading="lazy"
                      />
                    </div>

                    <div className="developer-info">
                      <span className="developer-label">DESARROLLADOR</span>
                      <h3>Harold Quiroz</h3>
                      <p>Desarrollo front-end y back-end</p>

                      <a
                        className="developer-button"
                        href="https://portafolio-hq.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe size={16} aria-hidden="true" />
                        Conoce mi portafolio
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>

                      <div className="contact-socials">
                        <a
                          href={URL_WHATSAPP_1}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Contactar a Harold por WhatsApp"
                          title="WhatsApp"
                        >
                          <MessageCircle size={18} />
                        </a>

                        <a
                          href={`mailto:${CORREO}`}
                          aria-label="Enviar correo a Harold"
                          title="Correo electrónico"
                        >
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </article>

                  <article className="developer-card">
                    <div className="developer-photo">
                      <img
                        src="/images/equipo/catunta.jpg"
                        alt="Ronnie Catunta"
                        loading="lazy"
                      />
                    </div>

                    <div className="developer-info">
                      <span className="developer-label">DESARROLLADOR</span>
                      <h3>Ronnie Catunta</h3>
                      <p>Desarrollo front-end y back-end</p>

                      <a
                        className="developer-button"
                        href={`https://wa.me/${WHATSAPP_2}?text=${encodeURIComponent(
                          "Hola Ronnie, estoy interesado en solicitar una cotización y conocer más sobre sus servicios de desarrollo. ¿Podrías brindarme más información?"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={16} aria-hidden="true" />
                        Conoce al desarrollador
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>

                      <div className="contact-socials">
                        <a
                          href={URL_WHATSAPP_2}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Contactar a Ronnie por WhatsApp"
                          title="WhatsApp"
                        >
                          <MessageCircle size={18} />
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              <p className="team-note">
                La participación y autoría pueden variar según cada proyecto.
              </p>
            </section>

            <section className="section contact-section" id="contacto">
              <div className="contact-panel">
                <div>
                  <span className="eyebrow">¿TIENES UNA IDEA?</span>
                  <h2>Hagamos algo que valga la pena.</h2>

                  <p>
                    Conversemos sobre páginas web, aplicaciones o soluciones
                    digitales para tu negocio. Solicita una cotización sin
                    compromiso.
                  </p>
                </div>

                <div className="contact-actions">
                  <a
                    className="button button-primary"
                    href={URL_WHATSAPP_1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    WhatsApp 1
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>

                  <a
                    className="button button-secondary"
                    href={URL_WHATSAPP_2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    WhatsApp 2
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>

                  <a className="button button-secondary" href={URL_CORREO}>
                    <Mail size={18} aria-hidden="true" />
                    Enviar correo
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="contact-details">
                <a
                  href={URL_WHATSAPP_1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  <span>
                    <strong>WhatsApp</strong>
                    <small>+51 964 618 454</small>
                  </span>
                </a>

                <a
                  href={URL_WHATSAPP_2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  <span>
                    <strong>WhatsApp</strong>
                    <small>+51 959 349 818</small>
                  </span>
                </a>

                <a href={URL_CORREO}>
                  <Mail size={20} aria-hidden="true" />
                  <span>
                    <strong>Correo electrónico</strong>
                    <small>{CORREO}</small>
                  </span>
                </a>
              </div>
            </section>
          </main>

          <footer className="site-footer">
            <a
              className="brand footer-brand"
              href="#inicio"
              onClick={goHome}
            >
              <img
                className="brand-logo-full"
                src={LOGO_COMPLETO}
                alt="World Technology System"
              />
            </a>

            <p>Ideas que se convierten en soluciones digitales.</p>

            <div className="footer-socials">
              <a
                href={URL_WHATSAPP_1}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de WTS"
                title="WhatsApp"
              >
                <MessageCircle size={19} />
              </a>

              <a
                href={URL_CORREO}
                aria-label="Correo electrónico de WTS"
                title="Correo electrónico"
              >
                <Mail size={19} />
              </a>
            </div>

            <span className="footer-copy">
              © {new Date().getFullYear()} WTS. Todos los derechos reservados.
            </span>
          </footer>
        </>
      )}
    </div>
  );
}