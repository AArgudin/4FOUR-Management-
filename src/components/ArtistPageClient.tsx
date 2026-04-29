'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { urlFor, getYoutubeThumbnail } from '@/lib/sanity'
import StreamModal from './StreamModal'
import LightboxGallery from './LightboxGallery'
import type { Artist } from '@/types'

interface Props {
  artist: Artist
}

export default function ArtistPageClient({ artist }: Props) {
  const [streamOpen, setStreamOpen] = useState(false)

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-20 bg-black border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10 items-center">

          {/* Left 1/3 — Artist image */}
          <div className="relative w-full md:w-1/3 aspect-[3/4] overflow-hidden border border-border shrink-0">
            <Image
              src={`/artists/${artist.slug?.current?.toUpperCase()}/artist-photo2.jpg`}
              alt={artist.name}
              fill
              className="object-cover grayscale"
              priority
            />
          </div>

          {/* Right 2/3 — Info */}
          <div className="flex-1">
            <p className="section-label mb-2">{artist.role}</p>
            <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-none tracking-widest mb-8">
              {artist.name.toUpperCase()}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              {artist.instagramUrl && (
                <a href={artist.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Instagram size={14} /> Instagram
                </a>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── BIO ── */}
      {artist.bio && (
        <section className="py-24 bg-black border-t border-border">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <p className="section-label">Biography</p>
              <h2 className="font-display text-3xl tracking-widest">ABOUT</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-muted-2 leading-relaxed text-sm md:text-base whitespace-pre-line">
                {artist.bio}
              </p>
            </div>
          </div>
        </section>
      )}


      {/* ── GALLERY ── */}
      {artist.photos && artist.photos.length > 0 && (
        <section className="py-24 bg-black border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label">Gallery</p>
            <h2 className="font-display text-4xl tracking-widest mb-10">PHOTOS</h2>
            <LightboxGallery photos={artist.photos} artistName={artist.name} />
          </div>
        </section>
      )}

      {/* ── VIDEOS ── */}
      {artist.videos && artist.videos.length > 0 && (
        <section className="py-24 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label">Videos</p>
            <h2 className="font-display text-4xl tracking-widest mb-10">WATCH</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artist.videos.map((video, index) => {
                const thumbnail = getYoutubeThumbnail(video.url)
                return (
                  <div key={index} className="group border border-border bg-black">
                    <div className="relative aspect-video overflow-hidden">
                      {thumbnail ? (
                        <Image
                          src={thumbnail}
                          alt={video.title || `Video ${index + 1}`}
                          fill
                          className="object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-surface-2">
                          <span className="text-muted text-xs tracking-widest">VIDEO</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 border border-white flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      {video.title && (
                        <h3 className="font-display text-lg tracking-widest mb-3">{video.title.toUpperCase()}</h3>
                      )}
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-widest text-muted hover:text-white transition-colors"
                      >
                        Watch on YouTube →
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── SHOWS ── */}
      {artist.shows && artist.shows.length > 0 && (
        <section className="py-24 bg-black border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="section-label">Live</p>
            <h2 className="font-display text-4xl tracking-widest mb-10">UPCOMING SHOWS</h2>
            <div className="divide-y divide-border">
              {artist.shows.map((show, index) => (
                <div key={index} className="py-6 grid grid-cols-3 md:grid-cols-4 items-center gap-4">
                  <div>
                    <p className="text-xs tracking-widest text-muted mb-1">DATE</p>
                    <p className="text-sm font-medium">
                      {new Date(show.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-2">
                    <p className="text-xs tracking-widest text-muted mb-1">VENUE</p>
                    <p className="text-sm font-medium">{show.venue}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest text-muted mb-1">CITY</p>
                    <p className="text-sm font-medium">{show.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BACK LINK ── */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/talent" className="text-xs tracking-widest text-muted hover:text-white transition-colors">
            ← Back to All Artists
          </Link>
          <button
            onClick={() => setStreamOpen(true)}
            className="btn-primary"
          >
            Stream {artist.name} →
          </button>
        </div>
      </section>

      {/* Stream Modal */}
      {streamOpen && (
        <StreamModal
          artist={{
            name: artist.name,
            instagramUrl: artist.instagramUrl,
            tiktokUrl: artist.tiktokUrl,
          }}
          onClose={() => setStreamOpen(false)}
        />
      )}
    </>
  )
}
