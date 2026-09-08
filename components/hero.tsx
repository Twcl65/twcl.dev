"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/data/site";

const chips = ["Next.js", "TypeScript", "React", "PHP", "MySQL", "Supabase"];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="scroll-mt-14 pt-23 pb-16 sm:scroll-mt-16 sm:pt-27 sm:pb-20"
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-border sm:h-32 sm:w-32"
        >
          <Image
            src={site.profileImage}
            alt={site.name}
            fill
            priority
            sizes="128px"
            className="object-cover object-top"
          />
        </motion.div>

        <div className="min-w-0">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
          >
            {"<software-engineer />"}
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-2 text-[1.7rem] font-semibold tracking-tight text-foreground sm:text-[2.05rem] md:text-[2.15rem]"
          >
            {site.name}
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-1.5 text-[0.95rem] text-muted sm:text-[17px]"
          >
            {site.title}
            <span className="text-border"> · </span>
            {site.location}
          </motion.p>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-5 max-w-xl text-[0.95rem] leading-7 text-muted sm:text-base sm:leading-8"
          >
            {site.tagline} I build with{" "}
            {chips.map((chip, index) => (
              <span key={chip}>
                <span className="mx-0.5 inline-flex translate-y-[-1px] items-center rounded-md border border-border bg-surface px-1.5 py-px text-[11px] font-medium text-foreground">
                  {chip}
                </span>
                {index < chips.length - 2 ? " " : index === chips.length - 2 ? " and " : "."}
              </span>
            ))}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-1.5 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.34 }}
            className="mt-6 flex items-center gap-4 text-muted"
          >
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <Mail size={18} strokeWidth={1.75} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}