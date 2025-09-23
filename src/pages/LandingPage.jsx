import React, { useEffect, useState } from 'react'

// LandingPage.jsx
// Single-file React component for a Civil & Environmental Engineering forum landing page
// Uses Tailwind CSS utility classes. Place this component into a page that already
// has Tailwind configured (e.g., Create React App / Vite + Tailwind).

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Hero / Intro (no topbar) */}
      <section className="relative overflow-hidden">
        <HeroCarousel />
        <div className="mx-auto  px-20 py-12 md:py-20">
          <div className="backdrop-blur-sm = rounded-2xl bg-gray-100/70 p-10 md:p-10 shadow-2xl mt-10 md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">Civil & Environmental Engineering Forum</h1>
                <p className="mt-4 text-slate-700 text-lg md:text-xl">A collaborative space for students, researchers, and practitioners — share projects, discuss field work, and discover events that shape sustainable infrastructure.</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#events" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-semibold shadow hover:scale-[1.02] transition">Explore Events</a>
                  <a href="#team" className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-slate-200 text-slate-800 hover:bg-slate-50 transition">Meet the Team</a>
                </div>
              </div>

              <div className="space-y-4">
                <StatCard />
                <QuickLinks />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="mx-auto px-6 py-16">
        <SectionHeader eyebrow="What's Happening" title="Upcoming Events & Workshops" />
        <EventsCarousel />
      </section>

      {/* Team */}
      <div id="team" className="mx-auto px-6 py-16 bg-white/60 rounded-2xl shadow-inner mx-6 md:mx-auto">
        <SectionHeader eyebrow="Meet the Minds" title="Our Team" subtle="Faculty advisors · Student leads · Volunteers" />
        <TeamGrid />
      </div>

      {/* Footer CTA */}
      <footer className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Join the conversation</h3>
            <p className="mt-2 text-slate-200">Get event invites, contribute to discussions, and collaborate on real-world projects.</p>
          </div>
          <div className="flex gap-3">
            <a className="inline-flex items-center px-5 py-3 bg-white text-slate-900 rounded-full font-semibold shadow hover:scale-[1.02] transition">Sign up</a>
            <a className="inline-flex items-center px-4 py-3 border border-white/30 rounded-full text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

/* -------------------------- Subcomponents -------------------------- */

function HeroCarousel() {
  const slides = [
    {
      title: 'Sustainable Water Systems',
      subtitle: 'Field workshops · Hands-on testing · Data-driven design',
      img: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=60'
    },
    {
      title: 'Bridge & Structural Talks',
      subtitle: 'Case studies, failure analysis, and simulation demos',
      img: 'https://images.unsplash.com/photo-1553158399-3796bdbc82fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Urban Resilience',
      subtitle: 'Flood mitigation, green infrastructure, and policy',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=60'
    }
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative h-[60vh] md:h-[72vh] w-full">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-900 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40" />
          <img src={s.img} alt="hero" className="w-full h-full object-cover brightness-90" />
          <div className="absolute left-6 md:left-16 bottom-10 md:bottom-20 max-w-lg text-white">
            <h2 className="text-2xl md:text-4xl font-extrabold drop-shadow-lg">{s.title}</h2>
            <p className="mt-2 text-sm md:text-lg drop-shadow">{s.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="absolute right-6 top-6 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`w-10 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'} transition`} />
        ))}
      </div>
    </div>
  )
}

function StatCard() {
  return (
    <div className="p-4 rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Active Members</p>
          <p className="text-2xl font-semibold">1,420+</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Events this year</p>
          <p className="text-2xl font-semibold">24</p>
        </div>
      </div>
    </div>
  )
}

function QuickLinks() {
  return (
    <div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
      <h4 className="font-semibold">Quick Links</h4>
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700">
        <a className="py-2 px-3 rounded-lg hover:bg-slate-50">Forums</a>
        <a className="py-2 px-3 rounded-lg hover:bg-slate-50">Projects</a>
        <a className="py-2 px-3 rounded-lg hover:bg-slate-50">Research</a>
        <a className="py-2 px-3 rounded-lg hover:bg-slate-50">Resources</a>
      </div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, subtle }) {
  return (
    <div className="mb-8">
      <p className="text-sm text-slate-500 uppercase tracking-wide">{eyebrow}</p>
      <h3 className="text-2xl md:text-3xl font-bold mt-1">{title}</h3>
      {subtle && <p className="text-sm text-slate-600 mt-2">{subtle}</p>}
    </div>
  )
}

function EventsCarousel() {
  const events = [
    {
      title: 'Field Testing — Riverine Sediment Survey',
      date: 'Oct 10, 2025',
      desc: 'Hands-on sampling and lab demo. Limited seats.',
      img: 'https://images.unsplash.com/photo-1505842465776-3d91bbf8b2b1?auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Bridge Design Competition',
      date: 'Nov 2, 2025',
      desc: 'Student teams compete to design a lightweight model bridge.',
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Urban Flood Resilience Seminar',
      date: 'Dec 5, 2025',
      desc: 'Experts discuss nature-based solutions and case studies.',
      img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=60'
    }
  ]

  const [pos, setPos] = useState(0)

  return (
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 px-2">
        {events.map((e, i) => (
          <article key={i} className="min-w-[320px] md:min-w-[380px] snap-start bg-white rounded-2xl shadow p-4 border border-slate-100 hover:scale-[1.01] transition">
            <img src={e.img} className="w-full h-40 object-cover rounded-lg" alt="event" />
            <div className="mt-3">
              <h4 className="font-semibold text-lg">{e.title}</h4>
              <p className="text-sm text-slate-500 mt-1">{e.date}</p>
              <p className="text-sm text-slate-700 mt-2">{e.desc}</p>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-2 rounded-full border border-slate-200 text-sm">Details</button>
                <button className="px-3 py-2 rounded-full bg-slate-900 text-white text-sm">Register</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {events.map((_, i) => (
          <button key={i} onClick={() => setPos(i)} className={`w-3 h-3 rounded-full ${i === pos ? 'bg-slate-900' : 'bg-slate-300'}`} />
        ))}
      </div>
    </div>
  )
}

function TeamGrid() {
  const team = [
    { name: 'Dr. Ananya Rao', role: 'Faculty Advisor', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60' },
    { name: 'Rajat Mehra', role: 'President', img: 'https://images.unsplash.com/photo-1545996124-1b5a4b1b6aaf?auto=format&fit=crop&w=800&q=60' },
    { name: 'Simran Kaur', role: 'Events Lead', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=60' },
    { name: 'Arjun Patel', role: 'Tech Lead', img: 'https://images.unsplash.com/photo-1541534401786-0f74d36f8f2b?auto=format&fit=crop&w=800&q=60' }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {team.map((t, i) => (
        <div key={i} className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
          </div>
          <div className="mt-4">
            <h5 className="font-semibold">{t.name}</h5>
            <p className="text-sm text-slate-500">{t.role}</p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-2 rounded-full border border-slate-200 text-sm">Profile</button>
              <button className="px-3 py-2 rounded-full bg-slate-900 text-white text-sm">Message</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
