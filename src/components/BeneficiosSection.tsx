import { motion } from "motion/react";
import { Calendar, Clock, Star, Shield, Smile } from "lucide-react";
import SectionTitle from "./SectionTitle";

const BENEFITS = [
  {
    icon: Calendar,
    title: "Agendamento Prático",
    desc: "Escolha o melhor dia e horário para você, sem filas de espera.",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    desc: "Seu horário é exclusivo. Chegue e seja atendido imediatamente.",
  },
  {
    icon: Star,
    title: "Atendimento Personalizado",
    desc: "Com o agendamento, o profissional se prepara para a sua necessidade.",
  },
  {
    icon: Shield,
    title: "Garantia de Vaga",
    desc: "Não corra o risco de chegar e não ser atendido por falta de tempo.",
  },
  {
    icon: Smile,
    title: "Experiência Completa",
    desc: "Aproveite cada momento com tranquilidade e conforto.",
  },
];

export default function BeneficiosSection() {
  return (
    <section id="beneficios" className="py-32 bg-zinc-900 px-6 overflow-hidden relative">
      <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-30" />
      <div className="max-w-7xl mx-auto text-center">
        <SectionTitle subtitle="Por que Agendar?">Benefícios do Agendamento</SectionTitle>
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
            Agende seu horário na Barbearia Black e aproveite uma experiência exclusiva, planejada especialmente para você. Veja os principais benefícios:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 border border-white/5 bg-zinc-950/50 group hover:border-gold/20 transition-all text-left"
              >
                <item.icon className="w-8 h-8 text-gold mb-4" />
                <h4 className="text-white font-serif text-xl italic mb-3 break-words">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed break-words">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

