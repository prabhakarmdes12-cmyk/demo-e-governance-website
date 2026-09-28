import React from 'react';
import { IndianFlag } from '../ui/Emblem';
import { Moon, Sun, Globe, Eye, Volume2, AlignJustify } from 'lucide-react';

export type ContrastMode = 'standard' | 'high-aaa' | 'dark';
export type FontSizeLevel = 'small' | 'medium' | 'large' | 'xlarge';

interface TopUtilityBarProps {
  fontSize: FontSizeLevel;
  onChangeFontSize: (size: FontSizeLevel) => void;
  contrastMode: ContrastMode;
  onChangeContrastMode: (mode: ContrastMode) => void;
  spacingRelaxed: boolean;
  onToggleSpacing: () => void;
  language: 'English' | 'हिन्दी';
  onChangeLanguage: (lang: 'English' | 'हिन्दी') => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({
  fontSize,
  onChangeFontSize,
  contrastMode,
  onChangeContrastMode,
  spacingRelaxed,
  onToggleSpacing,
  language,
  onChangeLanguage,
}) => {
  const handleAnnounceAccessibility = () => {
    const announcement = `Viksit Bharat Citizen Portal. Screen reader mode is active. Current font size: ${fontSize}. Contrast mode: ${contrastMode}. Use Tab to navigate through landmarks and interactive services.`;
    const speech = new SpeechSynthesisUtterance(announcement);
    speech.lang = language === 'हिन्दी' ? 'hi-IN' : 'en-IN';
    speech.rate = 1.0;
    window.speechSynthesis.speak(speech);
  };

  return (
    <aside className="top-utility-bar" aria-label="Official Government Accessibility and Utility Bar" role="region">
      {/* WCAG AAA Skip Links */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <a href="#portal-search" className="skip-link">
        Skip to navigation search
      </a>
      <a href="#mega-footer" className="skip-link">
        Skip to helplines and footer
      </a>

      <div className="portal-container">
        <div className="top-utility-inner">
          <div className="top-gov-identity">
            <IndianFlag width={22} height={15} />
            <span className="gov-identity-text">भारत सरकार | Government of India</span>
            <span className="gov-wcag-badge" title="Compliant with W3C WCAG 2.1 AAA & GIGW 3.0">
              WCAG AAA
            </span>
          </div>

          <div className="top-utility-actions">
            {/* Screen Reader Voice Announcement Button */}
            <button
              onClick={handleAnnounceAccessibility}
              className="utility-icon-btn"
              title="Listen to portal overview (Screen Reader Audio)"
              aria-label="Listen to portal accessibility overview"
            >
              <Volume2 size={13} />
              <span className="utility-label-sm">Screen Reader</span>
            </button>

            {/* Relaxed Line & Letter Spacing for Dyslexia */}
            <button
              onClick={onToggleSpacing}
              className={`utility-icon-btn ${spacingRelaxed ? 'active' : ''}`}
              title="Toggle Enhanced Text Spacing for reading comfort"
              aria-label="Toggle Enhanced Text Spacing"
              aria-pressed={spacingRelaxed}
            >
              <AlignJustify size={13} />
              <span className="utility-label-sm">{spacingRelaxed ? 'Standard Spacing' : 'Relaxed Spacing'}</span>
            </button>

            {/* Font scaling controls (A- A A+ A++) */}
            <div className="font-resize-group" role="group" aria-label="Text size adjustments">
              <button
                className={`font-btn ${fontSize === 'small' ? 'active' : ''}`}
                onClick={() => onChangeFontSize('small')}
                aria-label="Decrease text size (A- 88%)"
                title="Decrease font size"
              >
                A-
              </button>
              <button
                className={`font-btn ${fontSize === 'medium' ? 'active' : ''}`}
                onClick={() => onChangeFontSize('medium')}
                aria-label="Normal text size (A 100%)"
                title="Default font size"
              >
                A
              </button>
              <button
                className={`font-btn ${fontSize === 'large' ? 'active' : ''}`}
                onClick={() => onChangeFontSize('large')}
                aria-label="Increase text size (A+ 116%)"
                title="Large font size"
              >
                A+
              </button>
              <button
                className={`font-btn ${fontSize === 'xlarge' ? 'active' : ''}`}
                onClick={() => onChangeFontSize('xlarge')}
                aria-label="Extra large text size (A++ 130%)"
                title="Extra large font size"
              >
                A++
              </button>
            </div>

            {/* 3-Way Contrast Switcher (Standard / High Contrast AAA / Dark) */}
            <div className="contrast-switcher-group" role="group" aria-label="Display contrast selection">
              <button
                onClick={() => onChangeContrastMode('standard')}
                className={`contrast-btn ${contrastMode === 'standard' ? 'active' : ''}`}
                title="Standard UX4G Theme"
                aria-label="Standard visual theme"
              >
                Standard
              </button>
              <button
                onClick={() => onChangeContrastMode(contrastMode === 'high-aaa' ? 'standard' : 'high-aaa')}
                className={`contrast-btn high-contrast-tag ${contrastMode === 'high-aaa' ? 'active' : ''}`}
                title="High Contrast WCAG AAA (Yellow on Black)"
                aria-label="High Contrast AAA Mode (Yellow on Black)"
              >
                <Eye size={12} />
                <span>AAA High Contrast</span>
              </button>
              <button
                onClick={() => onChangeContrastMode(contrastMode === 'dark' ? 'standard' : 'dark')}
                className={`contrast-btn ${contrastMode === 'dark' ? 'active' : ''}`}
                title="Dark Theme"
                aria-label="Toggle Dark theme"
              >
                {contrastMode === 'dark' ? <Sun size={12} style={{ color: '#F59E0B' }} /> : <Moon size={12} />}
                <span>Dark</span>
              </button>
            </div>

            {/* Language Selector */}
            <div className="language-selector-wrap">
              <Globe size={13} style={{ opacity: 0.8 }} />
              <select
                value={language}
                onChange={(e) => onChangeLanguage(e.target.value as 'English' | 'हिन्दी')}
                className="language-select"
                aria-label="Select Official Language"
              >
                <option value="English">English</option>
                <option value="हिन्दी">हिन्दी (Hindi)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TopUtilityBar;
