'use client'

import { useEffect, useState } from 'react'

export function DraftModeIndicator() {
  const [isDraft, setIsDraft] = useState(false)
  
  useEffect(() => {
    // Check if we're in an iframe (Sanity Studio)
    const inIframe = window.self !== window.top
    setIsDraft(inIframe)
  }, [])
  
  if (!isDraft) return null
  
  return (
    <div className="fixed bottom-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm z-50">
      Draft Mode Active
    </div>
  )
}