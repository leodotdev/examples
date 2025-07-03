import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  await draftMode().enable()
  return NextResponse.json({ enabled: true })
}

export async function DELETE(request: NextRequest) {
  await draftMode().disable()
  return NextResponse.json({ enabled: false })
}