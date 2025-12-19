export interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Report {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  reportLink: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export type OpportunityType = 'nomination' | 'volunteer';

export interface NominationOpportunity {
  id: number;
  title: string;
  description: string;
  deadline: string; // ISO date string or formatted date string
  type: OpportunityType;
  formLink: string; // Google form link
}