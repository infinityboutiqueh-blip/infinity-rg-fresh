"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Hotel,
  Hammer,
  Home as HomeIcon,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Search,
  CircleDollarSign,
} from "lucide-react";

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

// ✅ Main Page component (ONLY ONE default export here)
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
              Infinity RG helps you buy, manage, and maximize property assets
              from buy-to-let and Airbnb to buy-refurbish-sell with clear
              reporting and trusted partners.
            </p>

            {/* Buttons Row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-500 flex items-center">
                Request a call <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <a href="#services" className="text-sm font-medium underline underline-offset-4">
                Explore services
              </a>
              {/* Buy eBook Button */}
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

          {/* Quick Enquiry Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl shadow-md shadow-blue-900/40 p-6">
              <div className="text-sm text-slate-400 mb-2">Quick enquiry</div>
              <p className="text-slate-400">Enquiry form coming soon...</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ... SERVICES, WHY US, ABOUT, CONTACT, FOOTER (unchanged) ... */}
    </div>
  );
}
