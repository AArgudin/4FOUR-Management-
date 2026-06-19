import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity'
import { artistsQuery, teamQuery, siteSettingsQuery } from '@/lib/queries'
import type { Artist, TeamMember, SiteSettings } from '@/types'
import ArtistFeatureCard from '@/components/ArtistFeatureCard'
import TeamCard from '@/components/TeamCard'
import LiveSetCarousel from '@/components/LiveSetCarousel'

export const revalidate = 60

async function getData() {
  try {
    const [artists, team, settings] = await Promise.all([
      client.fetch<Artist[]>(artistsQuery),
      client.fetch<TeamMember[]>(teamQuery),
      client.fetch<SiteSettings>(siteSettingsQuery),
    ])
    return { artists: artists || [], team: team || [], settings: settings || null }
  } catch {
    return { artists: [], team: [], settings: null }
  }
}

export default async function HomePage() {
  const { team, settings } = await getData()
  const featuredTeam = team.slice(0, 4)

  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-black px-6 text-center pt-20 -mt-12 pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-border opacity-20" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-border opacity-20" />
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-border opacity-10" />
          <div className="absolute top-0 bottom-0 right-1/4 w-px bg-border opacity-10" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
          <Image
            src="/logo.png"
            alt="4FOUR MGMT"
            width={520}
            height={260}
            className="w-[clamp(260px,50vw,520px)] h-auto"
            priority
          />
          <p className="text-muted text-xs md:text-sm tracking-[0.35em] uppercase">
            MANAGING THE FUTURE OF HOUSE
          </p>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-32 bg-black border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-6">Our Mission</p>
          <div className="flex flex-col md:flex-row gap-0">
            <div className="md:w-1/2 md:pr-16">
              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-tight tracking-widest">
                WE CULTIVATE TALENT<br />
                WE BUILD CAREERS<br />
                WE CREATE CULTURE
              </h2>
            </div>
            <div className="hidden md:block w-px bg-border mx-8 self-stretch" />
            <div className="md:w-1/2 md:pl-8 flex flex-col justify-center mt-10 md:mt-0">
              <p className="text-muted-2 text-base leading-relaxed mb-8">
                4FOUR Management is a premier DJ management firm specializing in the nightlife and entertainment industry. We are committed to representing exceptional talent while delivering a tailored experience to every client and venue we partner with. Our personalized approach ensures that each engagement is thoughtfully curated, aligning the right artist with the right environment to produce results that resonate. At 4FOUR Management, we bring professionalism, precision, and passion to every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTISTS ── */}
      <section id="artists" className="py-20 bg-black border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-10">Artists</p>
          <div className="flex flex-wrap gap-4 items-stretch">
            <div className="w-2/5 lg:w-1/4 h-full">
              <ArtistFeatureCard
                name="SASH"
                role="DJ / Producer"
                slug="sash"
                artistImage="/artists/SASH/Artist-photo.jpeg"
                logoImage="/artists/SASH/Artist-logo.png"
                compact
              />
            </div>
            <div className="w-2/5 lg:w-1/4 h-full">
              <ArtistFeatureCard
                name="The Sound Of Musik"
                role="DJ / Producer"
                slug="the-sound-of-musik"
                artistImage="/artists/The Sound of Musik/artist-image1.png"
                logoImage="/artists/The Sound of Musik/artist-image1.png"
                compact
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE SETS ── */}
      <section id="live-sets" className="py-20 bg-black border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Live Set Highlight</p>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-tight tracking-widest mb-6">
                EXPERIENCE<br />THE SOUND
              </h2>
              <p className="text-muted-2 text-sm leading-relaxed mb-10 max-w-sm">
                Watch our latest live sets featuring 4FOUR MGMT artists.
              </p>
            </div>
            <LiveSetCarousel />
          </div>
        </div>
      </section>

      {/* ── TRACKSTACK ── */}
      <section id="trackstack" className="py-24 bg-black border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <p className="section-label mb-4">Track Catalog</p>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-tight tracking-widest mb-4">
                TRACKSTACK
              </h2>
            </div>
            {/* DJ card linking to Trackstack */}
            <a
              href="https://tstack.link/sash-VN-7tGKae0wc8rsX7L8GG"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border hover:border-white transition-colors duration-300 w-56 shrink-0 md:mr-96"
            >
              <div className="relative w-56 h-28 overflow-hidden">
                <Image
                  src="/artists/SASH/artist-photo2.jpg"
                  alt="SASH"
                  fill
                  className="object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="px-4 py-3 border-t border-border">
                <p className="font-display text-lg tracking-widest">SASH</p>
                <p className="text-muted text-xs tracking-widest mt-0.5">VIEW TRACKSTACK →</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="py-20 bg-black border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-10">The Team</p>

          <div className="flex flex-wrap gap-6">

          {/* AJ Argudin card */}
          <div className="group relative border border-border hover:border-white/40 transition-colors duration-300 w-56 overflow-hidden">
            <div className="relative w-56 h-28 overflow-hidden">
              <Image
                src="/team/AJ/Team-AJ.jpeg"
                alt="AJ Argudin"
                fill
                className="object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="px-4 py-3 border-t border-border">
              <p className="font-bold text-white text-sm tracking-widest">AJ Argudin</p>
              <p className="text-muted text-xs tracking-widest mt-0.5">Founder // Talent Manager</p>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center gap-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="mailto:AJ@4fourmgmt.com" className="text-white text-[10px] tracking-widest hover:text-muted transition-colors text-center">
                AJ@4fourmgmt.com
              </a>
              <a href="tel:+17864240098" className="text-white text-[10px] tracking-widest hover:text-muted transition-colors">
                +1 (786) 424-0098
              </a>
              <a
                href="https://www.instagram.com/ajargudin_?igsh=MTFtbnA5ZWs4YnQ0aA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-muted hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nicholas Minkin card */}
          <div className="group relative border border-border hover:border-white/40 transition-colors duration-300 w-56 overflow-hidden">
            <div className="relative w-56 h-28 overflow-hidden">
              <Image
                src="/team/Nicholas/Nicholas-Team.jpeg"
                alt="Nicholas Minkin"
                fill
                className="object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="px-4 py-3 border-t border-border">
              <p className="font-bold text-white text-sm tracking-widest">Nicholas Minkin</p>
              <p className="text-muted text-xs tracking-widest mt-0.5">Day to Day Operations // Media</p>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center gap-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="mailto:management@4fourmgmt.com" className="text-white text-[10px] tracking-widest hover:text-muted transition-colors text-center">
                management@4fourmgmt.com
              </a>
              <a href="tel:+16144060226" className="text-white text-[10px] tracking-widest hover:text-muted transition-colors">
                +1 (614) 406-0226
              </a>
              <a
                href="https://www.instagram.com/_nminkin_?igsh=NGx6amwxbGFsbzlx"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-muted hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          </div>{/* end flex wrapper */}

          {featuredTeam.length > 0 && (
            <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-border border border-border mt-6">
              {featuredTeam.map(member => (
                <div key={member._id} className="flex-1 min-w-[200px]">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-black border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-widest mb-10">
            LET&apos;S CONNECT
          </h2>
          <p className="text-muted text-xs tracking-widest mb-6">For General Information &amp; Collabs:</p>
          <div className="flex flex-col items-center gap-4 mb-10">
            <a href="mailto:management@4fourmgmt.com" className="text-white text-lg tracking-widest hover:text-muted transition-colors">
              management@4fourmgmt.com
            </a>
            <a href="mailto:AJ@4fourmgmt.com" className="text-white text-lg tracking-widest hover:text-muted transition-colors">
              AJ@4fourmgmt.com
            </a>
          </div>
          <Link href="/contact" className="btn-primary px-10 py-4">
            Full Contact Page →
          </Link>
        </div>
      </section>
    </>
  )
}
