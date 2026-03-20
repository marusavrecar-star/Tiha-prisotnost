import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "O sebi, svojih vzorcih in otroštvu razumem že ogromno, a se v resničnem življenju še vedno znova ujamem v iste sprožilce, rane in notranje boje."
  },
  {
    id: 2,
    text: "Velik del dneva preživim v glavi; nenehno analiziram, kaj je prav, kaj narobe in kaj bi \"moral/a\", ob tem pa ne čutim pravega, živega stika s svojim telesom."
  },
  {
    id: 3,
    text: "Prebral/a sem veliko knjig, obiskal/a terapije ali meditacijske umike, pa še vedno ne najdem resničnega miru. Ne iščem več \"tehnik\", ampak želim priti do jedra."
  },
  {
    id: 4,
    text: "Globoko v sebi čutim, da tako, kot delujem in živim zdaj, preprosto ne morem in ne želim več iti naprej."
  },
  {
    id: 5,
    text: "Sem iskren/a iskalec/iskalka in sem pripravljen/a prevzeti popolno odgovornost za svoje življenje ter pogledati vase brez \"duhovnega olepševanja\" in igranja vlog."
  },
  {
    id: 6,
    text: "Sem odprt/a za to, da v varnem prostoru stopim izven cone udobja in se dotaknem tistega, kar me je bilo do zdaj morda preveč strah pogledati (ujeti energijski vozli v telesu)."
  }
];

export default function ServiceQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleStart = () => {
    setIsOpen(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowEmailForm(false);
    setShowResult(false);
    setEmail('');
    setSubmitError(null);
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowEmailForm(true);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    const score = getTotalScore();
    const result = getResultContent();

    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          score,
          resultTitle: result.title,
          answers
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Prišlo je do napake pri povezavi.');
      }

      setShowEmailForm(false);
      setShowResult(true);
    } catch (error) {
      console.error('Quiz submission error:', error);
      setSubmitError(`Napaka: ${error instanceof Error ? error.message : 'Neznana napaka'}. Preverite Mailchimp nastavitve.`);
      // Still show result after a longer delay if it fails, so user gets their value but sees the error
      setTimeout(() => {
        setShowEmailForm(false);
        setShowResult(true);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTotalScore = () => answers.reduce((a, b) => a + b, 0);

  const getResultContent = () => {
    const score = getTotalScore();
    if (score >= 6 && score <= 14) {
      return {
        title: "Raziskovalec uma",
        text: (
          <>
            <p className="mb-4">
              Kaže, da vam trenutno še vedno najbolj ustreza raziskovanje skozi intelekt, branje in mentalno razumevanje sebe. Morda še niste povsem pripravljeni na direkten stik z neprijetnimi občutki in spuščanje nadzora v telesu.
            </p>
            <p className="mb-4">
              Proces utelešene prisotnosti je direkten pristop, ki zahteva izstop iz cone analiziranja, zato v tem trenutku za vas morda (še) ni najboljša izbira. Vabim vas, da raziskujete naprej v svojem tempu in preizkusite nežnejši pristop kot je Joga iz Kashmirske tradicije.
            </p>
            <p className="font-medium mb-6">
              Vaš naslednji korak: Prijavite se na moje e-novičke za občasne usmeritve in obvestilo o izidu moje knjige, ali pa preverite prihajajoča srečanja Joge iz Kashmirske tradicije.
            </p>
          </>
        ),
        actionText: "Prijava na e-novice / Joga",
        actionLink: "http://eepurl.com/hY1_tP" // Replace with actual Mailchimp link
      };
    } else if (score >= 15 && score <= 22) {
      return {
        title: "Na prelomnici",
        text: (
          <>
            <p className="mb-4">
              Začenjate spoznavati, da vas samo razumevanje lastnih travm ne bo pripeljalo do prave svobode. Vaš um je utrujen, telo pa kliče po pozornosti. Ste v idealni fazi, da začnete spuščati nadzor glave in varno raziskovati, kaj se skriva pod vašimi prepričanji.
            </p>
            <p className="font-medium mb-6">
              Vaš naslednji korak: Čas je, da teorijo prenesete v izkušnjo. Pridružite se mojim Skupinskim srečanjem, šoli ali pa obiščite enega od prihajajočih dogodkov, kjer boste spoznali razliko med razmišljanjem o težavi in dejanskim raztapljanjem napetosti v telesu.
            </p>
          </>
        ),
        actionText: "Prijava na e-novice",
        actionLink: "http://eepurl.com/hY1_tP" // Replace with actual Mailchimp link
      };
    } else {
      return {
        title: "Popolnoma pripravljeni",
        text: (
          <>
            <p className="mb-4">
              Dosegli ste točko preobrata. Nobena teorija, analiza ali meditacijska tehnika vas ne prepriča več. Ste iskreni do sebe, naveličani vrtenja v istih zgodbah in popolnoma pripravljeni, da greste mimo konceptov direktno do jedra. Vaša želja po resnici je močnejša od strahu pred soočenjem z lastno rano.
            </p>
            <p className="font-medium mb-6">
              Vaš naslednji korak: Ne izgubljajva več časa z analizo in "zgodbami". Za 6 tedenski program Proces utelešene prisotnosti ali pa nedualna učenja – skupaj bova šla direktno do ujetega energijskega jedra.
            </p>
          </>
        ),
        actionText: "Prijava na e-novice",
        actionLink: "http://eepurl.com/hY1_tP" // Replace with actual Mailchimp link
      };
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 rounded-3xl my-12 text-center max-w-4xl mx-auto shadow-sm border border-zen-300">
      {!isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
            <Sparkles className="w-6 h-6 text-zen-400" />
          </div>
          <h3 className="text-3xl md:text-4xl font-serif text-zen-900 leading-tight">
            Odkrijte, ali ste pripravljeni na resničen premik: Iz ujetosti v glavi v utelešeno prisotnost
          </h3>
          <div className="text-zen-600 max-w-2xl mx-auto text-lg space-y-4">
            <p>
              Dobrodošli. Ste utrujeni od zgolj "razumevanja" samega sebe in iskanja novih duhovnih tehnik?
            </p>
            <p>
              Rešite ta kratek vprašalnik (vzel vam bo manj kot 2 minuti) in preverite, ali ste pripravljeni na globok preobrat – iz nenehnega analiziranja svojih vzorcev v resničen stik s telesom in pristnim notranjim mirom.
            </p>
            <p className="font-medium">
              Za vsako od spodnjih trditev izberite, kako močno velja za vas. Bodite iskreni do sebe.
            </p>
          </div>
          <button
            onClick={handleStart}
            className="mt-8 inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-zen-400 hover:bg-zen-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zen-400 transition-colors duration-300"
          >
            Izpolni vprašalnik in pridobi rezultate!
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
        </motion.div>
      ) : showEmailForm ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center space-y-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zen-300"
        >
          <h4 className="text-2xl font-serif text-zen-900">Želiš izvedeti rezultat?</h4>
          <p className="text-zen-600">Vpišite svoj e-poštni naslov za prikaz vašega osebnega rezultata.</p>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <input
              type="email"
              required
              disabled={isSubmitting}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Vaš e-poštni naslov"
              className="w-full px-4 py-3 border border-zen-300 rounded-lg focus:ring-2 focus:ring-zen-400 focus:border-transparent outline-none transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex justify-center items-center px-8 py-4 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-zen-400 hover:bg-zen-500 transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Povezovanje...
                </span>
              ) : (
                "Prijavi se na e-novičke in pridobi rezultate vprašalnika"
              )}
            </button>
            {submitError && (
              <p className="text-red-500 text-sm mt-2">{submitError}</p>
            )}
          </form>
        </motion.div>
      ) : showResult ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zen-300"
        >
          <div className="w-20 h-20 bg-zen-50 rounded-full flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 className="w-10 h-10 text-zen-800" />
          </div>
          
          <div className="space-y-2">
            <h4 className="text-3xl md:text-4xl font-serif text-zen-900">{getResultContent().title}</h4>
          </div>

          <div className="bg-zen-50 p-6 rounded-xl text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-zen-300"></div>
            <div className="text-zen-700 text-lg leading-relaxed">
              {getResultContent().text}
            </div>
          </div>

          <div className="pt-8 flex justify-center">
            <button
              onClick={handleStart}
              className="inline-flex items-center justify-center px-12 py-4 border border-zen-300 text-base font-medium rounded-full text-zen-700 bg-white hover:bg-zen-50 transition-colors duration-300"
            >
              Ponovno reši test
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="max-w-2xl mx-auto text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-center text-sm font-medium text-zen-500 mb-4">
                <span>Vprašanje {currentQuestion + 1} od {questions.length}</span>
                <span>{Math.round(((currentQuestion) / questions.length) * 100)}%</span>
              </div>
              
              <h4 className="text-2xl font-serif text-zen-900 mb-2 leading-relaxed">
                {questions[currentQuestion].text}
              </h4>
              <p className="text-zen-500 text-sm mb-8">
                Ocenite trditev na lestvici od 1 do 5.<br/>
                (1 = Sploh ne drži zame / 5 = Popolnoma drži zame)
              </p>

              <div className="flex justify-between items-center gap-2 sm:gap-4">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(value)}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-zen-300 text-zen-600 text-xl font-medium hover:border-zen-400 hover:bg-zen-50 hover:text-zen-900 transition-all duration-200 flex items-center justify-center"
                  >
                    {value}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-xs text-zen-400 mt-2 px-2">
                <span>Sploh ne drži</span>
                <span>Popolnoma drži</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
