'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin')
  }

  return (
    <button
      onClick={handleLogout}
      className="text-xs tracking-widest text-muted hover:text-white border border-border hover:border-white px-4 py-2 transition-all"
    >
      Sign Out
    </button>
  )
}
