import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <section className={`rounded-[8px] bg-white p-4 ${className}`}>{children}</section>
  )
}
