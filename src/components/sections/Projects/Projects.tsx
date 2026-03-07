import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/mock";
import styles from "./Projects.module.css";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string;

  context: string;
  problem: string;
  goals: string;
  architecture: string;
  technicalDetails: string;
  challenges: string;
  result: string;
  impact: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Portfólio</span>

          <h2 className={styles.title}>
            Projetos em <span className={styles.gradient}>Destaque</span>
          </h2>

          <p className={styles.subtitle}>
            Sistemas reais em produção, construídos com foco em arquitetura
            sólida e resultados mensuráveis.
          </p>
        </div>

        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;

/* ================= PROJECT ITEM ================= */

const ProjectItem = ({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.project} 
      ${index % 2 === 1 ? styles.reverse : ""} 
      ${isVisible ? styles.visible : ""}`}
    >
      {/* IMAGE */}

      <div className={styles.imageWrapper}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imageLink}
        >
          <div className={styles.imageContainer}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />

            <div className={styles.imageOverlay} />
          </div>
        </a>

        <div className={styles.imageGlow} />
      </div>

      {/* CONTENT */}

      <div className={styles.content}>
        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.stackBadge}>
              {tech}
            </span>
          ))}
        </div>

        <h3 className={styles.projectTitle}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.titleLink}
          >
            {project.title}
          </a>
        </h3>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.details}>
          <div>
            <span className={styles.problemLabel}>Problema:</span>
            <p>{project.problem}</p>
          </div>

          <div>
            <span className={styles.archLabel}>Arquitetura:</span>
            <p>{project.architecture}</p>
          </div>

          <div>
            <span className={styles.resultLabel}>Resultado:</span>
            <p>{project.result}</p>
          </div>
        </div>

        <button onClick={onOpen} className={styles.button}>
          Ver Detalhes Técnicos
          <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
};

/* ================= MODAL ================= */

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`${styles.modalOverlay} ${
        isClosing ? styles.fadeOut : ""
      }`}
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className={`${styles.modal} ${
          isClosing ? styles.slideDown : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          ✕
        </button>

        <div className={styles.caseHeader}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>

        <div className={styles.stackSection}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.stackBadge}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.caseSection}>
          <h3>Contexto</h3>
          <p>{project.context}</p>
        </div>

        <div className={styles.caseSection}>
          <h3>Problema</h3>
          <p>{project.problem}</p>
        </div>

        <div className={styles.caseSection}>
          <h3>Objetivos</h3>
          <p>{project.goals}</p>
        </div>

        <div className={styles.caseSection}>
          <h3>Arquitetura</h3>
          <p>{project.architecture}</p>
        </div>

        <div className={styles.caseSection}>
          <h3>Decisões Técnicas</h3>
          <p>{project.technicalDetails}</p>
        </div>

        <div className={styles.caseSection}>
          <h3>Desafios</h3>
          <p>{project.challenges}</p>
        </div>

        <div className={styles.caseSection}>
          <h3>Resultados</h3>
          <p>{project.result}</p>
        </div>

        <div className={styles.caseSection}>
          <h3>Impacto</h3>
          <p>{project.impact}</p>
        </div>
      </div>
    </div>
  );
};