import React, { useEffect, useRef, useState } from "react";
import styles from "./Experience.module.css";
import { experienceData, educationData } from "../../data/mock";

const Experience: React.FC = () => {
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
      { threshold: 0.25 }
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
      id="experience"
      ref={sectionRef}
      className={`${styles.section} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Trajetória</span>

          <h2 className={styles.title}>
            Experiência{" "}
            <span className={styles.gradientText}>
              Profissional
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.verticalLine} />

          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.timelineItem} ${
                isVisible ? styles.animate : ""
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className={styles.dot} />

              <div className={styles.card} onMouseMove={handleMouseMove}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>
                      {item.role}
                    </h3>

                    <p className={styles.company}>
                      {item.company}
                    </p>
                  </div>

                  <span className={styles.period}>
                    {item.period}
                  </span>
                </div>

                <p className={styles.description}>
                  {item.description}
                </p>

                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Educação */}
        <div
          className={`${styles.education} ${
            isVisible ? styles.visible : ""
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <h3 className={styles.educationTitle}>
            Formação Acadêmica
          </h3>

          {educationData.map((edu) => (
            <div key={edu.id} className={styles.card}>
              <h4 className={styles.role}>{edu.degree}</h4>

              <p className={styles.company}>
                {edu.institution}
              </p>

              <span className={styles.period}>
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;