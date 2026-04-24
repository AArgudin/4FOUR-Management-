import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()
  const adminPass = process.env.ADMIN_PASSWORD
  const artistPass = process.env.ARTIST_PASSWORD

  let role: string | null = null
  if (password === adminPass) role = 'admin'
  else if (password === artistPass) role = 'artist'

  if (!role) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const response = NextResponse.json({ success: true, role })
  response.cookies.set('4four_role', role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  response.cookies.set('4four_user', username, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  return response
}
