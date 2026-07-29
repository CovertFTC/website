import type { Metadata } from "next";
import Link from "next/link";
import StatsGrid from "@/components/StatsGrid";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "The mission of Covert Robotics: turning students into engineers, programmers, and leaders through the FIRST Tech Challenge.",
};

export default function MissionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <p className="mono-tag reveal-load" style={{ ["--d" as string]: 0 }}>
          02 // MISSION
        </p>
        <h1 className="reveal-load" style={{ ["--d" as string]: 1 }}>
          Operating Directive
        </h1>
      </section>

      <section className="section">
        <div className="mission-grid">
          <div className="mission-copy reveal">
            <p className="big-line">
              We exist to turn students into <mark>engineers</mark>,{" "}
              <mark>programmers</mark>, and <mark>leaders</mark> — one robot at a time.
            </p>
            <p>
              Covert Robotics is a student-led FIRST Tech Challenge team. Every season we
              take on a new game challenge: we design our robot in CAD, machine and
              assemble it by hand, write its software, and drive it head-to-head against
              teams from across the region.
            </p>
            <p>
              Beyond the competition field, we practice <em>gracious professionalism</em> —
              mentoring younger teams, running STEM outreach in our community, and sharing
              everything we learn.
            </p>
          </div>

          <StatsGrid />
        </div>

        <div className="ftc-card reveal">
          <div className="corner tl"></div>
          <div className="corner tr"></div>
          <div className="corner bl"></div>
          <div className="corner br"></div>
          <h3>What is FIRST Tech Challenge?</h3>
          <p>
            FTC is a global robotics program where teams of students in grades 7–12
            design, build, and program robots to compete in an alliance format against
            other teams. It&apos;s more than robots — teams manage budgets, document their
            engineering process, and do community outreach, all judged alongside
            on-field performance.
          </p>
          <a className="text-link" href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noopener">
            Learn more at firstinspires.org →
          </a>
        </div>

        <div className="section-head reveal" style={{ marginTop: "clamp(4rem, 9vw, 7rem)" }}>
          <p className="mono-tag">02.B // FIELD OPS</p>
          <h2>Outreach</h2>
          <p className="section-lede">
            The mission doesn&apos;t stop at the practice field. We bring robots, code, and
            hands-on engineering to elementary classrooms and community events —
            recruiting the next generation of builders.
          </p>
        </div>

        <div className="gallery">
          <figure className="photo-frame wide reveal">
            <img
              src="/outreach-build.jpg"
              alt="Covert Robotics members teaching young students a hands-on coding activity in a classroom"
              loading="lazy"
            />
            <figcaption>// TEACHING PROGRAMMING LOGIC AT A LOCAL ELEMENTARY SCHOOL</figcaption>
          </figure>
          <figure className="photo-frame crop-top reveal">
            <img
              src="/outreach-table.jpg"
              alt="Students and mentors building with robotics kits at a classroom table"
              loading="lazy"
            />
            <figcaption>// HANDS-ON BUILD SESSION</figcaption>
          </figure>
          <figure className="photo-frame reveal">
            <img
              src="/outreach-group.jpg"
              alt="Covert Robotics team members with a classroom of young students and a competition robot"
              loading="lazy"
            />
            <figcaption>// MISSION COMPLETE — NEW RECRUITS BRIEFED</figcaption>
          </figure>
        </div>

        <div className="page-next reveal">
          <Link className="btn btn-ghost" href="/team">
            Next: Meet the Team →
          </Link>
        </div>
      </section>
    </>
  );
}
