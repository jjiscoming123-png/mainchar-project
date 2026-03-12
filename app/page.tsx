"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";

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

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="spotlight-cone animate-spotlight" />
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
          You&apos;ve been watching other people live. Time to hit record on your own shit.
        </p>
        <div className="animate-fade-up delay-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#story"
            className="text-sm font-semibold text-[var(--color-background)] bg-[var(--color-gold)] px-7 py-3.5 rounded-full hover:bg-[var(--color-gold-dim)] transition-colors duration-300">
            Read the Script
          </a>
        </div>
      </div>

      <div className="absolute bottom-[14vh] left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-5">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[var(--color-gold)]/30" />
      </div>
    </section>
  );
}

function Story() {
  const { ref, visible } = useInView();
  return (
    <section id="story" ref={ref} className="py-32 md:py-40">
      <div className="section-divider mb-20 md:mb-28" />
      <div className={`max-w-[700px] mx-auto px-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="label text-center mb-4">Scene I</div>
        <h2 className="display-lg text-center mb-16 text-white">
          The <span className="text-[var(--color-gold)] italic">Awakening</span>
        </h2>
        <div className="screenplay bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-8 md:p-12">
          <p className="direction">INT. YOUR APARTMENT — 3AM</p>
          <p>Phone screen glowing. Another day of watching someone else&apos;s highlight reel. Wondering why their life looks like a movie and yours looks like the B-roll they cut.</p>
          <p className="direction mt-6">YOU CLOSE THE APP.</p>
          <p>Not because some motivational quote told you to. Because you got tired of being in the audience of your own life.</p>
          <p className="character">YOU</p>
          <p className="dialogue">Fuck it. My turn.</p>
          <p className="direction mt-6">SMASH CUT TO BLACK.</p>
        </div>
        <div className="gold-line mx-auto mt-12" />
      </div>
    </section>
  );
}

function Manifesto() {
  const { ref, visible } = useInView();
  const items = [
    { num: "I", title: "Nobody's coming to save you", text: "There's no fairy godmother. No mentor montage. No one's writing you into their story. You either step up or you stay background noise forever. That's it." },
    { num: "II", title: "NPCs are everywhere", text: "Same opinions. Same feed. Same takes. Same life on repeat. Not bad people — just people who never questioned the script they were handed. You're reading this, so probably not you." },
    { num: "III", title: "Main characters eat shit too", text: "The difference isn't that you don't fail. It's that when you do, it's a plot twist — not the ending. Rocky lost round one. Walter White was a high school teacher. Your worst moment is just act one." },
    { num: "IV", title: "The movie is already rolling", text: "You don't get a trailer or a release date. It started the day you were born and the cameras haven't stopped. The only question is whether you're going to keep reading lines someone else wrote." },
  ];

  return (
    <section id="manifesto" ref={ref} className="py-32 md:py-40 bg-[var(--color-surface)]">
      <div className={`max-w-[1100px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-20 md:mb-28">
          <div className="label mb-4">The Manifesto</div>
          <h2 className="display-lg text-white">
            Four things <span className="text-[var(--color-gold)] italic">nobody tells you</span>
          </h2>
        </div>
        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={i} className="group border-t border-white/[0.06] py-10 md:py-14">
              <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
                <div className="md:col-span-1 text-[var(--color-gold)] text-sm font-bold pt-1">{item.num}</div>
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

function Finale() {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[40vw] h-[120%] bg-[conic-gradient(from_0deg_at_50%_0%,transparent_38%,rgba(212,168,67,0.04)_48%,rgba(168,85,247,0.05)_50%,rgba(212,168,67,0.04)_52%,transparent_62%)] pointer-events-none" />
      <div className={`relative z-10 max-w-[800px] mx-auto px-6 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="label mb-6">Credits</div>
        <h2 className="display-lg text-white mb-6">
          Written, directed, and starring<br />
          <span className="text-[var(--color-gold)] italic">you.</span>
        </h2>
        <p className="body-lg max-w-md mx-auto mb-12">
          No one else is going to make your movie for you. You already know that. The question is when you start shooting.
        </p>
        <a href="https://x.com/MainCharCoin" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 text-sm font-semibold text-[var(--color-background)] bg-[var(--color-gold)] px-8 py-4 rounded-full hover:bg-[var(--color-gold-dim)] transition-colors duration-300">
          <span>𝕏</span>
          <span>Follow on X</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-gold)]/[0.06] py-10 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo size={20} />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-gold)]/40">MAINCHAR</span>
        </div>
        <p className="text-[11px] text-[var(--color-muted)]/50 italic" style={{ fontFamily: "var(--font-display)" }}>
          Your movie. Your rules.
        </p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="noise">
      <Nav />
      <Hero />
      <Story />
      <Manifesto />
      <Finale />
      <Footer />
    </main>
  );
}
