import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity'
import { artistsQuery, teamQuery, siteSettingsQuery } from '@/lib/queries'
import type { Artist, TeamMember, SiteSettings } from '@/types'
import ArtistCard from '@/components/ArtistCard'
import TeamCard from '@/components/TeamCard'

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
  const { artists, team, settings } = await getData()
  const featuredArtists = artists.slice(0, 4)
  const featuredTeam = team.slice(0, 4)

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-6 text-center pt-20 -mt-12">
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

      {/* ── MISSION ── */}
      <section className="py-24 md:py-32 bg-black border-t border-border">
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
              <p className="text-muted-2 text-sm leading-relaxed mb-8">
                4FOUR Management is a premier DJ management firm specializing in the nightlife and entertainment industry. We are committed to representing exceptional talent while delivering a tailored experience to every client and venue we partner with. Our personalized approach ensures that each engagement is thoughtfully curated, aligning the right artist with the right environment to produce results that resonate. At 4FOUR Management, we bring professionalism, precision, and passion to every stage.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white text-xs tracking-widest hover:opacity-70 transition-opacity">
                LEARN MORE <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTISTS ── */}
      <section className="py-20 bg-black border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <p className="text-xs tracking-[0.3em] text-muted uppercase">Featured Artists</p>
            <Link href="/talent" className="text-xs tracking-widest text-muted hover:text-white transition-colors inline-flex items-center gap-2">
              VIEW ALL ARTISTS <span>→</span>
            </Link>
          </div>
          {featuredArtists.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredArtists.map(artist => (
                <ArtistCard key={artist._id} artist={artist} />
              ))}
            </div>
          ) : (
            <p className="text-muted text-xs tracking-widest">No artists yet.</p>
          )}
        </div>
      </section>

      {/* ── LIVE SET HIGHLIGHT ── */}
      <section className="py-20 bg-black border-t border-border">
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
              <Link href="/live-sets" className="btn-primary">
                WATCH NOW →
              </Link>
            </div>

            <div className="relative aspect-video bg-surface-2 border border-border flex items-center justify-center group">
              <Image
                src="https://img.youtube.com/vi/tJHCgoROs9g/maxresdefault.jpg"
                alt="Live Set"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/40" />
              <a
                href="https://youtu.be/tJHCgoROs9g"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center group-hover:bg-white transition-colors z-10">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-black ml-1">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      {featuredTeam.length > 0 && (
        <section className="py-20 bg-black border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <p className="text-xs tracking-[0.3em] text-muted uppercase">Our Team</p>
              <Link href="/team" className="text-xs tracking-widest text-muted hover:text-white transition-colors inline-flex items-center gap-2">
                MEET THE TEAM <span>→</span>
              </Link>
            </div>
            <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-border border border-border">
              {featuredTeam.map(member => (
                <div key={member._id} className="flex-1 min-w-[200px]">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-black border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-widest mb-6">
            LET&apos;S BUILD TOGETHER
          </h2>
          <p className="text-muted text-sm tracking-wider mb-10">
            Ready to elevate your career? We want to hear from you.
          </p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Get In Touch →
          </Link>
        </div>
      </section>
    </>
  )
}
