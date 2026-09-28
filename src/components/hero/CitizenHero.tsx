import React, { useState } from 'react';
import {
  Search,
  Bot,
  CheckCircle2,
  Fingerprint,
  ArrowRight,
  UserCheck,
  FileText,
  FolderCheck,
  Star,
  AlertTriangle,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { CITIZEN_PROFILE } from '../../data/portalData';
import avatarPrabhakar from '../../assets/avatar-prabhakar.png';
import heroCleanBanner from '../../assets/hero-clean-banner.png';
import heroLeadershipCampaign from '../../assets/hero-leadership-campaign.jpg';

interface CitizenHeroProps {
  isLoggedIn: boolean;
  onOpenLogin: () => void;
  onOpenAi: () => void;
  onSearch: (query: string) => void;
  onQuickViewProfile?: () => void;
}

export const CitizenHero: React.FC<CitizenHeroProps> = ({
  isLoggedIn,
  onOpenLogin,
  onOpenAi,
  onSearch,
  onQuickViewProfile,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [heroTheme, setHeroTheme] = useState<'campaign' | 'panoramic'>('campaign');

  const sampleKeywords = [
    'Income certificate',
    'Driving Licence',
    'Pension DBT',
    'PM-Kisan',
    'Ayushman Card',
    'Scholarship',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleChipClick = (keyword: string) => {
    setSearchQuery(keyword);
    onSearch(keyword);
  };

  const activeBackdrop = heroTheme === 'campaign' ? heroLeadershipCampaign : heroCleanBanner;

  return (
    <section
      className="hero-section campaign-hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(5, 18, 48, 0.96) 0%, rgba(11, 47, 107, 0.88) 46%, rgba(15, 23, 42, 0.42) 75%, rgba(15, 23, 42, 0.18) 100%), url(${activeBackdrop})`,
      }}
      aria-label="National Citizen Portal Hero"
    >
      <div className="portal-container">
        {/* Campaign Leadership Mission Ribbon */}
        <div className="campaign-mission-badge-row">
          <div className="campaign-tag-pill">
            <span className="campaign-flag-icon">🇮🇳</span>
            <span>Viksit Bharat @ 2047 • Minimum Government, Maximum Governance</span>
          </div>

          <div className="hero-backdrop-toggle" role="group" aria-label="Hero backdrop theme toggle">
            <button
              onClick={() => setHeroTheme('campaign')}
              className={`backdrop-btn ${heroTheme === 'campaign' ? 'active' : ''}`}
              title="Show National Campaign & Leadership Banner"
            >
              Leadership Campaign
            </button>
            <button
              onClick={() => setHeroTheme('panoramic')}
              className={`backdrop-btn ${heroTheme === 'panoramic' ? 'active' : ''}`}
              title="Show Panoramic Citizen View"
            >
              Citizen Panorama
            </button>
          </div>
        </div>

        <div className="hero-grid">
          {/* Left Column: Heading, Leadership Quote, Search & AI */}
          <div className="hero-content">
            <h1 className="hero-main-title">
              {isLoggedIn ? 'Your Government Account' : 'Your Government. One Account.'}
            </h1>
            
            <p className="hero-subtitle">
              {isLoggedIn
                ? 'Access all your direct benefit transfers, issued digital certificates, and citizen schemes in one unified gateway.'
                : 'Direct access to 1,200+ Central and State welfare services, digital documents, and applications with zero office visits.'}
            </p>

            {/* Political Campaign Leadership Quote Box */}
            <div className="leadership-quote-card">
              <div className="quote-accent-bar" />
              <div className="quote-body">
                <p className="quote-text">
                  “Citizen-first governance is our sacred pledge. Through digital public infrastructure, every scheme, subsidy, and certificate reaches 100% of entitled citizens without leakages or intermediaries.”
                </p>
                <div className="quote-author-row">
                  <div className="quote-author-info">
                    <strong className="quote-author-name">National Leadership Guarantee</strong>
                    <span className="quote-author-title">Prime Minister’s Vision for Digital Governance • Viksit Bharat</span>
                  </div>
                  <div className="quote-sankalp-tag">
                    <Sparkles size={12} style={{ color: '#F59E0B' }} />
                    <span>Sankalp Se Siddhi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar + Ask AI Row */}
            <div className="hero-search-row">
              <form onSubmit={handleSearchSubmit} className="unified-search-box" id="portal-search">
                <Search size={19} style={{ color: '#0066FF', flexShrink: 0 }} aria-hidden="true" />
                <input
                  type="text"
                  className="unified-search-input"
                  placeholder="Search for schemes (e.g. Income certificate, Driving Licence, PM-Kisan)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search government services, schemes and departments"
                />
                <button
                  type="submit"
                  className="unified-search-submit-btn"
                  aria-label="Search portal"
                >
                  Search
                </button>
              </form>

              {/* Ask AI Card */}
              <button
                onClick={onOpenAi}
                className="hero-ai-card-btn"
                title="Ask Viksit Bharat AI Assistant"
                aria-label="Open Viksit Bharat AI Assistant"
              >
                <div className="hero-ai-icon-box">
                  <Bot size={17} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#1E293B', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Ask AI Assistant
                    <Sparkles size={12} style={{ color: '#EAB308' }} />
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#64748B' }}>
                    Instant scheme guidance
                  </div>
                </div>
              </button>
            </div>

            {/* Keyword Search Chips */}
            <div className="search-chips-row" aria-label="Suggested search queries">
              <span className="chips-label">Popular Schemes:</span>
              {sampleKeywords.map((keyword) => (
                <button
                  key={keyword}
                  type="button"
                  className="search-chip"
                  onClick={() => handleChipClick(keyword)}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Citizen Profile or Claim Profile Card */}
          <div className="hero-card-col">
            {isLoggedIn ? (
              /* Authenticated Citizen Profile Card */
              <div className="citizen-profile-card">
                <div className="profile-card-top">
                  <div className="profile-avatar-wrap">
                    <img
                      src={avatarPrabhakar}
                      alt="Prabhakar Kumar profile picture"
                      className="citizen-avatar-img"
                    />
                    <div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                        {CITIZEN_PROFILE.greeting},
                      </div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
                        {CITIZEN_PROFILE.name}
                      </div>
                      <div className="citizen-verified-badge">
                        <CheckCircle2 size={12} />
                        <span>Aadhaar verified • KYC 100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* View / Edit Profile Outline CTA Button */}
                <button
                  onClick={onQuickViewProfile}
                  className="profile-full-action-btn"
                  aria-label="View or edit citizen profile"
                >
                  <span>View & Manage Citizen Portfolio</span>
                  <ArrowRight size={14} />
                </button>

                {/* 4 Stat Boxes (Figma Pixel Perfect) */}
                <div className="profile-stats-grid">
                  <div className="profile-stat-box" style={{ background: '#F0F7FF', border: '1px solid #D0E4FF' }}>
                    <FileText size={16} style={{ color: '#0066FF' }} />
                    <div className="stat-item-number" style={{ color: '#1E293B' }}>{CITIZEN_PROFILE.stats.applications}</div>
                    <div className="stat-item-label" style={{ color: '#64748B' }}>Applications</div>
                  </div>

                  <div className="profile-stat-box" style={{ background: '#F0FDF4', border: '1px solid #DCFCE7' }}>
                    <FolderCheck size={16} style={{ color: '#16A34A' }} />
                    <div className="stat-item-number" style={{ color: '#1E293B' }}>{CITIZEN_PROFILE.stats.documents}</div>
                    <div className="stat-item-label" style={{ color: '#64748B' }}>Documents</div>
                  </div>

                  <div className="profile-stat-box" style={{ background: '#F5F3FF', border: '1px solid #E0E7FF' }}>
                    <Star size={16} style={{ color: '#6366F1' }} />
                    <div className="stat-item-number" style={{ color: '#1E293B' }}>{CITIZEN_PROFILE.stats.benefits}</div>
                    <div className="stat-item-label" style={{ color: '#64748B' }}>Benefits</div>
                  </div>

                  <div className="profile-stat-box" style={{ background: '#FFFBEB', border: '1px solid #FEF3C7' }}>
                    <AlertTriangle size={16} style={{ color: '#D97706' }} />
                    <div className="stat-item-number" style={{ color: '#B45309' }}>{CITIZEN_PROFILE.stats.actionRequired}</div>
                    <div className="stat-item-label" style={{ color: '#92400E' }}>Action Req.</div>
                  </div>
                </div>

                {/* National Saturation Metric in Card */}
                <div className="card-saturation-note">
                  <ShieldCheck size={14} style={{ color: '#10B981' }} />
                  <span>Direct Benefit Transfer Linked to Jan Dhan Account</span>
                </div>
              </div>
            ) : (
              /* Unauthenticated / Returning Citizen Claim Card */
              <div className="citizen-profile-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#EFF6FF',
                      color: '#0066FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Namaste,</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                      Access your citizen profile
                    </div>
                  </div>
                </div>

                {/* Big CTA Card: Find & Claim Your Profile */}
                <div
                  onClick={onOpenLogin}
                  style={{
                    background: '#F8FAFC',
                    border: '1.5px dashed #0066FF',
                    borderRadius: '8px',
                    padding: '1.15rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    marginBottom: '1rem',
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') onOpenLogin(); }}
                  aria-label="Find and claim your citizen profile"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <Fingerprint size={24} style={{ color: '#0066FF' }} />
                    <div style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--color-primary-navy)' }}>
                      Find & Claim Your Profile
                    </div>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: '0 0 0.75rem', lineHeight: 1.5 }}>
                    Enter Aadhaar or Mobile to aggregate all past certificates, pending rations, and DBT subsidies instantly.
                  </p>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--color-primary-blue)',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                    }}
                  >
                    <span>Instant Link</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

                {/* Primary Sign In Button */}
                <button
                  onClick={onOpenLogin}
                  style={{
                    width: '100%',
                    background: 'var(--color-primary-blue)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 12px rgba(0, 102, 255, 0.25)',
                  }}
                >
                  <Fingerprint size={17} />
                  <span>Aadhaar / Mobile Secure Login</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Campaign National Governance Saturation Counter */}
        <div className="campaign-saturation-strip">
          <div className="saturation-item">
            <span className="saturation-val">₹38.5+ Lakh Cr</span>
            <span className="saturation-lbl">Direct Benefit Transfers (DBT)</span>
          </div>
          <div className="saturation-divider" />
          <div className="saturation-item">
            <span className="saturation-val">100% Saturation</span>
            <span className="saturation-lbl">Zero Intermediary Delivery</span>
          </div>
          <div className="saturation-divider" />
          <div className="saturation-item">
            <span className="saturation-val">340+ Central & State Schemes</span>
            <span className="saturation-lbl">Single Window Citizen Access</span>
          </div>
          <div className="saturation-divider" />
          <div className="saturation-item">
            <span className="saturation-val">1.4 Billion Citizens</span>
            <span className="saturation-lbl">Unified Public Digital Rail</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenHero;
