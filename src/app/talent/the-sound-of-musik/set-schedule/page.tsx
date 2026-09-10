import Link from 'next/link'

export const metadata = {
  title: 'Set Schedule | The Sound Of Muzik',
}

const schedule = [
  { event: 'Celine',        location: 'Orlando, FL - USA',     date: '03.07.2026', support: 'Ranger Trucco' },
  { event: 'Crowd Control', location: 'Gainesville, FL - USA', date: '23.08.2026' },
  { event: 'Crowd Control', location: 'Gainesville, FL - USA', date: '28.08.2026', support: 'Slugg' },
  { event: 'Cantina Añejo', location: 'Gainesville, FL - USA', date: '10.09.2026', support: 'Sem Jacobs' },
]

export default function SetSchedulePage() {
  return (
    <section className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="section-label mb-4">THE SOUND OF MUZIK</p>
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
          {schedule.map(({ event, location, date, support }) => (
            <div key={`${event}-${date}`} className="grid grid-cols-3 items-center py-3 md:py-6 px-1 md:px-2 border-b border-border/30">
              <div>
                <p className="text-[10px] md:text-base tracking-tight md:tracking-widest text-white leading-tight">{event}</p>
                {support && (
                  <p className="text-[8px] md:text-[10px] tracking-tight md:tracking-widest text-muted mt-0.5">Support for {support}</p>
                )}
              </div>
              <p className="text-[9px] md:text-base tracking-tight md:tracking-widest text-muted-2 text-center leading-tight">{location}</p>
              <p className="text-[9px] md:text-base tracking-tight md:tracking-widest text-muted text-right leading-tight">{date}</p>
            </div>
          ))}
        </div>

        <Link href="/talent/the-sound-of-musik" className="text-xs tracking-widest text-muted hover:text-white transition-colors">
          ← Back to The Sound Of Muzik
        </Link>
      </div>
    </section>
  )
}
