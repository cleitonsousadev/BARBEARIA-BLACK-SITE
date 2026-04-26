import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { COMPANY_INFO, IMAGES } from "../constants";

export default function PerfilSection() {
  return (
    <section id="perfil" className="py-32 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-l border-t border-white/10">
            <img
              src={IMAGES?.perfil || "/imagens/perfil-da-empresa.png"}
              alt="Barbearia Black - conceito e identidade visual"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 bg-zinc-900 border border-gold/30 p-10 hidden lg:block">
            <p className="text-gold tracking-ultra text-xs mb-2">
              Established
            </p>
            <p className="text-white font-serif text-4xl font-bold tracking-tight">
              2024
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <SectionTitle subtitle="A Nossa História">
            Perfil da Empresa
          </SectionTitle>

          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify">
            <p>{COMPANY_INFO?.profile}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-10 border-t border-white/5 pt-12">
            <div>
              <h4 className="text-white font-serif text-xl italic mb-3">
                Qualidade
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Produtos selecionados de alta linha para o seu tratamento.
              </p>
            </div>

            <div>
              <h4 className="text-white font-serif text-xl italic mb-3">
                Conforto
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Ambiente climatizado e acolhedor à altura do seu estilo.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

