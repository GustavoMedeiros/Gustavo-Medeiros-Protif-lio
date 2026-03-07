import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Soluções", href: "#solutions" },
    { name: "Stack", href: "#stack" },
    { name: "Projetos", href: "#projects" },
    { name: "Processo", href: "#process" },
    { name: "Experiência", href: "#experience" },
    { name: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* Logo */}
          <motion.a
            href="#hero"
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
          >
            <motion.div
              className={styles.logoIcon}
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Code2 size={18} />
            </motion.div>

            <span className={styles.logoText}>
              GM<span>.</span>dev
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className={styles.links}>
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.ctaWrapper}>
            <motion.button
              className={styles.ctaButton}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(249,115,22,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToSection("#contact")}
            >
              Iniciar Projeto
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            className={styles.mobileToggle}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                className={styles.mobileCta}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => scrollToSection("#contact")}
              >
                Iniciar Projeto
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}