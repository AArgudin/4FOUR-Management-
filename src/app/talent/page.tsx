import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { artistsQuery } from '@/lib/queries'
import type { Artist } from '@/types'
import ArtistCard from '@/components/ArtistCard'

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

      {/* Artist Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {artists.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {artists.map(artist => (
                <ArtistCard key={artist._id} artist={artist} />
              ))}
            </div>
          ) : (
            <div className="py-40 text-center">
              <p className="font-display text-4xl tracking-widest text-border mb-4">COMING SOON</p>
              <p className="text-muted text-xs tracking-widest">Artist profiles are being set up. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
