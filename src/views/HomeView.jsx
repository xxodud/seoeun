import React from 'react';
import {
  ArrowRight,
  Snowflake,
  Award,
  TrendingUp,
  Clock,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Building2,
  Truck,
  ChefHat,
  PhoneCall,
  MapPin,
} from 'lucide-react';
import { COMPANY_INFO, PARTNER_BRANDS } from '../data/siteData';

export default function HomeView({ onNavigate }) {
  const go = (catId, subId) => {
    onNavigate(catId, subId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-view">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-pattern" />
        <div className="hero-container">
          <div className="hero-text-col">
            <div className="hero-eyebrow-badge">
              <Sparkles size={14} />
              <span>GLOBAL FOOD OEM · ODM &amp; DISTRIBUTION PARTNER</span>
            </div>
            <h1 className="hero-headline">
              신뢰의 공급망 위에
              <br />
              <span className="gold-accent">최상의 식문화 가치</span>를
              <br />
              기획하고 연결합니다
            </h1>
            <p className="hero-lead">
              {COMPANY_INFO.slogan}
              <br />
              단순 식자재 유통을 넘어 일본 <strong>니혼햄(Nipponham)</strong> 및{' '}
              <strong>일본 TOP 3 디저트 제조공장 독점 직수입</strong>, 주방 효율을 혁신하는{' '}
              <strong>RTE 솔루션</strong>과 <strong>2026 전략 신제품</strong>까지 필요한 모든 것을 직접 기획·개발하여 공급합니다.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn-gold-solid"
                onClick={() => go('dessert', 'nipponham')}
              >
                <span>프리미엄 디저트·OEM 라인업</span>
                <ArrowRight size={18} />
              </button>
              <button
                type="button"
                className="btn-white-outline"
                onClick={() => go('about', 'history')}
              >
                <span>서은 히스토리 (연혁)</span>
              </button>
              <button
                type="button"
                className="btn-white-ghost"
                onClick={() => go('support', 'inquiry')}
              >
                <PhoneCall size={16} />
                <span>샘플 신청 및 납품 문의</span>
              </button>
            </div>

            <div className="hero-trust-pills">
              <div className="trust-pill">
                <ShieldCheck size={16} className="pill-icon" />
                <span>식약처 수입식품 영업등록 제20250016110호</span>
              </div>
              <div className="trust-pill">
                <Award size={16} className="pill-icon" />
                <span>INSPIRE 공급사 등록 · Audit L2 Green Grade</span>
              </div>
            </div>
          </div>

          {/* Right Overlapping Visual Collage */}
          <div className="hero-visual-col">
            <div className="hero-collage-grid">
              <div
                className="collage-card main-dessert-card"
                onClick={() => go('dessert', 'nipponham')}
              >
                <img
                  src="/assets/dessert_proposal_p5_img3_1024x1024.jpeg"
                  alt="니혼햄 냉동 수플레 팬케이크"
                />
                <div className="collage-caption">
                  <span className="caption-tag">NIPPONHAM EXCLUSIVE</span>
                  <strong>냉동 수플레 팬케이크 &amp; 우지말차 몽블랑</strong>
                  <p>국내 미공개 프리미엄 디저트 독점 공급</p>
                </div>
              </div>

              <div
                className="collage-card sub-card-top"
                onClick={() => go('products', 'new-2026')}
              >
                <img
                  src="/assets/new_catalog_p4_img3_1689x730.jpeg"
                  alt="2026 직화 숯불순살치킨 패티"
                />
                <div className="collage-caption compact">
                  <span className="caption-tag">2026 NEW LINEUP</span>
                  <strong>직화 육가공 · 50g 타피오카 · 흑마늘</strong>
                </div>
              </div>

              <div
                className="collage-card sub-card-bottom"
                onClick={() => go('scm', 'global-scm')}
              >
                <img
                  src="/assets/company_profile_p12_img1_640x720.jpeg"
                  alt="서은 콜드체인 물류 네트워크"
                />
                <div className="collage-caption compact">
                  <span className="caption-tag">-18℃ COLD CHAIN</span>
                  <strong>이천 덕평 물류센터 &amp; 글로벌 직소싱</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY STATS BAR */}
      <section className="stats-ribbon">
        <div className="container-1200">
          <div className="stats-grid">
            <div className="stat-box" onClick={() => go('about', 'history')}>
              <div className="stat-top">
                <TrendingUp size={20} className="stat-icon" />
                <span className="stat-badge">전년 대비 150% ↑</span>
              </div>
              <div className="stat-number">약 25억 원</div>
              <div className="stat-label">2026년 3Q 예상 매출 (2025년 10억 달성)</div>
            </div>

            <div className="stat-box" onClick={() => go('dessert', 'oem-odm')}>
              <div className="stat-top">
                <Award size={20} className="stat-icon" />
                <span className="stat-badge">FSSC 22000 · HACCP</span>
              </div>
              <div className="stat-number">TOP 3 · 66년</div>
              <div className="stat-label">일본 최대급 냉동케이크 공장 한국 독점 직수입</div>
            </div>

            <div className="stat-box" onClick={() => go('products', 'rte-solution')}>
              <div className="stat-top">
                <Clock size={20} className="stat-icon" />
                <span className="stat-badge">RTE EFFICIENCY</span>
              </div>
              <div className="stat-number">70% 이상 절감</div>
              <div className="stat-label">별도 손질·전처리 없는 RTE 조리 리소스 혁신</div>
            </div>

            <div className="stat-box" onClick={() => go('scm', 'global-scm')}>
              <div className="stat-top">
                <Snowflake size={20} className="stat-icon" />
                <span className="stat-badge">STRICT COLD CHAIN</span>
              </div>
              <div className="stat-number">상시 -18℃</div>
              <div className="stat-label">통관 직후부터 전국 가맹점까지 극저온 추적 보증</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE BUSINESS DIVISIONS (4대 핵심 사업 영역) */}
      <section className="section-block bg-white">
        <div className="container-1200">
          <div className="section-header-center">
            <span className="section-eyebrow">CORE BUSINESS PORTFOLIO</span>
            <h2 className="section-title">글로벌 소싱부터 맞춤형 R&amp;D까지, 서은의 4대 핵심 솔루션</h2>
            <p className="section-desc">
              프랜차이즈 카페, QSR, 외식 대기업이 직면한 메뉴 차별화와 원가·인건비 절감 과제를 한 번에 해결합니다.
            </p>
          </div>

          <div className="business-cards-grid">
            {/* Card 1 */}
            <article className="biz-card" onClick={() => go('dessert', 'nipponham')}>
              <div className="biz-card-img">
                <img
                  src="/assets/dessert_proposal_p5_img3_1024x1024.jpeg"
                  alt="니혼햄 프리미엄 디저트"
                />
                <span className="biz-num">01</span>
              </div>
              <div className="biz-card-body">
                <span className="biz-cat">GLOBAL PREMIUM DESSERT</span>
                <h3>니혼햄(Nipponham) 독점 디저트</h3>
                <p>
                  일본 최대 종합식품기업 니혼햄 그룹과의 단독 공식 수입 계약. 냉동 수플레 팬케이크, 스타벅스 재팬 시그니처 몽블랑, 상온 보존 가능한 HOKO 레어치즈 17종을 공급합니다.
                </p>
                <ul className="biz-highlights">
                  <li>대만 춘수당 납품 검증 수플레 팬케이크 (20g/30g)</li>
                  <li>타래 크림 보존 수축포장 세미프레드 몽블랑</li>
                  <li>냉장고 점유 부담 없는 HOKO 원핸드 레어치즈</li>
                </ul>
                <span className="biz-more">
                  라인업 상세 보기 <ArrowRight size={15} />
                </span>
              </div>
            </article>

            {/* Card 2 */}
            <article className="biz-card" onClick={() => go('dessert', 'oem-odm')}>
              <div className="biz-card-img">
                <img
                  src="/assets/oem_proposal_p6_img3_1280x720.jpeg"
                  alt="일본 TOP 3 케이크 OEM ODM"
                />
                <span className="biz-num">02</span>
              </div>
              <div className="biz-card-body">
                <span className="biz-cat">JAPAN TOP 3 CAKE OEM·ODM</span>
                <h3>일본 프리미엄 케이크 OEM·ODM</h3>
                <p>
                  업력 66년·일본 스타벅스 공급률 40%를 자랑하는 도치기현 우쓰노미야 최첨단 냉동 디저트 전문 공장의 한국 내 카페채널 독점 직수입 계약을 보유하고 있습니다.
                </p>
                <ul className="biz-highlights">
                  <li>30~40명 정직원 전문 파티셰 상주 · 리드타임 약 3개월</li>
                  <li>우지말차 바스크치즈 · 피에르말코니 협업 케이크</li>
                  <li>핵심 품목 &lsquo;말차 몽블랑&rsquo; 단가·통관 사전검증 완료</li>
                </ul>
                <span className="biz-more">
                  OEM·ODM 역량 보기 <ArrowRight size={15} />
                </span>
              </div>
            </article>

            {/* Card 3 */}
            <article className="biz-card" onClick={() => go('products', 'new-2026')}>
              <div className="biz-card-img">
                <img
                  src="/assets/new_catalog_p4_img4_2048x1536.jpeg"
                  alt="2026 신제품 라인업"
                />
                <span className="biz-num">03</span>
              </div>
              <div className="biz-card-body">
                <span className="biz-cat">2026 NEW PRODUCT LINEUP</span>
                <h3>2026 전략 신제품 라인업</h3>
                <p>
                  100% 닭다리살 직화 숯불순살치킨 패티와 닭다리살 67% 가라아게, 로스율 ZERO 50g 정량 냉동 타피오카펄, 채널 독점 라이선스 흑마늘 시리즈를 선보입니다.
                </p>
                <ul className="biz-highlights">
                  <li>숯불순살치킨 직화패티 (180g / 90g) &amp; 가라아게</li>
                  <li>폐기 로스 차단 50g 1인분 소포장 냉동 타피오카펄</li>
                  <li>선발 출시 채널 독점권 부여 흑마늘 홀 하프컷 &amp; 칩</li>
                </ul>
                <span className="biz-more">
                  2026 신제품 제원 보기 <ArrowRight size={15} />
                </span>
              </div>
            </article>

            {/* Card 4 */}
            <article className="biz-card" onClick={() => go('products', 'rte-solution')}>
              <div className="biz-card-img">
                <img
                  src="/assets/company_profile_p10_img5_487x320.jpeg"
                  alt="RTE 및 식자재 포트폴리오"
                />
                <span className="biz-num">04</span>
              </div>
              <div className="biz-card-body">
                <span className="biz-cat">READY TO EAT &amp; CUSTOM SOURCING</span>
                <h3>RTE 가니쉬 &amp; 맞춤형 식자재 솔루션</h3>
                <p>
                  고인건비·인력난 시대에 별도 손질이나 가열 없이 즉시 사용하는 RTE 제품군에 특화되어 있으며, 원하시는 스펙이 없다면 직접 기획·개발해 드립니다.
                </p>
                <ul className="biz-highlights">
                  <li>냉동 채소/로스트 (캐러멜라이즈드 어니언, 버섯 등)</li>
                  <li>냉동 과일/퓨레 (망고, 베리류, 아보카도)</li>
                  <li>갈릭칩·어니언후레이크 및 증숙 감자·단호박 다이스</li>
                </ul>
                <span className="biz-more">
                  RTE 포트폴리오 보기 <ArrowRight size={15} />
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. SINGLE-WINDOW SUPPLY CHAIN & WHY CHOOSE US */}
      <section className="section-block bg-navy-deep">
        <div className="container-1200">
          <div className="section-header-center light">
            <span className="section-eyebrow gold">TRANSPARENT SUPPLY CHAIN</span>
            <h2 className="section-title">단일 창구 기반의 투명하고 강력한 공급망 체계</h2>
            <p className="section-desc">
              제조공장 및 글로벌 산지와의 직수입 구조로 불필요한 유통 마진을 절감하고, 실시간 R&amp;D 조율과 전문 통번역까지 원스톱으로 지원합니다.
            </p>
          </div>

          <div className="supply-chain-flow">
            <div className="flow-step">
              <div className="flow-icon-circle">
                <Building2 size={26} />
              </div>
              <span className="flow-step-num">STEP 01</span>
              <h4>글로벌 제조공장 · 산지</h4>
              <p>일본 TOP 3 케이크 공장(우쓰노미야) · 니혼햄 이사하야 플랜트 · 베트남/중국/터키 직소싱</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <div className="flow-icon-circle">
                <Truck size={26} />
              </div>
              <span className="flow-step-num">STEP 02</span>
              <h4>수출담당 · 글로벌 물류</h4>
              <p>니혼햄(Nipponham) 본사 및 한국지사 경유 초고속 수출입 물류 및 품질 데이터 투명 검증</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step active-seoeun">
              <div className="flow-icon-circle gold">
                <ShieldCheck size={26} />
              </div>
              <span className="flow-step-num">STEP 03 · EXCLUSIVE HUB</span>
              <h4>한국 수입원 : 주식회사 서은</h4>
              <p>국내 카페채널 독점 직수입 · 식약처 통관 · 이천 덕평 물류센터(-18℃ 콜드체인) · R&amp;D/통번역 전담</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <div className="flow-icon-circle">
                <ChefHat size={26} />
              </div>
              <span className="flow-step-num">STEP 04</span>
              <h4>최종 납품처 · 프랜차이즈</h4>
              <p>스타벅스 코리아(추진), 메이저 커피 체인, QSR 및 대형 외식·유통 브랜드 전국 매장 공급</p>
            </div>
          </div>

          <div className="why-seoeun-3col">
            <div className="why-box">
              <span className="why-tag">ROLE 01</span>
              <h4>신속한 해결사 (식품업계의 114)</h4>
              <p>고객사의 까다로운 식재료 소싱 고민과 단가 방어 이슈를 현장에서 즉각적으로 해결합니다.</p>
            </div>
            <div className="why-box">
              <span className="why-tag">ROLE 02</span>
              <h4>준비된 협력사 (R&amp;D 커스텀)</h4>
              <p>단순 유통을 넘어 한국 소비자 데이터에 맞춘 독자적 레시피·소스·토핑 사양 설계를 무상 협조합니다.</p>
            </div>
            <div className="why-box">
              <span className="why-tag">ROLE 03</span>
              <h4>검증된 소싱처 (무결점 품질)</h4>
              <p>HACCP·ISO·FSSC22000 인증 공장 및 매 공급 차수별 생산 기지 검사 데이터를 100% 투명 공개합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC PARTNERS PREVIEW */}
      <section className="section-block bg-light">
        <div className="container-1200">
          <div className="partners-preview-head">
            <div>
              <span className="section-eyebrow">STRATEGIC PARTNERS</span>
              <h2 className="section-title">검증된 브랜드가 선택한 서은의 퀄리티</h2>
              <p className="section-desc">
                글로벌 프랜차이즈부터 국내 대형 식품 대기업까지, 까다로운 오딧(Audit)과 품질 기준을 충족하며 파트너십을 이어가고 있습니다.
              </p>
            </div>
            <button
              type="button"
              className="btn-navy-outline"
              onClick={() => go('about', 'certification')}
            >
              <span>인증현황 및 전체 협력사 보기</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="partners-showcase-layout">
            <div className="partners-logo-wall-box">
              <img
                src="/assets/partners_wall.png"
                alt="주식회사 서은 주요 협력사 로고 월"
              />
            </div>
            <div className="partners-tags-box">
              <h4>주요 납품 및 협력 파트너 브랜드 (30+)</h4>
              <div className="partner-chip-cloud">
                {PARTNER_BRANDS.slice(0, 20).map((b) => (
                  <span
                    key={b.name}
                    className={`partner-chip ${b.highlight ? 'featured' : ''}`}
                  >
                    {b.name}
                  </span>
                ))}
              </div>
              <div className="partner-audit-callout">
                <CheckCircle2 size={20} className="callout-icon" />
                <div>
                  <strong>2025. 11 글로벌 브랜드 &lsquo;INSPIRE&rsquo; 공급사 등록 및 RTE 상품 Audit 통과</strong>
                  <p>L2 Green Grade 획득 · 베트남 SSB HOLDINGS 독점 계약 · 국내 네이처팜 OEM 유통 체결</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="bottom-cta-banner">
        <div className="container-1200 bottom-cta-inner">
          <div>
            <span className="cta-eyebrow">READY FOR PARTNERSHIP</span>
            <h2>귀사의 푸드·디저트 메뉴 최고의 파트너가 될 준비를 마쳤습니다.</h2>
            <p>
              품평회용 공식 고사양 샘플 무상 전달, 제조공장 실시간 화상회의 및 MOQ·단가 협의를 즉시 지원합니다.
            </p>
          </div>
          <div className="bottom-cta-buttons">
            <button
              type="button"
              className="btn-gold-solid lg"
              onClick={() => go('support', 'inquiry')}
            >
              <PhoneCall size={18} />
              <span>샘플 신청 및 제휴 문의</span>
            </button>
            <button
              type="button"
              className="btn-white-outline lg"
              onClick={() => go('support', 'location')}
            >
              <MapPin size={18} />
              <span>오시는 길·물류거점 안내</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
