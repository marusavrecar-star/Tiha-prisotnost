import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Instagram, Facebook, Youtube, Menu, X, ChevronDown, BookOpen } from 'lucide-react';
import AiAssistant from './components/AiAssistant';
import ServiceQuiz from './components/ServiceQuiz';
import MentorskiProgram from './components/MentorskiProgram';
import Sola from './components/Sola';
import Joga from './components/Joga';
import Satsang from './components/Satsang';
import CalendarModal from './components/CalendarModal';
import PogojiPoslovanja from './components/PogojiPoslovanja';
import KontaktModal from './components/KontaktModal';
import Dogodki from './components/Dogodki';
import OmejitevOdgovornosti from './components/OmejitevOdgovornosti';
import { OAlexu } from './components/OAlexu';
import { IndividualnaTerapija } from './components/IndividualnaTerapija';
import Testimonials from './components/Testimonials';

type ModalContent = 'sola' | 'program' | 'joga' | 'nedualnost' | 'terapija' | 'sola_prisotnosti' | 'sest_tedenski' | 'kashmirska_joga' | 'satsang' | 'dogodki' | null;
type Page = 'home' | 'mentorski-program' | 'sola' | 'joga' | 'satsang' | 'pogoji' | 'dogodki' | 'o-alexu' | 'individualna-terapija';
type CalendarCategory = 'joga' | 'sola' | 'nedualnost' | 'program' | 'vsi' | null;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCalendarDropdownOpen, setIsCalendarDropdownOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalContent>(null);
  const [activeCalendar, setActiveCalendar] = useState<CalendarCategory>(null);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isKontaktModalOpen, setIsKontaktModalOpen] = useState(false);

  // Prevent scrolling when menu or modal is open
  useEffect(() => {
    if (isMenuOpen || activeModal || activeCalendar || isKontaktModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, activeModal, activeCalendar, isKontaktModalOpen]);

  const openModal = (content: ModalContent) => {
    setActiveModal(content);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const modalData = {
    sola: {
      title: "Šola: Proces utelešene prisotnosti (v živo)",
      content: (
        <div className="space-y-6 text-zen-600 font-light leading-relaxed">
          <p>
            Šola ni namenjena le terapevtom, temveč vsem, ki si želijo intenzivnega dela na sebi. Gre za poglobljen proces, ki poteka v živo, kjer se skozi demonstracije z Alexom in vaje med učenci učimo metode utelešene prisotnosti.
          </p>
          <p>
            V tem pristopu se učimo, kako vstopiti v proces popolnoma prazni, brez potrebe po "reševanju" težav. Ko sami zaključite svojo projekcijo, se odpre prostor, kjer se lahko zgodi resnična transformacija.
          </p>
          <p>
            Učimo se napredne pogovorne hipnoterapije in preizpraševanja, ki deluje kot britvica in prereže energijsko strukturo odpora. Prehajamo iz osebnega transa trpljenja v neosebni trans bivanja.
          </p>
          <p className="font-medium text-zen-800">
            Po koncu šole pridobite znanje in izkušnjo metode utelešene prisotnosti, da lahko pomagate sebi in drugim pri osvoboditvi in prepoznavi naše rojstne pravice do sreče in izpolnjenosti.
          </p>
        </div>
      )
    },
    program: {
      title: "6-Tedenski Mentorski Program (Zoom)",
      content: (
        <div className="space-y-6 text-zen-600 font-light leading-relaxed">
          <p>
            Mentorski program "Proces utelešene prisotnosti" je 6-tedenski program, ki poteka preko Zooma v udobju vašega doma. Namenjen je tistim, ki si želijo korenite spremembe in so pripravljeni na globoko raziskovanje.
          </p>
          <p>
            V tem času odpiramo različna vprašanja, ki se pojavljajo v vašem življenju. Vsak udeleženec pride na vrsto za individualno terapijo oziroma demonstracijo, kjer greva neposredno v tisto, kar je zasidrano v živčnem sistemu in telesu.
          </p>
          <p>
            To je idealna pot za vas, če z glavo že veliko razumete, a v telesu še vedno čutiti ujetost in ponavljajoče se sprožilce.
          </p>
          <p className="font-medium text-zen-800">
            Cilj je izstopiti iz iluzije, da ste vi problem, in v varnem zavetju svojega doma začutiti mir in lahkotnost: "Lahko zadiham. Nič ni narobe z mano."
          </p>
        </div>
      )
    },
    joga: {
      title: "Joga iz Kashmirske tradicije",
      content: (
        <div className="space-y-6 text-zen-600 font-light leading-relaxed">
          <p>
            Joga, ki jo podajam, ni neka navadna joga, ki bi vam pomagala zgolj pri prožnosti ali boljšem počutju. Namenjena je temu, da vas usmeri k raziskovanju vašega resničnega telesa, ki je onkraj vaših misli in ideje o tem, kdo ste in za koga se imate.
          </p>
          
          <h3 className="text-xl font-medium text-zen-800 mt-8">O pristopu</h3>
          <p>
            Joga iz kašmirske tradicije ima zelo subtilen in občutljiv pristop. To jogo je v Evropo pripeljal Jean Klein, sam pa sem se je učil neposredno pri Billyju Doylu. Pri tej jogi se ne usmerjamo v cilje ali dosežke, temveč v slavljenje življenja iz trenutka v trenutek.
          </p>
          
          <p>
            Naše celotno telo je pogojeno telo – pogojeni so naši organi in čutila. Na splošno je telo zakrčeno, saj nosi zapise naših staršev, življenjskih izkušenj in travmatičnih dogodkov. Skozi določene asane, dihalne vaje in poglobljeno poslušanje dovolimo, da se telo osvobodi kontrakcij, ki jih nosi.
          </p>
          
          <p className="font-medium text-zen-800 italic border-l-2 border-zen-200 pl-4 py-2">
            "Zelo pomembno je, da telo doživimo kot živo občutenje in mu damo čas, da se samo razkrije kot vibracija, subtilna energija in odprt prostor."
          </p>
        </div>
      )
    },
    nedualnost: {
      title: "Satsang in Nedualnost",
      content: (
        <div className="space-y-6 text-zen-600 font-light leading-relaxed">
          <p>
            Nedualno prepoznanje se zgodi. Tega ne moremo "narediti" ali izsiliti – ker osebni delovalec, ki bi to dosegel, v resnici ne obstaja.
          </p>
          <p>
            Ko začnemo izpraševati svoja prepričanja, se ideja o tem, kdo smo, začne razkrajati. Kar ostane, je tisto, kar je bilo vedno tukaj. Nedualno prepoznanje vodi h koncu psihološkega trpljenja, s tem pa se tudi iskanje zaključi.
          </p>
          <p>
            Satsang prinaša spontano in neposredno nedualno učenje iz osebne izkušnje, brez vnaprejšnje priprave. Njegov namen je končanje psihološkega trpljenja, ki ga ustvarjata naš osebni ego in nenehno pričakovanje. Ko spoznamo, da ne obstajamo kot ločena oseba, temveč se življenje skozi nas odvija spontano in brez napora, vsi notranji konflikti odpadejo. Ostane le globok mir in prepoznanje tistega dela nas, ki je vedno tukaj in se nikoli ne spreminja.
          </p>
          <p className="font-medium text-zen-800">
            Ne iščemo nove "resnice", ampak odpremo možnost, da uzrete to, kar je že zdaj tukaj – pod pogojevanji, pod identiteto, pod potrebo, da bi se morali "popraviti". Takrat začnemo živeti življenje iz te globalne odprtosti.
          </p>
        </div>
      )
    },
    terapija: {
      title: "Individualna terapija (1:1)",
      content: (
        <div className="space-y-6 text-zen-600 font-light leading-relaxed">
          <div className="bg-zen-50 p-6 rounded-xl border border-zen-100 mb-6">
            <p className="text-zen-800 m-0">
              Da se vključite v individualno terapijo, je prvi korak brezplačni uvodni klic, kjer preveriva vašo trenutno situacijo in ali je ta način dela za vas primeren. Ta klic je namenjen jasnosti in varnosti – za vas in za proces.
            </p>
          </div>
          <p>
            To niso klasična osebna srečanja, kjer bi zgolj analizirali vaše vzorce in preteklost. Skupaj ustvariva varen prostor, v katerem se premaknemo onkraj uma in vstopimo v direkten Proces utelešene prisotnosti. Namesto da bi stiske poskušali zgolj "razumeti", jim dovolimo, da se v telesu in živčnem sistemu končno prepoznajo, občutijo in sprostijo.
          </p>
          <div>
            <h4 className="font-serif text-xl text-zen-900 mb-2">Za koga so srečanja namenjena?</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Za posameznike, ki se soočajo z anksioznostjo, čustvenimi stiskami ali specifičnimi življenjskimi izzivi.</li>
              <li>Za tiste, ki čutijo, da so obtičali v istih vzorcih trpljenja in so utrujeni od nenehnega analiziranja samih sebe.</li>
              <li>Za vse, ki so pripravljeni stopiti iz glave v telo in poiskati trajno, jedrno razrešitev.</li>
            </ul>
          </div>
        </div>
      )
    },
    sola_prisotnosti: {
      title: "ŠOLA: Proces utelešene prisotnosti (v živo)",
      content: (
        <div className="space-y-6 text-zen-600 font-light leading-relaxed">
          <p>
            Intenziven program, ki poteka izključno v živo. Namenjen je tistim, ki želijo poglobljeno delati na sebi, in tistim, ki želijo ta edinstven terapevtski pristop integrirati v svoje delo z ljudmi. Skozi močne praktične demonstracije in vaje med učenci se korak za korakom učimo, kako varno prehajati iz osebnega transa trpljenja v neosebni trans čistega bivanja.
          </p>
          <div>
            <h4 className="font-serif text-xl text-zen-900 mb-2">Za koga je šola namenjena?</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Za iskalce lastne svobode:</strong> Za vse, ki želijo korenito pomagati sebi in ponotranjiti globok mir skozi neposredno izkušnjo, ne le teorijo.</li>
              <li><strong>Za terapevte in coache:</strong> Za tiste, ki želijo pomagati drugim iz prostora resnične, utelešene prisotnosti, kjer terapevt ne prevzema bremen klienta in ne izgoreva.</li>
              <li><strong>Za ljubitelje prakse:</strong> Za vse, ki želijo pridobiti globoko, izkustveno znanje metode skozi živo delo, opazovanje in takojšnjo povratno informacijo.</li>
            </ul>
          </div>
        </div>
      )
    },
    sest_tedenski: {
      title: "6-tedenski mentorski program (Zoom)",
      content: (
        <div className="space-y-6 text-zen-600 font-light leading-relaxed">
          <div className="bg-zen-50 p-6 rounded-xl border border-zen-100 mb-6">
            <h4 className="font-serif text-lg text-zen-900 mb-2 uppercase tracking-wider">Namen programa</h4>
            <p className="text-zen-800">
              Po zaključenem 6 tedenskem programu boste imeli dovolj znanja in izkušenj, kako sami predelati in priti v stik z potlačenimi občutki in jim dovoliti, da se izrazijo in tako občutite še več odprtosti, svobode in notranjega miru.
            </p>
          </div>
          <p>
            Poglobljen program, ki poteka v živo preko spleta in vam omogoča varno, korenito preobrazbo kar iz udobja vašega doma. V šestih tednih ne ostajamo pri teoriji, temveč se neposredno dotaknemo vaših ključnih življenjskih vprašanj. Izjemna vrednost tega programa je, da znotraj varnega prostora skupine vsak udeleženec prejme osebno terapijo oziroma demonstracijo procesa, kar omogoča globoko učenje in takojšnje olajšanje.
          </p>
          <div>
            <h4 className="font-serif text-xl text-zen-900 mb-2">Za koga je program namenjen?</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Za tiste, ki so pripravljeni na globoko delo na sebi:</strong> Za posameznike, ki želijo narediti resničen, trajen premik in so utrujeni od zgolj branja knjig ter poslušanja predavanj.</li>
              <li><strong>Za razrešitev ujetosti v telesu:</strong> Za vse, ki čutijo nemir, anksioznost ali ujetost v lastnem živčnem sistemu in potrebujejo varen prostor za sprostitev teh napetosti.</li>
              <li><strong>Za udobje in varnost:</strong> Za tiste, ki se najlažje odprejo in predelujejo svoja jedrna čustva v varnem domačem okolju.</li>
            </ul>
          </div>
        </div>
      )
    },
    kashmirska_joga: {
      title: "Kashmirska Joga",
      content: (
        <div className="space-y-6 text-zen-600 font-light leading-relaxed">
          <p>
            Nežno raziskovanje telesa skozi gib in dih, popolnoma brez ciljev in pričakovanj – zgolj slavljenje življenja v tem trenutku. V tej praksi telo prenehamo dojemati kot zgolj trden fizičen objekt. Začnemo ga doživljati kot živo občutenje, vibracijo in odprt prostor, daleč onkraj naših vsakodnevnih misli, idej in konceptov.
          </p>
          <div>
            <h4 className="font-serif text-xl text-zen-900 mb-2">Za koga je joga namenjena?</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Za tiste, ki želijo izpustiti kontrolo:</strong> Za vse, ki so utrujeni od nenehnega nadzora in želijo izkusiti svobodno gibanje brez vsiljevanja notranjega nadzornika ali iskanja "popolne forme".</li>
              <li><strong>Za sproščanje globokih napetosti:</strong> Za posameznike, ki v telesu nosijo stres in želijo skozi nežen dih sprostiti ujetost v živčnem sistemu.</li>
              <li><strong>Za pristen stik s seboj:</strong> Za vse, ki se želijo vrniti v telo in ga ponovno izkusiti kot varen, odprt in sprejemajoč prostor.</li>
            </ul>
          </div>
        </div>
      )
    },
    satsang: {
      title: "Satsang in nedualna učenja",
      content: (
        <div className="space-y-6 text-zen-600 font-light leading-relaxed">
          <h3 className="text-xl font-medium text-zen-800">Srečanja v resnici - direktna pot</h3>
          <p>
            Satsang prinaša spontano in neposredno nedualno učenje iz osebne izkušnje, brez vnaprejšnje priprave. Njegov namen je končanje psihološkega trpljenja, ki ga ustvarjata naš osebni ego in nenehno pričakovanje. Ko spoznamo, da ne obstajamo kot ločena oseba, temveč se življenje skozi nas odvija spontano in brez napora, vsi notranji konflikti odpadejo. Ostane le globok mir in prepoznanje tistega dela nas, ki je vedno tukaj in se nikoli ne spreminja.
          </p>
          <div>
            <h4 className="font-serif text-xl text-zen-900 mb-2">Komu je ta pot namenjena?</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Za konec iluzij:</strong> Za tiste, ki so pripravljeni opustiti iluzijo ločenosti in prenehati z izčrpavajočim projektom ustvarjanja "boljšega jaza".</li>
              <li><strong>Za življenje v odprtosti:</strong> Za vse, ki želijo prenehati bežati pred življenjem in ga končno zaživeti iz prostora globalne odprtosti, popolnega sprejemanja in resničnega miru.</li>
              <li><strong>Za opuščanje nadzora:</strong> Za posameznike, ki želijo varno raziskati svoja prepričanja in nežno spustiti potrebo po nenehni kontroli nad življenjem.</li>
            </ul>
          </div>
        </div>
      )
    },
    dogodki: {
      title: "Dogodki",
      content: (
        <div className="space-y-6 text-zen-600 font-light leading-relaxed">
          <p>
            Nudim različne dogodke, ki podpirajo vašo pot do notranjega miru in utelešene prisotnosti. Od rednih satsangov in delavnic, do poglobljene šole in mentorskega programa.
          </p>
          <p>
            Pridružite se lahko večdnevnim srečanjem, intenzivnim dogodkom na Rogli za globoko delo na sebi, ali pa se vključite v večmesečno prakso Kashmirske joge, ki poteka vsak teden. Vsak dogodek je ustvarjen z namenom, da vam ponudi varen prostor za raziskovanje, spuščanje starih vzorcev in neposredno izkušnjo resnice.
          </p>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-zen-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zen-50/80 backdrop-blur-md zen-border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => setCurrentPage('home')} className="font-serif text-xl tracking-wide uppercase">TIHA PRISOTNOST</button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase relative">
            <a href="#pristop" className="hover:text-zen-500 transition-colors">Pristop</a>
            
            {/* Dropdown for Učenja */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-zen-500 transition-colors py-2">
                Učenja <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-xl zen-border rounded-sm py-4 flex flex-col z-50"
                  >
                    <button onClick={() => { setCurrentPage('individualna-terapija'); setIsDropdownOpen(false); window.scrollTo(0,0); }} className="text-left px-6 py-3 hover:bg-zen-50 hover:text-zen-600 transition-colors">Individualna terapija</button>
                    <button onClick={() => openModal('sola')} className="text-left px-6 py-3 hover:bg-zen-50 hover:text-zen-600 transition-colors">Šola</button>
                    <button onClick={() => openModal('program')} className="text-left px-6 py-3 hover:bg-zen-50 hover:text-zen-600 transition-colors">6 Tedenski Program</button>
                    <button onClick={() => openModal('joga')} className="text-left px-6 py-3 hover:bg-zen-50 hover:text-zen-600 transition-colors">Joga</button>
                    <button onClick={() => openModal('nedualnost')} className="text-left px-6 py-3 hover:bg-zen-50 hover:text-zen-600 transition-colors">Nedualnost</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown for Dogodki */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsCalendarDropdownOpen(true)}
              onMouseLeave={() => setIsCalendarDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-zen-500 transition-colors py-2">
                Dogodki <ChevronDown size={14} className={`transition-transform duration-300 ${isCalendarDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isCalendarDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-xl zen-border rounded-sm py-4 flex flex-col z-50"
                  >
                    <button onClick={() => { setCurrentPage('dogodki'); setIsCalendarDropdownOpen(false); window.scrollTo(0,0); }} className="text-left px-6 py-3 hover:bg-zen-50 hover:text-zen-600 transition-colors font-medium border-b border-zen-300">Vsi dogodki</button>
                    <div className="px-6 py-2 text-xs text-zen-400 uppercase tracking-widest mt-2">Koledar dogodkov</div>
                    <button onClick={() => setActiveCalendar('vsi')} className="text-left px-6 py-3 hover:bg-zen-50 hover:text-zen-600 transition-colors font-medium">Vsi dogodki</button>
                    <button onClick={() => setActiveCalendar('joga')} className="text-left px-6 py-3 hover:bg-zen-50 hover:text-zen-600 transition-colors">Joga</button>
                    <button onClick={() => setActiveCalendar('sola')} className="text-left px-6 py-3 hover:bg-zen-50 hover:text-zen-600 transition-colors">Šola</button>
                    <button onClick={() => setActiveCalendar('nedualnost')} className="text-left px-6 py-3 hover:bg-zen-50 hover:text-zen-600 transition-colors">Nedualna učenja</button>
                    <button onClick={() => setActiveCalendar('program')} className="text-left px-6 py-3 hover:bg-zen-50 hover:text-zen-600 transition-colors">6-tedenski program</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => { setCurrentPage('o-alexu'); window.scrollTo(0,0); }} className="hover:text-zen-500 transition-colors uppercase">O Alexu</button>
            <a href="#kontakt" className="hover:text-zen-500 transition-colors">Kontakt</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-zen-50 pt-24 px-6 flex flex-col overflow-y-auto pb-12"
          >
            <div className="flex flex-col space-y-8 text-2xl font-serif">
              <a href="#pristop" onClick={() => setIsMenuOpen(false)}>Pristop</a>
              
              <div className="flex flex-col space-y-4">
                <span className="text-zen-400 text-lg uppercase tracking-widest font-sans">Učenja</span>
                <button onClick={() => { setCurrentPage('individualna-terapija'); setIsMenuOpen(false); window.scrollTo(0,0); }} className="text-left pl-4 hover:text-zen-500 transition-colors">Individualna terapija</button>
                <button onClick={() => openModal('sola')} className="text-left pl-4 hover:text-zen-500 transition-colors">Šola (v živo)</button>
                <button onClick={() => openModal('program')} className="text-left pl-4 hover:text-zen-500 transition-colors">6 Tedenski Program (Zoom)</button>
                <button onClick={() => openModal('joga')} className="text-left pl-4 hover:text-zen-500 transition-colors">Joga</button>
                <button onClick={() => openModal('nedualnost')} className="text-left pl-4 hover:text-zen-500 transition-colors">Nedualnost</button>
              </div>

              <div className="flex flex-col space-y-4">
                <span className="text-zen-400 text-lg uppercase tracking-widest font-sans">Dogodki</span>
                <button onClick={() => { setCurrentPage('dogodki'); setIsMenuOpen(false); window.scrollTo(0,0); }} className="text-left pl-4 hover:text-zen-500 transition-colors font-medium">Vsi dogodki</button>
                <div className="pl-4 pt-2 text-sm text-zen-400 uppercase tracking-widest font-sans">Koledar dogodkov</div>
                <button onClick={() => { setActiveCalendar('vsi'); setIsMenuOpen(false); }} className="text-left pl-8 hover:text-zen-500 transition-colors font-medium">Vsi dogodki</button>
                <button onClick={() => { setActiveCalendar('joga'); setIsMenuOpen(false); }} className="text-left pl-8 hover:text-zen-500 transition-colors">Joga</button>
                <button onClick={() => { setActiveCalendar('sola'); setIsMenuOpen(false); }} className="text-left pl-8 hover:text-zen-500 transition-colors">Šola</button>
                <button onClick={() => { setActiveCalendar('nedualnost'); setIsMenuOpen(false); }} className="text-left pl-8 hover:text-zen-500 transition-colors">Nedualna učenja</button>
                <button onClick={() => { setActiveCalendar('program'); setIsMenuOpen(false); }} className="text-left pl-8 hover:text-zen-500 transition-colors">6-tedenski program</button>
              </div>

              <button onClick={() => { setCurrentPage('o-alexu'); setIsMenuOpen(false); window.scrollTo(0,0); }} className="text-left hover:text-zen-500 transition-colors uppercase">O Alexu</button>
              <a href="#kontakt" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Calendar Modal Overlay */}
      <AnimatePresence>
        {activeCalendar && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-zen-900/40 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={() => setActiveCalendar(null)}
          >
            <CalendarModal 
              category={activeCalendar} 
              onClose={() => setActiveCalendar(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-zen-900/40 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-zen-50 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-sm shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-zen-400 hover:text-zen-900 transition-colors bg-white rounded-full p-2 shadow-sm"
              >
                <X size={20} />
              </button>
              
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 pr-8 text-zen-900">
                  {modalData[activeModal].title}
                </h2>
                <div className="prose prose-stone max-w-none">
                  {modalData[activeModal].content}
                </div>
                
                <div className="mt-12 pt-8 border-t border-zen-300 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  {(activeModal === 'terapija' || activeModal === 'sest_tedenski') && (
                    <a 
                      href="https://alexmarinkovic.youcanbook.me" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zen-400 text-white text-sm tracking-widest uppercase hover:bg-zen-500 transition-colors w-full sm:w-auto text-center"
                    >
                      Brezplačni uvodni pogovor
                    </a>
                  )}
                  {activeModal === 'sola_prisotnosti' && (
                    <button 
                      onClick={() => {
                        setActiveModal(null);
                        setCurrentPage('sola');
                        window.scrollTo(0, 0);
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zen-400 text-white text-sm tracking-widest uppercase hover:bg-zen-500 transition-colors w-full sm:w-auto text-center"
                    >
                      Izvedi več o šoli
                    </button>
                  )}
                  {activeModal === 'kashmirska_joga' && (
                    <button 
                      onClick={() => {
                        setActiveModal(null);
                        setCurrentPage('joga');
                        window.scrollTo(0, 0);
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zen-400 text-white text-sm tracking-widest uppercase hover:bg-zen-500 transition-colors w-full sm:w-auto text-center"
                    >
                      Izvedi več o jogi
                    </button>
                  )}
                  {activeModal === 'satsang' && (
                    <button 
                      onClick={() => {
                        setActiveModal(null);
                        setCurrentPage('satsang');
                        window.scrollTo(0, 0);
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zen-400 text-white text-sm tracking-widest uppercase hover:bg-zen-500 transition-colors w-full sm:w-auto text-center"
                    >
                      Izvedi več o nedualnosti
                    </button>
                  )}
                  {activeModal === 'dogodki' && (
                    <button 
                      onClick={() => {
                        setActiveModal(null);
                        setCurrentPage('dogodki');
                        window.scrollTo(0, 0);
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zen-400 text-white text-sm tracking-widest uppercase hover:bg-zen-500 transition-colors w-full sm:w-auto text-center"
                    >
                      Izvedi več o dogodkih
                    </button>
                  )}
                  <button 
                    onClick={() => setActiveModal(null)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zen-300 text-zen-600 text-sm tracking-widest uppercase hover:bg-zen-50 transition-colors w-full sm:w-auto text-center"
                  >
                    Zapri
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-zen-200/50 text-zen-800 text-xs tracking-[0.2em] uppercase font-medium">
                ALEKSANDAR MARINKOVIĆ
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl mb-2 leading-tight text-zen-900">
                Iz glave v telo.
              </h1>
              
              <div className="font-cursive text-7xl md:text-8xl lg:text-9xl text-zen-500 mb-8 py-2">
                Iz iluzije v resničnost.
              </div>
              
              <h2 className="text-2xl md:text-3xl font-serif text-zen-800 mb-20 max-w-3xl mx-auto leading-tight">
                Prebujanje iz osebnega transa trpljenja v utelešeno prisotnost.
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                <a 
                  href="https://alexmarinkovic.youcanbook.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-zen-400 text-white text-sm tracking-widest uppercase hover:bg-zen-500 transition-colors"
                >
                  Brezplačni uvodni pogovor
                </a>
                <a 
                  href="#storitve" 
                  className="w-full sm:w-auto px-8 py-4 border border-zen-300 text-zen-600 text-sm tracking-widest uppercase hover:bg-zen-50 transition-colors"
                >
                  Razišči učenja
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach / Intro */}
        <section id="pristop" className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-12">Iz ujetosti v glavi v živo prisotnost</h2>
            <div className="space-y-6 text-zen-600 font-light leading-relaxed text-xl text-left md:text-center">
              <p>
                Moj način dela združuje nedualni uvid, razumevanje psihološkega trpljenja in globoko delo s telesom. Iz varnega prostora vas popeljem naravnost do jedra vaše težave – mimo konceptov, neposredno skozi vaš živčni sistem in zavest.
              </p>
              <p>
                To ni klasična terapija, kjer bi leta in leta analizirali iste življenjske situacije in iskali mentalne odgovore. Prav tako ni tipična "duhovnost", pri kateri bi s pomočjo tehnik bežali pred neprijetnim in zgolj lovili boljša stanja.
              </p>
              <p>
                Je iskreno in direktno delo na sebi, pri katerem ne ostajamo ujeti v glavi in neskončni teoriji. Namesto razmišljanja o preteklosti vas usmerim:
              </p>
              <ul className="list-none space-y-3 inline-block text-left mt-6">
                <li className="flex items-start"><span className="mr-2">•</span> iz glave nazaj v telo,</li>
                <li className="flex items-start"><span className="mr-2">•</span> v direkten stik z jedrnimi ranami in potlačenimi čustvi,</li>
                <li className="flex items-start"><span className="mr-2">•</span> v varno in postopno sproščanje ujetih energij,</li>
                <li className="flex items-start"><span className="mr-2">•</span> v izkušnjo, da niste le vaša osebna zgodba, temveč živa prisotnost.</li>
              </ul>
              <div className="pt-8">
                <h3 className="font-serif text-2xl text-zen-900 mb-4">Za koga je to delo ustvarjeno?</h3>
                <p>
                  Za iskrenega iskalca, ki je utrujen od zgolj "razumevanja samega sebe" in nenehnega vrtenja v istih starih ranah. Za vsakogar, ki ne želi več bežati pred neprijetnim, temveč je končno pripravljen na resničen, globok premik v utelešen mir in tiho notranjo svobodo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Therapy / School Section */}
        <section id="terapija-sola" className="py-24 px-6 bg-[#B8C0BC]/40 text-zen-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Mentorski program in šola</h2>
              <p className="text-zen-600 font-light text-lg max-w-2xl mx-auto">
                Znanje in Proces utelešene prisotnosti predajam v dveh poglobljenih oblikah. Obe poti temeljita na intenzivnem delu na sebi in praktičnih vajah, izberete pa tisto, ki najbolj resonira z vašim trenutnim namenom:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {/* Mentorski program */}
              <div className="border border-zen-300 rounded-2xl bg-white flex flex-col h-full shadow-sm overflow-hidden group">
                <div className="h-56 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=800&auto=format&fit=crop" 
                    alt="Ženska na Zoom klicu v udobju doma" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-serif mb-8 text-zen-900 border-b border-zen-300 pb-4">Mentorski program</h3>
                
                <div className="space-y-8 flex-grow">
                  <div>
                    <h4 className="text-xl font-medium text-zen-900 mb-2 tracking-wide">6-tedenski skupinski mentorski program (Zoom)</h4>
                    <p className="text-zen-600 font-light leading-relaxed">
                      Za 8–10 ljudi. To je varen prostor za vašo lastno razrešitev in stik s telesom. Program poteka v obliki skupinskih srečanj v živo preko Zooma, kjer vas skozi šest tednov vodim od ujetosti v umu do neposrednega občutenja, predelave jedrnih ran in spuščanja starih vzorcev. Delo v skupini je izjemno učinkovito in ima številne prednosti za vas.
                    </p>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-zen-300">
                  <button onClick={() => {
                    setCurrentPage('mentorski-program');
                    window.scrollTo(0, 0);
                  }} className="inline-flex items-center text-sm tracking-widest uppercase text-zen-500 hover:text-zen-900 transition-colors">
                    Več o mentorstvu <span className="ml-2">→</span>
                  </button>
                </div>
                </div>
              </div>

              {/* Šola */}
              <div className="border border-zen-300 rounded-2xl bg-white flex flex-col h-full shadow-sm overflow-hidden group">
                <div className="h-56 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop" 
                    alt="Skupina ljudi, ki posluša učitelja" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-serif mb-8 text-zen-900 border-b border-zen-300 pb-4">Šola</h3>
                
                <div className="space-y-8 flex-grow">
                  <div>
                    <h4 className="text-xl font-medium text-zen-900 mb-2 tracking-wide">Intenziven program: Proces utelešene prisotnosti</h4>
                    <p className="text-zen-600 font-light leading-relaxed">
                      Šola ni zasnovana izključno za bodoče terapevte, ki želijo to metodo predajati naprej. Odprta je tudi za vse, ki si želite najintenzivnejšega dela na sebi. Skozi poglobljeno teorijo, napredno izpraševanje in močne praktične vaje v živo boste proces popolnoma ponotranjili – bodisi za lastno svobodo bodisi za strokovno delo z drugimi.
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-zen-300">
                  <button onClick={() => {
                    setCurrentPage('sola');
                    window.scrollTo(0, 0);
                  }} className="inline-flex items-center text-sm tracking-widest uppercase text-zen-500 hover:text-zen-900 transition-colors">
                    Več o šoli <span className="ml-2">→</span>
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Joga / Satsang Section */}
        <section id="joga-satsang" className="py-24 px-6 bg-[#B8C0BC]/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-zen-900 mb-4">Joga in Nedualna učenja</h2>
              <p className="text-zen-600 font-light text-lg max-w-2xl mx-auto">
                Raziskovanje telesa in zavesti skozi gib, dih in poglobljeno izpraševanje.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {/* Joga */}
              <div className="border border-zen-300 rounded-2xl bg-white flex flex-col h-full shadow-sm overflow-hidden group">
                <div className="h-56 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop" 
                    alt="Joga iz Kashmirske tradicije" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-serif mb-8 text-zen-900 border-b border-zen-300 pb-4">Joga iz Kashmirske tradicije</h3>
                
                <div className="space-y-8 flex-grow">
                  <div>
                    <h4 className="text-xl font-medium text-zen-800 mb-2 tracking-wide">Raziskovanje resničnega telesa</h4>
                    <p className="text-zen-600 font-light leading-relaxed">
                      To ni klasična vadba za doseganje večje telesne prožnosti ali izpolnjevanje form. Je globoko usmerjanje k raziskovanju telesa onkraj naših misli in naučenih konceptov o tem, kdo smo. Gibamo se brez vnaprej določenih ciljev in pričakovanj – gre zgolj za čisto slavljenje življenja in neposredno izkušnjo prisotnosti v tem trenutku.
                    </p>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-zen-300">
                  <button onClick={() => {
                    setCurrentPage('joga');
                    window.scrollTo(0, 0);
                  }} className="inline-flex items-center text-sm tracking-widest uppercase text-zen-500 hover:text-zen-900 transition-colors">
                    Več o jogi <span className="ml-2">→</span>
                  </button>
                </div>
                </div>
              </div>

              {/* Satsang */}
              <div className="border border-zen-300 rounded-2xl bg-white flex flex-col h-full shadow-sm overflow-hidden group">
                <div className="h-56 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop" 
                    alt="Calm water and sky" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-serif mb-8 text-zen-900 border-b border-zen-300 pb-4">Satsang (Nedualnost)</h3>
                
                <div className="space-y-8 flex-grow">
                  <div>
                    <h4 className="text-xl font-medium text-zen-800 mb-2 tracking-wide">Srečanje v brezčasni odprtosti</h4>
                    <p className="text-zen-600 font-light leading-relaxed">
                      Satsang prinaša spontano in neposredno nedualno učenje iz osebne izkušnje, brez vnaprejšnje priprave. Njegov namen je končanje psihološkega trpljenja, ki ga ustvarjata naš osebni ego in nenehno pričakovanje. Ko spoznamo, da ne obstajamo kot ločena oseba, temveč se življenje skozi nas odvija spontano in brez napora, vsi notranji konflikti odpadejo. Ostane le globok mir in prepoznanje tistega dela nas, ki je vedno tukaj in se nikoli ne spreminja.
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-zen-300">
                  <button onClick={() => {
                    setCurrentPage('satsang');
                    window.scrollTo(0, 0);
                  }} className="inline-flex items-center text-sm tracking-widest uppercase text-zen-500 hover:text-zen-900 transition-colors">
                    Več o satsangu <span className="ml-2">→</span>
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Quiz Section */}
        <section className="px-6 bg-white py-12">
          <ServiceQuiz />
        </section>

        {/* Services Section */}
        <section id="storitve" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-zen-900 mb-4">Kaj nudim</h2>
              <p className="text-zen-500 font-sans font-light text-lg tracking-wide">
                Učenja do notranjega miru in prisotnosti
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Card 1 */}
              <div 
                className="bg-zen-200/50 rounded-2xl p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => openModal('terapija')}
              >
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-zen-900 mb-4">Individualna terapija (1:1)</h3>
                <p className="text-zen-500 font-sans font-light leading-relaxed">
                  Skupaj ustvariva varen prostor, v katerem se premaknemo onkraj uma in vstopimo v direkten Proces utelešene prisotnosti.
                </p>
              </div>

              {/* Card 2 */}
              <div 
                className="bg-zen-200/50 rounded-2xl p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => openModal('sola_prisotnosti')}
              >
                <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-8">
                  <BookOpen className="w-6 h-6 text-stone-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-zen-900 mb-4">ŠOLA: Proces utelešene prisotnosti (v živo)</h3>
                <p className="text-zen-500 font-sans font-light leading-relaxed">
                  Intenziven program v živo za tiste, ki želijo delati na sebi ali pomagati drugim skozi metodo utelešene prisotnosti.
                </p>
              </div>

              {/* Card 3 */}
              <div 
                className="bg-zen-200/50 rounded-2xl p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => openModal('sest_tedenski')}
              >
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-zen-900 mb-4">6-tedenski mentorski program (Zoom)</h3>
                <p className="text-zen-500 font-sans font-light leading-relaxed">
                  Poglobljen program preko spleta, ki vam omogoča varno, korenito preobrazbo kar iz udobja vašega doma.
                </p>
              </div>

              {/* Card 4 */}
              <div 
                className="bg-zen-200/50 rounded-2xl p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => openModal('kashmirska_joga')}
              >
                <div className="w-12 h-12 rounded-full bg-zen-200/50 flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-zen-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-zen-900 mb-4">Kashmirska Joga</h3>
                <p className="text-zen-500 font-sans font-light leading-relaxed">
                  Nežno raziskovanje telesa skozi gib in dih, popolnoma brez ciljev in pričakovanj – zgolj slavljenje življenja.
                </p>
              </div>

              {/* Card 5 */}
              <div 
                className="bg-zen-200/50 rounded-2xl p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => openModal('satsang')}
              >
                <div className="w-12 h-12 rounded-full bg-zen-200/50 flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-zen-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-zen-900 mb-4">Satsang in nedualna učenja</h3>
                <p className="text-zen-500 font-sans font-light leading-relaxed">
                  Prostor tišine in neposrednega dialoga. Iskreno izpraševanje prepričanj z namenom prepoznave naše prave narave.
                </p>
              </div>

              {/* Card 6 */}
              <div 
                className="bg-zen-200/50 rounded-2xl p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => openModal('dogodki')}
              >
                <div className="w-12 h-12 rounded-full bg-zen-200/50 flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-zen-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-zen-900 mb-4">Dogodki</h3>
                <p className="text-zen-500 font-sans font-light leading-relaxed">
                  Različni dogodki, ki podpirajo vašo pot do notranjega miru in utelešene prisotnosti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Two Paths Section */}
        <section id="ucenja" className="py-32 px-6 relative overflow-hidden bg-white">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-zen-900 mb-16 uppercase tracking-widest">Izberi svojo pot</h2>
            
            {/* The Quote */}
            <div className="relative inline-block mb-12 px-8 md:px-16">
              <span className="absolute -top-4 left-0 text-6xl md:text-7xl text-zen-300/30 font-serif leading-none">"</span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-zen-600 leading-tight relative z-10">
                OBA PRISTOPA STA LE DVE STRANI ISTEGA KOVANCA!
              </h3>
              <span className="absolute -bottom-8 right-0 text-6xl md:text-7xl text-zen-300/30 font-serif leading-none">"</span>
            </div>
            
            <p className="text-lg md:text-xl text-zen-600 font-light leading-relaxed max-w-3xl mx-auto mb-20">
              Terapevtski pristop in nedualnost nista ločena svetova. Sta dva načina raziskovanja iste resnice, ki se med seboj dopolnjujeta in podpirata.
            </p>

            {/* New Layout Below */}
            <div className="text-center border-t border-zen-300 pt-16 max-w-3xl mx-auto">
              <h4 className="text-2xl font-serif text-zen-900 mb-4">Terapija pripravi telo, nedualnost prepozna resnico</h4>
              <p className="text-zen-600 font-light leading-relaxed">
                Skozi terapevtski pristop ustvarjamo varnost v živčnem sistemu. Ko sprostimo potlačena čustva in travme, telo postane pretočno. To ni popravljanje sebe, temveč odstranjevanje ovir, ki nam preprečujejo čutiti življenje v polnosti . Ko se sprostijo določene travme in ujetosti se odpremo globji resnici, ki je onkraj pogojevanj, ki smo jih pridobili v tem življenju. Ko občutimo, da ni potrebno več razreševati, takrat smo pripravljeni da bi spoznali kdo smo v svoji esenci. To nas kasneje vodi, do nedualnega prepoznanja, ki je ultimatna resnica našega nenapornega bivanja in iskanje se zaključi.
              </p>
            </div>
            
            <div className="mt-16 text-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }} 
                className="inline-flex items-center justify-center px-8 py-4 bg-zen-400 text-white rounded-full hover:bg-zen-500 transition-colors tracking-widest text-sm uppercase shadow-sm"
              >
                Rezerviraj brezplačni uvodni posvet
              </button>
            </div>
          </div>
        </section>
          </>
        )}

        {currentPage === 'mentorski-program' && (
          <MentorskiProgram onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'sola' && (
          <Sola onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'joga' && (
          <Joga onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'satsang' && (
          <Satsang onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'pogoji' && (
          <PogojiPoslovanja onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'omejitev-odgovornosti' && (
          <OmejitevOdgovornosti onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'dogodki' && (
          <Dogodki 
            onBack={() => setCurrentPage('home')} 
            onNavigate={(page: any) => {
              setCurrentPage(page);
              window.scrollTo(0, 0);
            }}
          />
        )}

        {currentPage === 'o-alexu' && (
          <OAlexu onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'individualna-terapija' && (
          <IndividualnaTerapija onBack={() => setCurrentPage('home')} />
        )}

      </main>

      {/* Footer */}
      <footer id="kontakt" className="bg-[#B8C0BC]/40 text-zen-900 py-20 px-6 border-t border-[#B8C0BC]/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl text-zen-900 mb-6">Alex Marinković</h2>
            <p className="font-light max-w-sm mb-8 text-zen-800">
              Proces utelešene prisotnosti. Iz stalnega premlevanja v več miru, povezanosti in resnične prisotnosti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsKontaktModalOpen(true)}
                className="inline-block border border-zen-900 text-zen-900 px-6 py-3 text-sm tracking-widest uppercase hover:bg-zen-900 hover:text-white transition-colors text-center"
              >
                Kontaktiraj me
              </button>
              <a 
                href="https://alexmarinkovic.youcanbook.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-zen-900 text-zen-900 px-6 py-3 text-sm tracking-widest uppercase hover:bg-zen-900 hover:text-white transition-colors text-center"
              >
                REZERVIRAJ UVODNI POGOVOR
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex space-x-6 mb-12 md:mb-0">
              <a href="https://www.facebook.com/coabalboa" target="_blank" rel="noopener noreferrer" className="text-zen-800 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.instagram.com/alextherapies1/" target="_blank" rel="noopener noreferrer" className="text-zen-800 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.youtube.com/@alextajga" target="_blank" rel="noopener noreferrer" className="text-zen-800 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} strokeWidth={1.5} />
              </a>
            </div>
            
            <div className="text-sm font-light flex flex-col md:items-end space-y-2 text-zen-800">
              <button 
                onClick={() => {
                  setCurrentPage('pogoji');
                  window.scrollTo(0, 0);
                }} 
                className="hover:text-white transition-colors text-right"
              >
                Pogoji poslovanja in plačilni pogoji
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('omejitev-odgovornosti');
                  window.scrollTo(0, 0);
                }} 
                className="hover:text-white transition-colors text-right uppercase tracking-widest text-xs"
              >
                OMEJITEV ODGOVORNOSTI
              </button>
              <p>&copy; {new Date().getFullYear()} Aleksandar Marinković. Vse pravice pridržane.</p>
            </div>
          </div>
        </div>
      </footer>

      <KontaktModal isOpen={isKontaktModalOpen} onClose={() => setIsKontaktModalOpen(false)} />
      <AiAssistant />
    </div>
  );
}
