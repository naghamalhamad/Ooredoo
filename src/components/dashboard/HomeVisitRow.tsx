import Icon from '../icons/Icon'
import type { HomeVisit, HomeVisitStatus } from './visitsData'

const softStatusStyles: Partial<Record<HomeVisitStatus, string>> = {
  'Door Closed': 'bg-rose-50 text-rose-600',
  'Interested Later': 'bg-amber-50 text-amber-600',
  'Activation Completed': 'bg-emerald-50 text-emerald-600',
  'Not interested at all': 'bg-gray-100 text-gray-500',
}

const solidStatuses: HomeVisitStatus[] = ['Not Interested', 'Activation Cancelled']

export function StatusBadge({ status }: { status: HomeVisitStatus }) {
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

export default function HomeVisitRow({ status, title, datetime, hotLead }: HomeVisit) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-[4px] bg-white px-4 py-3 text-left hover:bg-gray-50 transition-colors"
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
