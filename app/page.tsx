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

      {/* ── MOVIE POSTER HERO ── */}
      <section className="poster">
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

      {/* ── QUOTE BAR ── */}
      <div className="quote-bar">
        &ldquo;Every person you admire once felt like a side character too.
        The difference is they <em>stopped believing it</em>.&rdquo;
      </div>

      {/* ── SCREENPLAY ── */}
      <section id="script" className="py-20 md:py-28 px-6">
        <div className="script-page rounded-sm">
          <p className="slug">INT. YOUR APARTMENT — 3AM</p>
          <p>Phone screen glowing. Another day of watching someone else&apos;s highlight reel. Wondering why their life looks like a movie and yours looks like the B-roll they cut.</p>

          <p className="slug mt-8">THEN — SOMETHING SHIFTS.</p>
          <p>Not an epiphany. Not some motivational video. Just a quiet moment where you got bored of your own excuses.</p>

          <p className="char">YOU</p>
          <p className="dial">Fuck it. My turn.</p>

          <p className="slug mt-8">SMASH CUT TO BLACK.</p>
        </div>
      </section>

      {/* ── FOUR TRUTHS — compact, no grid template ── */}
      <section className="py-20 md:py-28 px-6 border-t border-[var(--color-gold)]/[0.06]">
        <div className="max-w-[560px] mx-auto space-y-16">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.2em] uppercase mb-3">I</p>
            <p className="text-lg font-medium text-white mb-2">Nobody&apos;s coming to save you.</p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">There&apos;s no fairy godmother. No mentor montage. You either step up or you stay background noise. That&apos;s the whole deal.</p>
          </div>
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.2em] uppercase mb-3">II</p>
            <p className="text-lg font-medium text-white mb-2">NPCs are everywhere.</p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">Same opinions. Same feed. Same takes. Same life on repeat. Not bad people — just people who never questioned the script they were handed.</p>
          </div>
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.2em] uppercase mb-3">III</p>
            <p className="text-lg font-medium text-white mb-2">Main characters eat shit too.</p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">Rocky lost round one. Walter White was a high school teacher. Your worst moment is act one, not the credits.</p>
          </div>
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.2em] uppercase mb-3">IV</p>
            <p className="text-lg font-medium text-white mb-2">The movie is already rolling.</p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">Started the day you were born. No trailer. No release date. Just a question — are you going to keep reading lines someone else wrote?</p>
          </div>
        </div>
      </section>

      {/* ── CREDITS ── */}
      <section className="py-20 md:py-28 px-6 border-t border-[var(--color-gold)]/[0.06]">
        <div className="credits max-w-sm mx-auto">
          <span className="role">Written by</span>
          <span className="name">You</span>
          <span className="role">Directed by</span>
          <span className="name">You</span>
          <span className="role">Starring</span>
          <span className="name">You</span>
          <span className="role">Produced by</span>
          <span className="name">Also You</span>
        </div>
        <div className="mt-12 flex justify-center">
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
