import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { artistsQuery } from '@/lib/queries'
import type { Artist } from '@/types'
import ArtistFeatureCard from '@/components/ArtistFeatureCard'

export const metadata: Metadata = {
  title: 'Artists | 4FOUR MGMT',
  description: 'Our roster of visionary talent, represented with purpose.',
}

export const revalidate = 60

async function getArtists(): Promise<Artist[]> {
  try {
    return await client.fetch<Artist[]>(artistsQuery)
  } catch {
    return []
  }
}

export default async function TalentPage() {
  const artists = await getArtists()

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-black border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Roster</p>
          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] tracking-widest leading-none">
            OUR ARTISTS
          </h1>
          <p className="text-muted text-sm tracking-widest mt-4">
            Visionary talent, represented with purpose.
          </p>
        </div>
      </section>

      {/* Artist List */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-8">
          {/* Add each artist below — copy this block for each new artist */}
          <ArtistFeatureCard
            name="SASH"
            role="DJ / Producer"
            slug="sash"
            artistImage="/artists/SASH/Artist-photo.jpeg"
            logoImage="/artists/SASH/Artist-logo.png"
          />
        </div>
      </section>
    </>
  )
}
