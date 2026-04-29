'use client'
import { useEffect } from 'react'
import { X, Instagram } from 'lucide-react'

interface Props {
  artist: { name: string; instagramUrl: string; tiktokUrl: string; soundcloudUrl: string }
  onClose: () => void
}

export default function StreamModal({ artist, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-surface border border-border p-10 max-w-md w-full mx-4 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <h2 className="font-display text-4xl mb-2 tracking-widest">STREAM</h2>
        <p className="text-muted text-sm tracking-wider mb-8">{artist.name.toUpperCase()}</p>
        <div className="flex flex-col gap-4">
          {artist.soundcloudUrl && (
            <a
              href={artist.soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white px-6 py-4 text-white hover:bg-white hover:text-black transition-all tracking-widest text-sm font-medium uppercase"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.175 12.225c-.015.108-.024.217-.024.33 0 1.333 1.075 2.42 2.404 2.42.15 0 .295-.015.438-.042H20.32c.95-.06 1.695-.848 1.695-1.818 0-.852-.578-1.566-1.37-1.765.043-.184.065-.376.065-.572 0-1.433-1.155-2.595-2.58-2.595-.195 0-.385.022-.568.063C17.19 6.9 15.773 5.7 14.07 5.7c-1.643 0-3.032 1.15-3.43 2.7-.27-.12-.57-.19-.886-.19-1.293 0-2.344 1.056-2.344 2.358 0 .055.003.11.007.163C6.625 10.646 5.9 11.36 5.9 12.246c0 .668.364 1.248.9 1.556L5.9 12.22l.003.004a2.16 2.16 0 0 1-.21-.958c0-1.2.97-2.18 2.162-2.18.136 0 .27.013.4.038.028-.04.058-.077.09-.113C8.716 7.92 10.19 6.9 11.9 6.9c1.59 0 2.972.914 3.654 2.245.18-.05.37-.077.565-.077 1.065 0 1.928.868 1.928 1.938 0 .21-.034.413-.095.603.476.21.807.692.807 1.25 0 .755-.61 1.365-1.363 1.365H3.67c-.012 0-.024 0-.036-.002a1.43 1.43 0 0 1-.45-.077A1.442 1.442 0 0 1 2.2 12.78a1.44 1.44 0 0 1-.188-.383 1.434 1.434 0 0 1-.054-.358c0-.395.16-.753.418-1.014l-.201.2z"/>
              </svg>
              SoundCloud
            </a>
          )}
          {artist.tiktokUrl && (
            <a
              href={artist.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white px-6 py-4 text-white hover:bg-white hover:text-black transition-all tracking-widest text-sm font-medium uppercase"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
              TikTok
            </a>
          )}
          {!artist.soundcloudUrl && !artist.tiktokUrl && (
            <p className="text-muted text-sm tracking-wider">No streaming links available yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
