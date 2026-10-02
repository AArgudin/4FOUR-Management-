import ScheduleView from '@/components/ScheduleView'

export const metadata = {
  title: 'Set Schedule | SASH',
}

const schedule = [
  { event: 'Break Away Festival', location: 'Tampa, FL - USA',      date: '17.04.2026' },
  { event: 'Ocean Club',          location: 'Marbella, SP',         date: '27.05.2026' },
  { event: 'Plastik',             location: 'Ibiza, SP',            date: '30.05.2026' },
  { event: 'Delta',               location: 'Tampa, FL - USA',      date: '04.06.2026', support: 'Pedroz' },
  { event: 'Lakeshore Festival',  location: 'Chicago, IL - USA',    date: '19.06.2026' },
  { event: 'Lakeshore Festival',  location: 'Chicago, IL - USA',    date: '20.06.2026' },
  { event: 'House Hats',          location: 'Tampa, FL - USA',      date: '03.07.2026', support: 'Tyke' },
  { event: 'Crowd Control',       location: 'Tampa, FL - USA',      date: '04.07.2026', support: 'Chase West & Slugg' },
  { event: 'No Sleep',            location: 'Tampa, FL - USA',      date: '19.07.2026', support: 'Jordan Brando' },
  { event: '511 Franklin',        location: 'Tampa, FL - USA',      date: '27.08.2026', support: 'Jay Crusoe' },
  { event: 'NOVA',                location: 'Tampa, FL - USA',      date: '27.08.2026', support: 'Adam Sellouk' },
  { event: 'Metamorphosis',       location: 'Orlando, FL - USA',    date: '28.08.2026' },
  { event: 'The Ritz Ybor',       location: 'Tampa, FL - USA',      date: '29.08.2026', support: 'Nic Vanz' },
  { event: 'Cantina Añejo',       location: 'Gainesville, FL - USA', date: '10.09.2026', support: 'Sem Jacobs' },
  { event: 'ATO Volcano',         location: 'Gainesville, FL - USA', date: '11.09.2026', headline: true },
  { event: 'House Hats',          location: 'Gainesville, FL - USA', date: '11.09.2026', support: 'Ayybo' },
  { event: 'Vivid Music Hall',    location: 'Gainesville, FL - USA', date: '03.10.2026', support: 'Murda Beatz' },
  { event: 'Cantina Añejo',       location: 'Gainesville, FL - USA', date: '06.10.2026', support: 'Welker' },
  { event: 'The Woods',           location: 'Lake City, FL - USA',   date: '07.10.2026', support: 'ChaseWest' },
  { event: 'SAE',                 location: 'Gainesville, FL - USA', date: '16.10.2026', support: 'Riordan' },
]

export default function SetSchedulePage() {
  return <ScheduleView schedule={schedule} artistName="SASH" backHref="/talent/sash" />
}
