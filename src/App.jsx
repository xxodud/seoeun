import React, { useState, useEffect } from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import DessertOemView from './views/DessertOemView';
import ProductsView from './views/ProductsView';
import ScmQualityView from './views/ScmQualityView';
import SupportView from './views/SupportView';
import { GNB_CATEGORIES } from './data/siteData';
import './App.css';

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (!raw || raw === 'home') {
    return { catId: 'home', subId: null };
  }
  const [catId, subId] = raw.split('/');
  const foundCat = GNB_CATEGORIES.find((c) => c.id === catId);
  if (!foundCat) {
    return { catId: 'home', subId: null };
  }
  const validSub =
    foundCat.subItems.find((s) => s.id === subId) || foundCat.subItems[0];
  return { catId: foundCat.id, subId: validSub.id };
}

export default function App() {
  const [currentView, setCurrentView] = useState(parseHash);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentView(parseHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (catId, subId) => {
    if (catId === 'home') {
      window.location.hash = 'home';
      setCurrentView({ catId: 'home', subId: null });
    } else {
      window.location.hash = `${catId}/${subId}`;
      setCurrentView({ catId, subId });
    }
  };

  return (
    <div className="app-shell">
      <LayoutHeader currentView={currentView} onNavigate={handleNavigate} />

      <main className="main-content-area">
        {currentView.catId === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentView.catId === 'about' && (
          <AboutView subId={currentView.subId} onNavigate={handleNavigate} />
        )}
        {currentView.catId === 'dessert' && (
          <DessertOemView subId={currentView.subId} onNavigate={handleNavigate} />
        )}
        {currentView.catId === 'products' && (
          <ProductsView subId={currentView.subId} onNavigate={handleNavigate} />
        )}
        {currentView.catId === 'scm' && (
          <ScmQualityView subId={currentView.subId} onNavigate={handleNavigate} />
        )}
        {currentView.catId === 'support' && (
          <SupportView subId={currentView.subId} onNavigate={handleNavigate} />
        )}
      </main>

      <LayoutFooter onNavigate={handleNavigate} />
    </div>
  );
}
