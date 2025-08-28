"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Menu,
  X,
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

// ✅ Main Page
export default function InfinityRGSite() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#whyus">Why Us</NavLink>
          <NavLink href="#process">Process</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Get in touch →
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Nav Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-950 text-white px-6 py-4 space-y-4 shadow-lg"
          >
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#whyus">Why Us</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="#contact"
              className="block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Get in touch →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

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
              Infinity RG helps you buy, manage, and maximize property assets from
              buy-to-let and Airbnb to buy-refurbish-sell with clear reporting and trusted partners.
            </p>

            {/* Buttons Row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-500 flex items-center">
                Request a call <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <a
                href="#services"
                className="text-sm font-medium underline underline-offset-4"
              >
                Explore services
              </a>
              <a
                href="https://pay.hotmart.com/G101548209U?checkoutMode=2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-md shadow-green-900/40 transition-transform hover:scale-105 ml-4"
              >
                Buy eBook →
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
