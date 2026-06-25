export interface Artist {
  _id: string
  name: string
  slug: { current: string }
  role: string
  portrait: SanityImage
  heroPhoto?: string
  supportedArtists?: string[]
  bio: string
  instagramUrl: string
  tiktokUrl: string
  soundcloudUrl: string
  spotifyUrl: string
  photos: SanityImage[]
  videos: { title: string; url: string }[]
  shows: { date: string; venue: string; city: string }[]
}

export interface LiveSet {
  _id: string
  title: string
  youtubeUrl: string
  artistName: string
  date: string
  order: number
}

export interface TeamMember {
  _id: string
  name: string
  title: string
  photo: SanityImage
  instagramUrl: string
}

export interface SiteSettings {
  trackstackUrl: string
  instagramUrl: string
  soundcloudUrl: string
  youtubeUrl: string
  liveSetYoutubeUrl: string
}

export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
}
