"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Menu,
  X,
} from "lucide-react";

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

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="block md:inline text-sm font-medium text-slate-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

// ✅ Quick Enquiry Form Component
function QuickEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enquiry submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="px-3 py-2 rounded-lg text-black"
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-3 py-2 rounded-lg text-black"
      />
      <textarea
        placeholder="Your message"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="px-3 py-2 rounded-lg text-black"
      />
      <button
        type="submit"
        className="rounded-2xl bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white flex items-center justify-center"
      >
        <Mail className="mr-2 w-4 h-4" /> Send Enquiry
      </button>
    </form>
  );
}

export default function InfinityRGSite() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

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

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-950 text-white px-6 py-4 space-y-4 shadow-lg"
          >
            <NavLink href="#services" onClick={handleClose}>
              Services
            </NavLink>
            <NavLink href="#whyus" onClick={handleClose}>
              Why Us
            </NavLink>
            <NavLink href="#process" onClick={handleClose}>
              Process
            </NavLink>
            <NavLink href="#about" onClick={handleClose}>
              About
            </NavLink>
            <NavLink href="#contact" onClick={handleClose}>
              Contact
            </NavLink>
            <a
              href="#contact"
              onClick={handleClose}
              className="block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Get in touch →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO with Quick Enquiry Form */}
      <Section id="home" className="pt-14 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Smart property solutions for landlords & investors
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Infinity RG helps you buy, manage, and maximize property assets from buy-to-let and Airbnb to buy-refurbish-sell with clear reporting and trusted partners.
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-md shadow-blue-900/40 p-6">
              <div className="text-sm text-slate-400 mb-2">Quick enquiry</div>
              <QuickEnquiryForm />
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
