import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function Joga({ onBack }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-[#B8C0BC]/40 pt-32 pb-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-zen-500 hover:text-zen-900 transition-colors mb-12 uppercase tracking-widest text-sm"
        >
          <ArrowLeft size={16} className="mr-2" />
          Nazaj
        </button>

        <h1 className="text-4xl md:text-6xl font-serif text-zen-900 mb-8">
          Joga iz Kashmirske tradicije in nedualnost
        </h1>

        <div className="prose prose-lg prose-stone max-w-none text-zen-600 font-light leading-relaxed">
          <p className="text-xl mb-8">
            Joga, ki jo podajam, ni neka navadna joga, ki bi vam pomagala zgolj pri prožnosti ali boljšem počutju. Namenjena je temu, da vas usmeri k raziskovanju vašega resničnega telesa, ki je onkraj vaših misli in ideje o tem, kdo ste in za koga se imate.
          </p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">O pristopu</h2>
          <p className="mb-6">
            Joga iz kašmirske tradicije ima zelo subtilen in občutljiv pristop. To jogo je v Evropo pripeljal Jean Klein, sam pa sem se je učil neposredno pri Billyju Doylu. Pri tej jogi se ne usmerjamo v cilje ali dosežke, temveč v slavljenje življenja iz trenutka v trenutek.
          </p>

          <div className="my-12">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-zen-200 bg-zen-100 aspect-[3/4] max-w-md mx-auto">
              <img 
                src="https://i.postimg.cc/FFy7zts3/IMG-1015.jpg" 
                alt="Joga z Billy Doylom v Londonu" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="mt-3 text-sm text-zen-500 italic text-center">Joga z Billy Doylom v Londonu</p>
          </div>

          <p className="mb-6">
            Naše celotno telo je pogojeno telo – pogojeni so naši organi in čutila. Na splošno je telo zakrčeno, saj nosi zapise naših staršev, življenjskih izkušenj in travmatičnih dogodkov. Skozi določene asane, dihalne vaje in poglobljeno poslušanje dovolimo, da se telo osvobodi kontrakcij, ki jih nosi.
          </p>

          <blockquote className="border-l-2 border-zen-300 pl-6 italic my-8 text-zen-700">
            "Zelo pomembno je, da telo doživimo kot živo občutenje in mu damo čas, da se samo razkrije kot vibracija, subtilna energija in odprt prostor."
          </blockquote>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Nedualnost</h2>
          <p className="mb-6">
            Ko začnemo izpraševati svoja prepričanja, se ideja o tem, kdo smo, začne razkrajati. Kar ostane, je tisto, kar je bilo vedno tukaj. Nedualno prepoznanje vodi h koncu psihološkega trpljenja, s tem pa se tudi iskanje zaključi.
          </p>

          <p className="mb-12">
            Takrat začnemo živeti življenje iz te globalne odprtosti, ne več iz glave oziroma mentalnih konstruktov, na katere smo bili vajeni.
          </p>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zen-300 mt-16">
            <h2 className="text-3xl font-serif text-zen-900 mb-6 text-center">Program: Joga + Nedualnost</h2>
            <p className="text-center mb-8">Vabljeni vsi, ki se želite poglobiti v raziskovanje sebe. Joga je primerna tako za začetnike kot za napredne praktikante.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-medium text-zen-900 mb-2">Vključuje:</h3>
                <ul className="list-disc pl-5 space-y-1 text-zen-600">
                  <li>10 srečanj joge (v živo)</li>
                  <li>2 srečanji nedualnosti (online)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-zen-900 mb-2">Lokacija:</h3>
                <p className="text-zen-600">
                  Koprska ulica 52, 1000 Ljubljana (Joga)<br />
                  Online (Nedualnost)
                </p>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-zen-300">
              <p className="text-xl text-zen-900 mb-2">Cena celotnega programa: 220 EUR</p>
              <p className="text-zen-500 mb-8">Cena samo joge (10 srečanj): 175 EUR</p>
              <a 
                href="mailto:alex.marinc92@gmail.com" 
                className="inline-block px-8 py-4 bg-zen-400 text-white text-sm tracking-widest uppercase hover:bg-zen-500 transition-colors"
              >
                Prijavi se preko e-pošte
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
