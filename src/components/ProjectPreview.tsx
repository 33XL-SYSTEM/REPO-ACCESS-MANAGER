import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, X, RotateCcw } from 'lucide-react';
import { usePreview } from '../context/PreviewContext';
import { useTranslation } from 'react-i18next';

const ProjectPreview: React.FC = () => {
  const { t } = useTranslation();
  const { previewUrl, previewTitle, closePreview } = usePreview();
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);

  // Synchronously reset loading state when the preview URL changes
  if (previewUrl !== prevUrl) {
    setPrevUrl(previewUrl);
    setIsLoading(true);
  }

  // Handle body overflow effect when preview opens/closes
  useEffect(() => {
    if (previewUrl) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [previewUrl]);

  // Handle keyboard events (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePreview();
      }
    };
    if (previewUrl) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewUrl, closePreview]);

  if (!previewUrl) return null;

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-brand-black/95 backdrop-blur-2xl flex flex-col animate-fade-in font-mono">
      {/* Scanline effect */}
      <div className="scanline"></div>

      {/* Header Bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md relative z-10">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="text-[10px] text-white/60 uppercase tracking-widest hidden sm:inline">{t('project.live_preview')}</span>
            <h2 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">{previewTitle}</h2>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Reload Button */}
          <button
            onClick={handleReload}
            title="Recarregar Preview"
            className="flex items-center gap-2 px-3 py-1.5 border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition-all text-[10px] uppercase tracking-wider"
          >
            <RotateCcw size={12} />
            <span className="hidden md:inline">{t('project.reload')}</span>
          </button>

          {/* Open in new tab Button */}
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition-all text-[10px] uppercase tracking-wider"
          >
            <ExternalLink size={12} />
            <span className="hidden md:inline">{t('project.new_tab')}</span>
          </a>

          {/* Close Button */}
          <button
            onClick={closePreview}
            className="flex items-center gap-2 px-3 py-1.5 border border-white/20 bg-white text-black hover:invert transition-all text-[10px] uppercase tracking-widest font-bold"
          >
            <X size={12} />
            <span>{t('project.close')}</span>
          </button>
        </div>
      </header>

      {/* Frame Container */}
      <div className="flex-1 w-full h-full relative bg-black">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-brand-black/95 z-0">
            <div className="text-center space-y-2 max-w-md px-6">
              <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-[11px] text-white uppercase tracking-widest font-bold">{t('project.starting')}</p>
              <div className="text-[9px] text-white/60 space-y-1 text-left font-mono border border-white/5 p-3 bg-white/[0.01]">
                <p>&gt; CONNECTING TO HOST: {new URL(previewUrl).hostname}</p>
                <p>&gt; ESTABLISHING SECURE TUNNEL OVER HTTPS...</p>
                <p>&gt; MOUNTING VIRTUAL FRAMEWORK AND RENDERING CANVAS...</p>
                <p className="animate-pulse">&gt; STATUS: LOADING ASSETS...</p>
              </div>
            </div>
          </div>
        )}

        <iframe
          key={iframeKey}
          src={previewUrl}
          title={`Preview ${previewTitle}`}
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full border-none transition-opacity duration-500 relative z-10 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock"
          allow="fullscreen; gamepad; autoplay"
        />
      </div>
    </div>,
    document.body
  );
};

export default ProjectPreview;
