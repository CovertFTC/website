import membersData from "@/data/members.json";

type Member = { initials: string; name: string; grade: string; photo?: string };
const TEAM_MEMBERS = membersData as Member[];

export default function TeamGrid() {
  return (
    <div className="team-grid" id="teamGrid">
      {TEAM_MEMBERS.map((m) => (
        <article className="agent reveal" key={m.initials}>
          <div className="agent-visor">
            {m.photo ? (
              <img src={m.photo} alt={m.name} loading="lazy" />
            ) : (
              <span className="agent-init">{m.initials}</span>
            )}
          </div>
          <h3>{m.name}</h3>
          <p className="agent-role">
            <span className="redacted">Grade {m.grade}</span>
          </p>
        </article>
      ))}
    </div>
  );
}
