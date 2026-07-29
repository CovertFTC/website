import SITE_DATA from "@/data/site.json";

export default function SocialLinks() {
  return (
    <div className="socials" id="socialLinks">
      {SITE_DATA.socials.map((s) => (
        <a href={s.url} target="_blank" rel="noopener" key={s.label}>
          {s.label}
        </a>
      ))}
    </div>
  );
}
