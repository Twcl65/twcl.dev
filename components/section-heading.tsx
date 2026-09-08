import type { ReactNode } from "react";
import Link from "next/link";

type SectionHeadingProps = {
  id?: string;
  label: string;
  action?: { href: string; label: string };
  children?: ReactNode;
};

export function SectionHeading({ id, label, action, children }: SectionHeadingProps) {
  return (
    <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
      <h2
        id={id}
        className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted"
      >
        {label}
      </h2>
      {action ? (
        <Link
          href={action.href}
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          {action.label}
        </Link>
      ) : null}
      {children}
    </div>
  );
}