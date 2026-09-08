export type SkillCategory = {
  name: "Frontend" | "Backend" | "Database" | "Tools" | "Design";
  items: { name: string; level?: "Used in production" | "Comfortable" | "Familiar" }[];
};

export const skillCategories: SkillCategory[] = [
];

export const marqueeRows = [
  ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  ["Node.js", "PHP", "MySQL", "PostgreSQL", "Supabase", "Amazon RDS", "REST APIs", "Authentication"],
  ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Netlify", "UI/UX", "Responsive Design"],
] as const;
