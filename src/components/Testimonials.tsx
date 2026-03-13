import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Maja K.",
    text: "Alexov pristop je izjemno nežen, a hkrati zelo globok. Že po nekaj srečanjih sem začutila večji stik s telesom in notranji mir, ki ga prej nisem poznala.",
    rating: 5
  },
  {
    id: 2,
    name: "Tomaž Z.",
    text: "Satsangi in joga so mi odprli popolnoma nov pogled na življenje. Alex te vodi z neverjetno prisotnostjo in jasnostjo. Priporočam vsakomur, ki išče resnico.",
    rating: 5
  },
  {
    id: 3,
    name: "Nina P.",
    text: "Mentorski program je bil zame prelomnica. Naučila sem se prepoznati svoje vzorce in jih varno sprostiti. Alex ustvari resnično varen prostor za raziskovanje.",
    rating: 5
  },
  {
    id: 4,
    name: "Luka M.",
    text: "Kashmirska joga z Alexom ni le vadba, je globoko raziskovanje sebe. Telo sem začel dojemati popolnoma drugače. Izjemna izkušnja!",
    rating: 5
  },
  {
    id: 5,
    name: "Ana V.",
    text: "Dolgo sem iskala nekaj, kar bi mi pomagalo pri tesnobi. Alexova terapija in učenja so mi dala orodja, da se zdaj lažje soočam z vsakodnevnimi izzivi.",
    rating: 5
  },
  {
    id: 6,
    name: "Marko J.",
    text: "Izjemna strokovnost in človeška toplina. Njegov pristop k nedualnosti je zelo prizemljen in praktičen. Hvala za vse uvide!",
    rating: 5
  }
];

export default function Testimonials() {
  // Duplicate reviews to create a seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-zen-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-zen-900 mb-4">Mnenja strank</h2>
        <p className="text-zen-600 font-light text-lg">
          Izkušnje tistih, ki so že stopili na pot utelešene prisotnosti.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {duplicatedReviews.map((review, index) => (
            <div 
              key={`${review.id}-${index}`}
              className="w-[350px] md:w-[400px] mx-4 bg-white p-8 rounded-2xl shadow-sm border border-zen-300 flex-shrink-0 whitespace-normal flex flex-col justify-between transition-all duration-300 relative"
            >
              <div>
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" className="mr-1" />
                  ))}
                </div>
                <p className="text-zen-700 font-light leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-medium text-zen-900">{review.name}</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 opacity-80" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <a 
          href="https://share.google/sf3kKBkNWIiN5ht4w" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm tracking-widest uppercase text-zen-500 hover:text-zen-900 transition-colors"
        >
          Preberi vsa mnenja na Googlu <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
}
