import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Privacy from './pages/Privacy.tsx';
import Legalnotice from './pages/Legalnotice.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/legalnotice" element={<Legalnotice />} />
      </Routes>
    </Router>
  </StrictMode>
);
