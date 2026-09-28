import React, { useState } from 'react';
import {
  Bot,
  Mic,
  Send,
  Sparkles,
  ChevronDown,
  Search,
  FileText,
  Clock,
  Landmark,
  ArrowRight,
  CheckCircle2,
  Car,
  Award,
  Users,
  GraduationCap,
  ShoppingBag,
  HeartPulse,
  User,
  Megaphone,
  Headphones,
  ChevronRight
} from 'lucide-react';
import heroScenicClean from '../../assets/hero-scenic-clean.jpg';

interface AiFirstHeroProps {
  onAskAi: (prompt: string) => void;
  onOpenLogin: () => void;
}

interface IntentData {
  title: string;
  department: string;
  processingDays: string;
  onlineMode: string;
  documents: string[];
  description: string;
}

const INTENT_DATABASE: Record<string, IntentData> = {
  'Income certificate': {
    title: 'Income certificate',
    department: 'Revenue Department',
    processingDays: '7–15 working days',
    onlineMode: 'Apply online / at CSC / at Tehsil Office',
    documents: ['Aadhaar Card', 'Address Proof', 'Photograph', 'Proof of Income (as applicable)'],
    description: 'This is provided by the Revenue Department. Here are the steps and requirements.',
  },
  'Driving licence': {
    title: 'Driving licence',
    department: 'Transport Department (Parivahan)',
    processingDays: '15–30 working days',
    onlineMode: 'Apply online on Sarathi / RTO Track Slot',
    documents: ['Learner Licence', 'Age & Address Proof', 'Form 1A Medical Cert', 'Passport Photograph'],
    description: 'Issued by the Regional Transport Office. Online slot booking and biometric test required.',
  },
  'Scholarship': {
    title: 'Scholarship',
    department: 'Ministry of Education & Social Justice',
    processingDays: '20–30 working days',
    onlineMode: 'National Scholarship Portal (NSP)',
    documents: ['Academic Marksheet', 'Income Certificate', 'Aadhaar Card', 'Bank Account Passbook'],
    description: 'Central and state pre/post-matric scholarship schemes for eligible meritorious students.',
  },
  'Pension status': {
    title: 'Pension status',
    department: 'Social Welfare & Pension Department',
    processingDays: 'Monthly DBT Disbursal',
    onlineMode: 'Digital Life Certificate (Jeevan Pramaan)',
    documents: ['Pension Payment Order (PPO)', 'Jeevan Pramaan Face Auth', 'Aadhaar Linked Bank Account'],
    description: 'Check monthly pension disbursement status, life certificate validation and DBT credits.',
  },
  'Ration card': {
    title: 'Ration card',
    department: 'Food & Civil Supplies Department',
    processingDays: '15–20 working days',
    onlineMode: 'NFSA Portal / State Food Portal',
    documents: ['Aadhaar Cards of all Family Members', 'Electricity/Water Bill', 'Income Certificate', 'Family Photograph'],
    description: 'New ration card application, member addition, and One Nation One Ration Card portability.',
  },
  'Birth certificate': {
    title: 'Birth certificate',
    department: 'Municipal Administration & Health',
    processingDays: '7–10 working days',
    onlineMode: 'Civil Registration System (CRS)',
    documents: ['Hospital Discharge Birth Slip', 'Parents Aadhaar Cards', 'Marriage Certificate Proof'],
    description: 'Registration and digital issuance of Birth Certificate under the Registration of Births & Deaths Act.',
  },
  'Senior citizen benefits': {
    title: 'Senior citizen benefits',
    department: 'Social Justice & Empowerment',
    processingDays: 'Instant Verification',
    onlineMode: 'Apply online / District Social Welfare Kendra',
    documents: ['Age Proof (60+ years)', 'Aadhaar Card', 'Jan Dhan / Bank Details', 'Domicile Proof'],
    description: 'Concessions, monthly pensions, healthcare cards (Ayushman Vay Vandana) for senior citizens.',
  },
};

export const AiFirstHero: React.FC<AiFirstHeroProps> = ({ onAskAi, onOpenLogin }) => {
  const [activeIntent, setActiveIntent] = useState<string>('Income certificate');
  const [inputText, setInputText] = useState('Income certificate');
  const [isListening, setIsListening] = useState(false);

  const suggestionChips = [
    'Income certificate',
    'Driving licence',
    'Scholarship',
    'Pension status',
    'Ration card',
    'Birth certificate',
    'Senior citizen benefits',
  ];

  const handleSelectChip = (chip: string) => {
    setActiveIntent(chip);
    setInputText(chip);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      // Find matching intent or default
      const matched = Object.keys(INTENT_DATABASE).find(k =>
        k.toLowerCase().includes(inputText.trim().toLowerCase()) ||
        inputText.trim().toLowerCase().includes(k.toLowerCase())
      );
      if (matched) {
        setActiveIntent(matched);
      } else {
        onAskAi(inputText.trim());
      }
    }
  };

  const toggleMic = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setInputText('I need an income certificate for college scholarship');
      setActiveIntent('Income certificate');
    }
  };

  const currentIntentData = INTENT_DATABASE[activeIntent] || INTENT_DATABASE['Income certificate'];

  return (
    <div className="ai-first-page-layout">
      {/* 1. Hero / AI Assistant Header with Clean Scenic India Gate Backdrop */}
      <section
        className="ai-first-hero-section"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(235, 245, 255, 0.88) 0%, rgba(240, 248, 255, 0.94) 100%), url(${heroScenicClean})`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
        aria-label="Conversational AI Assistant Discovery"
      >
        <div className="portal-container" style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto' }}>
          <h1 className="ai-first-heading">
            How can we help you today?
          </h1>
          <p className="ai-first-subtext">
            Ask in your own language. Our AI Assistant will guide you to the right service, explain requirements and help you complete it.
          </p>

          {/* Conversational Search Box with Friendly Robot Avatar */}
          <form onSubmit={handleSearchSubmit} className="ai-conversational-search-box">
            {/* Robot Avatar Icon */}
            <div className="ai-bot-avatar-circle" aria-hidden="true">
              <Bot size={26} />
            </div>

            <div style={{ flex: 1 }}>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question here..."
                className="ai-conversational-input"
                aria-label="Ask AI Assistant a question"
              />
              <div className="ai-search-subline">
                e.g. I need an income certificate • How to renew driving licence? • Schemes for senior citizens
              </div>
            </div>

            {/* Microphone Button */}
            <button
              type="button"
              onClick={toggleMic}
              className={`ai-mic-btn ${isListening ? 'listening' : ''}`}
              title="Voice search in your language"
              aria-label="Voice input toggle"
            >
              <Mic size={18} />
            </button>

            {/* Send Button */}
            <button
              type="submit"
              className="ai-send-btn"
              title="Submit Query"
              aria-label="Submit search query"
            >
              <Send size={16} />
            </button>
          </form>

          {/* Suggested Intent Chips (Figma 4) */}
          <div className="ai-intent-chips-row" aria-label="Suggested Intents">
            {suggestionChips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleSelectChip(chip)}
                className={`ai-intent-chip ${activeIntent === chip ? 'active' : ''}`}
              >
                {chip}
              </button>
            ))}
            <button
              type="button"
              className="ai-intent-chip more-chip"
              onClick={() => onAskAi('Show all categories and services')}
            >
              <span>More</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive AI Result Panel (Figma 5) */}
      <section className="portal-container" style={{ margin: '-1.5rem auto 2.5rem', position: 'relative', zIndex: 10 }}>
        <div className="ai-result-panel-card">
          {/* Top Bar: AI Understands and Helps You + 4 Steps */}
          <div className="ai-workflow-top-bar">
            <div className="ai-workflow-title">
              <Sparkles size={16} style={{ color: '#0066FF' }} />
              <strong>AI understands and helps you</strong>
            </div>

            <div className="ai-steps-indicator">
              <div className="ai-step-item">
                <Search size={14} />
                <span>Understands your intent</span>
              </div>
              <span className="step-arrow">›</span>
              <div className="ai-step-item">
                <FileText size={14} />
                <span>Finds the right service</span>
              </div>
              <span className="step-arrow">›</span>
              <div className="ai-step-item">
                <Award size={14} />
                <span>Shows requirements & steps</span>
              </div>
              <span className="step-arrow">›</span>
              <div className="ai-step-item active">
                <CheckCircle2 size={14} />
                <span>Helps you complete</span>
              </div>
            </div>

            <button
              onClick={() => onAskAi('How does the AI assistant process government queries?')}
              className="ai-how-it-works-link"
            >
              <span>How it works?</span>
              <ChevronRight size={13} />
            </button>
          </div>

          {/* Result Content Card */}
          <div className="ai-result-body-grid">
            {/* Left: Query Context */}
            <div className="ai-result-query-col">
              <div className="ai-result-sparkle-badge">
                <Sparkles size={18} style={{ color: '#0066FF' }} />
              </div>
              <div>
                <h3 className="ai-result-title">
                  Showing results for <strong>"{currentIntentData.title}"</strong>
                </h3>
                <p className="ai-result-desc">
                  {currentIntentData.description}
                </p>
              </div>
            </div>

            {/* Middle 1: Key Information */}
            <div className="ai-result-info-col">
              <h4 className="ai-col-heading">Key Information</h4>
              <div className="ai-info-item">
                <Landmark size={15} style={{ color: '#0066FF' }} />
                <div>
                  <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>Provided by</span>
                  <div style={{ fontWeight: 700, fontSize: '0.84rem' }}>{currentIntentData.department}</div>
                </div>
              </div>

              <div className="ai-info-item">
                <FileText size={15} style={{ color: '#0066FF' }} />
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-main)' }}>
                  {currentIntentData.onlineMode}
                </div>
              </div>

              <div className="ai-info-item">
                <Clock size={15} style={{ color: '#0066FF' }} />
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-main)' }}>
                  Usually processed in <strong>{currentIntentData.processingDays}</strong>
                </div>
              </div>

              <button
                onClick={() => onAskAi(`Show full detailed instructions for ${currentIntentData.title}`)}
                className="ai-text-action-link"
              >
                <span>View detailed information</span>
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Middle 2: Required Documents */}
            <div className="ai-result-docs-col">
              <h4 className="ai-col-heading">Required Documents</h4>
              <ul className="ai-required-docs-list">
                {currentIntentData.documents.map((doc, idx) => (
                  <li key={idx} className="ai-doc-item">
                    <FileText size={14} style={{ color: '#64748B', flexShrink: 0 }} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onAskAi(`What are all eligibility criteria and document rules for ${currentIntentData.title}?`)}
                className="ai-text-action-link"
              >
                <span>View all requirements</span>
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Right: Action Buttons Stack */}
            <div className="ai-result-actions-col">
              <button
                onClick={() => onAskAi(`I want to Apply Now for ${currentIntentData.title}`)}
                className="ai-action-btn primary"
              >
                Apply Now
              </button>
              <button
                onClick={() => onAskAi(`Check my eligibility for ${currentIntentData.title}`)}
                className="ai-action-btn outline"
              >
                Check Eligibility
              </button>
              <button
                onClick={() => onAskAi(`Track status for ${currentIntentData.title}`)}
                className="ai-action-btn outline"
              >
                Track Application
              </button>
              <button
                onClick={() => onAskAi(`Find nearest office or CSC Kendra for ${currentIntentData.title}`)}
                className="ai-action-btn outline"
              >
                Find Nearest Office
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Popular Services Row (Figma 6) */}
      <section className="portal-container" style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
            Popular Services
          </h2>
          <a
            href="#all-services"
            onClick={(e) => { e.preventDefault(); onAskAi('Show all services catalog'); }}
            style={{ color: 'var(--color-primary-blue)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}
          >
            View All Services →
          </a>
        </div>

        <div className="ai-popular-services-row">
          <div className="ai-popular-card pastel-blue" onClick={() => handleSelectChip('Income certificate')}>
            <FileText size={20} style={{ color: '#0066FF' }} />
            <span className="card-lbl">Income Certificate</span>
          </div>

          <div className="ai-popular-card pastel-green" onClick={() => handleSelectChip('Driving licence')}>
            <Car size={20} style={{ color: '#16A34A' }} />
            <span className="card-lbl">Driving Licence</span>
          </div>

          <div className="ai-popular-card pastel-amber" onClick={() => handleSelectChip('Birth certificate')}>
            <FileText size={20} style={{ color: '#D97706' }} />
            <span className="card-lbl">Birth Certificate</span>
          </div>

          <div className="ai-popular-card pastel-purple" onClick={() => handleSelectChip('Pension status')}>
            <Users size={20} style={{ color: '#7C3AED' }} />
            <span className="card-lbl">Pension Services</span>
          </div>

          <div className="ai-popular-card pastel-indigo" onClick={() => handleSelectChip('Scholarship')}>
            <GraduationCap size={20} style={{ color: '#4F46E5' }} />
            <span className="card-lbl">Scholarship Application</span>
          </div>

          <div className="ai-popular-card pastel-cyan" onClick={() => handleSelectChip('Ration card')}>
            <ShoppingBag size={20} style={{ color: '#0891B2' }} />
            <span className="card-lbl">Ration Card</span>
          </div>

          <div className="ai-popular-card pastel-rose" onClick={() => handleSelectChip('Senior citizen benefits')}>
            <HeartPulse size={20} style={{ color: '#E11D48' }} />
            <span className="card-lbl">Health Scheme</span>
          </div>

          <div className="ai-popular-card pastel-emerald" onClick={() => handleSelectChip('Senior citizen benefits')}>
            <Users size={20} style={{ color: '#059669' }} />
            <span className="card-lbl">Senior Citizen Benefits</span>
          </div>

          <button
            onClick={() => onAskAi('Show all available citizen services')}
            className="ai-popular-arrow-btn"
            title="Browse all services"
            aria-label="Next services"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* 4. Three Bottom Utility Cards (Figma 7, 8, 9) */}
      <section className="portal-container" style={{ marginBottom: '3.5rem' }}>
        <div className="ai-bottom-cards-grid">
          {/* Card 7: Find & Claim Your Profile */}
          <div className="ai-utility-feature-card" onClick={onOpenLogin} role="button" tabIndex={0}>
            <div className="ai-feature-icon-circle blue">
              <User size={22} />
            </div>
            <div className="ai-feature-content">
              <h3 className="ai-feature-title">Find & Claim Your Profile</h3>
              <p className="ai-feature-desc">
                Use Aadhaar or other ID to find your existing government records.
              </p>
            </div>
            <ChevronRight size={18} className="ai-feature-arrow" />
          </div>

          {/* Card 8: Schemes & Announcements */}
          <div className="ai-utility-feature-card" onClick={() => onAskAi('Show latest government schemes and announcements')} role="button" tabIndex={0}>
            <div className="ai-feature-icon-circle amber">
              <Megaphone size={22} />
            </div>
            <div className="ai-feature-content">
              <h3 className="ai-feature-title">Schemes & Announcements</h3>
              <ul className="ai-feature-bullets">
                <li>New scholarship applications open</li>
                <li>Vehicle registration simplified</li>
                <li>New health centres in your district</li>
              </ul>
            </div>
            <ChevronRight size={18} className="ai-feature-arrow" />
          </div>

          {/* Card 9: Need Help or have a Grievance? */}
          <div className="ai-utility-feature-card" onClick={() => onAskAi('I need help or want to file a grievance')} role="button" tabIndex={0}>
            <div className="ai-feature-icon-circle indigo">
              <Headphones size={22} />
            </div>
            <div className="ai-feature-content">
              <h3 className="ai-feature-title">Need Help or have a Grievance?</h3>
              <p className="ai-feature-desc">
                Get help from AI Assistant, Helpline or CSC. Track your grievance status.
              </p>
            </div>
            <ChevronRight size={18} className="ai-feature-arrow" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiFirstHero;
