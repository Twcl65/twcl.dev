import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-16 pb-14 sm:pt-20 sm:pb-16">
      <Reveal>
        <SectionHeading label="About" />
        <div className="space-y-4 text-[0.95rem] leading-7 text-muted sm:text-base sm:leading-8">
          <p>{site.summary}</p>
          <p>{site.about}</p>
          <p>
            Currently completing a {site.education.degree} at {site.education.school}, graduating{" "}
            {site.education.graduation}.
          </p>
        </div>
      </Reveal>
    </section>
  );
}