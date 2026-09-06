import Icon from '../icons/Icon'
import { areaVisits, type AreaVisit, type AreaVisitStatus } from './visitsData'

interface VisitListPageProps {
  onBack?: () => void
  onCreateNew?: () => void
  onSelectVisit?: (visit: AreaVisit) => void
}

const statusStyles: Record<AreaVisitStatus, string> = {
  Scheduled: 'text-amber-500',
  Active: 'text-[#0047BB]',
  Completed: 'text-emerald-500',
  Canceled: 'text-gray-400',
}

function VisitRow({ name, status, onClick }: { name: string; status: AreaVisitStatus; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative grid grid-cols-2 items-center rounded-2xl bg-white py-6 hover:bg-gray-50 transition-colors"
    >
      <div className="flex justify-center">
        <span className="text-lg font-semibold text-gray-900">{name}</span>
      </div>
      <span className="absolute left-1/2 top-1/2 h-12 w-px -translate-x-1/2 -translate-y-1/2 bg-gray-200" />
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xs text-gray-400">Visit status</p>
        <p className={`text-base font-semibold ${statusStyles[status]}`}>{status}</p>
      </div>
    </button>
  )
}

export default function VisitListPage({ onBack, onCreateNew, onSelectVisit }: VisitListPageProps) {
  return (
    <div className="relative flex flex-1 flex-col bg-gray-100">
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Area Visits</h1>
        <span className="h-5 w-5" />
      </div>

      <div className="flex items-stretch px-4 py-3">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search"
            className="h-11 w-full rounded-lg border border-gray-200 bg-gray-100 pl-3 pr-9 text-sm text-gray-700 placeholder:text-gray-400 focus:border-rose-400 focus:outline-none"
          />
          <Icon name="search" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
        <button
          type="button"
          aria-label="Filter"
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
        >
          <Icon name="filter" className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 pb-4">
        {areaVisits.map((visit, i) => (
          <VisitRow key={i} name={visit.name} status={visit.status} onClick={() => onSelectVisit?.(visit)} />
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
