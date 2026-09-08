"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { sectionClass } from "@/lib/utils";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className={sectionClass}>
      <Reveal>
        <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          Let&apos;s build something together
        </h2>
        <p className="mt-3 max-w-xl text-[0.95rem] leading-7 text-muted">
          Have a project, idea, or opportunity in mind? I&apos;d love to hear about it.
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-muted">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-foreground">
                  <Mail size={15} />
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">GitHub</dt>
              <dd className="mt-1">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-foreground"
                >
                  <GitHubIcon size={15} />
                  GitHub
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">LinkedIn</dt>
              <dd className="mt-1">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-foreground"
                >
                  <LinkedInIcon size={15} />
                  LinkedIn
                </a>
              </dd>
            </div>
          </dl>

          <form onSubmit={onSubmit} className="space-y-3">
            <label className="block">
              <span className="mb-1.5 block text-sm text-muted">Name</span>
              <input
                required
                name="name"
                autoComplete="name"
                className="h-11 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none transition focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm text-muted">Email</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="h-11 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none transition focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm text-muted">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full resize-y rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none transition focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-foreground transition hover:-translate-y-0.5 sm:w-auto sm:px-6"
            >
              Send Message
            </button>
            {status === "sent" ? (
              <p className="text-sm text-muted">Opening your email client…</p>
            ) : null}
          </form>
        </div>
      </Reveal>
    </section>
  );
}