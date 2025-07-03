import { draftMode } from 'next/headers'
import { NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const slug = searchParams.get('slug')
  
  // Enable draft mode
  await draftMode().enable()
  
  // Redirect to the path
  redirect(slug || '/')
}