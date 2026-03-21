/* =============================================================================
   REBELWAVE HOME PAGE — Dark Kinetic Wave Design
   Sections: Nav, Hero, Client Logos, About/AI, How It Works, VSL, 
             Case Studies, Testimonials, Booking/Lead Gen, Footer
   ============================================================================= */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Play, Star, Menu, X, Zap, Target, BarChart3, Users } from "lucide-react";

// ── Asset URLs ──────────────────────────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/rebelwave-hero-bg-NJfEugPTNVFqkDyxLd8LSo.webp";
const AI_VISUAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/rebelwave-ai-visual-AdmiSpUdaHa4KaJtx2jGtk.webp";
const RESULTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/rebelwave-results-bg-VyfV7fNzZ27WuYogZwUxiZ.webp";
const BOOKING_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/rebelwave-booking-bg-JZK5vcEeAHWod7qtbMehgU.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/rebelwave-logo_61d3bb46.webp";

// ── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Counter animation hook ───────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── Heartbeat SVG ────────────────────────────────────────────────────────────
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

// ── Navigation ───────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Who We Are", href: "#about" },
    { label: "What We Do", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,12,20,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,184,74,0.15)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center">
          <img src={LOGO_URL} alt="RebelWave" className="h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase transition-colors duration-200"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "rgba(255,255,255,0.7)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4B84A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#book" className="btn-gold text-sm">
            <span>Book a Call</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{ background: "rgba(8,12,20,0.98)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-medium tracking-widest uppercase border-b"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "rgba(255,255,255,0.7)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#book" className="btn-gold mt-4 block text-center text-sm">
            <span>Book a Call</span>
          </a>
        </div>
      )}
    </nav>
  );
}

// ── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#080C14" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.45,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(8,12,20,0.85) 0%, rgba(25,29,40,0.6) 50%, rgba(8,12,20,0.9) 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="section-label mb-6 flex items-center gap-3">
            <span
              className="inline-block w-8 h-px"
              style={{ background: "#D4B84A" }}
            />
            Montreal's AI-Powered Growth Agency
          </div>

          <h1
            className="text-5xl md:text-7xl font-black leading-none mb-6"
            style={{
              fontFamily: "'Syne', sans-serif",
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            We Don't Just
            <br />
            Run Ads.
            <br />
            <span style={{ color: "#D4B84A" }}>We Build Machines</span>
            <br />
            That Print Leads.
          </h1>

          <p
            className="text-lg md:text-xl mb-10 max-w-xl"
            style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}
          >
            RebelWave is a full-service digital marketing agency that leverages AI to
            accelerate customer acquisition for service-based businesses. We handle
            everything — ads, creatives, funnels, and follow-up.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#book" className="btn-gold inline-flex items-center gap-2">
              <span>Book a Strategy Call</span>
              <ArrowRight size={16} />
            </a>
            <a href="#vsl" className="btn-outline-gold inline-flex items-center gap-2">
              <Play size={14} />
              <span>Watch Our Story</span>
            </a>
          </div>

          {/* Heartbeat line */}
          <div className="mt-16">
            <HeartbeatLine className="w-full max-w-sm opacity-70" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Syne', sans-serif" }}>
          Scroll
        </span>
        <ChevronDown size={16} style={{ color: "rgba(255,255,255,0.3)" }} />
      </div>
    </section>
  );
}

// ── Client Logos ─────────────────────────────────────────────────────────────
function ClientLogos() {
  const clients = [
    "Mr. Montreal Photobooth",
    "Le Petit Duck Shoppe",
    "Wild Magnolia Events",
    "Momentum Media",
    "Artisan Co.",
    "Northside Roofing",
    "Elite Home Services",
    "Prestige Renovations",
  ];

  return (
    <section
      className="py-12 overflow-hidden"
      style={{ background: "#0F1117", borderTop: "1px solid rgba(212,184,74,0.12)", borderBottom: "1px solid rgba(212,184,74,0.12)" }}
    >
      <div className="container mb-4">
        <p
          className="text-center text-xs tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Syne', sans-serif" }}
        >
          Trusted by businesses across North America
        </p>
      </div>
      <div className="flex gap-16 items-center" style={{ animation: "none" }}>
        <div className="flex gap-16 items-center flex-wrap justify-center w-full px-8">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-2 whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#D4B84A", opacity: 0.6 }}
              />
              <span
                className="text-sm font-medium tracking-wider"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Stats Counter ─────────────────────────────────────────────────────────────
function StatsSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const leads = useCounter(2400, 2000, started);
  const clients = useCounter(85, 1800, started);
  const roas = useCounter(6, 1500, started);

  const stats = [
    { value: leads, suffix: "+", label: "Leads Generated" },
    { value: clients, suffix: "+", label: "Clients Served" },
    { value: roas, suffix: "x", label: "Average ROAS" },
    { value: 3, suffix: " yrs", label: "In Business" },
  ];

  const roasCount = useCounter(3, 1500, started);

  const allStats = [
    { value: leads, suffix: "+", label: "Leads Generated" },
    { value: clients, suffix: "+", label: "Clients Served" },
    { value: roas, suffix: "x", label: "Average ROAS" },
    { value: roasCount, suffix: " yrs", label: "In Business" },
  ];

  return (
    <div ref={ref} className="py-16" style={{ background: "#080C14" }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {allStats.map((stat, i) => (
            <div key={i} className="text-center reveal">
              <div
                className="text-4xl md:text-5xl font-black mb-2"
                style={{ fontFamily: "'Syne', sans-serif", color: "#D4B84A" }}
              >
                {stat.value}{stat.suffix}
              </div>
              <div
                className="text-xs tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Syne', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── About / AI Section ────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-24" style={{ background: "#191D28" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative reveal">
            <div
              className="absolute -inset-4 rounded-none"
              style={{
                background: "linear-gradient(135deg, rgba(212,184,74,0.15), transparent)",
                border: "1px solid rgba(212,184,74,0.2)",
              }}
            />
            <img
              src={AI_VISUAL}
              alt="AI-powered marketing"
              className="relative w-full object-cover"
              style={{ aspectRatio: "1/1", maxHeight: 480 }}
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 px-5 py-3"
              style={{
                background: "#D4B84A",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                color: "#080C14",
                textTransform: "uppercase",
              }}
            >
              AI-Accelerated
            </div>
          </div>

          {/* Right: content */}
          <div className="reveal">
            <div className="section-label mb-4">Who We Are</div>
            <h2
              className="text-4xl md:text-5xl font-black mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
            >
              Not Just an Agency.
              <br />
              <span style={{ color: "#D4B84A" }}>A Growth System.</span>
            </h2>
            <p className="mb-4" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
              RebelWave was built on one principle: small businesses deserve enterprise-level
              marketing. We are a Montreal-based digital agency specializing in customer
              acquisition for service-based businesses — and we handle everything from
              ad creation to lead pipeline to sales process optimization.
            </p>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
              What sets us apart is how we work. We leverage cutting-edge AI tools to
              move faster, test smarter, and deliver results that compound over time.
              We don't just run your ads — we build the entire system behind them.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Zap size={18} />, label: "AI-Powered Campaigns" },
                { icon: <Target size={18} />, label: "Full-Funnel Strategy" },
                { icon: <BarChart3 size={18} />, label: "Pipeline Automation" },
                { icon: <Users size={18} />, label: "Sales Process Audit" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ color: "#D4B84A" }}>{item.icon}</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <a href="#book" className="btn-gold inline-flex items-center gap-2">
              <span>Work With Us</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Strategy Call",
      description:
        "We start with a deep-dive into your business, your current marketing, and your goals. No fluff — just a clear diagnosis and a plan.",
    },
    {
      number: "02",
      title: "Build the System",
      description:
        "We build your ad campaigns, creatives, landing pages, and lead pipeline. Every element is designed to work together as one machine.",
    },
    {
      number: "03",
      title: "Launch & Optimize",
      description:
        "We go live, monitor performance daily, and use AI-driven insights to continuously optimize for lower cost-per-lead and higher conversion.",
    },
    {
      number: "04",
      title: "Scale & Report",
      description:
        "Once the system is proven, we scale what works. You get transparent reporting and regular strategy sessions to keep growing.",
    },
  ];

  return (
    <section id="services" className="py-24" style={{ background: "#080C14" }}>
      <div className="container">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">How It Works</div>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
          >
            From Zero to{" "}
            <span style={{ color: "#D4B84A" }}>Full Pipeline</span>
            <br />
            in 4 Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="card-dark reveal p-8 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Step number */}
              <div
                className="text-6xl font-black mb-6 leading-none"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: "rgba(212,184,74,0.12)",
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                }}
              >
                {step.number}
              </div>

              {/* Gold dot */}
              <div
                className="w-2 h-2 rounded-full mb-6"
                style={{ background: "#D4B84A" }}
              />

              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {step.description}
              </p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-px w-px h-16 -translate-y-1/2"
                  style={{ background: "rgba(212,184,74,0.2)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── VSL Section ───────────────────────────────────────────────────────────────
function VSLSection() {
  return (
    <section id="vsl" className="py-24 relative overflow-hidden" style={{ background: "#191D28" }}>
      <div className="container">
        <div className="text-center mb-12 reveal">
          <div className="section-label mb-4">Our Story</div>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
          >
            See How We{" "}
            <span style={{ color: "#D4B84A" }}>Do It</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div
            className="relative aspect-video flex items-center justify-center"
            style={{
              background: "#0F1117",
              border: "1px solid rgba(212,184,74,0.2)",
            }}
          >
            {/* Placeholder */}
            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer transition-transform hover:scale-110"
                style={{ background: "rgba(212,184,74,0.15)", border: "2px solid #D4B84A" }}
              >
                <Play size={32} style={{ color: "#D4B84A", marginLeft: 4 }} />
              </div>
              <p
                className="text-sm tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Syne', sans-serif" }}
              >
                Video Coming Soon
              </p>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: "#D4B84A" }} />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: "#D4B84A" }} />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: "#D4B84A" }} />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: "#D4B84A" }} />
          </div>

          <div className="text-center mt-8">
            <a href="#book" className="btn-gold inline-flex items-center gap-2">
              <span>Ready to Grow? Book a Call</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Case Studies ──────────────────────────────────────────────────────────────
function CaseStudiesSection() {
  const cases = [
    {
      industry: "Home Renovation",
      result: "312% increase in qualified leads",
      detail: "Rebuilt the entire lead funnel from ad to booking. Cut cost-per-lead by 60% in 90 days.",
      metric: "312%",
      metricLabel: "Lead Increase",
    },
    {
      industry: "Landscaping & Outdoor",
      result: "8.2x ROAS on Meta Ads",
      detail: "AI-optimized creative testing and audience segmentation delivered record-breaking returns.",
      metric: "8.2x",
      metricLabel: "ROAS",
    },
    {
      industry: "Cleaning Services",
      result: "47 booked jobs in first month",
      detail: "From zero digital presence to a fully automated booking pipeline in under 30 days.",
      metric: "47",
      metricLabel: "Jobs Booked",
    },
  ];

  return (
    <section
      id="results"
      className="py-24 relative overflow-hidden"
      style={{ background: "#080C14" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${RESULTS_BG})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #080C14 0%, rgba(8,12,20,0.7) 50%, #080C14 100%)" }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Case Studies</div>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
          >
            Real Businesses.
            <br />
            <span style={{ color: "#D4B84A" }}>Real Results.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Placeholder case studies — your actual results will be featured here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="card-dark reveal p-8 relative overflow-hidden"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Big metric */}
              <div
                className="text-5xl font-black mb-1"
                style={{ fontFamily: "'Syne', sans-serif", color: "#D4B84A" }}
              >
                {c.metric}
              </div>
              <div
                className="text-xs tracking-widest uppercase mb-6"
                style={{ color: "rgba(212,184,74,0.6)", fontFamily: "'Syne', sans-serif" }}
              >
                {c.metricLabel}
              </div>

              <div
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Syne', sans-serif" }}
              >
                {c.industry}
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
              >
                {c.result}
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                {c.detail}
              </p>

              {/* Bottom gold line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, #D4B84A, transparent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Client Name",
      company: "Home Services Business",
      quote:
        "RebelWave completely transformed how we get leads. Within 60 days we had more booked jobs than we could handle. The system they built just works.",
      stars: 5,
    },
    {
      name: "Client Name",
      company: "Renovation Company",
      quote:
        "I've worked with three agencies before RebelWave. None of them came close. They actually understand the full picture — not just ads, but the whole funnel.",
      stars: 5,
    },
    {
      name: "Client Name",
      company: "Landscaping Business",
      quote:
        "The AI-powered approach they use is next level. Our cost per lead dropped by half and the quality of leads went up significantly. Highly recommend.",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24" style={{ background: "#191D28" }}>
      <div className="container">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Testimonials</div>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
          >
            What Our Clients{" "}
            <span style={{ color: "#D4B84A" }}>Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-dark reveal p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} fill="#D4B84A" style={{ color: "#D4B84A" }} />
                ))}
              </div>

              <p
                className="text-base mb-8 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}
              >
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "rgba(212,184,74,0.15)", color: "#D4B84A", fontFamily: "'Syne', sans-serif" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div
                    className="text-sm font-bold"
                    style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Booking / Lead Gen Section ────────────────────────────────────────────────
function BookingSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="book"
      className="py-24 relative overflow-hidden"
      style={{ background: "#080C14" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${BOOKING_BG})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #080C14 0%, rgba(8,12,20,0.5) 50%, #080C14 100%)" }}
      />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="reveal">
            <div className="section-label mb-4">Get Started</div>
            <h2
              className="text-4xl md:text-5xl font-black mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
            >
              Ready to Build
              <br />
              Your Lead Machine?
              <br />
              <span style={{ color: "#D4B84A" }}>Let's Talk.</span>
            </h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
              Book a free 30-minute strategy call. We'll review your current marketing,
              identify the biggest opportunities, and show you exactly what a RebelWave
              system would look like for your business.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "No obligation — just clarity",
                "We'll audit your current lead gen",
                "You'll leave with an actionable plan",
                "We only take clients we can genuinely help",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#D4B84A" }}
                  />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6" style={{ borderTop: "1px solid rgba(212,184,74,0.15)" }}>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Syne', sans-serif" }}>
                Or book directly
              </p>
              <a
                href="https://appointments.rebelwave.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold inline-flex items-center gap-2 text-sm"
              >
                <span>Open Booking Calendar</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal">
            {submitted ? (
              <div
                className="p-12 text-center"
                style={{ background: "#0F1117", border: "1px solid rgba(212,184,74,0.3)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(212,184,74,0.15)", border: "2px solid #D4B84A" }}
                >
                  <span style={{ color: "#D4B84A", fontSize: "1.5rem" }}>✓</span>
                </div>
                <h3
                  className="text-2xl font-black mb-3"
                  style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
                >
                  Message Received
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)" }}>
                  We'll be in touch within 24 hours to schedule your strategy call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 space-y-4"
                style={{ background: "#0F1117", border: "1px solid rgba(212,184,74,0.15)" }}
              >
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: "'Syne', sans-serif", color: "#FFFFFF" }}
                >
                  Tell Us About Your Business
                </h3>

                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
                  { key: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (514) 000-0000" },
                  { key: "business", label: "Business Type", type: "text", placeholder: "e.g. Roofing, Landscaping, Cleaning..." },
                ].map((field) => (
                  <div key={field.key}>
                    <label
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Syne', sans-serif" }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      required
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#FFFFFF",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,184,74,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Syne', sans-serif" }}
                  >
                    What's Your Biggest Marketing Challenge?
                  </label>
                  <textarea
                    placeholder="Tell us where you're struggling..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#FFFFFF",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,184,74,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>

                <button type="submit" className="btn-gold w-full mt-2">
                  <span>Send My Info — Let's Talk</span>
                </button>

                <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.25)" }}>
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-16"
      style={{ background: "#0F1117", borderTop: "1px solid rgba(212,184,74,0.12)" }}
    >
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={LOGO_URL} alt="RebelWave" className="h-10 w-auto mb-4" />
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.8, maxWidth: 280 }}>
              AI-powered digital marketing for service-based businesses. We build the
              systems that bring you consistent, qualified leads.
            </p>
            <HeartbeatLine className="w-48 opacity-40" />
          </div>

          {/* Links */}
          <div>
            <div className="section-label mb-4">Navigation</div>
            <div className="space-y-3">
              {["Who We Are", "What We Do", "Results", "Testimonials", "Book a Call"].map((link) => (
                <div key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#D4B84A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="section-label mb-4">Contact</div>
            <div className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              <div>Montreal, Quebec, Canada</div>
              <div>
                <a
                  href="tel:5146512426"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4B84A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  514-651-2426
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@rebelwave.ca"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4B84A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  info@rebelwave.ca
                </a>
              </div>
              <div className="pt-2 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                Service Areas: Canada · USA · UK
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.2)" }}
        >
          <span>© 2024 RebelWave Digital Marketing. All rights reserved.</span>
          <span className="mt-2 md:mt-0">Montreal, QC · Canada</span>
        </div>
      </div>
    </footer>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <StatsSection />
      <AboutSection />
      <HowItWorksSection />
      <VSLSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
