"use client";

import Logo from "@/components/Logo";

const MANIFESTO = [
  {
    num: "01",
    title: "You were never meant to blend in",
    text: "Every algorithm, every feed, every system is designed to flatten you into a statistic. MAINCHAR is the refusal. You are not a data point. You are the plot.",
  },
  {
    num: "02",
    title: "The spotlight doesn't find you — you step into it",
    text: "Nobody hands you the script. Nobody casts you. You walk on stage and the story bends around you. That's not arrogance. That's awareness.",
  },
  {
    num: "03",
    title: "NPCs don't know they're NPCs",
    text: "The ones scrolling without thinking, buying without questioning, living without deciding — they're running on default settings. You chose to wake up.",
  },
  {
    num: "04",
    title: "Main characters fail forward",
    text: "Every wipeout is an arc. Every loss is a plot twist. The story doesn't end when you lose — it gets interesting. Protagonists don't quit. They pivot.",
  },
];

const TRAITS = [
  { icon: "👁", label: "Self-aware", desc: "Sees the matrix. Moves differently." },
  { icon: "🎬", label: "Protagonist energy", desc: "Walks into rooms like the BGM just started." },
  { icon: "🧠", label: "Plot armor", desc: "Survives what should've ended them." },
  { icon: "⚡", label: "Main character aura", desc: "Undeniable. Unexplainable. Unmistakable." },
];

export default function Home() {
  return (
    <>
      <div className="spotlight" />
      <div className="grain" />

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-darker/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={32} />
            <span className="font-bold text-lg tracking-tight">MAINCHAR</span>
          </div>
          <a
            href="https://x.com/MainCharCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all"
          >
            Follow
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="fade-up fade-up-1 mb-6">
            <Logo size={72} className="mx-auto glow-pulse rounded-full" />
          </div>
          <p className="fade-up fade-up-1 text-primary/80 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            The Main Character Protocol
          </p>
          <h1 className="fade-up fade-up-2 text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            You are the{" "}
            <span className="hero-underline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              main character
            </span>
          </h1>
          <p className="fade-up fade-up-3 text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
            Stop living someone else&apos;s storyline. The world doesn&apos;t happen{" "}
            <em>to</em> you — it happens <em>because</em> of you.
          </p>
          <div className="fade-up fade-up-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://x.com/MainCharCoin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gradient-to-r from-primary to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
            >
              Join the Movement →
            </a>
          </div>
        </div>
      </section>

      {/* Traits */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-20" />
          <p className="text-center text-primary/60 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Recognizing the signs
          </p>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 tracking-tight">
            Main Character Traits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAITS.map((t, i) => (
              <div key={i} className="manifest-card rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-bold text-white mb-2">{t.label}</h3>
                <p className="text-sm text-gray-400">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-20" />
          <p className="text-center text-primary/60 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            The Manifesto
          </p>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 tracking-tight">
            Why MAINCHAR Exists
          </h2>
          <div className="space-y-12">
            {MANIFESTO.map((m) => (
              <div key={m.num} className="group">
                <div className="flex items-start gap-6">
                  <span className="text-primary/30 font-mono text-sm font-bold mt-1 shrink-0">
                    {m.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-divider mb-20" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Your story starts{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              now
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
            The world is full of side characters waiting for permission. 
            This is yours.
          </p>
          <a
            href="https://x.com/MainCharCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity tracking-wide glow-pulse"
          >
            Step Into the Spotlight →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo size={20} />
            <span className="text-sm text-gray-500 font-medium">MAINCHAR</span>
          </div>
          <p className="text-xs text-gray-600">
            You are the main character. Act like it.
          </p>
          <a
            href="https://x.com/MainCharCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-primary transition-colors"
          >
            𝕏
          </a>
        </div>
      </footer>
    </>
  );
}
