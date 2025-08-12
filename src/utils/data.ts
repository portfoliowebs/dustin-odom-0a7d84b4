import { v4 as uuidv4 } from 'uuid';
import {
  ProfileData,
  ContactData,
  FooterContent,
  PortfolioItem,
  Service,
  Testimonial,
  StatItem,
  ValuePropItem,
} from '../types/interfaces';

export const profileData: ProfileData = {
  name: "DUSTIN ODOM",
  tagline: "Feature Writer – Automotive & Tech",
  profileImage: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/profile_images/1754990537000_pexels-nubikini-386009.jpg",
  shortBio: "Cars aren’t a topic for me , they’re a lifestyle. I’ve spent over a decade telling automotive stories that dig into the mechanics, culture, and chaos that keep this industry alive. From writing deep tech explainers to chronicling the forgotten legends of Le Mans, I approach every article with a balance of clarity, technical accuracy, and gearhead reverence. I don’t just cover cars. I live them.",
  summary: "Cars aren’t a topic for me , they’re a lifestyle. I’ve spent over a decade telling automotive stories that dig into the mechanics, culture, and chaos that keep this industry alive. From writing deep tech explainers to chronicling the forgotten legends of Le Mans, I approach every article with a balance of clarity, technical accuracy, and gearhead reverence. I don’t just cover cars. I live them.",
  address: "2475 Crockett St, Cantonment, FL 32533",
  email: "odomd273@gmail.com",
  experience: [
    {
      title: "Feature Writer – Automotive & Tech",
      company: "Freelance Contributor",
      location: "Location",
      years: "2013–Present",
      responsibilities: [
        "- Craft original longform stories for digital media, often exploring industry trends, engineering innovations, and performance testing.\n- Translate complex automotive concepts (from multi-link suspensions to battery thermal management) into accessible reads.\n- Contributed pieces to publications focused on both modern innovation and vintage car heritage.",
        "Responsibility 2"
      ],
    },
    {
      title: "Motorsport and Safety Columnist",
      company: "Auto Circuit News",
      location: "Location",
      years: "2016–2021",
      responsibilities: [
        "- Delivered weekly breakdowns of Formula One and IMSA events, with a focus on technical developments and strategic nuance.\n- Covered road safety advancements, legislation updates, and vehicle testing protocols in consumer-focused formats.\n- Built strong sourcing relationships with teams, mechanics, and safety analysts.",
        "Responsibility 2"
      ],
    },
    {
      title: "Editor – Enthusiast Builds & DIY Culture",
      company: "The Garage Club",
      location: "Location",
      years: "2011–2015",
      responsibilities: [
        "- Produced editorial series on custom builds, grassroots tuning scenes, and aftermarket product reviews.\n- Wrote from lived experience — working under the hood, testing mods, and driving the final product.\n- Managed a team of part-time contributors and helped shape brand voice as the site scaled.",
        "Responsibility 2"
      ],
    }
  ],
  education: [
      {
        institution: "University",
        degree: "Bachelor's Degree",
        graduated: "2020",
      },
    ],
  skills: [
  "CMS Platforms: WordPress, Ghost, and custom editorial backends",
  "Editorial Standards: AP Style, SEO-conscious formatting",
  "Tech Focus: ICE, EV, hybrid powertrains, safety systems, racing telemetry",
  "Voice Versatility: Can shift from deeply technical to culturally cheeky — depending on the outlet",
  "Workflow: Independent researcher, clear communicator, fast drafter with clean copy"
],
  callToActionText: "View My Work",
  callToActionLink: "/portfolio",
};

export const contactData: ContactData = {
  title: "Get In Touch",
  description: "Feel free to reach out for collaborations or just a friendly hello",
  cardTitle: "Contact Information",
  email: {
    label: "Email",
    value: "odomd273@gmail.com",
    link: "mailto:odomd273@gmail.com",
  },
  address: {
    label: "Location",
    value: "2475 Crockett St, Cantonment, FL 32533",
  },
  phone: {
    label: "Phone",
    value: "239-485-3504",
    link: "tel:239-485-3504",
  },
  footerNote: "I'll get back to you as soon as possible",
};

export const footerContent: FooterContent = {
  companyName: "DUSTIN ODOM Portfolio",
  tagline: "Feature Writer – Automotive & Tech",
  slogan: "Building digital experiences that matter",
  contactEmail: "odomd273@gmail.com",
  contactPhone: "239-485-3504",
  contactAddress: "2475 Crockett St, Cantonment, FL 32533",
  quickLinks: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
  socialLinks: [
    
    
  ],
};

export const portfolioItems: PortfolioItem[] = [
      {
        id: uuidv4(),
        image: "/project-placeholder.jpg",
        title: "Project Title",
        description: "Project description highlighting key features and technologies used",
        pdfLink: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/resumes/1754990537001_Dustin_Odom_Resume_Jalopnik_-1.pdf",
      },
    ];

export const servicesData: Service[] = [
  {
    id: uuidv4(),
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    icon: "code",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly"],
  },
  {
    id: uuidv4(),
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces",
    icon: "design",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: uuidv4(),
    quote: "Professional and delivered beyond our expectations.",
    author: "Client Name",
    title: "CEO",
    company: "Company Name",
    image: undefined,
  },
];

export const statsData: StatItem[] = [
  {
    value: "3+",
    label: "Projects",
    description: "Completed",
    icon: "projects",
  },
  {
    value: "3+",
    label: "Years",
    description: "Experience",
    icon: "experience",
  },
];

export const valuePropsData: ValuePropItem[] = [
  {
    title: "Quality",
    description: "I deliver high-quality solutions that stand the test of time",
    icon: "quality",
  },
  {
    title: "Communication",
    description: "Clear and consistent communication throughout the project",
    icon: "communication",
  },
];