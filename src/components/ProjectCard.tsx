import React from 'react';
import GlassCard from './GlassCard';
import type { Project } from '../data/projects';
import { usePreview } from '../context/PreviewContext';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  isHorizontal?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, isHorizontal = false }) => {
  const { openPreview } = usePreview();
  const { t } = useTranslation();
  return (
    <div onClick={onClick} className={`cursor-pointer group h-full ${isHorizontal ? 'w-full' : ''}`}>
      <GlassCard hoverable className={`h-full flex ${isHorizontal ? 'flex-col md:flex-row gap-8 md:items-center' : 'flex-col'} border-white/5 bg-white/[0.02]`}>
        
        <div className={`flex flex-col ${isHorizontal ? 'flex-1' : 'flex-grow'}`}>
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest mb-1">
                {t(`projects.categories.${project.category}`, project.category)} // {t(`project.status.${project.status}`, project.status)}
              </span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
            {t(`projects.list.${project.id}.name`, project.name)}
          </h3>
            </div>
            <span className="px-2 py-0.5 border border-white/20 text-[10px] font-mono uppercase text-white/60 whitespace-nowrap">
              {project.isPrivate ? t('project.private', 'Privado') : t('project.public', 'Público')}
            </span>
          </div>
          
          <p className="text-white/80 text-[15px] mt-2 font-sans line-clamp-3">
            {t(`projects.list.${project.id}.description`, project.description)}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-5 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded-sm text-white/70 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className={`flex gap-4 relative z-10 ${isHorizontal ? 'w-full md:w-auto md:flex-col justify-center min-w-[200px]' : 'mt-auto pt-6 w-full'}`}>
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 text-center bg-white text-black py-3 text-xs font-mono font-bold uppercase tracking-widest hover:invert transition-all duration-300"
            >
              Repo
            </a>
          )}
          {project.demoUrl && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                openPreview(project.demoUrl!, project.name);
              }}
              className="flex-1 text-center border border-white/20 py-3 text-xs font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              Deploy
            </button>
          )}
        </div>
      </GlassCard>
    </div>
  );
};

export default ProjectCard;
