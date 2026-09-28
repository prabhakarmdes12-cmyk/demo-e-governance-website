import React from 'react';
import type { CitizenApplication, CitizenDocument, CitizenBenefit } from '../../types';
import { StatusBadge } from '../ui/StatusBadge';
import {
  FileText,
  ChevronRight,
  UploadCloud,
  Car,
  Users
} from 'lucide-react';

import thumbAadhaar from '../../assets/thumb-aadhaar.png';
import thumbPan from '../../assets/thumb-pan.png';
import thumbRation from '../../assets/thumb-ration.png';
import thumbIncome from '../../assets/thumb-income.png';
import thumbBenefitPension from '../../assets/thumb-benefit-pension.png';
import thumbBenefitScholarship from '../../assets/thumb-benefit-scholarship.png';

interface CitizenHubProps {
  applications: CitizenApplication[];
  documents: CitizenDocument[];
  benefits: CitizenBenefit[];
  onViewApplication: (app: CitizenApplication) => void;
  onViewDocument: (doc: CitizenDocument) => void;
  onUploadDocument: () => void;
  onViewBenefit: (benefit: CitizenBenefit) => void;
}

export const CitizenHub: React.FC<CitizenHubProps> = ({
  applications,
  documents,
  benefits,
  onViewApplication,
  onViewDocument,
  onUploadDocument,
  onViewBenefit,
}) => {
  const getDocThumb = (type: string) => {
    switch (type) {
      case 'aadhaar': return thumbAadhaar;
      case 'pan': return thumbPan;
      case 'ration': return thumbRation;
      case 'income': return thumbIncome;
      default: return thumbAadhaar;
    }
  };

  const getAppCategoryIcon = (serviceName: string) => {
    if (serviceName.toLowerCase().includes('income')) {
      return (
        <div className="app-category-icon" style={{ background: '#ECFDF5', color: '#16A34A' }}>
          <FileText size={18} />
        </div>
      );
    }
    if (serviceName.toLowerCase().includes('driving')) {
      return (
        <div className="app-category-icon" style={{ background: '#EFF6FF', color: '#0066FF' }}>
          <Car size={18} />
        </div>
      );
    }
    return (
      <div className="app-category-icon" style={{ background: '#FFFBEB', color: '#D97706' }}>
        <Users size={18} />
      </div>
    );
  };

  return (
    <section className="citizen-hub-section" aria-label="Personalized Citizen Workspace">
      <div className="portal-container">
        <div className="hub-columns-grid">
          {/* Column 1: My Applications */}
          <div className="hub-card">
            <div className="hub-card-header">
              <h2 className="hub-card-title">
                My Applications
              </h2>
              <a
                href="#all-applications"
                className="view-all-link"
                onClick={(e) => e.preventDefault()}
              >
                <span>View All</span>
                <ChevronRight size={14} />
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {applications.map((app) => (
                <div key={app.id} className="app-item-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, minWidth: 0 }}>
                    {getAppCategoryIcon(app.serviceName)}
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1px' }}>
                        {app.serviceName}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Application No. <strong>{app.applicationNumber}</strong>
                      </div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-light)', marginTop: '2px' }}>
                        {app.submissionDate}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <StatusBadge status={app.status} />
                    <button
                      onClick={() => onViewApplication(app)}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        padding: '0.35rem 0.85rem',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: '#1F2937',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#0066FF';
                        e.currentTarget.style.color = '#0066FF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#D1D5DB';
                        e.currentTarget.style.color = '#1F2937';
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: My Documents */}
          <div className="hub-card">
            <div className="hub-card-header">
              <h2 className="hub-card-title">
                My Documents
              </h2>
              <a
                href="#all-documents"
                className="view-all-link"
                onClick={(e) => e.preventDefault()}
              >
                <span>View All</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Document Tiles Grid */}
            <div className="doc-tiles-grid">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="doc-tile"
                  onClick={() => onViewDocument(doc)}
                  title={`Click to view ${doc.title}`}
                >
                  <img
                    src={getDocThumb(doc.type)}
                    alt={doc.title}
                    className="doc-thumb-img"
                  />
                  <div className="doc-tile-title">{doc.title}</div>
                </div>
              ))}
            </div>

            {/* Upload Document Dropzone */}
            <div className="doc-upload-dropzone" onClick={onUploadDocument} role="button" tabIndex={0}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#EFF6FF',
                  color: '#0066FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.4rem',
                }}
              >
                <UploadCloud size={20} />
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Upload Document
              </div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                Store and access your important documents securely.
              </div>
            </div>
          </div>

          {/* Column 3: My Benefits */}
          <div className="hub-card">
            <div className="hub-card-header">
              <h2 className="hub-card-title">
                My Benefits
              </h2>
              <a
                href="#all-benefits"
                className="view-all-link"
                onClick={(e) => e.preventDefault()}
              >
                <span>View All</span>
                <ChevronRight size={14} />
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {benefits.map((benefit, idx) => (
                <div
                  key={benefit.id}
                  className="benefit-item-card"
                  onClick={() => onViewBenefit(benefit)}
                >
                  <img
                    src={idx === 0 ? thumbBenefitPension : thumbBenefitScholarship}
                    alt={benefit.title}
                    className="benefit-thumb-img"
                  />

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {benefit.title}
                      </span>
                      <StatusBadge status="Eligible" />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                      {benefit.description}
                    </div>
                  </div>

                  <ChevronRight size={16} style={{ color: '#9CA3AF', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
