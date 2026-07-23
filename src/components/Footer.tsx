function IGIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function TTIcon() {
  return (
    <svg width="17" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.01a8.16 8.16 0 004.77 1.52V7.07a4.85 4.85 0 01-1-.38z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-clay mt-24">

      {/* Social + copyright */}
      <div className="container-shell py-16 flex flex-col items-center text-center gap-5">
        <p className="eyebrow">Follow along</p>
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/fzshotit" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-bone-dim hover:text-henna transition-colors" data-cursor="view">
            <IGIcon />
            <span className="font-display font-bold text-xl text-bone hover:text-henna transition-colors">FZShotit</span>
          </a>
          <a href="https://www.tiktok.com/@fzshotit" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-bone-dim hover:text-henna transition-colors" data-cursor="view">
            <TTIcon />
          </a>
        </div>
        <p className="text-xs text-bone-dim mt-4">
          &copy; {new Date().getFullYear()} FZShotit &mdash; London, United Kingdom
        </p>
      </div>

      {/* Agency credit — premium, full-width strip */}
      <a
        href="mailto:nexushouseuk@gmail.com"
        className="group block w-full border-t border-clay/40 bg-[#0d0d0d] hover:bg-[#111] transition-colors duration-700"
        data-cursor="view"
      >
        <div className="container-shell flex items-center justify-between py-4">
          {/* Left: wordmark */}
          <span
            className="font-display font-bold tracking-tight text-bone/20 group-hover:text-bone/50 transition-colors duration-700"
            style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}
          >
            Website created by Nexus House
          </span>

          {/* Centre: tagline */}
          <span
            className="hidden md:block text-bone/15 group-hover:text-bone/35 transition-colors duration-700 font-body"
            style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase" }}
          >
            
          </span>

          {/* Right: subtle arrow */}
          <span
            className="text-bone/15 group-hover:text-henna transition-colors duration-700"
            style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}
          >
            nexushouseuk@gmail.com &nbsp;&#8599;
          </span>
        </div>
      </a>

    </footer>
  );
}
