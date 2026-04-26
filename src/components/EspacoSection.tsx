import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { IMAGES, SPACE_FEATURES } from "../constants";

export default function EspacoSection() {
  return (
    <section id="espaco" className="py-32 bg-zinc-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <SectionTitle subtitle="Exclusividade">Espaço</SectionTitle>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Nosso espaço foi planejado para ser um refúgio masculino. Um ambiente que une o rústico ao moderno, proporcionando conforto absoluto enquanto você cuida do seu visual.
              Para tornar sua espera ainda mais agradável, <span className="text-white font-medium">servimos café quentinho e água gelada</span> para todos os nossos clientes. Cada detalhe foi pensado para oferecer uma experiência de luxo autêntica em Rio Manso.
            </p>
            <div className="space-y-4 mb-8">
              {SPACE_FEATURES.map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-[10px] font-bold tracking-ultra text-zinc-500 uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {item.text}
                </div>
              ))}
            </div>
            <p className="text-gold font-serif italic text-2xl">"O lugar onde sua melhor versão ganha forma."</p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative border border-white/10 p-2"
            >
              <img
                src={IMAGES.espaco1}
                alt="Área de atendimento da Barbearia Black com cadeiras de barbeiro de alto padrão"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative border border-white/10 p-2 md:translate-y-8"
            >
              <img
                src={IMAGES.espaco2}
                alt="Detalhes do interior da Barbearia Black com decoração rústica moderna"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

