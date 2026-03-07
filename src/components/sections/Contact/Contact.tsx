import {
  useState,
  useEffect,
  useRef,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import Textarea from "../../ui/Textarea/Textarea";
import Label from "../../ui/Label/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/Select/Select";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../../data/mock";
import styles from "./Contact.module.css";

const Contact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    description: "",
    company: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* ANIMAÇÃO AO ENTRAR NA TELA */

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      projectType: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setErrorMessage("");

    if (formData.company) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Por favor, insira um email válido.");
      return;
    }

    setIsSubmitting(true);

    try {
      await Promise.race([
        emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            projectType: formData.projectType,
            description: formData.description,
          },
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        projectType: "",
        description: "",
        company: "",
      });
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Não foi possível enviar sua mensagem. Tente novamente."
      );
    }

    setIsSubmitting(false);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`${styles.section} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* LEFT */}

          <div className={styles.leftContent}>
            <div>
              <span className={styles.badge}>Contato</span>

              <h2 className={styles.title}>
                Vamos Construir Algo{" "}
                <span className={styles.gradientText}>
                  Sólido e Escalável
                </span>
              </h2>

              <p className={styles.subtitle}>
                Pronto para iniciar um novo projeto? Entre em contato
                e vamos discutir como posso ajudar a transformar sua
                ideia em um sistema robusto.
              </p>
            </div>

            <div className={styles.infoList}>
              <div className={styles.infoCard}>
                <div className={`${styles.iconBox} ${styles.orange}`}>
                  <Mail size={18} />
                </div>

                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <p className={styles.infoValue}>
                    {contactInfo.email}
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={`${styles.iconBox} ${styles.purple}`}>
                  <MapPin size={18} />
                </div>

                <div>
                  <p className={styles.infoLabel}>Localização</p>
                  <p className={styles.infoValue}>
                    {contactInfo.location}
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={`${styles.iconBox} ${styles.green}`}>
                  <Clock size={18} />
                </div>

                <div>
                  <p className={styles.infoLabel}>Status</p>
                  <p className={styles.infoValue}>
                    {contactInfo.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}

          <div className={styles.formWrapper}>
            {isSubmitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>
                  <Send size={28} />
                </div>

                <h3>Mensagem Enviada!</h3>

                <p>
                  Obrigado pelo contato. Retornarei em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className={styles.field}>
                  <Label htmlFor="name">Nome</Label>

                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <Label htmlFor="email">Email</Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <Label>Tipo de Projeto</Label>

                  <Select
                    value={formData.projectType}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className={styles.input}>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>

                    <SelectContent className={styles.selectContent}>
                      <SelectItem value="web-app">
                        Aplicação Web
                      </SelectItem>

                      <SelectItem value="api">
                        API / Backend
                      </SelectItem>

                      <SelectItem value="fullstack">
                        Sistema Full Stack
                      </SelectItem>

                      <SelectItem value="consulting">
                        Consultoria Técnica
                      </SelectItem>

                      <SelectItem value="other">
                        Outro
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className={styles.field}>
                  <Label htmlFor="description">
                    Descrição do Projeto
                  </Label>

                  <Textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Descreva brevemente seu projeto..."
                    required
                    className={styles.input}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner} />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send size={18} />
                    </>
                  )}
                </Button>

                {errorMessage && (
                  <p className={styles.errorMessage}>
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;