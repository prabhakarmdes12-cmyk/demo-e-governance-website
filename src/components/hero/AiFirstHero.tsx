import React, { useState } from 'react';
import { Bot, Mic, Send, Sparkles, ChevronDown } from 'lucide-react';
import heroDesktop8 from '../../assets/hero-desktop8.png';

interface AiFirstHeroProps {
  onAskAi: (prompt: string) => void;
}

export const AiFirstHero: React.FC<AiFirstHeroProps> = ({ onAskAi }) => {
  const [prompt, setPrompt] = useState('Income certificate');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onAskAi(prompt.trim());
    }
  };

  const toggleMic = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setPrompt('Applying for income certificate for college admission...');
    }
  };

  return (
    <section
      className="hero-section"
      style={{
        padding: '3.75rem 0 3.5rem',
        backgroundImage: `linear-gradient(180deg, rgba(235, 245, 255, 0.92) 0%, rgba(240, 248, 255, 0.88) 100%), url(${heroDesktop8})`,
        color: '#102A43',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      aria-label="AI First Discovery Gateway"
    >
      <div className="portal-container" style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(0, 102, 255, 0.1)',
            border: '1px solid rgba(0, 102, 255, 0.2)',
            padding: '0.25rem 0.85rem',
            borderRadius: '9999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            marginBottom: '0.85rem',
            color: '#0066FF',
          }}
        >
          <Sparkles size={14} /> 03 — AI First Citizen Gateway
        </div>

        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            margin: '0 0 0.65rem',
            letterSpacing: '-0.025em',
            color: '#102A43 !important',
          }}
        >
          How can we help you today?
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#4B5563',
            margin: '0 auto 2rem',
            maxWidth: '720px',
            lineHeight: 1.5,
          }}
        >
          Ask in your own language. Our AI Assistant will guide you to the right service, explain requirements and help you complete it.
        </p>

        {/* Large Conversational Input Bar */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '0.75rem 1rem 0.75rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            boxShadow: '0 12px 32px rgba(0, 40, 100, 0.15)',
            border: '1px solid #E2E8F0',
            marginBottom: '1.25rem',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: '#EFF6FF',
              color: '#0066FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Bot size={24} />
          </div>

          <div style={{ flex: 1 }}>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. I need an income certificate"
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#111827',
                fontFamily: 'var(--font-body)',
              }}
              aria-label="Conversational government service query"
            />
            <div style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '2px' }}>
              Try: e.g. I need an income certificate • How to renew driving licence? • Schemes for senior citizens
            </div>
          </div>

          <button
            type="button"
            onClick={toggleMic}
            style={{
              background: isListening ? '#FEE2E2' : 'transparent',
              border: 'none',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              color: isListening ? '#DC2626' : '#6B7280',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s ease',
            }}
            title={isListening ? 'Listening...' : 'Voice Search'}
            aria-label="Voice input"
          >
            <Mic size={20} />
          </button>

          <button
            type="submit"
            style={{
              background: 'var(--color-primary-blue)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              width: '46px',
              height: '44px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(0, 102, 255, 0.3)',
            }}
            title="Ask AI"
            aria-label="Send prompt"
          >
            <Send size={18} />
          </button>
        </form>

        {/* Suggestion Chips */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {suggestionChips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => {
                setPrompt(chip);
                onAskAi(chip);
              }}
              className="search-chip"
              style={{ fontSize: '0.8125rem', padding: '0.35rem 0.95rem' }}
            >
              {chip}
            </button>
          ))}
          <button
            type="button"
            className="search-chip"
            style={{ fontSize: '0.8125rem', padding: '0.35rem 0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
          >
            More <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
