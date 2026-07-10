import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Support: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed top-[65px] left-0 w-full h-[calc(100vh-65px)] z-40 bg-brand-black">
      <Link 
        to="/" 
        className="fixed top-24 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-brand-black/80 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-colors uppercase font-mono text-xs tracking-widest"
      >
        <ArrowLeft size={16} />
        {t('nav.home', 'Voltar')}
      </Link>
      <iframe 
        src="https://33xl-support-system.vercel.app/" 
        className="w-full h-full border-none"
        title="33XL Support System"
      />
    </div>
  );
};

export default Support;
