import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface KontaktModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KontaktModal({ isOpen, onClose }: KontaktModalProps) {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    zadeva: '',
    besedilo: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.ime,
          email: formData.email,
          subject: formData.zadeva,
          message: formData.besedilo
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ ime: '', email: '', zadeva: '', besedilo: '' });
        // Keep success message for a bit longer
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Sistemu ni uspelo poslati sporočila. Prosimo, poskusite ponovno.');
      }
    } catch (error) {
      console.error('Napaka pri pošiljanju:', error);
      setStatus('error');
      setErrorMessage('Sistemu ni uspelo poslati sporočila. Prosimo, poskusite ponovno.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-zen-900/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-zen-50 w-full max-w-lg rounded-sm shadow-2xl relative overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-zen-400 hover:text-zen-900 transition-colors z-10"
              aria-label="Zapri"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-serif text-zen-900 mb-2">Kontaktiraj me</h2>
              <p className="text-sm text-zen-500 font-light mb-6">Izpolni spodnji obrazec in poslal ti bom odgovor v najkrajšem možnem času.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'success' && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-sm mb-4">
                    Sporočilo je bilo uspešno poslano. Odgovor pričakujte v najkrajšem možnem času.
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm rounded-sm mb-4">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label htmlFor="ime" className="block text-xs font-medium text-zen-700 mb-1">Ime in priimek</label>
                  <input 
                    type="text" 
                    id="ime" 
                    name="ime" 
                    required
                    disabled={status === 'sending' || status === 'success'}
                    value={formData.ime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white border border-zen-300 rounded-sm focus:outline-none focus:border-zen-400 focus:ring-1 focus:ring-zen-400 transition-colors disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-zen-700 mb-1">Email naslov</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    disabled={status === 'sending' || status === 'success'}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white border border-zen-300 rounded-sm focus:outline-none focus:border-zen-400 focus:ring-1 focus:ring-zen-400 transition-colors disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="zadeva" className="block text-xs font-medium text-zen-700 mb-1">Zadeva</label>
                  <input 
                    type="text" 
                    id="zadeva" 
                    name="zadeva" 
                    required
                    disabled={status === 'sending' || status === 'success'}
                    value={formData.zadeva}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white border border-zen-300 rounded-sm focus:outline-none focus:border-zen-400 focus:ring-1 focus:ring-zen-400 transition-colors disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="besedilo" className="block text-xs font-medium text-zen-700 mb-1">Sporočilo</label>
                  <textarea 
                    id="besedilo" 
                    name="besedilo" 
                    rows={3}
                    required
                    disabled={status === 'sending' || status === 'success'}
                    value={formData.besedilo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white border border-zen-300 rounded-sm focus:outline-none focus:border-zen-400 focus:ring-1 focus:ring-zen-400 transition-colors resize-none disabled:opacity-50"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full py-3 text-white text-xs tracking-widest uppercase transition-colors mt-2 ${
                    status === 'success' ? 'bg-emerald-500' : 
                    status === 'sending' ? 'bg-zen-300 cursor-not-allowed' : 
                    'bg-zen-400 hover:bg-zen-800'
                  }`}
                >
                  {status === 'success' ? 'Poslano!' : status === 'sending' ? 'Pošiljanje...' : 'Pošlji sporočilo'}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
