import React from 'react';
import { CitizenApplication } from '../../types';
import { StatusBadge } from '../ui/StatusBadge';
import { X, CheckCircle2, Download } from 'lucide-react';

interface ApplicationDetailModalProps {
  application: CitizenApplication | null;
  onClose: () => void;
}

export const ApplicationDetailModal: React.FC<ApplicationDetailModalProps> = ({
  application,
  onClose,
}) => {
  if (!application) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
                {application.serviceName}
              </h2>
              <StatusBadge status={application.status} />
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Application No: <strong style={{ color: 'var(--text-main)' }}>{application.applicationNumber}</strong> • {application.department}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '0.25rem',
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Summary Box */}
          <div
            style={{
              background: 'var(--bg-card-subtle)',
              border: '1px solid var(--border-card)',
              borderRadius: '8px',
              padding: '1rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                Submission Date
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                {application.submissionDate}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                Last Updated
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                {application.lastUpdated}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                Verification Mode
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#10B981', marginTop: '2px' }}>
                Aadhaar e-KYC
              </div>
            </div>
          </div>

          {/* Application Journey Timeline (UX4G Timeline pattern) */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, margin: '0 0 1rem' }}>
              Application Journey Timeline
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', position: 'relative', paddingLeft: '1.5rem' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '7px',
                  top: '8px',
                  bottom: '8px',
                  width: '2px',
                  background: 'var(--border-card)',
                }}
              />

              {application.timeline.map((step, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  {/* Marker Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-1.5rem',
                      top: '2px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: step.completed ? '#10B981' : step.current ? 'var(--color-primary-blue)' : '#CBD5E1',
                      border: '3px solid #fff',
                      boxShadow: '0 0 0 1px #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                    }}
                  >
                    {step.completed && <CheckCircle2 size={10} />}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: step.current ? 700 : 600, color: step.completed || step.current ? 'var(--text-main)' : 'var(--text-muted)' }}>
                      {step.title}
                    </div>
                    <span style={{ fontSize: '0.725rem', color: 'var(--text-light)', whiteSpace: 'nowrap' }}>
                      {step.date}
                    </span>
                  </div>

                  {step.remarks && (
                    <div
                      style={{
                        fontSize: '0.78rem',
                        marginTop: '0.35rem',
                        padding: '0.4rem 0.65rem',
                        borderRadius: '4px',
                        background: step.current && application.status === 'Action Required' ? '#FFFBEB' : 'var(--bg-card-subtle)',
                        border: step.current && application.status === 'Action Required' ? '1px solid #FDE68A' : '1px solid var(--border-card)',
                        color: step.current && application.status === 'Action Required' ? '#92400E' : 'var(--text-muted)',
                      }}
                    >
                      {step.remarks}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', borderTop: '1px solid var(--border-card)', paddingTop: '1rem' }}>
            <button
              onClick={() => alert(`Certificate IC-${application.applicationNumber} downloaded with digital cryptographic signature.`)}
              style={{
                background: 'var(--color-primary-blue)',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '0.55rem 1.15rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Download size={15} /> Download Signed Certificate
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'var(--bg-card)',
                color: 'var(--text-main)',
                border: '1px solid var(--border-card)',
                borderRadius: '6px',
                padding: '0.55rem 1.15rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
