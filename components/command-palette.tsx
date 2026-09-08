"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Command, Search, ExternalLink, FolderGit2, Mail, Sun, Moon, Hash } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { navLinks, site } from "@/data/site";
import { projects } from "@/data/projects";

type CommandItem = {
  id: string;
  label: string;
  description?: string;
  icon: ReactNode;
  keywords: string[];
  action: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();

  const items: CommandItem[] = [
    {
      id: "nav-home",
      label: "Go to Home",
      icon: <Hash size={16} />,
      keywords: ["home", "top", "hero"],
      action: () => navigate("#home"),
    },
    ...navLinks.map((link) => ({
      id: `nav-${link.href.slice(1)}`,
      label: `Go to ${link.label}`,
      icon: <Hash size={16} />,
      keywords: [link.label.toLowerCase(), link.href],
      action: () => navigate(link.href),
    })),
    {
      id: "theme-toggle",
      label: theme === "dark" ? "Switch to Light" : "Switch to Dark",
      icon: theme === "dark" ? <Sun size={16} /> : <Moon size={16} />,
      keywords: ["theme", "dark", "light", "mode"],
      action: () => toggleTheme(),
    },
    {
      id: "resume",
      label: "Open Resume",
      icon: <ExternalLink size={16} />,
      keywords: ["resume", "pdf", "cv"],
      action: () => {
        window.open(site.resumePath, "_blank");
      },
    },
    {
      id: "email",
      label: `Email ${site.email}`,
      icon: <Mail size={16} />,
      keywords: ["email", "contact", "mail"],
      action: () => {
        window.location.href = `mailto:${site.email}`;
      },
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      icon: <FolderGit2 size={16} />,
      keywords: ["github", "source", "repo"],
      action: () => {
        window.open(site.github, "_blank");
      },
    },
    ...projects.map((p) => ({
      id: `project-${p.slug}`,
      label: `View ${p.title}`,
      icon: <FolderGit2 size={16} />,
      keywords: [p.title.toLowerCase(), p.slug, ...p.tech.map((t) => t.toLowerCase())],
      action: () => {
        if (p.liveUrl) window.open(p.liveUrl, "_blank");
        else if (p.githubUrl) window.open(p.githubUrl, "_blank");
      },
    })),
  ];

  useEffect(() => {
    if (!open) return;
    setQuery("");
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement).isContentEditable;

      if (e.key === "Escape" && open) {
        e.preventDefault();
        setOpen(false);
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }

      if (typing) return;

      if (e.key === "/" && !open) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function navigate(hash: string) {
    const el = document.getElementById(hash.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", hash);
    setOpen(false);
  }

  const filtered = items.filter((item) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      item.label.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.includes(q))
    );
  });

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="mt-[18vh] w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
          <Command size={16} className="text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
          />
          <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted sm:inline-flex">
            Esc
          </kbd>
        </div>
        <div className="max-h-72 overflow-y-auto py-1.5">
          {filtered.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-muted">
              No commands found.
            </p>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-surface"
              >
                <span className="text-muted">{item.icon}</span>
                <div className="min-w-0">
                  <p className="truncate text-foreground">{item.label}</p>
                  {item.description && (
                    <p className="truncate text-xs text-muted">{item.description}</p>
                  )}
                </div>
              </button>
            ))
          )}
        </div>
        <div className="flex items-center gap-3 border-t border-border px-3 py-1.5 text-[10px] text-muted">
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border px-1 py-0.5">↑</kbd>
            <kbd className="rounded border border-border px-1 py-0.5">↓</kbd>
            navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border px-1 py-0.5">Enter</kbd>
            select
          </span>
        </div>
      </div>
    </div>
  );
}