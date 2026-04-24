import Link from 'next/link'
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
  const featuredArtists = artists.slice(0, 3)
  const featuredTeam = team.slice(0, 4)

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-6 text-center">
        {/* Background texture lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-border opacity-30" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-border opacity-30" />
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-border opacity-20" />
          <div className="absolute top-0 bottom-0 right-1/4 w-px bg-border opacity-20" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto">
          {/* Label */}
          <p className="text-xs tracking-[0.4em] text-muted uppercase">Creative Management & Artist Development</p>

          {/* Logo */}
          <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-none tracking-[0.15em] text-white">
            4FOUR MGMT
          </h1>

          {/* Tagline */}
          <p className="text-muted-2 text-sm md:text-base tracking-widest max-w-md">
            Creative Management. Artist Development. Culture.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/talent" className="btn-primary">
              Our Artists →
            </Link>
            <Link href="/contact" className="btn-secondary">
              Work With Us →
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-muted text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-border" />
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 md:py-32 bg-black border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-label">Our Mission</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-tight tracking-widest mb-10 max-w-3xl">
            WE BUILD CAREERS. WE SHAPE CULTURE.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <p className="text-muted-2 leading-relaxed text-sm md:text-base">
              4FOUR MGMT is a forward-thinking creative management company dedicated to developing exceptional talent and cultivating authentic artistic voices. We partner with artists at every stage — from emerging acts to established names — providing the strategic guidance, creative direction, and industry connections needed to build lasting careers.
            </p>
            <div className="flex md:justify-end">
              <Link href="/about" className="btn-primary">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTISTS ── */}
      {featuredArtists.length > 0 && (
        <section className="py-24 md:py-32 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="section-label">Roster</p>
                <h2 className="font-display text-5xl md:text-7xl tracking-widest">FEATURED ARTISTS</h2>
              </div>
              <Link href="/talent" className="hidden md:inline-flex btn-secondary">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArtists.map(artist => (
                <ArtistCard key={artist._id} artist={artist} />
              ))}
            </div>
            <div className="mt-10 md:hidden">
              <Link href="/talent" className="btn-secondary">
                View All Artists →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── LIVE SET HIGHLIGHT ── */}
      <section className="py-24 md:py-32 bg-black border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="section-label">Live Sets</p>
              <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-tight tracking-widest mb-6">
                WATCH THE PERFORMANCE
              </h2>
              <p className="text-muted-2 text-sm leading-relaxed mb-10 max-w-md">
                Experience our artists in their element. Raw, live, unfiltered — each set a testament to the talent we develop and the culture we build.
              </p>
              <Link href="/live-sets" className="btn-primary">
                Watch Now →
              </Link>
            </div>

            {/* Visual */}
            <div className="relative aspect-video bg-surface-2 border border-border flex items-center justify-center group">
              {settings?.liveSetYoutubeUrl ? (
                <a
                  href={settings.liveSetYoutubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 border border-white flex items-center justify-center group-hover:bg-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-black ml-1">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 border border-border flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-muted">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                  <span className="text-muted text-xs tracking-widest">LIVE SETS</span>
                </div>
              )}
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white opacity-50" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white opacity-50" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white opacity-50" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM PREVIEW ── */}
      {featuredTeam.length > 0 && (
        <section className="py-24 md:py-32 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="section-label">The People Behind the Brand</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-widest mb-16">THE TEAM</h2>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              {featuredTeam.map(member => (
                <TeamCard key={member._id} member={member} />
              ))}
            </div>
            <div className="mt-14">
              <Link href="/team" className="btn-secondary">
                Meet the Full Team →
              </Link>
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
