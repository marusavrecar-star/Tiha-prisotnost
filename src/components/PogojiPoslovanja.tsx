import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PogojiPoslovanjaProps {
  onBack: () => void;
}

export default function PogojiPoslovanja({ onBack }: PogojiPoslovanjaProps) {
  return (
    <div className="min-h-screen bg-zen-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-zen-500 hover:text-zen-900 transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          <span>Nazaj</span>
        </button>

        <h1 className="text-4xl md:text-5xl font-serif text-zen-900 mb-12">POGOJI POSLOVANJA IN PLAČILNI POGOJI</h1>
        
        <div className="prose prose-lg prose-zen max-w-none font-light text-zen-600 leading-relaxed space-y-6">
          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Splošni pogoji poslovanja in uporabe storitev</h2>
          <p>Nahajate se na spletnem mestu ALEXTHERAPIES, Aleksandar Marinković s.p., Škofljica, www.tihaprisotnost.com ( v nadaljevanju ALEXTHERAPIES).</p>
          <p>Ti splošni pogoji urejajo vaš dostop do tega spletnega mesta in njegovo uporabo. Z vstopom na spletno mesto potrjujete, da ste z njimi seznanjeni, z njimi soglašate ter da vas določbe teh splošnih pogojev zavezujejo.</p>
          
          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Uvodne določbe</h2>
          <p>Splošni pogoji poslovanja opredeljujejo pogoje uporabe storitev ALEXTHERAPIES.</p>
          <p>Splošni pogoji veljajo za vse uporabnike, ki uporabljajo storitve spletnega mesta, kakor tudi storitve terapij, dogodkov in izobraževanj.</p>
          <p>Z naročilom na storitve, ki jih ponuja spletno mesto oziroma izvajalec, potrjujete seznanitev s splošnimi pogoji poslovanja in uporabe storitev. Z vstopom na spletno mesto potrjujete, da ste z njimi seznanjeni in z njimi soglašate.</p>
          <p>ALEXTHERAPIES si pridružuje pravico, da lahko kadarkoli brez obvestila dopolni in spremeni Splošne pogoje poslovanja. Spremembe pričnejo veljati isti dan, kot so objavljene na spletnem mestu. Uporabnikova nadaljnja uporaba spletnega mesta ter njegovih storitev se smatra kot sprejemanje spremenjenih Splošnih pogojev poslovanja.</p>
          
          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Omejitev odgovornosti</h2>
          <p>Moje delo temelji na različnih sposobnostih, ki jih posedujem in so podkrepljene z znanjem, pridobljenim na različnih izobraževanjih. Kljub temu pa obisk pri meni ali uporaba mojih storitev ne more nadomestiti obiska pri zdravniku, specialistu ali drugem usposobljenem strokovnem delavcu.</p>
          <p>Namen mojega dela je predvsem informativen in poučen. Moje storitve ne predstavljajo zdravstvenega posega za fizično ali psihično zdravje. Vsak obisk pri meni je na lastno odgovornost posameznika, zato ne prevzemam odgovornosti za posledice obiska ali odločitev, ki jih posameznik sprejme po njem.</p>
          <p>Če ocenim, da bi lahko prišlo do kakršnih koli zapletov ali trajnih posledic za stranko ali zame, si pridržujem pravico do odpovedi termina ali zavrnitve stranke. Prav tako si pridržujem pravico do spremembe dogovorjenih terminov.</p>
          <p>Stranka, z oddajo naročila termina in/ali obiska, zagotavlja, da je pogoje prebrala in izraža svoje razumevanje in soglasje s pogoji o omejitvi odgovornosti ter dovoljuje izvedbo storitve.</p>
          
          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Omejitev odgovornosti – JOGA</h2>
          <p>Z prijavo in/ali plačilom in/ali udeležitvijo tečaja joge v skupini, individualne joge, online tečajev joge, joge v sklopu šole ali delavnice/dogodka se strinjate in soglašate s splošnimi pogoji navedeni na spletni strani www.tihaprisotnost.com in pogoji o omejitvi odgovornosti, ki so navedeni v nadaljevanju.</p>
          <p>Udeležba na vodenih vadbah joge in ostalih programih ALEXTHERAPIES je prostovoljna in poteka v celoti na lastno odgovornost udeleženca, ter ALEXTHERAPIES zanjo ne nosi nobene odgovornosti.</p>
          
          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Omejitev odgovornosti za poškodbe pri izvajanju joge</h2>
          <p>Za vključitev in sodelovanje pri jogi v skupini, individualni jogi, online tečajev joge, jogi v sklopu šole ali delavnice/dogodka se odločate na lastno odgovornost in vadite na lastno odgovornost. ALEXTHERAPIES ne prevzema nobene odgovornosti za kakršnokoli škodo ali poškodbo, ki bi lahko nastala na osnovi izvedenih jogijskih vsebin in uporabe vsebin na spletni strani www.tihaprisotnost.com.</p>
          <p>S sodelovanjem v jogi se strinjate, da je vaše sodelovanje prostovoljno in da se zavedate, da lahko izvajanje joge vključuje fizično dejavnost, ki lahko privede do poškodb. ALEXTHERAPIES ne prevzema nobene odgovornosti za morebitne poškodbe ali škodo, ki bi nastala zaradi neprimernega izvajanja vaj ali ignoriranja omejitev ali kot posledica sodelovanja v jogi. To vključuje, vendar ni omejeno na, poškodbe zaradi nepravilnega izvajanja vaj, neustreznih fizičnih sposobnosti, neupoštevanja navodil in pomanjkanja ustrezne opreme.</p>
          <p>Vsak udeleženec prevzema polno odgovornost za svoje sodelovanje in delovanje med jogijsko vadbo.</p>
          <p>Pred začetkom sodelovanja v jogi morate preveriti svoje zdravstveno stanje in se posvetovati s svojim zdravnikom, če imate kakršne koli zdravstvene težave ali omejitve, ki bi lahko vplivale na vašo sposobnost varnega izvajanja vaj.</p>
          <p>ALEXTHERAPIES se zavezuje k zagotavljanju varnega in skrbnega okolja za izvajanje joge, vendar ne mora zagotoviti popolne zaščite pred morebitnimi poškodbami.</p>
          <p>Za vključitev in sodelovanje pri jogi v skupini, individualni jogi, online tečajih joge, jogi v sklopu šole ali delavnice/dogodka se odločate na lastno odgovornost in tudi vadite na lastno odgovornost. ALEXTHERAPIES ne prevzema nobene odgovornosti za kakršnokoli škodo ali poškodbo, ki bi lahko nastala na osnovi izvedenih jogijskih vsebin in uporabe vsebin na spletni strani www.tihaprisotnost.com.</p>
          <p>Če niste prepričani, ali lahko izvajate vadbo joge, se prej posvetujte s svojim zdravnikom oz. specialistom. Če imate resne oz. kronične zdravstvene težave ali ste noseči, se pred vadbo joge posvetujte s svojim zdravnikom oz. specialistom.</p>
          <p>Če med izvajanjem joge začutite slabost, vrtoglavico ali kakršnokoli drugo neprijetno počutje, takoj prenehajte z vajami in se posvetujte s svojim zdravnikom oz. specialistom.</p>
          <p>Poskrbite, da boste vaje iz online tečajev izvajali v varnem okolju.</p>
          <p>Vsebine na spletni strani www.tihaprisotnost.com oz. vse usmeritve in nasveti, ki jih vsebujejo, so zgolj informativne narave in ne morejo nadomestiti zdravniškega ali specialističnega mnenja.</p>
          <p>Z uporabo spletne strani www.tihaprisotnost.com uporabnik potrjuje, da je sprejel vse pogoje poslovanja ALEXTHERAPIES in se z njimi strinja.</p>
          <p>Prijava na jogo je mogoča do zapolnitve prostih mest v tej skupini.</p>
          <p>Za garderobo, izgubljene, odtujene ali pozabljene predmete ALEXTHERAPIES ne nosi nobene odgovornosti.</p>
          <p>V primeru, da se s pogoji ne strinjate, vas prosimo, da se ne udeležite joge.</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Omejitev odgovornosti spletnega mesta</h2>
          <p>Spletno mesto je dostopno »takšno kot je«, zato ALEXTHERAPIES ne prevzema nobene odgovornosti:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>da bo dostop do spletnega mesta in storitev deloval nemoteno, varno in brez napak</li>
            <li>da bodo spletno mesto in storitve zadovoljili vaše potrebe</li>
            <li>da bodo informacije pridobljene iz spletnega mesta in storitev učinkovite, zanesljive in točne</li>
            <li>da bo kvaliteta informacij, ki je pridobljena na spletnem mestu ali storitev, uresničila vaša pričakovanja.</li>
          </ol>
          <p>Podatki na spletnem mestu so zgolj informativne narave, zato ALEXTHERAPIES ne prevzema odgovornosti za morebitne napake v vsebini, ki so objavljene na tem spletnem mestu ali povezanih spletnih straneh, torej lahko vsebujejo netočnosti, tipkovne, slovnične ali tipografske napake.</p>
          <p>ALEXTHERAPIES spletnega mesta in vsebin ni zavezan posodabljati, jih pa lahko kadarkoli in brez predhodnega obvestila spremeni. ALEXTHERAPIES si tako pridržuje pravico do spreminjanja in dopolnjevanja vsebin.</p>
          <p>To spletno mesto je intelektualna lastnina ALEXTHERAPIES. Vse informacije, podatki, produkti in opisi storitev ter druga vsebina, vključno z vsemi računalniškimi programi, ki so na voljo na spletnem mestu, so zaščiteni z avtorskimi pravicami. Uporabniki jih ne smete spreminjati, kopirati, distribuirati, prenašati, prikazovati, objavljati, prodajati, licencirati, preoblikovati v izvedene produkte ali uporabljati za komercialne ali javne namene.</p>
          <p>Slike oseb, predmetov, krajev in druge slike, prikazane na spletnem mestu, so last ALEXTHERAPIES ali pa so objavljene z dovoljenjem lastnika. Kakršnakoli uporaba teh slik brez pisnega dovoljenja lastnika je prepovedana in predstavlja kršitev avtorskih pravic ali drugih pravic intelektualne lastnine ali predpisov o varstvu osebnih podatkov.</p>
          <p>Blagovne znamke, logotipi in storitvene znamke (zaščitni znaki), ki so prikazani na spletnem mestu, so last ALEXTHERAPIES ali tretjih oseb. Uporabniki jih brez pisnega dovoljenja ALEXTHERAPIES oziroma lastnika zaščitnih znakov ne smete uporabljati. Vloge z obrazložitvijo namena uporabe podatkov s tega naslova pošljite na naslov:</p>
          <p>Naziv podjetja: ALEXTHERAPIES, Aleksandar Marinković s.p.<br/>
          Naslov: Kočevska cesta 122, Pijava Gorica, 1291 Škofljica<br/>
          Elektronski naslov: alex.marinc92@gmail.com<br/>
          Kontaktna telefonska številka: +386 40 800 108</p>
          <p>ALEXTHERAPIES si pridržuje pravico, da se v primeru kršenja teh splošnih pogojev posluži vseh pravnih sredstev in pravic, vključno s pravico do blokiranja dostopa do spletnega mesta z določenega spletnega naslova.</p>
          <p>V nobenem primeru ALEXTHERAPIES ne odgovarja za morebitno nastalo škodo ali izgubljeni dobiček, ki izhaja iz uporabe naših storitev, spletnega mesta ali vsebine. Če ste nezadovoljni s storitvami, vsebino na spletni strani ali s Splošnimi pogoji, predlagamo, da se obrnete na nas ali da prenehate z uporabo spletnega mesta.</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Zasebnost in piškotki</h2>
          <p>Piškotek je podatek, ki ga internetni strežnik postavi na vaš računalnik, ko obiščete določeno spletno stran. Piškotki izboljšajo in olajšajo uporabniško izkušnjo, in nikakor ne prenašajo računalniških virusov ali kako drugače škodujejo vašemu računalniku. Nekateri piškotki imajo rok le za eno sejo, drugi lahko imajo daljši rok trajanja, ali pa lahko ostanejo na vašem računalniku, dokler jih ne izbrišete sami.</p>
          <p>Piškotki se lahko uporabljajo za različne namene: za ohranjanje kontinuitete uporabniške seje, za zbiranje podatkov o uporabi spletnega mesta za namene poslovne raziskave, analize, načrtovanja in druge namene in za shranjevanje nastavitev. Piškotki, ki jih uporabljamo, ne zbirajo podatkov, ki vas lahko osebno identificirajo.</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Obvestilo o zasebnosti: Varstvo in obdelava osebnih podatkov</h2>
          <p>Obdelava osebnih podatkov pomeni kakršnokoli uporabo osebnih podatkov, med drugim npr. tudi hrambo kontaktnih podatkov ter uporabo teh kontaktov za pošiljanje obvestil, novic oziroma kakšne druge komunikacije. Pri ALEXTHERAPIES želimo biti glede zbiranja in načina obdelave vaših osebnih podatkov povsem transparentni.</p>
          <p>Zavedamo se pomena varovanja vaših osebnih podatkov in spoštujemo vašo zasebnost, zato z vsako posredovano informacijo ravnamo skrbno. Cenimo vaše zaupanje, zato vam zagotavljamo varnost in zaupnost pri uporabi in obdelavi vaših osebnih podatkov.</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Obseg in namen zbiranja osebnih podatkov</h2>
          <p>V kolikor ste se naročili na prejemanje naših e-novic, bomo vaše osebne podatke (elektronski naslov) uporabljali izključno za ta namen. Obdelava osebnih podatkov za ta namen temelji na vaši privolitvi. Podatkov v nobenem primeru ne bomo pošiljali tretjim osebam.</p>
          <p>Na spletni strani www.tihaprisotnost.com se ne shranjujejo podatki uporabnika, ko pošlje povpraševanje. Ti podatki se posredujejo direktno na elektronski naslov podjetja ALEXTHERAPIES in se uporabljali zgolj za komunikacijo uporabnikom. Vsi shranjeni elektronski naslovi se pri raznih akcijah in promocijah uporabljajo za uporabo obveščanja naših strank. Ostali elektronski naslovi drugim niso vidni, prejemnik dobi elektronsko sporočilo brez videnja ostalih prejemnikov. Od elektronskih obvestil se lahko vsak posameznik odjavi na povezavi, ki je prisotna pri prejemanju elektronskih obvestil. Pri brezplačnih ponudbah ni potrebno potrjevanja pogojev, vsa pravila so enaka kot zgoraj.</p>
          <p>Če se registrirate na naše spletno mesto ali ste uporabnik naših storitev, bomo uporabljali naslednje podatke:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>elektronski naslov</li>
            <li>ime oz. vzdevek, ki ste ga določi ob registraciji (ni nujno vaše pravo ime)</li>
            <li>v kolikor postanete uporabnik storitev, bomo vaš elektronski naslov uporabili tudi za pošiljanje predračunov, računov, povpraševanja uporabnikov</li>
            <li>vaš naslov (ulica, hišna številka, poštna številka, kraj), v kolikor nam boste te podatke posredovali zaradi izdajanja računov</li>
            <li>vašo telefonsko številko.</li>
          </ul>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Zavarovanje osebnih podatkov</h2>
          <p>Pri obdelavi vaših osebnih podatkov in pri ravnanju z njimi bomo ravnali v skladu z veljavnimi nacionalnimi predpisi o varstvu osebnih podatkov in Splošno uredbo o varstvu podatkov (GDPR).</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Rok hrambe osebnih podatkov</h2>
          <p>Vaše osebne podatke bomo hranili dokler ne prekličete privolitve za obdelavo osebnih podatkov.</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Zagotavljanje pravic posameznika pri obdelavi osebnih podatkov</h2>
          <p>V skladu s Splošno uredbo o varstvu osebnih podatkov imate pravico do dostopa do podatkov, ki se nanašajo na vas, pravico do popravka podatkov, pravico do omejitve obdelave, pravico do izbrisa podatkov ter pravico do prenosljivosti podatkov.</p>
          <p>Privolitev za obdelavo osebnih podatkov lahko kadarkoli pisno prekličete. Preklic privolitve ne bo vplival na zakonitost obdelave podatkov, ki smo jo izvajali do trenutka preklica.</p>
          <p>Vaš zahtevek, pritožbo ali ugovor v zvezi s katerekoli od zgoraj navedenih pravic, lahko pošljete po elektronski pošti na alex.marinc92@gmail.com</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Neposredno trženje</h2>
          <p>Za namene neposrednega trženja upravljavec ne uporablja nobenega osebnega podatka.</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Posredovanje osebnih podatkov tretjim osebam</h2>
          <p>Upravljavec ne posreduje osebnih podatkov uporabnikov tretjim osebam.</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Končna določila</h2>
          <p>Vsi morebitni spori, ki bi nastali med uporabnikom in izvajalcem storitve, se rešujejo na slovenskih sodiščih.</p>
          <p>Uporabnik ob naročilu storitve potrjuje, da je v celoti seznanjen s Splošnimi pogoji poslovanja in se z njimi strinja.</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Načini plačila in komercialni pogoji</h2>
          <p>Vse cene pri ponudniku v evrih (€) in ne vsebujejo davka na dodano vrednost (DDV) – ALEXTHERAPIES Aleksandar Marinković ni davčni zavezanec.</p>
          <p>ALEXTHERAPIES za svoje storitve zaračunava v odvisnosti od posameznega programa – po vsakokrat veljavnem ceniku, kot enkratno plačilo ob naročilu, oziroma na obroke. Vsi pogoji nakupa, plačevanja in podobno, so vedno navedeni na strani, kjer je možno opraviti nakup.</p>
          <p>Zaradi narave ponudnikovih storitev (individualne terapije, izobraževalni programi in moduli, delavnice, seminarji…), dobi stranka dostop do naročenih vsebin po dejansko opravljenem plačilu za naročene storitve.</p>
          <p>V primeru mesečnega obračunavanja ima ponudnik v primeru neplačila pravico, da naročniku takoj prekine dobavo vseh storitev brez predhodnega opozorila. Ponudnik v takšnem primeru ne odgovarja za nikakršno premoženjsko ali nepremoženjsko škodo, ki bi stranki utegnila nastati zaradi prekinitve dobave storitev s strani ponudnika.</p>
          <p>Enake posledice za stranko nastopijo v primeru, če po izteku obdobja, za katerega je bila sklenjena pogodba oziroma naročena storitev, ne sprejme ponudnikove prve nove ponudbe in ne plača zneska po ponudbi.</p>
          <p>Ponudnik prekine dobavo storitev stranki z iztekom obdobja, za katerega je bila pogodba sklenjena oziroma naročena storitev.</p>
          <p>Stranka je seznanjena in soglaša, da ima ponudnik pravico, da v primeru strankinega preplačila, napačnega ali dvojnega plačila, v primeru izdaje delnega ali celotnega dobropisa s strani ponudnika ipd., ko mora ponudnik nakazovati denar nazaj stranki ali izdajati dodatne dokumente, stranki zaračunati s tem povezane administrativne stroške.</p>
          <p>Stranka soglaša, da ji lahko ponudnik izda račun tudi samo v elektronski obliki in ji ga pošlje po e-pošti oziroma s sredstvi elektronske komunikacije. V primeru, ko stranka želi oziroma zahteva izdajo računa/-ov v papirnati obliki (npr. če izgubi račun in želi njegovo ponovno izdajo v papirnati obliki ipd.), ima ponudnik pravico stranki zaračunati administrativne stroške izdaje računa.</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Sklenitev, trajanje in prenehanje naročniške pogodbe, načini plačila</h2>
          <p>Za naročilo storitev in sklenjeno pogodbo se šteje oddano naročilo in nakup oziroma plačilo posameznega izobraževalnega programa ali storitve. Naročnik oziroma stranka se z nakupom strinja in soglaša s temi splošnimi pogoji.</p>
          <p>Slike, vsebovane v ponudbi ter v drugih ponudnikovih gradivih, vključno s spletnim mestom, so simbolične in se stranke nanje v nobenem primeru ne morejo sklicevati ali na njihovi podlagi karkoli terjati od ponudnika.</p>
          <p>Pogodbeni stranki lahko kadarkoli in brez odpovednega roka s pisnim obvestilom drugi stranki odstopita od pogodbe, če nasprotna stranka, tudi po predhodnem opozorilu, krši določila te pogodbe ali drugi stranki povzroča škodo.</p>
          <p>Če ponudnik v primeru iz prejšnjega odstavka odstopi od pogodbe, stranki ni dolžan omogočiti uporabe storitve, ki jo je ta morda plačala ali zakupila vnaprej, prav tako ji za neporabljen del storitve ni dolžan plačati nadomestila ali odškodnine.</p>
          <p>Stranki lahko kadarkoli odpovesta pogodbo. Glede na naravo storitev odpovednega roka ni – ponudnik se zaveže, da bo prekinitev pogodbe izvedel v najkrajšem možnem času.</p>
          <p>V primeru, da gre za odpoved sodelovanja pri programih, kjer naročnik mesečno plačuje za dostop do naročenih programov, ponudnik v primeru odpovedi ne sme zaračunati naročnine za naslednje obračunsko obdobje, če je naročnik odpovedal storitve.</p>
          <p>Če pride do odpovedi pogodbe zaradi naročnikovih kršitev teh splošnih pogojev, ima ponudnik pravico takoj in brez opozorila prekiniti sodelovanje in dostop do storitev, pri tem pa v takšnem primeru ne odgovarja za nikakršno premoženjsko ali nepremoženjsko škodo, ki bi stranki utegnila nastati zaradi prekinitve dobave storitev s strani ponudnika.</p>
          <p>Če ni v ponudbi ali v pisni pogodbi med stranko in ponudnikom izrecno določeno drugače, se pogodba med ponudnikom in stranko sklepa za čas, ki je naveden v določenem programu.</p>
          <p>Odpoved pogodbe lahko naročnik poda v pisni obliki – digitalni ali fizični (po pošti na naslov ponudnika).</p>
          <p>Stranka se obvezuje, da bo poravnala vse obveznosti, ki so nastale do dneva prenehanja sodelovanja. Če stranka v primeru predplačila storitev za določeno časovno obdobje predčasno odpove pogodbo, ni upravičena do vračila vnaprej plačanega zneska, razen v primeru grobega kršenja pogodbenih obveznosti s strani ponudnika.</p>
          <p>Ponudnik stranki omogoči dostop do naročenih oziroma kupljenih izobraževalnih vsebin takoj oziroma v najkrajšem možnem času po plačilu, vidnem na transakcijskem računu, v vsakem primeru pa vsaj naslednji delovni dan.</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Načini plačila:</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>plačilo na TRR– plačilo na transakcijski račun ponudnika. Na spletni strani ponudnika naročnik naroči preko naročilnice posamezno storitev. Po izpolnitvi naročilnice in oddaje naročila, je stranka preusmerjena na stran s podatki za plačilo, sočasno pa dobi na svoj E-mail potrdilo o naročilu, kateremu so prav tako priloženi podatki za plačilo.</li>
            <li>plačilo v gotovini pred začetnom terapij in/ali seminarja oziroma delavnice po tem, ko je na TRR izvajalca že predhodno plačal rezervacijo za posamezno delavnico ali seminar.</li>
          </ol>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Tehnični postopki za sklenitev pogodbe (naročilo)</h2>
          <p>Kot navedeno, se za sklenitev pogodbe šteje oddaja naročila. Uporabnik oziroma stranka odda naročilo na posameznih promocijskih straneh s klikom na jasno označene gumbe. Po kliku na gumb za naročilo je uporabnik preusmerjen na stran s ‘košarico’, kjer je možno izbirati količino, vpisati kode za popust in podobno. S klikom na gumb za nadaljevanje naročila je uporabnik preusmerjen na stran, kjer vpiše svoje podatke, ki so potrebni za naročilo. Na isti strani je povzetek naročila. Z oddajo naročila se strinjanja s temi splošnimi pogoji poslovanja. Naročilo se zaključi s klikom na gumb na dnu strani.</p>
          <p>Po oddaji naročila uporabnik na svoj E-naslov prejme sporočilo z obvestilom o naročilu in podatki za plačilo.</p>

          <h2 className="text-2xl font-serif text-zen-900 mt-12 mb-6">Roki za izvedbo storitev</h2>
          <p>Ponudnik mora storitev izvesti v roku, ki je naveden v ponudbi za posamezni program, delavnico, seminar ali drugo ponudnikovo storitev, v skladu s cenikom oziroma v korespondenci med ponudnikom in stranko.</p>
          <p>V primeru višje sile se roki za izvedbo storitve podaljšajo za čas trajanja višje sile, pod pogojem, da ponudnik stranko obvesti o nastopu višje sile, takoj ko je to mogoče. Za višjo silo se štejejo tudi dogodki, ki izvirajo iz sfere ponudnika.</p>
          
          <p className="mt-12 text-sm text-zen-500">2023 Aleksandar Marinković – Vse pravice pridržane.</p>
        </div>
      </div>
    </div>
  );
}
