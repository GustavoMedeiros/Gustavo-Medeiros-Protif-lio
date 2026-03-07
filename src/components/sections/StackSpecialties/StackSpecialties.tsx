import React, { useEffect, useRef, useState } from "react";
import { Code, Palette, Settings } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { stackData } from "../../data/mock";
import styles from "./StackSpecialties.module.css";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const StackSpecialties: React.FC = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: "Backend",
      icon: Settings,
      skills: stackData.backend,
      color: "#F97316",
    },
    {
      title: "Frontend",
      icon: Code,
      skills: stackData.frontend,
      color: "#8B5CF6",
    },
    {
      title: "Arquitetura",
      icon: Palette,
      skills: stackData.architecture,
      color: "#10B981",
    },
  ];

  const CountUp = ({ value, isActive }: { value: number; isActive: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isActive) return;

      let start = 0;
      const duration = 1200;
      const increment = value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;

        if (start >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [isActive, value]);

    return <>{count}</>;
  };

  return (
    <section ref={sectionRef} id="stack" className={styles.stack}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>Stack</span>

          <h2 className={styles.title}>
            Tecnologias & <span className={styles.gradient}>Especialidades</span>
          </h2>

          <p className={styles.subtitle}>
            Domínio em tecnologias modernas para construção de sistemas
            completos e escaláveis.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;

            return (
              <motion.div
                key={category.title}
                className={styles.card}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                style={
                  {
                    "--card-color": category.color,
                  } as React.CSSProperties
                }
              >
                <div className={styles.cardHeader}>
                  <motion.div
                    className={styles.iconWrapper}
                    style={{ backgroundColor: `${category.color}20` }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  >
                    <IconComponent
                      size={20}
                      style={{ color: category.color }}
                    />
                  </motion.div>

                  <h3 className={styles.cardTitle}>{category.title}</h3>
                </div>

                <div className={styles.skills}>
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className={styles.skill}>
                      <div className={styles.skillTop}>
                        <span className={styles.skillName}>{skill.name}</span>

                        <span className={styles.skillValue}>
                          <CountUp value={skill.level} isActive={isVisible} /> %
                        </span>
                      </div>

                      <div className={styles.progressBar}>
                        <div
                          className={`${styles.progressFill} ${
                            isVisible ? styles.animate : ""
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 120}ms`,
                            background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}99 100%)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StackSpecialties;