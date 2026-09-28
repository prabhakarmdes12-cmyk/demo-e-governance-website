import {
  CitizenApplication,
  CitizenDocument,
  CitizenBenefit,
  DepartmentInfo,
  PopularService,
  AnnouncementItem
} from '../types';

export const CITIZEN_PROFILE = {
  name: 'Prabhakar Kumar',
  greeting: 'Good morning',
  role: 'Citizen (Individual)',
  isAadhaarVerified: true,
  aadhaarNumberMasked: 'XXXX-XXXX-9876',
  mobileMasked: '+91 98765-XXXXX',
  emailMasked: 'prabhakar****@gmail.com',
  state: 'Jharkhand',
  district: 'Ranchi',
  stats: {
    applications: 3,
    documents: 5,
    benefits: 2,
    actionRequired: 1,
  },
};

export const INITIAL_APPLICATIONS: CitizenApplication[] = [
  {
    id: 'app-1',
    serviceName: 'Income Certificate',
    applicationNumber: 'IC2024883921',
    submissionDate: '12 Dec 2025',
    status: 'Approved',
    department: 'Revenue & Land Reforms Department',
    lastUpdated: '14 Dec 2025, 04:30 PM',
    stageIndex: 4,
    timeline: [
      { title: 'Application Submitted Online', date: '12 Dec 2025, 10:15 AM', completed: true },
      { title: 'Aadhaar e-KYC & Document Verification', date: '12 Dec 2025, 11:40 AM', completed: true },
      { title: 'Circle Officer Field Verification', date: '13 Dec 2025, 02:20 PM', completed: true },
      { title: 'Digital Signature & Approval by Tehsildar', date: '14 Dec 2025, 03:00 PM', completed: true },
      { title: 'Certificate Issued & Synced to DigiLocker', date: '14 Dec 2025, 04:30 PM', completed: true, current: true },
    ],
    documentsRequired: ['Aadhaar Card', 'Ration Card', 'Salary Slip / Self-Declaration'],
  },
  {
    id: 'app-2',
    serviceName: 'Driving Licence',
    applicationNumber: 'DL2024091834',
    submissionDate: '08 Dec 2024',
    status: 'In Progress',
    department: 'Ministry of Road Transport and Highways (Sarathi)',
    lastUpdated: '10 Dec 2024, 11:15 AM',
    stageIndex: 2,
    timeline: [
      { title: 'LL Learner Licence Validated', date: '08 Dec 2024, 09:30 AM', completed: true },
      { title: 'Biometrics & Photo Captured at RTO', date: '10 Dec 2024, 11:15 AM', completed: true },
      { title: 'Driving Practical Test Scheduled', date: '18 Dec 2024, 10:00 AM', completed: false, current: true, remarks: 'Track slot: RTO Track 3, Ranchi' },
      { title: 'RTO Superintendent Approval', date: 'Pending test clearance', completed: false },
      { title: 'Smart Card Dispatch via Speed Post', date: 'Expected 5 days after approval', completed: false },
    ],
    documentsRequired: ['Learner Licence', 'Age Proof', 'Address Proof'],
  },
  {
    id: 'app-3',
    serviceName: 'Pension Application',
    applicationNumber: 'PS2024771249',
    submissionDate: '02 Dec 2024',
    status: 'Action Required',
    department: 'Department of Social Welfare & Empowerment',
    lastUpdated: '06 Dec 2024, 02:45 PM',
    stageIndex: 1,
    timeline: [
      { title: 'Online Application Received', date: '02 Dec 2024, 03:00 PM', completed: true },
      { title: 'Bank Account & e-KYC Verification', date: '06 Dec 2024, 02:45 PM', completed: false, current: true, remarks: 'Annual Jeevan Pramaan (Life Certificate) bio-authentication pending.' },
      { title: 'District Social Welfare Officer Review', date: 'Pending citizen action', completed: false },
      { title: 'Treasury Disbursal Setup (DBT)', date: 'Pending review', completed: false },
    ],
    documentsRequired: ['Aadhaar Card', 'Age Proof (60+)', 'Jeevan Pramaan Digital Life Certificate'],
  },
];

export const INITIAL_DOCUMENTS: CitizenDocument[] = [
  {
    id: 'doc-aadhaar',
    title: 'Aadhaar Card',
    docNumber: 'XXXX-XXXX-9876',
    issuedBy: 'UIDAI, Govt. of India',
    issueDate: '15 Aug 2017',
    verified: true,
    type: 'aadhaar',
    fileSize: '420 KB',
  },
  {
    id: 'doc-pan',
    title: 'PAN Card',
    docNumber: 'ABCDE1234F',
    issuedBy: 'Income Tax Department',
    issueDate: '10 Jan 2019',
    verified: true,
    type: 'pan',
    fileSize: '310 KB',
  },
  {
    id: 'doc-ration',
    title: 'Ration Card',
    docNumber: 'RC-2021-998822',
    issuedBy: 'Dept of Food & Public Distribution',
    issueDate: '05 Mar 2021',
    verified: true,
    type: 'ration',
    fileSize: '512 KB',
  },
  {
    id: 'doc-income',
    title: 'Income Cert.',
    docNumber: 'IC-2024-883921',
    issuedBy: 'State Revenue Department',
    issueDate: '14 Dec 2025',
    verified: true,
    type: 'income',
    fileSize: '280 KB',
  },
];

export const INITIAL_BENEFITS: CitizenBenefit[] = [
  {
    id: 'ben-1',
    title: 'Senior Citizen Pension',
    department: 'Department of Social Welfare',
    eligibilityStatus: 'Eligible',
    description: 'Monthly direct benefit transfer (DBT) financial assistance for elderly family members.',
    amountOrBenefit: '₹2,500 / month',
    validUntil: 'Lifetime with annual life certificate',
  },
  {
    id: 'ben-2',
    title: 'Scholarship Scheme',
    department: 'Ministry of Education / UGC',
    eligibilityStatus: 'Eligible',
    description: 'Post-matric & higher education merit-cum-means scholarship grant for ward.',
    amountOrBenefit: 'Up to ₹48,000 / year',
    validUntil: 'Academic Year 2026-27',
  },
];

export const QUICK_ACTIONS = [
  { id: 'apply', title: 'Apply Online', subtitle: 'Start a new application', icon: 'FileText', tint: '#EFF6FF', accent: '#0066FF' },
  { id: 'track', title: 'Application', subtitle: 'Check Status', icon: 'Search', tint: '#ECFDF5', accent: '#16A34A' },
  { id: 'payment', title: 'Make Payment', subtitle: 'Start a new application', icon: 'CreditCard', tint: '#FEF3C7', accent: '#D97706' },
  { id: 'documents', title: 'Documents', subtitle: 'Start a new application', icon: 'DownloadCloud', tint: '#F5F3FF', accent: '#7C3AED' },
  { id: 'appointment', title: 'Appointment', subtitle: 'Visit office', icon: 'Calendar', tint: '#FFF1F2', accent: '#E11D48' },
  { id: 'grievances', title: 'Grievances', subtitle: 'File a complaint', icon: 'UserX', tint: '#FEF2F2', accent: '#DC2626' },
];

export const DEPARTMENTS: DepartmentInfo[] = [
  {
    id: 'dept-rev',
    title: 'Revenue & Certificates',
    serviceCount: 12,
    subtitle: 'Income, Caste, Domicile...',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=80',
    tintColor: '#ECFDF5',
  },
  {
    id: 'dept-trans',
    title: 'Transport',
    serviceCount: 8,
    subtitle: 'Driving Licence, Vehicle...',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&auto=format&fit=crop&q=80',
    tintColor: '#EFF6FF',
  },
  {
    id: 'dept-health',
    title: 'Health',
    serviceCount: 15,
    subtitle: 'Health Schemes, Records...',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80',
    tintColor: '#FDF2F8',
  },
  {
    id: 'dept-edu',
    title: 'Education',
    serviceCount: 9,
    subtitle: 'Scholarship, Admissions...',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80',
    tintColor: '#F5F3FF',
  },
  {
    id: 'dept-soc',
    title: 'Pension & Social Welfare',
    serviceCount: 7,
    subtitle: 'Senior Citizen, Disability...',
    image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=500&auto=format&fit=crop&q=80',
    tintColor: '#FFF7ED',
  },
];

export const POPULAR_SERVICES: PopularService[] = [
  { id: 'srv-1', title: 'Income Certificate', actionText: 'Apply online', category: 'Citizen', icon: 'FileText', department: 'Revenue Dept' },
  { id: 'srv-2', title: 'Driving Licence', actionText: 'Apply / Renew', category: 'Transport', icon: 'Truck', department: 'Transport Dept' },
  { id: 'srv-3', title: 'Pension Application', actionText: 'Apply / Renew', category: 'Social Welfare', icon: 'Users', department: 'Social Welfare' },
  { id: 'srv-4', title: 'Birth Certificate', actionText: 'Apply online', category: 'Citizen', icon: 'FilePlus', department: 'Municipal Administration' },
  { id: 'srv-5', title: 'Domicile Certificate', actionText: 'Apply online', category: 'Citizen', icon: 'Home', department: 'Revenue Dept' },
  { id: 'srv-6', title: 'Ration Card', actionText: 'Apply online', category: 'Social Welfare', icon: 'ShoppingBag', department: 'Food & Civil Supplies' },
  { id: 'srv-7', title: 'Scholarship Application', actionText: 'Apply online', category: 'Education', icon: 'GraduationCap', department: 'Education Dept' },
  { id: 'srv-8', title: 'Health Appointment', actionText: 'Apply online', category: 'Health', icon: 'HeartPulse', department: 'Health Mission' },
  { id: 'srv-9', title: 'Caste certificate', actionText: 'Apply online', category: 'Citizen', icon: 'ShieldCheck', department: 'Revenue Dept' },
];

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'ann-1',
    date: '20 Sep 2026',
    title: 'Online application for Income Certificate now available with instant e-Sign',
    description: 'Citizens can now generate instant verified Income Certificates linked via Aadhaar OTP within 24 hours.',
    badge: 'New',
    category: 'Latest',
  },
  {
    id: 'ann-2',
    date: '18 Sep 2026',
    title: 'Vehicle Registration process simplified across states (One Nation One RTO)',
    description: 'Interstate vehicle NOC and ownership transfers can now be completed without physical RTO presence.',
    badge: 'Update',
    category: 'Latest',
  },
  {
    id: 'ann-3',
    date: '15 Sep 2026',
    title: 'Scholarship application deadline extended for 2026-27 batch',
    description: 'Central and state post-matric scholarship portal window extended till 31st October 2026.',
    badge: 'Notice',
    category: 'Deadlines',
  },
];

export const PROMO_BANNERS = [
  {
    id: 'promo-1',
    badge: 'Government of India',
    title: 'PM Kisan Samman Nidhi',
    subtitle: 'Direct income support to farmers for a stronger and self-reliant India. ₹6,000 yearly in 3 installments.',
    cta: 'Know More →',
    color: '#047857',
    bg: 'linear-gradient(135deg, #065F46 0%, #047857 100%)',
  },
  {
    id: 'promo-2',
    badge: 'Ministry of Education',
    title: 'Scholarship Applications Now Open',
    subtitle: 'Apply for central and state government scholarships for the academic year 2026–27.',
    cta: 'Apply Now →',
    color: '#1D4ED8',
    bg: 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%)',
  },
  {
    id: 'promo-3',
    badge: 'Social Welfare',
    title: 'Senior Citizen Pension Scheme',
    subtitle: 'Financial support for a secure, independent and dignified life. Direct DBT into your Jan Dhan account.',
    cta: 'Apply Now →',
    color: '#B45309',
    bg: 'linear-gradient(135deg, #92400E 0%, #B45309 100%)',
  },
];
