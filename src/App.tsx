
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Globe,
  Code2,
  Layers3,
  Smartphone,
  Settings,
  Database,
  Search,
  Menu,
  X,
} from "lucide-react";

import ProjectDetail from "./components/ProjectDetail";
import ServicioDetalle from "./components/ServicioDetalle";
import ComparadorServicios from "./components/ComparadorServicios";
import ProcesoTrabajo from "./components/ProcesoTrabajo";
import Testimonios from "./components/Testimonios";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";

import { projects } from "./data/projects";
import { servicios } from "./data/servicios";

import "./App.css";
import "./App.servicios.css";

const LOGO_COMPLETO = "/images/logo-wts-completo.png";

const CORREO = "hjqc@outlook.es";
const WHATSAPP_1 = "51964618454";
const WHATSAPP_2 = "51959349818";

const PORTAFOLIO_URL = "https://portafolio-hq.vercel.app/";

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

const iconosServicio = [
  Code2,
  Layers3,
  Search,
  Settings,
  Database,
  Settings,
  Smartphone,
];

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null
  );

  const [menuOpen, setMenuOpen] = useState(false);

  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? null;

  const selectedService =
    servicios.find((service) => service.id === selectedServiceId) ?? null;

  useEffect(() => {
    if (selectedProjectId || selectedServiceId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedProjectId, selectedServiceId]);

  const goToSection = (sectionId: string) => {
    setSelectedProjectId(null);
    setSelectedServiceId(null);
    setMenuOpen(false);

    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const goHome = () => {
    setSelectedProjectId(null);
    setSelectedServiceId(null);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToServices = () => goToSection("servicios");

  return (
    <div className="wts">
      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          aria-label="World Technology System - Inicio"
          onClick={(event) => {
            event.preventDefault();
            goHome();
          }}
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
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a
            href="#inicio"
            onClick={(event) => {
              event.preventDefault();
              goHome();
            }}
          >
            Inicio
          </a>

          <a
            href="#servicios"
            onClick={(event) => {
              event.preventDefault();
              goToSection("servicios");
            }}
          >
            Servicios
          </a>

          <a
            href="#comparador"
            onClick={(event) => {
              event.preventDefault();
              goToSection("comparador");
            }}
          >
            Comparar
          </a>

          <a
            href="#proyectos"
            onClick={(event) => {
              event.preventDefault();
              goToSection("proyectos");
            }}
          >
            Proyectos
          </a>

          <a
            href="#proceso"
            onClick={(event) => {
              event.preventDefault();
              goToSection("proceso");
            }}
          >
            Proceso
          </a>

          <a
            href="#testimonios"
            onClick={(event) => {
              event.preventDefault();
              goToSection("testimonios");
            }}
          >
            Opiniones
          </a>

          <a
            href="#equipo"
            onClick={(event) => {
              event.preventDefault();
              goToSection("equipo");
            }}
          >
            Equipo
          </a>

          <a
            href="#preguntas"
            onClick={(event) => {
              event.preventDefault();
              goToSection("preguntas");
            }}
          >
            FAQ
          </a>

          <a
            className="nav-contact"
            href="#contacto"
            onClick={(event) => {
              event.preventDefault();
              goToSection("contacto");
            }}
          >
            Contacto <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onBack={() => goToSection("proyectos")}
        />
      ) : selectedService ? (
        <ServicioDetalle
          servicio={selectedService}
          onBack={backToServices}
          whatsapp={WHATSAPP_1}
          correo={CORREO}
        />
      ) : (
        <>
          <main>
            {/* HERO */}
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
                  <a className="button button-primary" href="#servicios">
                    Conocer servicios{" "}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>

                  <a className="button button-secondary" href="#proyectos">
                    Explorar proyectos
                  </a>
                </div>

                <div className="hero-stats">
                  <div>
                    <strong>07</strong>
                    <span>Servicios</span>
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

              {/* IMAGEN PRINCIPAL DEL HERO */}
              <div className="hero-visual hero-visual-model" aria-hidden="true">
                <div className="hero-model-glow" />

                <img
                  src="/images/hero-modelo.png"
                  alt=""
                  className="hero-model-image"
                  fetchPriority="high"
                />
              </div>
            </section>

            {/* SERVICIOS */}
            <section className="section services-section" id="servicios">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">
                    SOLUCIONES PARA TU NEGOCIO
                  </span>
                  <h2>Servicios y soluciones digitales.</h2>
                </div>

                <p>
                  Conoce nuestras opciones, alcances y precios referenciales.
                  Cada proyecto se ajusta a tus necesidades.
                </p>
              </div>

              <div className="service-grid">
                {servicios.map((servicio, index) => {
                  const Icon = iconosServicio[index] ?? Code2;

                  return (
                    <button
                      className="service-card"
                      type="button"
                      key={servicio.id}
                      onClick={() => setSelectedServiceId(servicio.id)}
                      aria-label={`Ver detalles de ${servicio.nombre}`}
                    >
                      <div className="service-card-image">
                        <img
                          src={servicio.imagen}
                          alt={`Imagen de ${servicio.nombre}`}
                          loading="lazy"
                        />

                        <span className="service-card-image-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <span className="service-icon">
                        <Icon size={24} />
                      </span>

                      <span className="service-index">
                        SERVICIO {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{servicio.nombre}</h3>
                      <p>{servicio.resumen}</p>

                      <span className="service-price-label">Desde</span>

                      <strong className="service-price">
                        S/ {servicio.precio.toLocaleString("es-PE")}
                      </strong>

                      <span className="service-card-link">
                        Ver características <ArrowUpRight size={16} />
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="services-note">
                <strong>Precios referenciales.</strong> El costo final depende
                del alcance, las funcionalidades y los recursos externos que
                requiera cada proyecto.
              </div>

              {/* TÉRMINOS Y CONDICIONES GENERALES */}
              <div className="services-terms">
                <div className="services-terms-heading">
                  <span className="eyebrow">INFORMACIÓN IMPORTANTE</span>
                  <h3>Términos y condiciones generales</h3>
                  <p>
                    Estas condiciones se aplican a los servicios ofrecidos por
                    World Technology System, salvo que se acuerde algo distinto
                    por escrito.
                  </p>
                </div>

                <div className="services-terms-grid">
                  <article>
                    <span>01</span>
                    <div>
                      <strong>Forma de pago</strong>
                      <p>
                        Se solicita un adelanto del 50% para iniciar el
                        proyecto y el 50% restante contra entrega.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>02</span>
                    <div>
                      <strong>Modificaciones</strong>
                      <p>
                        Se consideran hasta 2 rondas de modificaciones dentro
                        del alcance previamente aprobado.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>03</span>
                    <div>
                      <strong>Contenido del proyecto</strong>
                      <p>
                        El cliente proporciona textos, imágenes, logotipos y
                        demás materiales, salvo acuerdo distinto.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>04</span>
                    <div>
                      <strong>Plazos de entrega</strong>
                      <p>
                        El tiempo de desarrollo se define según la complejidad
                        del proyecto y la entrega oportuna de los materiales.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>05</span>
                    <div>
                      <strong>Dominio y servicios externos</strong>
                      <p>
                        Dominio, hosting comercial, licencias y servicios de
                        terceros no están incluidos, salvo que se indiquen en
                        la cotización.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>06</span>
                    <div>
                      <strong>Alcance y adicionales</strong>
                      <p>
                        Las nuevas funcionalidades, integraciones o cambios
                        fuera del alcance acordado se cotizan por separado.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>07</span>
                    <div>
                      <strong>Mantenimiento</strong>
                      <p>
                        El mantenimiento es opcional. La tarifa inicial es de
                        S/ 75 mensuales e incluye únicamente revisión general,
                        correcciones menores, actualizaciones sencillas de
                        información y soporte técnico básico.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>08</span>
                    <div>
                      <strong>Entrega y publicación</strong>
                      <p>
                        La publicación inicial se realiza según las
                        características técnicas del proyecto. Los costos de
                        infraestructura y servicios externos se asumen por
                        separado.
                      </p>
                    </div>
                  </article>
                </div>

                <p className="services-terms-footer">
                  Cada cotización especificará el alcance, precio, entregables
                  y condiciones particulares del proyecto antes de comenzar.
                </p>
              </div>
            </section>

            {/* COMPARADOR */}
            <ComparadorServicios
              onSelectService={(id) => setSelectedServiceId(id)}
            />

            {/* PROYECTOS */}
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

            {/* PROCESO DE TRABAJO */}
            <ProcesoTrabajo />

            {/* TESTIMONIOS */}
            <Testimonios />

            {/* EQUIPO */}
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
                        href={PORTAFOLIO_URL}
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

            {/* PREGUNTAS FRECUENTES */}
            <PreguntasFrecuentes />

            {/* CONTACTO */}
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
                    <MessageCircle size={18} />
                    WhatsApp 1
                    <ArrowUpRight size={17} />
                  </a>

                  <a
                    className="button button-secondary"
                    href={URL_WHATSAPP_2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} />
                    WhatsApp 2
                    <ArrowUpRight size={17} />
                  </a>

                  <a className="button button-secondary" href={URL_CORREO}>
                    <Mail size={18} />
                    Enviar correo
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>

              <div className="contact-details">
                <a
                  href={URL_WHATSAPP_1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
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
                  <MessageCircle size={20} />
                  <span>
                    <strong>WhatsApp</strong>
                    <small>+51 959 349 818</small>
                  </span>
                </a>

                <a href={URL_CORREO}>
                  <Mail size={20} />
                  <span>
                    <strong>Correo electrónico</strong>
                    <small>{CORREO}</small>
                  </span>
                </a>
              </div>
            </section>
          </main>

          {/* FOOTER */}
          <footer className="site-footer">
            <a
              className="brand footer-brand"
              href="#inicio"
              onClick={(event) => {
                event.preventDefault();
                goHome();
              }}
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
