import { Scissors } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-sm overflow-hidden p-16 md:p-24 text-center border border-white/5 bg-zinc-900 group">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
              Onde a tradição<br />
              encontra a <span className="text-gold italic">modernidade.</span>
            </h2>
            <p className="text-zinc-500 tracking-ultra text-xs font-bold mb-12">
              RESERVE O SEU MOMENTO NO TOPO DO SITE
            </p>
          </div>
          <div className="absolute top-0 right-0 p-12 opacity-5 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000">
            <Scissors className="h-64 w-64 rotate-45 text-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}

