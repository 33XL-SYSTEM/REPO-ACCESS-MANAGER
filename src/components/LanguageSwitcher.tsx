import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'pt-BR', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = languages.find(l => i18n.language && i18n.language.startsWith(l.code.split('-')[0])) || languages[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:bg-white hover:text-black hover:border-white transition-colors font-mono text-[10px] font-bold tracking-widest"
        aria-label="Change language"
      >
        <Languages className="w-4 h-4 hidden sm:block" />
        <span className="sm:hidden">{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-black border border-white/20 z-50 min-w-[80px]">
          {languages.map((lang) => {
            const isActive = i18n.language && i18n.language.startsWith(lang.code.split('-')[0]);
            return (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-left transition-colors ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
