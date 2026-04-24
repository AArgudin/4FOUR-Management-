import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { liveSetsQuery } from '@/lib/queries'
import type { LiveSet } from '@/types'
import LiveSetCard from '@/components/LiveSetCard'

export const metadata: Metadata = {
  title: 'Live Sets | 4FOUR MGMT',
  description: 'Watch our latest live performances.',
}

export const revalidate = 60

async function getLiveSets(): Promise<LiveSet[]> {
  try {
    return await client.fetch<LiveSet[]>(liveSetsQuery)
  } catch {
    return []
  }
}

export default async function LiveSetsPage() {
  const sets = await getLiveSets()

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-black border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Performances</p>
          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] tracking-widest leading-none">
            LIVE SETS
          </h1>
          <p className="text-muted text-sm tracking-widest mt-4">
            Watch our latest performances.
          </p>
        </div>
      </section>

      {/* Live Sets Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {sets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sets.map(set => (
                <LiveSetCard key={set._id} set={set} />
              ))}
            </div>
          ) : (
            <div className="py-40 text-center">
              <p className="font-display text-4xl tracking-widest text-border mb-4">COMING SOON</p>
              <p className="text-muted text-xs tracking-widest">
                Live set recordings will appear here once added via Sanity.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
