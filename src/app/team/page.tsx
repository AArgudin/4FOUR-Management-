import type { Metadata } from 'next'
import { client, isSanityConfigured } from '@/lib/sanity'
import { teamQuery } from '@/lib/queries'
import type { TeamMember } from '@/types'
import TeamCard from '@/components/TeamCard'

export const metadata: Metadata = {
  title: 'Team | 4FOUR MGMT',
  description: 'The people behind 4FOUR MGMT.',
}

export const revalidate = 60

async function getTeam(): Promise<TeamMember[]> {
  if (!isSanityConfigured) return []
  try {
    return await client.fetch<TeamMember[]>(teamQuery)
  } catch {
    return []
  }
}

export default async function TeamPage() {
  const team = await getTeam()

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-black border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Who We Are</p>
          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] tracking-widest leading-none">
            THE TEAM
          </h1>
          <p className="text-muted text-sm tracking-widest mt-4">
            The people behind the brand.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          {team.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-16 md:gap-24">
              {team.map(member => (
                <TeamCard key={member._id} member={member} />
              ))}
            </div>
          ) : (
            <div className="py-40 text-center">
              <p className="font-display text-4xl tracking-widest text-border mb-4">COMING SOON</p>
              <p className="text-muted text-xs tracking-widest">
                Team profiles are being set up. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Mission strip */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-display text-3xl md:text-5xl tracking-widest mb-6">
            BUILT BY CREATORS. FOR CREATORS.
          </p>
          <p className="text-muted text-sm tracking-wider max-w-xl mx-auto">
            Our team brings together expertise across artist management, music business, creative direction, and brand strategy.
          </p>
        </div>
      </section>
    </>
  )
}
