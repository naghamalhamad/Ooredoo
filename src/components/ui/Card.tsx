import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <section className={`rounded-[4px] bg-white p-4 shadow-sm ${className}`}>{children}</section>
  )
}
