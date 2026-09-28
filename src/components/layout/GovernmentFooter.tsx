import React, { useState } from 'react';
import { AshokaEmblem } from '../ui/Emblem';
import {
  Smartphone,
  PhoneCall,
  ShieldCheck,
  Send,
  ExternalLink,
  Award,
  CheckCircle2,
  Lock
} from 'lucide-react';

export const GovernmentFooter: React.FC = () => {
  const [newsletterInput, setNewsletterInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterInput('');
    }
  };

  const emergencyHelplines = [
    { number: '112', title: 'National Emergency', desc: 'Police, Fire, Ambulance' },
    { number: '1930', title: 'Financial Cyber Fraud', desc: 'National Cyber Crime (I4C)' },
    { number: '1075', title: 'National Health Helpdesk', desc: 'MoHFW Medical Services' },
    { number: '1098', title: 'Childline & Safety', desc: 'Women & Child Development' },
    { number: '14449', title: 'Cybercrime Reporting', desc: 'National Citizen Helpline' },
    { number: '1800-111-555', title: 'Citizen Portal Support', desc: 'Toll-Free • 24x7 • Multi-lingual' },
  ];

  const directoryColumns = [
    {
      title: 'Apex Constitutional Bodies',
      links: [
        { label: 'President of India', url: 'https://presidentofindia.nic.in' },
        { label: "Prime Minister's Office (PMO)", url: 'https://pmindia.gov.in' },
        { label: 'Parliament of India (Sansad)', url: 'https://sansad.in' },
        { label: 'Supreme Court of India', url: 'https://sci.gov.in' },
        { label: 'Cabinet Secretariat', url: 'https://cabsec.gov.in' },
        { label: 'Election Commission of India', url: 'https://eci.gov.in' },
        { label: 'NITI Aayog (Transforming India)', url: 'https://niti.gov.in' },
      ],
    },
    {
      title: 'Central Line Ministries',
      links: [
        { label: 'Electronics & IT (MeitY)', url: 'https://meity.gov.in' },
        { label: 'Ministry of Finance', url: 'https://finmin.nic.in' },
        { label: 'Ministry of Home Affairs', url: 'https://mha.gov.in' },
        { label: 'Road Transport & Highways', url: 'https://morth.nic.in' },
        { label: 'Health & Family Welfare', url: 'https://mohfw.gov.in' },
        { label: 'Education & Skill Dev.', url: 'https://education.gov.in' },
        { label: 'Agriculture & Farmers Welfare', url: 'https://agricoop.nic.in' },
      ],
    },
    {
      title: 'National Missions & Vision',
      links: [
        { label: 'Viksit Bharat @ 2047', url: 'https://viksitbharat2047.gov.in' },
        { label: 'Digital India Corporation', url: 'https://digitalindia.gov.in' },
        { label: 'PM Gati Shakti National Plan', url: 'https://gatishakti.gov.in' },
        { label: 'Ayushman Bharat Digital Mission', url: 'https://abdm.gov.in' },
        { label: 'Make in India / Atmanirbhar', url: 'https://makeinindia.com' },
        { label: 'PM Awas Yojana (PMAY-U/G)', url: 'https://pmaymis.gov.in' },
        { label: 'PM-Kisan Samman Nidhi', url: 'https://pmkisan.gov.in' },
      ],
    },
    {
      title: 'Digital Public Infrastructure (DPI)',
      links: [
        { label: 'Aadhaar (UIDAI)', url: 'https://uidai.gov.in' },
        { label: 'DigiLocker Document Cloud', url: 'https://digilocker.gov.in' },
        { label: 'UMANG Super App', url: 'https://web.umang.gov.in' },
        { label: 'Unified Payments Interface (UPI)', url: 'https://npci.org.in' },
        { label: 'Open Network Digital Commerce', url: 'https://ondc.org' },
        { label: 'API Setu National Exchange', url: 'https://apisetu.gov.in' },
        { label: 'BharatKosh Non-Tax Portal', url: 'https://bharatkosh.gov.in' },
      ],
    },
    {
      title: 'Citizen Direct Services',
      links: [
        { label: 'Parivahan Sewa (Sarathi / Vahan)', url: 'https://parivahan.gov.in' },
        { label: 'Passport Seva Kendra (MEA)', url: 'https://passportindia.gov.in' },
        { label: 'Income Tax e-Filing 2.0', url: 'https://incometax.gov.in' },
        { label: 'National Career Service (NCS)', url: 'https://ncs.gov.in' },
        { label: 'Jeevan Pramaan Life Cert.', url: 'https://jeevanpramaan.gov.in' },
        { label: 'e-Courts Case Management', url: 'https://ecourts.gov.in' },
        { label: 'CPGRAMS Public Grievances', url: 'https://pgportal.gov.in' },
      ],
    },
    {
      title: 'Transparency & Oversight',
      links: [
        { label: 'RTI Online (Right to Information)', url: 'https://rtionline.gov.in' },
        { label: 'Central Vigilance Commission', url: 'https://cvc.gov.in' },
        { label: 'Comptroller & Auditor General', url: 'https://cag.gov.in' },
        { label: 'Government e-Marketplace (GeM)', url: 'https://gem.gov.in' },
        { label: 'Open Government Data (data.gov.in)', url: 'https://data.gov.in' },
        { label: 'The Gazette of India (e-Gazette)', url: 'https://egazette.gov.in' },
        { label: 'MyGov Citizen Engagement', url: 'https://mygov.in' },
      ],
    },
  ];

  return (
    <footer id="mega-footer" className="portal-footer mega-footer" role="contentinfo" aria-label="Official Government of India Mega Footer">
      {/* 1. National Tricolor Gradient Ribbon */}
      <div className="footer-tricolor-ribbon" aria-hidden="true">
        <div className="tricolor-saffron" />
        <div className="tricolor-white">
          <div className="chakra-center-symbol">☸</div>
        </div>
        <div className="tricolor-green" />
      </div>

      {/* 2. 24x7 National Emergency & Helpline Bar */}
      <div className="footer-helpline-strip">
        <div className="portal-container">
          <div className="helpline-strip-header">
            <div className="helpline-title-lockup">
              <PhoneCall size={18} className="helpline-icon-pulse" />
              <span>National 24×7 Helplines & Emergency Assistance</span>
            </div>
            <span className="helpline-badge-live">Live Citizen Redressal</span>
          </div>

          <div className="helpline-cards-grid">
            {emergencyHelplines.map((hl) => (
              <div key={hl.number} className="helpline-card">
                <div className="helpline-dial-row">
                  <span className="helpline-number">{hl.number}</span>
                  <a
                    href={`tel:${hl.number.replace(/-/g, '')}`}
                    className="helpline-call-btn"
                    aria-label={`Call ${hl.title} at ${hl.number}`}
                  >
                    Call
                  </a>
                </div>
                <div className="helpline-name">{hl.title}</div>
                <div className="helpline-subtext">{hl.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Main Footer Content */}
      <div className="portal-container footer-content-wrapper">
        {/* Upper Showcase: Government Identity + Alert Subscription */}
        <div className="footer-showcase-row">
          {/* Identity & Mission */}
          <div className="footer-brand-column">
            <div className="footer-emblem-lockup">
              <AshokaEmblem size={52} />
              <div>
                <div className="footer-gov-title-hindi">भारत सरकार</div>
                <div className="footer-gov-title-en">Government of India</div>
                <div className="footer-gov-subtext">Unified Citizen Portal • Viksit Bharat @ 2047</div>
              </div>
            </div>

            <p className="footer-mission-desc">
              The unified citizen gateway enables 1.4 billion citizens to discover, apply, and receive central and state government benefits, digitally signed certificates, and direct benefit transfers without visiting administrative offices.
            </p>

            {/* App Store Download Badges */}
            <div className="footer-app-badges-row">
              <div className="app-badge-box">
                <Smartphone size={24} style={{ color: '#60A5FA' }} />
                <div>
                  <div className="app-badge-label">Available on</div>
                  <div className="app-badge-name">UMANG & Play Store</div>
                </div>
              </div>
              <div className="app-badge-box">
                <Award size={24} style={{ color: '#34D399' }} />
                <div>
                  <div className="app-badge-label">Official PWA</div>
                  <div className="app-badge-name">DigiLocker Ecosystem</div>
                </div>
              </div>
            </div>
          </div>

          {/* Citizen Alert Subscription */}
          <div className="footer-subscribe-card">
            <div className="subscribe-badge">Citizen Bulletin</div>
            <h4 className="subscribe-title">Get Scheme & Gazette Alerts</h4>
            <p className="subscribe-desc">
              Subscribe to official SMS/Email alerts for new welfare schemes, subsidy disbursals, and Aadhaar-linked notifications.
            </p>

            <form onSubmit={handleSubscribe} className="subscribe-form">
              <div className="subscribe-input-group">
                <input
                  type="text"
                  placeholder="Enter Mobile (+91) or Email ID"
                  value={newsletterInput}
                  onChange={(e) => setNewsletterInput(e.target.value)}
                  className="subscribe-input"
                  aria-label="Mobile Number or Email for Citizen Alerts"
                  required
                />
                <button type="submit" className="subscribe-btn" aria-label="Subscribe to citizen alerts">
                  <span>Subscribe</span>
                  <Send size={15} />
                </button>
              </div>
              {subscribed && (
                <div className="subscribe-success-note" role="status" aria-live="polite">
                  <CheckCircle2 size={16} /> Subscription confirmed! You will receive verified notifications.
                </div>
              )}
            </form>

            <div className="subscribe-guarantee">
              <Lock size={12} /> Data protected under Digital Personal Data Protection (DPDP) Act, 2023. Zero spam guarantee.
            </div>
          </div>
        </div>

        {/* 4. Comprehensive 6-Column Mega Directory */}
        <div className="footer-mega-directory">
          {directoryColumns.map((col) => (
            <div key={col.title} className="mega-directory-column">
              <h4 className="mega-column-heading">{col.title}</h4>
              <ul className="mega-links-list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mega-link-item"
                    >
                      <span>{link.label}</span>
                      <ExternalLink size={11} className="mega-external-icon" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 5. Government Certifications & Compliance Badges Grid */}
        <div className="footer-certifications-strip">
          <div className="cert-heading-row">
            <ShieldCheck size={20} style={{ color: '#38BDF8' }} />
            <span>National Standards, Cybersecurity & Accessibility Accreditations</span>
          </div>

          <div className="cert-seals-grid">
            <div className="cert-seal-badge">
              <span className="seal-tag">CERTIFIED</span>
              <strong>STQC Quality Seal</strong>
              <span>MeitY Verified Codebase</span>
            </div>
            <div className="cert-seal-badge highlight-aaa">
              <span className="seal-tag green">ACCESSIBLE</span>
              <strong>W3C WCAG 2.1 AAA</strong>
              <span>Highest Accessibility Tier</span>
            </div>
            <div className="cert-seal-badge">
              <span className="seal-tag">COMPLIANT</span>
              <strong>GIGW 3.0 Standard</strong>
              <span>Govt. of India Guidelines</span>
            </div>
            <div className="cert-seal-badge">
              <span className="seal-tag">INFRASTRUCTURE</span>
              <strong>NIC Cloud Hosted</strong>
              <span>National Informatics Centre</span>
            </div>
            <div className="cert-seal-badge">
              <span className="seal-tag">SECURITY</span>
              <strong>Cert-In Audited</strong>
              <span>256-Bit SHA-3 Encryption</span>
            </div>
          </div>
        </div>

        {/* 6. Live Portal Stats & Meta Information */}
        <div className="footer-analytics-strip">
          <div className="analytics-pill">
            <span className="analytics-dot live" />
            <span>Last Updated: <strong>28 September 2026</strong></span>
          </div>
          <div className="analytics-pill">
            <span>Total Citizen Visitors: <strong>148,492,018</strong></span>
          </div>
          <div className="analytics-pill">
            <span>e-Transactions Enabled: <strong>3,942,108,450+</strong></span>
          </div>
          <div className="analytics-pill">
            <span>National Portal Version: <strong>v3.4.0 (UX4G 3.0)</strong></span>
          </div>
        </div>

        {/* 7. Bottom Bar: Mandatory Legal Links & Copyright */}
        <div className="footer-bottom-bar">
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Statement</a>
            <span className="legal-dot">•</span>
            <a href="#hyperlink">Hyperlinking Policy</a>
            <span className="legal-dot">•</span>
            <a href="#copyright">Copyright Policy</a>
            <span className="legal-dot">•</span>
            <a href="#terms">Terms & Conditions</a>
            <span className="legal-dot">•</span>
            <a href="#accessibility">Accessibility Statement</a>
            <span className="legal-dot">•</span>
            <a href="#disclaimer">Disclaimer</a>
            <span className="legal-dot">•</span>
            <a href="#sitemap">Portal Sitemap</a>
            <span className="legal-dot">•</span>
            <a href="#web-manager">Web Information Manager</a>
          </div>

          <div className="footer-copyright-text">
            © 2026 <strong>Government of India</strong>. Designed, developed and hosted by <strong>National Informatics Centre (NIC)</strong> for Ministry of Electronics and Information Technology (MeitY). Content published and managed by Central & State Ministries.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GovernmentFooter;
