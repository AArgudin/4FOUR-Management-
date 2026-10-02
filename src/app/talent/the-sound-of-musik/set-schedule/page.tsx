import ScheduleView from '@/components/ScheduleView'

export const metadata = {
  title: 'Set Schedule | The Sound Of Muzik',
}

const schedule = [
  { event: 'Celine',        location: 'Orlando, FL - USA',     date: '03.07.2026', support: 'Ranger Trucco' },
  { event: 'Crowd Control', location: 'Gainesville, FL - USA', date: '23.08.2026' },
  { event: 'Crowd Control', location: 'Gainesville, FL - USA', date: '28.08.2026', support: 'Slugg' },
  { event: 'Cantina Añejo', location: 'Gainesville, FL - USA', date: '10.09.2026', support: 'Sem Jacobs' },
  { event: 'Umbra Records', location: 'Jacksonville, FL - USA', date: '19.09.2026', support: 'Dan Molinari' },
]

export default function SetSchedulePage() {
  return <ScheduleView schedule={schedule} artistName="The Sound Of Muzik" backHref="/talent/the-sound-of-musik" />
}
