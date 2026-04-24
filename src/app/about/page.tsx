import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | 4FOUR MGMT',
  description: 'Creative Management. Artist Development. Culture.',
}

const pillars = [
  {
    number: '01',
    title: 'CREATIVE MANAGEMENT',
    description:
      'We handle the business so artists can focus on the art. From deal negotiations and brand partnerships to tour planning and press, we manage every dimension of your career with precision and integrity.',
  },
  {
    number: '02',
    title: 'ARTIST DEVELOPMENT',
    description:
      'We invest deeply in the growth of each artist on our roster. Through mentorship, strategic planning, and creative collaboration, we help shape compelling narratives and sustainable careers that stand the test of time.',
  },
  {
    number: '03',
    title: 'CULTURE',
    description:
      'We don\'t just manage artists — we participate in culture. Our work exists at the intersection of music, fashion, visual art, and community. We build movements, not just brands.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-40 pb-24 bg-black border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-label">About 4FOUR MGMT</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-tight tracking-widest mb-0">
            WE CULTIVATE TALENT.
            <br />
            WE BUILD CAREERS.
            <br />
            WE CREATE CULTURE.
          </h1>
        </div>
      </section>

      {/* ── MISSION BODY ── */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-muted-2 leading-relaxed text-sm md:text-base mb-6">
              4FOUR MGMT was founded on a simple belief: exceptional talent deserves exceptional support. We are a creative management and artist development company that partners with visionary artists to build careers that are not only commercially successful, but creatively fulfilling and culturally significant.
            </p>
            <p className="text-muted-2 leading-relaxed text-sm md:text-base">
              We work at the intersection of music, culture, and commerce — bringing strategic thinking, deep industry relationships, and a genuine passion for artistry to everything we do. Our approach is personal, intentional, and long-term.
            </p>
          </div>
          <div className="border-l border-border pl-12 flex items-center">
            <blockquote className="font-display text-3xl md:text-4xl tracking-widest text-white leading-tight">
              &ldquo;TALENT IS THE FOUNDATION. STRATEGY IS THE ARCHITECTURE.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">What We Do</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-widest mb-16">OUR PILLARS</h2>
          <div className="grid md:grid-cols-3 gap-0 border-t border-border">
            {pillars.map(pillar => (
              <div key={pillar.number} className="border-b md:border-b-0 md:border-r border-border last:border-r-0 py-12 pr-0 md:pr-10 lg:pr-16 first:pl-0 md:pl-0 [&:not(:first-child)]:md:pl-10 [&:not(:first-child)]:lg:pl-16">
                <span className="font-display text-6xl text-border block mb-6">{pillar.number}</span>
                <h3 className="font-display text-2xl tracking-widest mb-4">{pillar.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BLOCK ── */}
      <section className="py-32 bg-black border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-px bg-border mx-auto mb-12" />
          <p className="font-display text-[clamp(2rem,5vw,4rem)] tracking-widest leading-tight mb-12">
            EVERY GREAT ARTIST DESERVES A TEAM THAT BELIEVES IN THEM AS MUCH AS THEY BELIEVE IN THEMSELVES.
          </p>
          <div className="w-12 h-px bg-border mx-auto" />
        </div>
      </section>

      {/* ── EDITORIAL SECTION ── */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">Our Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-widest mb-8">
              RELATIONSHIPS OVER TRANSACTIONS
            </h2>
            <p className="text-muted-2 text-sm leading-relaxed mb-4">
              In an industry driven by short-term thinking, we take a different approach. We build long-term partnerships with our artists, rooted in trust, transparency, and shared vision.
            </p>
            <p className="text-muted-2 text-sm leading-relaxed">
              We don&apos;t believe in cookie-cutter management. Every artist is different, every career is unique, and every strategy is custom-built for the individual. This is how we ensure that our artists grow authentically — on their own terms.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Strategic Planning', 'Brand Partnerships', 'Tour Management', 'Press & Media', 'Creative Direction', 'Career Development'].map(service => (
              <div key={service} className="border border-border p-6">
                <p className="text-xs tracking-widest text-muted-2">{service.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTAs ── */}
      <section className="py-24 bg-black border-t border-border">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-6 items-center justify-center">
          <Link href="/contact" className="btn-primary">
            Work With Us →
          </Link>
          <Link href="/talent" className="btn-secondary">
            See Our Talent →
          </Link>
        </div>
      </section>
    </>
  )
}
