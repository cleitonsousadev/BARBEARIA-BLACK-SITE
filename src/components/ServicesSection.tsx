import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { SERVICES } from "../constants";

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-32 bg-zinc-900 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle subtitle="Nossos Talentos">O que fazemos</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-950 p-8 border-l-2 border-gold flex flex-col justify-between h-full group hover:bg-zinc-900/50 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-serif text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <span className="font-serif text-4xl opacity-5 leading-none transition-opacity group-hover:opacity-10 text-gold italic">
                    {service.id}
                  </span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

