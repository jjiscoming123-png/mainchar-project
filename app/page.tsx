"use client";

import Logo from "@/components/Logo";

export default function Page() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Logo size={24} />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[var(--color-gold)]/50">MAINCHAR</span>
        </a>
        <a href="https://x.com/MainCharCoin" target="_blank" rel="noopener noreferrer"
          className="text-[11px] font-semibold text-[var(--color-bg)] bg-[var(--color-gold)] px-4 py-1.5 rounded-full hover:bg-[var(--color-gold-dim)] transition-colors">
          Follow
        </a>
      </nav>

      {/* ── MOVIE POSTER HERO with light effects ── */}
      <section className="poster relative">
        {/* Spotlight cone - CSS gradient */}
        <div className="spotlight-cone animate-spotlight" />
        {/* Ambient purple glow left */}
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-600/[0.06] blur-[150px] pointer-events-none" />
        {/* Ambient gold glow right */}
        <div className="absolute top-[30%] right-[-5%] w-[350px] h-[350px] rounded-full bg-amber-500/[0.04] blur-[120px] pointer-events-none" />
        {/* Letterbox */}
        <div className="letterbox-top" />
        <div className="letterbox-bottom" />
        {/* Floating particles */}
        <div className="particles" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }} />
          ))}
        </div>

        <div className="relative z-10 px-6">
          <p className="poster-tagline anim-up d1 mb-6">A Film by You</p>
          <h1 className="poster-title anim-up d2">
            MAIN<span>CHARACTER</span>
          </h1>
          <div className="mt-8 mb-6 anim-up d3">
            <div className="star-divider"><span>★</span></div>
          </div>
          <p className="poster-sub anim-up d3">
            You&apos;ve been watching other people live.
            This is what happens when you stop spectating.
          </p>
          <div className="flex justify-center mt-8 anim-up d4">
            <a href="#script" className="text-xs font-semibold text-[var(--color-bg)] bg-[var(--color-gold)] px-6 py-3 rounded-full hover:bg-[var(--color-gold-dim)] transition-colors">
              Read the Script ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── QUOTE BAR with side glow ── */}
      <div className="quote-bar relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[var(--color-gold)]/30 to-transparent" />
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[var(--color-gold)]/30 to-transparent" />
        &ldquo;Every person you admire once felt like a side character too.
        The difference is they <em>stopped believing it</em>.&rdquo;
      </div>

      {/* ── SCREENPLAY with spotlight overlay ── */}
      <section id="script" className="py-20 md:py-28 px-6 relative">
        {/* Soft overhead light on the script */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="script-page rounded-sm relative">
          {/* Paper texture grain */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-sm" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '128px' }} />
          <p className="slug">INT. YOUR APARTMENT — 3AM</p>
          <p>Phone screen glowing. Another day of watching someone else&apos;s highlight reel. Wondering why their life looks like a movie and yours looks like the B-roll they cut.</p>
          <p className="slug mt-8">THEN — SOMETHING SHIFTS.</p>
          <p>Not an epiphany. Not some motivational video. Just a quiet moment where you got bored of your own excuses.</p>
          <p className="char">YOU</p>
          <p className="dial">Fuck it. My turn.</p>
          <p className="slug mt-8">SMASH CUT TO BLACK.</p>
        </div>
      </section>

      {/* ── FOUR TRUTHS with side accent lines ── */}
      <section className="py-20 md:py-28 px-6 border-t border-[var(--color-gold)]/[0.06] relative">
        <div className="absolute left-[10%] top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/[0.06] to-transparent pointer-events-none hidden md:block" />
        <div className="max-w-[560px] mx-auto space-y-16">
          {[
            { n: "I", t: "Nobody's coming to save you.", d: "There's no fairy godmother. No mentor montage. You either step up or you stay background noise. That's the whole deal." },
            { n: "II", t: "NPCs are everywhere.", d: "Same opinions. Same feed. Same takes. Same life on repeat. Not bad people — just people who never questioned the script they were handed." },
            { n: "III", t: "Main characters eat shit too.", d: "Rocky lost round one. Walter White was a high school teacher. Your worst moment is act one, not the credits." },
            { n: "IV", t: "The movie is already rolling.", d: "Started the day you were born. No trailer. No release date. Just a question — are you going to keep reading lines someone else wrote?" },
          ].map((item) => (
            <div key={item.n} className="group relative pl-8 border-l-2 border-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/30 transition-colors">
              <p className="text-[var(--color-gold)]/60 text-xs tracking-[0.2em] uppercase mb-2">{item.n}</p>
              <p className="text-lg font-medium text-white mb-2">{item.t}</p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CREDITS with cinematic glow ── */}
      <section className="py-20 md:py-28 px-6 border-t border-[var(--color-gold)]/[0.06] relative overflow-hidden">
        {/* Background spotlight */}
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[40vw] h-[130%] bg-[conic-gradient(from_0deg_at_50%_0%,transparent_38%,rgba(212,168,67,0.04)_48%,rgba(168,85,247,0.05)_50%,rgba(212,168,67,0.04)_52%,transparent_62%)] pointer-events-none" />
        <div className="credits max-w-sm mx-auto relative z-10">
          <span className="role">Written by</span>
          <span className="name">You</span>
          <span className="role">Directed by</span>
          <span className="name">You</span>
          <span className="role">Starring</span>
          <span className="name">You</span>
          <span className="role">Produced by</span>
          <span className="name">Also You</span>
        </div>
        <div className="mt-12 flex justify-center relative z-10">
          <a href="https://x.com/MainCharCoin" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-bg)] bg-[var(--color-gold)] px-6 py-3 rounded-full hover:bg-[var(--color-gold-dim)] transition-colors">
            <span>𝕏</span> Follow on X
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[var(--color-gold)]/[0.04] py-8 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={16} />
          <span className="text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)]/30">MAINCHAR</span>
        </div>
        <p className="text-[10px] text-[var(--color-muted)]/40">Your movie. Your rules.</p>
      </footer>
    </>
  );
}
