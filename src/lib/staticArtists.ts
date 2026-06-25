import type { Artist } from '@/types'

export const staticArtists: Artist[] = [
  {
    _id: 'sash',
    name: 'SASH',
    slug: { current: 'sash' },
    role: 'DJ / Producer',
    portrait: null as any,
    heroPhoto: '/artists/SASH/artist-photo2.jpg',
    supportedArtists: ['Dedro', 'Dan Molinari', 'Ragie Ban', 'D.O.D.', 'Wuki', 'Jakeshore', 'Pedroz'],
    bio: `Hailing from Tampa, Florida, Sash discovered his passion for DJing after a close friend bought a board—so he grabbed one too. What started as pure curiosity turned into a lifelong obsession during his first set: a late-night poker game inside a hurricane-damaged house, where the walls were stripped bare but the energy was alive. As his friends played cards, Sash mixed for hours, locked into the rhythm that would soon define him.

Since that night, Sash has carved his way through Florida's house music scene with a contagious passion and relentless drive. Known for his tech house sound—groovy, high-energy, and built for the dance floor—he's earned opportunities supporting artists such as Wuki, Jake Shore, Dan Molinari, Ragie Ban, Fulano, and opening for DOD at The Ritz in Ybor City, a milestone moment that solidified his presence in larger rooms. Alongside these performances, Sash has built residencies across Tampa and Gainesville, including a residency at Bourbon Street in Gainesville, while performing at venues such as ECHO, LIT, EDEN, IVY, Cantina Añejo, Grove, DTF, MacDinton's, The Range, The White Buffalo, and Capone's. Each set has sharpened his craft and strengthened his reputation for commanding rooms with precision and energy.

Sash's rise has been marked by unforgettable moments, from a sold-out Nightshift warehouse event—opening for Gram.WAV and Terzi with a powerhouse b2b set alongside CHEDD—to a packed Rock Bar spring break performance, and a legendary sunrise set at Theta Chi, University of Miami, that stretched from afternoon until dawn. Every show carries the same raw intensity and love for the music that sparked his journey from the start.

Now establishing himself as both a DJ and producer, Sash is shaping a distinct identity in the tech house world. With a growing catalog of unreleased tracks and a focused creative vision, his goal is clear: to craft a signature sound—the kind that, like DONT BLINK or Max Styler, is instantly recognizable. Sash isn't just mixing tracks; he's building a legacy rooted in groove, passion, and authenticity.`,
    instagramUrl: 'https://www.instagram.com/sasha.warlaumont?igsh=Mm9qazYxcjhud3Nx',
    tiktokUrl: '',
    soundcloudUrl: 'https://on.soundcloud.com/2xRvF42qqcT4XDaWbl',
    spotifyUrl: 'https://open.spotify.com/user/92ff26afolmd08xcifn7xmkcz',
    photos: [],
    videos: [],
    shows: [],
  },
  {
    _id: 'the-sound-of-musik',
    name: 'The Sound Of Muzik',
    slug: { current: 'the-sound-of-musik' },
    role: 'DJ / Producer',
    portrait: null as any,
    heroPhoto: '/artists/The Sound of Muzik/artist-image3.jpeg',
    supportedArtists: ['Beltran', 'Chris Lorenzo', 'CID', 'Marco Strous', 'Cloonee'],
    bio: `From St. Augustine, Florida, The Sound of Muzik is a DJ and producer focused on minimal deep tech and gritty tech house. His style mixes deep grooves, rolling basslines, and rap-inspired vocals to create a sound that is dark, energetic, and made for the dance floor.

After starting his journey in August 2026, he has performed at clubs and events across Jacksonville, Gainesville, and Miami, building a reputation for high-energy sets and a strong connection with the crowd. Drawing inspiration from the underground scene, his goal is to keep his music simple, heavy, and unforgettable.

His tracks and edits have received support from Beltran, Chris Lorenzo, CID, Marco Strous, Cloonee, and other respected artists in the house music scene. This is just the beginning for the The Sound of Muzik as he is establishing himself as one of the rising names in underground house music.`,
    instagramUrl: 'https://www.instagram.com/thesoundofmuzik?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    tiktokUrl: '',
    soundcloudUrl: 'https://soundcloud.com/soundsbygray?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    spotifyUrl: '',
    photos: [],
    videos: [],
    shows: [],
  },
]

export function getStaticArtist(slug: string): Artist | null {
  return staticArtists.find(a => a.slug.current === slug) || null
}
