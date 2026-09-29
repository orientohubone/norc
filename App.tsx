import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { LinePage } from './pages/LinePage';
import { About } from './pages/About';
import { VisualIdentity } from './pages/VisualIdentity';
import { Fair } from './pages/Fair';
import { AppShowcase } from './pages/AppShowcase';

const ScrollToSection = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView({ behavior: 'instant' });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
};

const App = () => (
  <HashRouter>
    <ScrollToSection />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/line/:id" element={<LinePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/identidade-visual" element={<VisualIdentity />} />
        <Route path="/feira" element={<Fair />} />
        <Route path="/app" element={<AppShowcase />} />
        <Route path="/shop" element={<Navigate to="/#linhas" replace />} />
        <Route path="/product/:id" element={<Navigate to="/#linhas" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  </HashRouter>
);
export default App;



