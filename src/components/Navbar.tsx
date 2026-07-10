import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutGrid, TerminalSquare, Heart, Sun, Moon, Box, Search } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  
  const [isLightMode, setIsLightMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'light';
  });
  const [headerSearch, setHeaderSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (headerSearch.trim()) {
      navigate(`/?q=${encodeURIComponent(headerSearch)}`);
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      setHeaderSearch('');
    }
  };

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => setIsLightMode(prev => !prev);

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
        <Link to="/3d" className="hover:text-white transition-colors flex items-center gap-1.5">
          <Box size={14} className="hidden sm:block" /> {t('nav.3d', 'Modo 3D')}
        </Link>
        <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
          <TerminalSquare size={14} className="hidden sm:block" /> {t('nav.about', 'Sobre')}
        </Link>
        <Link to="/support" className="hover:text-white transition-colors flex items-center gap-1.5 uppercase cursor-pointer">
          <Heart size={14} className="hidden sm:block text-red-500" /> {t('nav.support', 'Apoiar')}
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-4">
        <form onSubmit={handleSearch} className="relative group hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={14} />
          <input 
            type="text" 
            value={headerSearch}
            onChange={(e) => setHeaderSearch(e.target.value)}
            placeholder="Search..."
            className="bg-brand-black border border-white/20 focus:border-white/50 pl-9 pr-4 py-1.5 text-white font-mono text-xs outline-none transition-all w-48 focus:w-64 uppercase tracking-widest placeholder:text-white/30"
          />
        </form>
        <button 
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:bg-white hover:text-black hover:border-white transition-colors"
          title={isLightMode ? "Activate Dark Mode" : "Activate Light Mode"}
        >
          {isLightMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <LanguageSwitcher />
        <a href="/#projects" className="inline-block retro-border px-4 py-1 text-xs uppercase font-mono tracking-widest bg-white text-black font-bold hover:invert transition-colors duration-300">
          {t('hero.explore', 'Explorar Repos')}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
