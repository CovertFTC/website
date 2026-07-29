import Link from "next/link";
import { SITE_DATA } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="hero-glow" aria-hidden="true"></div>

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="mono-tag reveal-load" style={{ ["--d" as string]: 0 }}>
              // FIRST TECH CHALLENGE — TEAM {SITE_DATA.teamNumber}
            </p>
            <h1 className="hero-title">
              <span className="reveal-load" style={{ ["--d" as string]: 1 }}>
                COVERT
              </span>
              <span className="hero-sub reveal-load" style={{ ["--d" as string]: 2 }}>
                R&nbsp;O&nbsp;B&nbsp;O&nbsp;T&nbsp;I&nbsp;C&nbsp;S
              </span>
            </h1>
            <p className="hero-lede reveal-load" style={{ ["--d" as string]: 3 }}>
              A student-led robotics team operating in the shadows of the workshop —
              designing, building, and programming competition robots for the{" "}
              <strong>FIRST&nbsp;Tech&nbsp;Challenge</strong>.
            </p>
            <div className="hero-actions reveal-load" style={{ ["--d" as string]: 4 }}>
              <Link className="btn btn-solid" href="/mission">
                Our Mission
              </Link>
              <Link className="btn btn-ghost" href="/sponsors">
                Sponsor the Team
              </Link>
            </div>
          </div>

          <div className="hero-mark reveal-load" style={{ ["--d" as string]: 2 }} aria-hidden="true">
            <img src="/mark.svg" alt="" />
          </div>
        </div>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>DESIGN&nbsp;//&nbsp;BUILD&nbsp;//&nbsp;CODE&nbsp;//&nbsp;COMPETE&nbsp;//&nbsp;OUTREACH&nbsp;//&nbsp;ITERATE&nbsp;//&nbsp;</span>
            <span>DESIGN&nbsp;//&nbsp;BUILD&nbsp;//&nbsp;CODE&nbsp;//&nbsp;COMPETE&nbsp;//&nbsp;OUTREACH&nbsp;//&nbsp;ITERATE&nbsp;//&nbsp;</span>
            <span>DESIGN&nbsp;//&nbsp;BUILD&nbsp;//&nbsp;CODE&nbsp;//&nbsp;COMPETE&nbsp;//&nbsp;OUTREACH&nbsp;//&nbsp;ITERATE&nbsp;//&nbsp;</span>
          </div>
        </div>
      </section>

      {/* ============ FIELD REPORT ============ */}
      <section className="section">
        <div className="section-head reveal">
          <p className="mono-tag">// LATEST FIELD REPORT</p>
          <h2>Out in the Community</h2>
        </div>
        <Link className="reveal" href="/mission" style={{ display: "block", textDecoration: "none" }}>
          <figure className="photo-frame wide">
            <img
              src="/outreach-group.jpg"
              alt="Covert Robotics team members with a classroom of young students and a competition robot"
              loading="lazy"
            />
            <figcaption>// STEM OUTREACH AT A LOCAL ELEMENTARY SCHOOL — READ THE MISSION LOG →</figcaption>
          </figure>
        </Link>
      </section>

      {/* ============ BRIEFING (page links) ============ */}
      <section className="section">
        <div className="section-head reveal">
          <p className="mono-tag">// BRIEFING</p>
          <h2>Choose Your Intel</h2>
        </div>

        <div className="brief-grid">
          <Link className="brief-card reveal" href="/mission">
            <p className="mono-tag">01</p>
            <h3>Mission</h3>
            <p>Who we are, why we build, and what the FIRST Tech Challenge is all about.</p>
            <span className="brief-go">Read the directive →</span>
          </Link>
          <Link className="brief-card reveal" href="/team">
            <p className="mono-tag">02</p>
            <h3>Team</h3>
            <p>Meet the operatives — the students who design, wire, program, and drive.</p>
            <span className="brief-go">View personnel →</span>
          </Link>
          <Link className="brief-card reveal" href="/sponsors">
            <p className="mono-tag">03</p>
            <h3>Sponsors</h3>
            <p>The backers who keep our motors turning, and how you can join them.</p>
            <span className="brief-go">Fund the mission →</span>
          </Link>
          <Link className="brief-card reveal" href="/contact">
            <p className="mono-tag">04</p>
            <h3>Contact</h3>
            <p>Open a channel — email, social media, and everywhere to find us.</p>
            <span className="brief-go">Establish comms →</span>
          </Link>
        </div>
      </section>
    </>
  );
}
