/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "./constants";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PerfilSection from "./components/PerfilSection";
import QuoteSection from "./components/QuoteSection";
import ServicesSection from "./components/ServicesSection";
import EspacoSection from "./components/EspacoSection";
import VendasSection from "./components/VendasSection";
import BeneficiosSection from "./components/BeneficiosSection";
import ClientesSection from "./components/ClientesSection";
import CTASection from "./components/CTASection";

export default function App() {
  const whatsappUrl = COMPANY_INFO.whatsappUrl;

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-black">
      <Navbar />
      <HeroSection />
      <PerfilSection />
      <QuoteSection />
      <ServicesSection />
      <EspacoSection />
      <VendasSection />
      <BeneficiosSection />
      <ClientesSection />
      <CTASection />

      {/* Contact & Footer */}
      <footer id="contato" className="bg-zinc-950 pt-32 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-[10px] tracking-ultra opacity-40 leading-none mb-1">Rio Manso</span>
              <span className="text-2xl font-serif font-bold tracking-tight text-white leading-none">
                BARBEARIA <span className="text-gold">BLACK</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-xs">
              Proporcionando estilo, autoestima e uma experiência única para cada cliente desde Julho de 2024.
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold transition-all">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-ultra text-zinc-500 font-bold mb-8">Location</h4>
            <div className="text-white text-sm leading-relaxed">
              <p>Barbearia Black</p>
              <p className="opacity-60">{COMPANY_INFO.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-xs font-black tracking-ultra mt-6 inline-block hover:underline"
              >
                Directions
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-ultra text-zinc-500 font-bold mb-8">Contacts</h4>
            <p className="text-white text-lg font-serif mb-2">{COMPANY_INFO.phone}</p>
            <p className="text-gold text-sm tracking-ultra font-bold mb-8">{COMPANY_INFO.instagram}</p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-ultra text-zinc-500 font-bold mb-8">Schedule</h4>
            <div className="text-white text-sm space-y-3 font-medium">
              <p className="flex justify-between border-b border-white/5 pb-2"><span>Seg - Sex:</span> <span className="opacity-60">16:30 às 19:30</span></p>
              <p className="flex justify-between border-b border-white/5 pb-2"><span>Sábado:</span> <span className="opacity-60">08:30 às 19:30</span></p>
              <p className="flex justify-between text-zinc-700 italic"><span>Dom e Seg:</span> <span>Fechado</span></p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-ultra text-zinc-700 font-bold">
            &copy; {new Date().getFullYear()} Barbearia Black. All Rights Reserved.
          </p>
          <div className="flex items-center gap-10 text-[10px] tracking-ultra text-zinc-700 font-bold">
            <span>Rio Manso - MG</span>
            <span>(31) 99659-9824</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

