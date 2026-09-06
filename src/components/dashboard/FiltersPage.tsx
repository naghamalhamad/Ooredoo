import { useState } from 'react'
import Icon from '../icons/Icon'
import type { DashboardFilters } from './visitsData'

interface FiltersPageProps {
  initialFilters: DashboardFilters
  onBack?: () => void
  onApply?: (filters: DashboardFilters) => void
}

const regionOptions = ['All Regions', 'Masqut', 'Dhofar', 'Al Batinah']
const wilayaOptions = ['All Wilayas', 'Bawshar', 'Seeb', 'Muttrah']

function DateField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-gray-400">{label}</span>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-[4px] border border-gray-200 px-3 py-2.5 text-sm font-semibold text-gray-900 focus:border-rose-400 focus:outline-none"
        />
        <Icon name="calendar" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>
    </label>
  )
}

function SelectField({
  placeholder,
  value,
  options,
  onChange,
}: {
  placeholder: string
  value: string
  options: string[]
  onChange: (v: string) => void
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-[4px] border border-gray-200 bg-transparent px-3 py-2.5 text-sm font-semibold text-gray-900 focus:border-rose-400 focus:outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Icon
        name="chevronRight"
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-gray-400"
      />
    </div>
  )
}

export default function FiltersPage({ initialFilters, onBack, onApply }: FiltersPageProps) {
  const [dateFrom, setDateFrom] = useState(initialFilters.dateFrom)
  const [dateTo, setDateTo] = useState(initialFilters.dateTo)
  const [region, setRegion] = useState(initialFilters.region)
  const [wilaya, setWilaya] = useState(initialFilters.wilaya)

  const handleReset = () => {
    setDateFrom('')
    setDateTo('')
    setRegion('')
    setWilaya('')
  }

  const handleApply = () => {
    onApply?.({ dateFrom, dateTo, region, wilaya })
  }

  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Filters</h1>
        <span className="h-5 w-5" />
      </div>

      <div className="flex-1 px-4 py-4">
        <p className="mb-3 text-sm font-semibold text-gray-900">Date range</p>
        <div className="flex flex-col gap-3">
          <DateField label="Date from" value={dateFrom} onChange={setDateFrom} />
          <DateField label="Date to" value={dateTo} onChange={setDateTo} />
        </div>

        <div className="mt-3 flex flex-col gap-3">
          <SelectField placeholder="Select Region" value={region} options={regionOptions} onChange={setRegion} />
          <SelectField placeholder="Select Wilaya" value={wilaya} options={wilayaOptions} onChange={setWilaya} />
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        <button
          type="button"
          onClick={handleApply}
          className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
        >
          Apply Filters
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="w-full rounded-full border border-rose-600 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 active:bg-rose-100 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
