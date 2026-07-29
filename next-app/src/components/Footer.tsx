"use client";

import { useEffect, useState } from "react";
import SITE_DATA from "@/data/site.json";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="footer">
      <img className="footer-mark" src="/mark.svg" alt="" />
      <p className="footer-line">COVERT ROBOTICS // FTC TEAM {SITE_DATA.teamNumber}</p>
      <p className="footer-fine">
        <span>{year}</span> Covert Robotics.{" "}
        <em>FIRST®</em> and <em>FIRST® Tech Challenge</em> are registered trademarks of FIRST.
      </p>
    </footer>
  );
}
