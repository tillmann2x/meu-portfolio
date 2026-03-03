import { motion } from "framer-motion";
import { User, MapPin, Mail, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <User className="w-6 h-6 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">
              Sobre Mim
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="card-gaming rounded-lg p-6 md:p-8 scanline">
            <p className="text-foreground/90 text-lg leading-relaxed mb-6 font-body">
              Estudante de Engenharia de Software (8º período) com experiência em ambiente corporativo 
              na <span className="text-primary font-semibold">Renault do Brasil</span> e atualmente na{" "}
              <span className="text-secondary font-semibold">Yusen Logistics</span>. 
              Atuação na área digital com foco em inovação, automação de processos e criação de soluções 
              com Inteligência Artificial. Perfil analítico, proativo e orientado à resolução de problemas, 
              com forte interesse em aplicar tecnologia para gerar valor ao negócio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Localização", value: "São José dos Pinhais – PR" },
                { icon: Mail, label: "E-mail", value: "kauantillmann53@gmail.com" },
                { icon: Phone, label: "Telefone", value: "(41) 9 9829-8597" },
                { icon: User, label: "Idade", value: "21 anos" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded bg-muted/50 border border-border/50">
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground font-mono uppercase">{label}</span>
                    <p className="text-sm text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
