import type { Artist } from '@/types'

export const staticArtists: Artist[] = [
  {
    _id: 'sash',
    name: 'SASH',
    slug: { current: 'sash' },
    role: 'DJ / Producer',
    portrait: null as any,
    bio: '',
    instagramUrl: '',
    tiktokUrl: '',
    photos: [],
    videos: [],
    shows: [],
  },
]

export function getStaticArtist(slug: string): Artist | null {
  return staticArtists.find(a => a.slug.current === slug) || null
}
