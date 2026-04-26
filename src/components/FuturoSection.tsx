import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { FUTURE_WORKS } from "../constants";

export default function FuturoSection() {
  return (
    <section id="futuro" className="py-32 bg-zinc-900 px-6 overflow-hidden relative">
      <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-30" />
      <div className="max-w-7xl mx-auto text-center">
        <SectionTitle subtitle="Novidades">Futuros Trabalhos</SectionTitle>
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-400 text-lg mb-12">
            Estamos sempre evoluindo para trazer o que há de melhor no mundo da barbearia. Em breve, expandiremos nossos serviços para incluir:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FUTURE_WORKS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 border border-white/5 bg-zinc-950/50 group hover:border-gold/20 transition-all"
              >
                <h4 className="text-gold font-serif text-xl italic mb-4">{item.title}</h4>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-zinc-500 text-sm font-black tracking-ultra uppercase">E muito mais por vir.</p>
        </div>
      </div>
    </section>
  );
}
