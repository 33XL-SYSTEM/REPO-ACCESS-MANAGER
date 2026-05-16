import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GitBranch, ExternalLink, ArrowLeft } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="fixed inset-0 z-50 bg-brand-black/95 backdrop-blur-xl overflow-y-auto">
      <div className="scanline"></div>
      
      <div className="max-w-4xl mx-auto px-6 py-20 relative">
        <button 
          onClick={onBack}
          className="fixed top-8 left-8 md:absolute md:top-0 md:left-[-4rem] p-2 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono uppercase text-xs tracking-widest z-50 bg-brand-black flex items-center gap-2 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Voltar
        </button>

        <div className="flex flex-col gap-8">
          <div className="border-b border-white/10 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest border border-white/10 px-2 py-1">
                {project.category}
              </span>
              {project.isPrivate && (
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest border border-white/10 px-2 py-1">
                  Private
                </span>
              )}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              {project.name}
            </h1>
            
            <div className="flex flex-wrap gap-6 mt-8 p-6 border border-white/10 bg-white/[0.02] relative group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-mono font-bold uppercase tracking-widest hover:invert transition-all duration-300 text-base"
                >
                  <GitBranch size={20} />
                  Acessar Repositório
                </a>
              )}
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 border-2 border-white/20 px-8 py-4 font-mono font-bold uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300 text-base"
                >
                  <ExternalLink size={20} />
                  Acessar Site
                </a>
              )}
            </div>
          </div>

          <div className="prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-a:text-white prose-a:underline-offset-4 hover:prose-a:text-white/70 prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 max-w-none font-sans">
            {project.fullDescription ? (
              <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
            ) : (
              <p className="text-xl text-white/50 italic">{project.description}</p>
            )}
          </div>
          
          <div className="border-t border-white/10 pt-8 mt-8">
            <h3 className="font-mono uppercase tracking-widest text-sm text-white/50 mb-4">Stack & Tags</h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono bg-white/5 px-3 py-1 rounded-sm text-white/80 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
