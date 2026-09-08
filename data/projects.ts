export type Project = {
  number: string;
  slug: string;
  title: string;
  role: string;
  description: string;
  longDescription: string;
  features: string[];
  tech: string[];
  image: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "dormconnect",
    title: "DormConnect",
    role: "Full-Stack Developer",
    description:
      "A student accommodation platform that connects students with landlords and simplifies dormitory discovery and management.",
    longDescription:
      "DormConnect is built for students and accredited landlords who need a clearer way to discover rooms, track occupancy, and manage leases without juggling spreadsheets and chat threads.",
    features: [
      "Student accommodation discovery",
      "Landlord management",
      "Room listings",
      "Occupancy tracking",
      "Lease management",
      "Landlord accreditation",
      "Document management",
      "Notifications",
      "Map-based property discovery",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "OpenStreetMap",
    ],
    image: "/images/projects/dormconnect.jpg",
    featured: true,
    liveUrl: "https://dormconnect-sys.vercel.app/",
    githubUrl: "https://github.com/Twcl65/DormConnect",
  },
  {
    number: "02",
    slug: "marinex",
    title: "MarineX",
    role: "Full-Stack Developer",
    description:
      "A marina management and vessel operations system for scheduling, compliance, and day-to-day marina workflows.",
    longDescription:
      "MarineX supports marina operations with dry-docking schedules, document control, and role-based access so teams can keep vessel work organized and auditable.",
    features: [
      "Dry-docking scheduling",
      "Digital document management",
      "Role-based access",
      "Notifications",
      "Compliance tracking",
      "Marina operations management",
    ],
    tech: ["Next.js", "TypeScript", "MySQL", "Amazon RDS", "Tailwind CSS"],
    image: "/images/projects/ecotrack.png",
    liveUrl: "https://ecotrack-sys.vercel.app/",
    githubUrl: "https://github.com/Twcl65/ECOTRACK",
  },
  {
    number: "03",
    slug: "ustp-diagram-creator",
    title: "USTP Diagram Creator",
    role: "Developer",
    description:
      "An automatic diagram generator for Activity Diagrams, System Flowcharts, Program Flowcharts, and Sequence Diagrams.",
    longDescription:
      "Skip the hassle of manual drawing. Type a description, paste a Mermaid script from ChatGPT or Claude, and render instant, fully-compliant academic blueprints — an automatic diagram maker exclusive to USTP.",
    features: [
      "Activity Diagram",
      "System Flowchart",
      "Program Flowchart",
      "Sequence Diagram",
      "Mermaid script rendering",
      "Live script compiler preview",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/images/projects/ustp-diagram-creator.png",
    liveUrl: "https://github.com/Twcl65/USTP-Diagram-Creator-0.1",
    githubUrl: "https://github.com/Twcl65/USTP-Diagram-Creator-0.1",
  },
  {
    number: "04",
    slug: "board-exam-review",
    title: "Board Exam Review System",
    role: "Developer",
    description:
      "A digital review platform for BS Naval Architecture and Marine Engineering board examination preparation.",
    longDescription:
      "The review system organizes subjects, practice questions, and quiz history so examinees can track progress across topics with a structured study flow.",
    features: [
      "Subjects and subtopics",
      "Practice questions",
      "Quiz system",
      "Review history",
      "User accounts",
      "Exam results",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/images/projects/board-exam.jpg",
    liveUrl: "https://www.namemockboard.online/",
    githubUrl: "https://github.com/Twcl65/USTP-Diagram-Creator-0.1",
  },
];

export const featuredProject = projects.find((project) => project.featured)!;
export const otherProjects = projects.filter((project) => !project.featured);
