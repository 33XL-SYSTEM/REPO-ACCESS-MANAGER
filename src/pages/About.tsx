import React from 'react';
import { Terminal, Shield } from 'lucide-react';
import { FaReact, FaNodeJs, FaRust } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiThreedotjs, SiC } from 'react-icons/si';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
          Sobre
        </h1>
        <p className="text-xl text-white/50 max-w-2xl font-sans">
          Conheça o arquiteto por trás do código. Desenvolvedor focado em performance, 
          segurança e interfaces de alto impacto visual.
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
              <span className="font-mono text-xs text-white/50 ml-4">root@pr-am:~# whoami</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm leading-relaxed flex-1 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
              
              <div className="flex gap-4 mb-6">
                <Terminal className="text-white/40 shrink-0" />
                <div>
                  <p className="text-white/80 mb-4">
                    <span className="text-white font-bold">&gt; NOME:</span> Cauan Gabriel Matos Silva
                  </p>
                  <p className="text-white/80 mb-4">
                    <span className="text-white font-bold">&gt; STATUS:</span> Estudante de ADS & Desenvolvedor de Software Independente
                  </p>
                  <p className="text-white/80">
                    <span className="text-white font-bold">&gt; OBJETIVO:</span> Construir sistemas escaláveis que mesclam estética imersiva e engenharia de software de alta performance.
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-white/10 my-8"></div>

              <div className="prose prose-invert prose-p:text-white/70 max-w-none font-sans">
                <p>
                  Desde a criação de simulações de sistemas operacionais no navegador (Trymon OS) até o desenvolvimento de arquiteturas e-commerce serverless complexas e games em TypeScript puro, meu foco sempre esteve na interseção entre <strong>design premium</strong> e <strong>lógica robusta</strong>.
                </p>
                <p>
                  Acredito que o software não deve ser apenas funcional, mas deve oferecer uma experiência visceral. Por isso, aplico conceitos de estética <em>Rich Web</em>, Glassmorphism, e retro-punk em meus hubs de desenvolvimento.
                </p>
                <p className="italic text-white/50 border-l-2 border-white/20 pl-4 mt-6">
                  "Cognoscere Et Creare" - Conhecer para poder criar. Esse é o mantra que guia meu aprendizado constante em Cibersegurança, Arquitetura de Sistemas e Engenharia Front-end.
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
              <Shield size={16} /> Foco Primário
            </h3>
            <ul className="font-mono text-xs space-y-4 relative z-10">
              <li className="flex flex-col gap-1 border-b border-white/5 pb-3">
                <span className="text-white font-bold">Front-end Engineering</span>
                <span className="text-white/50">React, TypeScript, Tailwind</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-white/5 pb-3">
                <span className="text-white font-bold">Systems & Architecture</span>
                <span className="text-white/50">Serverless, Microservices</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-white/5 pb-3">
                <span className="text-white font-bold">Cybersecurity</span>
                <span className="text-white/50">CTF Environments, Forensics</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-bold">Game Development</span>
                <span className="text-white/50">Phaser 3, Engine Design</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="mt-20 border-t border-white/10 pt-20">
        <h2 className="text-3xl font-bold mb-12 uppercase tracking-tighter text-center">
          Stack Tecnológica
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
