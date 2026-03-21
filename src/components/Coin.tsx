import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Coin() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-64 h-64 perspective-1000 cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-full bg-white border-4 border-cyan-100 shadow-xl flex flex-col items-center justify-center overflow-hidden p-6 text-center group-hover:border-cyan-200 transition-colors">
          <div className="mb-4">
            <img 
              src="https://tihaprisotnost.si/wp-content/uploads/2023/10/cropped-logo-tiha-prisotnost-1.png" 
              alt="Aleksandar Marinković - Tiha prisotnost Logo" 
              className="w-32 h-32 object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback if the specific logo URL fails
                e.currentTarget.src = "https://tihaprisotnost.si/wp-content/uploads/2023/09/logo-tiha-prisotnost.png";
              }}
            />
          </div>
          <h4 className="font-serif text-xl text-zen-900 leading-tight">Terapevtski pristop</h4>
          <p className="text-[10px] uppercase tracking-widest text-cyan-600 mt-2 font-medium">KLIKNI ZA DRUGO STRAN</p>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden rounded-full bg-zen-400 border-4 border-zen-500 shadow-xl flex flex-col items-center justify-center overflow-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="absolute inset-0 opacity-50">
            <img 
              src="https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=800" 
              alt="Buddha" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 bg-black/40 backdrop-blur-sm p-6 w-full h-full flex flex-col items-center justify-center text-center text-white">
            <h4 className="font-serif text-2xl leading-tight mb-2">Nedualnost</h4>
            <p className="text-[10px] uppercase tracking-widest text-cyan-200 font-medium">Tiha prisotnost</p>
          </div>
        </div>
      </motion.div>
      
      {/* Decorative ring */}
      <div className="absolute -inset-4 border border-cyan-100/30 rounded-full animate-pulse pointer-events-none"></div>
    </div>
  );
}
