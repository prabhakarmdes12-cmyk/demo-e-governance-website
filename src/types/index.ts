export type PortalViewMode = 'citizen-logged-in' | 'citizen-guest' | 'ai-first';

export type ApplicationStatus = 'Approved' | 'In Progress' | 'Action Required' | 'Rejected' | 'Draft' | 'New';

export interface CitizenApplication {
  id: string;
  serviceName: string;
  applicationNumber: string;
  submissionDate: string;
  status: ApplicationStatus;
  department: string;
  lastUpdated: string;
  stageIndex: number;
  timeline: {
    title: string;
    date: string;
    completed: boolean;
    current?: boolean;
    remarks?: string;
  }[];
  documentsRequired?: string[];
}

export interface CitizenDocument {
  id: string;
  title: string;
  docNumber: string;
  issuedBy: string;
  issueDate: string;
  verified: boolean;
  type: 'aadhaar' | 'pan' | 'ration' | 'income' | 'other';
  fileSize: string;
}

export interface CitizenBenefit {
  id: string;
  title: string;
  department: string;
  eligibilityStatus: 'Eligible' | 'Applied' | 'Disbursed';
  description: string;
  amountOrBenefit: string;
  validUntil?: string;
}

export interface DepartmentInfo {
  id: string;
  title: string;
  serviceCount: number;
  subtitle: string;
  image: string;
  tintColor: string;
}

export interface PopularService {
  id: string;
  title: string;
  actionText: string;
  category: 'Citizen' | 'Health' | 'Education' | 'Transport' | 'Social Welfare';
  icon: string;
  badge?: string;
  department: string;
}

export interface AnnouncementItem {
  id: string;
  date: string;
  title: string;
  description: string;
  badge: 'New' | 'Update' | 'Notice';
  category: 'Latest' | 'Schemes' | 'Events' | 'Deadlines';
  link?: string;
}
