import React, { useState } from 'react';
import {
  Quote,
  HeartHandshake,
  Zap,
  SearchCheck,
  TrendingUp,
  ShieldCheck,
  ZoomIn,
  X,
  Building2,
  CheckCircle2,
  FileDown,
} from 'lucide-react';
import {
  COMPANY_INFO,
  HISTORY_DATA,
  REVENUE_GROWTH,
  PARTNER_BRANDS,
} from '../data/siteData';

export default function AboutView({ subId, onNavigate }) {
  const [historyTab, setHistoryTab] = useState('ALL');
  const [partnerFilter, setPartnerFilter] = useState('ALL');
  const [zoomImage, setZoomImage] = useState(null);

  const filteredHistory =
    historyTab === 'ALL'
      ? HISTORY_DATA
      : HISTORY_DATA.filter((item) => item.periodKey === historyTab);

  const partnerCategories = ['ALL', '카페·디저트', '대기업·유통', '외식·뷔페', 'QSR·프랜차이즈', '치킨·주점', '종합식품·제조'];
  const filteredPartners =
    partnerFilter === 'ALL'
      ? PARTNER_BRANDS
      : PARTNER_BRANDS.filter((p) => p.category === partnerFilter);

  return (
    <div className="subpage-container">
      {/* =========================================================
          SUB-PAGE 1: 기업개요 및 인사말 (overview)
      ========================================================= */}
      {subId === 'overview' && (
        <div className="about-overview-page">
          {/* Ourhome-style Intro Head Area */}
          <div className="sub-head-area">
            <span className="sub-head-eyebrow">CEO MESSAGE &amp; BRAND IDENTITY</span>
            <h3 className="sub-head-title">
              &ldquo;가장 신뢰할 수 있는 식자재 파트너가 되겠습니다.&rdquo;
            </h3>
            <p className="sub-head-copy">
              안정적인 소싱과 혁신적인 공급망 관리를 통해 고객사의 지속 가능한 가치를 창출합니다.
              <br />
              단순 식자재 유통을 넘어 기성품 뿐만 아니라 필요한 모든 것을 직접 기획하고 개발하여 제안합니다.
            </p>
          </div>

          {/* CEO Message + Brand Identity 2-Column Split (From Company Profile p.3) */}
          <div className="ceo-identity-grid">
            <div className="ceo-card">
              <div className="card-section-tag">01 · 대표 인사말 (CEO MESSAGE)</div>
              <h4>
                고객사가 성장에만 집중할 수 있는 환경을 만드는 것,
                <br />
                그것이 서은의 존재 이유입니다.
              </h4>
              <p className="ceo-body-text">
                식품 B2B 현장의 수많은 문제—<strong>소싱 불안정성, 느린 대응, 품질 이슈</strong>를 직접 경험하며 이를 근본적으로 해결하고자 주식회사 서은을 설립하였습니다.
              </p>
              <p className="ceo-body-text">
                글로벌 산지 및 일본 최정상 제조공장과의 독점 직수입 네트워크, 상시 영하 18도를 보증하는 철저한 콜드체인, 그리고 국내 트렌드에 최적화된 R&amp;D 커스텀 역량을 바탕으로 고객사의 가장 든든한 성장 파트너가 되겠습니다.
              </p>
              <div className="ceo-sign-row">
                <div>
                  <span className="sign-role">주식회사 서은 대표이사</span>
                  <strong className="sign-name">김 기 석</strong>
                </div>
                <Quote size={36} className="quote-watermark" />
              </div>
            </div>

            <div className="identity-card">
              <div className="card-section-tag gold">02 · 서은(瑞殷)의 의미 (BRAND IDENTITY)</div>
              <div className="hanja-badge-row">
                <div className="hanja-circle">
                  <span className="hanja-char">瑞</span>
                  <span className="hanja-mean">상서로울 서</span>
                </div>
                <div className="hanja-plus">+</div>
                <div className="hanja-circle">
                  <span className="hanja-char">殷</span>
                  <span className="hanja-mean">풍성할 은</span>
                </div>
              </div>
              <h4>
                상서로운 기운으로 시작하여
                <br />
                세상을 풍요롭게 채우는 가치
              </h4>
              <p className="ceo-body-text">
                <strong>&lsquo;서은(瑞殷)&rsquo;</strong>은 대표의 자녀 이름입니다.{' '}
                <strong>&ldquo;내 아이에게 먹인다는 정직한 마음가짐&rdquo;</strong>으로 안전한 식자재를 엄격하게 선별하며, 우리의 파트너들에게 복된 행운과 풍요로운 성장이 깃들기를 바라는 진심을 담았습니다.
              </p>
              <div className="identity-promise-box">
                <CheckCircle2 size={18} />
                <span>정직한 원료 선별 · 투명한 검사 데이터 공개 · 파트너 동반 성장</span>
              </div>
            </div>
          </div>

          {/* Our Role (우리의 역할 3대 핵심 - From Company Profile p.8) */}
          <div className="role-section-block">
            <div className="block-title-bar">
              <span className="eyebrow">WHO WE ARE &amp; VISION</span>
              <h4>우리의 역할 — &ldquo;고객사의 고민이 곧 서은의 고민이며, 우리는 최적의 해답을 제시합니다.&rdquo;</h4>
            </div>

            <div className="role-cards-3col">
              <div className="role-card">
                <div className="role-icon-wrap">
                  <Zap size={24} />
                </div>
                <span className="role-step">ROLE 01</span>
                <h5>신속한 해결사</h5>
                <p>
                  <strong>식품업계의 114</strong>로서 고객사의 까다로운 식재료 소싱 고민과 수급 이슈를 즉각적으로 해결합니다.
                </p>
              </div>

              <div className="role-card">
                <div className="role-icon-wrap">
                  <HeartHandshake size={24} />
                </div>
                <span className="role-step">ROLE 02</span>
                <h5>준비된 협력사</h5>
                <p>
                  단순 유통을 넘어 신메뉴 기획·개발, RTE 조리 효율화 및 매장 운영 최적화 솔루션을 함께 고민합니다.
                </p>
              </div>

              <div className="role-card">
                <div className="role-icon-wrap">
                  <SearchCheck size={24} />
                </div>
                <span className="role-step">ROLE 03</span>
                <h5>검증된 소싱처</h5>
                <p>
                  일본 니혼햄, 베트남 SSB 등 국내외 독점 네트워크를 통해 우수한 가격 경쟁력과 글로벌 품질을 동시에 확보합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Profile Summary Table */}
          <div className="corp-table-section">
            <h4 className="table-heading">기업 일반 현황 (Company Profile)</h4>
            <div className="spec-table-wrap">
              <table className="ourhome-spec-table">
                <tbody>
                  <tr>
                    <th>법인명 (국문 / 영문)</th>
                    <td>{COMPANY_INFO.nameKo} / {COMPANY_INFO.nameEn}</td>
                    <th>대표이사</th>
                    <td>{COMPANY_INFO.ceo}</td>
                  </tr>
                  <tr>
                    <th>설립일 (개업연월일)</th>
                    <td>{COMPANY_INFO.established}</td>
                    <th>사업자등록번호</th>
                    <td>{COMPANY_INFO.bizRegNo} (법인등록번호: {COMPANY_INFO.corpRegNo})</td>
                  </tr>
                  <tr>
                    <th>수입식품 영업등록</th>
                    <td colSpan={3}>{COMPANY_INFO.importLicenseNo}</td>
                  </tr>
                  <tr>
                    <th>주요 사업 영역</th>
                    <td colSpan={3}>
                      글로벌 프리미엄 디저트 독점 수입(니혼햄·일본 TOP 3 케이크 공장), 식자재 OEM·ODM 기획 개발, RTE(Ready To Eat) 가니쉬 및 농수축산·가공식품 B2B 유통
                    </td>
                  </tr>
                  <tr>
                    <th>오피스 / 물류 거점</th>
                    <td colSpan={3}>
                      <strong>오피스:</strong> {COMPANY_INFO.hqOffice} &nbsp;|&nbsp;{' '}
                      <strong>물류거점:</strong> {COMPANY_INFO.logisticsHub}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          SUB-PAGE 2: 히스토리 - 주요 연혁 및 성장추이 (history)
          Modeled directly after https://www.ourhome.co.kr/about/history.do?glo=KOR
      ========================================================= */}
      {subId === 'history' && (
        <div className="about-history-page">
          {/* 1. Ourhome-style Centered Sub-Head Area */}
          <div className="sub-head-area">
            <span className="sub-head-eyebrow">CORPORATE HISTORY &amp; PERFORMANCE</span>
            <h3 className="sub-head-title">
              &lsquo;신뢰&rsquo;와 &lsquo;품질&rsquo;이라는 한 길로 도약하는 서은의 발자취
            </h3>
            <p className="sub-head-copy">
              2024년 12월 법인 설립 이래, 독보적인 글로벌 식자재 소싱 경쟁력과 독점 네트워크 확장을 바탕으로
              <br />
              대한민국 외식·카페 B2B 시장에서 가장 가파른 성장 모멘텀을 만들어가고 있습니다.
            </p>
          </div>

          {/* 2. Ourhome-style Interactive Decade/Period Tab Bar (.tab1-area) */}
          <div className="ourhome-tab1-area" role="tablist" aria-label="연혁 연도별 탭">
            <button
              type="button"
              role="tab"
              aria-selected={historyTab === 'ALL'}
              className={`ourhome-tab-btn ${historyTab === 'ALL' ? 'active' : ''}`}
              onClick={() => setHistoryTab('ALL')}
            >
              전체 연혁 (2024~현재)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={historyTab === '2026'}
              className={`ourhome-tab-btn ${historyTab === '2026' ? 'active' : ''}`}
              onClick={() => setHistoryTab('2026')}
            >
              2026년 (글로벌 확장·도약기)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={historyTab === '2025'}
              className={`ourhome-tab-btn ${historyTab === '2025' ? 'active' : ''}`}
              onClick={() => setHistoryTab('2025')}
            >
              2025년 (인프라·오딧 검증기)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={historyTab === '2024'}
              className={`ourhome-tab-btn ${historyTab === '2024' ? 'active' : ''}`}
              onClick={() => setHistoryTab('2024')}
            >
              2024년 (창립기)
            </button>
          </div>

          {/* 3. Ourhome-style Timeline List (.tab-cont.t-line > ul.history-list-box) */}
          <div className="ourhome-history-cont">
            <ul className="ourhome-history-list-box">
              {filteredHistory.map((yearBlock) => (
                <li key={yearBlock.year} className="ourhome-history-year-row">
                  {/* Left Column (~33%): Large 4-digit Year in signature brand color */}
                  <div className="history-year-left">
                    <span className="year-big-digits">{yearBlock.year}</span>
                    <p className="year-sub-theme">{yearBlock.yearLabel}</p>
                    <span className="year-revenue-pill">{yearBlock.highlightBadge}</span>
                  </div>

                  {/* Right Column (~67%): Milestone items with month & square bullet */}
                  <div className="history-events-right">
                    <ul className="milestone-items">
                      {yearBlock.events.map((ev, idx) => (
                        <li
                          key={`${yearBlock.year}-${idx}`}
                          className={`milestone-item ${ev.isHighlight ? 'is-featured' : ''}`}
                        >
                          <span className="milestone-month">{ev.month}</span>
                          <div className="milestone-content">
                            <strong className="milestone-title">
                              <span className="milestone-dot" aria-hidden="true" />
                              {ev.title}
                            </strong>
                            <p className="milestone-detail">{ev.detail}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Revenue Growth & Financial Performance Section (From Company Profile p.7) */}
          <div className="revenue-growth-panel">
            <div className="revenue-left-dark">
              <span className="rev-eyebrow">REVENUE GROWTH &amp; PERFORMANCE</span>
              <h4>가파른 성장세 도약</h4>
              <p>
                2024년 12월 법인 설립 이래, 독보적인 식자재 소싱 경쟁력과 독점 네트워크 확장을 바탕으로 강력한 매출 성장 모멘텀을 이어가고 있습니다.
              </p>

              <div className="rev-timeline-mini">
                <div className="rev-mini-row">
                  <span className="rev-yr">2024.12</span>
                  <strong>주식회사 서은 법인 설립 (인프라 구축)</strong>
                </div>
                <div className="rev-mini-row">
                  <span className="rev-yr">2025년</span>
                  <strong>매출 10억 원 달성</strong>
                </div>
                <div className="rev-mini-row gold">
                  <span className="rev-yr">2026년 (3분기 기준)</span>
                  <strong>약 25억 원 매출 예상 (150% ↑)</strong>
                </div>
              </div>
            </div>

            <div className="revenue-right-chart">
              <div className="chart-head">
                <h5>연도별 매출 성장 추이 (단위: 억 원)</h5>
                <span className="chart-growth-badge">전년 대비 +150% 고성장</span>
              </div>

              <div className="bar-chart-stage">
                {REVENUE_GROWTH.map((bar, i) => (
                  <div key={bar.period} className={`bar-col-wrap col-${i}`}>
                    <div className="bar-top-value">
                      {bar.badge && <span className="bar-growth-pill">{bar.badge}</span>}
                      <strong>{bar.amount}</strong>
                      <span>{bar.label}</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className={`bar-fill bar-fill-${i}`}
                        style={{ height: `${bar.numericHeight}%` }}
                      />
                    </div>
                    <div className="bar-x-label">{bar.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          SUB-PAGE 3: 기업인증 및 주요 협력사 (certification)
      ========================================================= */}
      {subId === 'certification' && (
        <div className="about-cert-page">
          <div className="sub-head-area">
            <span className="sub-head-eyebrow">COMPLIANCE, CERTIFICATES &amp; PARTNERS</span>
            <h3 className="sub-head-title">투명한 법적 인허가와 검증된 브랜드가 선택한 퀄리티</h3>
            <p className="sub-head-copy">
              주식회사 서은은 엄격한 법적 절차와 품질 검증을 거쳐 투명하고 안전한 식자재 공급망을 운영하며,
              <br />
              글로벌 프랜차이즈부터 국내 대형 식품 기업까지 까다로운 오딧(Audit) 기준을 충족하고 있습니다.
            </p>
          </div>

          {/* Certificates View + Spec Table (From Company Profile p.4) */}
          <div className="cert-showcase-grid">
            <div className="cert-docs-pair">
              <div
                className="cert-doc-frame"
                onClick={() =>
                  setZoomImage({
                    src: '/assets/company_profile_p4_img3_1462x2047.jpeg',
                    title: '사업자등록증 (법인사업자 : 669-87-03428)',
                  })
                }
              >
                <div className="cert-img-holder">
                  <img
                    src="/assets/company_profile_p4_img3_1462x2047.jpeg"
                    alt="주식회사 서은 사업자등록증"
                  />
                  <div className="cert-zoom-overlay">
                    <ZoomIn size={22} />
                    <span>클릭하여 원본 확대 보기</span>
                  </div>
                </div>
                <div className="cert-caption">
                  <strong>사업자등록증 (법인사업자)</strong>
                  <span>등록번호 : 669-87-03428 | 용인세무서장</span>
                </div>
              </div>

              <div
                className="cert-doc-frame"
                onClick={() =>
                  setZoomImage({
                    src: '/assets/company_profile_p4_img4_708x1000.jpeg',
                    title: '수입식품등 수입·판매업 영업등록증 (제 20250016110 호)',
                  })
                }
              >
                <div className="cert-img-holder">
                  <img
                    src="/assets/company_profile_p4_img4_708x1000.jpeg"
                    alt="주식회사 서은 수입식품 영업등록증"
                  />
                  <div className="cert-zoom-overlay">
                    <ZoomIn size={22} />
                    <span>클릭하여 원본 확대 보기</span>
                  </div>
                </div>
                <div className="cert-caption">
                  <strong>수입식품 영업등록증</strong>
                  <span>제 20250016110 호 | 경인지방식품의약품안전청장</span>
                </div>
              </div>
            </div>

            <div className="cert-info-panel">
              <span className="eyebrow">OFFICIAL LICENSES &amp; INFRASTRUCTURE</span>
              <h4>기업 인증 및 면허 상세 내역</h4>
              <p>
                수입식품안전관리 특별법 제15조에 따른 정식 수입·판매업 등록과 전국 단위 3온도대 물류 거점을 기반으로 안전한 B2B 공급망을 보증합니다.
              </p>

              <div className="cert-kv-list">
                <div className="cert-kv-item">
                  <span className="kv-label">사업자 등록 번호</span>
                  <strong className="kv-val">669-87-03428 (법인사업자 : 주식회사 서은)</strong>
                </div>
                <div className="cert-kv-item">
                  <span className="kv-label">수입식품 영업등록</span>
                  <strong className="kv-val">제 20250016110 호 (전문 수입 유통 · 경인지방식약청)</strong>
                </div>
                <div className="cert-kv-item">
                  <span className="kv-label">핵심 물류 거점</span>
                  <strong className="kv-val">경기도 이천 덕평 물류센터 (상온 / 냉동 / 냉장 통합 운영)</strong>
                </div>
                <div className="cert-kv-item">
                  <span className="kv-label">글로벌 품질 오딧(Audit)</span>
                  <strong className="kv-val">글로벌 브랜드 &lsquo;INSPIRE&rsquo; 공급사 등록 및 RTE 상품 Audit 통과 (L2 Green Grade)</strong>
                </div>
                <div className="cert-kv-item">
                  <span className="kv-label">파트너 제조공장 인증</span>
                  <strong className="kv-val">HACCP · ISO 국제규격 (니혼햄 이사하야 플랜트) / FSSC 22000 (일본 TOP 3 케이크 공장)</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Partners Section (From Company Profile p.5) */}
          <div className="strategic-partners-section">
            <div className="block-title-bar">
              <span className="eyebrow">STRATEGIC PARTNERS</span>
              <h4>주요 협력사 및 납품 네트워크</h4>
            </div>

            <div className="partners-full-wall">
              <img
                src="/assets/partners_wall.png"
                alt="주식회사 서은 주요 협력사 로고 전체"
              />
            </div>

            {/* Filterable Partner Brand Cards */}
            <div className="partner-filter-bar">
              {partnerCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${partnerFilter === cat ? 'active' : ''}`}
                  onClick={() => setPartnerFilter(cat)}
                >
                  {cat === 'ALL' ? `전체 파트너 (${PARTNER_BRANDS.length})` : cat}
                </button>
              ))}
            </div>

            <div className="partner-grid-cards">
              {filteredPartners.map((partner) => (
                <div
                  key={partner.name}
                  className={`partner-brand-card ${partner.highlight ? 'is-key' : ''}`}
                >
                  <span className="partner-cat-label">{partner.category}</span>
                  <strong>{partner.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Zoom Lightbox Modal */}
      {zoomImage && (
        <div className="modal-backdrop" onClick={() => setZoomImage(null)}>
          <div className="zoom-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="zoom-modal-head">
              <h4>{zoomImage.title}</h4>
              <button type="button" onClick={() => setZoomImage(null)}>
                <X size={22} />
              </button>
            </div>
            <div className="zoom-modal-body">
              <img src={zoomImage.src} alt={zoomImage.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
