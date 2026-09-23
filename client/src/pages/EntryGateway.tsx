import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight, Sparkles, TrendingUp, Video, Layers, CheckCircle2 } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/RW_White&Gold_e3f64ab9.webp";

export default function EntryGateway() {
  const [, setLocation] = useLocation();
  const [hoveredTrack, setHoveredTrack] = useState<"advertising" | "content" | null>(null);

  const chooseTrack = (track: "advertising" | "content") => {
    localStorage.setItem("rebelwave_preferred_track", track);
    setLocation(track === "advertising" ? "/advertising" : "/content-production");
  };

  return (
    <div className="min-h-screen bg-[#070E17] text-white flex flex-col justify-between relative overflow-hidden select-none">
      {/* Dynamic ambient background glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-96 md:w-[600px] h-96 md:h-[600px] rounded-full blur-[140px] transition-all duration-700"
        style={{
          background: hoveredTrack === "content" ? "rgba(79, 128, 255, 0.12)" : "rgba(201, 168, 76, 0.14)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-96 md:w-[600px] h-96 md:h-[600px] rounded-full blur-[140px] transition-all duration-700"
        style={{
          background: hoveredTrack === "advertising" ? "rgba(201, 168, 76, 0.12)" : "rgba(168, 85, 247, 0.13)",
        }}
      />

      {/* Top Header */}
      <header className="relative z-10 container py-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="RebelWAVE" className="h-9 md:h-10 w-auto" />
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-white/60">
          <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
          <span>One Brand · Two Specialized Engines</span>
        </div>
      </header>

      {/* Main Choice Hub */}
      <main className="relative z-10 container py-10 md:py-14 my-auto">
        <div className="text-center max-w-2xl mx-auto mb-7 md:mb-9">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Montserrat',sans-serif] tracking-tight leading-tight">
            Select Your RebelWAVE Experience
          </h1>
        </div>

        {/* Two Doors */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Advertising & Lead Gen */}
          <div
            onMouseEnter={() => setHoveredTrack("advertising")}
            onMouseLeave={() => setHoveredTrack(null)}
            onClick={() => chooseTrack("advertising")}
            className={`group cursor-pointer rounded-2xl p-7 md:p-9 relative overflow-hidden transition-all duration-300 border flex flex-col justify-between ${
              hoveredTrack === "advertising"
                ? "bg-[#101F31] border-[#C9A84C] shadow-[0_12px_40px_rgba(201,168,76,0.18)] translate-y-[-4px]"
                : "bg-[#0B1522] border-white/10 hover:border-white/20"
            }`}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C]">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20">
                  Acquisition Engine
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-['Montserrat',sans-serif] text-white group-hover:text-[#F3D78A] transition-colors mb-6">
                Advertising & Lead Gen
              </h2>

              <div className="space-y-2.5 mb-8 text-xs md:text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                  <span>Meta advertising with AI-powered audience testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                  <span>Automated follow-up pipelines & calendar booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                  <span>Sales process audits to lift lead close rates</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="relative z-10 w-full py-3.5 px-6 rounded-lg font-semibold text-sm font-['Montserrat',sans-serif] flex items-center justify-center gap-2 transition-all duration-200 bg-[#C9A84C] text-[#0D1B2A] group-hover:bg-[#E2C06A] group-hover:shadow-[0_4px_20px_rgba(201,168,76,0.35)]"
            >
              <span>Enter Advertising Experience</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Card 2: Content Production */}
          <div
            onMouseEnter={() => setHoveredTrack("content")}
            onMouseLeave={() => setHoveredTrack(null)}
            onClick={() => chooseTrack("content")}
            className={`group cursor-pointer rounded-2xl p-7 md:p-9 relative overflow-hidden transition-all duration-300 border flex flex-col justify-between ${
              hoveredTrack === "content"
                ? "bg-[#111927] border-[#7096D1] shadow-[0_12px_40px_rgba(112,150,209,0.2)] translate-y-[-4px]"
                : "bg-[#0B1522] border-white/10 hover:border-white/20"
            }`}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400">
                  <Video className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-400/20">
                  Creative Studio
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-['Montserrat',sans-serif] text-white group-hover:text-blue-200 transition-colors mb-6">
                Content Production
              </h2>

              <div className="space-y-2.5 mb-8 text-xs md:text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Short-form & long-form video production</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Scripting, creative direction & editing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Brand assets engineered for high engagement</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="relative z-10 w-full py-3.5 px-6 rounded-lg font-semibold text-sm font-['Montserrat',sans-serif] flex items-center justify-center gap-2 transition-all duration-200 bg-white/10 text-white border border-white/20 group-hover:bg-white group-hover:text-[#0D1B2A] group-hover:border-white shadow-sm"
            >
              <span>Enter Content Production</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer info */}
      <footer className="relative z-10 container py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 border-t border-white/5">
        <div>© {new Date().getFullYear()} RebelWAVE Digital Marketing · Montreal, QC</div>
        <div className="mt-2 sm:mt-0 flex items-center gap-4">
          <span>Seamless Navigation Enabled</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Switch sides anytime in header</span>
        </div>
      </footer>
    </div>
  );
}
