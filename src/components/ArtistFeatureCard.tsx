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
    <Link href={`/talent/${slug}`} className="group block border border-border hover:border-white transition-colors duration-300">
      <div className={`flex ${compact ? 'h-[180px]' : 'h-[420px]'}`}>

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
        <div className="relative w-2/3 bg-surface flex items-center justify-center border-l border-border overflow-hidden p-4">
          <div className="relative w-full h-full">
            <Image
              src={logoImage}
              alt={`${name} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>

      {/* Name + role bar */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-border">
        <div>
          <p className="font-display text-xl tracking-widest">{name.toUpperCase()}</p>
          <p className="text-muted text-xs tracking-widest mt-0.5">{role.toUpperCase()}</p>
        </div>
        <span className="text-muted group-hover:text-white transition-colors text-lg">→</span>
      </div>
    </Link>
  )
}
