import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2 } from 'lucide-react';
import { CitizenDocument } from '../../types';

interface DocumentUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: (newDoc: CitizenDocument) => void;
}

export const DocumentUploadModal: React.FC<DocumentUploadModalProps> = ({
  isOpen,
  onClose,
  onUploadSuccess,
}) => {
  const [docType, setDocType] = useState('caste');
  const [docTitle, setDocTitle] = useState('Caste & Tribe Certificate');
  const [docNumber, setDocNumber] = useState('CC-2024-48201');
  const [fileSelected, setFileSelected] = useState(false);
  const [uploading, setUploading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      const newDoc: CitizenDocument = {
        id: `doc-${Date.now()}`,
        title: docTitle,
        docNumber: docNumber,
        issuedBy: 'Government of India / State Authority',
        issueDate: 'Today',
        verified: true,
        type: 'other',
        fileSize: '340 KB',
      };
      onUploadSuccess(newDoc);
      onClose();
    }, 600);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <div className="modal-header">
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 0.2rem' }}>
              Upload Document to DigiLocker
            </h2>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
              Securely store verified government documents in your citizen locker.
            </p>
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

        <form onSubmit={handleSubmit} className="modal-body">
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.35rem' }}>
              Document Category
            </label>
            <select
              value={docType}
              onChange={(e) => {
                setDocType(e.target.value);
                if (e.target.value === 'caste') setDocTitle('Caste & Tribe Certificate');
                if (e.target.value === 'domicile') setDocTitle('Residential / Domicile Certificate');
                if (e.target.value === 'disability') setDocTitle('UDID Disability Card');
                if (e.target.value === 'marksheet') setDocTitle('Class 10 / 12 CBSE Marksheet');
              }}
              style={{
                width: '100%',
                padding: '0.65rem',
                borderRadius: '6px',
                border: '1.5px solid var(--border-card)',
                background: 'var(--bg-card)',
                color: 'var(--text-main)',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              <option value="caste">Caste / Tribe Certificate</option>
              <option value="domicile">Residential / Domicile Certificate</option>
              <option value="disability">UDID Disability Card</option>
              <option value="marksheet">Class 10 / 12 Marksheet</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.35rem' }}>
              Document / Certificate Number
            </label>
            <input
              type="text"
              value={docNumber}
              onChange={(e) => setDocNumber(e.target.value)}
              placeholder="e.g. CC-2024-XXXX"
              required
              style={{
                width: '100%',
                padding: '0.65rem',
                borderRadius: '6px',
                border: '1.5px solid var(--border-card)',
                background: 'var(--bg-card)',
                color: 'var(--text-main)',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            />
          </div>

          {/* Upload Drop Area */}
          <div
            onClick={() => setFileSelected(true)}
            style={{
              border: fileSelected ? '2px solid #10B981' : '2px dashed var(--color-primary-blue)',
              background: fileSelected ? '#ECFDF5' : 'rgba(0, 102, 255, 0.04)',
              borderRadius: '8px',
              padding: '1.75rem',
              textAlign: 'center',
              cursor: 'pointer',
              marginBottom: '1.25rem',
            }}
          >
            {fileSelected ? (
              <div>
                <CheckCircle2 size={32} style={{ color: '#10B981', margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#15803D' }}>
                  document_scan_2026.pdf (340 KB) attached
                </div>
                <div style={{ fontSize: '0.75rem', color: '#15803D', marginTop: '4px' }}>
                  Ready to be cryptographically verified
                </div>
              </div>
            ) : (
              <div>
                <UploadCloud size={36} style={{ color: 'var(--color-primary-blue)', margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Click to select PDF or image file
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Supports PDF, JPG, PNG up to 5 MB
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={uploading}
            style={{
              width: '100%',
              background: 'var(--color-primary-blue)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '0.75rem',
              fontSize: '0.9375rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {uploading ? 'Verifying & Encrypting...' : 'Upload & Verify with DigiLocker →'}
          </button>
        </form>
      </div>
    </div>
  );
};
