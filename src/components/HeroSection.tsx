import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { COMPANY_INFO, IMAGES } from "../constants";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950 z-10" />
        <img
          src={IMAGES.hero}
          alt="Interior da Barbearia Black com ambiente sofisticado e iluminação acolhedora"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block text-xs tracking-ultra text-gold mb-6 font-medium">The Art of Barbering</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tight leading-[0.9]">
            Barbearia<br />
            <span className="text-gradient italic">Black</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl mx-auto mb-12 leading-relaxed">
            {COMPANY_INFO.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-sm text-sm font-black tracking-ultra transition-all border border-white/10 flex items-center justify-center gap-3"
              aria-label="Visitar Instagram da Barbearia Black"
            >
              <Instagram className="h-5 w-5 opacity-60" />
              Instagram
            </a>
          </div>

          <div className="mt-10 inline-flex flex-col items-center gap-2 px-8 py-4 border border-gold/30 bg-gold/5 rounded-sm">
            <span className="text-[10px] tracking-ultra text-gold font-bold">HORÁRIO DE FUNCIONAMENTO</span>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-semibold text-white">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Ter – Sex: 17h às 20h
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Sábado: 08h às 20h
              </span>
            </div>
            <span className="text-xs text-zinc-500">Domingo e Segunda: Fechado</span>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500/30">
        <div className="w-px h-12 bg-gold" />
      </div>
    </section>
  );
}

