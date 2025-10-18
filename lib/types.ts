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
