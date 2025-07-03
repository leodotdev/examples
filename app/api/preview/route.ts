import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const secret = searchParams.get('secret')
  
  // Check the secret and enable draft mode
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }
  
  const draft = await draftMode()
  await draft.enable()
  
  // Redirect to the path from the fetched post
  // We'll redirect to the home page by default
  redirect(slug || '/')
}