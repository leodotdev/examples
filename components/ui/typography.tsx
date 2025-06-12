import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn(
      'text-4xl font-bold tracking-tight text-foreground lg:text-5xl',
      className
    )}>
      {children}
    </h1>
  )
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn(
      'text-3xl font-semibold tracking-tight text-foreground lg:text-4xl',
      className
    )}>
      {children}
    </h2>
  )
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn(
      'text-2xl font-semibold tracking-tight text-foreground lg:text-3xl',
      className
    )}>
      {children}
    </h3>
  )
}

export function P({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      'text-base leading-7 text-muted-foreground',
      className
    )}>
      {children}
    </p>
  )
}

export function Lead({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      'text-xl text-muted-foreground',
      className
    )}>
      {children}
    </p>
  )
}

export function Small({ children, className }: TypographyProps) {
  return (
    <small className={cn(
      'text-sm font-medium leading-none text-muted-foreground',
      className
    )}>
      {children}
    </small>
  )
}