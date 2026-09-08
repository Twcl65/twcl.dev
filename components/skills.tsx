import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Palette,
  Globe,
  LayoutTemplate,
  Lock,
  Server,
  ShieldCheck,
  SquareCode,
  Terminal,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { marqueeRows } from "@/data/skills";
import { sectionClass } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  "Next.js": LayoutTemplate,
  TypeScript: Braces,
  React: Code2,
  JavaScript: SquareCode,
  HTML: Globe,
  CSS: Wind,
  "Tailwind CSS": Wind,
  Bootstrap: LayoutTemplate,
  "Node.js": Server,
  PHP: Server,
  "Next.js API Routes": Terminal,
  "REST APIs": Globe,
  Authentication: Lock,
  RBAC: ShieldCheck,
  MySQL: Database,
  PostgreSQL: Database,
  Supabase: Database,
  "Amazon RDS": Database,
  "Database Design": Database,
  Git: GitBranch,
  GitHub: GitBranch,
  "VS Code": Terminal,
  Vercel: Globe,
  Netlify: Globe,
  Figma: Palette,
  "UI/UX": Palette,
  "Responsive Design": LayoutTemplate,
};

function SkillIcon({ name }: { name: string }) {
  const Icon = iconMap[name] ?? Code2;
  return <Icon size={15} strokeWidth={1.75} />;
}

export function Skills() {
  return (
    <section id="skills" className={sectionClass}>
      <Reveal>
        <SectionHeading label="Technologies" />
      </Reveal>
      <div className="tech-marquee space-y-3 overflow-hidden">
        {marqueeRows.map((row, index) => (
          <div
            key={row.join("-")}
            className={`tech-track gap-2 ${index === 1 ? "tech-track-right" : ""}`}
          >
            {[...row, ...row].map((item, itemIndex) => (
              <span
                key={`${item}-${itemIndex}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground"
              >
                <SkillIcon name={item} />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}