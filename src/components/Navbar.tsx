import { Calendar, Clock } from "lucide-react";
import { COMPANY_INFO } from "../constants";

export default function Navbar() {
  const whatsappUrl = COMPANY_INFO.whatsappUrl;

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#perfil", label: "Perfil" },
    { href: "#espaco", label: "Espaço" },
    { href: "#vendas", label: "Produtos" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#clientes", label: "Clientes" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-ultra opacity-40 leading-none mb-1">Rio Manso</span>
          <span className="text-xl font-serif font-bold tracking-tight text-white leading-none">
            BARBEARIA <span className="text-gold">BLACK</span>
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-semibold tracking-ultra text-zinc-500">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gold transition-colors"
              aria-label={`Ir para seção ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex flex-col items-end text-right">
            <span className="text-[10px] tracking-ultra text-gold font-bold flex items-center gap-1.5 mb-0.5 whitespace-nowrap">
              <Clock className="w-3 h-3 flex-shrink-0" />
              HORÁRIOS
            </span>
            <span className="text-xs font-bold text-white whitespace-nowrap">Seg–Sex: 16:30–19:30 | Sáb: 08:30–19:30</span>
            <span className="text-[10px] text-zinc-500 flex items-center gap-1 mt-0.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              Dom e Seg: Fechado
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-black px-8 py-4 rounded-sm text-base font-black tracking-ultra transition-all shadow-[0_4px_25px_-8px_rgba(197,160,89,0.6)] hover:shadow-[0_8px_35px_-8px_rgba(197,160,89,0.8)] hover:scale-105 border-2 border-gold/80 hover:border-gold flex items-center gap-2"
            aria-label="Agendar horário pelo WhatsApp"
          >
            <Calendar className="w-5 h-5" />
            AGENDAR
          </a>
        </div>
      </div>
    </nav>
  );
}

