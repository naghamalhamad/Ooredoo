import Icon from '../icons/Icon'
import type { HomeVisit } from './visitsData'
import HomeVisitRow from './HomeVisitRow'

interface HomeVisitsPageProps {
  homeVisits: HomeVisit[]
  onBack?: () => void
  onStartHomeVisit?: () => void
}

function SearchFilterBar() {
  return (
    <div className="flex items-stretch px-4 py-3">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search"
          className="h-11 w-full rounded-[8px] bg-gray-100 pl-3 pr-9 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
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
      <div className="flex items-center justify-between px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Home Visits</h1>
        <span className="h-5 w-5" />
      </div>

      <SearchFilterBar />

      {isEmpty ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-white text-gray-400">
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
