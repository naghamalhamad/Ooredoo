import { useState } from 'react'
import Icon from '../icons/Icon'

interface DoorStatusPageProps {
  onBack?: () => void
  onClose?: () => void
  onDoorClosed?: () => void
  onDoorOpen?: () => void
}

type DoorStatus = 'closed' | 'open'

export default function DoorStatusPage({ onBack, onClose, onDoorClosed, onDoorOpen }: DoorStatusPageProps) {
  const [status, setStatus] = useState<DoorStatus>('closed')

  const handleContinue = () => {
    if (status === 'closed') {
      onDoorClosed?.()
    } else {
      onDoorOpen?.()
    }
  }

  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Door Status</h1>
        <button type="button" onClick={onClose} aria-label="Close" className="text-gray-900">
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 px-4 py-6">
        <p className="mb-1 text-sm font-semibold text-gray-900">Is the door open?</p>
        <p className="mb-6 text-xs text-gray-400">Select the current status of the door before continuing.</p>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setStatus('closed')}
            aria-pressed={status === 'closed'}
            className={`flex flex-col items-center gap-3 rounded-[4px] border px-4 py-6 transition-colors ${
              status === 'closed'
                ? 'border-rose-600 bg-rose-50 text-rose-600'
                : 'border-gray-200 bg-white text-gray-400 hover:bg-gray-50'
            }`}
          >
            <Icon name="lockClosed" className="h-8 w-8" />
            <span className="text-sm font-semibold">Door Closed</span>
          </button>

          <button
            type="button"
            onClick={() => setStatus('open')}
            aria-pressed={status === 'open'}
            className={`flex flex-col items-center gap-3 rounded-[4px] border px-4 py-6 transition-colors ${
              status === 'open'
                ? 'border-rose-600 bg-rose-50 text-rose-600'
                : 'border-gray-200 bg-white text-gray-400 hover:bg-gray-50'
            }`}
          >
            <Icon name="lockOpen" className="h-8 w-8" />
            <span className="text-sm font-semibold">Door Open</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
