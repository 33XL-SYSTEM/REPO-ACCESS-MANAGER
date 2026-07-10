import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import { MusicProvider } from './context/MusicContext';
import { PreviewProvider } from './context/PreviewContext';

import ThreeDMode from './pages/ThreeDMode';
import Support from './pages/Support';

const App: React.FC = () => {
  return (
    <PreviewProvider>
      <MusicProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="3d" element={<ThreeDMode />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="support" element={<Support />} />
            </Route>
          </Routes>

        </BrowserRouter>
      </MusicProvider>
    </PreviewProvider>
  );
};

export default App;
