import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function Sola({ onBack }: Props) {
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
          Šola: Proces utelešene prisotnosti
        </h1>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-sm border border-zen-200 aspect-[16/9] bg-zen-100">
          <img 
            src="https://i.postimg.cc/9Xdr03F4/IMG-1014.jpg" 
            alt="Šola: Proces utelešene prisotnosti" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-lg prose-stone max-w-none text-zen-600 font-light leading-relaxed">
          <p className="text-xl mb-8">
            Ta terapevtski pristop je nastal iz spoznanja, da zgolj razumevanje in duhovni koncepti niso dovolj. V resnici nas je svet ločil od našega nenapornega bivanja in smo prešli v budni trans trpljenja, ki zdaj verjame, da je ločen, in tako igra igro dvojnosti.
          </p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Kaj je trans?</h2>
          <p className="mb-6">
            Ko govorim o transu, govorim o osebnem transu, ki mu rečemo <em>Jaz in moj svet</em>. To je osebna projekcija, ki je nastala kot produkt pogojevanj v tem svetu. Dokler bivamo v tem osebnem transu, doživljamo trpljenje, zavist, obsojamo druge in sebe.
          </p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Kako izstopiti iz njega?</h2>
          <p className="mb-6">
            Da bi se ta trans zaključil, se je potrebno preizprašati. Ko se začnemo preizpraševati, takrat na naraven način začnemo prehajati iz osebnega transa trpljenja v neosebni trans bivanja. V našem telesu so shranjene travme, osebne projekcije in prepričanja. Ko te energijske strukture popustijo, začnemo imeti globalni občutek.
          </p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Za koga je ta šola in ta pristop?</h2>
          <p className="mb-6">
            Ta šola je namenjena prav vsem. Ne glede na to, ali se šele prvič srečujete s terapevtskim delom ali ste napredni praktikant. Ta pristop je za vsakogar, ki si želi poglobiti svoje znanje in tako zaključiti velik del trpljenja ter občutiti več miru in osebne svobode.
          </p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Učni program</h2>
          <ul className="list-disc pl-6 space-y-2 mb-12">
            <li>Napredna in poglobljena hipnotična raziskava, ki klienta popelje v trans.</li>
            <li>Magična vprašanja, ki vodijo klienta v nezavedno.</li>
            <li>Prepoznavanje jezika podzavesti ter zavesti.</li>
            <li>Zaključki, prepričanja in kako jih prepoznati.</li>
            <li>Poglobljeno izpraševanje, ki izzove hipnotični trans in skrite težave.</li>
            <li>Iskanje rešitve za klienta v transu.</li>
            <li>Pripovedovanje zgodb z globokim sporočilom.</li>
            <li>Razreševanje travme in čustvene bolečine.</li>
          </ul>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zen-300 mt-16">
            <h2 className="text-3xl font-serif text-zen-900 mb-6 text-center">Prihajajoči termini</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-medium text-zen-900 mb-2">MAJ 2026 (od 9h do 12h)</h3>
                <ul className="space-y-1 text-zen-600">
                  <li>9. 5. 2026</li>
                  <li>16. 5. 2026</li>
                  <li>23. 5. 2026</li>
                  <li>30. 5. 2026</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-zen-900 mb-2">JUNIJ 2026 (od 9h do 12h)</h3>
                <ul className="space-y-1 text-zen-600">
                  <li>6. 6. 2026</li>
                  <li>13. 6. 2026</li>
                  <li>20. 6. 2026</li>
                  <li>27. 6. 2026</li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-zen-300">
              <p className="text-xl text-zen-900 mb-6">Cena šolanja je 1650 eur.</p>
              <a 
                href="https://alexmarinkovic.youcanbook.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-zen-400 text-white text-sm tracking-widest uppercase hover:bg-zen-500 transition-colors"
              >
                Prijavi se na uvodni pogovor
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
