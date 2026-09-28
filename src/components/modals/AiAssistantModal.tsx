import React, { useState } from 'react';
import { X, Bot, Send, User, Sparkles, ArrowRight } from 'lucide-react';
import { CITIZEN_PROFILE } from '../../data/portalData';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
  onNavigateToService?: (serviceName: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  suggestions?: string[];
  actionLink?: { label: string; action: string };
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  initialPrompt,
  onNavigateToService,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: `Namaste ${CITIZEN_PROFILE.name}! I am your Viksit Bharat AI Assistant. Because your Aadhaar is verified, I can guide you through services, auto-fill your documents, and track pending government actions. How may I assist you today?`,
      suggestions: [
        'How to apply for an Income Certificate?',
        'Why does my Pension Application require action?',
        'What benefits am I eligible for?',
        'How to renew my Driving Licence?',
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState(initialPrompt || '');
  const msgCounter = React.useRef(2);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${msgCounter.current++}`,
      sender: 'user',
      text: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Generate intelligent AI response based on citizen context
    setTimeout(() => {
      let aiReply: ChatMessage;

      const lower = text.toLowerCase();
      if (lower.includes('income')) {
        aiReply = {
          id: `ai-${msgCounter.current++}`,
          sender: 'ai',
          text: `Your Income Certificate (App No: IC2024883921) was approved on 14 Dec 2025 by the Tehsildar and is already digitally signed in your "My Documents" locker. If you need a fresh certificate for FY 2026-27, we can pre-fill 90% of the form using your existing Aadhaar and Ration card.`,
          actionLink: { label: 'View Income Certificate in Locker', action: 'view-income' },
          suggestions: ['Download Certificate PDF', 'Apply for New Certificate'],
        };
      } else if (lower.includes('pension')) {
        aiReply = {
          id: `ai-${msgCounter.current++}`,
          sender: 'ai',
          text: `Your Pension Application (PS2024771249) has an "Action Required" status. The annual digital Jeevan Pramaan (Life Certificate) bio-authentication is pending verification. You can complete this instantly with face authentication on the Jeevan Pramaan app or visit your nearest CSC.`,
          actionLink: { label: 'Complete Life Certificate Authentication', action: 'verify-pension' },
          suggestions: ['Find Nearest CSC Kendra', 'Check Monthly DBT Disbursal'],
        };
      } else if (lower.includes('driving') || lower.includes('licence')) {
        aiReply = {
          id: `ai-${msgCounter.current++}`,
          sender: 'ai',
          text: `Your Driving Licence application (DL2024091834) is currently "In Progress". Your Learner Licence and Biometrics are verified. Your practical driving test is scheduled at RTO Track 3, Ranchi on 18 Dec 2024, 10:00 AM.`,
          actionLink: { label: 'Download Driving Test Slot Slip', action: 'test-slip' },
          suggestions: ['Reschedule Test Date', 'Practice Mock Test Online'],
        };
      } else if (lower.includes('benefit') || lower.includes('eligible')) {
        aiReply = {
          id: `ai-${msgCounter.current++}`,
          sender: 'ai',
          text: `Based on your profile, you are currently eligible for 2 major schemes:\n1. Senior Citizen Pension Scheme (₹2,500/mo DBT)\n2. Post-Matric Merit Scholarship (up to ₹48,000/yr)\nWould you like me to submit an instant one-click application?`,
          actionLink: { label: 'Apply for Eligible Benefits', action: 'apply-benefits' },
          suggestions: ['View Scholarship Guidelines', 'Check Jan Dhan Account Link'],
        };
      } else {
        aiReply = {
          id: `ai-${msgCounter.current++}`,
          sender: 'ai',
          text: `I understand you need assistance with "${text}". Under the unified citizen portal, all applications from central and state ministries can be initiated without visiting government offices. What specific step can I help you start?`,
          suggestions: ['Check Required Documents', 'Track Existing Application', 'Book Office Appointment'],
        };
      }

      setMessages((prev) => [...prev, aiReply]);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px', height: '80vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div className="modal-header" style={{ background: 'linear-gradient(135deg, #0B2F6B, #0066FF)', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Bot size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                Viksit Bharat AI Assistant <Sparkles size={14} style={{ color: '#FDE047' }} />
              </div>
              <div style={{ fontSize: '0.725rem', color: '#BFDBFE' }}>
                Citizen-centric conversational intelligence • Hindi & English supported
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '0.25rem',
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-card-subtle)' }}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                gap: '0.75rem',
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
              }}
            >
              {msg.sender === 'ai' && (
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-primary-blue)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Bot size={16} />
                </div>
              )}

              <div>
                <div
                  style={{
                    background: msg.sender === 'user' ? 'var(--color-primary-blue)' : 'var(--bg-card)',
                    color: msg.sender === 'user' ? '#FFFFFF' : 'var(--text-main)',
                    borderRadius: '10px',
                    padding: '0.875rem 1rem',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    boxShadow: 'var(--shadow-sm)',
                    border: msg.sender === 'ai' ? '1px solid var(--border-card)' : 'none',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {msg.text}

                  {msg.actionLink && (
                    <div style={{ marginTop: '0.75rem' }}>
                      <button
                        onClick={() => {
                          if (onNavigateToService) onNavigateToService(msg.actionLink!.label);
                          onClose();
                        }}
                        style={{
                          background: 'var(--color-primary-blue)',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '0.4rem 0.8rem',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        {msg.actionLink.label} <ArrowRight size={13} />
                      </button>
                    </div>
                  )}
                </div>

                {msg.suggestions && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem' }}>
                    {msg.suggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(sug)}
                        style={{
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border-card)',
                          color: 'var(--color-primary-blue)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          fontSize: '0.725rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary-blue)')}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-card)')}
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#10B981',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <User size={16} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div style={{ padding: '0.875rem 1.25rem', background: 'var(--bg-card)', borderTop: '1px solid var(--border-card)' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{ display: 'flex', gap: '0.5rem' }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about government schemes, documents, or status..."
              style={{
                flex: 1,
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                border: '1.5px solid var(--border-card)',
                outline: 'none',
                fontSize: '0.875rem',
                background: 'var(--bg-card-subtle)',
                color: 'var(--text-main)',
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--color-primary-blue)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '0 1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
