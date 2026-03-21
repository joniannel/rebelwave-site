/* =============================================================================
   REBELWAVE BOOKING PAGE v2 — Clean Professional Design
   Matches the redesigned main site aesthetic
   ============================================================================= */

import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/rebelwave-logo_61d3bb46.webp";

export default function BookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
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

      {/* Main content */}
      <div className="container py-16">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: info panel */}
          <div className="md:col-span-2">
            <div
              className="p-8 sticky top-24"
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
                <div
                  className="h-px mb-6"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
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

              <div
                className="mt-8 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
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

          {/* Right: GHL Calendar embed */}
          <div className="md:col-span-3">
            <div
              className="relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.15)",
                minHeight: 700,
              }}
            >
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
