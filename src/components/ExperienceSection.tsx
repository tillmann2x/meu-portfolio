import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Yusen Logistics",
    role: "Auxiliar de Operações",
    date: "Jan 2026 – Atual",
    items: [
      "Apoio às operações logísticas e administrativas",
      "Controle e organização de processos operacionais",
      "Interface entre áreas operacionais e administrativas",
      "Apoio no controle de documentos e registros internos",
    ],
  },
  {
    company: "Renault do Brasil",
    role: "Aprendiz – Administração Digital",
    date: "Nov 2024 – Dez 2025",
    items: [
      "Atuação na Área Digital com foco em inovação e automação",
      "Criação de agentes de IA e soluções automatizadas",
      "Suporte a incidentes internos na estrutura corporativa",
      "Mapeamento e análise de incidentes corporativos",
      "Proposição de melhorias contínuas nos fluxos internos",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">
            Experiência
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary animate-pulse-glow" />

                <div className="card-gaming rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-lg font-bold text-primary">
                        {exp.company}
                      </h3>
                      <p className="text-foreground font-semibold">{exp.role}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground border border-border px-3 py-1 rounded-sm self-start">
                      {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-primary mt-1">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
