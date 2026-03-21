/* =============================================================================
   REBELWAVE BOOKING PAGE — Dark Kinetic Wave Design
   Embeds the GHL calendar from appointments.rebelwave.ca
   ============================================================================= */

import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, CheckCircle2 } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/rebelwave-logo_61d3bb46.webp";
const BOOKING_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/rebelwave-booking-bg-JZK5vcEeAHWod7qtbMehgU.webp";

function HeartbeatLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 30 L60 30 L80 10 L100 50 L120 5 L140 55 L160 30 L220 30 L240 15 L260 45 L280 30 L400 30"
        stroke="#D4B84A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          animation: "heartbeat-draw 2s ease forwards",
        }}
      />
    </svg>
  );
}

export default function BookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Free 30-minute strategy call",
    "We'll audit your current marketing",
    "Actionable plan you can use immediately",
    "No pressure, no obligation",
    "Only take clients we can genuinely help",
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 py-4"
        style={{
          background: "rgba(8,12,20,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(212,184,74,0.15)",
        }}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <img src={LOGO_URL} alt="RebelWave" className="h-10 w-auto" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Syne', sans-serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D4B84A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            <ArrowLeft size={14} />
            Back to Site
          </Link>
        </div>
      </header>

      {/* Hero strip */}
      <div
        className="relative py-16 overflow-hidden"
        style={{ background: "#191D28" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${BOOKING_BG})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(25,29,40,0.6) 0%, rgba(25,29,40,0.9) 100%)" }}
        />
        <div className="container relative z-10 text-center">
          <div
            className="inline-block text-xs tracking-widest uppercase mb-4 px-4 py-1.5"
            style={{
              color: "#D4B84A",
              border: "1px solid rgba(212,184,74,0.3)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Free Strategy Call
          </div>
          <h1
            className="text-4xl md:text-6xl font-black mb-4"
            style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
          >
            Book Your
            <br />
            <span style={{ color: "#D4B84A" }}>RebelWave Call</span>
          </h1>
          <p
            className="text-lg max-w-xl mx-auto mb-6"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
          >
            Select a time that works for you. We'll review your business, your goals,
            and show you exactly how we'd build your lead machine.
          </p>
          <HeartbeatLine className="w-48 mx-auto opacity-50" />
        </div>
      </div>

      {/* Main content */}
      <div className="container py-16">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: info panel */}
          <div className="md:col-span-2">
            <div
              className="p-8 sticky top-24"
              style={{
                background: "#0F1117",
                border: "1px solid rgba(212,184,74,0.15)",
              }}
            >
              {/* Meeting info */}
              <div className="mb-8">
                <div
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: "rgba(212,184,74,0.7)", fontFamily: "'Syne', sans-serif" }}
                >
                  RebelWave
                </div>
                <h2
                  className="text-xl font-black mb-4"
                  style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
                >
                  Call Walkthrough
                </h2>
                <div className="flex items-center gap-2 mb-6">
                  <Clock size={14} style={{ color: "#D4B84A" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    60 Minutes
                  </span>
                </div>
                <div
                  className="h-px mb-6"
                  style={{ background: "rgba(212,184,74,0.15)" }}
                />
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                  Build a reliable lead source and the system behind it to book more
                  jobs regularly. We'll take you through all the details on the call.
                </p>
              </div>

              {/* Benefits */}
              <div>
                <div
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Syne', sans-serif" }}
                >
                  What to Expect
                </div>
                <div className="space-y-3">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={15}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "#D4B84A" }}
                      />
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div
                className="mt-8 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                  Questions? Reach us at
                </div>
                <a
                  href="mailto:info@rebelwave.ca"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(212,184,74,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4B84A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(212,184,74,0.7)")}
                >
                  info@rebelwave.ca
                </a>
              </div>
            </div>
          </div>

          {/* Right: GHL Calendar embed */}
          <div className="md:col-span-3">
            <div
              className="relative overflow-hidden"
              style={{
                background: "#0F1117",
                border: "1px solid rgba(212,184,74,0.15)",
                minHeight: 700,
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: "#D4B84A" }} />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: "#D4B84A" }} />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: "#D4B84A" }} />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: "#D4B84A" }} />

              {/* GHL Calendar iframe */}
              <iframe
                src="https://appointments.rebelwave.ca/"
                title="Book a RebelWave Strategy Call"
                className="w-full"
                style={{
                  height: 700,
                  border: "none",
                  background: "transparent",
                }}
                scrolling="yes"
              />
            </div>

            <p
              className="text-xs text-center mt-4"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Powered by RebelWave · Secure booking
            </p>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="py-8"
        style={{ background: "#0F1117", borderTop: "1px solid rgba(212,184,74,0.1)" }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          <span>© 2024 RebelWave Digital Marketing</span>
          <span>Montreal, QC · Canada · 514-651-2426</span>
        </div>
      </div>
    </div>
  );
}
