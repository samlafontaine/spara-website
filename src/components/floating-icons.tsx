"use client";

const icons = [
  // Link/chain
  <svg key="link" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>,
  // Bookmark
  <svg key="bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>,
  // Book/open book
  <svg key="book" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>,
  // Document/article
  <svg key="doc" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>,
  // Globe/URL
  <svg key="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
  // Star
  <svg key="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
  // Hash/tag
  <svg key="hash" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>,
  // RSS/feed
  <svg key="rss" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" />
  </svg>,
];

// Each icon gets a fixed position, size, rotation, animation duration/delay.
// Positions are percentages relative to the hero container.
const placements = [
  { top: "8%", left: "5%", size: 20, rotate: -15, duration: 6, delay: 0 },
  { top: "10%", left: "88%", size: 18, rotate: 12, duration: 7, delay: 0.5 },
  { top: "55%", left: "0%", size: 16, rotate: -8, duration: 5.5, delay: 1.2 },
  { top: "60%", left: "90%", size: 22, rotate: 20, duration: 6.5, delay: 0.8 },
  { top: "85%", left: "12%", size: 17, rotate: 10, duration: 7.5, delay: 1.5 },
  { top: "80%", left: "82%", size: 19, rotate: -18, duration: 5, delay: 0.3 },
  { top: "35%", left: "-2%", size: 15, rotate: 25, duration: 6.8, delay: 2 },
  { top: "30%", left: "95%", size: 16, rotate: -22, duration: 5.8, delay: 1 },
];

export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {icons.map((icon, i) => {
        const p = placements[i];
        return (
          <div
            key={i}
            className="absolute text-muted-foreground/15 dark:text-muted-foreground/50 animate-float"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              "--icon-rotate": `${p.rotate}deg`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties}
          >
            {icon}
          </div>
        );
      })}
    </div>
  );
}
