
import { useEffect, useState } from "react";
import type { Project } from "../data/projects";
import "./ProjectDetail.css";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({
  project,
  onBack,
}: ProjectDetailProps) {
  const [videoError, setVideoError] = useState(false);
  const isVertical = project.videoOrientation === "vertical";
  const showVideo = Boolean(project.video) && !videoError;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setVideoError(false);
  }, [project.id]);

  return (
    <main className="project-detail-page">
      <div className="detail-container">
        <button
          className="detail-back-button"
          onClick={onBack}
          type="button"
        >
          <span aria-hidden="true">←</span>
          Volver a los proyectos
        </button>

        <header className="detail-heading">
          <span className="section-eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </header>

        <div className="detail-layout">
          <section className="detail-media-column">
            {showVideo ? (
              <div
                className={`detail-video-frame ${
                  isVertical
                    ? "detail-video-vertical"
                    : "detail-video-horizontal"
                }`}
              >
                <video
                  key={project.video}
                  className="detail-video"
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onError={() => setVideoError(true)}
                  aria-label={`Demostración de ${project.title}`}
                />
              </div>
            ) : (
              <div className="detail-image-frame">
                <img
                  className="detail-image"
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                />
              </div>
            )}

            <p className="detail-media-caption">
              {showVideo
                ? "Demostración del proyecto"
                : "Vista previa del proyecto"}
            </p>
          </section>

          <aside className="detail-info-card">
            <span className="section-eyebrow">Información</span>
            <h2>Sobre el proyecto</h2>
            <p className="detail-description">
              {project.description}
            </p>

            <div className="detail-tech-section">
              <h3>Tecnologías y herramientas</h3>

              <div className="detail-tech-list">
                {project.technologies.map((technology) => (
                  <span className="detail-tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {project.demoUrl ? (
              <a
                className="detail-demo-button"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver demostración
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <p className="detail-demo-note">
                La demostración en línea no está disponible por el momento.
              </p>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
