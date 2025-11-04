import { StrictMode, createContext, useState, useEffect, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Privacy from './pages/Privacy.tsx';
import Legalnotice from './pages/Legalnotice.tsx';
import './index.css';

export const LanguageContext = createContext<{
  language: 'en' | 'de';
  setLanguage: (lang: 'en' | 'de') => void;
}>({
  language: 'en',
  setLanguage: () => {},
});

function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'de'>(() => {
    const saved = localStorage.getItem('language');
    return (saved as 'en' | 'de') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legalnotice" element={<Legalnotice />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </StrictMode>
);
