import React, { useState } from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  Send,
  Copy,
  CheckCircle2,
  Building2,
  Truck,
  Video,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function SupportView({ subId }) {
  const [formData, setFormData] = useState({
    inquiryType: '니혼햄 프리미엄 디저트 (수플레·몽블랑·레어치즈) 샘플 신청',
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    storeCount: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildFormattedText = () => {
    return `[주식회사 서은 B2B 파트너십·샘플 문의]
- 문의 유형: ${formData.inquiryType}
- 기업/브랜드명: ${formData.companyName || '(미기재)'}
- 담당자 성함/직급: ${formData.contactPerson || '(미기재)'}
- 연락처: ${formData.phone || '(미기재)'}
- 이메일: ${formData.email || '(미기재)'}
- 운영 매장수 / 예상 물량: ${formData.storeCount || '(미기재)'}
- 상세 문의 내용:
${formData.message || '품평회용 샘플 및 공급 단가 협의를 요청합니다.'}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(buildFormattedText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMailto = (targetEmail) => {
    const subject = encodeURIComponent(
      `[서은 B2B 문의] ${formData.companyName ? formData.companyName + ' - ' : ''}${formData.inquiryType}`
    );
    const body = encodeURIComponent(buildFormattedText());
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="subpage-container">
      {/* =========================================================
          SUB-PAGE 1: 샘플 신청 및 납품 문의 (inquiry)
      ========================================================= */}
      {subId === 'inquiry' && (
        <div className="inquiry-page">
          <div className="sub-head-area">
            <span className="sub-head-eyebrow">PARTNERSHIP &amp; SAMPLE REQUEST</span>
            <h3 className="sub-head-title">함께 성장할 최적의 해답을 찾아드리겠습니다</h3>
            <p className="sub-head-copy">
              품평회용 공식 고사양 샘플 무상 전달, 일본 제조공장 실시간 화상회의 및 맞춤형 단가·MOQ 협의를 즉시 지원합니다.
              <br />
              문의사항이 있으시면 언제든 편하게 연락 주십시오.
            </p>
          </div>

          {/* Direct Contact Hotline Cards */}
          <div className="contact-hotline-duo">
            <div className="hotline-card sales-primary">
              <div className="hl-badge">프리미엄 디저트 · OEM/ODM · 2026 신제품 전담</div>
              <h4>영업팀 직통 파트너십 창구</h4>
              <p className="hl-note">
                <Video size={16} />
                <span>{COMPANY_INFO.salesManager.note}</span>
              </p>
              <div className="hl-person">
                <strong>영업팀 {COMPANY_INFO.salesManager.name}</strong>
              </div>
              <div className="hl-links">
                <a href={`tel:${COMPANY_INFO.salesManager.phone}`} className="hl-action-btn">
                  <PhoneCall size={16} />
                  <span>{COMPANY_INFO.salesManager.phone}</span>
                </a>
                <a href={`mailto:${COMPANY_INFO.salesManager.email}`} className="hl-action-btn outline">
                  <Mail size={16} />
                  <span>{COMPANY_INFO.salesManager.email}</span>
                </a>
              </div>
            </div>

            <div className="hotline-card corp-hq">
              <div className="hl-badge navy">식자재 소싱 · RTE 가니쉬 · 대표 문의</div>
              <h4>주식회사 서은 본사 대표 창구</h4>
              <p className="hl-note">
                <Building2 size={16} />
                <span>프랜차이즈 맞춤형 식자재 기획·소싱 및 물류 통합 상담</span>
              </p>
              <div className="hl-person">
                <strong>전화: {COMPANY_INFO.mainPhone}</strong>
                <span className="fax-sub">FAX: {COMPANY_INFO.mainFax}</span>
              </div>
              <div className="hl-links">
                <a href={`tel:${COMPANY_INFO.mainPhone}`} className="hl-action-btn navy">
                  <PhoneCall size={16} />
                  <span>{COMPANY_INFO.mainPhone}</span>
                </a>
                <a href={`mailto:${COMPANY_INFO.mainEmail}`} className="hl-action-btn navy-outline">
                  <Mail size={16} />
                  <span>{COMPANY_INFO.mainEmail}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Serverless B2B Inquiry Form */}
          <div className="inquiry-form-panel">
            <div className="form-panel-head">
              <span className="eyebrow">ONLINE B2B INQUIRY FORM</span>
              <h4>온라인 샘플 신청 및 납품·제휴 문의</h4>
              <p>
                아래 양식을 작성하시면 영업팀 담당자({COMPANY_INFO.salesManager.email} / {COMPANY_INFO.mainEmail})에게 즉시 전송할 수 있는 맞춤형 문의서가 생성됩니다.
              </p>
            </div>

            <form className="b2b-form" onSubmit={handleSubmit}>
              <div className="form-row-full">
                <label htmlFor="inquiryType">문의 카테고리 선택 *</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                >
                  <option value="니혼햄 프리미엄 디저트 (수플레·몽블랑·레어치즈) 샘플 신청">
                    01. 니혼햄 프리미엄 디저트 (냉동 수플레 팬케이크 · 몽블랑 · HOKO 레어치즈) 무상 샘플 신청
                  </option>
                  <option value="일본 TOP 3 케이크 제조공장 OEM·ODM 및 말차 몽블랑 도입 문의">
                    02. 일본 TOP 3 케이크 OEM·ODM 개발 및 말차 몽블랑 화상회의/단가 문의
                  </option>
                  <option value="2026 신제품 (직화 숯불치킨패티 · 가라아게 · 50g 타피오카펄) 발주 문의">
                    03. 2026 신제품 (숯불순살치킨 패티 · 치킨 가라아게 · 50g 냉동 타피오카펄) 견적 문의
                  </option>
                  <option value="채널 독점 흑마늘 시리즈 (홀 하프컷 · 흑마늘칩) 독점권 및 MOQ 협의">
                    04. 채널 독점 흑마늘 시리즈 (흑마늘 홀 하프컷 · 흑마늘칩) 독점 라이선스 및 MOQ 사전 협의
                  </option>
                  <option value="RTE 가니쉬 및 맞춤형 신규 식자재 기획·소싱 문의">
                    05. RTE(Ready To Eat) 가니쉬 및 맞춤형 신규 식자재 기획·소싱 문의
                  </option>
                </select>
              </div>

              <div className="form-row-2col">
                <div className="form-field">
                  <label htmlFor="companyName">기업명 / 브랜드명 *</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    placeholder="예: OO커피 프랜차이즈 본사"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contactPerson">담당자 성함 / 직급 *</label>
                  <input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    required
                    placeholder="예: 홍길동 팀장 (구매/R&D팀)"
                    value={formData.contactPerson}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row-3col">
                <div className="form-field">
                  <label htmlFor="phone">연락처 *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="예: 010-0000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">이메일 *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="예: buyer@company.co.kr"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="storeCount">운영 매장 수 / 예상 월 소요량</label>
                  <input
                    id="storeCount"
                    name="storeCount"
                    type="text"
                    placeholder="예: 전국 120개 매장 / 월 5,000개"
                    value={formData.storeCount}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row-full">
                <label htmlFor="message">상세 문의 내용 (희망 샘플 품목, 타겟 단가, 미팅 희망 일정 등)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="품평회 일정, 희망하시는 샘플 품목(예: 수플레 팬케이크 20g, 말차 몽블랑, 숯불순살치킨 패티 등), 또는 제조공장 화상회의 희망 일정을 남겨주시면 신속히 안내해 드리겠습니다."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn-gold-solid lg">
                  <Send size={17} />
                  <span>문의서 작성 완료 및 전송 옵션 열기</span>
                </button>
              </div>
            </form>

            {submitted && (
              <div className="inquiry-result-box">
                <div className="res-head">
                  <CheckCircle2 size={22} className="res-ok-ic" />
                  <div>
                    <h5>문의 내용이 정리되었습니다. 원하시는 방식으로 즉시 전달하실 수 있습니다.</h5>
                    <p>기본 메일 앱 자동 실행(100% 무료) 또는 클립보드 복사를 통해 담당자에게 바로 전달됩니다.</p>
                  </div>
                </div>
                <pre className="res-preview">{buildFormattedText()}</pre>
                <div className="res-actions">
                  <button
                    type="button"
                    className="btn-gold-solid"
                    onClick={() => handleSendMailto(COMPANY_INFO.salesManager.email)}
                  >
                    <Mail size={16} />
                    <span>영업팀({COMPANY_INFO.salesManager.email}) 메일 앱으로 발송</span>
                  </button>
                  <button
                    type="button"
                    className="btn-navy-outline"
                    onClick={() => handleSendMailto(COMPANY_INFO.mainEmail)}
                  >
                    <Mail size={16} />
                    <span>본사({COMPANY_INFO.mainEmail}) 메일 앱으로 발송</span>
                  </button>
                  <button
                    type="button"
                    className="btn-copy-clip"
                    onClick={handleCopyText}
                  >
                    <Copy size={16} />
                    <span>{copied ? '클립보드에 복사되었습니다!' : '문의 내용 전체 복사하기'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================
          SUB-PAGE 2: 오시는 길 및 물류거점 (location)
      ========================================================= */}
      {subId === 'location' && (
        <div className="location-page">
          <div className="sub-head-area">
            <span className="sub-head-eyebrow">LOCATIONS &amp; LOGISTICS HUB</span>
            <h3 className="sub-head-title">오시는 길 및 전국 물류 거점 안내</h3>
            <p className="sub-head-copy">
              주식회사 서은은 고양시 향동 비즈니스 오피스와 용인 본점,
              <br />
              그리고 경기도 이천 덕평 통합 물류센터를 거점으로 수도권 및 전국 프랜차이즈 물류를 신속하게 연결합니다.
            </p>
          </div>

          <div className="locations-3col">
            <div className="loc-card primary">
              <div className="loc-icon-badge">
                <Building2 size={24} />
              </div>
              <span className="loc-tag">HEAD OFFICE (비즈니스 오피스)</span>
              <h4>고양 향동 오피스</h4>
              <p className="loc-addr">{COMPANY_INFO.hqOffice}</p>
              <div className="loc-meta">
                <p><strong>대표전화:</strong> {COMPANY_INFO.mainPhone}</p>
                <p><strong>팩스번호:</strong> {COMPANY_INFO.mainFax}</p>
                <p><strong>이메일:</strong> {COMPANY_INFO.mainEmail}</p>
              </div>
            </div>

            <div className="loc-card">
              <div className="loc-icon-badge gold">
                <Truck size={24} />
              </div>
              <span className="loc-tag gold">COLD-CHAIN LOGISTICS HUB</span>
              <h4>경기도 이천 덕평 물류센터</h4>
              <p className="loc-addr">경기도 이천시 덕평로 일대 통합 물류 거점</p>
              <div className="loc-meta">
                <p><strong>운영 온도대:</strong> 상온 / 냉장 / 냉동(-18℃ 이하)</p>
                <p><strong>주요 기능:</strong> 수입 통관 입고, 콜드체인 보관 및 전국 가맹점 물류 출고</p>
                <p><strong>영업팀 문의:</strong> {COMPANY_INFO.salesManager.phone}</p>
              </div>
            </div>

            <div className="loc-card">
              <div className="loc-icon-badge">
                <MapPin size={24} />
              </div>
              <span className="loc-tag">REGISTERED HQ (등기 본점 및 수입영업소)</span>
              <h4>용인 본점</h4>
              <p className="loc-addr">{COMPANY_INFO.registeredAddress}</p>
              <div className="loc-meta">
                <p><strong>사업자등록번호:</strong> {COMPANY_INFO.bizRegNo}</p>
                <p><strong>수입식품 영업등록:</strong> 제 20250016110 호</p>
                <p><strong>관할기관:</strong> 경인지방식품의약품안전청</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
