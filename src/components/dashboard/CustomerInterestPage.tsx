import { useState } from 'react'
import Icon from '../icons/Icon'
import { customerInterestOptions, type CustomerInterestOption } from './visitsData'

interface CustomerInterestPageProps {
  onBack?: () => void
  onClose?: () => void
  onSubmit?: (option: CustomerInterestOption) => void
}

export default function CustomerInterestPage({ onBack, onClose, onSubmit }: CustomerInterestPageProps) {
  const [selected, setSelected] = useState<CustomerInterestOption>(customerInterestOptions[0])

  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Customer Interest</h1>
        <button type="button" onClick={onClose} aria-label="Close" className="text-gray-900">
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 px-4 py-6">
        <div className="mb-6 flex items-center gap-2 rounded-[4px] bg-emerald-50 px-3 py-2.5">
          <Icon name="lockOpen" className="h-4 w-4 flex-shrink-0 text-emerald-600" />
          <span className="text-sm font-medium text-emerald-600">Door Open</span>
        </div>

        <p className="mb-3 text-sm font-semibold text-gray-900">What is the customer interest?</p>
        <div className="flex flex-col gap-3">
          {customerInterestOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(option)}
              aria-pressed={selected === option}
              className={`flex items-center justify-between rounded-[4px] px-4 py-3 text-left text-sm font-semibold transition-colors ${
                selected === option
                  ? 'bg-rose-50 text-rose-600'
                  : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
              }`}
            >
              {option}
              <span
                className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                  selected === option ? 'bg-rose-600' : 'bg-gray-300'
                }`}
              >
                {selected === option && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        <button
          type="button"
          onClick={() => onSubmit?.(selected)}
          className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
