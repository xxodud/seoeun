import React, { useState } from 'react';
import {
  Sparkles,
  Award,
  Snowflake,
  CheckCircle2,
  ArrowRight,
  Globe,
  Video,
  Coins,
  Languages,
  Zap,
} from 'lucide-react';
import { NIPPONHAM_DESSERTS, OEM_BESTSELLERS } from '../data/siteData';

export default function DessertOemView({ subId, onNavigate }) {
  const [selectedDessertId, setSelectedDessertId] = useState('pancake');

  const go = (catId, sId) => {
    onNavigate(catId, sId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="subpage-container">
      {/* =========================================================
          SUB-PAGE 1: 니혼햄 프리미엄 디저트 (nipponham)
      ========================================================= */}
      {subId === 'nipponham' && (
        <div className="nipponham-page">
          {/* Intro Head */}
          <div className="sub-head-area">
            <span className="sub-head-eyebrow">GLOBAL PARTNERSHIP · NIPPONHAM GROUP</span>
            <h3 className="sub-head-title">글로벌 파트너십 기반 프리미엄 디저트 라인업</h3>
            <p className="sub-head-copy">
              음료를 넘어 푸드까지 최고의 프리미엄 경험을 선사하고자 하는 주식회사 서은은
              <br />
              일본 최대 종합식품기업 <strong>니혼햄(Nipponham) 그룹</strong>과의 단독 공식 수입 유통 계약을 통해 국내 미공개 하이엔드 디저트를 최우선 공급합니다.
            </p>
          </div>

          {/* Executive Summary 2-Col */}
          <div className="exec-summary-grid">
            <div className="exec-card">
              <div className="exec-badge">MARKET NEEDS</div>
              <h4>사업 배경 및 시장 니즈</h4>
              <ul className="exec-check-list">
                <li>
                  <CheckCircle2 size={18} className="check-ic" />
                  <span>음료를 넘어 푸드까지, 최고의 프리미엄 경험을 선사하고자 하는 서은의 전략 라인업</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="check-ic" />
                  <span>고품질 베이커리·디저트에 대한 니즈를 가진 두터운 카페 단골 고객층 확보</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="check-ic" />
                  <span>시그니처 음료 라인업과 어우러져 시너지를 낼 수 있는 최적의 고품격 비주얼 디저트 공급</span>
                </li>
              </ul>
            </div>

            <div className="exec-card gold-border">
              <div className="exec-badge gold">EXCLUSIVE VALUE</div>
              <h4>서은만의 특별한 독점 가치</h4>
              <ul className="exec-check-list">
                <li>
                  <Sparkles size={18} className="check-ic gold" />
                  <span>
                    <strong>국내 미공개 라인업:</strong> 타 경쟁사에서 만나볼 수 없는 미공개 프리미엄 디저트 아이템
                  </span>
                </li>
                <li>
                  <Sparkles size={18} className="check-ic gold" />
                  <span>
                    <strong>니혼햄 파트너십:</strong> 일본 최대 종합식품그룹의 글로벌 제과 퀄리티를 최우선적으로 공급
                  </span>
                </li>
                <li>
                  <Sparkles size={18} className="check-ic gold" />
                  <span>
                    <strong>선점 효과:</strong> 차별화된 디저트 포지셔닝으로 업계 최고 수준의 가맹점 객단가 견인
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Global Partner: Nipponham Group Facility */}
          <div className="nipponham-partner-banner">
            <div className="np-text-col">
              <span className="eyebrow">GLOBAL PARTNER : NIPPONHAM GROUP</span>
              <h4>글로벌 최정상 위생 및 첨단 제과 기술 설비</h4>
              <p>
                일본 최대 규모의 글로벌 종합 식품 기업인 <strong>니혼햄(Nipponham) 그룹</strong>은 세계적 수준의 첨단 제과 조리 설비와 엄격한 이중 식품 품질 관리 프로세스를 갖추고 있습니다.
              </p>
              <div className="np-points">
                <div className="np-point-item">
                  <Award size={20} />
                  <div>
                    <strong>이사하야 플랜트(Isahaya Plant) 제조</strong>
                    <span>HACCP 및 ISO 국제 규격 인증 획득 완료 공장</span>
                  </div>
                </div>
                <div className="np-point-item">
                  <Snowflake size={20} />
                  <div>
                    <strong>최신 급속 동결 기술</strong>
                    <span>제조 공정 직후 초급속 동결 처리하여 갓 구운 풍미 소실 최소화</span>
                  </div>
                </div>
                <div className="np-point-item">
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>검증된 글로벌 안전성</strong>
                    <span>수년간의 글로벌 유명 카페·외식 브랜드 공급 이력을 통한 품질 검증</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="np-img-col">
              <img
                src="/assets/dessert_proposal_p4_img6_1100x732.jpeg"
                alt="니혼햄 이사하야 플랜트 전경"
              />
              <span className="img-badge-overlay">Nipponham Isahaya Plant (HACCP · ISO 인증)</span>
            </div>
          </div>

          {/* 3 Flagship Dessert Lineups */}
          <div className="dessert-lineup-section">
            <div className="block-title-bar">
              <span className="eyebrow">FLAGSHIP DESSERT LINEUP 01 ~ 03</span>
              <h4>니혼햄 프리미엄 디저트 3대 주력 라인업</h4>
            </div>

            {/* Interactive Selector Tabs */}
            <div className="ourhome-tab1-area three-tabs">
              {NIPPONHAM_DESSERTS.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className={`ourhome-tab-btn ${selectedDessertId === d.id ? 'active' : ''}`}
                  onClick={() => setSelectedDessertId(d.id)}
                >
                  {d.num}. {d.nameKo}
                </button>
              ))}
            </div>

            {/* Render All 3 Lineups */}
            <div className="dessert-cards-stack">
              {NIPPONHAM_DESSERTS.map((item) => {
                const isFocused = selectedDessertId === item.id;
                return (
                  <article
                    key={item.id}
                    className={`dessert-detail-panel ${isFocused ? 'focused-panel' : ''}`}
                  >
                    <div className="dessert-panel-header">
                      <div className="dp-title-group">
                        <span className="dp-num">{item.num}</span>
                        <div>
                          <span className="dp-en">{item.nameEn}</span>
                          <h4>{item.nameKo}</h4>
                        </div>
                      </div>
                      <span className="dp-highlight-badge">{item.badge}</span>
                    </div>

                    <div className="dessert-panel-body">
                      <div className="dp-visual-col">
                        <div className="dp-main-photo">
                          <img src={item.mainImage} alt={item.nameKo} />
                        </div>
                        {item.subImages && item.subImages.length > 0 && (
                          <div className="dp-sub-photos">
                            {item.subImages.map((subSrc, idx) => (
                              <img
                                key={idx}
                                src={subSrc}
                                alt={`${item.nameKo} 상세 이미지 ${idx + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="dp-content-col">
                        <h5 className="dp-headline">{item.headline}</h5>
                        <p className="dp-summary">{item.summary}</p>

                        <div className="dp-feature-boxes">
                          {item.features.map((f) => (
                            <div key={f.title} className="dp-feat-box">
                              <strong>{f.title}</strong>
                              <p>{f.desc}</p>
                            </div>
                          ))}
                        </div>

                        <div className="dp-spec-table-wrap">
                          <table className="ourhome-spec-table compact">
                            <thead>
                              <tr>
                                <th>구분 (Specification)</th>
                                <th>상세 사양</th>
                                <th>비고 (Key Advantage)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.specs.map((sp) => (
                                <tr key={sp.label}>
                                  <th>{sp.label}</th>
                                  <td>{sp.value}</td>
                                  <td className="adv-cell">{sp.advantage}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Market Trend Analysis & 4-Step Partnership Roadmap */}
          <div className="trend-roadmap-grid">
            <div className="market-trend-box">
              <span className="eyebrow">MARKET TREND ANALYSIS</span>
              <h4>소비자의 프리미엄 디저트 선호 카테고리</h4>
              <p className="trend-sub">
                시장 트렌드 리서치: 카페 매장에서 구매하고 싶은 고부가가치 디저트 선호도
              </p>

              <div className="trend-bars-list">
                <div className="trend-bar-item">
                  <div className="trend-bar-label">
                    <strong>01. 프리미엄 베이커리 &amp; 케이크 (몽블랑·타르트 등)</strong>
                    <span className="pct">45%</span>
                  </div>
                  <div className="trend-track">
                    <div className="trend-fill navy" style={{ width: '45%' }} />
                  </div>
                </div>

                <div className="trend-bar-item">
                  <div className="trend-bar-label">
                    <strong>02. 가벼운 핑거푸드 및 팬케이크류 (수플레 팬케이크)</strong>
                    <span className="pct">30%</span>
                  </div>
                  <div className="trend-track">
                    <div className="trend-fill gold" style={{ width: '30%' }} />
                  </div>
                </div>

                <div className="trend-bar-item">
                  <div className="trend-bar-label">
                    <strong>03. 컵 &amp; 치즈 타입의 고유 디저트 (HOKO 레어치즈)</strong>
                    <span className="pct">15%</span>
                  </div>
                  <div className="trend-track">
                    <div className="trend-fill blue" style={{ width: '15%' }} />
                  </div>
                </div>

                <div className="trend-bar-item">
                  <div className="trend-bar-label">
                    <span>04. 기타 전통 베이커리류</span>
                    <span className="pct muted">10%</span>
                  </div>
                  <div className="trend-track">
                    <div className="trend-fill gray" style={{ width: '10%' }} />
                  </div>
                </div>
              </div>

              <blockquote className="trend-quote">
                &ldquo;서은의 주력 디저트 3종은 소비자가 열광하는 상위 3가지 프리미엄 카테고리(90%)를 완벽히 만족시킵니다.&rdquo;
                <cite>
                  자료 출처: 농림축산식품부와 aT 한국농수산식품유통공사 국내외 디저트 외식시장 조사 보고서 및 트렌드모니터 조사 자료
                </cite>
              </blockquote>
            </div>

            <div className="roadmap-box">
              <span className="eyebrow">PARTNERSHIP ROADMAP</span>
              <h4>가맹점 런칭 4단계 파트너십 로드맵</h4>
              <p className="trend-sub">
                무상 샘플 품평회부터 식약처 한글 패키지 통관, 전 가맹점 정기 물류까지 체계적으로 전개합니다.
              </p>

              <div className="roadmap-steps-vertical">
                <div className="rm-step">
                  <span className="rm-badge">M1</span>
                  <div>
                    <strong>샘플 품평 및 기획</strong>
                    <p>고객사 품평회용 공식 고사양 샘플 무상 전달 및 실무 논의 개시</p>
                  </div>
                </div>
                <div className="rm-step">
                  <span className="rm-badge">M2</span>
                  <div>
                    <strong>스펙 조율 및 생산</strong>
                    <p>국내 식약처 수입 통관용 한글 패키지 설계 및 전용 런칭 물량 이사하야 플랜트 생산 착수</p>
                  </div>
                </div>
                <div className="rm-step">
                  <span className="rm-badge">M3</span>
                  <div>
                    <strong>테스트 매장 선런칭</strong>
                    <p>고객사 대표 플래그십 매장을 거점으로 선배치하여 마켓 즉각 피드백 모니터링</p>
                  </div>
                </div>
                <div className="rm-step">
                  <span className="rm-badge gold">M4</span>
                  <div>
                    <strong>전 가맹점 전개</strong>
                    <p>고객사 수발주 시스템 연동 및 콜드체인 정기 유통 개시, 메인 홍보 프로모션 실시</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          SUB-PAGE 2: 일본 케이크 OEM·ODM 파트너십 (oem-odm)
      ========================================================= */}
      {subId === 'oem-odm' && (
        <div className="oem-odm-page">
          <div className="sub-head-area">
            <span className="sub-head-eyebrow">STRATEGIC OEM · ODM PARTNERSHIP</span>
            <h3 className="sub-head-title">
              주식회사 서은 × 니혼햄 × 일본 TOP 3 디저트 제조공장
            </h3>
            <p className="sub-head-copy">
              업력 66년의 냉동 케이크 기술력과 FSSC 22000 국제 인증을 보유한 일본 TOP 3 제조공장의
              <br />
              <strong>한국 내 카페채널 독점 직수입 계약</strong>을 통해 글로벌 기준의 안전성과 압도적 단가 경쟁력을 제공합니다.
            </p>
          </div>

          {/* 01. 단일 창구 기반 투명한 공급망 체계 */}
          <div className="oem-supply-banner">
            <div className="oem-banner-head">
              <span className="eyebrow">01 · BUSINESS STRUCTURE</span>
              <h4>단일 창구 기반 투명한 공급망 체계</h4>
              <span className="exclusive-contract-pill">
                해당 제조공장 한국 내 카페채널 주식회사 서은 독점 직수입 계약 보유
              </span>
            </div>

            <div className="oem-4step-chain">
              <div className="chain-card">
                <span className="chain-step">STEP 1</span>
                <strong>제조공장</strong>
                <p>일본 TOP 3 케이크 양산 (도치기현 우쓰노미야시)</p>
              </div>
              <div className="chain-arrow">→</div>
              <div className="chain-card">
                <span className="chain-step">STEP 2</span>
                <strong>수출담당 (니혼햄)</strong>
                <p>글로벌 물류 및 니혼햄 한국지사 초고속 소통</p>
              </div>
              <div className="chain-arrow">→</div>
              <div className="chain-card highlight-seoeun">
                <span className="chain-step">STEP 3 · EXCLUSIVE</span>
                <strong>한국 수입원 (주식회사 서은)</strong>
                <p>국내 카페채널 독점 직수입 · 통관 · R&amp;D 조율</p>
              </div>
              <div className="chain-arrow">→</div>
              <div className="chain-card">
                <span className="chain-step">STEP 4</span>
                <strong>최종 납품처</strong>
                <p>스타벅스 코리아 등 국내 메이저 카페·프랜차이즈 공급</p>
              </div>
            </div>
          </div>

          {/* 02. 제조공장 핵심 역량 & 실적 */}
          <div className="factory-competency-section">
            <div className="big-kpi-duo">
              <div className="kpi-giant-card emerald">
                <span className="kpi-giant-num">TOP 3</span>
                <strong>업력 66년의 냉동 케이크 기술력 및 대량 양산 시설</strong>
                <p>일본 도치기현 최대급 냉동 케이크 전문 공장 · 일본 스타벅스 공급률 40% 점유 · 생산 비중 90% PB 상품 중심</p>
              </div>
              <div className="kpi-giant-card navy">
                <span className="kpi-giant-num">FSSC 22000</span>
                <strong>글로벌 식품안전시스템 국제 인증 &amp; HACCP 보유</strong>
                <p>일본 스타벅스·툴리스커피, 일본 편의점·패밀리레스토랑, 아시아·북미 글로벌 코스트코 PB 수출 실적 검증</p>
              </div>
            </div>

            {/* 3-Column Factory Overview */}
            <div className="factory-3col-specs">
              <div className="f-spec-card">
                <h5>공장 개요 및 입지</h5>
                <ul>
                  <li><strong>입지:</strong> 일본 도치기현 우쓰노미야시</li>
                  <li><strong>규모:</strong> 도치기현 최대급 냉동 케이크 공장</li>
                  <li><strong>특장점:</strong> 일본 국내 생산 하이엔드 냉동 디저트</li>
                  <li><strong>점유율:</strong> 일본 스타벅스 공급률 40%</li>
                  <li><strong>생산 비중:</strong> 90% PB(전용 기획) 상품 중심</li>
                </ul>
              </div>

              <div className="f-spec-card">
                <h5>주요 제품 및 품질 역량</h5>
                <ul>
                  <li><strong>주요 라인업:</strong> 쉬폰케이크, 홀케이크, 타르트대, 밀크레이프, 구움과자·제과류</li>
                  <li><strong>생산 방식:</strong> 숙련 파티셰 수작업을 통한 고품질 구현</li>
                  <li><strong>안전 인증:</strong> HACCP, FSSC 22000 취득</li>
                  <li><strong>콜라보:</strong> 홋카이도 준거 브랜드 상품 전개 가능</li>
                </ul>
              </div>

              <div className="f-spec-card">
                <h5>수출 규격 및 패키징 강점</h5>
                <ul>
                  <li><strong>포장 방식:</strong> 위생적인 수축 포장 (Shrink Wrap)</li>
                  <li><strong>특수 규격:</strong> 해동 없이 즉시 섭취 가능한 세미프레드(Semifreddo) 타입</li>
                  <li><strong>NB 상품:</strong> 완제품 기반 신속한 해외 시장 전개</li>
                  <li><strong>물류 강점:</strong> 장거리 해상·콜드체인 유통 시 안정적인 외형·품질 유지</li>
                </ul>
              </div>
            </div>

            {/* Global Expansion Status */}
            <div className="global-expansion-bar">
              <div className="exp-group">
                <span className="exp-label done">
                  <Globe size={15} /> 기 진출 국가 (수출 완료)
                </span>
                <div className="country-pills">
                  <span className="c-pill active">홍콩</span>
                  <span className="c-pill active">캐나다</span>
                  <span className="c-pill active">북미 (미국)</span>
                  <span className="c-pill active">마카오</span>
                </div>
              </div>
              <div className="exp-group">
                <span className="exp-label target">
                  <Sparkles size={15} /> 진출 예정 국가 (전략 타겟)
                </span>
                <div className="country-pills">
                  <span className="c-pill highlight-kr">한국 (주식회사 서은 독점)</span>
                  <span className="c-pill">싱가포르</span>
                  <span className="c-pill">중동</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plant 1 & Plant 2 + Patissier R&D */}
          <div className="plants-and-patissier-grid">
            <div className="plants-col">
              <h4>유연한 맞춤형 제조라인 및 특화 설비 (제1·2공장)</h4>
              <div className="plant-cards-stack">
                <div className="plant-row-card">
                  <img
                    src="/assets/oem_proposal_p7_img1_283x174.jpeg"
                    alt="일본 제조공장 제1공장"
                  />
                  <div>
                    <span className="plant-badge">제1공장</span>
                    <h5>제품 기획, 개발, 제조 본진</h5>
                    <p>업력 66년 · 237명의 정직원 근무 · HACCP 및 FSSC 22000 보유</p>
                  </div>
                </div>

                <div className="plant-row-card">
                  <img
                    src="/assets/oem_proposal_p7_img2_403x186.jpeg"
                    alt="일본 제조공장 제2공장"
                  />
                  <div>
                    <span className="plant-badge">제2공장</span>
                    <h5>첨단 대량 양산 라인</h5>
                    <p>최신식 위생 설비를 갖춘 대량 양산 라인 설계 · 대지면적 6,842㎡ / 연면적 2,833㎡</p>
                  </div>
                </div>
              </div>

              <div className="special-equip-3">
                <div className="equip-chip">
                  <strong>초콜릿 직접 생산</strong>
                  <span>원료 배합부터 자체 가공 생산</span>
                </div>
                <div className="equip-chip">
                  <strong>연속식 터널 오븐</strong>
                  <span>균일한 베이킹 품질과 대량 양산</span>
                </div>
                <div className="equip-chip">
                  <strong>2차례 급속 냉동 프리저</strong>
                  <span>해동 후에도 갓 만든 식감 유지</span>
                </div>
              </div>
            </div>

            <div className="patissier-col">
              <div className="patissier-card">
                <img
                  src="/assets/oem_proposal_p8_img2_552x460.jpeg"
                  alt="전문 파티셰 ODM 개발"
                />
                <div className="patissier-stats">
                  <div className="p-stat">
                    <span className="p-big">30~40명</span>
                    <strong>정직원 전문 파티셰 상시 근무</strong>
                  </div>
                  <div className="p-stat">
                    <span className="p-big">약 3개월</span>
                    <strong>최초 발주 후 예상 양산 리드타임</strong>
                  </div>
                  <div className="p-stat full">
                    <strong>전 과정 맞춤형 ODM 협력 가능</strong>
                    <p>초기 레시피 기획·개발 단계부터 타겟 단가 및 사양에 맞춘 공동 개발 지원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bestseller OEM/PB Lineup */}
          <div className="oem-bestsellers-section">
            <div className="block-title-bar">
              <span className="eyebrow">BESTSELLER CAKE LINEUP</span>
              <h4>주요 OEM · PB 베스트셀러 케이크 라인업</h4>
            </div>

            <div className="bestseller-grid-4">
              {OEM_BESTSELLERS.map((cake) => (
                <div key={cake.name} className="bestseller-card">
                  <div className="bs-img-wrap">
                    <img src={cake.image} alt={cake.name} />
                    <span className="bs-tag">{cake.tag}</span>
                  </div>
                  <div className="bs-body">
                    <h5>{cake.name}</h5>
                    <p>{cake.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 03. 서은의 밀착형 원스톱 지원 & 04. 핵심 품목 '말차 몽블랑' 사전 점검 완료 현황 */}
          <div className="seoeun-support-and-project">
            <div className="support-4grid">
              <div className="sup-card">
                <Video size={22} className="sup-ic" />
                <h5>직접적인 기술 협력 지원</h5>
                <p>일본 제조공장과의 실시간 화상회의 및 R&amp;D 레시피 즉각 조율</p>
              </div>
              <div className="sup-card">
                <Coins size={22} className="sup-ic" />
                <h5>우수한 단가 경쟁력 확보</h5>
                <p>독점 직수입 구조로 불필요한 중간 유통 마진 대폭 절감</p>
              </div>
              <div className="sup-card">
                <Languages size={22} className="sup-ic" />
                <h5>전문 통번역 전담 지원</h5>
                <p>일본 협업 회의 전문 동시통역 및 식약처 기술·성분 문서 완벽 번역</p>
              </div>
              <div className="sup-card">
                <Zap size={22} className="sup-ic" />
                <h5>니혼햄 한국지사 초고속 대응</h5>
                <p>수출 파트너사(니혼햄) 한국지사 경유로 신속하고 정확한 통관·물류 처리</p>
              </div>
            </div>

            {/* Matcha Montblanc Pre-Check Completed */}
            <div className="first-project-showcase">
              <div className="fp-left-info">
                <span className="fp-eyebrow">04 · KEY ITEM COMPLIANCE VERIFIED</span>
                <h4>핵심 도입 품목 : &lsquo;말차 몽블랑&rsquo; 도입 사전 점검 완료 현황</h4>
                <p>
                  교토부 우지시 생산 최고급 말차를 사용한 시그니처 말차 몽블랑(65×65×65mm / 약 59g / 72개입)의 국내 공급을 위한 단가 협의 및 식약처 통관 적합성 사전 검증이 모두 완료되었습니다.
                </p>

                <div className="spec-table-wrap">
                  <table className="ourhome-spec-table">
                    <thead>
                      <tr>
                        <th>점검 항목</th>
                        <th>세부 검증 내용</th>
                        <th>진행 상태</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>목표 단가 협의</th>
                        <td>메이저 프랜차이즈 타겟가 기준 제조공장 단가 협의</td>
                        <td><span className="status-ok">협의 완료</span></td>
                      </tr>
                      <tr>
                        <th>성분 및 통관 검토</th>
                        <td>국내 식품위생법 기준 원재료 및 식품첨가물 수입 적합성 검증</td>
                        <td><span className="status-ok">확인 완료</span></td>
                      </tr>
                      <tr>
                        <th>양산 리드타임</th>
                        <td>발주 확정 후 초도 물량 생산 및 입고 기간</td>
                        <td><span className="status-lead">약 3개월 소요</span></td>
                      </tr>
                      <tr>
                        <th>공급망 및 물류</th>
                        <td>니혼햄 한국지사 및 주식회사 서은 독점 직수입 콜드체인</td>
                        <td><span className="status-ok">구축 완료</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="fp-right-card">
                <img
                  src="/assets/dessert_proposal_p7_img4_420x356.jpeg"
                  alt="교토 우지 말차 몽블랑"
                />
                <div className="fp-spec-Overlay">
                  <strong>교토 우지 말차 몽블랑</strong>
                  <span>65 × 65 × 65 mm / 약 59g · 냉장 2시간 해동</span>
                  <button
                    type="button"
                    className="btn-gold-solid full"
                    onClick={() => go('support', 'inquiry')}
                  >
                    <span>제조공장 화상회의 · 샘플 요청</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
