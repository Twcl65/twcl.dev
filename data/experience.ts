export type ExperienceItem = {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  responsibilities: string[];
  tools: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Jan 2026 — Apr 2026",
    role: "Administrative Unit Intern",
    organization: "Local Health Insurance Office - PhilHealth Region X CDO",
    location: "Philippines",
    summary:
      "Supported field operations and office administration with records work, document processing, and first-level technical assistance.",
    responsibilities: [
      "Provided administrative support for day-to-day office operations.",
      "Helped process attendance, leave applications, and Official Business Slips.",
      "Maintained spreadsheets in Excel and Google Sheets for operational tracking.",
      "Assisted employees and clients with first-level inquiries.",
      "Supported account and ticketing follow-ups as first-level technical assistance.",
    ],
    tools: ["Excel", "Google Sheets", "Document workflows"],
  },
];
