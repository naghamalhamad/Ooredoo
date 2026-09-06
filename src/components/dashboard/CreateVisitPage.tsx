import { useState } from 'react'
import Icon from '../icons/Icon'
import { isoToShortDate, shortDateToIso } from './dateUtils'

interface CreateVisitPageProps {
  onBack?: () => void
  onDiscard?: () => void
  onSubmit?: () => void
}

function TextField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-gray-400">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-[4px] border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 placeholder:font-semibold placeholder:text-gray-900 focus:border-rose-400 focus:outline-none"
      />
    </label>
  )
}

function SelectField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-gray-400">{label}</span>
      <div className="relative">
        <select
          defaultValue=""
          className="w-full appearance-none rounded-[4px] border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 focus:border-rose-400 focus:outline-none"
        >
          <option value="" disabled>
            {placeholder}
          </option>
        </select>
        <Icon
          name="chevronRight"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-gray-400"
        />
      </div>
    </label>
  )
}

function DateField({ label, initialValue }: { label: string; initialValue: string }) {
  const [value, setValue] = useState(initialValue)

  return (
    <label className="block">
      <span className="mb-1 block text-xs text-gray-400">{label}</span>
      <div className="relative">
        <input
          type="text"
          value={value}
          readOnly
          className="w-full rounded-[4px] border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 focus:border-rose-400 focus:outline-none"
        />
        <input
          type="date"
          value={shortDateToIso(value)}
          onChange={(e) => setValue(isoToShortDate(e.target.value))}
          aria-label={label}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <Icon name="calendar" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>
    </label>
  )
}

export default function CreateVisitPage({ onBack, onDiscard, onSubmit }: CreateVisitPageProps) {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Create New Visit</h1>
        <button type="button" onClick={onDiscard} aria-label="Close" className="text-gray-900">
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 px-4 py-4">
        <p className="mb-3 text-sm font-semibold text-gray-900">Visit details</p>
        <div className="flex flex-col gap-3">
          <TextField label="Visit title" placeholder="Visit title" />
          <SelectField label="Survey Title" placeholder="Survey Title" />
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-900">Visit planning (Optional)</p>
        <div className="flex flex-col gap-3">
          <DateField label="Date from" initialValue="14-1-2024" />
          <DateField label="Date to" initialValue="14-2-2024" />
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-900">Location Details (Optional)</p>
        <div className="flex flex-col gap-3">
          <SelectField label="Region" placeholder="Region" />
          <SelectField label="Wilaya" placeholder="Wilaya" />
          <SelectField label="locality" placeholder="locality" />
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        <button
          type="button"
          onClick={onSubmit}
          className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onDiscard}
          className="w-full rounded-full border border-rose-600 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 active:bg-rose-100 transition-colors"
        >
          Discard
        </button>
      </div>
    </div>
  )
}
