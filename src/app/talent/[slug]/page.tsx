import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { artistBySlugQuery, artistsQuery } from '@/lib/queries'
import type { Artist } from '@/types'
import ArtistPageClient from '@/components/ArtistPageClient'
import { getStaticArtist, staticArtists } from '@/lib/staticArtists'

export const revalidate = 60

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  try {
    const artists = await client.fetch<Artist[]>(artistsQuery)
    const sanityParams = (artists || []).map(a => ({ slug: a.slug.current }))
    if (sanityParams.length) return sanityParams
  } catch {}
  return staticArtists.map(a => ({ slug: a.slug.current }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const artist = await client.fetch<Artist>(artistBySlugQuery, { slug: params.slug })
    if (!artist) return { title: 'Artist Not Found | 4FOUR MGMT' }
    return {
      title: `${artist.name} | 4FOUR MGMT`,
      description: artist.bio ? artist.bio.slice(0, 155) : `${artist.name} — ${artist.role}`,
    }
  } catch {
    return { title: '4FOUR MGMT' }
  }
}

export default async function ArtistPage({ params }: Props) {
  let artist: Artist | null = null

  try {
    artist = await client.fetch<Artist>(artistBySlugQuery, { slug: params.slug })
  } catch {}

  if (!artist) {
    artist = getStaticArtist(params.slug)
  }

  if (!artist) {
    notFound()
  }

  return <ArtistPageClient artist={artist} />
}
