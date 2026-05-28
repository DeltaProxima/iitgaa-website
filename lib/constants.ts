import { Event, Report, TeamMember, GalleryImage, NominationOpportunity } from './types';

export const events: Event[] = [
  {
    id: 1,
    title: "Bangalore Alumni Meetup 2025",
    description: "Join us for a day of nostalgia, networking, and fun in Bangalore.",
    imageUrl: "/assets/images/events/blr-meetup-image-1.jpeg",
    link: "https://alumnx.com/events/iitg-bengaluru-meetup-2025"
  },
  {
    id: 2,
    title: "IITG Alumni Group Insurance Survey ",
    description: "Participate in our survey to help us design a group insurance plan for alumni.",
    imageUrl: "/assets/images/events/insurance_survey.jpg",
    link: "https://forms.gle/ZE1aFti2x82vvw2W6"
  },
];

export const reports: Report[] = [
  {
    id: 1,
    title: "Pune Alumni Meetup 2025 Highlights",
    description: "A look back at the memorable moments from Pune Chapter's Meetup",
    imageUrl: "/assets/images/gallery/pune-meetup-1.jpeg",
    reportLink: "https://drive.google.com/file/d/1_exM8mGs7LVajggEbDdgIoaOJ2OONvih/view?usp=sharing"
  },
  // {
  //   id: 2,
  //   title: "Delhi Alumni Meetup 2025 Highlights",
  //   description: "A look back at the memorable moments from Delhi Chapter's Meetup",
  //   imageUrl: "/assets/images/gallery/delhi-meetup-2.jpg",
  //   reportLink: "#"
  // }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Vamsi Krishna Chalamalla",
    role: "President",
    imageUrl: "/assets/images/members/vamsi_chalamalla.jpg"
  },
  {
    id: 2,
    name: "Rashmi Dutta Baruah",
    role: "Vice President",
    imageUrl: "/assets/images/members/rashmi_baruah.jpg"
  },
  {
    id: 3,
    name: "Akshay Jajoo",
    role: "Secretary",
    imageUrl: "/assets/images/members/akshay_jajoo.jpeg"
  },
  {
    id: 4,
    name: "Sunil Shankhala",
    role: "Treasurer",
    imageUrl: "/assets/images/members/sunil_shankhala.jpg"
  },
  {
    id: 5,
    name: "Aakhil Shaik",
    role: "EC Member",
    imageUrl: "/assets/images/members/aakhil_shaik.jpg"
  },
  {
    id: 6,
    name: "Vighnesh Deshpande",
    role: "EC Member",
    imageUrl: "/assets/images/members/vighnesh_deshpande.jpg"
  },
  {
    id: 7,
    name: "Dhriti Mahanta",
    role: "EC Member",
    imageUrl: "/assets/images/members/dhriti_mahanta.jpg"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/assets/images/gallery/blr-meetup-image-1.jpeg",
    alt: "Gallery image 1"
  },
  {
    id: 2,
    src: "/assets/images/gallery/delhi-meetup-1.JPG",
    alt: "Gallery image 2"
  },
  {
    id: 3,
    src: "/assets/images/gallery/blr-meetup-image-2.jpeg",
    alt: "Gallery image 3"
  },
  {
    id: 4,
    src: "/assets/images/gallery/pune-meetup-1.jpeg",
    alt: "Gallery image 4"
  },
  {
    id: 5,
    src: "/assets/images/gallery/delhi-meetup-2.JPG",
    alt: "Gallery image 5"
  },
  {
    id: 6,
    src: "/assets/images/gallery/delhi-meetup-3.jpeg",
    alt: "Gallery image 6"
  },
  {
    id: 7,
    src: "/assets/images/gallery/blr-meetup-image-3.jpeg",
    alt: "Gallery image 7"
  },
  {
    id: 8,
    src: "/assets/images/gallery/pune-meetup-2.jpeg",
    alt: "Gallery image 8"
  },
  {
    id: 9,
    src: "/assets/images/gallery/delhi-meetup-4.jpeg",
    alt: "Gallery image 9"
  },
  
];

export const iitgaa_logoUrl = "/assets/images/iitgaa_logo.png"

export const iitg_LogoUrl = "/assets/images/iitg_logo.png"

// Single Google form link for all nominations and volunteer applications
export const APPLICATION_FORM_LINK = "https://forms.gle/DCEMSNR7Mm96LELB6";

export const nominations: NominationOpportunity[] = [
 
  {
    id: 1,
    title: "Bangalore Chapter Head, IITGAA ",
    description: "We are seeking nominations for Bangalore Chapter Head to help lead and shape the future of IITGAA Bangalore Chapter.",
    deadline: "2026-06-14",
    type: "nomination",
    formLink: APPLICATION_FORM_LINK
  },
   {
    id: 2,
    title: "Bay Area, USA Chapter Head, IITGAA ",
    description: "We are seeking nominations for Bay Area Chapter Head to help lead and shape the future of IITGAA Bay Area Chapter.",
    deadline: "2026-06-14",
    type: "nomination",
    formLink: APPLICATION_FORM_LINK
  },
  {
    id: 3,
    title: "DMV Area, USA Chapter Head, IITGAA ",
    description: "We are seeking nominations for DMV Chapter Head to help lead and shape the future of IITGAA DMV Chapter.",
    deadline: "2026-06-14",
    type: "nomination",
    formLink: APPLICATION_FORM_LINK
  },
  {
    id: 4,
    title: "Japan Chapter Head, IITGAA ",
    description: "We are seeking nominations for Japan Chapter Head to help lead and shape the future of IITGAA Japan Chapter.",
    deadline: "2026-06-14",
    type: "nomination",
    formLink: APPLICATION_FORM_LINK
  },
 
];

export const volunteerOpportunities: NominationOpportunity[] = [
  // Add your volunteer opportunities here
  // Example:
  // {
  //   id: 1,
  //   title: "Bangalore Chapter Head, IITGAA ",
  //   description: "This is an opportunity to lead the Bangalore chapter of IITGAA and organize events, meetups, and initiatives for the alumni community in Bangalore.",
  //   deadline: "2026-06-14",
  //   type: "volunteer",
  //   formLink: APPLICATION_FORM_LINK
  // },
  
 
];