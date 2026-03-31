/* =============================================================================
   REBELWAVE HOME PAGE v3 — Clean Professional Design
   Inspired by: heathmedia.co.uk
   Design: Dark navy hero → white/light content sections → dark footer
   Typography: Montserrat headings, DM Sans body
   Tone: Professional, results-driven, relatable — not aggressive
   ============================================================================= */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Play, Star, Menu, X, CheckCircle, ChevronRight } from "lucide-react";

// ── Asset URLs ──────────────────────────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/rw-hero-v2-ddMKUT9thZECwdNUJxcWWL.webp";
const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/rw-about-v3-MZRbX3N2kpUTbaQuS7GttM.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663456211792/cMP5DWkEbNMCiSmpR8EfdN/rebelwave-logo_61d3bb46.webp";

// ── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Counter animation ────────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── Navigation ───────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "What We Do", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const navStyle: React.CSSProperties = {
    background: scrolled ? "rgba(13,27,42,0.97)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-400" style={navStyle}>
      <div className="container flex items-center justify-between py-5">
        <a href="#" className="flex items-center">
          {/* Logo — will be updated once hi-res file is provided */}
          <img src={LOGO_URL} alt="RebelWave" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.65)", letterSpacing: "0.02em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#book" className="btn-gold text-sm py-2.5 px-5">
            Book a Free Call
          </a>
        </div>

        <button className="md:hidden" style={{ color: "white" }} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6" style={{ background: "rgba(13,27,42,0.99)" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3.5 text-sm font-medium border-b"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.65)", borderColor: "rgba(255,255,255,0.06)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#book" className="btn-gold mt-5 w-full text-center text-sm py-3">
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  );
}

// ── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center" style={{ background: "#0D1B2A" }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})`, opacity: 0.5 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(13,27,42,0.95) 50%, rgba(13,27,42,0.5) 100%)" }}
      />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-2xl">
          {/* AI badge — above the fold */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 animate-fade-in-up"
            style={{
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "2px",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "#C9A84C" }}
            >
              AI-Powered Customer Acquisition
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up-delay-1"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#FFFFFF", letterSpacing: "-0.01em" }}
          >
            Stop Guessing.
            <br />
            Start Acquiring
            <br />
            <span style={{ color: "#C9A84C" }}>Qualified Leads.</span>
          </h1>

          <p
            className="text-lg mb-10 animate-fade-in-up-delay-2"
            style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "520px" }}
          >
            RebelWAVE is a full-service digital marketing agency that uses AI to help
            service-based businesses acquire more customers — faster, and at a lower cost.
            We handle everything from ad creation to lead pipeline to sales process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-3">
            <a href="#book" className="btn-gold">
              <span>Book a Free Strategy Call</span>
              <ArrowRight size={15} />
            </a>
            <a href="#vsl" className="btn-outline-white">
              <Play size={13} />
              <span>See How It Works</span>
            </a>
          </div>

          {/* Quick trust signals */}
          <div className="flex flex-wrap gap-6 mt-12 animate-fade-in-up-delay-3">
            {["Sales Process Audit", "Service-Based Specialists", "Full-Funnel Delivery"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={14} style={{ color: "#C9A84C" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Social Proof Bar ──────────────────────────────────────────────────────────
function SocialProofBar() {
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

  const leads = useCounter(2400, 1800, started);
  const roas = useCounter(6, 1400, started);

  // Only 2 stats shown (removed "Businesses Served" and "Years" per user request)
  const stats = [
    { value: leads, suffix: "+", label: "Leads Generated for Clients" },
    { value: 20, suffix: "+", label: "Businesses Served" },
    { value: roas, suffix: "x", label: "Average ROAS Delivered" },
  ];

  return (
    <div
      ref={ref}
      style={{ background: "#162435", borderBottom: "1px solid rgba(201,168,76,0.12)" }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#C9A84C" }}
              >
                {s.value}{s.suffix}
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Client Logos ─────────────────────────────────────────────────────────────
function ClientLogosSection() {
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
    <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E8ECF0" }}>
      <div className="container py-12">
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ color: "#9CA3AF", fontFamily: "'Montserrat', sans-serif" }}
        >
          Trusted by businesses across Canada & the US
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {clients.map((client, i) => (
            <span
              key={i}
              className="text-sm font-medium"
              style={{ color: "#CBD5E0", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.02em" }}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── What We Do ────────────────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      title: "Paid Advertising",
      description:
        "We build and manage high-converting ad campaigns on Meta, using AI-driven creative testing to find what works — and scale it.",
    },
    {
      title: "Creative Production",
      description:
        "From ad copy to visual assets, we produce everything your campaigns need. No outsourcing, no guesswork — creatives built around your offer and audience.",
    },
    {
      title: "Lead Funnels & Pipelines",
      description:
        "We build the backend system your leads flow through — landing pages, follow-up sequences, and CRM pipelines designed to convert interest into booked appointments.",
    },
    {
      title: "Sales Process Optimization",
      description:
        "We audit your current sales process and give you concrete improvements to increase close rates. More leads only matters if your team can convert them.",
    },
  ];

  return (
    <section id="services" style={{ background: "#172434" }}>
      <div className="container py-24">
        <div className="max-w-xl mb-16 reveal">
          <p className="section-eyebrow mb-3">What We Do</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#FFFFFF", lineHeight: 1.25 }}
          >
            A Complete Customer Acquisition System
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
            Most agencies run ads and hand you leads. We build the entire system — from
            the first impression to the booked appointment — and we use AI at every step
            to move faster and deliver better results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 reveal"
              style={{
                transitionDelay: `${i * 80}ms`,
                background: "#FFFFFF",
                boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
              }}
            >
              <div className="gold-divider mb-5" />
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2332" }}
              >
                {s.title}
              </h3>
              <p className="text-sm" style={{ color: "#718096", lineHeight: 1.8 }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why Hire an Agency ────────────────────────────────────────────────────────
function WhyAgencySection() {
  const reasons = [
    {
      number: "01",
      title: "Only a Team Can Sustain an Ad Account",
      description:
        "A successful ad account is not a one-time setup — it requires daily monitoring, creative refreshes, audience testing, and strategic pivots. Only a dedicated team can deliver the consistent attention an ad account needs to stay profitable over time.",
    },
    {
      number: "02",
      title: "Once You Find What Works, It's Infinitely Scalable",
      description:
        "The real value of advertising isn't the first lead — it's the system. When you identify a winning combination of audience, creative, and offer, you can scale that investment predictably. An agency builds and finds that system faster than going it alone.",
    },
    {
      number: "03",
      title: "This Is a Long-Term Asset, Not a Quick Fix",
      description:
        "Businesses that win with advertising treat it as a core business system, not a short-term experiment. We build your acquisition engine with the future in mind — so every dollar spent compounds into a stronger, more reliable pipeline over time.",
    },
    {
      number: "04",
      title: "Speed and Expertise You Can't Replicate In-House",
      description:
        "We've run hundreds of campaigns across dozens of service industries. That pattern recognition — knowing what works before you spend a dollar testing it — is what separates a seasoned agency from a business owner running ads for the first time.",
    },
  ];

  return (
    <section style={{ background: "#F7F8FA" }}>
      <div className="container py-24">
        <div className="max-w-xl mb-16 reveal">
          <p className="section-eyebrow mb-3">Why an Agency</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2332", lineHeight: 1.25 }}
          >
            Why Build an Advertising Strategy for the Long Term?
          </h2>
          <p style={{ color: "#718096", lineHeight: 1.8 }}>
            The businesses that grow consistently aren't the ones who ran a campaign once.
            They're the ones who committed to building a system — and had the right team to run it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="text-5xl font-bold mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(201,168,76,0.2)" }}
              >
                {r.number}
              </div>
              <h3
                className="text-base font-bold mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2332" }}
              >
                {r.title}
              </h3>
              <p className="text-sm" style={{ color: "#718096", lineHeight: 1.8 }}>
                {r.description}
              </p>
            </div>
          ))}
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
        "We start with a clear-eyed review of your business, your current marketing, and your goals. You'll leave the call with a specific plan — whether you work with us or not.",
    },
    {
      number: "02",
      title: "Build the System",
      description:
        "We build your campaigns, creatives, landing pages, and lead pipeline. Every component is designed to work together, with AI accelerating the build and testing process.",
    },
    {
      number: "03",
      title: "Launch & Optimize",
      description:
        "We go live, monitor daily, and use data to continuously improve. Our AI tools help us identify winning patterns faster than traditional approaches.",
    },
    {
      number: "04",
      title: "Scale & Report",
      description:
        "Once we've proven what works, we scale it. You get transparent reporting and regular strategy reviews so you always know exactly where your investment is going.",
    },
  ];

  return (
    <section style={{ background: "#FFFFFF" }}>
      <div className="container py-24">
        <div className="text-center max-w-xl mx-auto mb-16 reveal">
          <p className="section-eyebrow mb-3">How It Works</p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2332", lineHeight: 1.25 }}
          >
            From First Call to Full Pipeline
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="text-5xl font-bold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(201,168,76,0.2)" }}
              >
                {step.number}
              </div>
              <h3
                className="text-base font-bold mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2332" }}
              >
                {step.title}
              </h3>
              <p className="text-sm" style={{ color: "#718096", lineHeight: 1.8 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About / AI Section ────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" style={{ background: "#0D1B2A" }}>
      <div className="container py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative reveal order-2 md:order-1">
            <img
              src={ABOUT_BG}
              alt="RebelWave team reviewing campaign analytics"
              className="w-full object-cover"
              style={{ aspectRatio: "4/3" }}
            />
            <div
              className="absolute -bottom-4 -right-4 px-5 py-3"
              style={{
                background: "#C9A84C",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                color: "#0D1B2A",
                textTransform: "uppercase",
              }}
            >
              AI-Accelerated
            </div>
          </div>

          {/* Right: content */}
          <div className="reveal order-1 md:order-2">
            <p className="section-eyebrow mb-4">Who We Are</p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "#FFFFFF", lineHeight: 1.25 }}
            >
              Built for Service Businesses.
              <br />
              <span style={{ color: "#C9A84C" }}>Powered by AI.</span>
            </h2>
            <p className="mb-5" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
              RebelWave was founded with a clear focus: help service-based businesses
              acquire customers through online marketing. We are not a generalist agency
              — we specialize in lead generation, and we have refined our process to
              deliver consistent, measurable results.
            </p>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
              What makes us different is how we work. We integrate AI throughout our
              process — from creative production to audience testing to pipeline
              automation — so we move faster and deliver better outcomes than agencies
              relying on traditional methods alone.
            </p>

            <a href="#book" className="btn-gold">
              <span>Learn More on a Call</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── VSL Section ───────────────────────────────────────────────────────────────
function VSLSection() {
  return (
    <section id="vsl" style={{ background: "#FFFFFF" }}>
      <div className="container py-24">
        <div className="text-center max-w-xl mx-auto mb-12 reveal">
          <p className="section-eyebrow mb-3">See It In Action</p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2332", lineHeight: 1.25 }}
          >
            Watch How We Build Your Growth System
          </h2>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <div
            className="relative aspect-video flex items-center justify-center"
            style={{ background: "#F0F4F8", border: "1px solid #E2E8F0" }}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer transition-all hover:scale-105"
                style={{ background: "#C9A84C" }}
              >
                <Play size={24} style={{ color: "#0D1B2A", marginLeft: 3 }} />
              </div>
              <p
                className="text-sm font-medium"
                style={{ color: "#9CA3AF", fontFamily: "'Montserrat', sans-serif" }}
              >
                Video Coming Soon
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#book" className="btn-gold">
              <span>Ready to Get Started? Book a Call</span>
              <ArrowRight size={15} />
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
      headline: "312% increase in qualified leads in 90 days",
      detail:
        "We rebuilt the entire lead funnel from ad to booking. By improving targeting, creative, and the follow-up sequence, cost-per-lead dropped by 60%.",
      metric: "312%",
      metricLabel: "More Qualified Leads",
    },
    {
      industry: "Landscaping",
      headline: "8.2x ROAS on Meta Ads within 60 days",
      detail:
        "AI-driven creative testing and precise audience segmentation delivered returns that significantly outperformed the client's previous agency.",
      metric: "8.2x",
      metricLabel: "Return on Ad Spend",
    },
    {
      industry: "Cleaning Services",
      headline: "47 booked jobs in the first month",
      detail:
        "Starting from no digital presence, we built a complete acquisition system — ads, landing page, and automated booking pipeline — in under 30 days.",
      metric: "47",
      metricLabel: "Jobs Booked, Month One",
    },
  ];

  return (
    <section id="results" style={{ background: "#F7F8FA" }}>
      <div className="container py-24">
        <div className="max-w-xl mb-16 reveal">
          <p className="section-eyebrow mb-3">Case Studies</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2332", lineHeight: 1.25 }}
          >
            Real Businesses. Measurable Results.
          </h2>
          <p style={{ color: "#718096", lineHeight: 1.8 }}>
            These are placeholder results — your actual case studies will be featured here.
            Every number below reflects the kind of outcomes we aim to deliver for every client.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="p-8 reveal"
              style={{
                transitionDelay: `${i * 100}ms`,
                background: "#FFFFFF",
                border: "1px solid #E8ECF0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              }}
            >
              <div
                className="text-4xl font-bold mb-1"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#C9A84C" }}
              >
                {c.metric}
              </div>
              <div
                className="text-xs font-semibold tracking-wider uppercase mb-6"
                style={{ color: "#9CA3AF", fontFamily: "'Montserrat', sans-serif" }}
              >
                {c.metricLabel}
              </div>
              <div
                className="text-xs font-semibold tracking-wider uppercase mb-2"
                style={{ color: "#C9A84C", fontFamily: "'Montserrat', sans-serif" }}
              >
                {c.industry}
              </div>
              <h3
                className="text-base font-bold mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2332" }}
              >
                {c.headline}
              </h3>
              <p className="text-sm" style={{ color: "#718096", lineHeight: 1.8 }}>
                {c.detail}
              </p>
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
        "RebelWave changed how we get leads entirely. Within 60 days we had more booked jobs than we could handle. The system they built just works, and the team is genuinely invested in your success.",
    },
    {
      name: "Client Name",
      company: "Renovation Company",
      quote:
        "I've worked with three agencies before RebelWave. None of them came close. They actually understand the full picture — not just ads, but the whole funnel from click to close.",
    },
    {
      name: "Client Name",
      company: "Landscaping Business",
      quote:
        "The AI-powered approach they use is a real differentiator. Our cost per lead dropped significantly and the quality of leads improved. I'd recommend them to any service business.",
    },
  ];

  return (
    <section id="testimonials" style={{ background: "#FFFFFF" }}>
      <div className="container py-24">
        <div className="text-center max-w-xl mx-auto mb-16 reveal">
          <p className="section-eyebrow mb-3">Testimonials</p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2332", lineHeight: 1.25 }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 reveal"
              style={{
                transitionDelay: `${i * 100}ms`,
                background: "#FFFFFF",
                border: "1px solid #E8ECF0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} fill="#C9A84C" style={{ color: "#C9A84C" }} />
                ))}
              </div>
              <p
                className="text-sm mb-8 italic"
                style={{ color: "#4A5568", lineHeight: 1.9 }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "#F0F4F8", color: "#C9A84C", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A2332" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "#9CA3AF" }}>
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
    hasAdvertised: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#FFFFFF",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    borderRadius: "2px",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.7rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.4)",
    marginBottom: "0.5rem",
  };

  return (
    <section id="book" style={{ background: "#0D1B2A" }}>
      <div className="container py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="reveal">
            <p className="section-eyebrow mb-4">Get Started</p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "#FFFFFF", lineHeight: 1.25 }}
            >
              Ready to Build a Consistent
              <br />
              <span style={{ color: "#C9A84C" }}>Lead Pipeline?</span>
            </h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Book a free 30-minute strategy call. We'll take a look at your current
              marketing, identify where the biggest opportunities are, and walk you
              through what a RebelWave system would look like for your business.
            </p>

            <div className="space-y-3 mb-10">
              {[
                "No obligation — just a clear, honest conversation",
                "We'll audit your current lead generation setup",
                "You'll leave with an actionable plan regardless",
                "We only take on clients we're confident we can help",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ChevronRight size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.05em" }}>
                Prefer to book directly?
              </p>
              <Link href="/book" className="btn-outline-gold text-sm">
                <span>Open Booking Calendar</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal">
            {submitted ? (
              <div
                className="p-12 text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(201,168,76,0.12)", border: "2px solid #C9A84C" }}
                >
                  <CheckCircle size={24} style={{ color: "#C9A84C" }} />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: "#FFFFFF" }}
                >
                  Message Received
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                  We'll be in touch within 24 hours to schedule your strategy call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 space-y-5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: "#FFFFFF" }}
                >
                  Tell Us About Your Business
                </h3>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Fill this in and we'll reach out to schedule your call.
                </p>

                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
                  { key: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (514) 000-0000" },
                  { key: "business", label: "Business Type", type: "text", placeholder: "e.g. Roofing, Landscaping, Cleaning..." },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={labelStyle}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                ))}

                {/* Yes/No: Have you ever done advertising before? */}
                <div>
                  <label style={labelStyle}>Have you ever done advertising before?</label>
                  <div className="flex gap-3 mt-1">
                    {["Yes", "No"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setForm({ ...form, hasAdvertised: option })}
                        className="flex-1 py-2.5 text-sm font-semibold transition-all duration-200"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          borderRadius: "2px",
                          border: form.hasAdvertised === option
                            ? "1.5px solid #C9A84C"
                            : "1px solid rgba(255,255,255,0.1)",
                          background: form.hasAdvertised === option
                            ? "rgba(201,168,76,0.12)"
                            : "rgba(255,255,255,0.04)",
                          color: form.hasAdvertised === option ? "#C9A84C" : "rgba(255,255,255,0.45)",
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>What's Your Biggest Challenge with Leads?</label>
                  <textarea
                    placeholder="Tell us where you're struggling..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <button type="submit" className="btn-gold w-full mt-2">
                  Send My Info — Let's Talk
                </button>

                <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.2)" }}>
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
    <footer style={{ background: "#091422", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={LOGO_URL} alt="RebelWave" className="h-9 w-auto mb-5" />
            <p
              className="text-sm mb-6"
              style={{ color: "rgba(255,255,255,0.35)", lineHeight: 1.8, maxWidth: 300 }}
            >
              AI-powered digital marketing for service-based businesses. We build the
              systems that bring you consistent, qualified leads.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs font-medium transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Montserrat', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="section-eyebrow mb-5">Navigation</div>
            <div className="space-y-3">
              {["What We Do", "Results", "About", "Testimonials", "Book a Call"].map((link) => (
                <div key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="section-eyebrow mb-5">Contact</div>
            <div className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}>
              <div>Montreal, Quebec, Canada</div>
              <div>
                <a
                  href="tel:5146512426"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                >
                  514-651-2426
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@rebelwave.ca"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                >
                  info@rebelwave.ca
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.2)", fontFamily: "'DM Sans', sans-serif" }}
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
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ClientLogosSection />
      <ServicesSection />
      <WhyAgencySection />
      <HowItWorksSection />
      <AboutSection />
      <VSLSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
