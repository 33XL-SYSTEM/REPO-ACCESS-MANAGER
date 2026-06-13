import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaGitlab } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* The Digital Business Card */}
        <div className="relative border-2 border-white/20 bg-brand-black/80 backdrop-blur-md p-1 p-px overflow-hidden group">
          {/* Subtle animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="border border-white/10 bg-brand-black p-8 md:p-16 relative">
            {/* Top Bar */}
            <div className="flex justify-center mb-16 border-b border-white/10 pb-4">
              <span className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 text-center">
                {t('contact.subtitle')}
              </span>
            </div>

            {/* Central Identity */}
            <div className="text-center mb-16 relative">
              {/* Background ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-24 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-6 leading-tight">
                Cauan Gabriel<br/>Matos Silva
              </h2>
              
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-white/20"></div>
                <span className="font-mono text-sm tracking-[0.2em] uppercase text-white">
                  Cognoscere Et Creare
                </span>
                <div className="h-px w-12 bg-white/20"></div>
              </div>
            </div>

            {/* Social Links & Contacts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-16">
              
              {/* Left Column: Socials */}
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.linkedin.com/in/cauan33xl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group/link"
                >
                  <div className="bg-white/10 group-hover/link:bg-black/10 p-3">
                    <FaLinkedin size={24} />
                  </div>
                  <div>
                    <span className="block font-bold tracking-widest uppercase text-sm">{t('contact.linkedin')}</span>
                    <span className="block font-mono text-xs opacity-70">@cauan33xl</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/Cauan33XL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group/link"
                >
                  <div className="bg-white/10 group-hover/link:bg-black/10 p-3">
                    <FaGithub size={24} />
                  </div>
                  <div>
                    <span className="block font-bold tracking-widest uppercase text-sm">{t('contact.github')}</span>
                    <span className="block font-mono text-xs opacity-70">@Cauan33XL</span>
                  </div>
                </a>

                <a 
                  href="https://gitlab.com/Cauan33XL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group/link"
                >
                  <div className="bg-white/10 group-hover/link:bg-black/10 p-3">
                    <FaGitlab size={24} />
                  </div>
                  <div>
                    <span className="block font-bold tracking-widest uppercase text-sm">{t('contact.gitlab')}</span>
                    <span className="block font-mono text-xs opacity-70">@Cauan33XL</span>
                  </div>
                </a>
              </div>

              {/* Right Column: Direct Contact & Others */}
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:cauan33xl@proton.me" 
                  className="flex items-center gap-6 p-4 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group/link"
                >
                  <div className="bg-white/10 group-hover/link:bg-black/10 p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <span className="font-mono text-sm tracking-widest uppercase">cauan33xl@proton.me</span>
                </a>

                <a 
                  href="https://wa.me/5561994338042" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group/link"
                >
                  <div className="bg-white/10 group-hover/link:bg-black/10 p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <span className="font-mono text-sm tracking-widest uppercase">(61) 99433-8042</span>
                </a>

                <a 
                  href="https://www.instagram.com/cauan33xl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group/link"
                >
                  <div className="bg-white/10 group-hover/link:bg-black/10 p-3 rounded-full">
                    <FaInstagram size={24} />
                  </div>
                  <span className="font-mono text-sm tracking-widest uppercase">Instagram / cauan33xl</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
