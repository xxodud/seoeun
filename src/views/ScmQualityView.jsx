import React from 'react';
import {
  Globe,
  Snowflake,
  Truck,
  ShieldCheck,
  Sliders,
  FileCheck2,
  CheckCircle2,
  Building2,
  Award,
  ArrowRight,
} from 'lucide-react';

export default function ScmQualityView({ subId, onNavigate }) {
  const go = (catId, sId) => {
    onNavigate(catId, sId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="subpage-container">
      {/* =========================================================
          SUB-PAGE 1: 글로벌 SCM 및 콜드체인 (global-scm)
      ========================================================= */}
      {subId === 'global-scm' && (
        <div className="scm-page">
          <div className="sub-head-area">
            <span className="sub-head-eyebrow">SCM &amp; COLD-CHAIN LOGISTICS</span>
            <h3 className="sub-head-title">전 세계를 연결하는 안정적인 푸드 네트워크</h3>
            <p className="sub-head-copy">
              기후 위기와 작황 변동에도 흔들림 없는 공급을 위해 글로벌 산지 다이렉트 파트너십을 구축하였습니다.
              <br />
              대규모 프랜차이즈 물량도 완벽하게 소화 가능한 유연한 SCM 구조와 상시 -18℃ 콜드체인을 지향합니다.
            </p>
          </div>

          {/* Main SCM Split Feature (From Company Profile p.12) */}
          <div className="scm-hero-split">
            <div className="scm-text-col">
              <span className="eyebrow">GLOBAL DIRECT SOURCING &amp; LOGISTICS</span>
              <h4>글로벌 산지 직소싱부터 전국 가맹점 저온 물류까지</h4>
              <p>
                주식회사 서은은 중간 유통 단계를 과감히 혁신하여 산지 및 해외 최정상 제조공장과의 직접 계약을 통해 연중 흔들리지 않는 단가 경쟁력과 공급 안정성을 보장합니다.
              </p>

              <div className="scm-3pillars">
                <div className="scm-pillar-item">
                  <div className="scm-p-icon">
                    <Globe size={22} />
                  </div>
                  <div>
                    <strong>일본 · 베트남 · 중국 · 터키 등 현지 다이렉트 소싱</strong>
                    <p>일본 니혼햄 그룹·우쓰노미야 케이크 공장, 베트남 SSB HOLDINGS 독점 계약 등 글로벌 핵심 거점 직수입</p>
                  </div>
                </div>

                <div className="scm-pillar-item">
                  <div className="scm-p-icon">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <strong>연중 안정적인 공급 단가 방어</strong>
                    <p>기후 변화 및 환율·작황 변동 리스크에 대비한 다변화 소싱망과 계약 재배·연간 물량 사전 확보</p>
                  </div>
                </div>

                <div className="scm-pillar-item">
                  <div className="scm-p-icon">
                    <Snowflake size={22} />
                  </div>
                  <div>
                    <strong>이천 덕평 물류센터 기반 전국 단위 저온 물류 시스템</strong>
                    <p>상온·냉장·냉동 3온도대 통합 물류 거점 운영 및 수입 통관 직후 전 과정 상시 -18℃ 콜드체인 추적</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scm-img-col">
              <img
                src="/assets/company_profile_p12_img1_640x720.jpeg"
                alt="주식회사 서은 물류센터 콜드체인 현장"
              />
              <div className="scm-img-badge">
                <Snowflake size={18} />
                <span>경기도 이천 덕평 물류센터 (상온 · 냉장 · -18℃ 냉동)</span>
              </div>
            </div>
          </div>

          {/* Global Network Hub Cards */}
          <div className="scm-network-grid">
            <div className="net-card">
              <span className="net-country">JAPAN (일본)</span>
              <h5>니혼햄 그룹 &amp; 도치기현 TOP 3 제과</h5>
              <p>이사하야 플랜트(수플레 팬케이크·HOKO 치즈) 및 우쓰노미야 제1·2공장(몽블랑·바스크치즈 등) 국내 카페채널 독점 직수입</p>
            </div>
            <div className="net-card">
              <span className="net-country">VIETNAM (베트남)</span>
              <h5>SSB HOLDINGS JSC 독점 파트너십</h5>
              <p>2026. 01 전략적 파트너십 및 국내 독점 공급 계약 체결 — 열대 과일, 채소 및 가공 식자재 다이렉트 공급</p>
            </div>
            <div className="net-card">
              <span className="net-country">CHINA &amp; TURKEY (중국·터키·글로벌)</span>
              <h5>직화 육가공 · 흑마늘 · 농산물 직소싱</h5>
              <p>100% 닭다리살 직화 패티, 가라아게, 채널 독점 숙성 흑마늘 시리즈 및 글로벌 원물 다이렉트 소싱</p>
            </div>
            <div className="net-card">
              <span className="net-country">KOREA (국내 OEM &amp; 물류)</span>
              <h5>네이처팜 OEM &amp; 이천 덕평 물류거점</h5>
              <p>국내 우수 제조업체 &lsquo;네이처팜&rsquo; OEM 유통 계약 및 경기도 이천 덕평 통합 물류센터를 통한 전국 가맹점 직배송</p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          SUB-PAGE 2: 품질보증 및 현지화 R&D (quality-rnd)
      ========================================================= */}
      {subId === 'quality-rnd' && (
        <div className="quality-page">
          <div className="sub-head-area">
            <span className="sub-head-eyebrow">STRICT QUALITY &amp; R&amp;D OPERATIONS</span>
            <h3 className="sub-head-title">무결점 품질 책임 시스템과 한국 맞춤형 R&amp;D 지원</h3>
            <p className="sub-head-copy">
              대외 식품안전 이슈를 사전에 원천 차단하기 위해 매 공급 차수마다 생산 기지의 검사 데이터를 투명하게 공개하며,
              <br />
              한국 소비자 취향과 고객사 매뉴얼에 최적화된 레시피·패키지 설계를 원스톱으로 지원합니다.
            </p>
          </div>

          {/* 3 Core Cards from Proposal 1 p.10 (Strict Quality & Operations) */}
          <div className="strict-quality-3col">
            <div className="sq-card">
              <div className="sq-icon-circle">
                <Truck size={28} />
              </div>
              <span className="sq-num">PRINCIPLE 01</span>
              <h4>철저한 콜드 체인 보장</h4>
              <p>
                수입 통관 직후부터 전국 가맹점 콜드 체인 물류센터 유통망까지 전 과정 <strong>영하 18도(-18℃)</strong>를 엄격히 추적 및 보증합니다.
              </p>
              <div className="sq-foot-tag">온도 기록 트래킹 · 해동 변질 제로</div>
            </div>

            <div className="sq-card">
              <div className="sq-icon-circle gold">
                <Sliders size={28} />
              </div>
              <span className="sq-num">PRINCIPLE 02</span>
              <h4>맞춤형 현지화 지원</h4>
              <p>
                한국 소비자 데이터 및 고객사의 의견에 완벽 부합하도록 <strong>최상의 소스 조합과 토핑 사양 협조를 무상으로 제공</strong>합니다.
              </p>
              <div className="sq-foot-tag">식약처 통관 한글 패키지 설계 · 전용 배합</div>
            </div>

            <div className="sq-card">
              <div className="sq-icon-circle">
                <FileCheck2 size={28} />
              </div>
              <span className="sq-num">PRINCIPLE 03</span>
              <h4>완벽한 품질 책임 시스템</h4>
              <p>
                대외 식품안전 이슈를 사전에 원천 차단하기 위하여 <strong>니혼햄 등 생산 기지의 검사 데이터를 매 공급 차수마다 완벽 투명 공개</strong>합니다.
              </p>
              <div className="sq-foot-tag">로트(Lot)별 성적서 제공 · 이중 품질 검수</div>
            </div>
          </div>

          {/* Global Food Safety & Audit Matrix */}
          <div className="quality-matrix-block">
            <h4 className="table-heading">글로벌 식품안전 인증 및 통관 검증 체계</h4>
            <div className="spec-table-wrap">
              <table className="ourhome-spec-table">
                <thead>
                  <tr>
                    <th>검증 및 인증 구분</th>
                    <th>적용 대상 / 기관</th>
                    <th>주요 내용 및 보증 수준</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>FSSC 22000 &amp; HACCP</th>
                    <td>일본 도치기현 우쓰노미야 제1·2공장</td>
                    <td>글로벌 식품안전시스템 국제 인증 보유 · 일본 스타벅스 공급률 40% 수준의 엄격한 위생 관리</td>
                  </tr>
                  <tr>
                    <th>HACCP &amp; ISO 국제규격</th>
                    <td>일본 니혼햄(Nipponham) 이사하야 플랜트</td>
                    <td>첨단 제과 조리 설비 및 엄격한 이중 식품 품질 관리 프로세스 가동</td>
                  </tr>
                  <tr>
                    <th>글로벌 브랜드 Audit 통과</th>
                    <td>글로벌 리조트·외식 브랜드 &lsquo;INSPIRE&rsquo;</td>
                    <td>공급사 정식 등록 및 RTE 상품 Audit 통과 — <strong>L2 Green Grade</strong> 획득 (2025. 11)</td>
                  </tr>
                  <tr>
                    <th>국내 식약처 정식 수입·통관</th>
                    <td>경인지방식품의약품안전청 (제 20250016110 호)</td>
                    <td>국내 식품위생법 기준 원재료 및 식품첨가물 성분 적합성 사전 검증 완료</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
