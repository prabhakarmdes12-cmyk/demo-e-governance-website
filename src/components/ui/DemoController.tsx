import React from 'react';
import { PortalViewMode } from '../../types';
import { UserCheck, Users, Bot, KeyRound, Sparkles, LayoutGrid } from 'lucide-react';

interface DemoControllerProps {
  currentMode: PortalViewMode;
  onSelectMode: (mode: PortalViewMode) => void;
  onOpenLogin: () => void;
  onOpenAi: () => void;
}

export const DemoController: React.FC<DemoControllerProps> = ({
  currentMode,
  onSelectMode,
  onOpenLogin,
  onOpenAi,
}) => {
  return (
    <div className="demo-controller-bar">
      <div className="portal-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, color: '#60A5FA' }}>
            <Sparkles size={14} /> Case Study Demo Modes:
          </span>
          <div className="demo-tabs">
            <button
              className={`demo-tab-btn ${currentMode === 'task-first' ? 'active' : ''}`}
              onClick={() => onSelectMode('task-first')}
              title="Desktop - 2: Concept 1 Task / Service First Screen"
            >
              <LayoutGrid size={13} /> 01 — Task First
            </button>
            <button
              className={`demo-tab-btn ${currentMode === 'citizen-logged-in' ? 'active' : ''}`}
              onClick={() => onSelectMode('citizen-logged-in')}
              title="Desktop - 7: Authenticated Citizen Account for Prabhakar Kumar"
            >
              <UserCheck size={13} /> 02 — Citizen First (Logged In)
            </button>
            <button
              className={`demo-tab-btn ${currentMode === 'citizen-guest' ? 'active' : ''}`}
              onClick={() => onSelectMode('citizen-guest')}
              title="Desktop - 6: Returning Citizen / Claim Profile Prompt"
            >
              <Users size={13} /> 02 — Citizen First (Guest / Claim)
            </button>
            <button
              className={`demo-tab-btn ${currentMode === 'ai-first' ? 'active' : ''}`}
              onClick={() => onSelectMode('ai-first')}
              title="Desktop - 8: AI First Conversational Gateway"
            >
              <Bot size={13} /> 03 — AI First Screen
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onOpenLogin}
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#fff',
              fontSize: '0.725rem',
              fontWeight: 600,
              padding: '0.2rem 0.6rem',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              cursor: 'pointer',
            }}
          >
            <KeyRound size={12} /> Aadhaar Login (Desktop 10)
          </button>
          <button
            onClick={onOpenAi}
            style={{
              background: 'linear-gradient(135deg, #0066FF, #7C3AED)',
              border: 'none',
              color: '#fff',
              fontSize: '0.725rem',
              fontWeight: 600,
              padding: '0.2rem 0.6rem',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              cursor: 'pointer',
            }}
          >
            <Bot size={12} /> Ask AI Assistant
          </button>
        </div>
      </div>
    </div>
  );
};
