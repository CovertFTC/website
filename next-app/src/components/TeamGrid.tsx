import { TEAM_MEMBERS } from "@/data/members";

export default function TeamGrid() {
  return (
    <div className="team-grid" id="teamGrid">
      {TEAM_MEMBERS.map((m) => (
        <article className="agent reveal" key={m.initials}>
          <div className="agent-visor">
            <span className="agent-init">{m.initials}</span>
          </div>
          <h3>{m.name}</h3>
          <p className="agent-role">
            <span className="redacted">{m.role}</span>
          </p>
        </article>
      ))}
    </div>
  );
}
