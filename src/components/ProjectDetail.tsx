import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import { GitBranch, ExternalLink, ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Project } from '../data/projects';
import { usePreview } from '../context/PreviewContext';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const { openPreview } = usePreview();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = React.useCallback(() => {
    if (project.gallery && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
    }
  }, [project.gallery, lightboxIndex]);

  const handlePrev = React.useCallback(() => {
    if (project.gallery && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + project.gallery.length) % project.gallery.length);
    }
  }, [project.gallery, lightboxIndex]);

  useEffect(() => {
    // Disable background page scrolling when project details overlay is active
    document.body.style.overflow = 'hidden';
    return () => {
      // Restore scroll when unmounted
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <div className="fixed inset-0 z-50 bg-brand-black/95 backdrop-blur-xl overflow-y-auto overscroll-contain">
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
                <button 
                  onClick={() => openPreview(project.demoUrl!, project.name)}
                  className="flex-1 flex items-center justify-center gap-3 border-2 border-white/20 px-8 py-4 font-mono font-bold uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300 text-base cursor-pointer"
                >
                  <ExternalLink size={20} />
                  Acessar Site
                </button>
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
          
          {project.gallery && project.gallery.length > 0 && (
            <div className="border-t border-white/10 pt-8 mt-8">
              <h3 className="font-mono uppercase tracking-widest text-sm text-white/50 mb-6">Galeria / Visuals</h3>
              <div className="flex flex-col gap-8">
                {project.gallery.map((imgSrc, idx) => (
                  <div 
                    key={idx} 
                    className="relative group overflow-hidden border border-white/10 bg-white/5 rounded-sm cursor-pointer"
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${project.name} asset ${idx + 1}`} 
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
                      loading="lazy" 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

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

      {/* Lightbox Modal via Portal para ignorar restrições de z-index/overflow */}
      {lightboxIndex !== null && project.gallery && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-brand-black/95 backdrop-blur-2xl flex items-center justify-center p-4 transition-all"
          onClick={() => setLightboxIndex(null)}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
            className="fixed top-6 right-6 md:top-8 md:right-8 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-[10000]"
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="fixed left-2 md:left-8 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-[10000]"
          >
            <ChevronLeft size={48} />
          </button>
          
          <img 
            src={project.gallery[lightboxIndex]} 
            alt="Expanded view" 
            className="max-w-[95vw] max-h-[90vh] object-contain shadow-2xl relative z-[9999]"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="fixed right-2 md:right-8 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-[10000]"
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="fixed bottom-6 font-mono text-xs tracking-widest text-white/50 z-[10000]">
            {lightboxIndex + 1} / {project.gallery.length}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default ProjectDetail;
