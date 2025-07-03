import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const draft = await draftMode()
  await draft.enable()
  return NextResponse.json({ enabled: true })
}

export async function DELETE() {
  const draft = await draftMode()
  await draft.disable()
  return NextResponse.json({ enabled: false })
}