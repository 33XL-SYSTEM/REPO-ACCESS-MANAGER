import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { useTranslation } from 'react-i18next';

import VinylSpinner from '../components/VinylSpinner';
import MusicPlayer from '../components/MusicPlayer';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Project['category'] | 'ALL'>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories: (Project['category'] | 'ALL')[] = [
    'ALL', 
    '33XL SYSTEM', 
    'ACADÊMICOS', 
    'A.L.T', 
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
                className={`px-3 py-1 transition-all duration-300 uppercase tracking-widest ${
                  filter === cat 
                    ? 'bg-white text-black font-bold' 
                    : 'border border-white/10 hover:bg-white/5 text-white/70'
                }`}
              >
                {t(`projects.categories.${cat}`, cat)}
              </button>
            ))}
          </div>
        </div>
        
        {filter === 'ALL' ? (
          <div className="flex flex-col gap-16">
            {categories.filter(c => c !== 'ALL').map((category) => {
              const categoryProjects = projects.filter(p => p.category === category);
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
          <div className={`animate-fade-in ${filteredProjects.length === 1 ? "w-full" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}`}>
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
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
            text-shadow: none;
          }
          50% {
            color: white;
            -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }
        }
        
        .text-outline-white {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
          animation: text-pulse 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Home;
