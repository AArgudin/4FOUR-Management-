import Link from 'next/link'

export const metadata = {
  title: 'Set Schedule | SASH',
}

export default function SetSchedulePage() {
  return (
    <section className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="section-label mb-4">SASH</p>
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-widest mb-16">
          SET SCHEDULE
        </h1>
        <Link href="/talent/sash" className="text-xs tracking-widest text-muted hover:text-white transition-colors">
          ← Back to SASH
        </Link>
      </div>
    </section>
  )
}
