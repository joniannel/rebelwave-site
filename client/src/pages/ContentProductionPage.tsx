import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Video, Sparkles, CheckCircle2, Film, Mic, Play, Camera, Palette, Layers, ChevronRight, Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/RW_White&Gold_e3f64ab9.webp";

export default function ContentProductionPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Production Flow", href: "#workflow" },
    { label: "Formats", href: "#formats" },
    { label: "Creative Philosophy", href: "#philosophy" },
  ];

  return (
    <div className="min-h-screen bg-[#070E17] text-white selection:bg-[#C9A84C]/30 selection:text-white font-['DM_Sans',sans-serif]">
      {/* Top Navbar with Section Switcher */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#091422]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={LOGO_URL} alt="RebelWAVE" className="h-9 w-auto" />
              <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-400/20 font-['Montserrat',sans-serif] font-bold">
                Content Studio
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/70 hover:text-[#C9A84C] font-medium transition-colors font-['Montserrat',sans-serif]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action + Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* The switch button to Advertising track */}
            <Link href="/advertising">
              <button
                type="button"
                className="px-3.5 py-2 rounded border border-[#C9A84C]/40 bg-[#C9A84C]/10 text-[#F3D78A] hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-all text-xs font-semibold font-['Montserrat',sans-serif] flex items-center gap-1.5 shadow-sm"
              >
                <span>Switch to Advertising</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>

            <Link href="/book">
              <button
                type="button"
                className="px-4 py-2 rounded bg-white text-[#091422] hover:bg-slate-100 transition-colors text-xs font-bold font-['Montserrat',sans-serif]"
              >
                Book a Creative Call
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white/80 hover:text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1626] border-b border-white/10 px-6 py-6 space-y-4">
            <div className="pb-3 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-blue-300 font-semibold">
                Content Studio Menu
              </span>
            </div>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-white/80 hover:text-[#C9A84C] font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link href="/advertising">
                <button
                  type="button"
                  className="w-full py-2.5 px-4 rounded border border-[#C9A84C]/40 bg-[#C9A84C]/10 text-[#F3D78A] text-xs font-semibold text-center"
                >
                  Switch to Advertising Page
                </button>
              </Link>
              <Link href="/book">
                <button
                  type="button"
                  className="w-full py-2.5 px-4 rounded bg-[#C9A84C] text-[#091422] text-xs font-bold text-center"
                >
                  Book a Creative Call
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-purple-600/10 to-transparent blur-[120px]" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold font-['Montserrat',sans-serif] tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Full-Stack Content Production</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Montserrat',sans-serif] text-white tracking-tight leading-[1.15] mb-6">
              Visual Content Crafted To <br />
              <span className="text-[#C9A84C]">Command Attention</span> & Spark Growth.
            </h1>

            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-8 font-['DM_Sans',sans-serif]">
              We script, direct, shoot, and polish dynamic media assets engineered for modern feeds. From organic brand building to high-intent video campaigns, RebelWAVE delivers cinema-grade clarity with conversion-first strategy.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/book">
                <button
                  type="button"
                  className="btn-gold flex items-center gap-2 text-sm font-semibold py-3 px-6 rounded"
                >
                  <span>Plan a Content Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link href="/advertising">
                <button
                  type="button"
                  className="px-6 py-3 rounded border border-white/20 hover:border-white/40 bg-white/[0.04] text-white/90 hover:text-white text-sm font-medium transition-all"
                >
                  Explore Advertising Track
                </button>
              </Link>
            </div>

            {/* Credibility highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/10 text-left">
              <div>
                <p className="text-2xl font-bold font-['Montserrat',sans-serif] text-[#C9A84C]">Studio-Grade</p>
                <p className="text-xs text-white/50 mt-1">4K filming, lighting & audio engineering</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-['Montserrat',sans-serif] text-white">Full Post-Pipeline</p>
                <p className="text-xs text-white/50 mt-1">Pacing, motion graphics & sound design</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl font-bold font-['Montserrat',sans-serif] text-blue-300">Fast Turnaround</p>
                <p className="text-xs text-white/50 mt-1">Batch production to keep channels loaded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Formats Section */}
      <section id="formats" className="py-20 bg-[#0B1522] border-y border-white/5">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] font-semibold mb-2 font-['Montserrat',sans-serif]">
              Tailored Deliverables
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat',sans-serif]">
              Engineered For Every Channel
            </h2>
            <p className="text-sm md:text-base text-white/60 mt-2">
              Every format has its own rhythm. We adapt visual composition, hooks, and narrative structures specifically for where your audience spends time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Film,
                title: "Brand Authority Reels",
                desc: "Punchy 30-90s vertical videos highlighting your leadership, case studies, and unique process.",
                tags: ["Vertical 9:16", "Direct Voice", "Subtitles"],
              },
              {
                icon: Camera,
                title: "On-Site Client Spotlights",
                desc: "High-production testimonial and transformation shoots that turn happy clients into your best salespeople.",
                tags: ["Social Proof", "Docu-Style", "B-Roll"],
              },
              {
                icon: Mic,
                title: "Founder Keynotes & Podcasts",
                desc: "Multi-camera studio setups cut into micro-clips to establish deep organic credibility across platforms.",
                tags: ["Studio Audio", "Snackable Clips", "Thought Leadership"],
              },
              {
                icon: Palette,
                title: "Creative Ad Production",
                desc: "Fresh, iterative creatives tailored for ad accounts that need steady testing variations.",
                tags: ["Hook Variations", "Visual Angles", "CTR Optimization"],
              },
              {
                icon: Layers,
                title: "Educational Video Guides",
                desc: "Explainers that demystify your process and guide prospects smoothly down your sales funnel.",
                tags: ["Lead Conversion", "Screen + Live Action", "Step-by-Step"],
              },
              {
                icon: Video,
                title: "High-End Commercial Assets",
                desc: "Signature brand films crafted for website headers, pitch decks, and large-screen presentations.",
                tags: ["Cinematic", "Soundscape", "Brand Identity"],
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-7 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C9A84C]/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] mb-5">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-['Montserrat',sans-serif] text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6 font-['DM_Sans',sans-serif]">
                    {f.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {f.tags.map((t, ti) => (
                    <span
                      key={ti}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/5 text-white/60 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capabilities / Process */}
      <section id="capabilities" className="py-24 bg-[#091422]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] font-semibold mb-3 font-['Montserrat',sans-serif]">
                End-To-End Studio
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat',sans-serif] text-white leading-tight mb-6">
                From Raw Concepts To <br />
                <span className="text-[#C9A84C]">Polished Master Files</span>
              </h2>
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8">
                Great content requires deliberate preparation and disciplined post-production. You won’t need to juggle freelance editors, scriptwriters, and colorists—we manage every step under one roof.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Strategic Scripting & Storyboards",
                    desc: "Hooks, pacing, and calls-to-action planned before pressing record.",
                  },
                  {
                    title: "Direction & On-Camera Coaching",
                    desc: "Guidance that keeps you and your team natural, relaxed, and authoritative on camera.",
                  },
                  {
                    title: "Precision Editing & Sound Design",
                    desc: "Snappy pacing, subtitles, custom audio beds, and motion graphics that retain viewers.",
                  },
                  {
                    title: "Omnichannel Asset Packaging",
                    desc: "Delivered ready-to-post in horizontal, vertical, and square aspect ratios with thumbnails.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] font-bold text-xs flex items-center justify-center flex-shrink-0 font-['Montserrat',sans-serif]">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold font-['Montserrat',sans-serif] text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/60 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual showcase card */}
            <div className="relative">
              <div className="rounded-2xl p-8 bg-gradient-to-br from-[#101F31] to-[#0A1624] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-white/40 ml-2 font-mono">rebelwave_creative_suite</span>
                  </div>
                  <span className="text-xs text-[#C9A84C] font-mono">ACTIVE PIPELINE</span>
                </div>

                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                    <p className="text-xs text-white/40 uppercase tracking-widest font-mono mb-1">Current Output Mode</p>
                    <p className="text-lg font-bold font-['Montserrat',sans-serif] text-white">Batch Content Cycles</p>
                    <p className="text-xs text-white/60 mt-1">One half-day session yields 15-30 strategic video deliverables.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                    <p className="text-xs text-white/40 uppercase tracking-widest font-mono mb-1">Synergy With Advertising</p>
                    <p className="text-sm text-white/80 leading-relaxed">
                      High-performing organic video formats are immediately handed over to our advertising team to be tested as paid creatives.
                    </p>
                  </div>

                  <Link href="/book">
                    <button
                      type="button"
                      className="w-full py-3 rounded bg-[#C9A84C] text-[#0D1B2A] font-bold text-xs font-['Montserrat',sans-serif] uppercase tracking-wider hover:bg-[#E2C06A] transition-colors"
                    >
                      Schedule Production Planning Session
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Promo Callout for Advertising Engine */}
      <section className="py-16 bg-[#0E1A29] border-t border-white/10">
        <div className="container">
          <div className="p-8 md:p-10 rounded-2xl bg-[#09131F] border border-[#C9A84C]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold">
                Looking For Paid Customer Acquisition?
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-['Montserrat',sans-serif] text-white mt-1">
                Explore The RebelWAVE Advertising System
              </h3>
              <p className="text-sm text-white/60 mt-2 max-w-xl">
                Ready to turn viewer interest into predictable qualified leads? Browse our full lead generation pipelines, Meta ad campaigns, and 24/7 AI voice lead handling.
              </p>
            </div>
            <Link href="/advertising">
              <button
                type="button"
                className="btn-gold whitespace-nowrap text-xs font-bold py-3.5 px-6"
              >
                <span>Switch to Advertising Site</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#060D15] text-xs text-white/40 border-t border-white/5">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="RebelWAVE" className="h-7 w-auto opacity-70" />
            <span>© {new Date().getFullYear()} RebelWAVE Digital Marketing. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/advertising" className="hover:text-[#C9A84C] transition-colors">
              Advertising & Lead Gen
            </Link>
            <Link href="/content-production" className="text-white font-medium">
              Content Production
            </Link>
            <Link href="/book" className="hover:text-[#C9A84C] transition-colors">
              Book Call
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
