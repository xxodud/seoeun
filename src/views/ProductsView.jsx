import React, { useState } from 'react';
import {
  Flame,
  Coffee,
  Crown,
  CheckCircle2,
  Lock,
  Ship,
  Handshake,
  Clock,
  Sparkles,
  ArrowRight,
  Lightbulb,
  PackageSearch,
  ShieldCheck,
} from 'lucide-react';
import { NEW_PRODUCTS_2026, RTE_PORTFOLIO } from '../data/siteData';

export default function ProductsView({ subId, onNavigate }) {
  const [catFilter, setCatFilter] = useState('ALL');

  const filteredProducts =
    catFilter === 'ALL'
      ? NEW_PRODUCTS_2026
      : NEW_PRODUCTS_2026.filter((p) => p.categoryCode === catFilter);

  const go = (catId, sId) => {
    onNavigate(catId, sId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="subpage-container">
      {/* =========================================================
          SUB-PAGE 1: 2026 신제품 라인업 (new-2026)
      ========================================================= */}
      {subId === 'new-2026' && (
        <div className="new-catalog-page">
          <div className="sub-head-area">
            <span className="sub-head-eyebrow">2026 NEW PRODUCT LINEUP</span>
            <h3 className="sub-head-title">2026 전략 신제품 라인업</h3>
            <p className="sub-head-copy">
              엄선된 100% 닭다리살 직화 육가공, 로스율을 제로화한 혁신적인 50g 소포장 카페 부자재,
              <br />
              그리고 선발 출시 파트너사에 채널 독점 라이선스를 부여하는 흑마늘 시리즈를 소개합니다.
            </p>
          </div>

          {/* 3 Category Overview Cards */}
          <div className="cat-overview-3col">
            <div
              className={`cat-ov-card ${catFilter === 'meat' ? 'selected' : ''}`}
              onClick={() => setCatFilter('meat')}
            >
              <div className="cat-ov-top">
                <span className="cat-pill">CATEGORY 01</span>
                <Flame size={22} className="cat-ic" />
              </div>
              <h4>직화 육가공 라인</h4>
              <p>
                숯불순살치킨 직화패티(180g/90g) 및 풍부한 육즙의 치킨 가라아게(닭다리살 67%) 제품군을 소개합니다.
              </p>
            </div>

            <div
              className={`cat-ov-card ${catFilter === 'cafe' ? 'selected' : ''}`}
              onClick={() => setCatFilter('cafe')}
            >
              <div className="cat-ov-top">
                <span className="cat-pill">CATEGORY 02</span>
                <Coffee size={22} className="cat-ic" />
              </div>
              <h4>카페 &amp; 음료 부자재</h4>
              <p>
                해동 후 폐기 로스율을 제로화한 혁신적인 50g 1인분 정량 규격의 냉동 타피오카펄 원료를 소개합니다.
              </p>
            </div>

            <div
              className={`cat-ov-card ${catFilter === 'exclusive' ? 'selected' : ''}`}
              onClick={() => setCatFilter('exclusive')}
            >
              <div className="cat-ov-top">
                <span className="cat-pill gold">CATEGORY 03</span>
                <Crown size={22} className="cat-ic gold" />
              </div>
              <h4>채널 독점 흑마늘 시리즈</h4>
              <p>
                선발 출시 채널 전용 독점 라이선스로 제공되는 흑마늘홀 하프컷 및 바삭한 흑마늘칩 시리즈입니다.
              </p>
            </div>
          </div>

          {/* Ourhome-style Category Tab Bar */}
          <div className="ourhome-tab1-area">
            <button
              type="button"
              className={`ourhome-tab-btn ${catFilter === 'ALL' ? 'active' : ''}`}
              onClick={() => setCatFilter('ALL')}
            >
              전체 신제품 (5종)
            </button>
            <button
              type="button"
              className={`ourhome-tab-btn ${catFilter === 'meat' ? 'active' : ''}`}
              onClick={() => setCatFilter('meat')}
            >
              01. 직화 육가공 (2종)
            </button>
            <button
              type="button"
              className={`ourhome-tab-btn ${catFilter === 'cafe' ? 'active' : ''}`}
              onClick={() => setCatFilter('cafe')}
            >
              02. 카페 &amp; 음료 부자재 (1종)
            </button>
            <button
              type="button"
              className={`ourhome-tab-btn ${catFilter === 'exclusive' ? 'active' : ''}`}
              onClick={() => setCatFilter('exclusive')}
            >
              03. 채널 독점 흑마늘 (2종)
            </button>
          </div>

          {/* Product Detail Showcase List */}
          <div className="new-products-stack">
            {filteredProducts.map((prod) => (
              <article key={prod.id} className="new-prod-card">
                <div className="np-left-info">
                  <div className="np-badges-row">
                    <span className="np-cat-badge">{prod.categoryName}</span>
                    {prod.badges.map((b) => (
                      <span key={b} className="np-tag-pill">
                        {b}
                      </span>
                    ))}
                  </div>

                  <h4 className="np-title">{prod.name}</h4>
                  <p className="np-subtitle">{prod.subtitle}</p>
                  <p className="np-desc">{prod.desc}</p>

                  <ul className="np-highlights">
                    {prod.highlights.map((hl) => (
                      <li key={hl}>
                        <CheckCircle2 size={17} className="hl-ic" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 4-Box Spec Grid */}
                  <div className="np-spec-4grid">
                    <div className="np-spec-cell">
                      <span>기본 규격</span>
                      <strong>{prod.specs.standard}</strong>
                    </div>
                    <div className="np-spec-cell">
                      <span>서브 규격 / 특징</span>
                      <strong>{prod.specs.subOption}</strong>
                    </div>
                    <div className="np-spec-cell">
                      <span>원산지 / 성상</span>
                      <strong>{prod.specs.origin}</strong>
                    </div>
                    <div className="np-spec-cell">
                      <span>비고 / 조건</span>
                      <strong className="accent-red">{prod.specs.tax}</strong>
                    </div>
                  </div>
                </div>

                <div className="np-right-photos">
                  <div className="np-main-img">
                    <img src={prod.mainImage} alt={prod.name} />
                  </div>
                  {prod.subImage && (
                    <div className="np-sub-img">
                      <img src={prod.subImage} alt={`${prod.name} 조리/패키지 예시`} />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Black Garlic Exclusive Policy & MOQ */}
          <div className="exclusive-policy-block">
            <div className="block-title-bar">
              <span className="eyebrow">EXCLUSIVE LICENSE &amp; MOQ POLICY</span>
              <h4>흑마늘 시리즈 독점 공급 정책 &amp; MOQ 조건</h4>
            </div>

            <div className="policy-3col">
              <div className="policy-card">
                <Lock size={24} className="pol-ic" />
                <h5>동일 채널 독점 공급</h5>
                <p>
                  신제품을 선발 출시하는 파트너사에 한해 <strong>동일 유통 채널 내 독점 공급권</strong>을 부여하여 강력한 마켓 경쟁력을 제공합니다.
                </p>
              </div>
              <div className="policy-card">
                <Ship size={24} className="pol-ic" />
                <h5>해외 직수입 생산</h5>
                <p>
                  해외 전용 제조 시설을 통해 생산·수입되는 특수 상품군으로, 제조 라인 가동을 위한 <strong>최소 발주 수량(MOQ)</strong> 사전 협의가 필요합니다.
                </p>
              </div>
              <div className="policy-card">
                <Handshake size={24} className="pol-ic" />
                <h5>맞춤 물량 사전 협의</h5>
                <p>
                  파트너사의 연간 소요 예상량 및 런칭 스케줄에 맞춰 수입 생산 일정 및 소분 규격을 개별 협의하여 안정적으로 공급합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 2026 New Product Comprehensive Spec Table */}
          <div className="comprehensive-table-block">
            <h4 className="table-heading">2026 신제품 제원 종합표</h4>
            <div className="spec-table-wrap">
              <table className="ourhome-spec-table">
                <thead>
                  <tr>
                    <th>카테고리</th>
                    <th>제품명</th>
                    <th>규격 / 포장</th>
                    <th>원산지 / 성상</th>
                    <th>특이사항 및 비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>직화 육가공</th>
                    <td><strong>숯불순살치킨 패티</strong></td>
                    <td>180g × 6ea / pk (1.08kg) <span className="sub-opt">(90g 서브옵션 보유)</span></td>
                    <td>중국산 / 냉동</td>
                    <td>100% 닭다리살 / 과세별도</td>
                  </tr>
                  <tr>
                    <th>직화 육가공</th>
                    <td><strong>치킨 가라아게</strong></td>
                    <td>B2B 표준 벌크 규격</td>
                    <td>중국산 / 냉동</td>
                    <td>닭다리살 67% 함유 / 과세별도</td>
                  </tr>
                  <tr>
                    <th>카페 부자재</th>
                    <td><strong>냉동 타피오카펄 50g</strong></td>
                    <td>50g 소포장 패키지</td>
                    <td>별도표기 / 냉동</td>
                    <td>1인분 정량 / 로스 ZERO</td>
                  </tr>
                  <tr>
                    <th>독점 시리즈</th>
                    <td><strong>흑마늘홀 하프컷</strong></td>
                    <td>수입 규격 (사전협의)</td>
                    <td>해외직수입 / 상온</td>
                    <td><span className="gold-badge-inline">채널독점 / MOQ 필수</span></td>
                  </tr>
                  <tr>
                    <th>독점 시리즈</th>
                    <td><strong>흑마늘칩 (갈릭칩)</strong></td>
                    <td>수입 규격 (사전협의)</td>
                    <td>해외직수입 / 상온</td>
                    <td><span className="gold-badge-inline">채널독점 / MOQ 필수</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          SUB-PAGE 2: RTE & 식자재 포트폴리오 (rte-solution)
      ========================================================= */}
      {subId === 'rte-solution' && (
        <div className="rte-solution-page">
          <div className="sub-head-area">
            <span className="sub-head-eyebrow">CORE COMPETENCY : READY TO EAT (RTE)</span>
            <h3 className="sub-head-title">주방의 조리 효율을 극대화하는 RTE &amp; 식자재 포트폴리오</h3>
            <p className="sub-head-copy">
              현대의 주방은 갈수록 고인건비와 인력난에 직면해 있습니다.
              <br />
              주식회사 서은은 별도의 손질이나 가열 없이 즉시 사용 가능한 <strong>RTE(Ready To Eat)</strong> 제품군과 프리미엄 가니쉬에 특화되어 있습니다.
            </p>
          </div>

          {/* Operation Efficiency + Premium Garnish Split */}
          <div className="rte-efficiency-split">
            <div className="rte-dark-card">
              <span className="eyebrow gold">OPERATION EFFICIENCY</span>
              <h4>주방 오퍼레이션 혁신 솔루션</h4>
              <p>
                번거로운 세척·절단·전처리 과정을 생략하여 주방 인력 리소스를 획기적으로 줄이고 전국 가맹점 어디서나 동일한 맛을 구현합니다.
              </p>
              <ul className="rte-benefit-list">
                <li>
                  <Clock size={18} />
                  <span><strong>인건비 및 조리 리소스 70% 이상 절감</strong></span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>표준화된 품질로 매장별 맛 편차 제로화</strong></span>
                </li>
                <li>
                  <Sparkles size={18} />
                  <span><strong>전처리 과정 생략을 통한 식자재 로스(Loss) 방지</strong></span>
                </li>
              </ul>
            </div>

            <div className="rte-garnish-card">
              <span className="eyebrow">PREMIUM GARNISH STRATEGY</span>
              <h4>메뉴의 객단가를 높이는 프리미엄 토핑 &amp; 가니쉬</h4>
              <p>
                바삭한 텍스처와 풍성한 비주얼을 더해주는 프리미엄 토핑 및 가니쉬 제품은 고객의 만족도와 메뉴의 객단가를 동시에 높여주는 서은만의 전략 아이템입니다.
              </p>

              <div className="garnish-4grid">
                <div className="garnish-pill-box">
                  <strong>갈릭칩 · 어니언 후레이크</strong>
                  <span>크런치한 식감과 고소한 풍미</span>
                </div>
                <div className="garnish-pill-box">
                  <strong>로스팅 야채 시리즈</strong>
                  <span>불향과 색감을 살린 구운 채소</span>
                </div>
                <div className="garnish-pill-box">
                  <strong>캐러멜라이즈드 어니언</strong>
                  <span>깊은 단맛과 감칠맛의 양파 토핑</span>
                </div>
                <div className="garnish-pill-box">
                  <strong>야채 · 버섯 튀김 가니쉬</strong>
                  <span>우동·덮밥·샐러드 프리미엄 토핑</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Main Product Portfolio Grid */}
          <div className="portfolio-4col-section">
            <div className="block-title-bar">
              <span className="eyebrow">PRODUCT LINEUP 01 ~ 04</span>
              <h4>주요 식자재 제품 포트폴리오</h4>
            </div>

            <div className="rte-portfolio-grid">
              {RTE_PORTFOLIO.map((item) => (
                <div key={item.num} className="rte-port-card">
                  <div className="rte-port-img">
                    <img src={item.image} alt={item.title} />
                    <span className="rte-port-num">{item.num}</span>
                  </div>
                  <div className="rte-port-body">
                    <span className="rte-en">{item.enTitle}</span>
                    <h5>{item.title}</h5>
                    <p className="rte-items-highlight">{item.items}</p>
                    <p className="rte-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ALL-IN-ONE SOLUTION Custom Development Banner */}
          <div className="all-in-one-solution-box">
            <div className="aio-header">
              <span className="eyebrow">ALL-IN-ONE CUSTOM SOLUTION</span>
              <h4>&ldquo;찾으시는 스펙의 제품이 없나요?&rdquo;</h4>
              <p>
                서은은 기성 제품 공급에 그치지 않습니다. 고객사가 필요로 하는 <strong>새로운 식자재를 직접 기획하고 개발</strong>하여 제공합니다.
              </p>
            </div>

            <div className="aio-steps-3">
              <div className="aio-step-card">
                <Lightbulb size={26} className="aio-ic" />
                <span className="step-no">STEP 01</span>
                <strong>아이디어 제안 &amp; 스펙 설계</strong>
                <p>고객사 타겟 원가, 조리 환경, 메뉴 컨셉에 맞춘 최적의 원물 및 가공 스펙 기획</p>
              </div>
              <div className="aio-step-card">
                <PackageSearch size={26} className="aio-ic" />
                <span className="step-no">STEP 02</span>
                <strong>글로벌·국내 샘플 소싱</strong>
                <p>일본·베트남·중국·터키 및 국내 우수 OEM 제조라인을 통한 맞춤형 샘플 제작 및 품평</p>
              </div>
              <div className="aio-step-card">
                <ShieldCheck size={26} className="aio-ic" />
                <span className="step-no">STEP 03</span>
                <strong>품질 검증 &amp; 안정 공급</strong>
                <p>식약처 정밀 검역·통관, L2 Green Grade 수준의 위생 검증 후 전국 콜드체인 물류 전개</p>
              </div>
            </div>

            <div className="aio-cta-row">
              <button
                type="button"
                className="btn-gold-solid"
                onClick={() => go('support', 'inquiry')}
              >
                <span>맞춤형 식자재 기획·소싱 문의하기</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
