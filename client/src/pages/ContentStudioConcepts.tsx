import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/RW_White&Gold_e3f64ab9.webp";
const EDITORIAL_HERO = "/manus-storage/editorial-reel-hero_faadb298.jpg";
const LIVING_FEED = "/manus-storage/living-feed-social_4dcabe61.jpg";
const HYBRID_LAB = "/manus-storage/hybrid-lab-studio_bde9e903.jpg";

function Hairline() {
  return <div className="h-px w-full bg-current opacity-20" />;
}

function DesignNote({ children }: { children: ReactNode }) {
  return <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-white/45">{children}</span>;
}

export default function ContentStudioConcepts() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1ea] selection:bg-[#e1bf62]/40">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link href="/" aria-label="Return to RebelWAVE service selection">
            <img src={LOGO_URL} alt="RebelWAVE" className="h-7 w-auto" />
          </Link>
          <div className="hidden items-center gap-3 sm:flex">
            <DesignNote>Content Studio — visual direction board</DesignNote>
            <span className="h-1.5 w-1.5 rounded-full bg-[#e1bf62]" />
            <DesignNote>Three Shopify-ready concepts</DesignNote>
          </div>
          <a href="#concept-a" className="inline-flex items-center gap-2 text-xs font-bold text-[#e7c96f] hover:text-white">
            View directions <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main>
        <section className="container py-14 md:py-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#e1bf62]">A new visual language</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.88] tracking-[-0.065em] text-white md:text-7xl">
              Three ways RebelWAVE could <span className="font-serif italic font-medium text-[#e1bf62]">feel</span> like a real production studio.
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-white/55 md:pb-2">
              These are visual directions, not content drafts. The work should be the lead character; copy and calls to action should stay in the background.
            </p>
          </div>
          <div className="mt-12 grid gap-3 border-t border-white/15 pt-4 sm:grid-cols-3">
            {[
              ["01", "Dark Editorial Reel", "Premium / restrained / cinematic"],
              ["02", "Living Work Feed", "Current / social / energetic"],
              ["03", "Hybrid Studio / Lab", "Craft-led / experimental / AI-native"],
            ].map(([number, title, description]) => (
              <a key={number} href={`#concept-${number === "01" ? "a" : number === "02" ? "b" : "c"}`} className="group flex items-center justify-between border-b border-white/10 py-3 text-left sm:border-b-0 sm:border-r sm:pr-3">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] text-[#e1bf62]">{number}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{title}</p>
                  <p className="mt-0.5 text-xs text-white/40">{description}</p>
                </div>
                <ArrowRight className="mr-1 h-4 w-4 text-white/35 transition-transform group-hover:translate-x-1 group-hover:text-[#e1bf62]" />
              </a>
            ))}
          </div>
        </section>

        {/* Concept A */}
        <section id="concept-a" className="border-y border-white/10 bg-[#060606] py-8 md:py-12">
          <div className="container mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-baseline gap-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#e1bf62]">01</span>
              <h2 className="text-xl font-bold tracking-[-0.03em] text-white">Dark Editorial Reel</h2>
            </div>
            <DesignNote>Recommended core direction</DesignNote>
          </div>

          <div className="container">
            <div className="relative isolate min-h-[620px] overflow-hidden border border-white/10 bg-[#111] md:min-h-[720px]">
              <img src={EDITORIAL_HERO} alt="Concept preview: editorial production shoot" className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center]" />
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.78)_34%,rgba(0,0,0,0.06)_75%)]" />
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.84)_0%,transparent_47%)]" />
              <div className="absolute left-7 top-7 flex items-center gap-3 md:left-10 md:top-10">
                <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">RebelWAVE Content Studio</span>
                <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-[#e1bf62] sm:block">10+ years in production</span>
              </div>
              <div className="absolute inset-x-7 bottom-8 max-w-3xl md:inset-x-10 md:bottom-12">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#e1bf62]">Direction A / First screen</p>
                <h3 className="max-w-2xl text-5xl font-bold leading-[0.85] tracking-[-0.065em] text-[#f6f2ea] md:text-7xl lg:text-[86px]">
                  Make the moment
                  <br />
                  <span className="font-serif font-medium italic text-[#e1bf62]">matter.</span>
                </h3>
                <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-white/20 pt-5">
                  <p className="max-w-sm text-sm leading-relaxed text-white/65">A single statement. Full-frame work. A quiet invitation into the showreel.</p>
                  <span className="inline-flex items-center gap-3 text-sm font-bold text-white">View work <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30"><ArrowRight className="h-4 w-4" /></span></span>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_2fr]">
              <div className="border border-white/10 bg-[#101010] p-6">
                <DesignNote>What it feels like</DesignNote>
                <p className="mt-3 text-2xl font-semibold leading-tight text-white">A film company with the confidence to say less.</p>
                <p className="mt-4 text-sm leading-relaxed text-white/50">Cinematic imagery, oversized type, generous black space, and an immersive showreel take over the page.</p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {["Commercial film", "Founder story", "Social series", "AI visual"].map((label, index) => (
                  <div key={label} className={`relative min-h-44 overflow-hidden bg-[#171717] ${index === 0 ? "col-span-2" : ""}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_16%,rgba(225,191,98,0.38),transparent_26%),linear-gradient(132deg,#161616,#050505)]" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">{label}</span>
                    <Play className="absolute right-3 top-3 h-4 w-4 text-[#e1bf62]" fill="currentColor" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Concept B */}
        <section id="concept-b" className="bg-[#ebedf0] py-8 text-[#101318] md:py-12">
          <div className="container mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-baseline gap-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#876c1d]">02</span>
              <h2 className="text-xl font-bold tracking-[-0.03em]">Living Work Feed</h2>
            </div>
            <DesignNote>More culture / more movement</DesignNote>
          </div>

          <div className="container overflow-hidden border border-[#101318]/15 bg-[#fafafa] p-4 sm:p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-[#101318]/15 pb-4">
              <img src={LOGO_URL} alt="RebelWAVE" className="h-6 w-auto brightness-0" />
              <div className="hidden gap-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#101318]/65 sm:flex"><span>Latest</span><span>Campaigns</span><span>Social</span><span>Experiments</span></div>
              <span className="rounded-full bg-[#101318] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white">The feed</span>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-12 md:grid-rows-[210px_210px_150px]">
              <div className="relative min-h-64 overflow-hidden bg-[#151b25] md:col-span-7 md:row-span-2 md:min-h-0">
                <img src={EDITORIAL_HERO} alt="Concept preview: large showreel tile" className="h-full w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.75),transparent_55%)]" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white"><div><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e1bf62]">Featured / 01</p><p className="mt-1 text-xl font-bold">Brand film / full production</p></div><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black"><Play className="ml-0.5 h-3 w-3" fill="currentColor" /></span></div>
              </div>
              <div className="relative min-h-56 overflow-hidden bg-[#161616] md:col-span-5 md:min-h-0">
                <img src={LIVING_FEED} alt="Concept preview: social production tile" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <p className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white">Social-native / 02</p>
              </div>
              <div className="relative min-h-56 overflow-hidden bg-[#657287] md:col-span-3 md:min-h-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(187,219,255,0.62),transparent_0_24%),linear-gradient(150deg,#0b1728,#6b78a9)]" />
                <p className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white">AI test / 03</p>
              </div>
              <div className="relative min-h-56 overflow-hidden bg-[#d8bb69] md:col-span-2 md:min-h-0">
                <p className="absolute left-4 top-4 text-[9px] font-bold uppercase tracking-[0.16em] text-[#362b0a]">Short form</p>
                <p className="absolute bottom-4 left-4 max-w-[120px] text-xl font-bold leading-[0.9] tracking-[-0.04em] text-[#171200]">A new cut every week.</p>
              </div>
              <div className="relative min-h-44 overflow-hidden bg-[#151b25] md:col-span-5 md:min-h-0">
                <img src={HYBRID_LAB} alt="Concept preview: post-production tile" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/35" />
                <p className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white">Post / process / 04</p>
              </div>
              <div className="flex min-h-32 items-end justify-between bg-[#151515] p-4 text-white md:col-span-2 md:min-h-0"><span className="text-[9px] font-bold uppercase tracking-[0.16em]">Browse all work</span><ArrowRight className="h-4 w-4 text-[#e1bf62]" /></div>
            </div>
          </div>

          <div className="container mt-5 grid gap-5 lg:grid-cols-[0.95fr_2fr]">
            <div className="border border-[#101318]/15 bg-white p-6"><DesignNote>What it feels like</DesignNote><p className="mt-3 text-2xl font-semibold leading-tight">A studio that is always making something new.</p></div>
            <div className="border-y border-[#101318]/15 py-6 text-sm leading-relaxed text-[#101318]/60">A grid that can grow as work grows. Ideal once there is enough short-form, campaign, and experimental content to refresh the page often.</div>
          </div>
        </section>

        {/* Concept C */}
        <section id="concept-c" className="bg-[#090d17] py-8 md:py-12">
          <div className="container mb-5 flex flex-wrap items-center justify-between gap-3"><div className="flex items-baseline gap-3"><span className="text-xs font-bold tracking-[0.2em] text-[#87a8ff]">03</span><h2 className="text-xl font-bold tracking-[-0.03em] text-white">Hybrid Studio / Lab</h2></div><DesignNote>AI as a creative tool, not a gimmick</DesignNote></div>

          <div className="container">
            <div className="overflow-hidden border border-white/10 bg-[#0f1624] p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b6c8ff]">RebelWAVE / Studio Lab</span><span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/50"><span className="h-1.5 w-1.5 rounded-full bg-[#87a8ff]" /> Live creative development</span></div>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="relative min-h-[400px] overflow-hidden border border-white/10"><img src={HYBRID_LAB} alt="Concept preview: real production studio" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,13,23,0.92),transparent_57%)]" /><div className="absolute bottom-5 left-5"><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">01 / Real-world craft</p><p className="mt-2 text-3xl font-bold leading-none text-white">Shoot it.<br />Shape it.</p></div></div>
                <div className="relative min-h-[400px] overflow-hidden border border-[#87a8ff]/25 bg-[#101b37]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_26%,rgba(128,169,255,0.55),transparent_0_24%),radial-gradient(circle_at_25%_70%,rgba(189,112,255,0.3),transparent_0_34%),linear-gradient(130deg,#0f1b38,#0d0e1e_57%,#25204e)]" /><div className="absolute inset-6 border border-white/10" /><div className="absolute left-[18%] top-[22%] h-40 w-40 rounded-full border border-[#b6c8ff]/50 bg-[#87a8ff]/10 blur-[0.2px]" /><div className="absolute bottom-5 left-5"><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b6c8ff]">02 / AI-expanded visual</p><p className="mt-2 text-3xl font-bold leading-none text-white">Take it<br />somewhere else.</p></div><Sparkles className="absolute right-6 top-6 h-5 w-5 text-[#b6c8ff]" /></div>
              </div>
              <div className="mt-4 grid gap-4 border-t border-white/10 pt-4 md:grid-cols-[1fr_auto]"><p className="max-w-xl text-lg font-semibold leading-tight text-white">Human direction holds the point of view. Higgsfield expands the visual territory.</p><span className="text-xs leading-relaxed text-white/45 md:max-w-xs">This can become a short before / after interaction featuring a real RebelWAVE project.</span></div>
            </div>
            <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_2fr]"><div className="border border-white/10 bg-white/[0.03] p-6"><DesignNote>What it feels like</DesignNote><p className="mt-3 text-2xl font-semibold leading-tight text-white">A production partner that can make the impossible practical.</p></div><div className="border-y border-white/10 py-6 text-sm leading-relaxed text-white/50">The most differentiated approach, provided it is anchored in real footage and real experiments. It should prove the AI capability rather than simply announce it.</div></div>
          </div>
        </section>

        <section className="bg-[#e1bf62] py-16 text-[#151006] md:py-20">
          <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#5a4610]">Your call</p><h2 className="mt-3 max-w-3xl text-4xl font-bold leading-[0.9] tracking-[-0.055em] md:text-6xl">Pick the feeling before we pick the layout.</h2></div><p className="max-w-xs text-sm leading-relaxed text-[#46370e]">Direction A is the recommendation. Direction C can become an accent once there are strong Higgsfield examples to show.</p></div>
        </section>
      </main>
    </div>
  );
}
