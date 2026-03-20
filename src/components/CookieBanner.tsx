import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

interface CookieBannerProps {
  onOpenSettings: () => void;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem('cookie-consent', 'none');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100]"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-zen-200 p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-zen-50 rounded-lg text-zen-400">
                <Cookie size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg text-zen-900 mb-1">Politika spletnih piškotkov</h3>
                <p className="text-sm text-zen-600 font-light leading-relaxed">
                  Piškotke uporabljamo za ponujanje uporabnih funkcij in merjenje učinkovitosti, da bi izboljšali vašo izkušnjo. S klikom na "Sprejmi vse" se strinjate z uporabo vseh piškotkov. S klikom na "Sprejmi izbrano" se strinjate samo z izbranimi kategorijami. Več si lahko preberete: <button onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'pogoji' }))} className="underline hover:text-zen-900 transition-colors">Pogoji poslovanja</button>.
                </p>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-zen-300 hover:text-zen-900 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDeclineAll}
                className="flex-1 px-4 py-2 text-xs tracking-widest uppercase border border-zen-200 text-zen-500 hover:bg-zen-50 transition-colors rounded-lg"
              >
                Zavrni vse
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2 text-xs tracking-widest uppercase bg-zen-400 text-white hover:bg-zen-500 transition-colors rounded-lg"
              >
                Sprejmi vse
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
