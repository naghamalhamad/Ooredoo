import { useState } from 'react'
import Icon from '../icons/Icon'
import DatePickerModal from './DatePickerModal'
import { formatShortDate, parseShortDate } from './dateUtils'

interface CustomerDetailsPageProps {
  onBack?: () => void
  onSubmit?: (customerName: string) => void
}

function TextField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-gray-400">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-[8px] bg-gray-100 px-3 py-2.5 text-sm font-semibold text-gray-900 placeholder:font-semibold placeholder:text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
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
          className="w-full appearance-none rounded-[8px] bg-gray-100 px-3 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="block">
      <span className="mb-1 block text-xs text-gray-400">{label}</span>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full rounded-[8px] bg-gray-100 px-3 py-2.5 text-left text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          {value}
        </button>
        <Icon name="calendar" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>
      {isOpen && (
        <DatePickerModal
          initialDate={parseShortDate(value)}
          onCancel={() => setIsOpen(false)}
          onConfirm={(date) => {
            setValue(formatShortDate(date))
            setIsOpen(false)
          }}
        />
      )}
    </div>
  )
}

export default function CustomerDetailsPage({ onBack, onSubmit }: CustomerDetailsPageProps) {
  const [customerName, setCustomerName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [street, setStreet] = useState('')
  const [buildingNumber, setBuildingNumber] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [landmark, setLandmark] = useState('')

  return (
    <div className="flex flex-1 flex-col overflow-y-auto bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Customer Details</h1>
        <span className="h-5 w-5" />
      </div>

      <div className="flex-1 px-4 py-4">
        <p className="mb-3 text-sm font-semibold text-gray-900">Customer details</p>
        <div className="flex flex-col gap-3">
          <TextField label="Customer Name" placeholder="Customer Name" value={customerName} onChange={setCustomerName} />
          <TextField label="Phone Number" placeholder="Phone Number" value={phoneNumber} onChange={setPhoneNumber} />
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-900">Visit details</p>
        <div className="flex flex-col gap-3">
          <DateField label="Visit date" initialValue="14-1-2024" />
          <SelectField label="Survey type" placeholder="Survey type" />
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-900">Location details</p>
        <div className="flex flex-col gap-3">
          <SelectField label="Region" placeholder="Region" />
          <SelectField label="Wilaya" placeholder="Wilaya" />
          <SelectField label="Locality" placeholder="Locality" />
          <TextField label="Street" placeholder="Street Name" value={street} onChange={setStreet} />
          <TextField label="Building Number" placeholder="Building Number" value={buildingNumber} onChange={setBuildingNumber} />
          <TextField label="House/flat number" placeholder="House/flat number" value={houseNumber} onChange={setHouseNumber} />
          <TextField label="Landmark" placeholder="Landmark" value={landmark} onChange={setLandmark} />
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-900">Reschedule Date</p>
        <DateField label="Date" initialValue="14-1-2024" />
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        <button
          type="button"
          onClick={() => onSubmit?.(customerName.trim())}
          className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
