import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Box, Search } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { useTranslation } from 'react-i18next';

import VinylSpinner from '../components/VinylSpinner';
import MusicPlayer from '../components/MusicPlayer';

const synonymMap: Record<string, string[]> = {
  // Frontend
  'front': ['react', 'vue', 'ui', 'frontend', 'front-end', 'tailwind', 'css', 'html'],
  'frontend': ['react', 'vue', 'ui', 'front', 'front-end', 'tailwind', 'css', 'html'],
  'ui': ['interface', 'frontend', 'design', 'tailwind', 'css'],
  
  // Backend
  'back': ['node', 'rust', 'backend', 'back-end', 'api', 'server', 'database', 'sql'],
  'backend': ['node', 'rust', 'back', 'back-end', 'api', 'server', 'database', 'sql'],
  'api': ['backend', 'server', 'node', 'express', 'rest'],
  'db': ['sql', 'database', 'banco', 'mysql', 'postgres', 'mongo'],
  'banco': ['sql', 'database', 'db', 'mysql', 'postgres', 'mongo', 'bd'],
  
  // Games & 3D
  'jogo': ['game', 'phaser', 'canvas', 'engine', '3d', 'webgl'],
  'game': ['jogo', 'phaser', 'canvas', 'engine', '3d', 'webgl'],
  'jogos': ['game', 'jogo', 'phaser'],
  '3d': ['three', 'webgl', 'three.js', 'canvas', 'game', 'jogo', 'spatial'],
  'engine': ['motor', 'phaser', 'webgl', 'canvas', 'core'],
  
  // Academic / Study
  'estudo': ['acadêmico', 'faculdade', 'ctf', 'curso', 'prova', 'academic', 'estudos'],
  'curso': ['acadêmico', 'estudo', 'faculdade', 'aula'],
  'faculdade': ['acadêmico', 'estudo', 'curso', 'universidade'],
  'academico': ['acadêmico', 'faculdade', 'estudo'],
  
  // E-commerce
  'loja': ['ecommerce', 'e-commerce', 'shop', 'vendas', 'compras'],
  'shop': ['ecommerce', 'e-commerce', 'loja', 'vendas', 'store'],
  'ecommerce': ['loja', 'shop', 'vendas', 'e-commerce'],
  
  // AI / ML
  'ia': ['ai', 'machine learning', 'bot', 'gpt', 'inteligência', 'llm'],
  'ai': ['ia', 'machine learning', 'bot', 'gpt', 'intelligence', 'llm'],
  
  // Systems / Infra
  'sistema': ['os', 'operacional', 'infraestrutura', 'system', 'linux'],
  'os': ['sistema', 'operacional', 'linux', 'kernel']
};

const getExpandedTerms = (queryWord: string): string[] => {
  const normalized = queryWord.toLowerCase();
  const synonyms = synonymMap[normalized] || [];
  // Se a palavra terminar em 's' (plural simples), tentamos buscar a versão sem 's' e vice-versa
  const withoutS = normalized.endsWith('s') ? normalized.slice(0, -1) : normalized;
  const withS = !normalized.endsWith('s') ? normalized + 's' : normalized;
  return [normalized, withoutS, withS, ...synonyms];
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Project['category'] | 'ALL'>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const handleLocalSearch = (val: string) => {
    setSearchParams(prev => {
      if (val) prev.set('q', val);
      else prev.delete('q');
      return prev;
    }, { replace: true });
    
    if (val && filter !== 'ALL') {
      setFilter('ALL');
    }
  };

  const searchedProjects = projects.filter(p => {
    if (!searchQuery.trim()) return true;
    
    // Divide a pesquisa em múltiplas palavras para combinar condições (AND logic)
    const queryWords = searchQuery.trim().toLowerCase().split(/\s+/);
    
    // Para um projeto ser exibido, ele precisa satisfazer TODAS as palavras digitadas
    return queryWords.every(word => {
      // Para CADA palavra, ele expande para um leque de termos associados (OR logic)
      const expandedTerms = getExpandedTerms(word);
      
      return expandedTerms.some(term => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.tags.some(tag => tag.toLowerCase().includes(term))
      );
    });
  });

  const filteredProjects = filter === 'ALL'
    ? searchedProjects
    : searchedProjects.filter(p => p.category === filter);

  const categories: (Project['category'] | 'ALL')[] = [
    'ALL',
    '33XL SYSTEM',
    'CAUAN33XL',
    'ACADÊMICOS',
    'A.L.T',
    'ENGINES',
    'JOGOS',
    'OUTROS PROJETOS',
    'SITES CLIENTES'
  ];

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <>
      <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="inline-block px-3 py-1 border border-white/20 text-[10px] font-mono tracking-[0.3em] uppercase w-fit text-white/70 animate-pulse">
            {t('hero.terminal')}
          </div>

          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter relative z-10">
              {t('hero.title')} <br />
              <span className="text-outline-white">{t('hero.subtitle')}</span>
            </h1>

            {/* Conceptual Vinyl Spinner & Player - Absolutely Positioned */}
            <div className="hidden md:flex flex-col items-center absolute -top-16 right-0 z-0 w-[450px]">
              <VinylSpinner />
              <div className="mt-12 z-10 w-full max-w-[400px] animate-fade-in drop-shadow-2xl">
                <MusicPlayer />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start">
            <div className="relative z-10">
              <p className="text-xl text-white/90 max-w-xl leading-relaxed">
                {t('hero.description1')}
                <br /><br />
                <span className="text-sm font-mono text-white/70">
                  {t('hero.description2')}<a href="https://github.com/Cauan33XL" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-colors">CAUAN33XL</a>
                </span>
              </p>

              <div className="flex gap-6 mt-8">
                <a href="#projects" className="bg-white text-black px-8 py-3 font-mono font-bold uppercase tracking-widest hover:invert transition-all duration-300 text-center">
                  {t('hero.explore')}
                </a>
              </div>

              {/* Terminal Specs */}
              <div className="flex flex-wrap gap-6 mt-12 font-mono text-[10px] text-white/50 uppercase tracking-[0.2em] border-t border-white/10 pt-6">
                <span>{t('hero.specs.cpu')}</span>
                <span>{t('hero.specs.mem')}</span>
                <span>{t('hero.specs.conn')}</span>
                <span>{t('hero.specs.acc')}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="projects" className="px-6 py-20 max-w-7xl mx-auto border-t border-white/5">

        {/* 3D Mode Access Banner */}
        <div className="mb-20 border border-white/20 bg-brand-black/50 backdrop-blur-md p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                <Box size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-mono tracking-widest uppercase">R.A.M Modo 3D</h3>
                <p className="text-white/60 font-mono text-sm mt-1 uppercase tracking-wider">Experiência tridimensional Imersiva no Sistema</p>
              </div>
            </div>
            <Link
              to="/3d"
              className="w-full md:w-auto px-8 py-4 bg-white text-black font-mono font-bold text-sm tracking-widest uppercase hover:invert transition-all duration-300 text-center flex items-center justify-center gap-2 shrink-0"
            >
              <Box size={18} />
              Acessar Modo 3D
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">{t('projects.title')}</h2>
            <p className="text-white/60 font-mono text-sm">{t('projects.showing', { count: filteredProjects.length })}</p>
          </div>

          <div className="flex flex-wrap gap-4 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 transition-all duration-300 uppercase tracking-widest ${filter === cat
                  ? 'bg-white text-black font-bold'
                  : 'border border-white/10 hover:bg-white/5 text-white/70'
                  }`}
              >
                {t(`projects.categories.${cat}`, cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-fade-in">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={20} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => handleLocalSearch(e.target.value)}
              placeholder={t('projects.search_placeholder', 'BUSCAR REPOSITÓRIOS, TECNOLOGIAS E KEYWORDS...')}
              className="w-full bg-brand-black/50 border border-white/20 focus:border-white/50 px-12 py-4 text-white font-mono text-sm outline-none transition-colors uppercase tracking-widest placeholder:text-white/30"
            />
          </div>
        </div>

        {filter === 'ALL' ? (
          <div className="flex flex-col gap-16">
            {categories.filter(c => c !== 'ALL').map((category) => {
              const categoryProjects = searchedProjects.filter(p => p.category === category);
              if (categoryProjects.length === 0) return null;

              const isSingle = categoryProjects.length === 1;
              const containerClass = isSingle
                ? "w-full"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

              return (
                <div key={category} className="animate-fade-in">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-lg font-mono font-bold uppercase tracking-widest text-white">
                      // {t(`projects.categories.${category}`, category)}
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>
                  <div className={containerClass}>
                    {categoryProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                        isHorizontal={isSingle}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                isHorizontal={filteredProjects.length === 1}
              />
            ))}
          </div>
        )}
      </main>

      <style>{`
        @keyframes text-pulse {
          0%, 100% {
            color: transparent;
            -webkit-text-stroke: 1px color-mix(in srgb, var(--color-white) 40%, transparent);
            text-shadow: none;
          }
          50% {
            color: var(--color-white);
            -webkit-text-stroke: 1px var(--color-white);
            text-shadow: 0 0 20px color-mix(in srgb, var(--color-white) 50%, transparent);
          }
        }
        
        .text-outline-white {
          color: transparent;
          -webkit-text-stroke: 1px color-mix(in srgb, var(--color-white) 40%, transparent);
          animation: text-pulse 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Home;
