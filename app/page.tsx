"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";

/* ──────── Hooks ──────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ──────── Nav ──────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[var(--color-background)]/90 backdrop-blur-xl border-b border-[var(--color-gold)]/[0.08] py-4" : "bg-transparent py-7"}`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 group">
          <Logo size={28} className="group-hover:scale-105 transition-transform duration-300" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--color-gold)]/70">MAINCHAR</span>
        </a>
        <a href="https://x.com/MainCharCoin" target="_blank" rel="noopener noreferrer"
          className="text-[12px] font-semibold text-[var(--color-background)] bg-[var(--color-gold)] px-5 py-2 rounded-full hover:bg-[var(--color-gold-dim)] transition-colors duration-300">
          Follow
        </a>
      </div>
    </nav>
  );
}

/* ──────── Hero ──────── */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Spotlight cone */}
      <div className="spotlight-cone animate-spotlight" />
      {/* Letterbox bars */}
      <div className="letterbox-top" />
      <div className="letterbox-bottom" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="label animate-fade-up delay-1 mb-8 tracking-[0.4em]">
          A Film by You
        </div>
        <h1 className="display-hero animate-fade-up delay-2 mb-8 text-white">
          MAIN<br />
          <span className="text-[var(--color-gold)]">CHARACTER</span>
        </h1>
        <p className="animate-fade-up delay-3 text-[var(--color-muted)] text-lg md:text-xl max-w-md mx-auto leading-relaxed mb-10">
          The world is a stage. You&apos;ve been sitting in the audience
          long enough.
        </p>
        <div className="animate-fade-up delay-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#screenplay"
            className="text-sm font-semibold text-[var(--color-background)] bg-[var(--color-gold)] px-7 py-3.5 rounded-full hover:bg-[var(--color-gold-dim)] transition-colors duration-300">
            Read the Script
          </a>
          <a href="#manifesto" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors duration-300 flex items-center justify-center gap-1">
            The Manifesto →
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-[14vh] left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-5">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[var(--color-gold)]/30" />
      </div>
    </section>
  );
}

/* ──────── Screenplay ──────── */
function Screenplay() {
  const { ref, visible } = useInView();
  return (
    <section id="screenplay" ref={ref} className="py-32 md:py-40">
      <div className="section-divider mb-20 md:mb-28" />
      <div className={`max-w-[700px] mx-auto px-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="label text-center mb-4">Scene I</div>
        <h2 className="display-lg text-center mb-16 text-white">
          The <span className="text-[var(--color-gold)] italic">Awakening</span>
        </h2>
        <div className="screenplay bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-8 md:p-12">
          <p className="direction">INT. YOUR LIFE — EVERY DAY UNTIL NOW</p>
          <p>You scroll the feed. You watch the highlights. You double-tap someone else&apos;s story and call it living.</p>
          <p className="direction mt-6">THEN — SOMETHING SHIFTS.</p>
          <p>A crack in the script. A moment where you realize the camera was always pointed at you. You just never hit record.</p>
          <p className="character">YOU</p>
          <p className="dialogue">I was never the side character. I was the main character the whole time.</p>
          <p className="direction mt-6">CUT TO: THE REST OF YOUR LIFE.</p>
        </div>
        <div className="gold-line mx-auto mt-12" />
      </div>
    </section>
  );
}

/* ──────── Manifesto ──────── */
function Manifesto() {
  const { ref, visible } = useInView();
  const items = [
    { num: "I", title: "You were never meant to blend in", text: "Every algorithm, every feed, every system is designed to flatten you into a statistic. MAINCHAR is the refusal. You are not a data point. You are the plot." },
    { num: "II", title: "The spotlight doesn't find you", text: "You step into it. Nobody hands you the script. Nobody casts you. You walk on stage and the story bends around you. That's not arrogance — that's awareness." },
    { num: "III", title: "NPCs run on default settings", text: "Scrolling without thinking. Buying without questioning. Living without deciding. They're running someone else's code. You chose to wake up and rewrite yours." },
    { num: "IV", title: "Main characters fail forward", text: "Every wipeout is a plot twist. Every loss is an arc. The story doesn't end when you lose — it gets interesting. Protagonists don't quit. They pivot." },
  ];

  return (
    <section id="manifesto" ref={ref} className="py-32 md:py-40 bg-[var(--color-surface)]">
      <div className={`max-w-[1100px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-20 md:mb-28">
          <div className="label mb-4">The Manifesto</div>
          <h2 className="display-lg text-white">
            Four truths for the <span className="text-[var(--color-gold)] italic">protagonist</span>
          </h2>
        </div>
        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={i} className="group border-t border-white/[0.06] py-10 md:py-14">
              <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
                <div className="md:col-span-1 text-[var(--color-gold)] text-sm font-bold pt-1 font-[var(--font-display)]">{item.num}</div>
                <h3 className="md:col-span-4 display-md text-white group-hover:text-[var(--color-gold)] transition-colors duration-500">{item.title}</h3>
                <p className="md:col-span-5 md:col-start-7 body-lg">{item.text}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}

/* ──────── Vision ──────── */
function Vision() {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} className="py-32 md:py-40">
      <div className="section-divider mb-20 md:mb-28" />
      <div className={`max-w-[1100px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid md:grid-cols-12 gap-12 md:gap-6">
          <div className="md:col-span-5">
            <div className="label mb-4">Act III</div>
            <h2 className="display-lg text-white">
              The story<br />
              <span className="text-[var(--color-gold)] italic">continues.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
            <p className="body-lg">
              MAINCHAR isn&apos;t asking you to follow someone. It&apos;s asking you to lead yourself.
              The protagonist doesn&apos;t need a roadmap — they need the nerve to act and the
              self-awareness to know when the story is theirs to tell.
            </p>
            <p className="body-lg">
              The next chapter isn&apos;t written yet. It never is. That&apos;s what makes it
              a story worth telling.
            </p>
            <div className="gold-line mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────── CTA ──────── */
function Finale() {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} className="py-32 md:py-40 bg-[var(--color-surface)] relative overflow-hidden">
      {/* Faint spotlight */}
      <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[40vw] h-[120%] bg-[conic-gradient(from_0deg_at_50%_0%,transparent_38%,rgba(212,168,67,0.04)_48%,rgba(168,85,247,0.05)_50%,rgba(212,168,67,0.04)_52%,transparent_62%)] pointer-events-none" />
      <div className={`relative z-10 max-w-[800px] mx-auto px-6 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="label mb-6">Curtain Call</div>
        <h2 className="display-lg text-white mb-6">
          The credits don&apos;t roll<br />
          <span className="text-[var(--color-gold)] italic">until you say so.</span>
        </h2>
        <p className="body-lg max-w-md mx-auto mb-12">
          Main characters don&apos;t wait for permission. If you&apos;re still here,
          you already know which role you&apos;re playing.
        </p>
        <a href="https://x.com/MainCharCoin" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 text-sm font-semibold text-[var(--color-background)] bg-[var(--color-gold)] px-8 py-4 rounded-full hover:bg-[var(--color-gold-dim)] transition-colors duration-300">
          <span>𝕏</span>
          <span>Follow the Protagonist</span>
        </a>
      </div>
    </section>
  );
}

/* ──────── Footer ──────── */
function Footer() {
  return (
    <footer className="border-t border-[var(--color-gold)]/[0.06] py-10 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo size={20} />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-gold)]/40">MAINCHAR</span>
        </div>
        <p className="text-[11px] text-[var(--color-muted)]/50 italic" style={{ fontFamily: "var(--font-display)" }}>
          You are the main character. Act like it.
        </p>
      </div>
    </footer>
  );
}

/* ──────── Page ──────── */
export default function Page() {
  return (
    <main className="noise">
      <Nav />
      <Hero />
      <Screenplay />
      <Manifesto />
      <Vision />
      <Finale />
      <Footer />
    </main>
  );
}
