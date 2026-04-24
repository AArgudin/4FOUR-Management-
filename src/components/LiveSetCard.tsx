import Image from 'next/image'
import { getYoutubeThumbnail } from '@/lib/sanity'
import type { LiveSet } from '@/types'

export default function LiveSetCard({ set }: { set: LiveSet }) {
  const thumbnail = getYoutubeThumbnail(set.youtubeUrl)
  return (
    <div className="group border border-border bg-surface">
      <div className="relative aspect-video overflow-hidden">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={set.title}
            fill
            className="object-cover grayscale group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface-2">
            <span className="text-muted text-xs tracking-widest">NO THUMBNAIL</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/40" />
        {/* Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 border border-white flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl tracking-widest mb-1">{set.title.toUpperCase()}</h3>
        {set.artistName && (
          <p className="text-muted text-xs tracking-widest mb-1">{set.artistName.toUpperCase()}</p>
        )}
        {set.date && (
          <p className="text-muted text-xs mb-4">
            {new Date(set.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
        <a
          href={set.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white px-5 py-2 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all"
        >
          Watch on YouTube →
        </a>
      </div>
    </div>
  )
}
