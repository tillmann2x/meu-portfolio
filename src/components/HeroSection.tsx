import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Gamepad2, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Gamepad2 className="w-12 h-12 text-primary mx-auto animate-float" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-primary text-sm md:text-base tracking-widest uppercase mb-4"
        >
          {">"} Inicializando portfólio...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          <span className="gradient-text">Kauan</span>{" "}
          <span className="text-foreground">Tillmann</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="h-px w-12 bg-primary/50" />
          <p className="font-mono text-xs text-primary/80 tracking-wider">
            SOFTWARE ENGINEER • GAMER • INNOVATOR
          </p>
          <div className="h-px w-12 bg-primary/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
        >
          Estudante de Engenharia de Software com experiência em automação, 
          inovação digital e paixão por tecnologia e games.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#about"
            className="px-8 py-3 font-display text-sm tracking-wider bg-primary text-primary-foreground rounded-sm hover:shadow-[0_0_20px_hsl(170_100%_50%/0.4)] transition-all duration-300 uppercase font-semibold"
          >
            Explorar
          </a>
          <a
            href="#contact"
            className="px-8 py-3 font-display text-sm tracking-wider border border-primary/40 text-primary rounded-sm hover:bg-primary/10 transition-all duration-300 uppercase font-semibold"
          >
            Contato
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
