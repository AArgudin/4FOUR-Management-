import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Artist } from '@/types'

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link href={`/talent/${artist.slug.current}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-2 mb-4">
        {artist.portrait ? (
          <Image
            src={urlFor(artist.portrait).width(600).height(800).url()}
            alt={artist.name}
            fill
            className="object-cover grayscale group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-surface-2 flex items-center justify-center">
            <span className="text-muted text-xs tracking-widest">NO IMAGE</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-xs tracking-widest text-white border border-white px-4 py-2 inline-block">
            VIEW ARTIST →
          </span>
        </div>
      </div>
      <h3 className="font-display text-2xl tracking-widest text-white">{artist.name.toUpperCase()}</h3>
      <p className="text-muted text-xs tracking-widest mt-1">{artist.role?.toUpperCase()}</p>
    </Link>
  )
}
