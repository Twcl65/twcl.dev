import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/experience";
import { sectionClass } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className={sectionClass}>
      <Reveal>
        <SectionHeading label="Experience" />
        <ol className="relative space-y-8 border-l border-border pl-5 sm:border-l-0 sm:pl-0">
          {experience.map((item) => (
            <li
              key={`${item.organization}-${item.role}`}
              className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-8"
            >
              <p className="pt-0.5 text-sm text-muted">{item.period}</p>
              <div>
                <h3 className="text-base font-medium text-foreground">{item.role}</h3>
                <p className="mt-1 text-sm text-muted">
                  {item.organization}
                  <span className="text-border"> · </span>
                  {item.location}
                </p>
                <p className="mt-3 text-[0.95rem] leading-7 text-muted">{item.summary}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm leading-6 text-muted">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-border px-2 py-1 text-[11px] text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}