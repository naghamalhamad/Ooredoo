import Icon from '../icons/Icon'

interface ScheduledVisitCardProps {
  variant: 'scheduled'
  title: string
  startDay: string
  startMonth: string
  daysRemaining: number
  endDate: string
  location: string
}

interface ActiveVisitCardProps {
  variant: 'active'
  title: string
  startedDate: string
  completed: number
  location: string
}

type VisitCardProps = ScheduledVisitCardProps | ActiveVisitCardProps

export default function VisitCard(props: VisitCardProps) {
  const { title, location } = props

  return (
    <div className="rounded-[4px] bg-[#0047BB] p-4 text-white">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-bold">{title}</p>
        {props.variant === 'scheduled' ? (
          <span className="flex-shrink-0 rounded-full bg-amber-400/25 px-2.5 py-0.5 text-[11px] font-medium text-amber-200">
            Scheduled
          </span>
        ) : (
          <span className="flex-shrink-0 rounded-full bg-emerald-400/25 px-2.5 py-0.5 text-[11px] font-medium text-emerald-200">
            Active
          </span>
        )}
      </div>

      {props.variant === 'scheduled' ? (
        <div className="mt-3 flex items-center gap-3 rounded-[4px] bg-white/10 px-3 py-2.5">
          <div className="flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center rounded-[4px] bg-white/15">
            <span className="text-sm font-bold leading-none">{props.startDay}</span>
            <span className="text-[10px] leading-tight text-white/70">{props.startMonth}</span>
          </div>
          <div className="flex-1">
            <p className="text-xs text-white/70">Starts in</p>
            <p className="text-sm font-semibold text-amber-300">{props.daysRemaining} days</p>
          </div>
          <p className="text-xs text-white/60">Ends {props.endDate}</p>
        </div>
      ) : (
        <>
          <p className="mt-1 text-xs text-white/70">Started {props.startedDate}</p>
          <div className="mt-3 flex items-center gap-2 rounded-[4px] bg-white/10 px-3 py-2.5">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400/25 text-emerald-300">
              <Icon name="checkCircle" className="h-3.5 w-3.5" />
            </span>
            <span className="flex-1 text-sm text-white/90">Completed</span>
            <span className="text-sm font-semibold text-emerald-300">{props.completed}</span>
          </div>
        </>
      )}

      <div className="mt-2 flex items-center gap-2 rounded-[4px] bg-white/10 px-3 py-2.5 text-sm">
        <Icon name="mapPin" className="h-4 w-4 flex-shrink-0" />
        <span>{location}</span>
      </div>
    </div>
  )
}
