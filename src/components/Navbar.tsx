import { COMPANY_INFO } from "../constants";

export default function Navbar() {
  const whatsappUrl = COMPANY_INFO.whatsappUrl;

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#perfil", label: "Perfil" },
    { href: "#espaco", label: "Espaço" },
    { href: "#vendas", label: "Produtos" },
    { href: "#futuro", label: "Futuros" },
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
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end text-right">
            <span className="text-[9px] tracking-ultra text-zinc-500 font-bold">FUNCIONAMENTO</span>
            <span className="text-[11px] font-bold text-white">Ter-Sex: 17h-20h | Sáb: 08h-20h</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded-sm text-sm font-black tracking-ultra transition-all shadow-[0_4px_20px_-8px_rgba(197,160,89,0.5)] hover:shadow-[0_6px_30px_-8px_rgba(197,160,89,0.7)] hover:scale-105"
            aria-label="Agendar horário pelo WhatsApp"
          >
            AGENDAR
          </a>
        </div>
      </div>
    </nav>
  );
}

