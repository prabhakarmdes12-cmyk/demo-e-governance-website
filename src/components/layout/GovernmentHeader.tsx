import React, { useState } from 'react';
import emblemClean from '../../assets/emblem-clean.png';
import avatarPrabhakar from '../../assets/avatar-prabhakar.png';
import { Search, Bell, LogIn, LogOut, Menu, X, ChevronRight } from 'lucide-react';
import type { PortalViewMode } from '../../types';

interface GovernmentHeaderProps {
  currentMode: PortalViewMode;
  onOpenLogin: () => void;
  onLogout: () => void;
  onOpenSearch: () => void;
  activeNav: string;
  onSelectNav: (nav: string) => void;
  actionRequiredCount?: number;
}

export const GovernmentHeader: React.FC<GovernmentHeaderProps> = ({
  currentMode,
  onOpenLogin,
  onLogout,
  onOpenSearch,
  activeNav,
  onSelectNav,
  actionRequiredCount = 1,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = currentMode === 'citizen-logged-in';

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'departments', label: 'Departments' },
    { id: 'schemes', label: 'Schemes' },
    { id: 'updates', label: 'Updates' },
    { id: 'help', label: 'Help & Support' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header className="main-header" role="banner">
      <div className="portal-container">
        <div className="header-inner">
          {/* Official National Emblem & Brand Lockup */}
          <a href="#" className="brand-lockup" onClick={(e) => { e.preventDefault(); onSelectNav('home'); }}>
            <img
              src={emblemClean}
              alt="National Emblem of India"
              style={{ width: '38px', height: 'auto', display: 'block' }}
            />
            <div className="brand-texts">
              <span className="brand-hindi">भारत सरकार</span>
              <span className="brand-english">Government of India</span>
              <span className="brand-tagline">Seva · Suraksha · Samriddhi</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-item-link ${activeNav === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectNav(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Right Actions */}
          <div className="header-right-actions">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-main)',
                cursor: 'pointer',
                padding: '0.45rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Search Services"
              aria-label="Search"
            >
              <Search size={19} />
            </button>

            {/* Notification Bell */}
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-main)',
                cursor: 'pointer',
                padding: '0.45rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
              title={`${actionRequiredCount} Action required`}
              aria-label="Notifications"
            >
              <Bell size={19} />
              {actionRequiredCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#DC2626',
                    boxShadow: '0 0 0 2px #fff',
                  }}
                />
              )}
            </button>

            {/* Citizen Auth Status */}
            {isLoggedIn ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'var(--bg-card-subtle)',
                    border: '1px solid var(--border-card)',
                    padding: '0.2rem 0.65rem 0.2rem 0.25rem',
                    borderRadius: '9999px',
                  }}
                >
                  <img
                    src={avatarPrabhakar}
                    alt="Prabhakar Kumar"
                    style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    Prabhakar Kumar
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="btn-header-logout"
                  title="Logout"
                >
                  <LogOut size={13} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="btn-header-login"
              >
                <LogIn size={15} />
                <span>Login / Register</span>
              </button>
            )}

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-main)',
                cursor: 'pointer',
                padding: '0.4rem',
                display: 'none',
              }}
              className="mobile-menu-btn"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '68px',
            background: 'var(--bg-card)',
            zIndex: 99,
            padding: '1.5rem',
            borderTop: '1px solid var(--border-card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectNav(item.id);
                setMobileMenuOpen(false);
              }}
              style={{
                background: activeNav === item.id ? 'var(--bg-card-subtle)' : 'transparent',
                border: 'none',
                textAlign: 'left',
                padding: '0.75rem 1rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: activeNav === item.id ? 'var(--color-primary-blue)' : 'var(--text-main)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} style={{ opacity: 0.5 }} />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
