import Icon from '../icons/Icon'

interface VisitCardProps {
  visitName: string
  startDate: string
  completedCount: number
  location: string
  active?: boolean
}

export default function VisitCard({ visitName, startDate, completedCount, location, active = true }: VisitCardProps) {
  return (
    <div className="rounded-xl bg-blue-600 p-4 text-white">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">{visitName}</p>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            active ? 'bg-emerald-400/25 text-emerald-100' : 'bg-white/20 text-white'
          }`}
        >
          {active ? 'Active' : 'Inactive'}
        </span>
      </div>
      <p className="mt-1 text-sm text-white/70">Started {startDate}</p>

      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
          <span className="flex items-center gap-2 text-sm font-medium">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l4 4 10-10" />
              </svg>
            </span>
            Completed
          </span>
          <span className="text-sm font-semibold text-emerald-300">{completedCount}</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2.5 text-sm">
          <Icon name="mapPin" className="h-4 w-4 flex-shrink-0" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  )
}
