import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function Satsang({ onBack }: Props) {
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
          Srečaj se v brezčasni odprtosti (Satsang)
        </h1>

        <div className="prose prose-lg prose-stone max-w-none text-zen-600 font-light leading-relaxed">
          <p className="text-xl mb-8">
            Satsang prinaša spontano in neposredno nedualno učenje iz osebne izkušnje, brez vnaprejšnje priprave. Njegov namen je končanje psihološkega trpljenja, ki ga ustvarjata naš osebni ego in nenehno pričakovanje. Ko spoznamo, da ne obstajamo kot ločena oseba, temveč se življenje skozi nas odvija spontano in brez napora, vsi notranji konflikti odpadejo. Ostane le globok mir in prepoznanje tistega dela nas, ki je vedno tukaj in se nikoli ne spreminja.
          </p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Za koga je to srečanje?</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Si veliko delal/a na sebi, a čutiš, da še vedno ostaja notranja napetost ali nemir.</li>
            <li>Si utrujen/a od analiziranja in želiš bolj živ stik s seboj.</li>
            <li>Čutiš klic po resnici, ki ni koncept, ampak izkušnja.</li>
            <li>Želiš priti iz glave v telo — v več miru, prisotnosti in odprtosti.</li>
          </ul>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Kaj raziskujemo?</h2>
          <ul className="list-disc pl-6 space-y-2 mb-12">
            <li>Kje se še držiš kontrole.</li>
            <li>Kje se skriva strah, sram ali stara rana (tudi v telesu, ne le v zgodbi).</li>
            <li>Kako se nežno, a jasno srečati s tem, kar je.</li>
            <li>Kako se odpre prostor, kjer "ni nič narobe s tabo".</li>
          </ul>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zen-300 mt-16 text-center">
            <h2 className="text-3xl font-serif text-zen-900 mb-6">Prijava na srečanje</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Za prijavo pošljite svoje ime, priimek, telefonsko številko in po želji 1–2 stavka o tem, kaj je trenutno vaša glavna tema oziroma kje čutite, da ste obstali.
            </p>
            
            <div className="text-center py-6 border-t border-b border-zen-300 mb-8">
              <p className="text-sm text-zen-500">
                Rezervacija mesta je potrjena s plačilom akontacije (število mest je omejeno). Po prijavi dobite vse podrobnosti glede plačila in organizacije.
              </p>
            </div>

            <a 
              href="mailto:alex.marinc92@gmail.com" 
              className="inline-block px-8 py-4 bg-zen-400 text-white text-sm tracking-widest uppercase hover:bg-zen-500 transition-colors"
            >
              Pošlji prijavo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
