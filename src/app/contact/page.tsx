'use client'

import { useState } from 'react'
import { Instagram, Mail } from 'lucide-react'

function SoundCloudIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.175 12.225c-.015.108-.024.217-.024.33 0 1.333 1.075 2.42 2.404 2.42.15 0 .295-.015.438-.042H20.32c.95-.06 1.695-.848 1.695-1.818 0-.852-.578-1.566-1.37-1.765.043-.184.065-.376.065-.572 0-1.433-1.155-2.595-2.58-2.595-.195 0-.385.022-.568.063C17.19 6.9 15.773 5.7 14.07 5.7c-1.643 0-3.032 1.15-3.43 2.7-.27-.12-.57-.19-.886-.19-1.293 0-2.344 1.056-2.344 2.358 0 .055.003.11.007.163C6.625 10.646 5.9 11.36 5.9 12.246c0 .668.364 1.248.9 1.556L5.9 12.22l.003.004a2.16 2.16 0 0 1-.21-.958c0-1.2.97-2.18 2.162-2.18.136 0 .27.013.4.038.028-.04.058-.077.09-.113C8.716 7.92 10.19 6.9 11.9 6.9c1.59 0 2.972.914 3.654 2.245.18-.05.37-.077.565-.077 1.065 0 1.928.868 1.928 1.938 0 .21-.034.413-.095.603.476.21.807.692.807 1.25 0 .755-.61 1.365-1.363 1.365H3.67c-.012 0-.024 0-.036-.002a1.43 1.43 0 0 1-.45-.077A1.442 1.442 0 0 1 2.2 12.78a1.44 1.44 0 0 1-.188-.383 1.434 1.434 0 0 1-.054-.358c0-.395.16-.753.418-1.014l-.201.2z"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/mwvykark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: 'General', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-black border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Reach Out</p>
          <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] tracking-widest leading-none">
            LET&apos;S CONNECT
          </h1>
        </div>
      </section>

      {/* Contact Body */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <p className="section-label">Direct Contact</p>
            <h2 className="font-display text-3xl tracking-widest mb-4">FOR GENERAL INFORMATION & COLLABS</h2>
            <p className="text-muted text-sm tracking-wider mb-10">
              Reach out directly via email or fill out the form and we&apos;ll get back to you.
            </p>

            {/* Email Links */}
            <div className="flex flex-col gap-4 mb-16">
              <a
                href="mailto:management@4fourmgmt.com"
                className="flex items-center gap-4 border border-border p-5 group hover:border-white transition-colors"
              >
                <Mail size={18} className="text-muted group-hover:text-white transition-colors" />
                <div>
                  <p className="text-xs tracking-widest text-muted mb-1">GENERAL</p>
                  <p className="text-white text-sm tracking-wide group-hover:text-muted-2 transition-colors">
                    management@4fourmgmt.com
                  </p>
                </div>
              </a>
              <a
                href="mailto:AJ@4fourmgmt.com"
                className="flex items-center gap-4 border border-border p-5 group hover:border-white transition-colors"
              >
                <Mail size={18} className="text-muted group-hover:text-white transition-colors" />
                <div>
                  <p className="text-xs tracking-widest text-muted mb-1">DIRECT</p>
                  <p className="text-white text-sm tracking-wide group-hover:text-muted-2 transition-colors">
                    AJ@4fourmgmt.com
                  </p>
                </div>
              </a>
            </div>

            {/* Social */}
            <p className="section-label">Follow Us</p>
            <div className="flex gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" aria-label="SoundCloud">
                <SoundCloudIcon />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" aria-label="YouTube">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <p className="section-label">Send a Message</p>
            <h2 className="font-display text-3xl tracking-widest mb-8">GET IN TOUCH</h2>

            {status === 'success' ? (
              <div className="border border-border p-10 text-center">
                <p className="font-display text-3xl tracking-widest mb-3">MESSAGE SENT</p>
                <p className="text-muted text-sm tracking-wider">
                  Thank you for reaching out. We&apos;ll be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 btn-secondary"
                >
                  Send Another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="text-xs tracking-widest text-muted block mb-2">NAME *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-surface border border-border px-5 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs tracking-widest text-muted block mb-2">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-surface border border-border px-5 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="text-xs tracking-widest text-muted block mb-2">SUBJECT</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border px-5 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    <option value="General">General Inquiry</option>
                    <option value="Collab">Collaboration</option>
                    <option value="Booking">Booking</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs tracking-widest text-muted block mb-2">MESSAGE *</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about yourself and what you're looking for..."
                    rows={6}
                    className="w-full bg-surface border border-border px-5 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="text-xs tracking-widest text-red-400">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message →'}
                </button>

                <p className="text-muted text-xs tracking-wider text-center">
                  Or email us directly at{' '}
                  <a href="mailto:management@4fourmgmt.com" className="text-white hover:text-muted transition-colors">
                    management@4fourmgmt.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
