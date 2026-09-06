import Icon from '../icons/Icon'

type VisitStatus = 'Scheduled' | 'Active' | 'Completed' | 'Canceled'

interface VisitListPageProps {
  onBack?: () => void
  onCreateNew?: () => void
}

const visits: { name: string; status: VisitStatus }[] = [
  { name: 'Visit name', status: 'Scheduled' },
  { name: 'Visit name', status: 'Active' },
  { name: 'Visit name', status: 'Completed' },
  { name: 'Visit name', status: 'Canceled' },
]

const statusStyles: Record<VisitStatus, string> = {
  Scheduled: 'text-amber-500',
  Active: 'text-[#0047BB]',
  Completed: 'text-emerald-500',
  Canceled: 'text-gray-400',
}

function VisitRow({ name, status }: { name: string; status: VisitStatus }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-4 shadow-sm">
      <span className="text-sm font-semibold text-gray-900">{name}</span>
      <div className="flex items-center gap-3">
        <span className="h-8 w-px bg-gray-100" />
        <div className="text-right">
          <p className="text-xs text-gray-400">Visit status</p>
          <p className={`text-sm font-semibold ${statusStyles[status]}`}>{status}</p>
        </div>
      </div>
    </div>
  )
}

export default function VisitListPage({ onBack, onCreateNew }: VisitListPageProps) {
  return (
    <div className="relative flex flex-1 flex-col bg-gray-100">
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Area Visits</h1>
        <span className="h-5 w-5" />
      </div>

      <div className="flex items-center gap-2 px-4 py-3">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-3 pr-9 text-sm text-gray-700 placeholder:text-gray-400 focus:border-rose-400 focus:outline-none"
          />
          <Icon name="search" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
        <button
          type="button"
          aria-label="Filter"
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
        >
          <Icon name="filter" className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 pb-4">
        {visits.map((visit, i) => (
          <VisitRow key={i} name={visit.name} status={visit.status} />
        ))}
      </div>

      <button
        type="button"
        onClick={onCreateNew}
        aria-label="Create new visit"
        className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-rose-600 text-white shadow-lg hover:bg-rose-700 active:bg-rose-800 transition-colors"
      >
        <Icon name="plus" className="h-5 w-5" />
      </button>
    </div>
  )
}
