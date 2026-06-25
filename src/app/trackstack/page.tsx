import type { Metadata } from 'next'
import { client, isSanityConfigured } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import type { SiteSettings } from '@/types'

export const metadata: Metadata = {
  title: 'Trackstack | 4FOUR MGMT',
  description: "Explore our artists' track catalog on Trackstack.",
}

export const revalidate = 60

async function getSettings(): Promise<SiteSettings | null> {
  if (!isSanityConfigured) return null
  try {
    return await client.fetch<SiteSettings>(siteSettingsQuery)
  } catch {
    return null
  }
}

export default async function TrackstackPage() {
  const settings = await getSettings()
  const trackstackUrl = settings?.trackstackUrl || null

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-black border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Music</p>
          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] tracking-widest leading-none">
            TRACKSTACK
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="min-h-[60vh] flex items-center bg-black">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center w-full">
          {/* Logo / Icon */}
          <div className="w-20 h-20 border border-border mx-auto mb-10 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>

          <h2 className="font-display text-4xl md:text-6xl tracking-widest mb-6">
            EXPLORE THE CATALOG
          </h2>
          <p className="text-muted-2 text-sm leading-relaxed max-w-lg mx-auto mb-12">
            Explore our artists&apos; complete track catalog on Trackstack — the best way to discover, stream, and follow the music coming out of 4FOUR MGMT.
          </p>

          {trackstackUrl ? (
            <a
              href={trackstackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-12 py-4"
            >
              Open Trackstack →
            </a>
          ) : (
            <div className="border border-border p-8 max-w-sm mx-auto">
              <p className="text-muted text-xs tracking-widest mb-2">TRACKSTACK URL</p>
              <p className="text-muted-2 text-xs leading-relaxed">
                Trackstack link coming soon. Add the URL via Sanity Studio → Site Settings → Trackstack URL.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Decorative bottom section */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['STREAM ANYWHERE', 'DISCOVER NEW MUSIC', 'SUPPORT THE ARTISTS'].map(text => (
              <div key={text} className="border border-border p-8 text-center">
                <p className="font-display text-2xl tracking-widest text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
