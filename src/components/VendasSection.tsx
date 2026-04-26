<<<<<<< HEAD
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { PRODUCTS } from "../constants";

export default function VendasSection() {
  return (
    <section id="vendas" className="py-32 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Estilo e Manutenção">Nossos Produtos</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-white/5 p-6 group hover:border-gold/30 transition-all"
            >
              <div className="aspect-square overflow-hidden mb-6">
                <img
                  src={prod.src}
                  alt={`${prod.name} - ${prod.desc}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-white font-serif text-xl mb-2">{prod.name}</h3>
              <p className="text-zinc-500 text-sm">{prod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

=======
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { PRODUCTS } from "../constants";

export default function VendasSection() {
  return (
    <section id="vendas" className="py-32 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Estilo e Manutenção">Nossos Produtos</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-white/5 p-6 group hover:border-gold/30 transition-all"
            >
              <div className="aspect-square overflow-hidden mb-6">
                <img
                  src={prod.src}
                  alt={`${prod.name} - ${prod.desc}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-white font-serif text-xl mb-2">{prod.name}</h3>
              <p className="text-zinc-500 text-sm">{prod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

>>>>>>> 183845009fdaf2ff3d559a3f276d4c0fa4d88c5d
