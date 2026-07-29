import type { Metadata } from "next";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { SITE_DATA } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Covert Robotics — sponsorships, mentoring, and questions. Find us on email and social media.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <p className="mono-tag reveal-load" style={{ ["--d" as string]: 0 }}>
          05 // COMMS
        </p>
        <h1 className="reveal-load" style={{ ["--d" as string]: 1 }}>
          Open a Channel
        </h1>
      </section>

      <section className="section">
        <div className="contact-grid">
          <div className="contact-card reveal">
            <p className="mono-tag">EMAIL</p>
            <a className="contact-big" href={`mailto:${SITE_DATA.email}`}>
              {SITE_DATA.email}
            </a>
            <p className="contact-note">Sponsorships, mentoring, questions — we read everything.</p>
          </div>
          <div className="contact-card reveal">
            <p className="mono-tag">FOLLOW THE MISSION</p>
            <SocialLinks />
            <p className="contact-note">Build logs, match footage, and code drops.</p>
          </div>
        </div>

        <div className="page-next reveal">
          <Link className="btn btn-ghost" href="/">
            ← Back to Base
          </Link>
        </div>
      </section>
    </>
  );
}
