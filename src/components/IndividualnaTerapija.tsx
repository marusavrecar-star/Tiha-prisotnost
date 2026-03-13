import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface IndividualnaTerapijaProps {
  onBack: () => void;
}

export function IndividualnaTerapija({ onBack }: IndividualnaTerapijaProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-sm tracking-widest uppercase text-zen-500 hover:text-zen-900 transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" />
          NAZAJ NA DOMAČO STRAN
        </button>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zen-900 mb-12">
          Individualna terapija
        </h1>

        <div className="bg-white/50 p-8 rounded-2xl border border-zen-200 mb-12">
          <p className="text-zen-800 m-0 font-light leading-relaxed">
            Da se vključite v individualno terapijo, je prvi korak brezplačni uvodni klic, kjer preveriva vašo trenutno situacijo in ali je ta način dela za vas primeren. Ta klic je namenjen jasnosti in varnosti – za vas in za proces.
          </p>
        </div>

        <div className="space-y-8 text-lg text-zen-600 font-light leading-relaxed">
          <p>
            Terapija se odvije na eni od treh ravni. Te ravni so: odprava simptomov, krepitev ega in preseganje ega.
          </p>
          
          <p>
            Odprava simptomov je okarakterizirana s spremembo vedênja, misli in čustev. Cela vrsta terapij deluje na tej ravni.
          </p>

          <p>
            Krepitev ega vključuje obravnavanje egoičnega občutka pomanjkanja lastne vrednosti. Svojstven občutek pomanjkanja je navzoč v vseh egoičnih stanjih. Pri večini ljudi je ta občutek v tolikšni meri sublimiran, da doživljajo tisto vrsto trpljenja, ki ga je Freud opisal kot normalno in neizbežno. Ko je oseba prizadeta zaradi svojega občutka egoične nezadostnosti, se bo ta neuravnovešenost osredinila v čustveni in umski sferi, kar bo povzročilo spremembe v obnašanju. Tehnike sproščanja in vadba meditacije v okviru tako imenovanega »tretjega vala« terapije utegnejo sprožiti to raven zdravljenja, s tem ko pomirijo um in ustvarijo disciplino vadbe meditacije ter tako prekinejo nevrotske vzorce v mišljenju in občutkih.
          </p>

          <p>
            ¤ Ko je terapevt Pravi Prijatelj, s tem odpre možnost, da se klient osvobodi nevrotskih vzorcev. Ne počne drugega, kot da enostavno sedi ob klientu kot Pravi Prijatelj, s spokojnim umom in odprtim srcem. To dobrodejno vpliva na biokemijo klientovega živčevja.
          </p>

          <p>
            Terapija vpliva na to sfero tudi ob pomoči posebne veščine Pravega Prijatelja. Ta je namreč zmožen izvabiti diagnozo trenutnega in tudi zaželenega stanja. Ta diagnoza in projicirani izid se dotikata misli, čustev in obnašanja, ki so povezani s klientovo težavo. Umetnost Pravega Prijatelja – in pravzaprav vsake izjemne terapije – je sposobnost interveniranja v odločilnem prelomnem trenutku. Vpogled v egoično prizadetost utegne sprožiti čustveno zdravljenje in voditi k manj stresnemu, bolj izpolnjujočemu življenju.
          </p>

          <p>
            Preseganje ega se zgodi, ko zavest, poistovetena z osebo, globoko premišljuje o sebi. Zavest mora biti pripravljena odvrniti se od vsega, kar ima za resnično. Tedaj lahko odkrije razsvetljujočo zavest, sijočo iz ozadja sfere misli, čustev in obnašanja. Ko takšno zavestno premišljevanje zavesti o sami sebi, brez objekta, postane osredotočeno in usmerjeno v eno točko, se lahko identiteta jaza preusmeri od osebne k transcendentni. Tedaj se človek neha istovetiti z raznimi oblikami pojavnega in se poistoveti z brezčasno, prazno zavestjo, ki presega prostor in je izvor ter substanca vsega pojavnega sveta.
          </p>

          <p>
            To prebujenje v lastno pravo naravo razodene odgovore na bistvena vprašanja: Kdo sem? Kaj sem? Kje sem? Dokler človek ne doživi direktne izkušnje preseganja, transcendence, in pozna zgolj umske odgovore na ta vprašanja, četudi so odgovori pravilni, vse skupaj ostaja na mentalni ravni. Tak sistem prepričanj imitira resnično spoznanje, vendar ne prinaša vseh dobrobiti direktnega spoznanja, ki presega umsko razumevanje.
          </p>

          <div className="pt-12 mt-12 border-t border-zen-200 flex justify-center">
            <a 
              href="https://alexmarinkovic.youcanbook.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-zen-400 text-white text-sm tracking-widest uppercase hover:bg-zen-500 transition-colors w-full sm:w-auto text-center"
            >
              Brezplačni uvodni pogovor
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
