'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { urlFor } from '@/lib/sanity'
import type { SanityImage } from '@/types'

interface Props {
  photos: SanityImage[]
  artistName: string
}

export default function LightboxGallery({ photos, artistName }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!photos || photos.length === 0) return null

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)
  }

  const next = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % photos.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden bg-surface-2 group"
          >
            <Image
              src={urlFor(photo).width(400).height(400).url()}
              alt={`${artistName} photo ${index + 1}`}
              fill
              className="object-cover grayscale group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="Photo lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-muted hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-muted text-xs tracking-widest">
            {lightboxIndex + 1} / {photos.length}
          </div>

          {/* Prev Button */}
          {photos.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-4 md:left-8 text-muted hover:text-white transition-colors z-10 p-2"
              aria-label="Previous photo"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full mx-16 md:mx-24"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={urlFor(photos[lightboxIndex]).width(1200).url()}
              alt={`${artistName} photo ${lightboxIndex + 1}`}
              width={1200}
              height={900}
              className="object-contain grayscale max-h-[85vh] w-auto mx-auto"
            />
          </div>

          {/* Next Button */}
          {photos.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-4 md:right-8 text-muted hover:text-white transition-colors z-10 p-2"
              aria-label="Next photo"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      )}
    </>
  )
}
