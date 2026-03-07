import React, { useEffect, useRef, useState } from "react";
import {
  FileSearch,
  Server,
  Monitor,
  TestTube,
  Rocket,
} from "lucide-react";
import { developmentProcess } from "../../data/mock";
import styles from "./Process.module.css";

const iconMap: Record<string, any> = {
  FileSearch,
  Server,
  Monitor,
  TestTube,
  Rocket,
};

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Metodologia</span>

          <h2 className={styles.title}>
            Como Eu{" "}
            <span className={styles.gradientText}>
              Construo Sistemas
            </span>
          </h2>

          <p className={styles.subtitle}>
            Processo estruturado para garantir qualidade,
            prazos e resultados mensuráveis.
          </p>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.connectionLine} />

          <div className={styles.grid}>
            {developmentProcess.map((step, index) => {
              const IconComponent = iconMap[step.icon];

              if (!IconComponent) return null;

              return (
                <div
                  key={step.step}
                  className={`${styles.cardWrapper} ${
                    isVisible ? styles.animate : ""
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className={styles.card} onMouseMove={handleMouseMove}>
                    <div className={styles.stepNumber}>
                      0{step.step}
                    </div>

                    <div className={styles.cardContent}>
                      <div className={styles.iconBox}>
                        <IconComponent
                          size={24}
                          className={styles.icon}
                        />
                      </div>

                      <h3 className={styles.cardTitle}>
                        {step.title}
                      </h3>

                      <p className={styles.cardDescription}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < developmentProcess.length - 1 && (
                    <div className={styles.connectorDot}>
                      <div className={styles.innerDot} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;