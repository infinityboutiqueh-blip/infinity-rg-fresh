import React, { useState } from "react";

// Elegant + brighter one-page mock based on https://www.infinityrg.co.uk/
// Changes requested:
// - Brighter, more elegant look
// - Remove “Book your stay” (no Airbnb)
// - Keep it simple and aligned to current InfinityRG positioning

const Button = ({ variant = "primary", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-200";
  const styles =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
      : variant === "secondary"
        ? "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
        : "bg-transparent text-slate-700 hover:bg-slate-50";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
};

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>
);

const AnchorLink = ({ href, children }) => (
  <a href={href} className="text-sm font-semibold text-slate-600 hover:text-slate-900">
    {children}
  </a>
);

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Nav() {
  return (
    <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-white font-black">RG</div>
          <div className="leading-tight">
            <div className="text-sm font-black text-slate-900">Infinity RG</div>
            <div className="text-xs text-slate-500">Landlords • Investors • Asset Growth</div>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <AnchorLink href="#services">Services</AnchorLink>
          <AnchorLink href="#why">Why Us</AnchorLink>
          <AnchorLink href="#process">Process</AnchorLink>
          <AnchorLink href="#about">About</AnchorLink>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => scrollToId("contact")}>Get in touch</Button>
          <Button onClick={() => window.open("https://calendly.com", "_blank")}>Book a call</Button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(79,70,229,0.14),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(14,165,233,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.10),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Transparent management • Investor mindset
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Elegant property management & investment support
            </h1>

            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Infinity RG helps you buy, manage, and optimise property assets — focused on buy-to-let, refurb projects,
              and long-term value.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => window.open("https://calendly.com", "_blank")}>Request a call</Button>
              <Button variant="secondary" onClick={() => scrollToId("services")}>Explore services</Button>
              <Button variant="secondary" onClick={() => window.open("https://pay.hotmart.com", "_blank")}>Buy eBook →</Button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {["Clear reporting", "Trusted partners", "Deal sourcing support"].map((t) => (
                <div key={t} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                  {t}
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-slate-500">
              Note: Infinity RG is a property management & investment team — not an estate agency listing the whole market.
            </div>
          </div>

          <Card className="p-6">
            <div className="text-sm font-black text-slate-900">Quick snapshot</div>
            <div className="mt-1 text-sm text-slate-600">A clean, modern block to replace the Airbnb widget.</div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs font-bold text-slate-500">Focus</div>
                <div className="mt-1 text-sm font-black text-slate-900">BTL • Refurb</div>
                <div className="mt-1 text-xs text-slate-500">Long-term value</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs font-bold text-slate-500">Reporting</div>
                <div className="mt-1 text-sm font-black text-slate-900">Simple & clear</div>
                <div className="mt-1 text-xs text-slate-500">Monthly statements</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs font-bold text-slate-500">Execution</div>
                <div className="mt-1 text-sm font-black text-slate-900">Project-led</div>
                <div className="mt-1 text-xs text-slate-500">Budgets & timelines</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs font-bold text-slate-500">Support</div>
                <div className="mt-1 text-sm font-black text-slate-900">Hands-on</div>
                <div className="mt-1 text-xs text-slate-500">Owner-first</div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-sm font-black text-slate-900">What you can expect</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>• Straight answers and realistic numbers</li>
                <li>• Practical plan: acquire → refurb (if needed) → manage</li>
                <li>• Clear communication with evidence</li>
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button onClick={() => scrollToId("contact")} className="flex-1">Request a plan</Button>
              <Button variant="secondary" onClick={() => scrollToId("process")}>See process</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Section({ id, title, subtitle, children, alt = false }) {
  return (
    <div id={id} className={alt ? "bg-slate-50" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-3 text-base text-slate-600">{subtitle}</p> : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}

function Services() {
  const items = [
    {
      title: "Landlord Services",
      desc: "Tenant find, compliance support, rent collection, and maintenance coordination with clear monthly statements.",
    },
    {
      title: "Buy-to-Let (BTL)",
      desc: "Sourcing, analysis, and acquisition support to build a resilient, cash-flowing portfolio.",
    },
    {
      title: "Buy • Refurb • Sell",
      desc: "Refurbs managed end-to-end with budgets, timelines, and a clear exit strategy aligned to your goals.",
    },
    {
      title: "Deal Sourcing & Due Diligence",
      desc: "Filter opportunities properly — numbers, risks, and the real plan behind the deal.",
    },
  ];

  return (
    <Section
      id="services"
      title="What we do"
      subtitle="Simple services that support owners and investors — without pretending to be a full agency."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((it) => (
          <Card key={it.title} className="p-6">
            <div className="text-lg font-black text-slate-900">{it.title}</div>
            <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            <div className="mt-5">
              <Button variant="secondary" onClick={() => scrollToId("contact")}>Ask about this</Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Why() {
  const items = [
    { title: "Trust first", desc: "Clear comms, honest updates, and no surprises." },
    { title: "Numbers that make sense", desc: "No fantasy returns — just what the deal can realistically do." },
    { title: "Execution matters", desc: "Reliable partners, clear scope, and timelines you can track." },
  ];

  return (
    <Section
      id="why"
      alt
      title="Why choose Infinity RG"
      subtitle="We combine diligence with transparency to protect your capital and time."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((it) => (
          <Card key={it.title} className="p-6">
            <div className="text-lg font-black text-slate-900">{it.title}</div>
            <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  const steps = [
    { n: "1", t: "Consultation", d: "We understand your goals and timeline." },
    { n: "2", t: "Plan", d: "We map the best route: acquisition, refurb (if needed), and management." },
    { n: "3", t: "Execution", d: "We coordinate the work and keep you updated with evidence." },
    { n: "4", t: "Reporting", d: "Clear statements and performance updates so you stay in control." },
  ];

  return (
    <Section
      id="process"
      title="Our process"
      subtitle="A simple step-by-step flow to keep everything smooth and transparent."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {steps.map((s) => (
          <Card key={s.n} className="p-6">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-white font-black">{s.n}</div>
              <div>
                <div className="text-lg font-black text-slate-900">{s.t}</div>
                <p className="mt-1 text-sm text-slate-600">{s.d}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section
      id="about"
      alt
      title="About Infinity RG"
      subtitle="We’re focused on practical results and long-term partnerships."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="p-6">
          <div className="text-sm font-black text-slate-900">What we are</div>
          <p className="mt-2 text-sm text-slate-600">
            A property management and investment team. We help owners operate properties properly, and we support investors
            with sourcing, analysis, and project execution.
          </p>
        </Card>
        <Card className="p-6">
          <div className="text-sm font-black text-slate-900">Contact</div>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <div>
              <span className="font-semibold text-slate-900">Email:</span> contactestates@infinityrg.co.uk
            </div>
            <div>
              <span className="font-semibold text-slate-900">Instagram:</span> @InfinityRG
            </div>
            <div>
              <span className="font-semibold text-slate-900">Hours:</span> Mon–Fri, 09:00–17:30 CET
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const canSend = name.trim() && email.trim() && message.trim();

  return (
    <Section
      id="contact"
      title="Let’s talk"
      subtitle="Tell us what you’re planning and we’ll get back to you within one business day."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="p-6">
          <div className="text-sm font-black text-slate-900">Send enquiry</div>
          <div className="mt-4 grid gap-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Email"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[120px] rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Message"
            />
            <Button
              disabled={!canSend}
              className={!canSend ? "opacity-50 cursor-not-allowed" : ""}
              onClick={() => alert("Mock: form sent")}
            >
              Send enquiry
            </Button>
          </div>
          <div className="mt-4 text-sm text-slate-500">Prefer email? contactestates@infinityrg.co.uk</div>
          <div className="mt-1 text-xs text-slate-400">We typically reply the same business day.</div>
        </Card>

        <Card className="p-6">
          <div className="text-sm font-black text-slate-900">Quick options</div>
          <p className="mt-2 text-sm text-slate-600">
            If you want speed: book a call. If you want detail: send the form with your area + property type + timeline.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button onClick={() => window.open("https://calendly.com", "_blank")}>Book a call</Button>
            <Button variant="secondary" onClick={() => scrollToId("services")}>See services</Button>
          </div>
          <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <div className="font-black text-slate-900">Privacy note</div>
            <div className="mt-1">We can keep property details private (city/region only, no full addresses).</div>
          </div>
        </Card>
      </div>

      <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">© {new Date().getFullYear()} Infinity RG. All rights reserved.</div>
    </Section>
  );
}

export default function InfinityRG_ElegantBrightMock() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <Hero />
      <Services />
      <Why />
      <Process />
      <About />
      <Contact />
    </div>