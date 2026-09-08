import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { featuredProject, projects } from "@/data/projects";
import { sectionClass } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className={sectionClass}>
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative aspect-16/9 overflow-hidden bg-surface lg:aspect-auto lg:min-h-[280px]">
              <Image
                src={featuredProject.image}
                alt={`${featuredProject.title} featured preview`}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                unoptimized
                className="object-cover object-top transition duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col justify-center p-5 sm:p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                Featured Build
              </p>
              <h2 className="mt-3 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                {featuredProject.title}: student housing, mapped and managed.
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-[0.95rem] sm:leading-7">
                {featuredProject.longDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border px-2 py-1 text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground"
                >
                  Request a walkthrough
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="pt-12 sm:pt-14">
        <Reveal>
          <SectionHeading label="Projects" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}