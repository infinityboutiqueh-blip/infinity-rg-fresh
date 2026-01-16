'use client';

import React, { useMemo, useState } from 'react';

function Button({ variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:opacity-50 disabled:cursor-not-allowed';
  const styles =
    variant === 'primary'
      ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'
      : variant === 'secondary'
        ? 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
        : 'bg-transparent text-slate-700 hover:bg-slate-50';

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}

function Card({ className = '', children }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function Section({ id, title, subtitle, alt = false, children }) {
  return (
    <section id={id} className={alt ? 'bg-slate-50' : 'bg-white'}>
      <div className='mx-auto max-w-6xl px-4 py-14'>
        <div className='max-w-3xl'>
          <h2 className='text-2xl font-black text-slate-900 md:text-3xl'>{title}</h2>
          {subtitle ? <p className='mt-3 text-base text-slate-600'>{subtitle}</p> : null}
        </div>
        <div className='mt-8'>{children}</div>
      </div>
    </section>
  );
}

function TopUtilityBar() {
  return (
    <div className='hidden border-b border-slate-200 bg-white md:block'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-slate-600'>
        <div className='flex items-center gap-5'>
          <a href='#contact' className='hover:text-slate-900'>
            Maintenance request
          </a>
          <a href='#coverage' className='hover:text-slate-900'>
            Coverage
          </a>
        </div>

        <div className='text-slate-400'>Mon–Fri • 09:00–17:30 CET</div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className='sticky top-0 z-40 bg-white/80 backdrop-blur'>
      <TopUtilityBar />
      <div className='border-b border-slate-200'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3'>
          <div className='flex items-center gap-3'>
            {/* Put your logo file here: /public/infinityrg-logo.png */}
            <img src='/infinityrg-logo.png' alt='Infinity RG logo' className='h-16 w-auto' />
          </div>

          <div className='hidden items-center gap-7 md:flex'>
            <a href='#services' className='text-sm font-semibold text-slate-600 hover:text-slate-900'>
              Services
            </a>
            <a href='#invest' className='text-sm font-semibold text-slate-600 hover:text-slate-900'>
              Invest
            </a>
            <a href='#resources' className='text-sm font-semibold text-slate-600 hover:text-slate-900'>
              Guides
            </a>
            <a href='#about' className='text-sm font-semibold text-slate-600 hover:text-slate-900'>
              About
            </a>
            <a href='#contact' className='text-sm font-semibold text-slate-600 hover:text-slate-900'>
              Contact
            </a>
          </div>

          <div className='flex items-center gap-2'>
            <a
              href='#contact'
              className='rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 hover:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300'
            >
              Get in touch
            </a>
            <a
              href='https://calendly.com'
              target='_blank'
              rel='noreferrer'
              className='rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800'
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroGetStarted({ onPrefill }) {
  const [persona, setPersona] = useState('Landlord');
  const [location, setLocation] = useState('');

  const helper = useMemo(() => {
    if (persona === 'Investor') {
      return {
        title: 'Investor support',
        hint: 'Deal sourcing, due diligence, refurb planning.',
        cta: 'Discuss an investment',
      };
    }

    // Default: Landlord
    return {
      title: 'Landlord support',
      hint: 'Management, compliance, reporting, maintenance coordination.',
      cta: 'Get landlord support',
    };
  }, [persona]);

  return (
    <Card className='p-6'>
      <div className='text-sm font-black text-slate-900'>Get started</div>
      <div className='mt-1 text-sm text-slate-600'>Choose what you need — we’ll guide the next steps.</div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {['Landlord', 'Investor'].map((p) => {
          const active = persona === p;
          return (
            <button
              key={p}
              onClick={() => setPersona(p)}
              className={
                'rounded-2xl px-3 py-2 text-sm font-semibold transition ' +
                (active
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50')
              }
              type='button'
            >
              {p}
            </button>
          );
        })}
      </div>

      <div className='mt-4 rounded-2xl bg-slate-50 p-4'>
        <div className='text-sm font-black text-slate-900'>{helper.title}</div>
        <div className='mt-1 text-sm text-slate-600'>{helper.hint}</div>

        <div className='mt-4 grid gap-3'>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300'
            placeholder='City / area (optional)'
          />

          <Button onClick={() => onPrefill?.(persona, location)} variant='primary' type='button' className='w-full'>
            {helper.cta}
          </Button>

          <div className='text-xs text-slate-500'>No property listings — we work privately with owners and investors.</div>
        </div>
      </div>

      <div className='mt-4'>
        <a
          href='https://calendly.com'
          target='_blank'
          rel='noreferrer'
          className='block rounded-2xl border border-slate-300 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50 hover:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300'
        >
          Book a call
        </a>
      </div>
    </Card>
  );
}

function Hero({ onPrefill }) {
  return (
    <div className='relative overflow-hidden bg-slate-50'>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(15,23,42,0.14),transparent_48%),radial-gradient(circle_at_88%_18%,rgba(245,158,11,0.10),transparent_42%),radial-gradient(circle_at_50%_92%,rgba(148,163,184,0.12),transparent_50%)]" />

      <div className='relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-16'>
        <div>
          <div className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600'>
            <span className='h-2 w-2 rounded-full bg-amber-500' />
            Transparent management • Investor mindset
          </div>

          <h1 className='mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl'>
            Service you deserve.
            <span className='block text-slate-700'>Built for owners and investors.</span>
          </h1>

          <p className='mt-4 text-base text-slate-600 md:text-lg'>
            Infinity RG supports buy-to-let owners and investors with management, deal sourcing and refurb execution — with
            clear reporting and honest communication.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            <a
              href='https://calendly.com'
              target='_blank'
              rel='noreferrer'
              className='rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800'
            >
              Book a call
            </a>
            <a
              href='#services'
              className='rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50'
            >
              Explore services
            </a>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3'>
            {['Clear reporting', 'Trusted partners', 'Deal sourcing support'].map((t) => (
              <div
                key={t}
                className='rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800'
              >
                {t}
              </div>
            ))}
          </div>

          <div className='mt-6 text-sm text-slate-500'>
            Note: Infinity RG is a property management & investment team — not an estate agency listing the whole market.
          </div>
        </div>

        <HeroGetStarted onPrefill={onPrefill} />
      </div>
    </div>
  );
}

function VideoSection() {
  return (
    <Section
      id='overview'
      alt
      title='60-second overview'
      subtitle='A quick intro to how we work — simple, transparent and owner-first.'
    >
      <Card className='p-3'>
        <div className='overflow-hidden rounded-2xl border border-slate-200 bg-white'>
          <div className='aspect-video w-full bg-slate-100'>
            <video
              className='h-full w-full object-cover'
              controls
              playsInline
              preload='metadata'
              controlsList='nodownload'
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              poster='/intro-poster.jpg'
            >
              <source src='/intro.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Card>
    </Section>
  );
}

function SnapshotStrip() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-6xl px-4 py-10'>
        <Card className='p-6'>
          <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
            <div>
              <div className='text-sm font-black text-slate-900'>Quick snapshot</div>
              <div className='mt-1 text-sm text-slate-600'>Simple. Elegant. Clear.</div>
            </div>

            <div className='grid w-full grid-cols-2 gap-3 md:max-w-3xl md:grid-cols-4'>
              {[
                { k: 'Focus', v: 'BTL • Refurb' },
                { k: 'Reporting', v: 'Clear statements' },
                { k: 'Execution', v: 'Budgets & timelines' },
                { k: 'Support', v: 'Owner-first' },
              ].map((x) => (
                <div key={x.k} className='rounded-2xl bg-slate-50 p-4'>
                  <div className='text-xs font-bold text-slate-500'>{x.k}</div>
                  <div className='mt-1 text-sm font-black text-slate-900'>{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-5 rounded-2xl border border-slate-200 bg-white p-4'>
            <div className='text-sm font-black text-slate-900'>What you can expect</div>
            <ul className='mt-2 space-y-2 text-sm text-slate-600'>
              <li>• Straight answers and realistic numbers</li>
              <li>• Practical plan: acquire → refurb (if needed) → manage</li>
              <li>• Clear communication with evidence</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Services() {
  const items = [
    {
      title: 'Landlord Services',
      desc: 'Tenant management support, compliance guidance, rent collection support, and maintenance coordination.',
    },
    {
      title: 'Property Management',
      desc: 'Owner-first management with clear monthly reporting and transparent communication.',
    },
    {
      title: 'Deal Sourcing & Due Diligence',
      desc: 'Filter opportunities properly — numbers, risks, and the real plan behind the deal.',
    },
    {
      title: 'Buy • Refurb • Optimise',
      desc: 'Refurb planning and execution support with budgets, timelines, and a clear scope.',
    },
  ];

  return (
    <Section id='services' title='Our services' subtitle='A Charters-style service grid, tailored to what Infinity RG does today.'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {items.map((it) => (
          <Card key={it.title} className='p-6'>
            <div className='text-lg font-black text-slate-900'>{it.title}</div>
            <p className='mt-2 text-sm text-slate-600'>{it.desc}</p>
            <div className='mt-5'>
              <a
                href='#contact'
                className='inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 hover:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300'
              >
                Ask about this
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function FeaturedInsight() {
  return (
    <Section id='resources' alt title='Guides & resources' subtitle='Short, practical notes for landlords and investors.'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Card className='p-6'>
          <div className='text-xs font-bold text-slate-500'>Latest</div>
          <div className='mt-2 text-lg font-black text-slate-900'>Landlord compliance checklist</div>
          <p className='mt-2 text-sm text-slate-600'>A simple checklist you can use before every tenancy.</p>
          <div className='mt-5'>
            <a
              href='#contact'
              className='inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 hover:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300'
            >
              Request the PDF
            </a>
          </div>
        </Card>

        <Card className='p-6'>
          <div className='text-xs font-bold text-slate-500'>Popular</div>
          <div className='mt-2 text-lg font-black text-slate-900'>How we evaluate deals</div>
          <p className='mt-2 text-sm text-slate-600'>The numbers we look at first (yield, costs, risk, exit).</p>
          <div className='mt-5'>
            <a
              href='https://pay.hotmart.com'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 hover:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300'
            >
              Buy eBook →
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Coverage() {
  return (
    <Section id='coverage' title='Area coverage' subtitle='We operate with trusted partners and reliable local support.'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {[
          { t: 'United Kingdom', d: 'Owner support and investment sourcing.' },
          { t: 'Italy', d: 'Refurb projects and property operations.' },
          { t: 'Remote owners', d: 'Manage and monitor from anywhere.' },
        ].map((x) => (
          <Card key={x.t} className='p-6'>
            <div className='text-lg font-black text-slate-900'>{x.t}</div>
            <p className='mt-2 text-sm text-slate-600'>{x.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function PortalTeaser() {
  return (
    <Section
      id='portal'
      alt
      title='Client portal (coming soon)'
      subtitle='Inspired by the best agency portals — simplified for owners and investors.'
    >
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Card className='p-6'>
          <div className='text-sm font-black text-slate-900'>Documents</div>
          <ul className='mt-3 space-y-2 text-sm text-slate-600'>
            <li>• Statements and invoices</li>
            <li>• Compliance certificates (when applicable)</li>
            <li>• Refurb scopes and progress photos (private)</li>
          </ul>
        </Card>

        <Card className='p-6'>
          <div className='text-sm font-black text-slate-900'>Maintenance & updates</div>
          <ul className='mt-3 space-y-2 text-sm text-slate-600'>
            <li>• Track maintenance requests</li>
            <li>• Update logs and approvals</li>
            <li>• A single place for communication</li>
          </ul>
        </Card>
      </div>

      <div className='mt-6'>
        <Card className='p-6'>
          <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
            <div>
              <div className='text-lg font-black text-slate-900'>Want early access?</div>
              <div className='mt-1 text-sm text-slate-600'>Tell us what you want the portal to include.</div>
            </div>
            <a href='#contact' className='rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 text-center'>
              Join the waitlist
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Why() {
  const items = [
    { title: 'Trust first', desc: 'Clear comms, honest updates, and no surprises.' },
    { title: 'Numbers that make sense', desc: 'No fantasy returns — just what the deal can realistically do.' },
    { title: 'Execution matters', desc: 'Reliable partners, clear scope, and timelines you can track.' },
  ];

  return (
    <Section id='why' alt title='Why Infinity RG' subtitle='A clean, accountable approach — built for long-term partnerships.'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {items.map((it) => (
          <Card key={it.title} className='p-6'>
            <div className='text-lg font-black text-slate-900'>{it.title}</div>
            <p className='mt-2 text-sm text-slate-600'>{it.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  const steps = [
    { n: '1', t: 'Consultation', d: 'We understand your goals and timeline.' },
    { n: '2', t: 'Plan', d: 'We map the best route: acquire, refurb (if needed), then operate.' },
    { n: '3', t: 'Execution', d: 'We coordinate work and keep you updated with evidence.' },
    { n: '4', t: 'Reporting', d: 'Clear statements and updates so you stay in control.' },
  ];

  return (
    <Section
      id='process'
      title='Our process'
      subtitle='A simple step-by-step flow — similar clarity to Charters, without agency complexity.'
    >
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {steps.map((s) => (
          <Card key={s.n} className='p-6'>
            <div className='flex items-start gap-3'>
              <div className='grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white font-black'>{s.n}</div>
              <div>
                <div className='text-lg font-black text-slate-900'>{s.t}</div>
                <p className='mt-1 text-sm text-slate-600'>{s.d}</p>
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
    <Section id='about' alt title='About Infinity RG' subtitle='Focused on practical results and trust-led partnerships.'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Card className='p-6'>
          <div className='text-sm font-black text-slate-900'>What we are</div>
          <p className='mt-2 text-sm text-slate-600'>
            A property management and investment team. We support owners with operations and support investors with sourcing
            and project execution.
          </p>
        </Card>

        <Card className='p-6' id='invest'>
          <div className='text-sm font-black text-slate-900'>For investors</div>
          <p className='mt-2 text-sm text-slate-600'>
            If you’re exploring buy-to-let, refurb projects or joint opportunities, we’ll share the numbers and risks clearly.
          </p>
          <div className='mt-5'>
            <a
              href='#contact'
              className='inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 hover:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300'
            >
              Discuss an investment
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Contact({ prefill }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const canSend = name.trim() && email.trim() && message.trim();

  React.useEffect(() => {
    if (!prefill) return;
    const loc = prefill.location?.trim();
    const locText = loc ? `

Location/area: ${loc}` : '';
    setMessage(
      `Hi Infinity RG,

I’m looking for support as a ${prefill.persona}.${locText}

My goal / context:
-`
    );
  }, [prefill]);

  return (
    <Section id='contact' title='Contact us' subtitle='Send a quick message — we usually reply the same business day.'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Card className='p-6'>
          <div className='text-sm font-black text-slate-900'>Send enquiry</div>

          <div className='mt-4 grid gap-3'>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300'
              placeholder='Name'
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300'
              placeholder='Email'
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='min-h-[140px] rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300'
              placeholder='Message'
            />

            <Button disabled={!canSend} onClick={() => alert('Mock: form sent')} type='button'>
              Send enquiry
            </Button>
          </div>

          <div className='mt-4 text-sm text-slate-500'>Prefer email? contactestates@infinityrg.co.uk</div>
        </Card>

        <Card className='p-6'>
          <div className='text-sm font-black text-slate-900'>Book a call</div>
          <p className='mt-2 text-sm text-slate-600'>If you want speed, book a call and we’ll go through it together.</p>

          <div className='mt-5 flex flex-wrap gap-2'>
            <a
              href='https://calendly.com'
              target='_blank'
              rel='noreferrer'
              className='rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800'
            >
              Open Calendly →
            </a>
            <a
              href='#services'
              className='rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50'
            >
              See services
            </a>
          </div>

          <div className='mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600'>
            <div className='font-black text-slate-900'>Privacy note</div>
            <div className='mt-1'>We can keep property details private (city/region only, no full addresses).</div>
          </div>
        </Card>
      </div>

      <div className='mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500'>
        © {new Date().getFullYear()} Infinity RG. All rights reserved.
      </div>
    </Section>
  );
}

export default function Page() {
  const [prefill, setPrefill] = useState(null);

  const onPrefill = (persona, location) => {
    setPrefill({ persona, location });
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className='min-h-screen bg-white text-slate-900'>
      <Nav />
      <Hero onPrefill={onPrefill} />
      <SnapshotStrip />
      <Services />
      <FeaturedInsight />
      <Coverage />
      <Why />
      <VideoSection />
      <Process />
      <About />
      <Contact prefill={prefill} />
    </main>
  );
}
