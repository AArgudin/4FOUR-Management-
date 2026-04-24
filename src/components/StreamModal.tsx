'use client'
import { useEffect } from 'react'
import { X, Instagram } from 'lucide-react'

interface Props {
  artist: { name: string; instagramUrl: string; tiktokUrl: string }
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
          {artist.instagramUrl && (
            <a
              href={artist.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white px-6 py-4 text-white hover:bg-white hover:text-black transition-all tracking-widest text-sm font-medium uppercase"
            >
              <Instagram size={18} /> Instagram
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
          {!artist.instagramUrl && !artist.tiktokUrl && (
            <p className="text-muted text-sm tracking-wider">No streaming links available yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
