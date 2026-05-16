import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 mb-8 mt-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
          Contato
        </h1>
        <p className="text-white/50 font-mono text-sm mt-4 uppercase tracking-widest">
          &gt; Estabelecendo conexão segura com a rede primária...
        </p>
      </div>
      
      <Contact />
    </div>
  );
};

export default ContactPage;
