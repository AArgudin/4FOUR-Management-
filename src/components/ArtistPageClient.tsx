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

const latestRelease = {
  title: 'SW10th ST',
  image: '/artists/SASH/SASH-EP1.png',
  spotifyUrl: 'https://open.spotify.com/album/1OII8Pedv7V7w1m2x2F5xW',
  appleMusicUrl: 'https://music.apple.com/us/album/sw10th-ep/6810460122',
  soundcloudUrl: 'https://on.soundcloud.com/yA8R9w57KASnX5xFCe',
  youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mc1xAXc1xO0JIYS0F4Bid2NqIX1ZrIBWM',
}

export default function ArtistPageClient({ artist }: Props) {
  const [streamOpen, setStreamOpen] = useState(false)
  const isSash = artist.slug?.current === 'sash'

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-20 bg-black border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 flex flex-col gap-6 md:gap-10">

          {/* Top row: image left + info right (both mobile and desktop) */}
          <div className="flex flex-row gap-4 md:gap-10 items-stretch">

            {/* Image */}
            <div className="relative w-2/5 md:w-1/3 aspect-[3/4] md:aspect-auto md:min-h-[520px] overflow-hidden border border-border shrink-0">
              <Image
                src={artist.heroPhoto || `/artists/${artist.slug?.current?.toUpperCase()}/artist-photo2.jpg`}
                alt={artist.name}
                fill
                className={`object-cover grayscale ${isSash ? 'object-top' : 'object-center'}`}
                priority
              />
            </div>

            {/* Info: role, name, buttons, supported artists */}
            <div className="flex-1 flex flex-col justify-start pt-1 md:pt-2 min-w-0">
              <p className="section-label mb-1 md:mb-2 text-[10px] md:text-xs">{artist.role}</p>
              <h1 className="font-display text-[clamp(1.8rem,6vw,7rem)] leading-none tracking-widest mb-3 md:mb-8">
                {artist.name.toUpperCase()}
              </h1>
              <div className="flex flex-col gap-2 md:gap-4 w-full md:w-fit mb-4 md:mb-8">
                {artist.instagramUrl && (
                  <a href={artist.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-[10px] md:text-xs px-4 md:px-8 py-2 md:py-3 justify-center md:justify-start">
                    <Instagram size={12} /> Instagram
                  </a>
                )}
                <Link href={`/talent/${artist.slug?.current}/set-schedule`} className="btn-primary text-[10px] md:text-xs px-4 md:px-8 py-2 md:py-3 justify-center md:justify-start">
                  Set Schedule →
                </Link>
              </div>

              {/* Supported artists — SASH hardcoded */}
              {isSash && (
                <div className="border border-border w-full md:w-fit md:min-w-[220px]">
                  <div className="px-3 py-2 md:px-5 md:py-3 border-b border-border">
                    <p className="text-[10px] md:text-xs tracking-widest text-white font-bold uppercase">Supported Artists</p>
                  </div>
                  <div className="overflow-y-auto max-h-[130px] md:max-h-[180px] scrollbar-black">
                    {['Marco Carola', 'Paco Ozuna', 'Dedro', 'Dan Molinari', 'Ragie Ban', 'D.O.D.', 'Wuki', 'Jakeshore', 'Pedroz', 'Joshwa', 'Tyke', 'Chasewest', 'Slugg', 'Nic Vans', 'Calussa', 'Ayybo', 'Murda Beats', 'Jay Crusoe'].map((name) => (
                      <div key={name} className="px-3 py-1.5 md:px-5 md:py-3 text-[10px] md:text-sm tracking-widest text-white">
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Supported artists — other artists */}
              {!isSash && artist.supportedArtists && artist.supportedArtists.length > 0 && (
                <div className="border border-border w-full md:w-fit md:min-w-[220px]">
                  <div className="px-3 py-2 md:px-5 md:py-3 border-b border-border">
                    <p className="text-[10px] md:text-xs tracking-widest text-white font-bold uppercase">Supported Artists</p>
                  </div>
                  <div className="overflow-y-auto max-h-[130px] md:max-h-[180px] scrollbar-black">
                    {artist.supportedArtists.map((name) => (
                      <div key={name} className="px-3 py-1.5 md:px-5 md:py-3 text-[10px] md:text-sm tracking-widest text-white">
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Biography — desktop only (3rd column) */}
            {artist.bio ? (
              <div className="hidden md:flex w-[420px] shrink-0 border border-border flex-col">
                <div className="px-5 py-4 border-b border-border">
                  <p className="text-xs tracking-widest text-muted uppercase">Biography</p>
                </div>
                <div className="flex-1 overflow-y-auto max-h-[480px] px-5 py-5 scrollbar-black">
                  <p className="text-muted-2 text-xs leading-relaxed tracking-wide whitespace-pre-line">
                    {artist.bio}
                  </p>
                </div>
              </div>
            ) : !isSash && (
              <div className="hidden md:flex w-[420px] shrink-0 border border-border flex-col">
                <div className="px-5 py-4 border-b border-border">
                  <p className="text-xs tracking-widest text-muted uppercase">Biography</p>
                </div>
                <div className="flex-1 overflow-y-auto max-h-[480px] px-5 py-5 scrollbar-black">
                  <p className="text-muted-2 text-xs leading-relaxed tracking-wide">Coming Soon</p>
                </div>
              </div>
            )}
          </div>

          {/* Bio — mobile only (below the row) */}
          {artist.bio && (
            <div className="md:hidden border border-border flex flex-col">
              <div className="px-4 py-3 border-b border-border">
                <p className="text-[10px] tracking-widest text-muted uppercase">Biography</p>
              </div>
              <div className="overflow-y-auto max-h-[200px] px-4 py-4 scrollbar-black">
                <p className="text-muted-2 text-xs leading-relaxed tracking-wide whitespace-pre-line">
                  {artist.bio}
                </p>
              </div>
            </div>
          )}

        </div>
      </section>


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

      {/* ── NEW RELEASES ── */}
      <section className="py-24 bg-black border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Music</p>
          <div className="flex items-center gap-8 mb-10">
            <h2 className="font-display text-4xl tracking-widest">NEW RELEASES</h2>
            <button onClick={() => setStreamOpen(true)} className="btn-primary">
              Stream {artist.name} →
            </button>
          </div>
          <div className="flex flex-wrap gap-6 items-start">
            {isSash ? (
              <div className="group relative border border-border hover:border-white transition-colors w-48 flex flex-col overflow-hidden">
                <div className="relative w-48 h-48 overflow-hidden border-b border-border">
                  <Image
                    src={latestRelease.image}
                    alt={latestRelease.title}
                    fill
                    className="object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-white text-xs tracking-widest uppercase">{latestRelease.title}</p>
                </div>
                {/* Hover overlay with platform links */}
                <div className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={latestRelease.spotifyUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" aria-label="Spotify">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                  </a>
                  <a href={latestRelease.appleMusicUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" aria-label="Apple Music">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>
                  </a>
                  <a href={latestRelease.soundcloudUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" aria-label="SoundCloud">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M1.175 12.225c-.015.108-.024.217-.024.33 0 1.333 1.075 2.42 2.404 2.42.15 0 .295-.015.438-.042H20.32c.95-.06 1.695-.848 1.695-1.818 0-.852-.578-1.566-1.37-1.765.043-.184.065-.376.065-.572 0-1.433-1.155-2.595-2.58-2.595-.195 0-.385.022-.568.063C17.19 6.9 15.773 5.7 14.07 5.7c-1.643 0-3.032 1.15-3.43 2.7-.27-.12-.57-.19-.886-.19-1.293 0-2.344 1.056-2.344 2.358 0 .055.003.11.007.163C6.625 10.646 5.9 11.36 5.9 12.246c0 .668.364 1.248.9 1.556L5.9 12.22l.003.004a2.16 2.16 0 0 1-.21-.958c0-1.2.97-2.18 2.162-2.18.136 0 .27.013.4.038.028-.04.058-.077.09-.113C8.716 7.92 10.19 6.9 11.9 6.9c1.59 0 2.972.914 3.654 2.245.18-.05.37-.077.565-.077 1.065 0 1.928.868 1.928 1.938 0 .21-.034.413-.095.603.476.21.807.692.807 1.25 0 .755-.61 1.365-1.363 1.365H3.67c-.012 0-.024 0-.036-.002a1.43 1.43 0 0 1-.45-.077A1.442 1.442 0 0 1 2.2 12.78a1.44 1.44 0 0 1-.188-.383 1.434 1.434 0 0 1-.054-.358c0-.395.16-.753.418-1.014l-.201.2z"/></svg>
                  </a>
                  <a href={latestRelease.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" aria-label="YouTube Music">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            ) : (
              <div className="border border-border w-48 flex flex-col">
                <div className="w-48 h-48 bg-surface flex items-center justify-center border-b border-border">
                  <p className="text-muted text-xs tracking-widest text-center px-4">No new releases out yet</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── BACK LINK ── */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          <Link href="/talent" className="text-xs tracking-widest text-muted hover:text-white transition-colors">
            ← Back to All Artists
          </Link>
        </div>
      </section>

      {/* Stream Modal */}
      {streamOpen && (
        <StreamModal
          artist={{
            name: artist.name,
            instagramUrl: artist.instagramUrl,
            tiktokUrl: artist.tiktokUrl,
            soundcloudUrl: artist.soundcloudUrl,
            spotifyUrl: artist.spotifyUrl,
            appleMusicUrl: artist.appleMusicUrl,
            youtubeUrl: artist.youtubeUrl,
          }}
          onClose={() => setStreamOpen(false)}
        />
      )}

    </>
  )
}
