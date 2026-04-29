import type { Artist } from '@/types'

export const staticArtists: Artist[] = [
  {
    _id: 'sash',
    name: 'SASH',
    slug: { current: 'sash' },
    role: 'DJ / Producer',
    portrait: null as any,
    bio: '',
    instagramUrl: 'https://www.instagram.com/sasha.warlaumont?igsh=Mm9qazYxcjhud3Nx',
    tiktokUrl: '',
    soundcloudUrl: 'https://on.soundcloud.com/2xRvF42qqcT4XDaWbl',
    photos: [],
    videos: [],
    shows: [],
  },
]

export function getStaticArtist(slug: string): Artist | null {
  return staticArtists.find(a => a.slug.current === slug) || null
}
