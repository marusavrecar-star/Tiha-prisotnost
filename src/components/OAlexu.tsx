import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface OAlexuProps {
  onBack: () => void;
}

export function OAlexu({ onBack }: OAlexuProps) {
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
          Alex Marinković
        </h1>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-sm border border-zen-200 aspect-[3/2] bg-zen-100">
          <img 
            src="/IMG_1519.JPG" 
            alt="Alex Marinković" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image is not yet uploaded
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/alex/1200/800";
            }}
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-8 text-lg text-zen-600 font-light leading-relaxed">
          <p>
            Sem Aleksandar Marinković (Alex). Sem terapevt, sopotnik na poti samospoznanja in učitelj joge. Ljudem pomagam na poti iz ujetosti v glavi in starih ranah v notranji mir in živo prisotnost.
          </p>

          <p>
            V mladosti me je najprej oblikoval šport, zelo zgodaj pa me je začela klicati tudi duhovnost. Pri dvaindvajsetih letih sem bil iniciiran v transcendentalno meditacijo in se v tistem obdobju močno navdušil nad prakso. Kmalu zatem me je knjiga Avtobiografija jogija popeljala h krija jogi – v katero sem bil uveden pri swamiju Mangalanandi in sem jo več let intenzivno prakticiral, tudi po več ur na dan.
          </p>

          <p>
            Kljub vsem tehnikam in disciplini pa sem v sebi še vedno nosil vprašanje: zakaj kot človeška bitja še vedno trpimo?
          </p>

          <p>
            Prelomni trenutek na moji poti je bilo srečanje z učenjem nedualnosti (advaita vedanta). Ob poslušanju učenja Gangaji sem prvič doživel močno izkušnjo popolne enosti in radosti. Ta izkušnja je za kratek čas razblinila občutek ločenosti in mi jasno pokazala, da je mogoče živeti iz prostora, ki je globlji od osebne zgodbe.
          </p>

          <p>
            Podobne globoke uvide sem kasneje doživljal tudi ob srečanjih z Moojijem, Rupertom Spiro in Rogerjem Castillom, s katerim sem razvil tesen odnos učitelj–učenec in globoko prijateljstvo. Skupaj sva potovala po Evropi, kar mi je omogočilo dolgotrajen, neposreden stik z živim učenjem nedualne resnice.
          </p>

          <p>
            Kljub tem močnim in osvobajajočim izkušnjam sem se vedno znova vračal v staro psihološko trpljenje, v identifikacijo z mislimi in notranjimi ranami. Prav iskrenost do sebe – prepoznanje, da "duhovni uvid" sam po sebi ne zadošča – me je pripeljala do globljega raziskovanja, kako so travme in stari vzorci dejansko zapisani v telesu, organih in živčnem sistemu.
          </p>

          <p>
            Leta 2018 in 2019 sem svoje razumevanje dopolnil v Leela School of Awakening pod vodstvom Elija Jaxona Beara, Jareda Franksa in Lise Schumacher. Šolanje, ki temelji na samospoznanju in končanju psihološkega trpljenja, mi je dalo jasen terapevtski okvir za delo z ljudmi. Tam sem poglobil znanje klinične hipnoze, raziskovanja ego-fiksacij (eneagram) in razumevanja osebnega transa trpljenja. Leta 2020 sem zaključil šolanje in pridobil certifikat Advanced Clinical Hypnotherapist.
          </p>

          <p>
            Vzporedno z vsem tem sem se vedno znova vračal k telesu skozi jogo. Joga zame ni le fizična vadba, ampak način, kako skozi dih, pozornost in gibanje omogočiti telesu, da postane most med duhovnim uvidom in vsakdanjim življenjem. To razumevanje danes vključujem tako v individualno delo kot v skupinske vadbe.
          </p>

          <p>
            Danes svoje izkušnje nedualnega uvida, travm, psihološkega trpljenja, dela s telesom in joge združujem v procesu, ki ga imenujem Proces utelešene prisotnosti. Ne ukvarjam se več s "tehnikami" v klasičnem smislu, temveč ljudi neposredno vodim:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>iz glave v telo,</li>
            <li>v stik z jedrnimi ranami in potlačenimi čustvi,</li>
            <li>v postopno sproščanje telesnega spomina,</li>
            <li>in v živo izkušnjo, da niso njihova osebna zgodba, temveč prisotnost, ki jo lahko čutijo tukaj in zdaj.</li>
          </ul>

          <p>
            Moje delo je namenjeno iskrenim iskalcem resnice, ki so utrujeni od površinskih rešitev in duhovnih obvozov. Ljudem, ki slutijo, da z njimi v resnici ni "nič narobe", a so še vedno ujeti v glavi, starih ranah in občutku ločenosti.
          </p>

          <p>
            Ne učim, kako postati "popoln". Bolj te želim podpreti, da se vrneš domov v to, kar v resnici si – v tiho notranjo svobodo, mir in povezanost z življenjem, ne glede na zunanje okoliščine.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
