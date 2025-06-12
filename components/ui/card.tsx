import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'outline' | 'filled'
}

const cardVariants = {
  default: 'bg-background border border-border',
  outline: 'bg-transparent border-2 border-border',
  filled: 'bg-secondary border border-border'
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  return (
    <div className={cn(
      'rounded-lg p-6 shadow-sm',
      cardVariants[variant],
      className
    )}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h3 className={cn('text-xl font-semibold text-foreground', className)}>
      {children}
    </h3>
  )
}

export function CardContent({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn('text-muted-foreground', className)}>
      {children}
    </div>
  )
}