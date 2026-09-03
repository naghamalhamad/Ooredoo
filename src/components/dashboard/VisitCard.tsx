import { useState } from 'react'
import Icon from '../icons/Icon'

interface VisitCardProps {
  visitName: string
  visitType: string
  startDate: string
  endDate: string
  dealerName: string
  dealerCode: string
}

export default function VisitCard({
  visitName,
  visitType,
  startDate,
  endDate,
  dealerName,
  dealerCode,
}: VisitCardProps) {
  const [active, setActive] = useState(true)

  return (
    <div className="overflow-hidden rounded-xl border border-gray-100">
      <div className="flex items-center justify-between bg-blue-900 px-4 py-3 text-white">
        <div>
          <p className="text-sm font-semibold">{visitName}</p>
          <p className="text-xs text-white/70">{visitType}</p>
        </div>
        <button
          type="button"
          onClick={() => setActive((v) => !v)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            active ? 'bg-emerald-400 text-emerald-950 hover:bg-emerald-300' : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          {active ? 'Active' : 'Inactive'}
        </button>
      </div>

      <div className="space-y-4 bg-white px-4 py-4">
        <div>
          <p className="text-xs text-gray-400">Scheduled Date</p>
          <div className="mt-1 flex items-center gap-2 text-sm font-medium text-gray-800">
            <span>{startDate}</span>
            <Icon name="chevronRight" className="h-3.5 w-3.5 text-gray-400" />
            <span>{endDate}</span>
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-400">Next Dealer to visit</p>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <Icon name="user" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-gray-800">{dealerName}</p>
              <p className="text-xs text-gray-400">{dealerCode}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-1.5 text-xs text-gray-400">Location</p>
          <button
            type="button"
            className="group relative flex h-24 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <Icon name="mapPin" className="h-5 w-5 text-gray-500" />
            <span className="absolute bottom-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow group-hover:bg-gray-50">
              View map
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <button
            type="button"
            className="w-full rounded-full border border-rose-600 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 active:bg-rose-100 transition-colors"
          >
            Show details
          </button>
          <button
            type="button"
            className="w-full rounded-full bg-rose-600 py-2 text-sm font-medium text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
          >
            Add - Hoc visit
          </button>
        </div>
      </div>
    </div>
  )
}
