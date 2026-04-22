/* =============================================================================
   REBELWAVE BOOKING PAGE v3 — Responsive GHL Calendar
   - Info panel LEFT, calendar RIGHT (desktop)
   - Calendar iframe auto-resizes via postMessage from GHL's form_embed.js
   ============================================================================= */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/RW_White&Gold_e3f64ab9.webp";
const GHL_CALENDAR_ID = "a5NDHWK26AY8SAZyxB4h";

export default function BookingPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Load GHL's form_embed.js which handles iframe auto-resizing
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // Also listen for postMessage resize events from the iframe as a fallback
    const handleMessage = (e: MessageEvent) => {
      if (!iframeRef.current) return;
      // GHL sends { type: "iframeResize", value: { height: number } }
      // or { height: number } depending on version
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        const height =
          data?.value?.height ||
          data?.height ||
          (data?.type === "iframeResize" ? data?.value?.height : null);
        if (height && height > 100) {
          iframeRef.current.style.height = `${height + 40}px`;
        }
      } catch {
        // ignore non-JSON messages
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const benefits = [
    "Free 30-minute strategy call",
    "We'll audit your current marketing setup",
    "You'll get an actionable plan regardless",
    "No pressure, no obligation",
    "We only take clients we can genuinely help",
  ];

  return (
    <div className="min-h-screen" style={{ background: "#0D1B2A" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 py-4"
        style={{
          background: "rgba(13,27,42,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <img src={LOGO_URL} alt="RebelWave" className="h-9 w-auto" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Montserrat', sans-serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            <ArrowLeft size={14} />
            Back to Site
          </Link>
        </div>
      </header>

      {/* Hero strip */}
      <div style={{ background: "#162435", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container py-16 text-center">
          <p className="section-eyebrow mb-4">Free Strategy Call</p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#FFFFFF", lineHeight: 1.2 }}
          >
            Book Your
            <span style={{ color: "#C9A84C" }}> RebelWave Call</span>
          </h1>
          <p
            className="text-base max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}
          >
            Select a time that works for you. We'll review your business, your goals,
            and show you exactly how we'd build your lead machine.
          </p>
        </div>
      </div>

      {/* Main content — info LEFT, calendar RIGHT */}
      <div className="container py-16">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">

          {/* LEFT: info panel */}
          <div className="md:col-span-2 order-2 md:order-1">
            <div
              className="p-6 md:p-8 md:sticky md:top-24"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="mb-8">
                <p className="section-eyebrow mb-2">RebelWave</p>
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: "#FFFFFF" }}
                >
                  Strategy Call Walkthrough
                </h2>
                <div className="flex items-center gap-2 mb-6">
                  <Clock size={14} style={{ color: "#C9A84C" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>
                    60 Minutes
                  </span>
                </div>
                <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.08)" }} />
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                  We'll walk you through how to build a reliable lead source and the
                  system behind it to consistently book more jobs. No fluff — just a
                  clear, honest conversation about your business.
                </p>
              </div>

              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  What to Expect
                </p>
                <div className="space-y-3">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={14}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "#C9A84C" }}
                      />
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'DM Sans', sans-serif" }}>
                  Questions?
                </p>
                <a
                  href="mailto:info@rebelwave.ca"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(201,168,76,0.7)", fontFamily: "'DM Sans', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,168,76,0.7)")}
                >
                  info@rebelwave.ca
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: GHL Calendar — auto-resizing iframe */}
          <div className="md:col-span-3 order-1 md:order-2">
            <div
              className="w-full overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <iframe
                ref={iframeRef}
                src={`https://api.leadconnectorhq.com/widget/booking/${GHL_CALENDAR_ID}`}
                title="Book a RebelWave Strategy Call"
                id={`${GHL_CALENDAR_ID}_1776884621048`}
                style={{
                  width: "100%",
                  minHeight: "680px",
                  height: "680px",
                  border: "none",
                  display: "block",
                  transition: "height 0.3s ease",
                }}
                scrolling="no"
              />
            </div>
            <p
              className="text-xs text-center mt-4"
              style={{ color: "rgba(255,255,255,0.15)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Powered by RebelWave · Secure booking
            </p>
          </div>

        </div>
      </div>

      {/* Footer strip */}
      <div
        className="py-8"
        style={{ background: "#091422", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="container flex flex-col md:flex-row items-center justify-between text-xs"
          style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'DM Sans', sans-serif" }}
        >
          <span>© 2024 RebelWave Digital Marketing</span>
          <span>Montreal, QC · Canada · 514-651-2426</span>
        </div>
      </div>
    </div>
  );
}
