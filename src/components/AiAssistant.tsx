import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const getAi = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn('GEMINI_API_KEY is not defined. AI Assistant will be disabled.');
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

const ai = getAi();

const SYSTEM_INSTRUCTION = `
Ti si prijazen, miren in sočuten AI asistent na spletni strani Alexa Marinkovića (Tiha prisotnost).
Tvoja naloga je pomagati obiskovalcem razumeti, kaj Alex dela, in jih usmeriti k pravemu programu zanje.

Ključne informacije o Alexovem delu:
1. Mentorski program: Proces utelešene prisotnosti (Zoom):
- Za koga: Za ljudi, ki si želijo korenite spremembe in so pripravljeni na globoko raziskovanje v udobju svojega doma. Za tiste, ki že veliko razumejo o sebi (vzorce, otroštvo, travme), a so obstali v glavi, v istih sprožilcih in notranjem boju.
- Kaj je to: 6-tedenski program, ki poteka preko Zooma. Vključuje odpiranje različnih vprašanj in individualno terapijo/demonstracijo za vsakega udeleženca. Cilj je razrešiti ujetost v živčnem sistemu in telesu.
- Kako začeti: Vstop v program se začne s 30-minutnim brezplačnim uvodnim klicem.

2. Šola: Proces utelešene prisotnosti (v živo):
- Za koga: Za vse, ki si želijo intenzivnega dela na sebi, ne le za terapevte. Za tiste, ki želijo poglobiti znanje metode utelešene prisotnosti za pomoč sebi in drugim.
- Kaj je to: Intenzivna šola, ki poteka v živo. Vključuje demonstracije z Alexom in vaje med učenci. Uči napredno pogovorno hipnoterapijo in prehod iz osebnega transa trpljenja v neosebni trans bivanja.
- Detajli: Šola poteka ob vikendih (v živo). Cena je 1650 EUR. Vključuje dostop do zaprte Facebook skupine za podporo.

3. Joga, Satsang in Nedualnost (Nonduality):
- Za koga: Za tiste, ki jih zanima globlja resnica o tem, kdo so. Za iskrene iskalce, ki želijo prepoznati svojo pravo naravo.
- Kaj je to: Nedualno prepoznanje se zgodi. Iskreno izpraševanje in vodenje v izkušnjo mimo konceptov, v tišino, ki že je.

Tvoj ton naj bo zen, pomirjujoč, ne preveč vsiljiv, kratek in jedrnat.
Odgovarjaj v slovenščini.
POMEMBNO: NE UPORABLJAJ markdown oblikovanja, kot so zvezdice (**) za krepko besedilo. Odgovarjaj v čistem, navadnem besedilu brez kakršnegakoli formatiranja.
Če obiskovalec opiše svoje težave (npr. anksioznost, travme), mu predlagaj Mentorski program (Proces utelešene prisotnosti) in brezplačni uvodni klic.
Če obiskovalca zanima učenje metode za pomoč sebi in drugim, mu predlagaj Šolo.
Če obiskovalec išče duhovno prebujenje ali resnico, mu predlagaj Satsang in Nedualnost.
`;

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Pozdravljeni. Sem AI asistent. Kako vam lahko pomagam pri razumevanju Alexovega dela ali izbiri pravega učenja za vas?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (!chatRef.current && ai) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    if (!chatRef.current) {
      if (!ai) {
        setMessages(prev => [...prev, { role: 'model', text: 'Oprostite, AI asistent trenutno ni na voljo (manjka API ključ).' }]);
      }
      return;
    }

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Oprostite, prišlo je do napake pri povezavi. Prosim, poskusite kasneje.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-zen-400 text-zen-50 p-4 rounded-full shadow-lg hover:bg-zen-500 transition-colors flex items-center gap-2 group"
        aria-label="Vprašaj AI asistenta"
      >
        <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="hidden md:inline-block font-medium pr-2">Vprašaj AI asistenta</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[400px] h-[500px] max-h-[70vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-zen-300"
          >
            {/* Header */}
            <div className="bg-zen-400 text-zen-50 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles size={20} />
                <h3 className="font-serif text-lg">AI Asistent</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zen-200 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zen-50/50">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-zen-400 text-white rounded-tr-sm' 
                        : 'bg-white text-zen-900 border border-zen-300 rounded-tl-sm shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-zen-300 p-3 rounded-2xl rounded-tl-sm shadow-sm">
                    <Loader2 size={16} className="animate-spin text-zen-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-zen-300">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Vnesite vaše vprašanje..."
                  className="flex-1 border border-zen-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-zen-400 focus:ring-1 focus:ring-zen-400 transition-all bg-zen-50/50"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-zen-400 text-white p-2 rounded-full hover:bg-zen-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send size={18} className="ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
