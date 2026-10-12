import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Bath,
  CheckCircle2,
  Clock3,
  Droplets,
  ExternalLink,
  Flame,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  Thermometer,
  Wrench,
  X,
} from 'lucide-react'

const phoneNumber = '8603548242'
const phoneDisplay = '(860) 354-8242'

const services = [
  {
    title: 'High-Efficiency Boilers & Heating',
    description:
      'Comfort you can count on, thoughtfully designed for your home and built for the long New England winter.',
    detail: 'Boiler replacements · Indirect tanks · Radiant heat · TurboMax',
    icon: Flame,
    tone: 'amber',
  },
  {
    title: 'Water Treatment & Well Conditioning',
    description:
      'Better water starts with the right solution for your well, your plumbing, and the people at home.',
    detail: 'Filtration · UV systems · Acid neutralizers · Well tanks',
    icon: Droplets,
    tone: 'blue',
  },
  {
    title: 'Freeze & Break Prevention',
    description:
      'Get ahead of freezing temperatures with practical prevention and dependable pipe-burst diagnostics.',
    detail: 'Winterization · Hose bibb shutoffs · Burst-pipe diagnostics',
    icon: Snowflake,
    tone: 'sky',
  },
  {
    title: 'Luxury Bathroom & Kitchen Remodels',
    description:
      'Careful planning and clean rough-ins make the plumbing behind a beautiful renovation work beautifully.',
    detail: 'Saniflo systems · Fixture rough-ins · ADA conversions',
    icon: Bath,
    tone: 'slate',
  },
  {
    title: 'Emergency Diagnostics & Leak Repair',
    description:
      'Clear answers and skilled repairs for leaks, stubborn drains, and the plumbing problems that cannot wait.',
    detail: 'Pipe repair · Valve replacement · Drain clearing',
    icon: Wrench,
    tone: 'orange',
  },
  {
    title: 'Water Heaters',
    description:
      'The right-sized hot water system, installed with attention to efficiency, reliability, and your daily routine.',
    detail: 'Tank · Tankless · High-recovery heat exchangers',
    icon: Thermometer,
    tone: 'amber',
  },
]

const projects = [
  {
    title: 'High-Efficiency Boiler & Indirect Water Heater',
    location: 'New Milford, CT',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=85',
    alt: 'A technician working on a home heating and mechanical system',
    label: 'Heating',
  },
  {
    title: 'Well Tank & Whole-Home Water Treatment',
    location: 'Washington Depot, CT',
    image:
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=85',
    alt: 'Clean, modern bathroom with a carefully finished plumbing installation',
    label: 'Water quality',
  },
  {
    title: 'Basement Bathroom Saniflo Installation',
    location: 'Litchfield County, CT',
    image:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85',
    alt: 'Bright bathroom renovation with a modern shower and vanity',
    label: 'Remodel',
  },
]

const serviceOptions = [
  'Boiler/Heating Replacement',
  'Water Treatment & Filtration',
  'Emergency Leak / Freeze',
  'Bathroom Remodel',
  'Water Heater',
  'Routine Plumbing',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <div className="bg-amber-500 px-4 py-2 text-center text-xs font-extrabold uppercase tracking-[0.09em] text-slate-950 sm:text-sm">
        <span aria-hidden="true">❄️ </span>
        Winter freeze & break prevention
        <span className="hidden sm:inline"> · Boiler replacements & water treatment</span>
        <span className="mx-2 hidden text-amber-950/50 sm:inline">|</span>
        <a className="whitespace-nowrap underline decoration-amber-950/40 underline-offset-2 hover:text-white" href={`tel:${phoneNumber}`}>
          Call {phoneDisplay}
        </a>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a aria-label="Marbledale Plumbing & Heating home" className="flex shrink-0 items-center gap-3" href="#home" onClick={closeMenu}>
            <span className="flex size-11 items-center justify-center rounded-xl bg-slate-950 text-amber-400 shadow-sm">
              <Wrench aria-hidden="true" className="size-5" />
            </span>
            <span className="leading-none">
              <span className="block text-[15px] font-black tracking-[0.12em] text-slate-950 sm:text-base">MARBLEDALE</span>
              <span className="mt-1 block text-[9px] font-bold tracking-[0.2em] text-slate-500 sm:text-[10px]">PLUMBING & HEATING</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            <a className="text-sm font-semibold text-slate-600 transition hover:text-blue-700" href="#services">Services</a>
            <a className="text-sm font-semibold text-slate-600 transition hover:text-blue-700" href="#heating">Heating & Boilers</a>
            <a className="text-sm font-semibold text-slate-600 transition hover:text-blue-700" href="#water">Water Treatment</a>
            <a className="text-sm font-semibold text-slate-600 transition hover:text-blue-700" href="#projects">Recent Work</a>
            <a className="text-sm font-semibold text-slate-600 transition hover:text-blue-700" href="#contact">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100" href="#estimate">
              Request Estimate <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800" href={`tel:${phoneNumber}`}>
              <Phone aria-hidden="true" className="size-4" /> Call {phoneDisplay}
            </a>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col">
              {[
                ['Services', '#services'],
                ['Heating & Boilers', '#heating'],
                ['Water Treatment', '#water'],
                ['Recent Work', '#projects'],
                ['Contact', '#contact'],
                ['Request Estimate', '#estimate'],
              ].map(([label, href]) => (
                <a className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700 last:border-0" href={href} key={href} onClick={closeMenu}>
                  {label}
                </a>
              ))}
              <a className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-3 font-bold text-white" href={`tel:${phoneNumber}`}>
                <Phone aria-hidden="true" className="size-4" /> Call {phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-slate-950 text-white" id="home">
          <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/55" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-amber-300">
                <MapPin aria-hidden="true" className="size-4" />
                Hometown service · Litchfield County, CT
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Reliable Heating. <span className="text-amber-400">Pure Water.</span> Master Plumbing Done Right.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Serving New Milford, Washington Depot, and Litchfield County with over a decade of dedicated craftsmanship. From emergency boiler swaps to custom bathroom remodels.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-4 font-extrabold text-slate-950 shadow-lg shadow-amber-950/25 transition hover:bg-amber-400" href="#estimate">
                  Schedule an Estimate <ArrowRight aria-hidden="true" className="size-5" />
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/15" href={`tel:${phoneNumber}`}>
                  <Phone aria-hidden="true" className="size-5" /> Call {phoneDisplay}
                </a>
              </div>

              <div className="mt-10 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-3">
                {[
                  ['Fully Licensed & Insured', 'CT P1 / P2'],
                  ['Boiler & Heating', 'Specialists'],
                  ['Water Conditioning', '& Treatment'],
                ].map(([title, caption]) => (
                  <div className="flex items-start gap-2.5" key={title}>
                    <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber-400" />
                    <p className="text-sm font-bold leading-5 text-white">{title}<span className="block font-medium text-slate-400">{caption}</span></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-slate-900/80 p-7 shadow-2xl backdrop-blur-sm">
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-500 text-slate-950">
                  <Wrench aria-hidden="true" className="size-6" />
                </div>
                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-400">Built here. Stands behind it.</p>
                <p className="mt-3 text-2xl font-extrabold leading-tight text-white">Real craftsmanship for the place we call home.</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">Clean mechanical piping, thoughtful recommendations, and a real person who takes pride in the work.</p>
                <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-amber-300" href="#heritage">
                  Meet Drake <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-700 via-amber-500 to-orange-600" />
        </section>

        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8" id="services">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.17em] text-blue-700">What we do</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Skilled work. Lasting comfort.</h2>
              <p className="mt-4 text-lg leading-7 text-slate-600">The right fix, the right equipment, and plumbing you can feel good about for years to come.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, description, detail, icon: Icon, tone }) => (
                <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5" id={title.startsWith('High-Efficiency') ? 'heating' : title.startsWith('Water Treatment') ? 'water' : undefined} key={title}>
                  <div className={`flex size-12 items-center justify-center rounded-xl ${tone === 'amber' ? 'bg-amber-100 text-amber-700' : tone === 'blue' ? 'bg-blue-100 text-blue-700' : tone === 'sky' ? 'bg-sky-100 text-sky-700' : tone === 'orange' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-700'}`}>
                    <Icon aria-hidden="true" className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                  <p className="mt-4 border-t border-slate-100 pt-4 text-xs font-bold leading-5 text-slate-500">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8" id="heritage">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-3xl border-l-4 border-t-4 border-amber-500" />
              <div className="relative overflow-hidden rounded-2xl bg-slate-900">
                <img
                  alt="A plumbing professional taking care with a residential installation"
                  className="h-[390px] w-full object-cover opacity-80"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7 sm:p-9">
                  <p className="text-sm font-bold text-amber-300">12 years of hands-on craftsmanship</p>
                  <p className="mt-2 text-2xl font-black text-white">A legacy carried forward.</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.17em] text-blue-700">The Marbledale heritage</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">A new chapter. The same hometown pride.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                After 12 years learning the trade from founders Jeff and Stark, Drake took the lead at Marbledale Plumbing & Heating. He brings that hands-on experience to every call, every install, and every home.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                This is honest hometown work: clean mechanical piping, careful attention to detail, and recommendations that put your home first. Drake stands behind every installation—because craftsmanship should last long after the job is done.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {['Local, owner-led service', 'Fully licensed CT P1 / P2', 'Insured craftsmanship', 'Work done right the first time'].map((item) => (
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-700" key={item}>
                    <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-blue-700" /> {item}
                  </div>
                ))}
              </div>
              <a className="mt-8 inline-flex items-center gap-2 font-extrabold text-blue-700 hover:text-blue-900" href="#estimate">
                Talk with Drake about your project <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8" id="projects">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.17em] text-amber-400">Recent work</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Pride in every detail.</h2>
                <p className="mt-3 max-w-xl leading-7 text-slate-300">Thoughtful upgrades and reliable solutions for homes around Litchfield County.</p>
              </div>
              <a className="inline-flex items-center gap-2 self-start rounded-lg border border-white/20 px-4 py-3 text-sm font-bold text-white transition hover:border-amber-400 hover:text-amber-300 sm:self-auto" href="#estimate">
                Start a project <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900" key={project.title}>
                  <div className="relative h-64 overflow-hidden">
                    <img alt={project.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src={project.image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-extrabold text-slate-950">{project.label}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold leading-snug text-white">{project.title}</h3>
                    <p className="mt-3 flex items-center gap-2 text-sm font-medium text-slate-400">
                      <MapPin aria-hidden="true" className="size-4 text-amber-400" /> {project.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8" id="estimate">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:pt-4">
              <p className="text-sm font-extrabold uppercase tracking-[0.17em] text-blue-700">Let's get it sorted</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Tell us what your home needs.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Share a few project details and Drake will review your request and call you shortly to discuss an estimate.</p>
              <div className="mt-8 space-y-4">
                <a className="flex items-center gap-3 font-bold text-slate-800 hover:text-blue-700" href={`tel:${phoneNumber}`}>
                  <span className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700"><Phone aria-hidden="true" className="size-5" /></span>
                  {phoneDisplay}
                </a>
                <a className="flex items-center gap-3 font-bold text-slate-800 hover:text-blue-700" href="mailto:marbledaleplumbing@gmail.com">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700"><Mail aria-hidden="true" className="size-5" /></span>
                  marbledaleplumbing@gmail.com
                </a>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700"><Clock3 aria-hidden="true" className="size-5" /></span>
                  Local service for New Milford & Litchfield County
                </div>
              </div>
            </div>

            <form
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8"
              onSubmit={(event) => {
                event.preventDefault()
                setSubmitted(true)
              }}
            >
              {submitted && (
                <div className="mb-6 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900" role="status">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                  <p className="text-sm font-semibold leading-6">Request received! Drake will review your job specs and call you shortly to discuss an estimate.</p>
                </div>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold text-slate-700">
                  Full Name <span className="text-orange-600">*</span>
                  <input autoComplete="name" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10" name="name" placeholder="Your name" required />
                </label>
                <label className="text-sm font-bold text-slate-700">
                  Phone Number <span className="text-orange-600">*</span>
                  <input autoComplete="tel" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10" name="phone" placeholder="(860) 555-0123" required type="tel" />
                </label>
                <label className="text-sm font-bold text-slate-700">
                  Email Address
                  <input autoComplete="email" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10" name="email" placeholder="you@example.com" type="email" />
                </label>
                <label className="text-sm font-bold text-slate-700">
                  Town / Address
                  <input autoComplete="street-address" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10" name="address" placeholder="Town or service address" />
                </label>
                <label className="text-sm font-bold text-slate-700 sm:col-span-2">
                  Service Needed <span className="text-orange-600">*</span>
                  <select className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10" defaultValue="" name="service" required>
                    <option disabled value="">Choose a service</option>
                    {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
                  </select>
                </label>
                <label className="text-sm font-bold text-slate-700 sm:col-span-2">
                  Project Details
                  <textarea className="mt-2 min-h-32 w-full resize-y rounded-lg border border-slate-300 bg-white px-3.5 py-3 font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10" name="details" placeholder="Tell us a little about what is going on or what you have in mind." rows={4} />
                </label>
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-4 font-extrabold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-700/20" type="submit">
                Request My Estimate <ArrowRight aria-hidden="true" className="size-5" />
              </button>
              <p className="mt-3 text-center text-xs leading-5 text-slate-500">No obligation. Your details are used only to follow up on this request.</p>
            </form>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="contact">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-slate-950 text-white lg:grid-cols-[1fr_0.9fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-extrabold uppercase tracking-[0.17em] text-amber-400">Your local plumbing partner</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Proud to serve our neighbors.</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">From Marbledale to Washington Depot, Marbledale Plumbing & Heating brings dependable service throughout Litchfield County.</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['New Milford', 'Marbledale', 'Washington Depot', 'Kent', 'Sherman', 'Roxbury', 'Greater Litchfield County'].map((town) => (
                  <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-semibold text-slate-200" key={town}>{town}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 border-t border-white/10 bg-slate-900 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-slate-950"><MapPin aria-hidden="true" className="size-5" /></div>
                <div><p className="font-extrabold text-white">Local & nearby</p><p className="mt-1 text-sm leading-6 text-slate-400">New Milford and surrounding Litchfield County towns.</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-slate-950"><ShieldCheck aria-hidden="true" className="size-5" /></div>
                <div><p className="font-extrabold text-white">Licensed & insured</p><p className="mt-1 text-sm leading-6 text-slate-400">Connecticut P1 / P2 plumbing credentials.</p></div>
              </div>
              <a className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3.5 font-extrabold text-slate-950 transition hover:bg-amber-400" href={`tel:${phoneNumber}`}>
                <Phone aria-hidden="true" className="size-5" /> Call {phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-4 pb-8 pt-5 text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400"><Wrench aria-hidden="true" className="size-5" /></span>
            <div><p className="text-sm font-extrabold text-white">Marbledale Plumbing & Heating LLC</p><p className="mt-1 text-xs">© {new Date().getFullYear()} All rights reserved.</p></div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold">
            <a className="inline-flex items-center gap-2 hover:text-white" href={`tel:${phoneNumber}`}><Phone aria-hidden="true" className="size-4" />{phoneDisplay}</a>
            <a className="inline-flex items-center gap-2 hover:text-white" href="mailto:marbledaleplumbing@gmail.com"><Mail aria-hidden="true" className="size-4" />Email</a>
            <a className="inline-flex items-center gap-2 hover:text-white" href="https://www.facebook.com/marbledaleplumbing" rel="noreferrer" target="_blank"><ExternalLink aria-hidden="true" className="size-4" />Facebook</a>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-extrabold text-emerald-300"><CheckCircle2 aria-hidden="true" className="size-4" /> CT P1 / P2 Licensed</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
