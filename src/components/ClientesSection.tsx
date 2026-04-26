import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { CLIENTS } from "../constants";

export default function ClientesSection() {
  return (
    <section id="clientes" className="py-32 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionTitle subtitle="Nossa Satisfação">Nossos Clientes</SectionTitle>
          <p className="text-zinc-500 max-w-2xl mx-auto">A confiança de quem frequenta a Barbearia Black é o nosso maior selo de qualidade.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {CLIENTS.map((cliente, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden border border-white/5 bg-zinc-900"
            >
              <img
                src={cliente.src}
                alt={`Corte de cabelo estilo Black - ${cliente.name}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <div className="w-8 h-px bg-gold mb-2" />
                <p className="text-gold tracking-ultra text-[10px] font-bold">ESTILO BLACK</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
