import { NextResponse } from 'next/server'

export async function POST() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('4four_role')
  response.cookies.delete('4four_user')
  return response
}
