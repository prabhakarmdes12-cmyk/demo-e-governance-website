import React, { useState } from 'react';
import { X, ShieldCheck, Smartphone, Mail, FileText, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

interface AadhaarLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessLogin: () => void;
}

export const AadhaarLoginModal: React.FC<AadhaarLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccessLogin,
}) => {
  const [activeTab, setActiveTab] = useState<'aadhaar' | 'mobile' | 'other'>('aadhaar');
  const [aadhaarInput, setAadhaarInput] = useState('9876 5432 1098');
  const [mobileInput, setMobileInput] = useState('9876543210');
  const [agreed, setAgreed] = useState(true);
  const [otpStep, setOtpStep] = useState(false);
  const [otpDigits, setOtpDigits] = useState(['5', '8', '2', '4', '1', '9']);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to Terms of Use & Privacy Policy');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpStep(true);
    }, 600);
  };

  const handleVerifyOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccessLogin();
      onClose();
    }, 600);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 0.2rem' }}>
              Sign in to Your Account
            </h2>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
              Access your government services, applications and benefits securely.
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

        {/* Modal Body */}
        <div className="modal-body">
          {/* Method Tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid var(--border-card)', marginBottom: '1.5rem' }}>
            <button
              onClick={() => { setActiveTab('aadhaar'); setOtpStep(false); }}
              style={{
                background: 'transparent',
                border: 'none',
                padding: '0.65rem',
                fontSize: '0.84rem',
                fontWeight: activeTab === 'aadhaar' ? 700 : 500,
                color: activeTab === 'aadhaar' ? 'var(--color-primary-blue)' : 'var(--text-muted)',
                borderBottom: activeTab === 'aadhaar' ? '2.5px solid var(--color-primary-blue)' : 'none',
                cursor: 'pointer',
              }}
            >
              Aadhaar
            </button>
            <button
              onClick={() => { setActiveTab('mobile'); setOtpStep(false); }}
              style={{
                background: 'transparent',
                border: 'none',
                padding: '0.65rem',
                fontSize: '0.84rem',
                fontWeight: activeTab === 'mobile' ? 700 : 500,
                color: activeTab === 'mobile' ? 'var(--color-primary-blue)' : 'var(--text-muted)',
                borderBottom: activeTab === 'mobile' ? '2.5px solid var(--color-primary-blue)' : 'none',
                cursor: 'pointer',
              }}
            >
              Mobile Number
            </button>
            <button
              onClick={() => { setActiveTab('other'); setOtpStep(false); }}
              style={{
                background: 'transparent',
                border: 'none',
                padding: '0.65rem',
                fontSize: '0.84rem',
                fontWeight: activeTab === 'other' ? 700 : 500,
                color: activeTab === 'other' ? 'var(--color-primary-blue)' : 'var(--text-muted)',
                borderBottom: activeTab === 'other' ? '2.5px solid var(--color-primary-blue)' : 'none',
                cursor: 'pointer',
              }}
            >
              Other Options
            </button>
          </div>

          {!otpStep ? (
            /* Step 1: Input Identification */
            <form onSubmit={handleSendOtp}>
              {activeTab === 'aadhaar' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: '#FEF3C7',
                        color: '#D97706',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 0.5rem',
                      }}
                    >
                      <ShieldCheck size={32} />
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 800 }}>Sign in with Aadhaar</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Enter your 12-digit Aadhaar number to continue
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Aadhaar Number
                    </label>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        border: '1.5px solid var(--border-card)',
                        borderRadius: '6px',
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-card)',
                      }}
                    >
                      <Lock size={16} style={{ color: 'var(--text-muted)' }} />
                      <input
                        type="text"
                        value={aadhaarInput}
                        onChange={(e) => setAadhaarInput(e.target.value)}
                        placeholder="XXXX XXXX XXXX"
                        maxLength={14}
                        style={{
                          width: '100%',
                          border: 'none',
                          outline: 'none',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          color: 'var(--text-main)',
                          background: 'transparent',
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'mobile' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: '#EFF6FF',
                        color: '#2563EB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 0.5rem',
                      }}
                    >
                      <Smartphone size={32} />
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 800 }}>Sign in with Mobile</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Enter your Aadhaar-linked 10-digit mobile number
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Mobile Number
                    </label>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        border: '1.5px solid var(--border-card)',
                        borderRadius: '6px',
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-card)',
                      }}
                    >
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-muted)' }}>+91</span>
                      <input
                        type="tel"
                        value={mobileInput}
                        onChange={(e) => setMobileInput(e.target.value)}
                        maxLength={10}
                        style={{
                          width: '100%',
                          border: 'none',
                          outline: 'none',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: 'var(--text-main)',
                          background: 'transparent',
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'other' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <button
                    type="button"
                    onClick={() => { setActiveTab('mobile'); }}
                    style={{
                      background: 'var(--bg-card-subtle)',
                      border: '1px solid var(--border-card)',
                      borderRadius: '8px',
                      padding: '0.875rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Smartphone size={18} style={{ color: 'var(--color-primary-blue)' }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Sign in with Mobile Number</span>
                    </div>
                    <ArrowRight size={16} />
                  </button>

                  <button
                    type="button"
                    style={{
                      background: 'var(--bg-card-subtle)',
                      border: '1px solid var(--border-card)',
                      borderRadius: '8px',
                      padding: '0.875rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Mail size={18} style={{ color: '#059669' }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Sign in with Email ID / MeriPehchaan</span>
                    </div>
                    <ArrowRight size={16} />
                  </button>

                  <button
                    type="button"
                    style={{
                      background: 'var(--bg-card-subtle)',
                      border: '1px solid var(--border-card)',
                      borderRadius: '8px',
                      padding: '0.875rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <FileText size={18} style={{ color: '#D97706' }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Sign in with PAN / Voter ID / Passport</span>
                    </div>
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}

              {/* Consent Checkbox */}
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  style={{ marginTop: '2px', cursor: 'pointer' }}
                />
                <span>
                  I agree to the <a href="#terms" style={{ color: 'var(--color-primary-blue)' }}>Terms of Use</a> and acknowledge the <a href="#privacy" style={{ color: 'var(--color-primary-blue)' }}>Privacy Policy</a> for secure government identity verification.
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 6px rgba(0, 102, 255, 0.25)',
                }}
              >
                {loading ? 'Sending OTP via UIDAI...' : 'Continue →'}
              </button>
            </form>
          ) : (
            /* Step 2: OTP Verification */
            <div>
              <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#DCFCE7',
                    color: '#15803D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.5rem',
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800 }}>Enter 6-Digit OTP</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  A one-time password has been sent to your registered mobile ending in <strong>...3210</strong>
                </div>
              </div>

              {/* OTP Digits */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const newDigits = [...otpDigits];
                      newDigits[index] = e.target.value;
                      setOtpDigits(newDigits);
                    }}
                    style={{
                      width: '42px',
                      height: '50px',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      textAlign: 'center',
                      borderRadius: '8px',
                      border: '1.5px solid var(--color-primary-blue)',
                      background: 'var(--bg-card)',
                      color: 'var(--text-main)',
                      outline: 'none',
                    }}
                  />
                ))}
              </div>

              <div style={{ fontSize: '0.75rem', textAlign: 'center', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Simulating pre-verified citizen profile: <strong>Prabhakar Kumar (Aadhaar Verified)</strong>
              </div>

              <button
                onClick={handleVerifyOtp}
                disabled={loading}
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                {loading ? 'Authenticating Profile...' : 'Verify OTP & Enter Account →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
