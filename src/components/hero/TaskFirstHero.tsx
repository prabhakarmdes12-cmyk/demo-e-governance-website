import React, { useState, useEffect } from 'react';
import {
  Search,
  Bot,
  Sparkles,
  Pause,
  Play,
  FileText,
  Car,
  Award,
  GraduationCap,
  Users,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import heroScenicClean from '../../assets/hero-scenic-clean.jpg';
import heroLeadershipCampaign from '../../assets/hero-leadership-campaign.jpg';
import heroDigitalBharat from '../../assets/hero-digital-bharat.jpg';
import heroParliamentTricolor from '../../assets/hero-parliament-tricolor.jpg';

interface TaskFirstHeroProps {
  onSearch: (query: string) => void;
  onOpenAi: () => void;
  onSelectService: (serviceName: string) => void;
}

interface HeroSlide {
  id: string;
  image: string;
  position?: string;
  label: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'scenic',
    image: heroScenicClean,
    position: 'center center',
    label: 'Slide 1 of 4: Scenic India Gate Sunrise Panorama',
  },
  {
    id: 'campaign',
    image: heroLeadershipCampaign,
    position: 'right center',
    label: 'Slide 2 of 4: National Leadership Campaign',
  },
  {
    id: 'citizens',
    image: heroDigitalBharat,
    position: 'center center',
    label: 'Slide 3 of 4: Digital Bharat & Empowered Citizens',
  },
  {
    id: 'parliament',
    image: heroParliamentTricolor,
    position: 'center center',
    label: 'Slide 4 of 4: Kartavya Path & Parliament Tricolor Illumination',
  },
];

const POPULAR_HERO_SERVICES = [
  {
    id: 'income-cert',
    title: 'Income Certificate',
    category: 'Revenue & Certificates',
    icon: FileText,
    iconColor: '#0066FF',
    iconBg: '#EFF6FF',
  },
  {
    id: 'driving-licence',
    title: 'Driving Licence',
    category: 'Transport & Parivahan',
    icon: Car,
    iconColor: '#0284C7',
    iconBg: '#E0F2FE',
  },
  {
    id: 'birth-cert',
    title: 'Birth Certificate',
    category: 'Civil Registration',
    icon: Award,
    iconColor: '#10B981',
    iconBg: '#ECFDF5',
  },
  {
    id: 'scholarship-app',
    title: 'Scholarship Application',
    category: 'National Scholarship Portal',
    icon: GraduationCap,
    iconColor: '#7C3AED',
    iconBg: '#F5F3FF',
  },
  {
    id: 'pension-services',
    title: 'Pension Services',
    category: 'Social Welfare & NSAP',
    icon: Users,
    iconColor: '#D97706',
    iconBg: '#FFFBEB',
  },
];

export const TaskFirstHero: React.FC<TaskFirstHeroProps> = ({
  onSearch,
  onOpenAi,
  onSelectService,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slideshow every 6 seconds unless paused or hovered
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

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

  return (
    <section
      className="hero-section task-first-hero-section"
      aria-label="Viksit Bharat Portal Introduction"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Cross-Fade Image Slideshow Viewport */}
      <div className="hero-slideshow-viewport" aria-hidden="true">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slide-layer ${idx === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(8, 28, 64, 0.94) 0%, rgba(11, 47, 107, 0.82) 48%, rgba(15, 23, 42, 0.35) 78%, rgba(15, 23, 42, 0.12) 100%), url(${slide.image})`,
              backgroundPosition: slide.position || 'center center',
            }}
          />
        ))}
      </div>

      <div className="portal-container">
        <div className="hero-grid">
          {/* Left Column: Heading, Subtitle, Carousel Dots, Search & AI (Figma Desktop - 2) */}
          <div className="hero-content">
            <h1>Viksit Bharat</h1>
            <div className="task-first-hero-tagline">
              Stronger Citizens, Brighter Tomorrow
            </div>
            <p className="hero-subtitle">
              Digital services for a simpler, faster and more inclusive India. Access official certificates, social welfare schemes, and verified public utilities seamlessly.
            </p>

            {/* Interactive Carousel Dots & Slideshow Play/Pause Controls */}
            <div
              className="carousel-dots-container"
              role="region"
              aria-label="Hero background slideshow controls"
            >
              <div className="carousel-dots" role="tablist" aria-label="Hero slides">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === currentSlide}
                    aria-label={slide.label}
                    className={`carousel-dot-btn ${idx === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="carousel-pause-toggle-btn"
                onClick={() => setIsPaused((prev) => !prev)}
                aria-label={isPaused ? 'Resume hero background slideshow' : 'Pause hero background slideshow'}
                title={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
              >
                {isPaused ? <Play size={11} aria-hidden="true" /> : <Pause size={11} aria-hidden="true" />}
                <span className="sr-only">{isPaused ? 'Play' : 'Pause'}</span>
              </button>
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

              {/* Ask AI Card (Desktop - 2) */}
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
                    Ask AI
                    <Sparkles size={12} className="hero-sparkle-icon" />
                  </div>
                  <div className="hero-ask-ai-sub">
                    How can we help you?
                  </div>
                </div>
              </button>
            </div>

            {/* Keyword Search Chips (Figma Desktop - 2: "Example:") */}
            <div className="search-chips-row" aria-label="Suggested search keywords">
              <span className="chips-label">Example:</span>
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

          {/* Right Column: Floating Popular Services Card (Figma Desktop - 2) */}
          <div className="hero-card-col">
            <div className="task-first-popular-card">
              <div className="task-first-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TrendingUp size={18} style={{ color: 'var(--color-primary-blue)' }} />
                  <h2 className="task-first-card-title">Popular Services</h2>
                </div>
                <span className="task-first-badge-top">Top Accessed</span>
              </div>

              <div className="task-first-services-list" role="list">
                {POPULAR_HERO_SERVICES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className="task-first-service-item-btn"
                      onClick={() => onSelectService(item.title)}
                      aria-label={`Open ${item.title}`}
                    >
                      <div className="task-first-item-left">
                        <div
                          className="task-first-item-icon-box"
                          style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                          aria-hidden="true"
                        >
                          <Icon size={16} />
                        </div>
                        <div className="task-first-item-texts">
                          <span className="task-first-item-name">{item.title}</span>
                          <span className="task-first-item-category">{item.category}</span>
                        </div>
                      </div>
                      <ChevronRight size={16} className="task-first-item-chevron" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>

              <div className="task-first-card-footer">
                <button
                  type="button"
                  className="task-first-view-all-btn"
                  onClick={() => onSearch('services')}
                >
                  <span>Explore all 25+ essential services</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskFirstHero;
