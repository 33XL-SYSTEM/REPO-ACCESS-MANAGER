import React from 'react';
import { Terminal, Shield } from 'lucide-react';
import { FaReact, FaNodeJs, FaRust } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiThreedotjs, SiC } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
          {t('about.title_page')}
        </h1>
        <p className="text-xl text-white/70 max-w-2xl font-sans">
          {t('about.subtitle_page')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Bio - Terminal Style */}
        <div className="lg:col-span-2">
          <div className="border border-white/20 bg-brand-black/50 backdrop-blur-md rounded-sm overflow-hidden flex flex-col h-full">
            {/* Terminal Header */}
            <div className="bg-white/10 px-4 py-2 flex items-center gap-2 border-b border-white/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <span className="font-mono text-xs text-white/70 ml-4">{t('about.whoami')}</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm leading-relaxed flex-1 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
              
              <div className="flex gap-4 mb-6">
                <Terminal className="text-white/60 shrink-0" />
                <div>
                  <p className="text-white mb-4">
                    <span className="text-white font-bold">{t('about.name_label')}</span> {t('about.system_name', 'Repo Access Manager (R.A.M)')}
                  </p>
                  <p className="text-white mb-4">
                    <span className="text-white font-bold">{t('about.status_label')}</span> {t('about.status_text')}
                  </p>
                  <p className="text-white">
                    <span className="text-white font-bold">{t('about.objective_label')}</span> {t('about.objective_text')}
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-white/10 my-8"></div>

              <div className="prose prose-invert prose-p:text-white/90 max-w-none font-sans">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p className="italic text-white/70 border-l-2 border-white/20 pl-4 mt-6">
                  {t('about.p3')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* System Specs Sidebar */}
        <div className="flex flex-col gap-6">
          <div className="border border-white/10 p-6 bg-white/[0.02] backdrop-blur-sm relative group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <Shield size={16} /> {t('about.focus')}
            </h3>
            <ul className="font-mono text-xs space-y-4 relative z-10">
              <li className="flex flex-col gap-1 border-b border-white/5 pb-3">
                <span className="text-white font-bold">Web Applications</span>
                <span className="text-white/70">React, TypeScript, Next.js, Vite</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-white/5 pb-3">
                <span className="text-white font-bold">Game & 3D Engines</span>
                <span className="text-white/70">Phaser, Three.js, WebGL</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-white/5 pb-3">
                <span className="text-white font-bold">Backend & Systems</span>
                <span className="text-white/70">Node.js, Rust, Serverless</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-bold">Core Infrastructure</span>
                <span className="text-white/70">33XL Work Machine, RAM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="mt-20 border-t border-white/10 pt-20">
        <h2 className="text-3xl font-bold mb-12 uppercase tracking-tighter text-center">
          {t('about.stack_title')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-colors duration-300 group">
            <FaReact size={32} className="group-hover:animate-spin-slow" />
            <span className="font-mono text-xs uppercase tracking-widest">React & Native</span>
          </div>
          
          <div className="border border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-colors duration-300">
            <SiTypescript size={32} />
            <span className="font-mono text-xs uppercase tracking-widest">TypeScript</span>
          </div>
          
          <div className="border border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-colors duration-300">
            <SiTailwindcss size={32} />
            <span className="font-mono text-xs uppercase tracking-widest">Tailwind V4</span>
          </div>
          
          <div className="border border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-colors duration-300">
            <SiNextdotjs size={32} />
            <span className="font-mono text-xs uppercase tracking-widest">Next.js</span>
          </div>
          
          <div className="border border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-colors duration-300">
            <FaNodeJs size={32} />
            <span className="font-mono text-xs uppercase tracking-widest">Node.js</span>
          </div>
          
          <div className="border border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-colors duration-300">
            <FaRust size={32} />
            <span className="font-mono text-xs uppercase tracking-widest">Rust / WASM</span>
          </div>
          
          <div className="border border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-colors duration-300">
            <SiThreedotjs size={32} />
            <span className="font-mono text-xs uppercase tracking-widest">Three.js / WebGL</span>
          </div>
          
          <div className="border border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-colors duration-300">
            <SiC size={32} />
            <span className="font-mono text-xs uppercase tracking-widest">C / Low Level</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
