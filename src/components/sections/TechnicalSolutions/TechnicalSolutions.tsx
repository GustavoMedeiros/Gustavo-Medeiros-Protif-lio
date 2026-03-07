import React from "react";
import { motion, type Variants } from "framer-motion";
import { Server, Shield, Database, Plug, Zap, Layers } from "lucide-react";
import { technicalSolutions } from "../../data/mock";
import styles from "./TechnicalSolutions.module.css";

const iconMap: Record<string, React.ElementType> = {
  Server,
  Shield,
  Database,
  Plug,
  Zap,
  Layers,
};

/* ================= ANIMATION VARIANTS ================= */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TechnicalSolutions: React.FC = () => {
  return (
    <section id="solutions" className={styles.section}>
      {/* Background blur */}
      <div className={styles.background}>
        <div className={styles.blur} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>Expertise</span>

          <h2 className={styles.title}>
            Soluções Técnicas para{" "}
            <span className={styles.gradientText}>
              Produtos Digitais Escaláveis
            </span>
          </h2>

          <p className={styles.subtitle}>
            Desenvolvimento de sistemas robustos com foco em performance,
            segurança e manutenibilidade.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technicalSolutions.map((solution) => {
            const IconComponent =
              iconMap[solution.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={solution.id}
                className={styles.card}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                }}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent size={22} />
                </div>

                <h3 className={styles.cardTitle}>
                  {solution.title}
                </h3>

                <p className={styles.cardDescription}>
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSolutions;