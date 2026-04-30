import Link from 'next/link'

export const metadata = {
  title: 'Set Schedule | SASH',
}

const schedule = [
  { event: 'Break Away Festival', date: '17.04.2026' },
  { event: 'Lakeshore Festival',  date: '19-20.06.2026' },
]

export default function SetSchedulePage() {
  return (
    <section className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="section-label mb-4">SASH</p>
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-widest mb-16">
          SET SCHEDULE
        </h1>

        <div className="divide-y divide-border border-t border-border mb-16">
          {schedule.map(({ event, date }) => (
            <div key={event} className="flex items-center justify-between py-6 px-2">
              <p className="text-sm md:text-base tracking-widest text-white">{event}</p>
              <p className="text-sm md:text-base tracking-widest text-muted">{date}</p>
            </div>
          ))}
        </div>

        <Link href="/talent/sash" className="text-xs tracking-widest text-muted hover:text-white transition-colors">
          ← Back to SASH
        </Link>
      </div>
    </section>
  )
}
