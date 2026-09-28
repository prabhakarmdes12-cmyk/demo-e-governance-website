import React from 'react';
import { CitizenDocument } from '../../types';
import { X, ShieldCheck, Download, CheckCircle2, QrCode } from 'lucide-react';

interface DocumentDetailModalProps {
  document: CitizenDocument | null;
  onClose: () => void;
}

export const DocumentDetailModal: React.FC<DocumentDetailModalProps> = ({ document, onClose }) => {
  if (!document) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#ECFDF5',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>
                {document.title}
              </h2>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                DigiLocker Verified Document
              </div>
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

        <div className="modal-body">
          {/* Card Simulation */}
          <div
            style={{
              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
              color: '#FFFFFF',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
              border: '1px solid rgba(255,255,255,0.15)',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {document.issuedBy}
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '0.02em', marginTop: '2px' }}>
                  {document.title}
                </div>
              </div>
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '1px solid #10B981',
                  color: '#34D399',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  fontSize: '0.725rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                <CheckCircle2 size={12} /> Verified
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Document Identifier</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.08em', color: '#60A5FA' }}>
                  {document.docNumber}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#CBD5E1', marginTop: '0.4rem' }}>
                  Holder: <strong>Prabhakar Kumar</strong> • Issue Date: {document.issueDate}
                </div>
              </div>

              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: '#FFFFFF',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0F172A',
                }}
                title="Cryptographic QR code verification"
              >
                <QrCode size={44} />
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
            This digital record has been cryptographically signed by the issuing authority and complies with Section 9A of the Information Technology Act, 2000. It is legally equivalent to the original physical document.
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              onClick={() => alert(`Downloading verified copy of ${document.title}`)}
              style={{
                background: 'var(--color-primary-blue)',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '0.55rem 1rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Download size={15} /> Download PDF
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'var(--bg-card)',
                color: 'var(--text-main)',
                border: '1px solid var(--border-card)',
                borderRadius: '6px',
                padding: '0.55rem 1rem',
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
