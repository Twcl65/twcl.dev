import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Tight vertical rhythm: ~2rem between sections instead of a full viewport.
export const sectionClass =
  "scroll-mt-14 pt-12 pb-12 sm:scroll-mt-16 sm:pt-14 sm:pb-13";