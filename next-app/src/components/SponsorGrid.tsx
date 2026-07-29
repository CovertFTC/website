import { SPONSORS } from "@/data/sponsors";

export default function SponsorGrid() {
  if (SPONSORS.length === 0) {
    return (
      <div className="sponsor-grid" id="sponsorGrid">
        {Array.from({ length: 4 }, (_, i) => (
          <div className="sponsor-slot reveal" key={i}>
            <span>Your Logo Here</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="sponsor-grid" id="sponsorGrid">
      {SPONSORS.map((s) => {
        const inner = s.logo ? (
          <img src={s.logo} alt={s.name} loading="lazy" />
        ) : (
          <span className="sponsor-name">{s.name}</span>
        );
        return s.url ? (
          <a
            className="sponsor-slot filled reveal"
            href={s.url}
            target="_blank"
            rel="noopener"
            key={s.name}
          >
            {inner}
          </a>
        ) : (
          <div className="sponsor-slot filled reveal" key={s.name}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}
