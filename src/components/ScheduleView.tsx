'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'

interface Show {
  event: string
  location: string
  date: string
  support?: string
  headline?: boolean
}

interface Props {
  schedule: Show[]
  artistName: string
  backHref: string
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function parseDate(dateStr: string) {
  const [, month, year] = dateStr.split('.').map(Number)
  return { month, year }
}

export default function ScheduleView({ schedule, artistName, backHref }: Props) {
  const months = useMemo(() => {
    const now = new Date()
    // Start from the earliest show month (or current month if no past shows)
    let startYear = now.getFullYear()
    let startMonth = now.getMonth() + 1
    for (const show of schedule) {
      const { month, year } = parseDate(show.date)
      if (year < startYear || (year === startYear && month < startMonth)) {
        startYear = year
        startMonth = month
      }
    }
    // End 12 months from now
    const endDate = new Date(now.getFullYear(), now.getMonth() + 12, 1)
    const endYear = endDate.getFullYear()
    const endMonth = endDate.getMonth() + 1

    const result: { key: string; month: number; year: number; label: string }[] = []
    let y = startYear
    let m = startMonth
    while (y < endYear || (y === endYear && m <= endMonth)) {
      result.push({ key: `${y}-${m}`, month: m, year: y, label: `${MONTHS[m - 1]} ${y}` })
      m++
      if (m > 12) { m = 1; y++ }
    }
    return result
  }, [schedule])

  const defaultIndex = useMemo(() => {
    const now = new Date()
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth() + 1
    const idx = months.findIndex(m => m.year === currentYear && m.month === currentMonth)
    return idx >= 0 ? idx : 0
  }, [months])

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex)

  const selectedKey = months[selectedIndex]?.key ?? ''

  const filteredShows = useMemo(() =>
    schedule.filter(show => {
      const { month, year } = parseDate(show.date)
      return `${year}-${month}` === selectedKey
    }),
    [schedule, selectedKey]
  )

  const currentMonth = months[selectedIndex]

  return (
    <section className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="section-label mb-4">{artistName.toUpperCase()}</p>
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-widest mb-8">
          SET SCHEDULE
        </h1>

        {/* Month navigator */}
        <div className="flex items-center gap-6 mb-10">
          <button
            onClick={() => setSelectedIndex(i => Math.max(0, i - 1))}
            disabled={selectedIndex === 0}
            className="text-muted hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed text-lg"
            aria-label="Previous month"
          >
            ←
          </button>
          <p className="text-sm md:text-base tracking-widest uppercase text-white min-w-[180px] text-center">
            {currentMonth ? `${currentMonth.label}` : ''}
          </p>
          <button
            onClick={() => setSelectedIndex(i => Math.min(months.length - 1, i + 1))}
            disabled={selectedIndex === months.length - 1}
            className="text-muted hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed text-lg"
            aria-label="Next month"
          >
            →
          </button>
        </div>

        {/* Header row */}
        <div className="grid grid-cols-3 px-2 pb-3 border-b border-border">
          <p className="text-xs tracking-widest text-muted uppercase">Event</p>
          <p className="text-xs tracking-widest text-muted uppercase text-center">Location</p>
          <p className="text-xs tracking-widest text-muted uppercase text-right">Date</p>
        </div>

        <div className="mb-16">
          {filteredShows.length === 0 ? (
            <p className="text-muted text-xs tracking-widest py-10 text-center">No shows this month.</p>
          ) : (
            filteredShows.map(({ event, location, date, support, headline }) => (
              <div key={`${event}-${date}`} className="grid grid-cols-3 items-center py-3 md:py-6 px-1 md:px-2 border-b border-border/30">
                <div>
                  <p className="text-[10px] md:text-base tracking-tight md:tracking-widest text-white leading-tight">{event}</p>
                  {support && (
                    <p className="text-[8px] md:text-[10px] tracking-tight md:tracking-widest text-muted mt-0.5">Support for {support}</p>
                  )}
                  {headline && (
                    <p className="text-[8px] md:text-[10px] tracking-tight md:tracking-widest text-muted mt-0.5">Headline</p>
                  )}
                </div>
                <p className="text-[9px] md:text-base tracking-tight md:tracking-widest text-muted-2 text-center leading-tight">{location}</p>
                <p className="text-[9px] md:text-base tracking-tight md:tracking-widest text-muted text-right leading-tight">{date}</p>
              </div>
            ))
          )}
        </div>

        <Link href={backHref} className="text-xs tracking-widest text-muted hover:text-white transition-colors">
          ← Back to {artistName}
        </Link>
      </div>
    </section>
  )
}
