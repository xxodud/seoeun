import React, { useState, useEffect } from 'react';
import { ArrowUp, ShieldCheck, ArrowUpRight } from 'lucide-react';
import SeoeunLogo from './SeoeunLogo';
import { COMPANY_INFO } from '../data/siteData';

const QUICK_LINKS = [
  { label: '니혼햄 프리미엄 디저트', catId: 'dessert', subId: 'nipponham' },
  { label: '일본 케이크 OEM·ODM', catId: 'dessert', subId: 'oem-odm' },
  { label: '2026 신제품 라인업', catId: 'products', subId: 'new-2026' },
  { label: 'RTE & 식자재 포트폴리오', catId: 'products', subId: 'rte-solution' },
  { label: '글로벌 SCM 및 콜드체인', catId: 'scm', subId: 'global-scm' },
];

export default function LayoutFooter({ onNavigate }) {
  const [familyOpen, setFamilyOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (catId, subId) => {
    onNavigate(catId, subId);
    setFamilyOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="site-footer">
        <div className="footer-inner">
          {/* Top Row: Quick Corporate Links & Business Shortcuts */}
          <div className="footer-top-row">
            <ul className="footer-policy-links">
              <li>
                <button type="button" onClick={() => handleNav('about', 'overview')}>
                  기업소개
                </button>
              </li>
              <li className="divider">|</li>
              <li>
                <button type="button" onClick={() => handleNav('about', 'history')}>
                  주요연혁
                </button>
              </li>
              <li className="divider">|</li>
              <li>
                <button
                  type="button"
                  className="highlight-policy"
                  onClick={() => handleNav('about', 'certification')}
                >
                  기업인증 및 법적면허
                </button>
              </li>
              <li className="divider">|</li>
              <li>
                <button type="button" onClick={() => handleNav('support', 'inquiry')}>
                  식자재·디저트 납품문의
                </button>
              </li>
              <li className="divider">|</li>
              <li>
                <button type="button" onClick={() => handleNav('support', 'location')}>
                  오시는 길·물류거점
                </button>
              </li>
            </ul>

            {/* Right: Business Division Quick Selector (Ourhome FAMILY SITE style) */}
            <div className="footer-family-wrap">
              <div className="family-select-box">
                <button
                  type="button"
                  className="family-trigger"
                  onClick={() => setFamilyOpen(!familyOpen)}
                >
                  <span>BUSINESS LINEUP</span>
                  <span>{familyOpen ? '▼' : '▲'}</span>
                </button>
                {familyOpen && (
                  <ul className="family-up-menu">
                    {QUICK_LINKS.map((item) => (
                      <li key={item.subId}>
                        <button
                          type="button"
                          className="family-menu-btn"
                          onClick={() => handleNav(item.catId, item.subId)}
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight size={13} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                type="button"
                className="family-go-btn"
                onClick={() => handleNav('support', 'inquiry')}
              >
                문의
              </button>
            </div>
          </div>

          {/* Bottom Row: Company Info, Contacts & Compliance Badge */}
          <div className="footer-bottom-row">
            <div className="footer-brand-info">
              <div className="footer-logo-line">
                <SeoeunLogo variant="white" size="sm" />
                <span className="footer-corp-name">
                  {COMPANY_INFO.nameKo} ({COMPANY_INFO.nameEn})
                </span>
              </div>

              <div className="footer-meta-lines">
                <p>
                  <span>대표이사 : {COMPANY_INFO.ceo}</span>
                  <span className="meta-pipe">|</span>
                  <span>사업자등록번호 : {COMPANY_INFO.bizRegNo}</span>
                  <span className="meta-pipe">|</span>
                  <span>수입식품 영업등록 : 제 20250016110 호</span>
                </p>
                <p>
                  <span>오피스 : {COMPANY_INFO.hqOffice}</span>
                  <span className="meta-pipe">|</span>
                  <span>물류거점 : {COMPANY_INFO.logisticsHub}</span>
                </p>
                <p>
                  <span>
                    대표전화 : {COMPANY_INFO.mainPhone} (FAX : {COMPANY_INFO.mainFax})
                  </span>
                  <span className="meta-pipe">|</span>
                  <span>대표이메일 : {COMPANY_INFO.mainEmail}</span>
                  <span className="meta-pipe">|</span>
                  <span className="sales-highlight">
                    영업팀 직통({COMPANY_INFO.salesManager.name}) : {COMPANY_INFO.salesManager.phone} ({COMPANY_INFO.salesManager.email})
                  </span>
                </p>
              </div>

              <p className="footer-copyright">
                COPYRIGHT © 2026 SEOEUN CO., LTD. ALL RIGHTS RESERVED.
              </p>
            </div>

            {/* Right Certification Mark Box */}
            <div className="footer-cert-badges">
              <button
                type="button"
                className="cert-badge-card"
                onClick={() => handleNav('about', 'certification')}
              >
                <ShieldCheck size={24} className="cert-icon" />
                <div className="cert-text">
                  <strong>식약처 수입식품 영업등록</strong>
                  <span>제 20250016110 호 · 클릭하여 인증서 보기</span>
                </div>
              </button>
              <button
                type="button"
                className="cert-badge-card gold"
                onClick={() => handleNav('scm', 'quality-rnd')}
              >
                <ShieldCheck size={24} className="cert-icon" />
                <div className="cert-text">
                  <strong>HACCP · FSSC 22000 · L2 Green</strong>
                  <span>글로벌 제조공장 &amp; INSPIRE 오딧 통과</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll-To-Top Button */}
      {showTopBtn && (
        <button
          type="button"
          className="scroll-top-fab"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="페이지 상단으로 이동"
          title="TOP"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
