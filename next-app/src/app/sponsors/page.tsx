import type { Metadata } from "next";
import Link from "next/link";
import SponsorGrid from "@/components/SponsorGrid";
import { SITE_DATA } from "@/data/site";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Sponsor Covert Robotics — your support funds robot parts, competition registration, and STEM outreach for students.",
};

export default function SponsorsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <p className="mono-tag reveal-load" style={{ ["--d" as string]: 0 }}>
          04 // BACKERS
        </p>
        <h1 className="reveal-load" style={{ ["--d" as string]: 1 }}>
          Mission Funding
        </h1>
        <p className="page-lede reveal-load" style={{ ["--d" as string]: 2 }}>
          Robots aren&apos;t cheap. Sponsors keep our motors turning — every contribution
          puts students on the competition field.
        </p>
      </section>

      <section className="section">
        <div className="section-head reveal">
          <h2>Where Funding Goes</h2>
        </div>

        <div className="fund-grid">
          <div className="fund-card reveal">
            <p className="mono-tag">PARTS &amp; MATERIALS</p>
            <p>Motors, control hubs, aluminum extrusion, 3D-printing filament — the raw material of every robot iteration.</p>
          </div>
          <div className="fund-card reveal">
            <p className="mono-tag">COMPETITION FEES</p>
            <p>Season registration, league play, and tournament entry that get the team on the field.</p>
          </div>
          <div className="fund-card reveal">
            <p className="mono-tag">TOOLS &amp; EQUIPMENT</p>
            <p>The workshop gear that turns CAD models into machined, wired, working robots.</p>
          </div>
          <div className="fund-card reveal">
            <p className="mono-tag">OUTREACH</p>
            <p>Demo kits and materials for the STEM events we run in local schools and the community.</p>
          </div>
        </div>

        <div className="section-head reveal" style={{ marginTop: "clamp(4rem, 9vw, 7rem)" }}>
          <h2>Our Sponsors</h2>
          <p className="section-lede">The organizations and families backing the mission this season.</p>
        </div>

        <SponsorGrid />

        <div className="sponsor-cta reveal">
          <p>Want your logo on a competition robot?</p>
          <p className="sponsor-cta-note">
            Sponsors get recognition on our website, team shirts, and robot — and a
            front-row seat to students becoming engineers. Reach out and we&apos;ll send
            our sponsorship packet.
          </p>
          <a
            className="btn btn-solid"
            href={`mailto:${SITE_DATA.email}?subject=${encodeURIComponent("Sponsoring Covert Robotics")}`}
          >
            Become a Sponsor
          </a>
        </div>

        <div className="page-next reveal">
          <Link className="btn btn-ghost" href="/contact">
            Next: Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
