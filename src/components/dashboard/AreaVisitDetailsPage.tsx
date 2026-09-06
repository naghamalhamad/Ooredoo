import { useState } from 'react'
import Icon from '../icons/Icon'
import type { AreaVisit } from './visitsData'
import { isoToShortDate, shortDateToIso } from './dateUtils'

interface AreaVisitDetailsPageProps {
  visit: AreaVisit
  onBack?: () => void
  onClose?: () => void
  onStartAreaVisit?: () => void
}

function GrayField({ label, value, disabled }: { label: string; value: string; disabled?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-gray-400">{label}</span>
      <input
        type="text"
        defaultValue={value}
        disabled={disabled}
        className="w-full rounded-[4px] bg-gray-200 px-3 py-2.5 text-sm font-semibold text-gray-900 disabled:cursor-not-allowed"
      />
    </label>
  )
}

function GraySelectField({ label, value, disabled }: { label: string; value: string; disabled?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-gray-400">{label}</span>
      <div className="relative">
        <select
          defaultValue={value}
          disabled={disabled}
          className="w-full appearance-none rounded-[4px] bg-gray-200 px-3 py-2.5 text-sm font-semibold text-gray-900 disabled:cursor-not-allowed"
        >
          <option value={value}>{value}</option>
        </select>
        <Icon
          name="chevronRight"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-gray-500"
        />
      </div>
    </label>
  )
}

function GrayDateField({ label, value, disabled }: { label: string; value: string; disabled?: boolean }) {
  const [current, setCurrent] = useState(value)

  return (
    <label className="block">
      <span className="mb-1 block text-xs text-gray-400">{label}</span>
      <div className="relative">
        <input
          type="text"
          value={current}
          readOnly
          disabled={disabled}
          className="w-full rounded-[4px] bg-gray-200 px-3 py-2.5 text-sm font-semibold text-gray-900 disabled:cursor-not-allowed"
        />
        {!disabled && (
          <input
            type="date"
            value={shortDateToIso(current)}
            onChange={(e) => setCurrent(isoToShortDate(e.target.value))}
            aria-label={label}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        )}
        <Icon name="calendar" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      </div>
    </label>
  )
}

function LocationRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-sm font-semibold text-gray-900">{label}</span>
      <span className="text-sm text-gray-400">{value}</span>
    </div>
  )
}

export default function AreaVisitDetailsPage({ visit, onBack, onClose, onStartAreaVisit }: AreaVisitDetailsPageProps) {
  const disabled = visit.status !== 'Scheduled'
  const showCompletedBadge = visit.status !== 'Scheduled' && visit.status !== 'Canceled'
  const showStartButtons = visit.status === 'Active'

  return (
    <div className="flex flex-1 flex-col overflow-y-auto bg-gray-100">
      <div className="flex items-center justify-between px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Area Visit Details</h1>
        <button type="button" onClick={onClose} aria-label="Close" className="text-gray-900">
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 px-4 py-4">
        <span className="inline-block rounded-full border border-rose-600 px-4 py-1 text-sm font-semibold text-rose-600">
          {visit.status}
        </span>

        {showCompletedBadge && (
          <div className="mt-4 flex items-center gap-2 rounded-[4px] bg-emerald-50 px-3 py-2.5">
            <Icon name="checkCircle" className="h-4 w-4 flex-shrink-0 text-emerald-600" />
            <span className="flex-1 text-sm font-medium text-emerald-600">Completed Home Visits</span>
            <span className="text-sm font-semibold text-emerald-600">{visit.completedHomeVisits}</span>
          </div>
        )}

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-900">Visit details</p>
        <div className="flex flex-col gap-3">
          <GrayField label="Visit title" value={visit.title} disabled={disabled} />
          <GrayField label="visit number" value={visit.visitNumber} disabled={disabled} />
          {visit.status === 'Scheduled' && (
            <GraySelectField label="Channel type" value={visit.channelType} disabled={disabled} />
          )}
          <GraySelectField label="Survey Type" value={visit.surveyType} disabled={disabled} />
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-900">Visit planning</p>
        <div className="flex flex-col gap-3">
          <GrayDateField label="Date from" value={visit.dateFrom} disabled={disabled} />
          <GrayDateField label="Date to" value={visit.dateTo} disabled={disabled} />
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-900">Location Details</p>
        <div className="divide-y divide-gray-100 rounded-[4px] bg-white">
          <LocationRow label="Region" value={visit.region} />
          <LocationRow label="Wilaya" value={visit.wilaya} />
          <LocationRow label="locality" value={visit.locality} />
        </div>
      </div>

      {showStartButtons && (
        <div className="flex flex-col gap-3 px-4 pb-4">
          <button
            type="button"
            onClick={onStartAreaVisit}
            className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
          >
            Start Area Visit
          </button>
          <button
            type="button"
            onClick={onStartAreaVisit}
            className="w-full rounded-full border border-rose-600 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 active:bg-rose-100 transition-colors"
          >
            Start Area Visit & Add Home Visit
          </button>
        </div>
      )}
    </div>
  )
}
