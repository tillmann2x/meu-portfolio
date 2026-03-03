import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    title: "Bacharel em Engenharia de Software",
    institution: "IEL – Faculdade das Indústrias",
    period: "2022 – Em Andamento (8º Período)",
    details: "Banco de Dados, Machine Learning, Desenvolvimento Mobile, IoT & Cloud, Cybersecurity, Desenvolvimento de Jogos",
  },
  {
    title: "Técnico em Mecânica",
    institution: "SENAI – Afonso Pena",
    period: "2019 – Concluído",
    details: "Desenho Técnico, Resistência dos Materiais, Usinagem",
  },
  {
    title: "Ensino Médio",
    institution: "SESI – Afonso Pena",
    period: "2019 – Concluído",
    details: null,
  },
  {
    title: "Curso de Inglês",
    institution: "KWIFY",
    period: "2025 – Concluído",
    details: null,
  },
];

const certificates = [
  "Jornada de Inclusão: Panorama e Tratativas para com a Pessoa com Deficiência",
  "Certificado de Carreira Industrial",
  "Entender a Ciência de Dados para Machine Learning",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Education */}
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">
            Formação
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="card-gaming rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-display text-sm font-bold text-primary mb-1">
                {edu.title}
              </h3>
              <p className="text-foreground font-semibold text-sm mb-1">{edu.institution}</p>
              <p className="font-mono text-xs text-muted-foreground mb-3">{edu.period}</p>
              {edu.details && (
                <p className="text-xs text-foreground/70 leading-relaxed border-t border-border/50 pt-3">
                  {edu.details}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-6 h-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">
            Certificados
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-gaming rounded-lg p-4 text-center border border-primary/10 hover:border-primary/30 transition-all"
            >
              <Award className="w-8 h-8 text-primary/60 mx-auto mb-3" />
              <p className="text-sm text-foreground/80 font-body">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
