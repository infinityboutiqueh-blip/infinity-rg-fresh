"use client";
import React from "react";
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
import QuickEnquiryForm from "../components/QuickEnquiryForm";

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
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

// ✅ Main Page
export default function InfinityRGSite() {
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
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Smart property solutions for landlords & investors
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Infinity RG helps you buy, manage, and maximize property assets from buy-to-let and Airbnb to buy-refurbish-sell with clear reporting and trusted partners.
            </p>

            {/* Buttons Row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* ✅ Calendly link added */}
              <a
                href="https://calendly.com/infinityboutiqueh/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-500 flex items-center"
              >
                Request a call <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              <a href="#services" className="text-sm font-medium underline underline-offset-4">
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
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Transparent management</div>
              <div className="flex items-center gap-2"><CircleDollarSign className="w-4 h-4"/> Investor-friendly returns</div>
              <div className="flex items-center gap-2"><Search className="w-4 h-4"/> Deal sourcing support</div>
            </div>
          </motion.div>

          {/* ✅ Quick Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl shadow-md shadow-blue-900/40 p-6">
              <div className="text-sm text-slate-400 mb-2">Quick enquiry</div>
              <QuickEnquiryForm /> {/* 👈 FORM HERE */}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">What we do</h2>
          <p className="text-slate-400 mt-2">End-to-end services designed for busy landlords and hands-on investors.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Landlord Services", desc: "Tenant find, compliance, rent collection, and maintenance coordination with clear monthly statements.", icon: <Building2 className="w-5 h-5"/> },
            { title: "Buy-to-Let (BTL)", desc: "Sourcing, analysis, and acquisition support to build a resilient, cash-flowing portfolio.", icon: <HomeIcon className="w-5 h-5"/> },
            { title: "Short-Lets / Airbnb", desc: "Set-up, pricing, and guest management for higher occupancy and reviews—without the day-to-day hassle.", icon: <Hotel className="w-5 h-5"/> },
            { title: "Buy-Refurb-Sell", desc: "Light to heavy refurbs managed end-to-end with budgets, timelines, and resale strategy aligned to your goals.", icon: <Hammer className="w-5 h-5"/> },
          ].map((s, i) => (
            <div key={i} className="bg-slate-900 border border-slate-700 text-white rounded-2xl shadow-md shadow-blue-900/40 p-4">
              <div className="flex items-center gap-2 text-lg font-semibold">{s.icon} {s.title}</div>
              <p className="text-sm text-slate-300 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section id="whyus" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Why choose Infinity RG</h2>
          <p className="text-slate-400 mt-2">We combine diligence with transparency to protect your capital and time.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { title: "Trust first", desc: "Clear comms, honest updates, and no surprises—ever.", icon: <ShieldCheck className="w-5 h-5"/> },
            { title: "Data-driven deals", desc: "Deals filtered by yield, risk, and exit options you can defend.", icon: <Search className="w-5 h-5"/> },
            { title: "Aligned incentives", desc: "We win when you do—structured for long-term relationships.", icon: <CircleDollarSign className="w-5 h-5"/> },
          ].map((v, i) => (
            <div key={i} className="bg-slate-900 border border-slate-700 text-white rounded-2xl shadow-md shadow-blue-900/40 p-4">
              <div className="flex items-center gap-2 text-lg font-semibold">{v.icon} {v.title}</div>
              <p className="text-sm text-slate-300 mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">About Infinity RG</h2>
          <p className="text-slate-400 mt-2 max-w-3xl">
            We are a property management and investment team focused on practical results and long-term partnerships. Based in Europe,
            active in the UK and Italy, and open to opportunities further afield where the numbers make sense.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl shadow-md shadow-blue-900/40 p-6 grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-slate-400">Registered email</div>
            <a className="font-medium underline text-white" href="mailto:contactestates@infinityrg.co.uk">contactestates@infinityrg.co.uk</a>
          </div>
          <div>
            <div className="text-slate-400">Instagram</div>
            <a className="font-medium underline text-white" href="https://www.instagram.com/infinityrg_" target="_blank" rel="noopener noreferrer">@InfinityRG</a>
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
          <p className="text-slate-400 mt-2">Tell us what you’re planning and we’ll get back to you within one business day.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900 border border-slate-700 text-white rounded-3xl shadow-md shadow-blue-900/40 p-6">
            {/* ✅ Enquiry form */}
            <QuickEnquiryForm />
          </div>
          <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl shadow-md shadow-blue-900/40 p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1"/>
              <div>
                <div className="text-sm text-slate-400">Prefer email?</div>
                <a className="font-medium underline text-white" href="mailto:contactestates@infinityrg.co.uk">contactestates@infinityrg.co.uk</a>
              </div>
            </div>
            <div className="text-sm text-slate-400">We typically reply the same business day.</div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 mt-12">
        <Section className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>© {new Date().getFullYear()} Infinity RG. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
