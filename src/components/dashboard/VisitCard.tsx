import Icon from '../icons/Icon'

interface VisitCardProps {
  title: string
  status?: string
  startDay: string
  startMonth: string
  daysRemaining: number
  endDate: string
  location: string
}

export default function VisitCard({
  title,
  status = 'Scheduled',
  startDay,
  startMonth,
  daysRemaining,
  endDate,
  location,
}: VisitCardProps) {
  return (
    <div className="rounded-[4px] bg-[#0047BB] p-4 text-white">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">{title}</p>
        <span className="rounded-full bg-amber-400/25 px-3 py-1 text-xs font-medium text-amber-200">
          {status}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-[4px] bg-white/10 px-3 py-2.5">
        <div className="flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center rounded-[4px] bg-white/15">
          <span className="text-sm font-bold leading-none">{startDay}</span>
          <span className="text-[10px] leading-tight text-white/70">{startMonth}</span>
        </div>
        <div className="flex-1">
          <p className="text-xs text-white/70">Starts in</p>
          <p className="text-sm font-semibold text-amber-300">{daysRemaining} days</p>
        </div>
        <p className="text-xs text-white/60">Ends {endDate}</p>
      </div>

      <div className="mt-2 flex items-center gap-2 rounded-[4px] bg-white/10 px-3 py-2.5 text-sm">
        <Icon name="mapPin" className="h-4 w-4 flex-shrink-0" />
        <span>{location}</span>
      </div>
    </div>
  )
}
