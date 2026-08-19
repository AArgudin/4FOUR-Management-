import Link from 'next/link'

export const metadata = {
  title: 'Set Schedule | SASH',
}

const schedule = [
  { event: 'Break Away Festival', location: 'Tampa, FL - USA',   date: '17.04.2026' },
  { event: 'Ocean Club',          location: 'Marbella, SP',      date: '27.05.2026' },
  { event: 'Plastik',             location: 'Ibiza, SP',         date: '30.05.2026' },
  { event: 'Delta',               location: 'Tampa, FL - USA',   date: '04.06.2026' },
  { event: 'Lakeshore Festival',  location: 'Chicago, IL - USA', date: '19.06.2026' },
  { event: 'Lakeshore Festival',  location: 'Chicago, IL - USA', date: '20.06.2026' },
  { event: 'House Hats',          location: 'Tampa, FL - USA',      date: '03.07.2026' },
  { event: 'Crowd Control',       location: 'Tampa, FL - USA',      date: '04.07.2026' },
  { event: 'No Sleep',            location: 'Tampa, FL - USA',      date: '19.07.2026' },
  { event: 'NOVA',                location: 'Tampa, FL - USA',      date: '27.08.2026' },
  { event: 'RITZ',                location: 'Tampa, FL - USA',      date: '29.08.2026' },
  { event: 'House Hats',          location: 'Gainesville, FL - USA', date: '11.09.2026' },
  { event: 'SAE',                 location: 'Gainesville, FL - USA', date: '16.10.2026' },
]

export default function SetSchedulePage() {
  return (
    <section className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="section-label mb-4">SASH</p>
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-widest mb-16">
          SET SCHEDULE
        </h1>

        {/* Header row */}
        <div className="grid grid-cols-3 px-2 pb-3 border-b border-border">
          <p className="text-xs tracking-widest text-muted uppercase">Event</p>
          <p className="text-xs tracking-widest text-muted uppercase text-center">Location</p>
          <p className="text-xs tracking-widest text-muted uppercase text-right">Date</p>
        </div>

        <div className="mb-16 overflow-y-auto max-h-[480px] scrollbar-black">
          {schedule.map(({ event, location, date }) => (
            <div key={`${event}-${date}`} className="grid grid-cols-3 items-center py-6 px-2">
              <p className="text-sm md:text-base tracking-widest text-white">{event}</p>
              <p className="text-sm md:text-base tracking-widest text-muted-2 text-center">{location}</p>
              <p className="text-sm md:text-base tracking-widest text-muted text-right">{date}</p>
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
