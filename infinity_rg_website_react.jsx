"use client"
import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { Building2, Hotel, Hammer, Mail, Phone, ArrowRight, ShieldCheck, Search, CircleDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
    {children}
  </a>
);

export default function InfinityRGSite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            {/* Infinity Logo */}
            <div className="w-10 h-10 rounded-2xl overflow-hidden border shadow-sm bg-white">
                          </div>
            <div className="leading-tight">
              <div className="text-xl font-semibold tracking-tight">Infinity RG</div>
              <div className="text-xs text-muted-foreground">Property • Management • Investments</div>
            </div>
          </a>



          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#value">Why Us</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl">
              <a href="#contact" className="flex items-center">Get in touch <ArrowRight className="ml-2 w-4 h-4"/></a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section id="home" className="pt-14 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Smart property solutions for landlords & investors
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Infinity RG helps you buy, manage, and maximize property assets from buy-to-let and Airbnb to buy-refurbish-sell with clear reporting and trusted partners.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button className="rounded-2xl">
                <a href="#contact" className="flex items-center">Request a call <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <a href="#services" className="text-sm font-medium underline underline-offset-4">Explore services</a>
            </div>
            <div className="mt-6 grid grid-cols-2 md:flex md:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Transparent management</div>
              <div className="flex items-center gap-2"><CircleDollarSign className="w-4 h-4"/> Investor-friendly returns</div>
              <div className="flex items-center gap-2"><Search className="w-4 h-4"/> Deal sourcing support</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            <div className="rounded-3xl border shadow-sm p-6 bg-white/5">
              <div className="text-sm text-muted-foreground mb-2">Quick enquiry</div>
              <form className="grid gap-3">
                <Input placeholder="Your name" required />
                <Input type="email" placeholder="Your email" required />
                <Input placeholder="What are you looking for? (e.g., BTL in Newcastle)" />
                <Textarea placeholder="Tell us a bit about your goals…" rows={4} />
                <Button className="rounded-2xl">Send enquiry</Button>
                <p className="text-xs text-muted-foreground">Or email us directly: <a className="underline" href="mailto:contactestates@infinityrg.co.uk">contactestates@infinityrg.co.uk</a></p>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">What we do</h2>
          <p className="text-muted-foreground mt-2">End-to-end services designed for busy landlords and hands-on investors.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card className="rounded-2xl bg-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><Building2 className="w-5 h-5"/> Landlord Services</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Tenant find, compliance, rent collection, and maintenance coordination with clear monthly statements.
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><Home className="w-5 h-5"/> Buy-to-Let (BTL)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Sourcing, analysis, and acquisition support to build a resilient, cash-flowing portfolio.
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><Hotel className="w-5 h-5"/> Short-Lets / Airbnb</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Set-up, pricing, and guest management for higher occupancy and reviews—without the day-to-day hassle.
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><Hammer className="w-5 h-5"/> Buy-Refurb-Sell</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Light to heavy refurbs managed end-to-end with budgets, timelines, and resale strategy aligned to your goals.
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Value */}
      <section id="whyus" className="py-20 bg-[#1e293b] text-white">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Why Choose Infinity RG</h2>
    <p className="text-lg">
      We focus on transparency, investor-friendly returns, and end-to-end management
      — giving you peace of mind while maximizing your property portfolio.
    </p>
  </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { title: "Trust first", desc: "Clear comms, honest updates, and no surprises—ever.", icon: <ShieldCheck className="w-5 h-5"/> },
            { title: "Data-driven deals", desc: "Deals filtered by yield, risk, and exit options you can defend.", icon: <Search className="w-5 h-5"/> },
            { title: "Aligned incentives", desc: "We win when you do—structured for long-term relationships.", icon: <CircleDollarSign className="w-5 h-5"/> },
          ].map((v, i) => (
            <Card key={i} className="rounded-2xl bg-white/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">{v.icon}{v.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{v.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
          <p className="text-muted-foreground mt-2">A simple, transparent workflow from hello to handover.</p>
        </div>
        <ol className="grid md:grid-cols-4 gap-5 list-decimal list-inside text-sm">
          <li className="rounded-2xl border p-4 bg-white/5">
            <div className="font-medium">Discovery</div>
            <div className="text-muted-foreground">Share your goals, budget, and timelines.</div>
          </li>
          <li className="rounded-2xl border p-4 bg-white/5">
            <div className="font-medium">Plan</div>
            <div className="text-muted-foreground">We outline options, expected returns, and next steps.</div>
          </li>
          <li className="rounded-2xl border p-4 bg-white/5">
            <div className="font-medium">Execute</div>
            <div className="text-muted-foreground">We source, manage, and report progress clearly.</div>
          </li>
          <li className="rounded-2xl border p-4 bg-white/5">
            <div className="font-medium">Review</div>
            <div className="text-muted-foreground">Track outcomes and plan the next move together.</div>
          </li>
        </ol>
      </Section>

      {/* About */}
      <Section id="about" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">About Infinity RG</h2>
          <p className="text-muted-foreground mt-2 max-w-3xl">
            We are a property management and investment team focused on practical results and long-term partnerships.
            Based in Europe, active in the UK and Italy, and open to opportunities further afield where the numbers make sense.
          </p>
        </div>
        <div className="rounded-3xl border p-6 grid md:grid-cols-3 gap-4 text-sm bg-white/5">
          <div>
            <div className="text-muted-foreground">Registered email</div>
            <a className="font-medium underline" href="mailto:contactestates@infinityrg.co.uk">contactestates@infinityrg.co.uk</a>
          </div>
          <div>
            <div className="text-muted-foreground">Instagram</div>
            <a className="font-medium underline" href="#" onClick={(e)=>e.preventDefault()}>@InfinityRG</a>
          </div>
          <div>
            <div className="text-muted-foreground">Response hours</div>
            <div className="font-medium">Mon–Fri, 09:00–17:30 CET</div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Let’s talk</h2>
          <p className="text-muted-foreground mt-2">Tell us what you’re planning and we’ll get back to you within one business day.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border p-6 bg-white/5">
            <form className="grid sm:grid-cols-2 gap-3">
              <Input placeholder="Full name" required />
              <Input type="email" placeholder="Email" required />
              <Input placeholder="Phone (optional)" />
              <Input placeholder="Location / Market" />
              <Textarea className="sm:col-span-2" rows={6} placeholder="Your message" />
              <Button className="rounded-2xl sm:col-span-2 flex items-center justify-center">
                <Mail className="mr-2 w-4 h-4"/> Send message
              </Button>
            </form>
          </div>
          <div className="rounded-3xl border p-6 space-y-4 bg-white/5">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1"/>
              <div>
                <div className="text-sm text-muted-foreground">Prefer email?</div>
                <a className="font-medium underline" href="mailto:contactestates@infinityrg.co.uk">contactestates@infinityrg.co.uk</a>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">We typically reply the same business day.</div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t mt-12">
        <Section className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Infinity RG. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" onClick={(e)=>e.preventDefault()} className="hover:text-foreground">Privacy</a>
            <a href="#" onClick={(e)=>e.preventDefault()} className="hover:text-foreground">Terms</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}

""")
open(os.path.join(base, "app", "page.tsx"), "w").write(page_tsx)

## Run
1. Extract the folder.
2. Open **Command Prompt** or **PowerShell**.
3. `cd` into the folder.
4. Install: `npm install`
5. Start: `npm run dev`
6. Open http://localhost:3000
""")
open(os.path.join(base, "README.md"), "w").write(readme)

zip_path = "/mnt/data/infinity-rg-site-light-bg.zip"
with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as z:
    for root, _, files in os.walk(base):
        for file in files:
            full = os.path.join(root, file)
            z.write(full, arcname=os.path.relpath(full, base))

zip_path
