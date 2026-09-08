import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";
import { sectionClass } from "@/lib/utils";

export function Education() {
  return (
    <section id="education" className={sectionClass}>
      <Reveal>
        <SectionHeading label="Education" />
        <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-8">
          <p className="text-sm text-muted">{site.education.years}</p>
          <div>
            <h3 className="text-base font-medium text-foreground">{site.education.degree}</h3>
            <p className="mt-1 text-sm text-muted">{site.education.school}</p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Expected graduation {site.education.graduation}. Coursework and project work focused on
              web applications, databases, and practical system design.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}