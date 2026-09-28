import React from 'react';
import { ApplicationStatus } from '../../types';
import { CheckCircle2, Clock, AlertTriangle, XCircle, FileEdit, Sparkles } from 'lucide-react';

interface StatusBadgeProps {
  status: ApplicationStatus | 'Eligible';
  showIcon?: boolean;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, showIcon = true, className = '' }) => {
  switch (status) {
    case 'Approved':
      return (
        <span className={`status-badge approved ${className}`}>
          {showIcon && <CheckCircle2 size={13} />}
          Approved
        </span>
      );
    case 'In Progress':
      return (
        <span className={`status-badge inprogress ${className}`}>
          {showIcon && <Clock size={13} />}
          In Progress
        </span>
      );
    case 'Action Required':
      return (
        <span className={`status-badge actionreq ${className}`}>
          {showIcon && <AlertTriangle size={13} />}
          Action Req.
        </span>
      );
    case 'Rejected':
      return (
        <span className={`status-badge rejected ${className}`}>
          {showIcon && <XCircle size={13} />}
          Rejected
        </span>
      );
    case 'Draft':
      return (
        <span className={`status-badge draft ${className}`} style={{ background: '#F1F5F9', color: '#475569', border: '1px solid #CBD5E1' }}>
          {showIcon && <FileEdit size={13} />}
          Draft
        </span>
      );
    case 'New':
      return (
        <span className={`status-badge new ${className}`} style={{ background: '#EFF6FF', color: '#1D4ED8', border: '1px solid #BFDBFE' }}>
          {showIcon && <Sparkles size={13} />}
          New
        </span>
      );
    case 'Eligible':
      return (
        <span className={`status-badge eligible ${className}`}>
          {showIcon && <CheckCircle2 size={13} />}
          Eligible
        </span>
      );
    default:
      return <span className={`status-badge ${className}`}>{status}</span>;
  }
};
