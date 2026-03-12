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
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[var(--color-background)]/90 backdrop-blur-xl border-b border-white/[0.04] py-4" : "bg-gradient-to-b from-[var(--color-background)] via-[var(--color-background)]/80 to-transparent py-7"}`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <Logo size={28} className="group-hover:scale-105 transition-transform duration-300" />
          <span className="text-[13px] font-bold tracking-[0.18em] uppercase text-white/90">MAINCHAR</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-[13px] text-[var(--color-muted)] font-medium">
          <a href="#story" className="hover:text-white transition-colors duration-300">Story</a>
          <a href="#manifesto" className="hover:text-white transition-colors duration-300">Manifesto</a>
          <a href="#vision" className="hover:text-white transition-colors duration-300">Vision</a>
        </div>
        <a href="https://x.com/MainCharCoin" target="_blank" rel="noopener noreferrer"
          className="text-[13px] font-semibold text-[var(--color-background)] bg-[var(--color-accent)] px-5 py-2 rounded-full hover:bg-[var(--color-accent-dim)] transition-colors duration-300">
          Follow
        </a>
      </div>
    </nav>
  );
}

/* ──────── Hero ──────── */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
      {/* Ambient light */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] blur-[250px] animate-breathe pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[500px] h-[500px] rounded-full bg-amber-500 blur-[200px] opacity-[0.04] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="label animate-fade-up delay-1 mb-6">The Protagonist Protocol</div>
        <h1 className="display-xl animate-fade-up delay-2 mb-8">
          YOU ARE<br />
          THE MAIN<br />
          <span className="text-[var(--color-accent)]">CHARACTER.</span>
        </h1>
        <div className="max-w-lg animate-fade-up delay-3">
          <p className="body-lg">
            Stop living someone else&apos;s storyline. The world doesn&apos;t happen
            <em> to </em>you — it happens <em>because</em> of you.
          </p>
        </div>
        <div className="mt-10 animate-fade-up delay-4 flex items-center gap-6">
          <a href="#story"
            className="text-sm font-semibold text-[var(--color-background)] bg-[var(--color-accent)] px-7 py-3.5 rounded-full hover:bg-[var(--color-accent-dim)] transition-colors duration-300">
            Read the Manifesto
          </a>
          <a href="#manifesto" className="text-sm text-[var(--color-muted)] hover:text-white transition-colors duration-300">
            Our Principles →
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-5">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[var(--color-muted)]" />
      </div>
    </section>
  );
}

/* ──────── Story ──────── */
function Story() {
  const { ref, visible } = useInView();
  return (
    <section id="story" ref={ref} className="py-32 md:py-40">
      <div className="section-divider mb-32 md:mb-40" />
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid md:grid-cols-12 gap-12 md:gap-6">
          <div className="md:col-span-5">
            <div className="label mb-4">The Story</div>
            <h2 className="display-lg">
              Born from<br />
              <span className="text-[var(--color-accent)]">the spotlight.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
            <p className="body-lg">
              MAINCHAR didn&apos;t come from a whitepaper or a VC pitch. It came from the
              moment you realized the main character of your life had been on autopilot —
              and you grabbed the wheel.
            </p>
            <p className="body-lg">
              Every scroll, every feed, every algorithm is designed to make you a spectator.
              Background noise. An extra in someone else&apos;s movie. MAINCHAR is the refusal
              to stay in the audience.
            </p>
            <p className="body-lg">
              This is for the ones who walked into a room and decided the energy was theirs
              to set. For the ones who stopped asking for permission and started
              writing their own script.
            </p>
            <div className="accent-line mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────── Manifesto ──────── */
function Manifesto() {
  const { ref, visible } = useInView();
  const items = [
    { num: "01", title: "You Were Never Meant to Blend In", text: "Every system is designed to flatten you into a statistic. MAINCHAR is the refusal. You are not a data point. You are the plot." },
    { num: "02", title: "The Spotlight Doesn't Find You", text: "You step into it. Nobody hands you the script. Nobody casts you. You walk on stage and the story bends around you. That's not arrogance — that's awareness." },
    { num: "03", title: "NPCs Don't Know They're NPCs", text: "The ones scrolling without thinking, buying without questioning, living without deciding — they're running on default settings. You chose to wake up." },
    { num: "04", title: "Main Characters Fail Forward", text: "Every wipeout is an arc. Every loss is a plot twist. The story doesn't end when you lose — it gets interesting. Protagonists don't quit. They pivot." },
  ];

  return (
    <section id="manifesto" ref={ref} className="py-32 md:py-40 bg-[var(--color-surface)]">
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="label mb-4">Manifesto</div>
        <h2 className="display-lg mb-20 md:mb-28">
          What we<br />
          <span className="text-[var(--color-accent)]">believe.</span>
        </h2>
        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={i} className="group border-t border-white/[0.06] py-10 md:py-14">
              <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
                <div className="md:col-span-1 text-[var(--color-accent)] text-sm font-mono font-semibold pt-1">{item.num}</div>
                <h3 className="md:col-span-4 display-md group-hover:text-[var(--color-accent)] transition-colors duration-500">{item.title}</h3>
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

/* ──────── Marquee ──────── */
function MarqueeSection() {
  return (
    <div className="py-16 md:py-24 overflow-hidden select-none">
      <div className="flex whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-12 pr-12">
            {["MAIN CHARACTER ENERGY.", "NO MORE BACKGROUND ROLES.", "MAIN CHARACTER ENERGY.", "NO MORE BACKGROUND ROLES.", "MAIN CHARACTER ENERGY.", "NO MORE BACKGROUND ROLES."].map((t, i) => (
              <span key={i} className={`text-5xl md:text-7xl font-black tracking-tight ${i % 2 === 0 ? "text-white/[0.04]" : "text-[var(--color-accent)]/20"}`}>
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ──────── Vision ──────── */
function Vision() {
  const { ref, visible } = useInView();
  return (
    <section id="vision" ref={ref} className="py-32 md:py-40">
      <div className="section-divider mb-32 md:mb-40" />
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-3xl">
          <div className="label mb-4">Vision</div>
          <h2 className="display-lg mb-10">
            This isn&apos;t a movement you join.<br />
            It&apos;s one you <span className="text-[var(--color-accent)]">become.</span>
          </h2>
          <div className="space-y-8">
            <p className="body-lg">
              MAINCHAR isn&apos;t asking you to follow someone. It&apos;s asking you to lead yourself.
              The protagonist doesn&apos;t need a roadmap — they need conviction, the nerve to
              act, and the self-awareness to know when the story is theirs to tell.
            </p>
            <p className="body-lg">
              The next chapter isn&apos;t planned. It&apos;s lived. By whoever shows up ready
              to own it.
            </p>
          </div>
          <div className="accent-line mt-12" />
        </div>
      </div>
    </section>
  );
}

/* ──────── CTA ──────── */
function Join() {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} className="py-32 md:py-40 bg-[var(--color-surface)]">
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="display-lg mb-6">
          Still scrolling?<br />
          <span className="text-[var(--color-accent)]">Good.</span>
        </h2>
        <p className="body-lg max-w-lg mx-auto mb-12">
          Main characters don&apos;t skim. They commit. If you&apos;re still here,
          you already know which role you&apos;re playing.
        </p>
        <a href="https://x.com/MainCharCoin" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 text-sm font-semibold text-[var(--color-background)] bg-[var(--color-accent)] px-8 py-4 rounded-full hover:bg-[var(--color-accent-dim)] transition-colors duration-300">
          <span>𝕏</span>
          <span>Follow on X</span>
        </a>
      </div>
    </section>
  );
}

/* ──────── Footer ──────── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo size={22} />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/60">MAINCHAR</span>
        </div>
        <p className="text-xs text-[var(--color-muted)]">
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
      <Story />
      <Manifesto />
      <MarqueeSection />
      <Vision />
      <Join />
      <Footer />
    </main>
  );
}
