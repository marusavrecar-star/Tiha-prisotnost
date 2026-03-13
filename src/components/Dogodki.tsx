import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface DogodkiProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

type Category = 'vsi' | 'sola' | 'joga' | 'nedualnost' | 'program';

interface AppEvent {
  title: string;
  date: string;
  location: string;
  link: string;
  category: Category;
  isPast?: boolean;
  details?: React.ReactNode;
}

const events: AppEvent[] = [
  {
    title: "INFORMATIVNI DAN: ✨ Kam seže vaša pot osebne transformacije? ✨",
    date: "3. april 2026 ob 18:00",
    location: "Online (Zoom)",
    link: "https://tihaprisotnost.si/sola-hipnoterapije/",
    category: "sola",
    details: (
      <div className="space-y-6 text-zen-600 font-light leading-relaxed">
        <p className="text-lg font-medium text-zen-900">
          Ste se kdaj vprašali, zakaj nekatere spremembe trajajo le kratek čas, druge pa vam popolnoma spremenijo življenje? V naši šoli raziskujemo globino terapevtskega procesa, ki ne ostane le pri površju.
        </p>
        
        <div className="space-y-4">
          <p>Terapija se namreč odvija na treh ključnih ravneh:</p>
          <div className="space-y-4 pl-4 border-l-2 border-zen-200">
            <p><strong>1️⃣ Odprava simptomov:</strong> Sprememba vedenja, misli in čustev.</p>
            <p><strong>2️⃣ Krepitev ega:</strong> Naslavljanje občutka pomanjkanja lastne vrednosti. Tukaj terapevt nastopi kot Pravi Prijatelj – s spokojnim umom in odprtim srcem pomaga prekiniti nevrotske vzorce in umiriti živčni sistem.</p>
            <p><strong>3️⃣ Preseganje ega:</strong> Trenutek, ko se zavest preusmeri od osebne k transcendentni. To je prebujenje v lastno pravo naravo, ki ponudi odgovore na vprašanja: Kdo sem? Kaj sem? Kje sem?</p>
          </div>
        </div>

        <p>
          Brez direktne izkušnje preseganja ostajajo odgovori le na mentalni ravni. Mi pa vas vabimo, da stopite korak dlje od zgolj umskega razumevanja.
        </p>

        <h4 className="text-xl font-serif text-zen-900 mt-8">🎓 Vabilo v našo šolo in na informativni dan</h4>
        <p>
          Vas zanima, kako postati takšen terapevt ali kako poglobiti lastno pot spoznanja? Vabimo vas, da se nam pridružite in spoznate naš program.
        </p>

        <div className="bg-zen-100 p-6 rounded-xl border border-zen-200 my-8">
          <p><strong>📅 KDAJ:</strong> 3. april 2026 ob 18. uri</p>
          <p><strong>📍 KJE:</strong> Preko aplikacije Zoom (iz udobja vašega doma)</p>
        </div>

        <p>
          Na informativnem dnevu bomo podrobneje predstavili naš pristop, vlogo “Pravega Prijatelja” v terapevtskem procesu in pot do direktnega spoznanja, ki presega prostor in čas.
        </p>

        <div className="bg-[#B8C0BC]/40 text-zen-900 p-8 rounded-xl mt-8 border border-[#B8C0BC]/60">
          <h4 className="font-serif text-xl mb-4 uppercase tracking-wider">Kako se prijavite?</h4>
          <p className="mb-4">Pišite mi na mail in vas dodam na listo:</p>
          <p className="font-medium mb-6">
            📧 <a href="mailto:alex.marinc92@gmail.com" className="underline">alex.marinc92@gmail.com</a>
          </p>
          <p className="text-sm">
            Več o sami šoli in programu si lahko preberete <button onClick={() => (window as any).onNavigate('sola')} className="underline font-medium hover:text-zen-600 transition-colors">TUKAJ</button>.
          </p>
        </div>

        <p className="text-center italic text-zen-500 pt-4">
          Ne zamudite priložnosti, da vaše razumevanje terapije in človeške narave dobi povsem novo dimenzijo. Se vidimo! 🌟
        </p>
      </div>
    )
  },
  {
    title: "6-tedenski mentorski program: Proces utelešene prisotnosti",
    date: "Marec - April 2026",
    location: "Online (Zoom)",
    link: "#",
    category: "program",
    details: (
      <div className="space-y-6 text-zen-600 font-light leading-relaxed">
        <div className="bg-zen-100 p-8 rounded-2xl border border-zen-200 mb-8">
          <h2 className="text-xl font-serif text-zen-900 mt-0 mb-4 uppercase tracking-wider">O programu</h2>
          <p className="text-zen-800 m-0">
            2-mesečni online program (6 srečanj): Proces utelešene prisotnosti. Delali bomo v manjši, intimni skupini (8–10 oseb), kjer se bomo posvetili globokemu, direktnemu in prizemljenemu delu.
          </p>
        </div>

        <p>
          Če ste že dolgo na poti (terapije, knjige, delavnice, duhovnost), pa imate občutek, da ste vseeno obstali ... da veliko razumete, a se v telesu nič zares ne sprosti ... in da vas isti sprožilci (odnosi, družina, služba) vedno znova vržejo nazaj — potem verjetno ne potrebujete še ene razlage.
        </p>

        <p>
          Kar potrebujete, je premik iz glave v telo. In iz notranjega boja v več miru. Ta program je ustvarjen točno za to: za iskrenost (v mejah, ki so za vas varne) in pot v resnico — brez olepševanja, brez "še ene tehnike", brez lovljenja posebnih stanj in izogibanja ("spiritual bypass").
        </p>

        <h3 className="text-2xl font-serif text-zen-900 border-b border-zen-200 pb-2 mt-8">Kako bo potekal naš program?</h3>
        <p>
          Vsako srečanje traja 2 uri in ima jasen okvir. Vsebine pa ne bom vnaprej “pripravljal”, ker bomo delali s tem, kar je v resnici živo v skupini — od trenutka do trenutka.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-zen-200 shadow-sm">
            <h4 className="font-medium text-zen-900 mb-2">1) Uvodni spust v prisotnost</h4>
            <p className="text-sm">Začeli bomo z vodeno meditacijo ali meditacijo v tišini, da se upočasnimo in preidemo iz glave v prisotnost.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zen-200 shadow-sm">
            <h4 className="font-medium text-zen-900 mb-2">2) Usmeritev in individualno delo v živo</h4>
            <p className="text-sm mb-4">Po kratkem uvodnem govoru bomo šli v konkretno izpraševanje in proces z udeleženci. Vsak od vas bo imel možnost direktne izkušnje individualnega dela z mano (pred skupino). Skupaj s kratkimi vajami za vse bomo pogledali:</p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>kaj je vaša trenutna težava in kaj vas zavira, da se odprete neznanemu,</li>
              <li>kje vas še držijo prepričanja (kulturna, družinska, okoljska) in zakaj se vam ponavljajo isti vzorci, čeprav "veste, od kod prihajajo",</li>
              <li>kako iz ujetosti v premlevanje in analizo preiti v neposredno izkušnjo in mir, ki ga čutite v telesu.</li>
            </ul>
            <p className="text-sm mt-4 italic">Skupinsko delo je pogosto zelo močno, ker smo vsi v istem polju prisotnosti in z isto namero: iz glave v občutenje, stik in mir.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zen-200 shadow-sm">
            <h4 className="font-medium text-zen-900 mb-2">3) Tišina, integracija in vprašanja</h4>
            <p className="text-sm">Vmes bomo imeli trenutke tišine, da se proces usede in integrira, ter prostor za vaša vprašanja.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zen-200 shadow-sm">
            <h4 className="font-medium text-zen-900 mb-2">4) Zaključek</h4>
            <p className="text-sm">Srečanje bomo zaključili z meditacijo.</p>
          </div>
        </div>

        <h3 className="text-2xl font-serif text-zen-900 border-b border-zen-200 pb-2 mt-12">Urnik srečanj</h3>
        <p className="text-sm italic">Srečanja bodo potekala online (prek Zooma), vsak torek od 18.00 do 20.00.</p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            <span className="font-medium text-zen-900">1. srečanje: 3. marec (začetek)</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            <span className="font-medium text-zen-900">2. srečanje: 10. marec</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            <span className="font-medium text-zen-900">3. srečanje: 17. marec</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            <span className="font-medium text-zen-900">4. srečanje: 24. marec</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            <span className="font-medium text-zen-900">5. srečanje: 31. marec</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            <span className="font-medium text-zen-900">6. srečanje: 7. april (zadnje srečanje)</span>
          </li>
        </ul>
        <p className="text-xs text-zen-400 mt-4">Zoom povezavo boste dobili vedno na dan posameznega srečanja.</p>

        <div className="mt-12">
          <button 
            onClick={() => (window as any).onNavigate('mentorski-program')}
            className="px-8 py-4 bg-zen-400 text-white text-sm tracking-widest uppercase hover:bg-zen-500 transition-colors"
          >
            Več o programu in prijava
          </button>
        </div>
      </div>
    )
  },
  {
    title: "SREČAJ SE V BREZČASNI ODPRTOSTI",
    date: "14. 3. in 15. 3.",
    location: "Studio Aho, Koprska ulica 52, Ljubljana",
    link: "#",
    category: "nedualnost",
    details: (
      <div className="space-y-6 text-zen-600 font-light leading-relaxed">
        <p className="text-xl font-serif text-zen-900 italic">Dvodnevni satsang (14.3. in 15.3.)</p>
        <p className="font-medium text-zen-800">Živeti v odprtosti!</p>
        <p>
          Mi nismo to, kar mislimo, da smo. To, kar mislimo, da smo, je pogosto kontrakcija uma — skupek prepričanj o ločenosti. Misel ima začetek in konec. Misel je čas in prostor.
        </p>
        <p>
          Ko govorim o odprtosti, govorim o brezčasni odprtosti, ki nima časa in prostora. Ta odprtost je mimo vsake naše misli. Je vedno tukaj. Ne pojavlja se in ne odhaja.
        </p>
        <p>
          Da bi to spoznali in raziskali zase, je potrebno poslušati globoko. Ko poslušamo brez vmešavanja, začnejo določene kontrakcije na naraven način popuščati — in vse bolj se znajdemo v brezčasni odprtosti. Takrat šele začnemo spoznavati naše resnično telo: telo, ki ni pogojeno in ne nosi psihološke teže osebnosti. Samo po sebi je radostno in ne išče potrditve iz sveta, v katerem živimo.
        </p>
        <p>
          Spoznanje se začne razkrivati: svet in “drugi” niso bili nikoli ločeni od te brezčasne odprtosti.
        </p>
        <p>
          Vajeni smo, da izkušnjo zgrabimo zase in jo prefiltriramo skozi pet čutil. Poglej en primer: doživiš sončni zahod in se pojavi misel: “Kako je lepo, daj, da slikam.” V tistem trenutku pogosto nismo več v odprtosti — izkušnjo smo že pospravili v čas in prostor in tako “izgubili” avtentičnost sedanjega trenutka.
        </p>
        <p>
          Ko živimo v odprtosti, se lepota pojavi na naraven način, brez da bi si jo prisvojili in iz nje naredili “trenutek”. Pojavi se toplina v srcu, mir prevzame vsa čutila, in celoten živčni sistem se začne umirjati.
        </p>
        <p>
          In takrat postane jasno: mir, ki preplavi telo, ni prišel iz nekega posebnega stanja. Ta mir je odsev — refleksija, ki prihaja iz tvoje brezcanse odprtosti.
        </p>

        <div className="bg-zen-100 p-6 rounded-xl border border-zen-200">
          <h4 className="font-serif text-xl text-zen-900 mb-4">Ta dvodnevni satsang je namenjen tebi, če:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>si veliko delal/a na sebi, a čutiš, da še vedno ostaja notranja napetost ali nemir,</li>
            <li>si utrujen/a od analiziranja in želiš bolj živ stik s seboj,</li>
            <li>čutiš klic po resnici, ki ni koncept, ampak izkušnja,</li>
            <li>želiš priti iz glave v telo — v več miru, prisotnosti in odprtosti.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl text-zen-900 mb-4">V prostoru satsanga bomo skozi tišino, vprašanja, direkten dialog in utelešeno prisotnost gledali:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>kje se še držiš kontrole,</li>
            <li>kje se skriva strah, sram ali stara rana (tudi v telesu, ne le v zgodbi),</li>
            <li>kako se nežno, a jasno srečati s tem, kar je,</li>
            <li>in kako se odpre prostor, kjer “ni nič narobe s tabo”.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-zen-200">
          <div>
            <h4 className="font-bold text-zen-900 uppercase tracking-widest text-sm mb-4">TERMINI</h4>
            <p>14. 3. in 15. 3.</p>
            <p className="mt-2 font-medium">Urnik (oba dneva):</p>
            <ul className="mt-1 space-y-1">
              <li>10:00–11:30 Satsang</li>
              <li>11:30–12:30 Pavza</li>
              <li>12:30–14:00 Satsang</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-zen-900 uppercase tracking-widest text-sm mb-4">LOKACIJA IN CENA</h4>
            <p><span className="font-medium">Cena:</span> 120 €</p>
            <p className="mt-2"><span className="font-medium">Naslov:</span> Studio Aho, Koprska ulica 52, 1000 Ljubljana Vič</p>
          </div>
        </div>

        <div className="bg-[#B8C0BC]/40 text-zen-900 p-8 rounded-xl mt-8 border border-[#B8C0BC]/60">
          <h4 className="font-serif text-2xl mb-4">PRIJAVA</h4>
          <p className="mb-6 opacity-90">Če želiš sodelovati, mi napiši na: <a href="mailto:alex.marinc92@gmail.com" className="underline hover:text-zen-600 transition-colors">alex.marinc92@gmail.com</a> in dodaj:</p>
          <ul className="list-disc pl-5 space-y-2 opacity-90 mb-6">
            <li>ime in priimek</li>
            <li>telefonsko številko</li>
            <li>(po želji) 1–2 stavka: kaj je trenutno tvoja glavna tema / kje čutiš, da si obstal/a</li>
          </ul>
          <p className="text-sm opacity-80 italic">
            Cena dogodka za oba dni je 120 €. Rezervacija mesta je potrjena z akontacijo 20 € (število mest je omejeno). Po prijavi dobiš vse podrobnosti glede plačila in organizacije.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "ŠOLA: Proces utelešene prisotnosti - Napredna pogovorna hipnoterapija",
    date: "maj - jun 2026",
    location: "Ljubljana",
    link: "#",
    category: "sola",
    details: (
      <div className="space-y-6 text-zen-600 font-light leading-relaxed">
        <p>
          Ta terapevtski pristop je dokaj mlad. Mislim, da se je začel razvijati pri dr. Miltonu H. Ericksonu. Njegovi študenti so opazovali njegovo delo in vsak izmed njih je nato razvil svoj pristop. Tako je nastal tudi ta pristop, ki sem ga jaz nekako preuredil po svoje. Na začetku svoje duhovne poti nisem bil preveč zainteresiran za terapevtsko delo.
        </p>
        <p>
          Zanimalo me je samo duhovno prebujenje. Toda kmalu sem opazil, da sem postal ujet v koncept duhovnosti. To pomeni, da sem eno prepričanje zgolj zamenjal z novim. Nisem preizprašal vsega, temveč sem samo projiciral vse, kar so govorili določeni učitelji, v svojo namišljeno prihodnost. Leta 2014 sem se prvič srečal z učiteljem Elia Jaxon Bear in opazil, kako spretno uporablja vprašanja pri svojih klientih, da jih preusmeri iz egoične strukture v nevtralno zavest, ki je naša resnična narava.
        </p>
        <p>
          Nekako sem videl, da je mogoče delati popolnoma z vsakim. Ni bilo pomembno, ali je nekdo duhovno naravnan, ali ima kakšne travme ali druge oblike psiholoških težav. Rezultat je bil pri vseh nekako enak: vsak je prišel do radosti ali miru. Njegov pristop me je tako močno pritegnil, da sem se leta 2017 začel šolati pri njem. Šolal sem se dobra štiri leta in tako razvil svoj pristop k terapiji.
        </p>

        <h3 className="text-2xl font-serif text-zen-900 border-b border-zen-200 pb-2 mt-8">Kaj je trans?</h3>
        <p>
          Ko govorim o transu, govorim o osebnem transu, ki mu rečemo Jaz in moj svet. To je osebna projekcija, ki je nastala kot produkt pogojevanj v tem svetu (mama, oče, vrtec, šola, stari starši, okolica). Sprva smo prišli na ta svet popolnoma nepopisanih desk in nismo imeli nikakršne predstave o sebi ali svetu. Bivali smo popolnoma nenaporno iz naše resnične narave. Potem, nekje v tretjem letu starosti, se je začel kazati ta osebni trans: Jaz sem Alex, ti si Miha itd. V resnici nas je svet ločil od tega našega nenapornega bivanja in smo prešli v budni trans trpljenja, ki zdaj verjame, da je ločen, in tako igra igro dvojnosti.
        </p>
        <p>
          Dokler bivamo v tem osebnem transu, takrat doživljamo trpljenje. Doživljamo zavist, obsojamo druge, obsojamo sebe, se počutimo manjvredne itd. To je ta osebni trans trpljenja, v katerega smo vpeti in ne vidimo stvari točno takšne, kot so v resnici, ampak vedno projiciramo naš osebni trans nase in na vse druge okoli nas.
        </p>

        <h3 className="text-2xl font-serif text-zen-900 border-b border-zen-200 pb-2 mt-8">Kako izstopiti iz njega?</h3>
        <p>
          Da bi se ta trans zaključil, se je potrebno preizprašati. Potrebno je preizprašati vse, da ne ostane popolnoma nič, za kar bi se lahko oprijeli. Ko se začnemo preizpraševati, takrat na naraven način začnemo prehajati iz osebnega transa trpljenja v neosebni trans bivanja. Takrat priplavajo vse te osebne energijske strukture ven in zapustijo naše telo.
        </p>
        <p>
          Veliko ljudi še vedno misli, da je glavni vzrok naša psiha. Toda premalo ljudi se zaveda, da je psiha tudi izraz našega telesa. V našem telesu so shranjene travme, osebne projekcije, prepričanja itd. V resnici psihe od telesa ne moremo ločiti, niti telesa od zavesti. Ker smo zgradili našo osebno identiteto okoli vsega v življenju in bivamo kot oseba v naših glavah, takrat bivamo iz zakrčenosti. Ko te energijske strukture popustijo, takrat začnemo imeti globalni občutek. To pomeni, da naše celotno telo misli, sliši in občuti. Ne najdemo več lokalizacije.
        </p>

        <h3 className="text-2xl font-serif text-zen-900 border-b border-zen-200 pb-2 mt-8">Kaj ima preizpraševanje opraviti s tem?</h3>
        <p>
          Na svoji 22-letni poti sem poskusil marsikaj. Še vedno se izobražujem in obiskujem različne mojstre, ki imajo svoje pristope. Tisto, kar mi je všeč, vzamem, ostalo ovržem. Toda vedno znova mi izkušnja potrjuje, da ni nič bolj efektivnega kot preizpraševanje in občutenje!
        </p>

        <h3 className="text-2xl font-serif text-zen-900 border-b border-zen-200 pb-2 mt-8">Zakaj je preizpraševanje tako učinkovito?</h3>
        <p>
          Preizpraševanje je kot britvica, ki prereže energijsko strukturo, ki nas drži v tem mentalnem sklopu. Temu jaz pravim odpor. Ko bivamo v naših glavah, se takrat zavestno ali nezavedno upiramo in ne moremo priti do resničnega občutenja. Tukaj najprej delamo z mentalom, ga zelo dobro preizprašamo, da vsi ti zaščitniki, ki se upirajo, popustijo in tako preidemo iz osebnega transa bivanja v neosebni del bivanja, ki ima popolne vire in rešitve za naše namišljene težave.
        </p>
        <p>
          Ko sem v svojih začetkih poskušal razrešiti težavo za klienta, sem se znašel v velikem “zosu” kot terapevt. Poskusil sem vse tiste tehnike in opazil, da nič ne deluje. Zakaj? To se zgodi zato, ker mislimo, da moramo rešiti klientovo težavo. V resnici pa v tem pristopu klient reši svojo težavo popolnoma sam. Zato je zelo pomembno, da sprva vi zaključite svojo projekcijo in vstopite v samo terapijo popolnoma prazni.
        </p>

        <h3 className="text-2xl font-serif text-zen-900 border-b border-zen-200 pb-2 mt-8">Ali bom moral vse svoje tehnike zavreči, ko se bom naučil tega pristopa?</h3>
        <p>
          Ne, popolnoma ne! Ta pristop vam bo dal globlje razumevanje o tem, kako pristopiti na bolj enostaven in edinstven način k razreševanju osebnih težav s sabo in drugimi. Ko se ta osebni trans razblini in klient pride iz osebnega bivanja v neosebni trans bivanja, takrat lahko uporabite tudi vaše stare tehnike. Takrat boste ugotovili, da imajo zdaj tudi vaše tehnike večji vpliv kot kadarkoli prej. Tudi jaz še vedno kdaj uporabim NLP, če je to potrebno, ali kakšno drugo tehniko. Toda v resnici vse manj, ker sem ugotovil, da naša resnična narava opravi celotno delo za nas same ali za našega klienta, v kolikor se mi ne vmešavamo.
        </p>

        <h3 className="text-2xl font-serif text-zen-900 border-b border-zen-200 pb-2 mt-8">Za koga je ta šola in ta pristop?</h3>
        <p>
          Ta šola je namenjena prav vsem. Ne glede na to, ali se šele prvič srečujete s terapevtskim delom ali ste napredni praktikant. Ta pristop je za vsakogar, ki si želi poglobiti svoje znanje in tako zaključiti velik del trpljenja ter občutiti več miru in osebne svobode. Ali ste psihoterapevt ali delate s travmami ali izvajate neko drugo vrsto terapije, sploh ni pomembno. Ta pristop vam bo dopolnil in spremenil tudi pogled na to, kako pristopiti k sami terapiji ali razreševanju vaših osebnih težav.
        </p>

        <div className="bg-zen-100 p-6 rounded-xl border border-zen-200 my-8">
          <h4 className="font-serif text-xl text-zen-900 mb-4">Kakšne so prednosti šole?</h4>
          <p>
            Ko ste enkrat del te šole, imate vedno brezplačen dostop do starih in novih materialov. Edino v primeru, če se pojavi neko novo znanje in ga boste želeli osvojiti, bo potrebno doplačilo.
          </p>
          <p className="mt-4 font-medium">Tukaj niste sami!</p>
          <p>
            Imamo zaprto Facebook skupino, kjer se boste lahko srečevali s skupino ljudi, ki so z menoj že tri leta in imajo dovolj znanja, da vam pomagajo na vaši poti.
          </p>
        </div>

        <h3 className="text-2xl font-serif text-zen-900 border-b border-zen-200 pb-2 mt-8">Kaj je dolgoročni cilj te šole?</h3>
        <p>
          Dolgoročni cilj te šole je, da začnemo živeti bolj svobodno in radostno in da lahko osvetlimo tudi drugemu enake možnosti. V resnici je naša rojstna pravica, da smo srečni in izpolnjeni v svojem globalnem občutenju življenja takšnega kot je!
        </p>

        <div className="bg-white p-8 rounded-xl border border-zen-300 my-12 shadow-sm">
          <h3 className="text-2xl font-serif text-zen-900 mb-6 text-center">UČNI PROGRAM NPH</h3>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5 text-sm">
            <li>Napredna in poglobljena hipnotična raziskava, ki klienta popelje v trans.</li>
            <li>Kdaj uporabiti učne zgodbe v samem procesu.</li>
            <li>Uporaba metafor v terapiji in učenje, kdaj jih uporabiti.</li>
            <li>Magična vprašanja, ki vodijo klienta v nezavedno.</li>
            <li>Zmedenost, ki popelje klienta v trans.</li>
            <li>Prepoznavanje jezika podzavesti ter zavesti.</li>
            <li>Zaključki, prepričanja in kako jih prepoznati.</li>
            <li>Poglobljeno izpraševanje, ki izzove hipnotični trans in skrite težave</li>
            <li>Izpraševanje na način, da izzove rešitev za klienta, da bi se težava resnično zaključila</li>
            <li>Osredotočanje ter absorbcija in delo s transom</li>
            <li>Vodenje klienta v trans na podlagi raziskave, ki smo jo predhodno naredili</li>
            <li>Iskanje rešitve za klienta v transu</li>
            <li>Pripovedovanje zgodb z globokim sporočilom, ki na podzavestni ravni razreši težavo za klienta</li>
            <li>Miltonovo pripovedovanje zgodb, ki klienta neposredno že vleče v trans</li>
            <li>Pomoč pri fizičnih ter kroničnih bolečinah</li>
            <li>Razreševanje travme in čustvene bolečine</li>
            <li>Delo z otroci in vodenje k razrešitvi</li>
            <li>Izkrivljenost časa in delo s časom</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-6">
          <div>
            <h4 className="font-bold text-zen-900 uppercase tracking-widest text-sm mb-4">URNIK</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium">MAJ (od 9h do 12h)</p>
                <ul className="list-none pl-0">
                  <li>9.5.2026</li>
                  <li>16.5.2026</li>
                  <li>23.5.2026</li>
                  <li>30.5.2026</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">JUNIJ (od 9h do 12h)</p>
                <ul className="list-none pl-0">
                  <li>6.6.2026</li>
                  <li>13.6.2026</li>
                  <li>20.6.2026</li>
                  <li>27.6.2026</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-zen-900 uppercase tracking-widest text-sm mb-4">CENA IN VPIS</h4>
            <p className="text-lg font-medium text-zen-900 mb-2">Cena šolanja: 1650 EUR</p>
            <p className="text-sm mb-4">
              Vpisnino v višini ¼ zneska (412,5 EUR) je potrebno plačati takoj. Preostali znesek pa najkasneje do začetka šole oz. po dogovoru.
            </p>
            <p className="text-sm italic">
              Vsebine šole so namenjene izključno učencem, ki so program plačali. Posredovanje ali predvajanje posnetka tretjim osebam je prepovedano!
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Joga iz Kashmirske tradicije in nedualnost",
    date: "Januar - Marec 2026",
    location: "Ljubljana (v živo) & Online",
    link: "#",
    category: "joga",
    details: (
      <div className="space-y-6 text-zen-600 font-light leading-relaxed">
        <h3 className="text-2xl font-serif text-zen-900 border-b border-zen-200 pb-2">Joga iz Kashmirske tradicije</h3>
        <p>
          Ko smo prišli na ta svet, smo prišli kot nepopisan papir. Kasneje so nam dali ime, nato so nas začeli usmerjati, kako se izražati ter kako delovati v tem življenju kot oseba. Na kratko povedano: svet nas je porinil iz naše resnične narave v mentalni konstrukt osebnosti, ki nosi zelo veliko prepričanj in drugih mentalnih konceptov o tem, kdo smo in za koga se imamo.
        </p>
        <p>
          Tako smo prešli iz nesebnega bivanja v osebni trans trpljenja. Ta osebni trans trpljenja je misel o tem, kdo smo in za koga se imamo. S tem se je začela prava hipnoza življenja. Ker smo začeli delovati iz tega osebnega delovalca, sedaj zanj iščemo namišljeno odrešitev in se tako vrtimo v začaranem krogu te igre, ki ji pravimo LEELA.
        </p>
        <p>
          Ker uma od telesa ne moremo ločiti, je zelo pomembno, da izprašamo tudi svoje telo. V našem telesu je shranjeno celotno naše življenje. Velika večina od nas se ne zaveda, da živi v zelo zakrčenem telesu. Zakrčeno telo pomeni tudi zakrčen in prestrašen um.
        </p>
        <p>
          Joga, ki jo podajam, ni neka navadna joga, ki bi vam pomagala zgolj pri prožnosti ali boljšem počutju. Namenjena je temu, da vas usmeri k raziskovanju vašega resničnega telesa, ki je onkraj vaših misli in ideje o tem, kdo ste in za koga se imate.
        </p>
        <p>
          Joga iz kašmirske tradicije ima zelo subtilen in občutljiv pristop. To jogo je v Evropo pripeljal Jean Klein, ki je bil učitelj Billyja Doyla in mnogih drugih. Sam sem se te joge učil neposredno pri Billyju Doylu in jo zdaj prenašam naprej na način, kot jo je on prenašal name.
        </p>
        <p>
          Pri tej jogi se ne usmerjamo v cilje ali dosežke, temveč v slavljenje življenja iz trenutka v trenutek. Tukaj raziskujemo naše resnično telo, ki se izraža kot vibracija in ne kot nekaj, kar je prepoznano iz našega vsakdanjega življenja.
        </p>
        <p>
          Joga iz kašmirske tradicije ima zelo podobne asane kot večina jog, ki ste jih že izvajali ali pa jih morda videli. Na videz je enaka, vendar v resnici praktikanta usmerja v poglobljeno izpraševanje in spoznanje, kdo v resnici je – onkraj misli in telesa. Skozi to jogo odkrijemo lahkotnost našega pravega telesa, ki se razteza brez omejitev in tako dovolimo, da se nas tisina dotakne.
        </p>
        <p>
          Pogosto verjamemo, da smo to telo in da se tukaj naša zgodba konča. Ta joga praktikanta usmerja k raziskovanju energijskega telesa in spoznanju, da je prav energijsko telo tisto, ki premika fizično telo.
        </p>
        <p>
          Naše celotno telo je pogojeno telo – pogojeni so naši organi in čutila. Na splošno je telo zakrčeno, saj nosi zapise naših staršev, življenjskih izkušenj in travmatičnih dogodkov. 
        </p>
        <p>
          Skozi določene asane, dihalne vaje in poglobljeno poslušanje dovolimo, da se telo osvobodi kontrakcij, ki jih nosi, ter tako zaživimo bolj umirjeno in svobodno življenje. Ko se energijske ujetosti sprostijo, se znajdemo v večji odprtosti in postanemo bolj dovzetni za globalno resnico, ki presega telo in um.
        </p>
        <p>
          Če najprej razumemo oziroma imamo globoko prepričanje, da v naši pravi naravi ni ničesar, kar bi morali postati ali doseči, lahko telo in njegove gibe raziskujemo brez usmerjenosti k cilju. Tako lahko vadimo jogo kot pot osvobajanja od tega, kar nismo.
        </p>
        <p>
          Zelo pomembno je, da telo doživimo kot živo občutenje in mu damo čas, da se samo razkrije kot vibracija, subtilna energija in odprt prostor. Če tega ni, izvajanje vaj iz zakrčenega telesa ostaja zgolj na mišični ravni in s tem nehote utrjuje že obstoječe vzorce napetosti.
        </p>
        <p>
          Zato se pogosto zgodi, da ljudje, ki jogo vadijo že vrsto let, razvijejo več prožnosti ali moči, vendar globlje napetosti in notranja zakrčenost ostajajo. Manjka tisti preobrat v zaznavanju, kjer telo ni več nekaj, kar izvajamo, temveč nekaj, kar se v sproščenosti razkriva samo.
        </p>
        <p>
          Iz te kakovosti občutenja in prostornosti smo na primer povabljeni, da začutimo, kako naše telo zapolnjuje prostor in se nežno razteza proti steni pred nami, brez zavestnega manipuliranja posameznih mišic. Telo se lahko zaupa samo sebi, da najde svojo naravno sprostitev and odprtost, brez vsiljevanja notranjega nadzornika.
        </p>
        <p>
          Povabljeni smo, da občutimo celovitost drže in enost s prostorom, namesto da bi ostajali ujeti zgolj v glavi. Tako se drža ne izvaja, temveč se razkriva — kot živo doživetje prisotnosti v prostoru.
        </p>
        <p>
          Določene jogijske asane bi lahko označili za arhetipe; na primer savasana (položaj trupla), kjer se združijo številni položaji telesa in skozi katero pride do harmonizacije energij celotnega telesa-duha. Če telo ni pripravljeno, živo v občutenju in občuteno kot prostor, asana nima velikega pomena.
        </p>
        <p>
          Veselje obstaja v občutenju elastičnosti telesa in odkrivanju gibanja; vadba je sama po sebi praznovanje obstoja.
        </p>
        <h3 className="text-2xl font-serif text-zen-900 border-b border-zen-200 pb-2 mt-10">Nedualnost</h3>
        <p>
          Tukaj govorim iz svoje osebne izkušnje in podajam usmeritev, ki lahko iskalca pripelje do neposrednega spoznanja njegove resnične narave skozi poglobljeno izpraševanje. Dogodek bomo začeli z vodeno meditacijom, nato bom nadaljeval z govorom, kasneje pa boste imeli možnost postavljati vprašanja. Takrat bom odgovarjal neposredno vam in vas skozi dialog popeljal v poglobljeno izpraševanje.
        </p>
        <p>
          Ko začnemo izpraševati svoja prepričanja, se ideja o tem, kdo smo, začne razkrajati. Kar ostane, je tisto, kar je bilo vedno tukaj. Nedualno prepoznanje vodi h koncu psihološkega trpljenja, s tem pa se tudi iskanje zaključi.
        </p>
        <p>
          Takrat začnemo živeti življenje iz te globalne odprtosti, ne več iz glave oziroma mentalnih konstruktov, na katere smo bili vajeni. To pomeni prehod iz zgolj mentalnega bivanja v neposredno prepoznanje tistega, kar je prisotno pred vsako naso izkušnjo, iz trenutka v trenutek.
        </p>
        <p>
          Vabljeni vsi, ki se želite poglobiti v raziskovanje sebe. Joga je primerna tako za začetnike kot za napredne praktikante.
        </p>
        <p>
          V sklopu srečanj bomo imeli tudi prostor za vprašanja in odgovore na temo nedualnosti.
        </p>
        <div className="bg-zen-100 p-6 rounded-xl border border-zen-200 mt-8">
          <h4 className="font-serif text-xl text-zen-900 mb-4">Program vključuje:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>10 srečanj joge (v živo)</li>
            <li>2 srečanji nedualnosti (online)</li>
          </ul>
          <div className="mt-6 space-y-2">
            <p><span className="font-medium">Cena celotnega programa Joga + Nedualnost:</span> 220 EUR</p>
            <p><span className="font-medium">Cena Joge (10 srečanj):</span> 175 EUR</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 pt-6">
          <div>
            <h4 className="font-bold text-zen-900 uppercase tracking-widest text-sm mb-4">LOKACIJA IN PRIJAVA</h4>
            <p><span className="font-medium">Lokacija joge (v živo):</span> Koprska ulica 52, 1000 Ljubljana</p>
            <p><span className="font-medium">Nedualnost:</span> online</p>
            <p className="mt-4"><span className="font-medium">Prijave:</span> <a href="mailto:alex.marinc92@gmail.com" className="underline">alex.marinc92@gmail.com</a></p>
          </div>
          <div>
            <h4 className="font-bold text-zen-900 uppercase tracking-widest text-sm mb-4">URNIK</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium">Januar</p>
                <ul className="list-none pl-0">
                  <li>08.01.2026 od 19h do 20:30</li>
                  <li>15.01.2026 od 19h do 20:30</li>
                  <li>22.01.2026 od 19h do 20:30</li>
                  <li>29.01.2026 od 19h do 20:30</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Februar</p>
                <ul className="list-none pl-0">
                  <li>05.02.2026 od 19h do 20:30</li>
                  <li>06.02.2026 od 19h do 20.30 Nedualnost (online)</li>
                  <li>12.02.2026 ob 19h do 20:30</li>
                  <li>19.02.2026 ob 19h do 20:30</li>
                  <li>26.02.2026 ob 19h do 20:30</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Marec</p>
                <ul className="list-none pl-0">
                  <li>05.03.2026 ob 19h do 20:30</li>
                  <li>12.03.2026 ob 19h do 20:30</li>
                  <li>13.03.2026 ob 19h do 20:30 Nedualnost (online)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#B8C0BC]/40 text-zen-900 p-8 rounded-xl mt-8 border border-[#B8C0BC]/60">
          <h4 className="font-serif text-xl mb-4 uppercase tracking-wider">POGOJ ZA UDELEŽBO NA TEČAJU JOGE</h4>
          <p className="mb-4">
            Pogoj za udeležbo na tečaju joge je soglasje s splošnimi pogoji poslovanja, vključno z omejitvijo odgovornosti.
          </p>
          <p className="mb-6">
            Z oddajo prijave in/ali izvedbo plačila tečaja joge se šteje, da udeleženec potrjuje, da je z omejitvijo odgovornosti seznanjen ter se z njo v celoti strinja.
          </p>
          <p>
            Več podrobnosti je na voljo <button onClick={() => (window as any).onNavigate('omejitev-odgovornosti')} className="underline font-medium hover:text-zen-600 transition-colors">TUKAJ</button>.
          </p>
        </div>
      </div>
    )
  }
];

export default function Dogodki({ onBack, onNavigate }: DogodkiProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('vsi');
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  // Expose onNavigate to window for the TUKAJ button in details
  React.useEffect(() => {
    (window as any).onNavigate = onNavigate;
    return () => { delete (window as any).onNavigate; };
  }, [onNavigate]);

  const filteredEvents = events.filter(event => 
    activeCategory === 'vsi' ? true : event.category === activeCategory
  );

  const upcomingEvents = filteredEvents.filter(e => !e.isPast);
  const pastEvents = filteredEvents.filter(e => e.isPast);

  return (
    <div className="min-h-screen bg-zen-50 pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-zen-500 hover:text-zen-900 transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          <span>Nazaj</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-zen-900 mb-4">Dogodki 2026</h1>
            <p className="text-xl text-zen-600 font-light max-w-2xl">
              Pregled vseh prihajajočih in preteklih dogodkov, delavnic ter izobraževanj v letu 2026.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveCategory('vsi')}
              className={`px-4 py-2 rounded-full text-sm tracking-widest uppercase transition-colors ${activeCategory === 'vsi' ? 'bg-zen-400 text-white' : 'bg-white text-zen-600 border border-zen-300 hover:border-zen-400'}`}
            >
              Vsi dogodki
            </button>
            <button 
              onClick={() => setActiveCategory('sola')}
              className={`px-4 py-2 rounded-full text-sm tracking-widest uppercase transition-colors ${activeCategory === 'sola' ? 'bg-zen-400 text-white' : 'bg-white text-zen-600 border border-zen-300 hover:border-zen-400'}`}
            >
              Šola
            </button>
            <button 
              onClick={() => setActiveCategory('nedualnost')}
              className={`px-4 py-2 rounded-full text-sm tracking-widest uppercase transition-colors ${activeCategory === 'nedualnost' ? 'bg-zen-400 text-white' : 'bg-white text-zen-600 border border-zen-300 hover:border-zen-400'}`}
            >
              Nedualnost
            </button>
            <button 
              onClick={() => setActiveCategory('joga')}
              className={`px-4 py-2 rounded-full text-sm tracking-widest uppercase transition-colors ${activeCategory === 'joga' ? 'bg-zen-400 text-white' : 'bg-white text-zen-600 border border-zen-300 hover:border-zen-400'}`}
            >
              Joga
            </button>
            <button 
              onClick={() => setActiveCategory('program')}
              className={`px-4 py-2 rounded-full text-sm tracking-widest uppercase transition-colors ${activeCategory === 'program' ? 'bg-zen-400 text-white' : 'bg-white text-zen-600 border border-zen-300 hover:border-zen-400'}`}
            >
              Mentorski program
            </button>
          </div>
        </div>

        {upcomingEvents.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-serif text-zen-900 mb-8 pb-4 border-b border-zen-300">Prihajajoči dogodki</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} onClick={() => event.details ? setSelectedEvent(event) : window.open(event.link, '_blank')} />
              ))}
            </div>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif text-zen-900 mb-8 pb-4 border-b border-zen-300">Pretekli dogodki</h2>
            <div className="grid md:grid-cols-2 gap-6 opacity-75">
              {pastEvents.map((event, index) => (
                <EventCard key={index} event={event} onClick={() => event.details ? setSelectedEvent(event) : window.open(event.link, '_blank')} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="absolute inset-0 bg-zen-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
          >
            <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-zen-100 px-8 py-6 flex justify-between items-center">
              <div>
                <span className="text-xs tracking-widest uppercase text-zen-400 mb-1 block">{selectedEvent.category}</span>
                <h2 className="text-2xl md:text-3xl font-serif text-zen-900">{selectedEvent.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="p-2 hover:bg-zen-50 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-zen-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap gap-6 mb-10 text-sm text-zen-600">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-zen-400" />
                  <span className="uppercase tracking-wider font-medium">{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-zen-400" />
                  <span>{selectedEvent.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-zen-100 text-zen-700 text-xs tracking-widest uppercase rounded-full">
                    {selectedEvent.category === 'program' ? 'Mentorski program' : selectedEvent.category}
                  </span>
                </div>
              </div>

              {selectedEvent.details}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

const EventCard: React.FC<{ event: AppEvent; onClick: () => void }> = ({ event, onClick }) => {
  return (
    <motion.div 
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="block bg-white p-8 rounded-sm shadow-sm border border-zen-300 hover:shadow-md hover:border-zen-300 transition-all group cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="inline-block px-3 py-1 bg-zen-100 text-zen-700 text-xs tracking-widest uppercase rounded-full">
          {event.category === 'program' ? 'Mentorski program' : event.category}
        </span>
        {event.details ? (
          <span className="text-xs text-zen-400 uppercase tracking-widest group-hover:text-zen-900 transition-colors">Podrobnosti</span>
        ) : (
          <ExternalLink size={18} className="text-zen-300 group-hover:text-zen-900 transition-colors" />
        )}
      </div>
      
      <h3 className="text-xl font-serif text-zen-900 mb-6 group-hover:text-zen-600 transition-colors">
        {event.title}
      </h3>
      
      <div className="space-y-3 text-sm text-zen-600 font-light">
        <div className="flex items-center gap-3">
          <Calendar size={16} className="text-zen-400" />
          <span className="uppercase tracking-wider">{event.date}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin size={16} className="text-zen-400" />
          <span>{event.location}</span>
        </div>
      </div>
    </motion.div>
  );
};
