import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Menu,
  Play,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/RW_White&Gold_e3f64ab9.webp";
const HERO_IMAGE = "/manus-storage/rebelwave-content-hero_f218af29.jpg";
const EDITING_IMAGE = "/manus-storage/rebelwave-editing-suite_5bb47c8a.jpg";

type ShowreelItem = {
  id: string;
  title: string;
  format: string;
  tone: string;
  posterUrl?: string;
  videoUrl?: string;
};

/**
 * Replace posterUrl and videoUrl in this data set once finished edits are supplied.
 * The fields map directly to Shopify section block settings: title, format, poster, video.
 */
const SHOWREEL_ITEMS: ShowreelItem[] = [
  { id: "work-01", title: "Showreel Slot 01", format: "Commercial / Brand Film", tone: "gold" },
  { id: "work-02", title: "Showreel Slot 02", format: "Social-First Series", tone: "blue" },
  { id: "work-03", title: "Showreel Slot 03", format: "Founder Story", tone: "violet" },
  { id: "work-04", title: "Showreel Slot 04", format: "Campaign Edit", tone: "gold" },
  { id: "work-05", title: "Showreel Slot 05", format: "AI-Enhanced Concept", tone: "blue" },
];

const navItems = [
  { label: "Selected Work", href: "#work" },
  { label: "The Range", href: "#range" },
  { label: "AI Studio", href: "#ai-studio" },
  { label: "Process", href: "#process" },
];

const toneStyles = {
  gold: {
    flare: "radial-gradient(circle at 74% 16%, rgba(210,172,80,0.46), transparent 28%), linear-gradient(136deg, #16202e 0%, #0a111b 58%, #201b0d 100%)",
    label: "text-[#e8c864]",
    border: "border-[#d6b95d]/35",
  },
  blue: {
    flare: "radial-gradient(circle at 68% 16%, rgba(86,141,229,0.48), transparent 31%), linear-gradient(136deg, #111d31 0%, #080f19 60%, #0b1e37 100%)",
    label: "text-[#83b5ff]",
    border: "border-blue-400/35",
  },
  violet: {
    flare: "radial-gradient(circle at 69% 17%, rgba(159,104,217,0.47), transparent 31%), linear-gradient(136deg, #1c1630 0%, #0a0d17 60%, #23122c 100%)",
    label: "text-[#c9a3ff]",
    border: "border-violet-400/35",
  },
};

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#070c13]/90 py-4 backdrop-blur-xl" : "py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Return to RebelWAVE service selection">
          <img src={LOGO_URL} alt="RebelWAVE" className="h-8 w-auto md:h-9" />
          <span className="hidden border border-blue-300/25 bg-blue-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 sm:inline-block">
            Content Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Content Studio navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold tracking-wide text-white/60 transition-colors hover:text-[#e8c864]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/advertising"
            className="inline-flex items-center gap-2 border border-[#d6b95d]/45 bg-[#d6b95d]/[0.05] px-3.5 py-2 text-xs font-semibold text-[#f0d886] transition-colors hover:bg-[#d6b95d] hover:text-[#0c1118]"
          >
            Advertising
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href="#contact"
            className="bg-[#f7f2e9] px-4 py-2 text-xs font-bold text-[#0b111a] transition-colors hover:bg-[#d6b95d]"
          >
            Start a project
          </a>
        </div>

        <button
          type="button"
          className="p-1 text-white lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="container mt-4 border-y border-white/10 bg-[#0b121d] py-5 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Content Studio mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-medium text-white/80"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Link
              href="/advertising"
              onClick={() => setMenuOpen(false)}
              className="border border-[#d6b95d]/45 px-3 py-3 text-center text-xs font-semibold text-[#f0d886]"
            >
              Advertising
            </Link>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-[#f7f2e9] px-3 py-3 text-center text-xs font-bold text-[#0b111a]">
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function WorkTile({ item, index }: { item: ShowreelItem; index: number }) {
  const tone = toneStyles[item.tone as keyof typeof toneStyles];
  const [playing, setPlaying] = useState(false);

  return (
    <article className="group relative w-[min(79vw,330px)] shrink-0 snap-start overflow-hidden border border-white/10 bg-[#0b121d] sm:w-[340px]">
      <div className="relative aspect-[4/5] overflow-hidden" style={{ background: item.posterUrl ? undefined : tone.flare }}>
        {item.posterUrl ? (
          <img src={item.posterUrl} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(113deg,transparent_0%,rgba(255,255,255,0.07)_44%,transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_27%_72%,rgba(255,255,255,0.09)_0_1px,transparent_1.5px)] bg-[length:14px_14px] opacity-25" />
            <div className="absolute inset-x-8 top-8 h-px bg-white/20" />
            <div className="absolute inset-x-8 top-9 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.22em] text-white/45">
              <span>RebelWAVE</span>
              <span>Video slot {String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`flex h-16 w-16 items-center justify-center rounded-full border ${tone.border} bg-black/20 backdrop-blur-sm transition duration-300 group-hover:scale-110`}>
                <Play className={`ml-1 h-5 w-5 ${tone.label}`} fill="currentColor" />
              </div>
            </div>
            <div className="absolute inset-x-8 bottom-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">Ready for your export</p>
              <p className="mt-2 text-xl font-semibold leading-tight text-white/85">{item.format}</p>
            </div>
          </>
        )}
        {item.videoUrl && (
          <button
            type="button"
            aria-label={`Play ${item.title}`}
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/10 transition hover:bg-black/25"
          >
            <span className={`flex h-16 w-16 items-center justify-center rounded-full border ${tone.border} bg-black/35 backdrop-blur-sm`}>
              <Play className={`ml-1 h-5 w-5 ${tone.label}`} fill="currentColor" />
            </span>
          </button>
        )}
        {playing && item.videoUrl && (
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay controls playsInline src={item.videoUrl} />
        )}
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
        <div>
          <p className={`text-[10px] font-bold uppercase tracking-[0.19em] ${tone.label}`}>{item.format}</p>
          <h3 className="mt-1 text-sm font-semibold text-white">{item.title}</h3>
        </div>
        <span className="text-[10px] uppercase tracking-[0.15em] text-white/35">{item.videoUrl ? "Play" : "Slot"}</span>
      </div>
    </article>
  );
}

function Showreel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "right" ? 365 : -365,
      behavior: "smooth",
    });
  };

  return (
    <section id="work" className="border-y border-white/10 bg-[#0a1019] py-20 md:py-28">
      <div className="container">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#d6b95d]">Selected Work</p>
            <h2 className="max-w-lg text-4xl font-bold leading-[0.98] tracking-tight text-white md:text-5xl">
              The work should make the introduction.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            A home for commercial work, social-native edits, founder stories, and AI-expanded visual concepts.
          </p>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-5"
            aria-label="Selected work carousel"
          >
            {SHOWREEL_ITEMS.map((item, index) => (
              <WorkTile item={item} index={index} key={item.id} />
            ))}
          </div>
          <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
            <p className="text-xs text-white/40">Video slots are ready for finished RebelWAVE edits.</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard("left")}
                aria-label="Previous work"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/75 transition hover:border-[#d6b95d] hover:text-[#d6b95d]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard("right")}
                aria-label="Next work"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/75 transition hover:border-[#d6b95d] hover:text-[#d6b95d]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContentProductionPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070c13] font-['DM_Sans',sans-serif] text-white selection:bg-[#d6b95d]/40">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative isolate min-h-[780px] overflow-hidden border-b border-white/10 md:min-h-[830px]">
          <img src={HERO_IMAGE} alt="Cinematic production studio setup" className="absolute inset-0 -z-20 h-full w-full object-cover object-[66%_center]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,12,19,0.98)_0%,rgba(7,12,19,0.93)_35%,rgba(7,12,19,0.42)_70%,rgba(7,12,19,0.18)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(7,12,19,0.96)_0%,transparent_35%)]" />
          <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#d6b95d]/10 blur-[120px]" />

          <div className="container flex min-h-[780px] items-end pb-16 pt-36 md:min-h-[830px] md:pb-20 md:pt-44">
            <div className="max-w-3xl">
              <div className="mb-7 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.23em] text-white/60">
                <span className="inline-flex items-center gap-2 border border-white/15 bg-black/15 px-3 py-2 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d6b95d]" />
                  RebelWAVE Content Studio
                </span>
                <span className="border-l border-white/20 pl-3 text-[#e9ce78]">10+ years in production</span>
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[0.9] tracking-[-0.055em] text-[#f7f2e9] sm:text-6xl md:text-7xl lg:text-[82px]">
                Make what
                <br />
                people <span className="italic text-[#e3c25f]">stop</span> for.
              </h1>

              <div className="mt-8 grid max-w-2xl gap-6 border-t border-white/15 pt-6 md:grid-cols-[1fr_auto] md:items-end">
                <p className="max-w-lg text-base leading-relaxed text-white/72 md:text-lg">
                  Full productions. Social-native content. AI-powered visual worlds. Made for brands of every scale that want to be impossible to ignore.
                </p>
                <a href="#work" className="group inline-flex items-center gap-3 text-sm font-bold text-white transition-colors hover:text-[#e3c25f]">
                  View selected work
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition group-hover:border-[#d6b95d] group-hover:bg-[#d6b95d] group-hover:text-[#070c13]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-5 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 md:flex">
            <span>Studio craft</span>
            <span className="h-px w-10 bg-white/20" />
            <span>AI expansion</span>
          </div>
        </section>

        <Showreel />

        {/* Range */}
        <section id="range" className="bg-[#f2eee7] py-20 text-[#0a1019] md:py-28">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#946f18]">The Range</p>
                <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.045em] md:text-5xl">
                  One studio.<br />
                  Many ways in.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#425063]">
                  From highly structured shoots to nimble, feed-native ideas, we right-size the production—not the ambition.
                </p>
              </div>

              <div className="divide-y divide-[#0a1019]/15 border-y border-[#0a1019]/15">
                {[
                  {
                    index: "01",
                    title: "Studio & Commercial",
                    detail: "Brand films, launch campaigns, product stories, and end-to-end productions with a cinematic point of view.",
                    icon: Clapperboard,
                  },
                  {
                    index: "02",
                    title: "Social-First",
                    detail: "Founder-led content, recurring short-form series, product education, and human stories built for the speed of culture.",
                    icon: Camera,
                  },
                  {
                    index: "03",
                    title: "AI-Enabled Worlds",
                    detail: "Higgsfield-assisted concept development and visual expansion for ideas that need more room to move.",
                    icon: WandSparkles,
                  },
                ].map((item) => (
                  <article key={item.index} className="group grid gap-4 py-7 sm:grid-cols-[58px_1fr_auto] sm:items-start sm:gap-7">
                    <span className="text-xs font-bold tracking-[0.18em] text-[#946f18]">{item.index}</span>
                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.025em]">{item.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#4c5766]">{item.detail}</p>
                    </div>
                    <item.icon className="hidden h-6 w-6 text-[#a88229] transition-transform duration-300 group-hover:rotate-[-10deg] sm:block" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hybrid craft / AI studio */}
        <section id="ai-studio" className="bg-[#0a1019] py-20 md:py-28">
          <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative min-h-[540px] overflow-hidden border border-white/10 bg-[#111a26] sm:min-h-[620px]">
              <img src={EDITING_IMAGE} alt="Professional video editing and color grading suite" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,25,0.02)_20%,rgba(10,16,25,0.94)_100%)]" />
              <div className="absolute inset-x-6 bottom-6 border border-white/15 bg-[#0a1019]/75 p-4 backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:p-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e0c56e]">Human taste, expanded</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">Every idea is considered through real direction, real editing, and a clearer creative point of view.</p>
                  </div>
                  <Sparkles className="h-5 w-5 shrink-0 text-[#e0c56e]" />
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#d6b95d]">The AI Studio</p>
              <h2 className="max-w-lg text-4xl font-bold leading-[0.96] tracking-[-0.045em] text-white md:text-5xl">
                A camera crew when it matters. A creative lab when it helps.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/62">
                AI does not replace the point of view. It gives the point of view more places to go—from faster creative testing to visual environments that would be difficult to build conventionally.
              </p>

              <div className="mt-9 divide-y divide-white/10 border-y border-white/10">
                {[
                  ["Real production craft", "Direction, cinematography, lighting, sound, and an edit that knows when to hold a beat."],
                  ["Higgsfield-powered expansion", "A primary AI-video workflow for exploring bigger visual concepts and creating additional versions with intent."],
                  ["Built around the idea", "Corporate teams and small businesses get the right production footprint for the story—not a one-size package."],
                ].map(([title, description], index) => (
                  <div className="grid grid-cols-[34px_1fr] gap-4 py-5" key={title}>
                    <span className="text-xs font-bold text-[#d6b95d]">0{index + 1}</span>
                    <div>
                      <h3 className="text-base font-bold text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/50">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-y border-white/10 bg-[#101925] py-20 md:py-24">
          <div className="container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#d6b95d]">How it moves</p>
                <h2 className="text-4xl font-bold leading-none tracking-[-0.04em] text-white md:text-5xl">Concept. Capture. Expand.</h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/50">A simple rhythm that protects the creative idea from the first conversation to the final export.</p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                ["01", "Concept", "Find the visual territory, the tone, and the reason the piece deserves attention."],
                ["02", "Capture", "Build the shoot around the story—full studio, on-location, or nimble social production."],
                ["03", "Cut / Expand", "Edit the strongest version first, then use AI where it creates a meaningful next possibility."],
              ].map(([number, title, copy]) => (
                <article key={number} className="border border-white/10 bg-[#0a1019] p-7 transition-colors hover:border-[#d6b95d]/45">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#d6b95d]">{number}</span>
                  <h3 className="mt-10 text-3xl font-bold tracking-[-0.035em] text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden bg-[#e2bf5d] px-0 py-20 text-[#0a1019] md:py-28">
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full border-[52px] border-[#f7e4a1]/40" />
          <div className="container relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#5d4611]">Start with the idea</p>
              <h2 className="max-w-3xl text-5xl font-bold leading-[0.9] tracking-[-0.055em] md:text-7xl">Let’s make something people remember.</h2>
            </div>
            <div className="md:pb-1">
              <p className="max-w-sm text-base leading-relaxed text-[#34280d]">Tell us the idea, the moment, or the ambition. We’ll find the right way to bring it to life.</p>
              <Link href="/book" className="mt-7 inline-flex items-center gap-3 bg-[#0a1019] px-6 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
                Start a creative conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#070c13] py-9 text-xs text-white/40">
        <div className="container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="RebelWAVE" className="h-7 w-auto opacity-75" />
            <span>© {new Date().getFullYear()} RebelWAVE Digital Marketing</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/advertising" className="inline-flex items-center gap-2 transition-colors hover:text-[#d6b95d]">
              <ArrowLeft className="h-3.5 w-3.5" />
              Advertising & Lead Gen
            </Link>
            <a href="#work" className="transition-colors hover:text-[#d6b95d]">Selected Work</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
