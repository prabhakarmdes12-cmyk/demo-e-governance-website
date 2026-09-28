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
  Sparkles
} from 'lucide-react';
import { CITIZEN_PROFILE } from '../../data/portalData';
import avatarPrabhakar from '../../assets/avatar-prabhakar.png';
import heroScenicClean from '../../assets/hero-scenic-clean.jpg';
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
  const [heroTheme, setHeroTheme] = useState<'panoramic' | 'campaign'>('panoramic');

  const sampleKeywords = [
    'Income certificate',
    'Driving Licence',
    'Pension',
    'Birth certificate',
    'Scholarship',
    'Ration card',
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

  const activeBackdrop = heroTheme === 'campaign' ? heroLeadershipCampaign : heroScenicClean;

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(8, 28, 64, 0.94) 0%, rgba(11, 47, 107, 0.82) 48%, rgba(15, 23, 42, 0.35) 78%, rgba(15, 23, 42, 0.12) 100%), url(${activeBackdrop})`,
        backgroundSize: 'cover',
        backgroundPosition: heroTheme === 'campaign' ? 'right center' : 'center center',
      }}
      aria-label="Portal Introduction"
    >
      <div className="portal-container">
        {/* Subtle Backdrop Theme Switcher (Top Right) */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.75rem' }}>
          <div className="hero-backdrop-toggle" role="group" aria-label="Hero backdrop theme toggle">
            <button
              onClick={() => setHeroTheme('panoramic')}
              className={`backdrop-btn ${heroTheme === 'panoramic' ? 'active' : ''}`}
              title="Show Scenic India Gate Panorama"
            >
              Citizen Panorama
            </button>
            <button
              onClick={() => setHeroTheme('campaign')}
              className={`backdrop-btn ${heroTheme === 'campaign' ? 'active' : ''}`}
              title="Show National Leadership Banner"
            >
              Leadership Campaign
            </button>
          </div>
        </div>

        <div className="hero-grid">
          {/* Left Column: Heading, Subtitle, Carousel Dots, Search & AI */}
          <div className="hero-content">
            <h1>{isLoggedIn ? 'Your Government Account' : 'Your Government. One Account.'}</h1>
            <p className="hero-subtitle">
              {isLoggedIn
                ? 'Access all your services, documents and benefits in one place.'
                : 'Access services, applications, documents and benefits securely in one place.'}
            </p>

            {/* 4 Carousel Dots (Figma Desktop - 7) */}
            <div className="carousel-dots" aria-hidden="true">
              <span className="carousel-dot active" />
              <span className="carousel-dot" />
              <span className="carousel-dot" />
              <span className="carousel-dot" />
            </div>

            {/* Search Bar + Ask AI Row */}
            <div className="hero-search-row">
              <form onSubmit={handleSearchSubmit} className="unified-search-box" id="portal-search">
                <Search size={19} style={{ color: '#0066FF', flexShrink: 0 }} aria-hidden="true" />
                <input
                  type="text"
                  className="unified-search-input"
                  placeholder="Search for services, schemes, departments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search government services, schemes and departments"
                />
                <button
                  type="submit"
                  className="hero-search-submit-btn"
                  aria-label="Submit search"
                >
                  <span>Search</span>
                </button>
              </form>

              {/* Ask AI Card */}
              <button
                onClick={onOpenAi}
                className="hero-ask-ai-card"
                title="Ask AI Assistant"
                aria-label="Open Viksit Bharat AI Assistant"
              >
                <div className="hero-ask-ai-icon">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="hero-ask-ai-title">
                    Ask AI Assistant
                    <Sparkles size={12} className="hero-sparkle-icon" />
                  </div>
                  <div className="hero-ask-ai-sub">
                    Find services, check steps
                  </div>
                </div>
              </button>
            </div>

            {/* Keyword Search Chips */}
            <div className="search-chips-row" aria-label="Suggested search keywords">
              <span className="chips-label">Popular:</span>
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
              /* Authenticated Citizen Profile Card (Desktop - 7) */
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
                        <span>Aadhaar verified</span>
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
                  <span>View / Edit Profile</span>
                  <ArrowRight size={14} />
                </button>

                {/* 4 Stat Boxes (Figma Pixel Perfect) */}
                <div className="profile-stats-grid">
                  <div className="profile-stat-box stat-blue">
                    <FileText size={16} />
                    <div className="stat-item-number">{CITIZEN_PROFILE.stats.applications}</div>
                    <div className="stat-item-label">Applications</div>
                  </div>

                  <div className="profile-stat-box stat-green">
                    <FolderCheck size={16} />
                    <div className="stat-item-number">{CITIZEN_PROFILE.stats.documents}</div>
                    <div className="stat-item-label">Documents</div>
                  </div>

                  <div className="profile-stat-box stat-indigo">
                    <Star size={16} />
                    <div className="stat-item-number">{CITIZEN_PROFILE.stats.benefits}</div>
                    <div className="stat-item-label">Benefits</div>
                  </div>

                  <div className="profile-stat-box stat-amber">
                    <AlertTriangle size={16} />
                    <div className="stat-item-number">{CITIZEN_PROFILE.stats.actionRequired}</div>
                    <div className="stat-item-label">Action Req.</div>
                  </div>
                </div>
              </div>
            ) : (
              /* Unauthenticated / Returning Citizen Claim Card (Desktop - 6) */
              <div className="citizen-profile-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                  <div className="claim-header-icon-wrap">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Good morning,</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                      Access your government account
                    </div>
                  </div>
                </div>

                {/* Big CTA Card: Find & Claim Your Profile */}
                <div
                  onClick={onOpenLogin}
                  className="claim-profile-box"
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
                    Securely find your citizen profile using Aadhaar or Mobile. Link past applications and documents.
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
                  className="hero-secure-login-btn"
                >
                  <Fingerprint size={17} />
                  <span>Aadhaar / Mobile Secure Login</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenHero;
