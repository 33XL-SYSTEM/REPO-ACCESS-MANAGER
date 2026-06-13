import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, TerminalSquare, Mail } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-dark border-b border-white/10">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm group-hover:bg-brand-black group-hover:border group-hover:border-white transition-colors">
            <span className="text-black group-hover:text-white font-mono font-bold text-lg transition-colors">R</span>
          </div>
          <span className="font-mono font-bold tracking-tighter text-xl hidden sm:block">PROJETO R.A.M</span>
        </Link>
        <span className="text-white/40 hidden lg:block">|</span>
        <a href="https://github.com/Cauan33XL" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 text-sm font-mono text-white hover:text-white transition-colors font-bold tracking-widest">
          <FiGithub size={16} /> CAUAN33XL
        </a>
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-4 md:gap-8 items-center font-mono text-[10px] md:text-sm uppercase tracking-widest text-white/80">
        <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
          <LayoutGrid size={14} className="hidden sm:block" /> {t('nav.home', 'Projetos')}
        </Link>
        <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
          <TerminalSquare size={14} className="hidden sm:block" /> {t('nav.about', 'Sobre')}
        </Link>
        <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
          <Mail size={14} className="hidden sm:block" /> {t('nav.contact', 'Contato')}
        </Link>
      </div>
      
      <div className="hidden sm:flex items-center gap-4">
        <LanguageSwitcher />
        <a href="/#projects" className="inline-block retro-border px-4 py-1 text-xs uppercase font-mono tracking-widest bg-white text-black font-bold hover:invert transition-colors duration-300">
          {t('hero.explore', 'Explorar Repos')}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
