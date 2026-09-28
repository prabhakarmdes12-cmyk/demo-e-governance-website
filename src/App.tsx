import React, { useState, useEffect } from 'react';
import { PortalViewMode, CitizenApplication, CitizenDocument, CitizenBenefit, PopularService } from './types';
import {
  INITIAL_APPLICATIONS,
  INITIAL_DOCUMENTS,
  INITIAL_BENEFITS,
  CITIZEN_PROFILE
} from './data/portalData';
import './styles/portal.css';

// Layout Components
import { DemoController } from './components/ui/DemoController';
import { TopUtilityBar, ContrastMode, FontSizeLevel } from './components/layout/TopUtilityBar';
import { GovernmentHeader } from './components/layout/GovernmentHeader';
import { GovernmentFooter } from './components/layout/GovernmentFooter';

// Screen Components
import { CitizenHero } from './components/hero/CitizenHero';
import { AiFirstHero } from './components/hero/AiFirstHero';
import { QuickActionsBar } from './components/services/QuickActionsBar';
import { DepartmentGrid } from './components/services/DepartmentGrid';
import { CitizenHub } from './components/citizen/CitizenHub';
import { PopularServicesSection } from './components/services/PopularServicesSection';

// Modals
import { AadhaarLoginModal } from './components/modals/AadhaarLoginModal';
import { ApplicationDetailModal } from './components/modals/ApplicationDetailModal';
import { DocumentDetailModal } from './components/modals/DocumentDetailModal';
import { DocumentUploadModal } from './components/modals/DocumentUploadModal';
import { AiAssistantModal } from './components/modals/AiAssistantModal';

import { Fingerprint, ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  // Demo presentation view mode (default to citizen-logged-in to showcase the hypothesis)
  const [viewMode, setViewMode] = useState<PortalViewMode>('citizen-logged-in');

  // Accessibility state (WCAG 2.1 AAA Compliant)
  const [fontSize, setFontSize] = useState<FontSizeLevel>('medium');
  const [contrastMode, setContrastMode] = useState<ContrastMode>('standard');
  const [spacingRelaxed, setSpacingRelaxed] = useState(false);
  const [language, setLanguage] = useState<'English' | 'हिन्दी'>('English');
  const [activeNav, setActiveNav] = useState('home');

  // Interactive data state
  const [applications, _setApplications] = useState<CitizenApplication[]>(INITIAL_APPLICATIONS);
  const [documents, setDocuments] = useState<CitizenDocument[]>(INITIAL_DOCUMENTS);
  const [benefits] = useState<CitizenBenefit[]>(INITIAL_BENEFITS);

  // Modals state
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<CitizenApplication | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<CitizenDocument | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState('');

  // Synchronize accessibility attributes with DOM root (WCAG AAA)
  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.setAttribute('data-contrast', contrastMode);
    if (contrastMode === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [contrastMode]);

  useEffect(() => {
    if (spacingRelaxed) {
      document.documentElement.setAttribute('data-spacing', 'relaxed');
    } else {
      document.documentElement.removeAttribute('data-spacing');
    }
  }, [spacingRelaxed]);

  // Auth simulation triggers
  const handleSuccessLogin = () => {
    setViewMode('citizen-logged-in');
  };

  const handleLogout = () => {
    setViewMode('citizen-guest');
  };

  const handleOpenAiWithPrompt = (prompt: string) => {
    setAiInitialPrompt(prompt);
    setIsAiModalOpen(true);
  };

  const handleAddDocument = (newDoc: CitizenDocument) => {
    setDocuments((prev) => [...prev, newDoc]);
  };

  const handleSelectService = (service: PopularService) => {
    handleOpenAiWithPrompt(`I would like to apply for ${service.title} under ${service.department}. What are the requirements?`);
  };

  const handleSelectDepartment = (deptId: string) => {
    handleOpenAiWithPrompt(`Show me available services and schemes under department: ${deptId}`);
  };

  const handleQuickAction = (actionId: string) => {
    switch (actionId) {
      case 'apply':
        handleOpenAiWithPrompt('How do I start a new government certificate application?');
        break;
      case 'track':
        if (applications.length > 0) {
          setSelectedApp(applications[0]);
        }
        break;
      case 'payment':
        alert('Redirecting to BharatKosh / National Government Payment Gateway (Treasury)');
        break;
      case 'documents':
        setIsUploadModalOpen(true);
        break;
      case 'appointment':
        alert('Opening RTO & Tehsildar Citizen Appointment Slot Booking');
        break;
      case 'grievances':
        alert('Redirecting to CPGRAMS - Centralized Public Grievance Redress and Monitoring System');
        break;
      default:
        break;
    }
  };

  return (
    <div className="portal-wrapper">
      {/* 0. Demo Controller Bar (Instant Mode Switcher) */}
      <DemoController
        currentMode={viewMode}
        onSelectMode={(mode) => setViewMode(mode)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenAi={() => handleOpenAiWithPrompt('')}
      />

      {/* 1. Official Government Utility Bar (Accessibility & National Identity) */}
      <TopUtilityBar
        fontSize={fontSize}
        onChangeFontSize={(size) => setFontSize(size)}
        contrastMode={contrastMode}
        onChangeContrastMode={(mode) => setContrastMode(mode)}
        spacingRelaxed={spacingRelaxed}
        onToggleSpacing={() => setSpacingRelaxed(!spacingRelaxed)}
        language={language}
        onChangeLanguage={(lang) => setLanguage(lang)}
      />

      {/* 2. Main Government Header (Emblem, Nav, Citizen Auth) */}
      <GovernmentHeader
        currentMode={viewMode}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
        onOpenSearch={() => handleOpenAiWithPrompt('')}
        activeNav={activeNav}
        onSelectNav={(nav) => setActiveNav(nav)}
        actionRequiredCount={CITIZEN_PROFILE.stats.actionRequired}
      />

      {/* 3. Main Content Container */}
      <main id="main-content" style={{ flex: 1 }}>
        {/* Dynamic Hero Section based on Mode */}
        {viewMode === 'ai-first' ? (
          <AiFirstHero onAskAi={handleOpenAiWithPrompt} />
        ) : (
          <CitizenHero
            isLoggedIn={viewMode === 'citizen-logged-in'}
            onOpenLogin={() => setIsLoginModalOpen(true)}
            onOpenAi={() => handleOpenAiWithPrompt('')}
            onSearch={(query) => handleOpenAiWithPrompt(query)}
            onQuickViewProfile={() => setIsLoginModalOpen(true)}
          />
        )}

        {/* Quick Actions Row */}
        <QuickActionsBar onActionClick={handleQuickAction} />

        {/* Departments & Services Grid */}
        <DepartmentGrid onSelectDepartment={handleSelectDepartment} />

        {/* Personalized Citizen Hub (Centerpiece of "02 — CITIZEN FIRST") */}
        {viewMode === 'citizen-logged-in' ? (
          <CitizenHub
            applications={applications}
            documents={documents}
            benefits={benefits}
            onViewApplication={(app) => setSelectedApp(app)}
            onViewDocument={(doc) => setSelectedDoc(doc)}
            onUploadDocument={() => setIsUploadModalOpen(true)}
            onViewBenefit={(benefit) => {
              handleOpenAiWithPrompt(`Tell me more about eligibility and application steps for ${benefit.title}`);
            }}
          />
        ) : (
          /* Unauthenticated Returning Citizen Prompt Banner (Desktop - 6) */
          <section className="portal-container" style={{ margin: '1.5rem auto' }}>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1.5px solid var(--border-card)',
                borderRadius: '12px',
                padding: '1.5rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: '#EFF6FF',
                    color: 'var(--color-primary-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Fingerprint size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, margin: '0 0 0.25rem' }}>
                    Already used a government service?
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                    Securely find and link your existing citizen profile. Instant verification via Aadhaar / Mobile.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsLoginModalOpen(true)}
                style={{
                  background: 'var(--color-primary-blue)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 6px rgba(0, 102, 255, 0.25)',
                }}
              >
                <span>Find My Profile</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </section>
        )}

        {/* Popular Services Section (Filter Tabs, Services Grid, Schemes & Announcements) */}
        <PopularServicesSection
          onSelectService={handleSelectService}
          onOpenHelp={() => handleOpenAiWithPrompt('I need help finding the right government service.')}
        />
      </main>

      {/* 4. Official Government Footer */}
      <GovernmentFooter />

      {/* Modals & Drawers */}
      <AadhaarLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccessLogin={handleSuccessLogin}
      />

      <ApplicationDetailModal
        application={selectedApp}
        onClose={() => setSelectedApp(null)}
      />

      <DocumentDetailModal
        document={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />

      <DocumentUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUploadSuccess={handleAddDocument}
      />

      <AiAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        initialPrompt={aiInitialPrompt}
      />
    </div>
  );
};

export default App;
