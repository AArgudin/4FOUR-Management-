'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        router.push('/admin/dashboard')
      } else {
        setError('Invalid credentials. Please try again.')
      }
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl tracking-widest mb-2">4FOUR MGMT</h1>
          <p className="text-muted text-xs tracking-[0.4em]">ADMIN ACCESS</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs tracking-widest text-muted block mb-2">USERNAME</label>
            <input
              type="text"
              name="username"
              required
              value={form.username}
              onChange={e => setForm(p => ({ ...p, username: e.target.value }))}
              placeholder="Enter username"
              autoComplete="username"
              className="w-full bg-surface border border-border px-5 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label className="text-xs tracking-widest text-muted block mb-2">PASSWORD</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
              placeholder="Enter password"
              autoComplete="current-password"
              className="w-full bg-surface border border-border px-5 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs tracking-wider text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : 'Sign In →'}
          </button>
        </form>

        <p className="text-center mt-8">
          <a href="/" className="text-muted text-xs tracking-widest hover:text-white transition-colors">
            ← Back to Site
          </a>
        </p>
      </div>
    </div>
  )
}
