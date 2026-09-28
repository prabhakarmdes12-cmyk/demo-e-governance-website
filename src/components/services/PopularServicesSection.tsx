import React, { useState } from 'react';
import type { PopularService } from '../../types';
import { POPULAR_SERVICES, ANNOUNCEMENTS } from '../../data/portalData';
import {
  ChevronRight,
  FileText,
  Truck,
  Users,
  FilePlus,
  Home,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Headphones,
  Bell
} from 'lucide-react';

import bannerPmKisan from '../../assets/banner-pmkisan.png';
import bannerScholarship from '../../assets/banner-scholarship.png';
import bannerSeniorCitizen from '../../assets/banner-seniorcitizen.png';
import bannerViksitBharat from '../../assets/banner-viksit-bharat.jpg';

interface PopularServicesSectionProps {
  onSelectService: (service: PopularService) => void;
  onOpenHelp: () => void;
}

export const PopularServicesSection: React.FC<PopularServicesSectionProps> = ({
  onSelectService,
  onOpenHelp,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeAnnounceTab, setActiveAnnounceTab] = useState<string>('Latest');

  const categories = ['All', 'Citizen', 'Health', 'Education', 'Transport', 'Social Welfare'];
  const announceTabs = ['Latest', 'Schemes', 'Events', 'Deadlines'];

  const filteredServices = activeCategory === 'All'
    ? POPULAR_SERVICES
    : POPULAR_SERVICES.filter((s) => s.category === activeCategory);

  const filteredAnnouncements = ANNOUNCEMENTS.filter((a) =>
    activeAnnounceTab === 'Latest' ? true : a.category === activeAnnounceTab
  );

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText size={18} />;
      case 'Truck': return <Truck size={18} />;
      case 'Users': return <Users size={18} />;
      case 'FilePlus': return <FilePlus size={18} />;
      case 'Home': return <Home size={18} />;
      case 'ShoppingBag': return <ShoppingBag size={18} />;
      case 'GraduationCap': return <GraduationCap size={18} />;
      case 'HeartPulse': return <HeartPulse size={18} />;
      case 'ShieldCheck': return <ShieldCheck size={18} />;
      default: return <FileText size={18} />;
    }
  };

  return (
    <section className="popular-section" aria-label="Popular Services and Announcements">
      <div className="portal-container">
        <div className="popular-layout-grid">
          {/* Left Column: Popular Services & Promo Banners */}
          <div>
            <div className="section-header-row">
              <h2 className="section-title">Popular Services (25)</h2>
              <a
                href="#all-services"
                className="view-all-link"
                onClick={(e) => e.preventDefault()}
              >
                <span>View All Services</span>
                <ChevronRight size={15} />
              </a>
            </div>

            {/* Category Filter Pills */}
            <div className="filter-pills-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* 9 Service Grid Cards */}
            <div className="services-grid-cards">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="service-card"
                  onClick={() => onSelectService(service)}
                >
                  <div className="service-card-left">
                    <div className="service-icon-box">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="service-card-title">{service.title}</h3>
                      <p className="service-card-sub">{service.actionText}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} style={{ color: 'var(--text-light)' }} />
                </div>
              ))}
            </div>

            {/* Viksit Bharat 2047 National Mission Showcase Banner */}
            <div
              className="viksit-mission-banner-card"
              onClick={() => onSelectService({
                id: 'viksit-2047',
                title: 'Viksit Bharat @ 2047 National Mission',
                category: 'Citizen',
                department: 'NITI Aayog & Cabinet Secretariat',
                icon: 'ShieldCheck',
                actionText: 'Explore Citizen Participation & Schemes',
                badge: 'Mission 2047',
              })}
              role="button"
              tabIndex={0}
              aria-label="Viksit Bharat @ 2047 National Mission Banner"
            >
              <img
                src={bannerViksitBharat}
                alt="Viksit Bharat @ 2047: A National Mission to Transform India into a Developed Nation by 2047"
                className="viksit-mission-banner-img"
              />
            </div>

            {/* Promotional Banners Row with Figma Artwork */}
            <div className="promo-banners-grid">
              <div className="promo-banner-card" onClick={onOpenHelp}>
                <img src={bannerPmKisan} alt="PM Kisan Samman Nidhi" className="promo-banner-img" />
              </div>
              <div className="promo-banner-card" onClick={onOpenHelp}>
                <img src={bannerScholarship} alt="Scholarship Applications Now Open" className="promo-banner-img" />
              </div>
              <div className="promo-banner-card" onClick={onOpenHelp}>
                <img src={bannerSeniorCitizen} alt="Senior Citizen Pension Scheme" className="promo-banner-img" />
              </div>
            </div>
          </div>

          {/* Right Column: Schemes & Announcements + Help Widget */}
          <div>
            {/* Schemes & Announcements Widget */}
            <div className="side-widget-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Bell size={18} style={{ color: 'var(--color-primary-blue)' }} />
                  Schemes & Announcements
                </h3>
                <a href="#announcements" className="view-all-link" onClick={(e) => e.preventDefault()}>
                  View All <ChevronRight size={13} />
                </a>
              </div>

              {/* Sub-tabs */}
              <div style={{ display: 'flex', gap: '0.25rem', borderBottom: '1px solid var(--border-card)', marginBottom: '1rem', paddingBottom: '0.35rem' }}>
                {announceTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveAnnounceTab(tab)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      fontSize: '0.78rem',
                      fontWeight: activeAnnounceTab === tab ? 700 : 500,
                      color: activeAnnounceTab === tab ? 'var(--color-primary-blue)' : 'var(--text-muted)',
                      borderBottom: activeAnnounceTab === tab ? '2px solid var(--color-primary-blue)' : 'none',
                      padding: '0.2rem 0.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Announcement Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {filteredAnnouncements.map((ann) => (
                  <div key={ann.id} style={{ borderBottom: '1px solid var(--border-card)', paddingBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{ann.date}</span>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          padding: '0.1rem 0.4rem',
                          borderRadius: '4px',
                          background: ann.badge === 'New' ? '#DCFCE7' : ann.badge === 'Update' ? '#DBEAFE' : '#FEF3C7',
                          color: ann.badge === 'New' ? '#15803D' : ann.badge === 'Update' ? '#1D4ED8' : '#B45309',
                        }}
                      >
                        {ann.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.35 }}>
                      {ann.title}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <a
                  href="#gazette"
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-primary-blue)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  Subscribe to Gazette Notifications <ChevronRight size={14} />
                </a>
              </div>
            </div>

            {/* Need Help? Widget */}
            <div className="side-widget-box" style={{ background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(11, 47, 107, 0.08))' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    background: 'var(--color-primary-blue)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Headphones size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: '0 0 0.25rem' }}>Need Help?</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                    Get help from AI Assistant, Helpline 1800-111-555 or your nearest CSC Kendra.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenHelp}
                style={{
                  width: '100%',
                  background: 'var(--color-primary-blue)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.65rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0, 102, 255, 0.25)',
                }}
              >
                Get Help & Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
