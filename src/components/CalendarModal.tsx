import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Calendar as CalendarIcon, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, startOfWeek, endOfWeek, parseISO } from 'date-fns';
import { sl } from 'date-fns/locale';

type CalendarCategory = 'joga' | 'sola' | 'nedualnost' | 'program' | 'vsi';

interface CalendarEvent {
  date: string;
  time: string;
  title: string;
  location: string;
  description?: string;
  category?: 'joga' | 'sola' | 'nedualnost' | 'program';
  link?: string;
}

interface CalendarModalProps {
  category: CalendarCategory;
  onClose: () => void;
}

const allEvents: Record<Exclude<CalendarCategory, 'vsi'>, CalendarEvent[]> = {
  joga: [
    { date: '2026-01-08', time: '19:00 - 20:30', title: 'Joga iz Kashmirske tradicije', location: 'Koprska ulica 52, 1000 Ljubljana', category: 'joga', link: 'dogodki' },
    { date: '2026-01-15', time: '19:00 - 20:30', title: 'Joga iz Kashmirske tradicije', location: 'Koprska ulica 52, 1000 Ljubljana', category: 'joga', link: 'dogodki' },
    { date: '2026-01-22', time: '19:00 - 20:30', title: 'Joga iz Kashmirske tradicije', location: 'Koprska ulica 52, 1000 Ljubljana', category: 'joga', link: 'dogodki' },
    { date: '2026-01-29', time: '19:00 - 20:30', title: 'Joga iz Kashmirske tradicije', location: 'Koprska ulica 52, 1000 Ljubljana', category: 'joga', link: 'dogodki' },
    { date: '2026-02-05', time: '19:00 - 20:30', title: 'Joga iz Kashmirske tradicije', location: 'Koprska ulica 52, 1000 Ljubljana', category: 'joga', link: 'dogodki' },
    { date: '2026-02-12', time: '19:00 - 20:30', title: 'Joga iz Kashmirske tradicije', location: 'Koprska ulica 52, 1000 Ljubljana', category: 'joga', link: 'dogodki' },
    { date: '2026-02-19', time: '19:00 - 20:30', title: 'Joga iz Kashmirske tradicije', location: 'Koprska ulica 52, 1000 Ljubljana', category: 'joga', link: 'dogodki' },
    { date: '2026-02-26', time: '19:00 - 20:30', title: 'Joga iz Kashmirske tradicije', location: 'Koprska ulica 52, 1000 Ljubljana', category: 'joga', link: 'dogodki' },
    { date: '2026-03-05', time: '19:00 - 20:30', title: 'Joga iz Kashmirske tradicije', location: 'Koprska ulica 52, 1000 Ljubljana', category: 'joga', link: 'dogodki' },
    { date: '2026-03-12', time: '19:00 - 20:30', title: 'Joga iz Kashmirske tradicije', location: 'Koprska ulica 52, 1000 Ljubljana', category: 'joga', link: 'dogodki' },
  ],
  nedualnost: [
    { date: '2026-02-06', time: '19:00 - 20:30', title: 'Nedualnost (online)', location: 'Online', category: 'nedualnost', link: 'dogodki' },
    { date: '2026-03-13', time: '19:00 - 20:30', title: 'Nedualnost (online)', location: 'Online', category: 'nedualnost', link: 'dogodki' },
    { date: '2026-03-14', time: '10:00 - 14:00', title: 'Satsang: Srečaj se v brezčasni odprtosti', location: 'Studio Aho, Koprska ulica 52, Ljubljana', description: '10:00–11:30 Satsang\n11:30–12:30 Pavza\n12:30–14:00 Satsang', category: 'nedualnost', link: 'dogodki' },
    { date: '2026-03-15', time: '10:00 - 14:00', title: 'Satsang: Srečaj se v brezčasni odprtosti', location: 'Studio Aho, Koprska ulica 52, Ljubljana', description: '10:00–11:30 Satsang\n11:30–12:30 Pavza\n12:30–14:00 Satsang', category: 'nedualnost', link: 'dogodki' },
  ],
  sola: [
    { date: '2026-04-03', time: '18:00', title: 'INFORMATIVNI DAN: ✨ Kam seže vaša pot osebne transformacije? ✨', location: 'Online (Zoom)', description: 'Več o sami šoli in programu si lahko preberete TUKAJ.', category: 'sola', link: 'dogodki' },
    { date: '2026-05-09', time: '09:00 - 12:00', title: 'ŠOLA: Proces utelešene prisotnosti - NPH', location: 'Ljubljana', category: 'sola', link: 'dogodki' },
    { date: '2026-05-16', time: '09:00 - 12:00', title: 'ŠOLA: Proces utelešene prisotnosti - NPH', location: 'Ljubljana', category: 'sola', link: 'dogodki' },
    { date: '2026-05-23', time: '09:00 - 12:00', title: 'ŠOLA: Proces utelešene prisotnosti - NPH', location: 'Ljubljana', category: 'sola', link: 'dogodki' },
    { date: '2026-05-30', time: '09:00 - 12:00', title: 'ŠOLA: Proces utelešene prisotnosti - NPH', location: 'Ljubljana', category: 'sola', link: 'dogodki' },
    { date: '2026-06-06', time: '09:00 - 12:00', title: 'ŠOLA: Proces utelešene prisotnosti - NPH', location: 'Ljubljana', category: 'sola', link: 'dogodki' },
    { date: '2026-06-13', time: '09:00 - 12:00', title: 'ŠOLA: Proces utelešene prisotnosti - NPH', location: 'Ljubljana', category: 'sola', link: 'dogodki' },
    { date: '2026-06-20', time: '09:00 - 12:00', title: 'ŠOLA: Proces utelešene prisotnosti - NPH', location: 'Ljubljana', category: 'sola', link: 'dogodki' },
    { date: '2026-06-27', time: '09:00 - 12:00', title: 'ŠOLA: Proces utelešene prisotnosti - NPH', location: 'Ljubljana', category: 'sola', link: 'dogodki' },
  ],
  program: [
    { date: '2026-03-03', time: '18:00 - 20:00', title: '6-tedenski mentorski program', location: 'Online (Zoom)', category: 'program', link: 'mentorski-program' },
    { date: '2026-03-10', time: '18:00 - 20:00', title: '6-tedenski mentorski program', location: 'Online (Zoom)', category: 'program', link: 'mentorski-program' },
    { date: '2026-03-17', time: '18:00 - 20:00', title: '6-tedenski mentorski program', location: 'Online (Zoom)', category: 'program', link: 'mentorski-program' },
    { date: '2026-03-24', time: '18:00 - 20:00', title: '6-tedenski mentorski program', location: 'Online (Zoom)', category: 'program', link: 'mentorski-program' },
    { date: '2026-03-31', time: '18:00 - 20:00', title: '6-tedenski mentorski program', location: 'Online (Zoom)', category: 'program', link: 'mentorski-program' },
    { date: '2026-04-07', time: '18:00 - 20:00', title: '6-tedenski mentorski program', location: 'Online (Zoom)', category: 'program', link: 'mentorski-program' },
  ]
};

const categoryInfo: Record<CalendarCategory, any> = {
  joga: {
    title: "Joga",
    color: "bg-emerald-400",
    textColor: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  nedualnost: {
    title: "Nedualnost",
    color: "bg-indigo-400",
    textColor: "text-indigo-700",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  sola: {
    title: "Šola",
    color: "bg-amber-400",
    textColor: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  program: {
    title: "Mentorski program",
    color: "bg-rose-400",
    textColor: "text-rose-700",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  vsi: {
    title: "Vsi dogodki",
    color: "bg-zen-900",
    textColor: "text-zen-900",
    bgColor: "bg-zen-50",
    borderColor: "border-zen-400",
  }
};

export default function CalendarModal({ category, onClose }: CalendarModalProps) {
  const allEventsList = [...allEvents.joga, ...allEvents.nedualnost, ...allEvents.sola, ...allEvents.program];
  
  const filteredEvents = allEventsList.filter(event => {
    return category === 'vsi' || event.category === category;
  }).sort((a, b) => a.date.localeCompare(b.date));

  const [currentDate, setCurrentDate] = useState(new Date());
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (filteredEvents.length > 0) {
      // We still select the first event's date to show details, 
      // but we don't change the calendar view (currentDate)
      setSelectedDate(parseISO(filteredEvents[0].date));
    }
  }, [category]);

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const selectedEvents = selectedDate 
    ? filteredEvents.filter(e => isSameDay(parseISO(e.date), selectedDate))
    : [];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
      onClick={e => e.stopPropagation()}
    >
      <div className="p-6 border-b border-zen-300 flex justify-between items-center bg-zen-50 shrink-0">
        <div className="flex items-center gap-3">
          <CalendarIcon className="text-zen-500" size={24} />
          <h2 className="text-xl font-serif text-zen-900">Koledar dogodkov 2026</h2>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-zen-200 rounded-full transition-colors text-zen-500"
          aria-label="Zapri"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-6 overflow-y-auto">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={prevMonth}
            className="p-2 hover:bg-zen-100 rounded-full transition-colors"
          >
            <ChevronLeft size={20} className="text-zen-600" />
          </button>
          <h3 className="text-lg font-medium capitalize text-zen-900">
            {format(currentDate, 'MMMM yyyy', { locale: sl })}
          </h3>
          <button 
            onClick={nextMonth}
            className="p-2 hover:bg-zen-100 rounded-full transition-colors"
          >
            <ChevronRight size={20} className="text-zen-600" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob', 'Ned'].map(d => (
              <div key={d} className="text-center text-xs font-medium text-zen-400 py-1">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, i) => {
              const isCurrentMonth = isSameMonth(day, monthStart);
              const dayEvents = filteredEvents.filter(e => isSameDay(parseISO(e.date), day));
              const isSelected = selectedDate && isSameDay(day, selectedDate);
              const hasEvents = dayEvents.length > 0;
              
              const getDotColor = (evs: CalendarEvent[]) => {
                const cat = evs[0].category;
                return cat ? categoryInfo[cat].color : 'bg-zen-400';
              };

              return (
                <div 
                  key={i} 
                  onClick={() => setSelectedDate(day)}
                  className={`
                    relative p-2 flex flex-col items-center justify-center cursor-pointer rounded-lg aspect-square transition-all
                    ${!isCurrentMonth ? 'text-zen-300' : 'text-zen-700'}
                    ${isSelected ? `bg-zen-100 border-zen-300 border shadow-sm` : 'hover:bg-zen-50 border border-transparent'}
                    ${hasEvents && !isSelected ? 'font-medium' : ''}
                  `}
                >
                  <span className={`text-sm ${isSelected ? 'font-bold' : ''}`}>{format(day, 'd')}</span>
                  {hasEvents && (
                    <div className="flex gap-0.5 mt-1">
                      {dayEvents.slice(0, 3).map((e, idx) => (
                        <div key={idx} className={`w-1.5 h-1.5 rounded-full ${getDotColor([e])}`}></div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Date Details */}
        <div className="border-t border-zen-300 pt-6">
          {selectedDate ? (
            <div>
              <h4 className="font-medium text-zen-900 mb-4 capitalize flex items-center gap-2">
                <Clock size={16} className="text-zen-400" />
                {format(selectedDate, 'EEEE, d. MMMM yyyy', { locale: sl })}
              </h4>
              {selectedEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedEvents.map((e, i) => {
                    const eventCatInfo = e.category ? categoryInfo[e.category] : categoryInfo.vsi;
                    return (
                      <div key={i} className={`p-5 rounded-2xl border ${eventCatInfo.borderColor} ${eventCatInfo.bgColor} shadow-sm`}>
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <span className={`text-[10px] tracking-[0.2em] uppercase font-bold ${eventCatInfo.textColor} mb-1 block`}>
                              {eventCatInfo.title}
                            </span>
                            <h5 className="text-lg font-serif text-zen-900 leading-tight">{e.title}</h5>
                          </div>
                          <div className="text-sm font-medium text-zen-700 bg-white/60 px-3 py-1 rounded-full border border-white/20">
                            {e.time}
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2 text-sm text-zen-600 mb-4">
                          <MapPin size={16} className="mt-0.5 shrink-0 text-zen-400" />
                          <span>{e.location}</span>
                        </div>
                        
                        {e.description && (
                          <p className="text-sm text-zen-600 font-light leading-relaxed mb-6 border-l-2 border-zen-200 pl-4 italic">
                            {e.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-zen-50 rounded-2xl p-8 text-center border border-dashed border-zen-300">
                  <p className="text-zen-400 text-sm">Na ta dan ni predvidenih dogodkov.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <CalendarIcon size={32} className="mx-auto text-zen-200 mb-4" />
              <p className="text-zen-400 text-sm">Izberite datum na koledarju za ogled podrobnosti.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
