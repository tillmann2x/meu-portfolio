import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-border" />
            <Send className="w-6 h-6 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">
              Contato
            </h2>
            <div className="h-px w-12 bg-border" />
          </div>

          <p className="text-muted-foreground mb-10 font-body text-lg">
            Pronto para o próximo desafio. Vamos conversar?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: Mail, label: "E-mail", value: "kauantillmann53@gmail.com", href: "mailto:kauantillmann53@gmail.com" },
              { icon: Phone, label: "Telefone", value: "(41) 9 9829-8597", href: "tel:+5541998298597" },
              { icon: MapPin, label: "Localização", value: "São José dos Pinhais – PR", href: null },
              { icon: Linkedin, label: "LinkedIn", value: "kauan-tillmann", href: "https://www.linkedin.com/in/kauan-tillmann-a54163276" },
            ].map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.02 }}
                className="card-gaming rounded-lg p-4 flex items-center gap-3 text-left"
              >
                <Icon className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase">{label}</span>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="block text-sm text-foreground hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/tillmann2x"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/kauan-tillmann-a54163276"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center border-t border-border/50 pt-8">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Kauan Tillmann — Todos os direitos reservados
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
