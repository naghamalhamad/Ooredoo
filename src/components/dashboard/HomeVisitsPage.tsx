import Icon from '../icons/Icon'
import type { HomeVisit, HomeVisitStatus } from './visitsData'

interface HomeVisitsPageProps {
  homeVisits: HomeVisit[]
  onBack?: () => void
  onStartHomeVisit?: () => void
}

const softStatusStyles: Partial<Record<HomeVisitStatus, string>> = {
  'Door Closed': 'bg-rose-50 text-rose-600',
  'Interested Later': 'bg-amber-50 text-amber-600',
  'Activation Completed': 'bg-emerald-50 text-emerald-600',
  'Not interested at all': 'bg-gray-100 text-gray-500',
}

const solidStatuses: HomeVisitStatus[] = ['Not Interested', 'Activation Cancelled']

function StatusBadge({ status }: { status: HomeVisitStatus }) {
  if (solidStatuses.includes(status)) {
    return (
      <span className="inline-block rounded-full bg-rose-600 px-3 py-1 text-xs font-medium text-white">{status}</span>
    )
  }
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${softStatusStyles[status]}`}>
      {status}
    </span>
  )
}

function HomeVisitRow({ status, title, datetime, hotLead }: HomeVisit) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-left shadow-sm hover:bg-gray-50 transition-colors"
    >
      <div>
        <StatusBadge status={status} />
        <p className="mt-2 text-sm font-semibold text-gray-900">{title}</p>
        <p className="mt-0.5 text-xs text-gray-400">{datetime}</p>
      </div>
      <div className="flex items-center gap-2">
        {hotLead && (
          <span className="flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
            <Icon name="flame" className="h-3 w-3" />
            Hot Lead
          </span>
        )}
        <Icon name="chevronRight" className="h-4 w-4 flex-shrink-0 text-rose-600" />
      </div>
    </button>
  )
}

function SearchFilterBar() {
  return (
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
  )
}

export default function HomeVisitsPage({ homeVisits, onBack, onStartHomeVisit }: HomeVisitsPageProps) {
  const isEmpty = homeVisits.length === 0

  return (
    <div className="relative flex flex-1 flex-col bg-gray-100">
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Home Visits</h1>
        <span className="h-5 w-5" />
      </div>

      <SearchFilterBar />

      {isEmpty ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-gray-400 shadow-sm">
            <Icon name="info" className="h-5 w-5" />
          </span>
          <p className="text-sm font-semibold text-gray-900">No Home Visit</p>
          <p className="text-xs text-gray-400">Start a new visit to begin.</p>
        </div>
      ) : (
        <div className="flex flex-1 flex-col gap-3 px-4 pb-4">
          {homeVisits.map((visit, i) => (
            <HomeVisitRow key={i} {...visit} />
          ))}
        </div>
      )}

      {isEmpty ? (
        <div className="px-4 pb-4">
          <button
            type="button"
            onClick={onStartHomeVisit}
            className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
          >
            Start Home Visit
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={onStartHomeVisit}
          aria-label="Add home visit"
          className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-rose-600 text-white shadow-lg hover:bg-rose-700 active:bg-rose-800 transition-colors"
        >
          <Icon name="plus" className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
