import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import LogoutButton from './LogoutButton'

const SANITY_STUDIO_URL = 'http://localhost:3333'

const sections = [
  {
    title: 'ARTISTS',
    description: 'Add, edit, or remove artist profiles, bios, photos, videos, and shows.',
    studioPath: '/structure/artist',
    createPath: '/structure/artist;new',
    icon: '🎤',
  },
  {
    title: 'LIVE SETS',
    description: 'Manage YouTube live set recordings and their display order.',
    studioPath: '/structure/liveSet',
    createPath: '/structure/liveSet;new',
    icon: '🎬',
  },
  {
    title: 'TEAM',
    description: 'Update team member profiles, photos, titles, and social links.',
    studioPath: '/structure/teamMember',
    createPath: '/structure/teamMember;new',
    icon: '👥',
  },
  {
    title: 'SITE SETTINGS',
    description: 'Update Trackstack URL, social media links, and featured YouTube video.',
    studioPath: '/structure/siteSettings',
    createPath: '/structure/siteSettings',
    icon: '⚙️',
  },
]

export default async function DashboardPage() {
  const cookieStore = cookies()
  const role = cookieStore.get('4four_role')?.value
  const username = cookieStore.get('4four_user')?.value

  if (!role) {
    redirect('/admin')
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Dashboard Header */}
      <header className="border-b border-border px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl tracking-widest">4FOUR MGMT</h1>
          <p className="text-muted text-xs tracking-widest mt-1">DASHBOARD</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-xs tracking-widest text-muted">Signed in as</p>
            <p className="text-sm text-white">{username || 'User'}</p>
            <span className="inline-block mt-1 text-xs tracking-widest text-muted border border-border px-2 py-0.5">
              {role?.toUpperCase()}
            </span>
          </div>
          <LogoutButton />
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="mb-16">
          <p className="text-muted text-xs tracking-widest mb-4">CONTENT MANAGEMENT</p>
          <h2 className="font-display text-5xl tracking-widest mb-4">MANAGE CONTENT</h2>
          <p className="text-muted-2 text-sm leading-relaxed max-w-xl">
            All content is managed through the Sanity Studio. Click any section below to open the studio in a new tab and begin editing. Make sure the Sanity Studio is running (<code className="text-muted-2 bg-surface px-2 py-0.5 text-xs">npm run sanity</code>).
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {sections.map(section => (
            <div key={section.title} className="border border-border bg-surface p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-display text-2xl tracking-widest mb-1">{section.title}</p>
                  <p className="text-muted text-xs leading-relaxed">{section.description}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <a
                  href={`${SANITY_STUDIO_URL}${section.studioPath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs px-5 py-2"
                >
                  Manage in Studio →
                </a>
                <a
                  href={`${SANITY_STUDIO_URL}${section.createPath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs px-5 py-2"
                >
                  + Create New
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="border border-border bg-surface p-8 mb-8">
          <p className="font-display text-2xl tracking-widest mb-4">HOW TO USE SANITY STUDIO</p>
          <ol className="text-muted text-sm space-y-3 list-decimal list-inside leading-relaxed">
            <li>Open a terminal in this project folder</li>
            <li>
              Run <code className="bg-black text-muted-2 px-2 py-0.5 text-xs">npm run sanity</code> to start the Sanity Studio on{' '}
              <code className="bg-black text-muted-2 px-2 py-0.5 text-xs">localhost:3333</code>
            </li>
            <li>First time? Create a Sanity project at <a href="https://sanity.io" target="_blank" rel="noopener noreferrer" className="text-white hover:text-muted transition-colors">sanity.io</a> and copy the Project ID into your <code className="text-xs">.env.local</code></li>
            <li>Click any &ldquo;Manage in Studio →&rdquo; button above to open the relevant section</li>
            <li>Changes you make in the studio will appear on the site within 60 seconds (ISR revalidation)</li>
          </ol>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4">
            <Link href="/" className="btn-secondary text-xs px-5 py-2">
              ← View Site
            </Link>
            <a
              href={SANITY_STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs px-5 py-2"
            >
              Open Full Studio →
            </a>
          </div>
          <p className="text-muted text-xs tracking-wider">
            Studio URL: {SANITY_STUDIO_URL}
          </p>
        </div>
      </div>
    </div>
  )
}
