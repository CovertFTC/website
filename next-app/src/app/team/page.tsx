import type { Metadata } from "next";
import Link from "next/link";
import TeamGrid from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the students behind Covert Robotics — the operatives who design, build, program, and drive our FTC competition robots.",
};

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <p className="mono-tag reveal-load" style={{ ["--d" as string]: 0 }}>
          03 // PERSONNEL
        </p>
        <h1 className="reveal-load" style={{ ["--d" as string]: 1 }}>
          The Operatives
        </h1>
        <p className="page-lede reveal-load" style={{ ["--d" as string]: 2 }}>
          Hover a card to declassify. Every member designs, builds, and competes.
        </p>
      </section>

      <section className="section">
        <TeamGrid />

        <div className="page-next reveal">
          <Link className="btn btn-ghost" href="/sponsors">
            Next: Our Sponsors →
          </Link>
        </div>
      </section>
    </>
  );
}
