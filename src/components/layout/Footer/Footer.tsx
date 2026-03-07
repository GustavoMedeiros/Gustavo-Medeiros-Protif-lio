import React from "react";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { developerInfo } from "../../data/mock";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks: { name: string; href: string }[] = [
    { name: "Soluções", href: "#solutions" },
    { name: "Stack", href: "#stack" },
    { name: "Projetos", href: "#projects" },
    { name: "Processo", href: "#process" },
    { name: "Contato", href: "#contact" },
  ];

  const techStack: string[] = [
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Docker",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Brand */}
          <div className={styles.brand}>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className={styles.logo}
            >
              <div className={styles.logoIcon}>
                <Code2 size={20} />
              </div>

              <span className={styles.logoText}>
                GM<span className={styles.dot}>.</span>dev
              </span>
            </a>

            <p className={styles.description}>
              Desenvolvedor Full Stack especializado em arquitetura de sistemas
              escaláveis com Spring Boot e React.
            </p>

            <div className={styles.social}>
              <a
                href={developerInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
              </a>

              <a
                href={developerInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>

              <a href={`mailto:${developerInfo.social.email}`}>
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.title}>Links Rápidos</h4>
            <ul className={styles.links}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className={styles.title}>Tecnologias</h4>
            <div className={styles.techList}>
              {techStack.map((tech) => (
                <span key={tech} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p>
            © {currentYear} Gustavo Medeiros. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;