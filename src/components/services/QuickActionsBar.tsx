import React from 'react';
import { FileText, Search, CreditCard, DownloadCloud, Calendar, UserX } from 'lucide-react';

interface QuickActionsBarProps {
  onActionClick: (actionId: string) => void;
}

export const QuickActionsBar: React.FC<QuickActionsBarProps> = ({ onActionClick }) => {
  const actions = [
    {
      id: 'apply',
      title: 'Apply Online',
      subtitle: 'Start a new application',
      icon: <FileText size={22} style={{ color: '#0066FF' }} />,
      bg: '#EBF5FF',
      border: '#D1E9FF',
    },
    {
      id: 'track',
      title: 'Application',
      subtitle: 'Check Status',
      icon: <Search size={22} style={{ color: '#16A34A' }} />,
      bg: '#EAF7EE',
      border: '#D1F0DA',
    },
    {
      id: 'payment',
      title: 'Make Payment',
      subtitle: 'Start a new application',
      icon: <CreditCard size={22} style={{ color: '#0066FF' }} />,
      bg: '#FFF8E7',
      border: '#FFE8B6',
    },
    {
      id: 'documents',
      title: 'Documents',
      subtitle: 'Start a new application',
      icon: <DownloadCloud size={22} style={{ color: '#0066FF' }} />,
      bg: '#F2F0FF',
      border: '#DDD6FE',
    },
    {
      id: 'appointment',
      title: 'Appointment',
      subtitle: 'Visit office',
      icon: <Calendar size={22} style={{ color: '#0066FF' }} />,
      bg: '#FDF0F4',
      border: '#FBCFE8',
    },
    {
      id: 'grievances',
      title: 'Grievances',
      subtitle: 'File a complaint',
      icon: <UserX size={22} style={{ color: '#DC2626' }} />,
      bg: '#FDF0F3',
      border: '#FECDD3',
    },
  ];

  return (
    <section className="quick-actions-bar" aria-label="Quick Actions">
      <div className="portal-container">
        <div className="quick-actions-grid">
          {actions.map((action) => (
            <button
              key={action.id}
              className="quick-action-card"
              onClick={() => onActionClick(action.id)}
              style={{
                background: action.bg,
                border: `1.5px solid ${action.border}`,
              }}
            >
              <div className="action-icon-wrap">
                {action.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="action-title">{action.title}</div>
                <div className="action-sub">{action.subtitle}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
