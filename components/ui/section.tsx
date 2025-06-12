import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'muted' | 'secondary'
  id?: string
}

const sectionVariants = {
  default: 'bg-background text-foreground',
  muted: 'bg-muted text-muted-foreground',
  secondary: 'bg-secondary text-secondary-foreground'
}

export function Section({ 
  children, 
  className, 
  variant = 'default',
  id 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        'section',
        sectionVariants[variant],
        className
      )}
    >
      {children}
    </section>
  )
}