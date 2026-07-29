"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${(i % 4) * 70}ms`;
      revealObserver.observe(el);
    });

    const countUp = (el: Element) => {
      const target = parseInt((el as HTMLElement).dataset.count || "0", 10);
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countUp(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll(".stat-num").forEach((el) => statObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      statObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
