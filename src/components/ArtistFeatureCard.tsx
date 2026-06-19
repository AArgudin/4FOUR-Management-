import Image from 'next/image'
import Link from 'next/link'

interface Props {
  name: string
  role: string
  slug: string
  artistImage: string
  logoImage: string
  compact?: boolean
}

export default function ArtistFeatureCard({ name, role, slug, artistImage, logoImage, compact }: Props) {
  return (
    <Link href={`/talent/${slug}`} className="group flex flex-col h-full border border-border hover:border-white transition-colors duration-300">
      <div className={`flex flex-1 ${compact ? 'min-h-[120px]' : 'min-h-[280px]'}`}>

        {/* Left 1/3 — Artist photo */}
        <div className="relative w-1/3 overflow-hidden">
          <Image
            src={artistImage}
            alt={name}
            fill
            className="object-cover grayscale group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
        </div>

        {/* Right 2/3 — Artist logo */}
        <div className="relative w-2/3 bg-surface border-l border-border overflow-hidden">
          <Image
            src={logoImage}
            alt={`${name} logo`}
            fill
            className="object-cover"
          />
        </div>

      </div>

      {/* Name + role bar */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-border min-h-[72px]">
        <div>
          <p className="font-display text-xl tracking-widest">{name.toUpperCase()}</p>
          <p className="text-muted text-xs tracking-widest mt-0.5">{role.toUpperCase()}</p>
        </div>
        <span className="text-muted group-hover:text-white transition-colors text-lg">→</span>
      </div>
    </Link>
  )
}
