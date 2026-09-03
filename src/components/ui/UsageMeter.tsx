interface UsageMeterProps {
  value: number
  max: number
  label: string
  displayValue: string
  color: string
  trackColor?: string
}

const RADIUS = 30
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function UsageMeter({
  value,
  max,
  label,
  displayValue,
  color,
  trackColor = '#F1F1F4',
}: UsageMeterProps) {
  const ratio = Math.min(Math.max(value / max, 0), 1)
  const offset = CIRCUMFERENCE * (1 - ratio)

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-20 w-20">
        <svg viewBox="0 0 72 72" className="h-20 w-20 -rotate-90">
          <circle cx="36" cy="36" r={RADIUS} fill="none" stroke={trackColor} strokeWidth="6" />
          <circle
            cx="36"
            cy="36"
            r={RADIUS}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="transition-[stroke-dashoffset] duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-900">
          {displayValue}
        </div>
      </div>
      <span className="text-center text-xs leading-tight text-gray-500">{label}</span>
    </div>
  )
}
