"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:border-accent/30"
    >
      <div className="relative aspect-16/9 overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={`${project.title} interface preview`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          unoptimized
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-0.5 text-[11px] font-medium text-muted backdrop-blur-sm">
          {project.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-xs text-muted">{project.role}</p>
        <h3 className="mt-1 text-base font-medium text-foreground">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-1.5 py-0.5 text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-4 pt-4 text-sm">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground"
            >
              Live Demo
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : (
            <span className="text-muted">Live demo soon</span>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
          ) : (
            <span className="text-muted">Private repo</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}