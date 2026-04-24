import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { TeamMember } from '@/types'

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex items-center gap-4 px-8 py-2">
      <div className="relative w-20 h-20 rounded-full overflow-hidden bg-surface-2 border border-border flex-shrink-0">
        {member.photo ? (
          <Image
            src={urlFor(member.photo).width(160).height(160).url()}
            alt={member.name}
            fill
            className="object-cover grayscale"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted text-xs">NO IMAGE</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="font-display text-lg tracking-widest text-white">{member.name.toUpperCase()}</h3>
        <p className="text-muted text-xs tracking-widest mt-0.5">{member.title?.toUpperCase()}</p>
        {member.instagramUrl && (
          <a
            href={member.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-muted hover:text-white transition-colors"
            aria-label={`${member.name} Instagram`}
          >
            <InstagramIcon />
          </a>
        )}
      </div>
    </div>
  )
}
