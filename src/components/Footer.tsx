import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/talent', label: 'ARTISTS' },
  { href: '/live-sets', label: 'LIVE SETS' },
  { href: '/trackstack', label: 'TRACKSTACK' },
  { href: '/team', label: 'TEAM' },
  { href: '/contact', label: 'CONTACT' },
]

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function SoundCloudIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.175 12.225c-.015.108-.024.217-.024.33 0 1.333 1.075 2.42 2.404 2.42.15 0 .295-.015.438-.042H20.32c.95-.06 1.695-.848 1.695-1.818 0-.852-.578-1.566-1.37-1.765.043-.184.065-.376.065-.572 0-1.433-1.155-2.595-2.58-2.595-.195 0-.385.022-.568.063C17.19 6.9 15.773 5.7 14.07 5.7c-1.643 0-3.032 1.15-3.43 2.7-.27-.12-.57-.19-.886-.19-1.293 0-2.344 1.056-2.344 2.358 0 .055.003.11.007.163C6.625 10.646 5.9 11.36 5.9 12.246c0 .668.364 1.248.9 1.556L5.9 12.22l.003.004a2.16 2.16 0 0 1-.21-.958c0-1.2.97-2.18 2.162-2.18.136 0 .27.013.4.038.028-.04.058-.077.09-.113C8.716 7.92 10.19 6.9 11.9 6.9c1.59 0 2.972.914 3.654 2.245.18-.05.37-.077.565-.077 1.065 0 1.928.868 1.928 1.938 0 .21-.034.413-.095.603.476.21.807.692.807 1.25 0 .755-.61 1.365-1.363 1.365H3.67c-.012 0-.024 0-.036-.002a1.43 1.43 0 0 1-.45-.077A1.442 1.442 0 0 1 2.2 12.78a1.44 1.44 0 0 1-.188-.383 1.434 1.434 0 0 1-.054-.358c0-.395.16-.753.418-1.014l-.201.2z"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-10">
        {/* Logo */}
        <Link href="/" className="font-display text-4xl tracking-widest text-white hover:opacity-70 transition-opacity">
          4FOUR MGMT
        </Link>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest text-muted hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" aria-label="SoundCloud">
            <SoundCloudIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" aria-label="YouTube">
            <YouTubeIcon />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-border" />

        {/* Copyright */}
        <p className="text-muted text-xs tracking-widest text-center">
          © {new Date().getFullYear()} 4FOUR MGMT. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
