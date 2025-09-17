"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Hotel,
  Hammer,
  Home as HomeIcon,
  Phone,
  ArrowRight,
  ShieldCheck,
  Search,
  CircleDollarSign,
} from "lucide-react";

// --- Property config (put your real listing URLs here) ---
const PROPERTIES = [
  {
    id: "ivrea",
    name: "Ivrea Apartment",
    airbnbUrl: "https://www.airbnb.com/rooms/XXXXXXXX", // e.g. /rooms/12345678
    bookingUrl: "https://www.booking.com/hotel/xx/YOUR-PROPERTY.html",
    maxGuests: 6,
  },
  // Add more properties if you have them
];

function buildAirbnbUrl(baseUrl: string, checkIn?: string, checkOut?: string, adults?: number) {
  try {
    const url = new URL(baseUrl);
    if (checkIn) url.searchParams.set("check_in", checkIn);
    if (checkOut) url.searchParams.set("check_out", checkOut);
    if (adults && adults > 0) url.searchParams.set("adults", String(adults));
    return url.toString();
  } catch {
    // Fallback if a full URL isn't provided yet
    const params = new URLSearchParams();
    if (checkIn) params.set("check_in", checkIn);
    if (checkOut) params.set("check_out", checkOut);
    if (adults && adults > 0) params.set("adults", String(adults));
    return `${baseUrl}?${params.toString()}`;
  }
}

function buildBookingUrl(baseUrl: string, checkIn?: string, checkOut?: string, adults?: number) {
  // Booking.com commonly accepts: checkin, checkout, group_adults, no_rooms, group_children
  try {
    const url = new URL(baseUrl);
    if (checkIn) url.searchParams.set("checkin", checkIn);
    if (checkOut) url.searchParams.set("checkout", checkOut);
    if (adults && adults > 0) url.searchParams.set("group_adults", String(adults));
    url.searchParams.set("no_rooms", "1");
    url.searchParams.set("group_children", "0");
    return url.toString();
  } catch {
    const params = new URLSearchParams();
    if (checkIn) params.set("checkin", checkIn);
    if (checkOut) params.set("checkout", checkOut);
    if (adults && adults > 0) params.set("group_adults", String(adults));
    params.set("no_rooms", "1");
    params.set("group_children", "0");
    return `${baseUrl}?${params.toString()}`;
  }
}

// --- Simple in-file fallback for QuickEnquiryForm (avoids missing import path errors) ---
function QuickEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Website enquiry from InfinityRG");
    const body = encodeURIComponent(`Name: ${name}
Email: ${email}

${message}`);
    window.location.href = `mailto:contactestates@infinityrg.co.uk?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="block text-sm text-slate-300">Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-2xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm text-slate-300">Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-2xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm text-slate-300">Message</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-2xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Tell us about your plans"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-2xl bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-sm font-semibold transition shadow-lg shadow-blue-600/20"
      >
        Send enquiry
      </button>
      {sent && (
        <p className="text-xs text-emerald-400">Opening your email client… if nothing happens, email us at contactestates@infinityrg.co.uk</p>
      )}
    </form>
  );
}

// Section component
const Section = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    id={id}
    className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </section>
);

// NavLink component
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

// ✅ Main Page (professional & interactive card like earlier layout)
export default function InfinityRGSite() {
  const [propertyId, setPropertyId] = useState(PROPERTIES[0].id);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(2);

  const property = useMemo(() => PROPERTIES.find(p => p.id === propertyId)!, [propertyId]);

  const airbnbUrl = useMemo(() => buildAirbnbUrl(property.airbnbUrl, checkIn, checkOut, guests), [property, checkIn, checkOut, guests]);
  const bookingUrl = useMemo(() => buildBookingUrl(property.bookingUrl, checkIn, checkOut, guests), [property, checkIn, checkOut, guests]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* HEADER */}
      <header className="bg-slate-950 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          <div className="w-40 h-auto relative">
            <img
              src="/logo.png"
              alt="Infinity RG"
              className="max-h-30 w-auto object-contain"
            />
          </div>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#whyus">Why Us</NavLink>
          <NavLink href="#process">Process</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Get in touch →
        </a>
      </header>

      {/* HERO */}
      <Section id="home" className="pt-14 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Smart property solutions for landlords & investors
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Infinity RG helps you buy, manage, and maximize property assets
              from buy-to-let and Airbnb to buy-refurbish-sell with clear
              reporting and trusted partners.
            </p>

            {/* Buttons Row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* ✅ Calendly link */}
              <a
                href="https://calendly.com/infinityboutiqueh/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-500 flex items-center"
              >
                Request a call <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              <a
                href="#services"
                className="text-sm font-medium underline underline-offset-4"
              >
                Explore services
              </a>

              {/* ✅ Buy eBook Button */}
              <a
                href="https://pay.hotmart.com/G101548209U?checkoutMode=2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-md shadow-green-900/40 transition-transform hover:scale-105 ml-4"
              >
                Buy eBook →
              </a>
            </div>

            {/* Feature highlights */}
            <div className="mt-6 grid grid-cols-2 md:flex md:flex-row gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Transparent management
              </div>
              <div className="flex items-center gap-2">
                <CircleDollarSign className="w-4 h-4" /> Investor-friendly
                returns
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" /> Deal sourcing support
              </div>
            </div>
          </motion.div>

          {/* ✅ Booking Card: interactive, professional layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="relative rounded-2xl border border-slate-700/60 bg-[#0f172a] p-6 shadow-2xl shadow-black/40 ring-1 ring-white/5">
              <h3 className="text-lg font-semibold text-slate-100">Book your stay</h3>
              <p className="mt-1 text-sm text-slate-400">Select details here, complete booking on Airbnb or Booking.com</p>

              {/* Property (only show if multiple) */}
              {PROPERTIES.length > 1 && (
                <div className="mt-4">
                  <label className="block text-sm text-slate-300">Property</label>
                  <select
                    className="mt-2 w-full rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={propertyId}
                    onChange={(e) => setPropertyId(e.target.value)}
                  >
                    {PROPERTIES.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Dates */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-slate-300">Check‑in</label>
                  <input
                    type="date"
                    className="mt-2 w-full rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300">Check‑out</label>
                  <input
                    type="date"
                    className="mt-2 w-full rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="mt-4">
                <label className="block text-sm text-slate-300">Guests</label>
                <div className="mt-2 flex items-center gap-3">
                  <button
                    className="h-10 w-10 rounded-xl border border-slate-700 bg-slate-900/70 text-lg leading-none hover:bg-slate-800"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    aria-label="Decrease guests"
                    type="button"
                  >
                    −
                  </button>
                  <div className="min-w-[3rem] text-center font-semibold">{guests}</div>
                  <button
                    className="h-10 w-10 rounded-xl border border-slate-700 bg-slate-900/70 text-lg leading-none hover:bg-slate-800"
                    onClick={() => setGuests((g) => Math.min(property.maxGuests, g + 1))}
                    aria-label="Increase guests"
                    type="button"
                  >
                    +
                  </button>
                  <span className="text-xs text-slate-400">max {property.maxGuests}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={airbnbUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-600/25"
                >
                  Book on Airbnb →
                </a>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-semibold hover:bg-slate-700 transition border border-slate-700"
                >
                  Book on Booking.com →
                </a>
              </div>

              {/* Subtle glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-600/10 via-transparent to-violet-500/10 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">What we do</h2>
          <p className="text-slate-400 mt-2">
            End-to-end services designed for busy landlords and hands-on
            investors.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Landlord Services",
              desc: "Tenant find, compliance, rent collection, and maintenance coordination with clear monthly statements.",
              icon: <Building2 className="w-5 h-5" />,
            },
            {
              title: "Buy-to-Let (BTL)",
              desc: "Sourcing, analysis, and acquisition support to build a resilient, cash-flowing portfolio.",
              icon: <HomeIcon className="w-5 h-5" />,
            },
            {
              title: "Short-Lets / Airbnb",
              desc: "Set-up, pricing, and guest management for higher occupancy and reviews—without the day-to-day hassle.",
              icon: <Hotel className="w-5 h-5" />,
            },
            {
              title: "Buy-Refurb-Sell",
              desc: "Light to heavy refurbs managed end-to-end with budgets, timelines, and resale strategy aligned to your goals.",
              icon: <Hammer className="w-5 h-5" />,
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-700 text-white rounded-2xl shadow-md shadow-blue-900/40 p-4"
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                {s.icon} {s.title}
              </div>
              <p className="text-sm text-slate-300 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section id="whyus" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">
            Why choose Infinity RG
          </h2>
          <p className="text-slate-400 mt-2">
            We combine diligence with transparency to protect your capital and
            time.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Trust first",
              desc: "Clear comms, honest updates, and no surprises—ever.",
              icon: <ShieldCheck className="w-5 h-5" />,
            },
            {
              title: "Data-driven deals",
              desc: "Deals filtered by yield, risk, and exit options you can defend.",
              icon: <Search className="w-5 h-5" />,
            },
            {
              title: "Aligned incentives",
              desc: "We win when you do—structured for long-term relationships.",
              icon: <CircleDollarSign className="w-5 h-5" />,
            },
          ].map((v, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-700 text-white rounded-2xl shadow-md shadow-blue-900/40 p-4"
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                {v.icon} {v.title}
              </div>
              <p className="text-sm text-slate-300 mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ✅ PROCESS */}
      <Section id="process" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Our Process</h2>
          <p className="text-slate-400 mt-2">
            A simple, step-by-step process designed to make investing and
            managing property smooth and transparent.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { step: "1. Consultation", desc: "We understand your goals and financial situation." },
            { step: "2. Deal Sourcing", desc: "We identify the right opportunities tailored to your needs." },
            { step: "3. Management", desc: "From tenant find to compliance and maintenance." },
            { step: "4. Reporting", desc: "Clear, transparent updates so you always stay in control." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-700 text-white rounded-2xl shadow-md shadow-blue-900/40 p-4"
            >
              <div className="text-lg font-semibold">{item.step}</div>
              <p className="text-sm text-slate-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">
            About Infinity RG
          </h2>
          <p className="text-slate-400 mt-2 max-w-3xl">
            We are a property management and investment team focused on
            practical results and long-term partnerships. Based in Europe, active
            in the UK and Italy, and open to opportunities further afield where
            the numbers make sense.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl shadow-md shadow-blue-900/40 p-6 grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-slate-400">Registered email</div>
            <a
              className="font-medium underline text-white"
              href="mailto:contactestates@infinityrg.co.uk"
            >
              contactestates@infinityrg.co.uk
            </a>
          </div>
          <div>
            <div className="text-slate-400">Instagram</div>
            <a
              className="font-medium underline text-white"
              href="https://www.instagram.com/infinityrg_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @InfinityRG
            </a>
          </div>
          <div>
            <div className="text-slate-400">Response hours</div>
            <div className="font-medium">Mon–Fri, 09:00–17:30 CET</div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Let’s talk</h2>
          <p className="text-slate-400 mt-2">
            Tell us what you’re planning and we’ll get back to you within one
            business day.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900 border border-slate-700 text-white rounded-3xl shadow-md shadow-blue-900/40 p-6">
            <QuickEnquiryForm />
          </div>
          <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl shadow-md shadow-blue-900/40 p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1" />
              <div>
                <div className="text-sm text-slate-400">Prefer email?</div>
                <a
                  className="font-medium underline text-white"
                  href="mailto:contactestates@infinityrg.co.uk"
                >
                  contactestates@infinityrg.co.uk
                </a>
              </div>
            </div>
            <div className="text-sm text-slate-400">
              We typically reply the same business day.
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 mt-12">
        <Section className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>© {new Date().getFullYear()} Infinity RG. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
