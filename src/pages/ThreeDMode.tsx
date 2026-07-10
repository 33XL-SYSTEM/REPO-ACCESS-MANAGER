import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ThreeDMode: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 w-full h-full z-40 bg-brand-black">
      <Link 
        to="/" 
        className="fixed top-24 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-brand-black/80 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-colors uppercase font-mono text-xs tracking-widest"
      >
        <ArrowLeft size={16} />
        {t('nav.home', 'Voltar')}
      </Link>
      <iframe 
        src="https://ram-3d-mode.vercel.app/" 
        className="w-full h-full border-none"
        title="3D Mode"
      />
    </div>
  );
};

export default ThreeDMode;
