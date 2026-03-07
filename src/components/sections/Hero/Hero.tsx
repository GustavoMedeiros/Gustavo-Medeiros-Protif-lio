import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Button } from "../../ui/Button/Button";
import { developerInfo } from "../../data/mock";
import styles from "./Hero.module.css";

/* ================= ANIMAÇÕES ================= */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ================= STAT CARD ================= */

const StatCard: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = numericValue / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [numericValue]);

  return (
    <div
      className={styles["stat-card"]}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
      }}
    >
      <div className={styles["stat-card-inner"]}>
        <div className={styles["stat-value"]}>
          {count}
          {suffix}
        </div>
        <div className={styles["stat-label"]}>{label}</div>
      </div>
    </div>
  );
};

/* ================= HERO ================= */

const HeroSection: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Background */}
      <div className={styles["hero-background"]}>
        <div className={`${styles.blur} ${styles["blur-purple"]}`} />
        <div className={`${styles.blur} ${styles["blur-orange"]}`} />
      </div>

      <div className={styles["hero-container"]}>
        <div className={styles["hero-grid"]}>
          
          {/* LEFT */}
          <motion.div
            className={styles["hero-left"]}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className={styles["hero-badge"]}
              variants={item}
            >
              <span className={styles["status-dot"]} />
              <span>{developerInfo.title}</span>
            </motion.div>

            <motion.h1
              className={styles["hero-title"]}
              variants={item}
            >
              <span className={styles["gradient-text"]}>
                {developerInfo.headline}
              </span>
            </motion.h1>

            <motion.p
              className={styles["hero-subtitle"]}
              variants={item}
            >
              {developerInfo.subtitle}
            </motion.p>

            <motion.div
              className={styles["hero-buttons"]}
              variants={item}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("#projects")}
                  size="lg"
                >
                  Ver Projetos
                  <ArrowRight size={18} />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("#contact")}
                  size="lg"
                >
                  Entrar em Contato
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles["hero-social"]}
              variants={item}
            >
              <motion.a
                href={developerInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
              </motion.a>

              <motion.a
                href={developerInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </motion.a>

              <motion.a
                href={`mailto:${developerInfo.social.email}`}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className={styles["hero-right"]}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className={styles["stats-grid"]}>
              {developerInfo.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.15,
                    duration: 0.6,
                  }}
                >
                  <StatCard
                    value={stat.value}
                    label={stat.label}
                  />
                </motion.div>
              ))}
            </div>

            <div className={`${styles.decor} ${styles["decor-1"]}`} />
            <div className={`${styles.decor} ${styles["decor-2"]}`} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };