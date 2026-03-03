import { motion } from "framer-motion";
import { Code, Database, Globe, Cloud, BarChart3, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Linguagens",
    skills: [
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 65 },
      { name: "C#", level: 60 },
    ],
  },
  {
    icon: Globe,
    title: "Web & Backend",
    skills: [
      { name: "React", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "FastAPI", level: 70 },
      { name: "REST APIs", level: 80 },
      { name: "WebSockets", level: 55 },
    ],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "SQL Server", level: 70 },
      { name: "SQLite", level: 65 },
      { name: "Modelagem", level: 75 },
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 50 },
      { name: "Cloud Computing", level: 55 },
      { name: "SAP (OData/RFC)", level: 60 },
    ],
  },
  {
    icon: BarChart3,
    title: "Business Tools",
    skills: [
      { name: "Power BI", level: 75 },
      { name: "Excel Avançado", level: 85 },
      { name: "SAP", level: 65 },
      { name: "Microsoft Office", level: 90 },
    ],
  },
  {
    icon: Wrench,
    title: "Competências",
    skills: [
      { name: "Automação", level: 80 },
      { name: "Resolução de Problemas", level: 85 },
      { name: "Comunicação", level: 80 },
      { name: "Inglês Avançado", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code className="w-6 h-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">
            Skills & Stats
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="card-gaming rounded-lg p-5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-5">
                <cat.icon className="w-5 h-5 text-primary group-hover:text-glow transition-all" />
                <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground/80 font-body">{skill.name}</span>
                      <span className="font-mono text-xs text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: catIdx * 0.1 + skillIdx * 0.08,
                          duration: 1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
