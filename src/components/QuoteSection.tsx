import { motion } from "motion/react";

export default function QuoteSection() {
  return (
    <section className="py-24 bg-zinc-950 px-6 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-serif italic text-3xl md:text-5xl leading-tight mb-6">
            "É no detalhe que o respeito se impõe."
          </p>
          <p className="text-zinc-500 font-black tracking-ultra text-sm">— LEANDRO MORAIS - CEO</p>
        </motion.div>
      </div>
    </section>
  );
}

