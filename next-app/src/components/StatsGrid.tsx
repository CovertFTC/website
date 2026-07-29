import STATS from "@/data/stats.json";

export default function StatsGrid() {
  return (
    <div className="stats" id="statsGrid">
      {STATS.map((s) => (
        <div className="stat" key={s.label}>
          <span className="stat-num" data-count={s.value}>
            0
          </span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
