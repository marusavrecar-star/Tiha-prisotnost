import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface OmejitevOdgovornostiProps {
  onBack: () => void;
}

export default function OmejitevOdgovornosti({ onBack }: OmejitevOdgovornostiProps) {
  return (
    <div className="min-h-screen bg-zen-50 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-zen-500 hover:text-zen-900 transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          <span>Nazaj</span>
        </button>

        <h1 className="text-4xl md:text-5xl font-serif text-zen-900 mb-12">OMEJITEV ODGOVORNOSTI</h1>
        
        <div className="prose prose-zen max-w-none space-y-8 text-zen-800 font-light leading-relaxed">
          <p>
            Z prijavo in/ali plačilom in/ali udeležitvijo tečaja joge v skupini, individualne joge, online tečajev joge, joge v sklopu šole ali delavnice/dogodka se strinjate in soglašate s splošnimi pogoji navedeni na spletni strani www.tihaprisotnost.com in pogoji o omejitvi odgovornosti, ki so navedeni v nadaljevanju.
          </p>

          <p>
            Udeležba na vodenih vadbah joge in ostalih programih ALEXTHERAPIES je prostovoljna in poteka v celoti na lastno odgovornost udeleženca, ter Aleksandar Marinković s.p., ALEXTHERAPIES zanjo ne nosi nobene odgovornosti.
          </p>

          <section>
            <h2 className="text-2xl font-serif text-zen-900 mb-4">Omejitev odgovornosti za poškodbe pri izvajanju joge</h2>
            <p>
              Za vključitev in sodelovanje pri jogi v skupini, individualni jogi, online tečajih joge, jogi v sklopu šole ali delavnice/dogodka se odločate na lastno odgovornost in vadite na lastno odgovornost. Aleksandar Marinković s.p., ALEXTHERAPIES ne prevzema nobene odgovornosti za kakršnokoli škodo ali poškodbo, ki bi lahko nastala na osnovi izvedenih jogijskih vsebin in uporabe vsebin na spletni strani www.tihaprisotnost.com.
            </p>
          </section>

          <p>
            S sodelovanjem v jogi se strinjate, da je vaše sodelovanje prostovoljno in da se zavedate, da lahko izvajanje joge vključuje fizično dejavnost, ki lahko privede do poškodb. Aleksandar Marinković s.p., ALEXTHERAPIES ne prevzema nobene odgovornosti za morebitne poškodbe ali škodo, ki bi nastala zaradi neprimernega izvajanja vaj ali ignoriranja omejitev ali kot posledica sodelovanja v jogi. To vključuje, vendar ni omejeno na, poškodbe zaradi nepravilnega izvajanja vaj, neustreznih fizičnih sposobnosti, neupoštevanja navodil in pomanjkanja ustrezne opreme.
          </p>

          <p>
            Vsak udeleženec prevzema polno odgovornost za svoje sodelovanje in delovanje med jogijsko vadbo. 
          </p>

          <p>
            Pred začetkom sodelovanja v jogi morate preveriti svoje zdravstveno stanje in se posvetovati s svojim zdravnikom, če imate kakršne koli zdravstvene težave ali omejitve, ki bi lahko vplivale na vašo sposobnost varnega izvajanja vaj.
          </p>

          <p>
            Aleksandar Marinković s.p., ALEXTHERAPIES se zavezuje k zagotavljanju varnega in skrbnega okolja za izvajanje joge, vendar ne mora zagotoviti popolne zaščite pred morebitnimi poškodbami.
          </p>

          <p>
            Če niste prepričani, ali lahko izvajate vadbo joge, se prej posvetujte s svojim zdravnikom oz. specialistom. Če imate resne oz. kronične zdravstvene težave ali ste noseči, se pred vadbo joge posvetujte s svojim zdravnikom oz. specialistom.
          </p>

          <p>
            Če med izvajanjem joge začutite slabost, vrtoglavico ali kakršnokoli drugo neprijetno počutje, takoj prenehajte z vajami in se posvetujte s svojim zdravnikom oz. specialistom.
          </p>

          <p>
            Vsebine na spletni strani www.tihaprisotnost.com oz. vse usmeritve in nasveti, ki jih vsebujejo, so zgolj informativne narave in ne morejo nadomestiti zdravniškega ali specialističnega mnenja. 
          </p>

          <p>
            Z uporabo spletne strani www.tihaprisotnost.com uporabnik potrjuje, da je sprejel vse pogoje poslovanja Aleksandar Marinković s.p., ALEXTHERAPIES in se z njimi strinja.
          </p>

          <p>
            Za garderobo, izgubljene, odtujene ali pozabljene predmete Aleksandar Marinković s.p., ALEXTHERAPIES ne nosi nobene odgovornosti.
          </p>
        </div>
      </div>
    </div>
  );
}
