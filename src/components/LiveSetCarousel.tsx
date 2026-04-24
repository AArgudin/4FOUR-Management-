'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface LiveSet {
  title: string
  youtubeUrl: string
}

const sets: LiveSet[] = [
  {
    title: 'SASH @ MCQUEENS SOCIAL LOUNGE 2025',
    youtubeUrl: 'https://youtu.be/tJHCgoROs9g',
  },
]

function getYoutubeId(url: string) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
  return match ? match[1] : ''
}

export default function LiveSetCarousel() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex(i => (i - 1 + sets.length) % sets.length)
  const next = () => setIndex(i => (i + 1) % sets.length)

  const current = sets[index]
  const videoId = getYoutubeId(current.youtubeUrl)
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <p className="text-white text-xs tracking-[0.3em] uppercase text-center">
        {current.title}
      </p>

      {/* Video + Arrows */}
      <div className="flex items-center gap-4">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="shrink-0 w-10 h-10 border border-border flex items-center justify-center text-muted hover:text-white hover:border-white transition-all"
          aria-label="Previous set"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Thumbnail */}
        <div className="relative flex-1 aspect-video bg-surface-2 border border-border group overflow-hidden">
          <Image
            src={thumbnail}
            alt={current.title}
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/40" />
          <a
            href={current.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center group-hover:bg-white transition-colors z-10">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-black ml-1">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </a>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="shrink-0 w-10 h-10 border border-border flex items-center justify-center text-muted hover:text-white hover:border-white transition-all"
          aria-label="Next set"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots */}
      {sets.length > 1 && (
        <div className="flex justify-center gap-2 mt-1">
          {sets.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? 'bg-white' : 'bg-border'}`}
              aria-label={`Go to set ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
