import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function MentorskiProgram({ onBack }: Props) {
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
          Skupinska srečanja Procesa utelešene prisotnosti
        </h1>

        <div className="prose prose-lg prose-stone max-w-none text-zen-600 font-light leading-relaxed">
          <div className="bg-white/50 p-8 rounded-2xl border border-zen-200 mb-12">
            <h2 className="text-xl font-serif text-zen-900 mt-0 mb-4 uppercase tracking-wider">Namen programa</h2>
            <p className="text-zen-800 m-0">
              Po zaključenem 6 tedenskem programu boste imeli dovolj znanja in izkušenj, kako sami predelati in priti v stik z potlačenimi občutki in jim dovoliti, da se izrazijo in tako občutite še več odprtosti, svobode in notranjega miru.
            </p>
          </div>

          <p className="text-xl mb-8">
            Poleg individualnih srečanj vodim tudi skupinska srečanja Procesa utelešene prisotnosti. Gre za manjšo skupino (običajno 8–10 ljudi), kjer vsak dela s svojo temo, a v skupnem polju. Skupinsko delo pogosto omogoči več globine, jasnosti in podpore, kot jih je mogoče doseči samostojno ali v klasičnem srečanju ena na ena.
          </p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Za koga so skupinska srečanja?</h2>
          <p>Skupinska srečanja so primerna za vas, če:</p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>se prepoznate v ujetosti v glavi, ponavljajočih se sprožilcih, občutku, da kljub delu na sebi stojite na mestu in vas nagovarja ideja, da svojo temo odprete v manjšem, varnem, intimnem krogu ljudi,</li>
            <li>ste pripravljeni iskreno deliti sebe (v mejah, ki so vam varne) in hkrati poslušati druge.</li>
          </ul>
          
          <blockquote className="border-l-2 border-zen-300 pl-6 italic my-8 text-zen-700">
            »Mnogi udeleženci povedo, da jim je prav izkušnja skupine pomagala uvideti, da niso "edini problem" – in da se ob zgodbah drugih še globlje prepoznajo sami, kar pogosto vodi v hitrejšo in globljo transformacijo.«
          </blockquote>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Kako skupinska srečanja potekajo?</h2>
          <p>Skupina je majhna (pribl. 8–10 oseb), da ostane prostor intimen. Srečanja običajno vključujejo:</p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Vodena meditacija za vzpostavitev odprtega prostora in prehod iz glave v širšo prisotnost.</li>
            <li>Izmenično individualno delo z mano pred skupino in krajše vaje / notranje raziskovanje za vse.</li>
            <li>Čas za tišino, integracijo in vprašanja.</li>
          </ul>
          <p>
            Vsak udeleženec dela s svojo temo, hkrati pa to, kar se zgodi z enim, pogosto zelo jasno zrcali tudi druge.
          </p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Termini in oblika</h2>
          <p className="mb-12">
            Skupinska srečanja potekajo v različnih oblikah (npr. enodnevni proces, serija srečanj v obdobju več tednov). Trenutno razpoložljive formate, datume in lokacije predstavim na uvodnem pogovoru.
          </p>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zen-300 text-center mt-16">
            <h2 className="text-3xl font-serif text-zen-900 mb-4">30-minutni brezplačni uvodni klic</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Da se vključite v skupinsko srečanje, je prvi korak brezplačni uvodni klic, kjer preveriva vašo trenutno situacijo in ali je ta način dela za vas primeren. Ta klic je namenjen jasnosti in varnosti – za vas in za proces.
            </p>
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
    </motion.div>
  );
}
