import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FloatingPlayer from '../components/FloatingPlayer';
import ProjectPreview from '../components/ProjectPreview';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-white selection:text-black flex flex-col">
      <div className="scanline"></div>
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-white/[0.03] blur-[100px] rounded-full"></div>
      </div>
      
      <Navbar />

      <div className="flex-1">
        <Outlet />
      </div>

      <footer className="px-6 py-12 max-w-7xl mx-auto w-full border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity mt-20">
        <div className="font-mono text-xs uppercase tracking-widest text-center md:text-left">
          <p>© {new Date().getFullYear()} PROJETO R.A.M. LICENÇA MIT.</p>
          <p className="mt-1">SYSTEM ALL CLEAR.</p>
        </div>
        
        <div className="flex gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="https://github.com/Cauan33XL" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/cauan33xl/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:cauan33xl@proton.me" className="hover:text-white transition-colors">Email</a>
        </div>
      </footer>
      
      <FloatingPlayer />
      <ProjectPreview />
    </div>
  );
};

export default Layout;
