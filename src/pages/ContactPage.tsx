import React from 'react';
import Contact from '../components/Contact';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 mb-8 mt-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
          {t('contact.page_title')}
        </h1>
        <p className="text-white/70 font-mono text-sm mt-4 uppercase tracking-widest">
          {t('contact.page_desc')}
        </p>
      </div>
      
      <Contact />
    </div>
  );
};

export default ContactPage;
