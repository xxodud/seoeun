import React, { useState, useEffect, useRef } from 'react';
import {
  Home,
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  ArrowUpRight,
} from 'lucide-react';
import SeoeunLogo from './SeoeunLogo';
import { GNB_CATEGORIES, COMPANY_INFO } from '../data/siteData';

export default function LayoutHeader({ currentView, onNavigate }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState('about');
  const [lnbCatOpen, setLnbCatOpen] = useState(false);
  const [lnbSubOpen, setLnbSubOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const lnbRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (lnbRef.current && !lnbRef.current.contains(e.target)) {
        setLnbCatOpen(false);
        setLnbSubOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHome = currentView.catId === 'home';
  const activeCategory = GNB_CATEGORIES.find((c) => c.id === currentView.catId) || GNB_CATEGORIES[0];
  const activeSubItem =
    activeCategory.subItems.find((s) => s.id === currentView.subId) || activeCategory.subItems[0];

  const handleSelectNav = (catId, subId) => {
    onNavigate(catId, subId);
    setMegaOpen(false);
    setMobileMenuOpen(false);
    setLnbCatOpen(false);
    setLnbSubOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* TOP HEADER / GNB */}
      <header
        className={`site-header ${isHome && !isScrolled && !megaOpen ? 'header-transparent' : 'header-solid'} ${
          megaOpen ? 'mega-active' : ''
        }`}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="header-inner">
          {/* Brand Logo */}
          <button
            type="button"
            className="logo-btn"
            onClick={() => handleSelectNav('home', null)}
            aria-label="주식회사 서은 메인으로 이동"
          >
            <SeoeunLogo
              variant={isHome && !isScrolled && !megaOpen ? 'white' : 'navy'}
              size="md"
            />
            <span className="logo-corp-kr">(주)서은</span>
          </button>

          {/* Desktop GNB Links */}
          <nav className="desktop-gnb" onMouseEnter={() => setMegaOpen(true)} aria-label="주요 메뉴">
            <ul className="gnb-list">
              {GNB_CATEGORIES.map((cat) => {
                const isActive = !isHome && currentView.catId === cat.id;
                return (
                  <li key={cat.id} className={`gnb-item ${isActive ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="gnb-link"
                      onClick={() => handleSelectNav(cat.id, cat.subItems[0].id)}
                    >
                      {cat.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Utility Controls */}
          <div className="header-utils">
            <button
              type="button"
              className="util-quote-btn"
              onClick={() => handleSelectNav('support', 'inquiry')}
            >
              <PhoneCall size={15} />
              <span>납품·샘플 문의</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="전체 메뉴 열기"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Ourhome-style Full-Width Mega Menu Dropdown */}
        {megaOpen && (
          <div className="mega-dropdown" onMouseEnter={() => setMegaOpen(true)}>
            <div className="mega-inner">
              <div className="mega-brand-col">
                <span className="mega-badge">TRUST &amp; FRESH</span>
                <h4>
                  글로벌 푸드 소싱 &amp;
                  <br />
                  OEM·ODM 솔루션 파트너
                </h4>
                <p>
                  안정적인 소싱과 상시 -18℃ 콜드체인으로 고객사의 지속 가능한 성장을 지원합니다.
                </p>
                <button
                  type="button"
                  className="mega-direct-btn"
                  onClick={() => handleSelectNav('about', 'history')}
                >
                  <span>서은 히스토리 보기</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="mega-cols-grid">
                {GNB_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="mega-col">
                    <button
                      type="button"
                      className="mega-col-title"
                      onClick={() => handleSelectNav(cat.id, cat.subItems[0].id)}
                    >
                      {cat.title}
                    </button>
                    <ul className="mega-sub-list">
                      {cat.subItems.map((sub) => {
                        const isCurrentSub =
                          !isHome && currentView.catId === cat.id && currentView.subId === sub.id;
                        return (
                          <li key={sub.id}>
                            <button
                              type="button"
                              className={`mega-sub-link ${isCurrentSub ? 'current' : ''}`}
                              onClick={() => handleSelectNav(cat.id, sub.id)}
                            >
                              <span className="square-bullet" aria-hidden="true" />
                              <span>{sub.title}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <aside className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-head">
              <SeoeunLogo variant="navy" size="sm" />
              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="메뉴 닫기"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mobile-drawer-cta-row single">
              <button
                type="button"
                className="mobile-cta-primary full"
                onClick={() => handleSelectNav('support', 'inquiry')}
              >
                <PhoneCall size={15} />
                <span>샘플·납품 문의 바로가기</span>
              </button>
            </div>

            <div className="mobile-accordion-list">
              <button
                type="button"
                className={`mobile-home-link ${isHome ? 'active' : ''}`}
                onClick={() => handleSelectNav('home', null)}
              >
                <Home size={16} />
                <span>메인 홈 (Main Home)</span>
              </button>

              {GNB_CATEGORIES.map((cat) => {
                const isOpen = mobileExpandedCat === cat.id;
                return (
                  <div key={cat.id} className="mobile-acc-group">
                    <button
                      type="button"
                      className={`mobile-acc-header ${isOpen ? 'open' : ''}`}
                      onClick={() => setMobileExpandedCat(isOpen ? '' : cat.id)}
                    >
                      <span>{cat.title}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                        }}
                      />
                    </button>
                    {isOpen && (
                      <ul className="mobile-acc-sublist">
                        {cat.subItems.map((sub) => {
                          const isCurrent =
                            !isHome && currentView.catId === cat.id && currentView.subId === sub.id;
                          return (
                            <li key={sub.id}>
                              <button
                                type="button"
                                className={`mobile-acc-sublink ${isCurrent ? 'current' : ''}`}
                                onClick={() => handleSelectNav(cat.id, sub.id)}
                              >
                                <span className="square-bullet" />
                                <div>
                                  <div className="sublink-title">{sub.title}</div>
                                  <div className="sublink-desc">{sub.desc}</div>
                                </div>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mobile-drawer-footer">
              <p className="mobile-hotline-label">B2B 영업팀 직통 문의 (김기원 대리)</p>
              <a href={`tel:${COMPANY_INFO.salesManager.phone}`} className="mobile-hotline-num">
                {COMPANY_INFO.salesManager.phone}
              </a>
              <p className="mobile-hotline-email">{COMPANY_INFO.salesManager.email}</p>
            </div>
          </aside>
        </div>
      )}

      {/* OURHOME-STYLE SUB-VISUAL BANNER & STICKY BREADCRUMB/LNB BAR (When on Sub-Pages) */}
      {!isHome && (
        <>
          <section className={`sub-depth-area theme-${activeCategory.bannerTheme}`}>
            <div className="sub-depth-overlay" />
            <div className="sub-depth-inner">
              <span className="sub-depth-en">{activeCategory.enTitle}</span>
              <h2 className="sub-depth-title">{activeCategory.title}</h2>
              <p className="sub-depth-desc">{activeCategory.bannerSubtitle}</p>
            </div>
          </section>

          {/* Sticky Breadcrumb / LNB Dropdown Bar modeled after Ourhome */}
          <div className="lnb-sticky-bar" ref={lnbRef}>
            <div className="lnb-inner">
              <div className="lnb-breadcrumb-cells">
                {/* Home icon cell */}
                <button
                  type="button"
                  className="lnb-home-cell"
                  onClick={() => handleSelectNav('home', null)}
                  title="홈으로 이동"
                  aria-label="홈으로 이동"
                >
                  <Home size={16} />
                </button>

                {/* 1st-Depth Category Dropdown */}
                <div className="lnb-dropdown-cell">
                  <button
                    type="button"
                    className={`lnb-dropdown-trigger ${lnbCatOpen ? 'open' : ''}`}
                    onClick={() => {
                      setLnbCatOpen(!lnbCatOpen);
                      setLnbSubOpen(false);
                    }}
                  >
                    <span>{activeCategory.title}</span>
                    <ChevronDown size={15} />
                  </button>
                  {lnbCatOpen && (
                    <ul className="lnb-dropdown-menu">
                      {GNB_CATEGORIES.map((cat) => (
                        <li key={cat.id}>
                          <button
                            type="button"
                            className={cat.id === activeCategory.id ? 'active' : ''}
                            onClick={() => handleSelectNav(cat.id, cat.subItems[0].id)}
                          >
                            {cat.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* 2nd-Depth Sub-Category Dropdown */}
                <div className="lnb-dropdown-cell second-depth">
                  <button
                    type="button"
                    className={`lnb-dropdown-trigger active-depth ${lnbSubOpen ? 'open' : ''}`}
                    onClick={() => {
                      setLnbSubOpen(!lnbSubOpen);
                      setLnbCatOpen(false);
                    }}
                  >
                    <span>{activeSubItem.title}</span>
                    <ChevronDown size={15} />
                  </button>
                  {lnbSubOpen && (
                    <ul className="lnb-dropdown-menu">
                      {activeCategory.subItems.map((sub) => (
                        <li key={sub.id}>
                          <button
                            type="button"
                            className={sub.id === activeSubItem.id ? 'active' : ''}
                            onClick={() => handleSelectNav(activeCategory.id, sub.id)}
                          >
                            {sub.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Right Quick Sibling Sub-Tab Pills on Desktop */}
              <div className="lnb-sibling-tabs">
                {activeCategory.subItems.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    className={`lnb-sibling-pill ${sub.id === activeSubItem.id ? 'active' : ''}`}
                    onClick={() => handleSelectNav(activeCategory.id, sub.id)}
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
