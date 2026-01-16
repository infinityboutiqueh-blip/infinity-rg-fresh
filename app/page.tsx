import React from "react";

type CardProps = { children: React.ReactNode; className?: string };
function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  alt?: boolean;
  children: React.ReactNode;
};
function Section({ id, title, subtitle, alt = false, children }: SectionProps) {
  return (
    <section id={id} className={alt ? "bg-slate-50" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-3 text-base text-slate-600">{subtitle}</p> : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-white font-black">
              RG
            </div>
            <div className="leading-tight">
              <div className="text-sm font-black">Infinity RG</div>
              <div className="text-xs text-slate-500">Landlords • Investors • Asset Growth</div>
            </div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-slate-900">Services</a>
            <a href="#why" className="text-sm font-semibold text-slate-600 hover:text-slate-900">Why Us</a>
            <a href="#process" className="text-sm font-semibold text-slate-600 hover:text-slate-900">Process</a>
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-slate-900">About</a>
            <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-slate-900">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Get in touch
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              className="rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              rel="noreferrer"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(79,70,229,0.14),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(14,165,233,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.10),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
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
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Request a call
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Explore services
              </a>
              <a
                href="https://pay.hotmart.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Buy eBook →
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              Note: Infinity RG is a property management & investment team — not an estate agency listing the whole market.
            </div>
          </div>

          <Card className="p-6">
            <div className="text-sm font-black text-slate-900">Quick snapshot</div>
            <div className="mt-1 text-sm text-slate-600">Simple. Elegant. Clear.</div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { k: "Focus", v: "BTL • Refurb" },
                { k: "Reporting", v: "Clear statements" },
                { k: "Execution", v: "Budgets & timelines" },
                { k: "Support", v: "Owner-first" },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs font-bold text-slate-500">{x.k}</div>
                  <div className="mt-1 text-sm font-black text-slate-900">{x.v}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Section
        id="services"
        title="What we do"
        subtitle="Simple services for landlords and investors."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            ["Landlord Services", "Tenant find, compliance support, rent collection, maintenance coordination."],
            ["Buy-to-Let (BTL)", "Sourcing, analysis, and acquisition support."],
            ["Buy • Refurb • Sell", "Project execution with clear scope and timelines."],
            ["Deal Sourcing & Due Diligence", "Proper numbers, risk checks, and deal planning."],
          ].map(([t, d]) => (
            <Card key={t} className="p-6">
              <div className="text-lg font-black text-slate-900">{t}</div>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="why" alt title="Why choose Infinity RG" subtitle="Trust, clarity, and execution.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ["Trust first", "Clear comms and honest updates."],
            ["Realistic numbers", "No fantasy returns."],
            ["Execution matters", "Partners you can rely on."],
          ].map(([t, d]) => (
            <Card key={t} className="p-6">
              <div className="text-lg font-black text-slate-900">{t}</div>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="process" title="Our process" subtitle="Simple step-by-step.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            ["1", "Consultation", "Goals + timeline."],
            ["2", "Plan", "Acquisition / refurb / management route."],
            ["3", "Execution", "We coordinate and keep you updated."],
            ["4", "Reporting", "Clear statements so you stay in control."],
          ].map(([n, t, d]) => (
            <Card key={n} className="p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-white font-black">
                  {n}
                </div>
                <div>
                  <div className="text-lg font-black text-slate-900">{t}</div>
                  <p className="mt-1 text-sm text-slate-600">{d}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="about" alt title="About Infinity RG" subtitle="Focused on practical results and long-term partnerships.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-black text-slate-900">What we are</div>
            <p className="mt-2 text-sm text-slate-600">
              A property management and investment team supporting owners with sourcing, analysis, and project execution.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-black text-slate-900">Contact</div>
            <p className="mt-2 text-sm text-slate-600">
              Email: <span className="font-semibold text-slate-900">contactestates@infinityrg.co.uk</span>
            </p>
          </Card>
        </div>
      </Section>

      <Section id="contact" title="Let’s talk" subtitle="Email or book a call.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-black text-slate-900">Email</div>
            <p className="mt-2 text-sm text-slate-600">contactestates@infinityrg.co.uk</p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-black text-slate-900">Book a call</div>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Open Calendly →
            </a>
          </Card>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Infinity RG. All rights reserved.
        </div>
      </Section>
    </main>
  );
}
