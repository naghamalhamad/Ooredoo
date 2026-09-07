import { useState } from 'react'
import Icon from '../icons/Icon'

type DoorStatus = 'open' | 'closed'

interface HomeDetailsModalProps {
  onCancel?: () => void
  onDoorOpen?: () => void
  onDoorClosed?: () => void
}

export default function HomeDetailsModal({ onCancel, onDoorOpen, onDoorClosed }: HomeDetailsModalProps) {
  const [status, setStatus] = useState<DoorStatus>('closed')
  const [captured, setCaptured] = useState(false)

  const canProceed = status === 'open' || captured

  const handleNext = () => {
    if (!canProceed) return
    if (status === 'closed') {
      onDoorClosed?.()
    } else {
      onDoorOpen?.()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
      <div className="w-full max-w-xs rounded-[8px] bg-white p-5">
        <h2 className="text-base font-semibold text-gray-900">Home Details</h2>

        <p className="mb-2 mt-4 text-sm font-semibold text-gray-900">Door Status</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setStatus('open')}
            aria-pressed={status === 'open'}
            className={`flex flex-col items-center gap-2 rounded-[4px] border px-3 py-4 transition-colors ${
              status === 'open'
                ? 'border-rose-600 bg-rose-50 text-rose-600'
                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon name="lockOpen" className="h-6 w-6" />
            <span className="text-sm font-semibold">Open</span>
          </button>
          <button
            type="button"
            onClick={() => setStatus('closed')}
            aria-pressed={status === 'closed'}
            className={`flex flex-col items-center gap-2 rounded-[4px] border px-3 py-4 transition-colors ${
              status === 'closed'
                ? 'border-rose-600 bg-rose-50 text-rose-600'
                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon name="lockClosed" className="h-6 w-6" />
            <span className="text-sm font-semibold">Closed</span>
          </button>
        </div>

        <p className="mb-2 mt-4 text-sm font-semibold text-gray-900">Home Capture</p>
        <div className="rounded-[4px] border border-gray-200 p-3">
          {captured ? (
            <div>
              <div className="relative inline-flex">
                <div className="flex h-16 w-20 items-center justify-center rounded-[4px] bg-gray-100 text-gray-400">
                  <Icon name="camera" className="h-6 w-6" />
                </div>
                <button
                  type="button"
                  onClick={() => setCaptured(false)}
                  aria-label="Remove photo"
                  className="absolute -left-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-white"
                >
                  <Icon name="close" className="h-3 w-3" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => setCaptured(true)}
                className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-rose-600 hover:text-rose-700"
              >
                <Icon name="plus" className="h-4 w-4" />
                Capture New Image
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setCaptured(true)}
              className="flex items-center gap-1.5 text-sm font-semibold text-rose-600 hover:text-rose-700"
            >
              <Icon name="plus" className="h-4 w-4" />
              Capture Visited Home
            </button>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <button
            type="button"
            onClick={handleNext}
            disabled={!canProceed}
            className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-700 active:bg-rose-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          >
            Next
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="w-full rounded-full py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 active:bg-rose-100 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
