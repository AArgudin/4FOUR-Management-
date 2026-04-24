import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { urlFor } from '@/lib/sanity'
import type { TeamMember } from '@/types'

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-40 h-40 rounded-full overflow-hidden bg-surface-2 mb-4 border border-border">
        {member.photo ? (
          <Image
            src={urlFor(member.photo).width(320).height(320).url()}
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
      <h3 className="font-display text-xl tracking-widest">{member.name.toUpperCase()}</h3>
      <p className="text-muted text-xs tracking-widest mt-1">{member.title?.toUpperCase()}</p>
      {member.instagramUrl && (
        <a
          href={member.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-muted hover:text-white transition-colors"
          aria-label={`${member.name} Instagram`}
        >
          <Instagram size={16} />
        </a>
      )}
    </div>
  )
}
